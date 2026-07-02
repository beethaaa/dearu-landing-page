const GITHUB_RELEASES_API_URL =
  "https://api.github.com/repos/beethaaa/lovealarm-fe/releases";
const GITHUB_LATEST_RELEASE_API_URL = `${GITHUB_RELEASES_API_URL}/latest`;

type GithubAsset = {
  name: string;
  browser_download_url: string;
  download_count: number;
};

type GithubRelease = {
  tag_name: string;
  assets: GithubAsset[];
};

export type ApkDownloadVersion = {
  version: string;
  file: string;
  downloads: number;
  url: string;
};

export type TotalApkDownloads = {
  totalDownloads: number;
  versions: ApkDownloadVersion[];
};

const isGithubAsset = (asset: unknown): asset is GithubAsset => {
  if (typeof asset !== "object" || asset === null) return false;

  const value = asset as Partial<GithubAsset>;
  return (
    typeof value.name === "string" &&
    typeof value.browser_download_url === "string" &&
    typeof value.download_count === "number"
  );
};

const isGithubRelease = (release: unknown): release is GithubRelease => {
  if (typeof release !== "object" || release === null) return false;

  const value = release as Partial<GithubRelease>;
  return typeof value.tag_name === "string" && Array.isArray(value.assets);
};

export async function getLatestApkUrl(signal?: AbortSignal) {
  const response = await fetch(GITHUB_LATEST_RELEASE_API_URL, { signal });
  if (!response.ok) throw new Error("Failed to fetch latest release");

  const release: unknown = await response.json();
  if (!isGithubRelease(release)) return "";

  const apk = release.assets
    .filter(isGithubAsset)
    .find((asset) => asset.name.endsWith(".apk"));

  return apk?.browser_download_url ?? "";
}

export async function getTotalApkDownloads(
  signal?: AbortSignal,
): Promise<TotalApkDownloads> {
  let page = 1;
  let totalDownloads = 0;
  const versions: ApkDownloadVersion[] = [];

  while (true) {
    const response = await fetch(
      `${GITHUB_RELEASES_API_URL}?per_page=100&page=${page}`,
      { signal },
    );

    if (!response.ok) throw new Error("Failed to fetch releases");

    const payload: unknown = await response.json();
    if (!Array.isArray(payload) || payload.length === 0) break;

    payload.filter(isGithubRelease).forEach((release) => {
      release.assets
        .filter(isGithubAsset)
        .filter((asset) => asset.name.endsWith(".apk"))
        .forEach((asset) => {
          totalDownloads += asset.download_count;
          versions.push({
            version: release.tag_name,
            file: asset.name,
            downloads: asset.download_count,
            url: asset.browser_download_url,
          });
        });
    });

    page += 1;
  }

  return {
    totalDownloads,
    versions,
  };
}
