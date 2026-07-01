import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Download, Heart, Loader2, MessageCircle, RefreshCw, Send } from "lucide-react";

type ApiComment =
  | string
  | {
      id?: string | number;
      _id?: string | number;
      comment?: unknown;
      content?: unknown;
      text?: unknown;
      createdAt?: string;
      created_at?: string;
    };

type CommentItem = {
  id: string;
  text: string;
  createdAt?: string;
};

const API_BASE_URL = "https://lovealarm-be-sp9u.onrender.com";
const ANDROID_RELEASE_API_URL = "https://api.github.com/repos/beethaaa/lovealarm-fe/releases/tags/latest-android";

const readText = (comment: ApiComment) => {
  if (typeof comment === "string") return comment;

  const value = comment.comment ?? comment.content ?? comment.text;
  return typeof value === "string" ? value : "";
};

const formatCommentDate = (value?: string) => {
  if (!value) return "Just now";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Just now";

  return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
};

const normalizeComments = (payload: unknown): CommentItem[] => {
  const source = Array.isArray(payload)
    ? payload
    : typeof payload === "object" && payload !== null && "data" in payload && Array.isArray((payload as { data?: unknown }).data)
      ? (payload as { data: ApiComment[] }).data
      : typeof payload === "object" && payload !== null && "comments" in payload && Array.isArray((payload as { comments?: unknown }).comments)
        ? (payload as { comments: ApiComment[] }).comments
        : [];

  const normalized: CommentItem[] = [];

  source.forEach((item, index) => {
    const text = readText(item as ApiComment).trim();
    if (!text) return;

    const objectItem = typeof item === "object" && item !== null ? item as Exclude<ApiComment, string> : null;
    const createdAt = objectItem?.createdAt ?? objectItem?.created_at;
    const normalizedItem: CommentItem = {
      id: String(objectItem?.id ?? objectItem?._id ?? `${index}-${text}`),
      text,
    };

    if (createdAt) normalizedItem.createdAt = createdAt;
    normalized.push(normalizedItem);
  });

  return normalized;
};

const readDownloadCount = (payload: unknown) => {
  if (typeof payload !== "object" || payload === null || !("assets" in payload)) return null;

  const assets = (payload as { assets?: unknown }).assets;
  if (!Array.isArray(assets)) return null;

  return assets.reduce((total, asset) => {
    if (typeof asset !== "object" || asset === null || !("download_count" in asset)) return total;

    const downloadCount = (asset as { download_count?: unknown }).download_count;
    return typeof downloadCount === "number" ? total + downloadCount : total;
  }, 0);
};

const CommentSection = () => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [comment, setComment] = useState("");
  const [downloadCount, setDownloadCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloadCountLoading, setIsDownloadCountLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const remaining = useMemo(() => Math.max(0, 180 - comment.length), [comment.length]);

  const fetchComments = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/comments/`);
      if (!response.ok) throw new Error("Could not load comments");

      const payload: unknown = await response.json();
      setComments(normalizeComments(payload).reverse());
    } catch {
      setError("The whisper garden is quiet for a moment.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchComments();
  }, []);

  useEffect(() => {
    const fetchDownloadCount = async () => {
      try {
        const response = await fetch(ANDROID_RELEASE_API_URL);
        if (!response.ok) throw new Error("Could not load download count");

        const payload: unknown = await response.json();
        setDownloadCount(readDownloadCount(payload));
      } catch {
        setDownloadCount(null);
      } finally {
        setIsDownloadCountLoading(false);
      }
    };

    void fetchDownloadCount();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = comment.trim();
    if (!trimmed || isPosting) return;

    setIsPosting(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/comments/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: trimmed }),
      });

      if (!response.ok) throw new Error("Could not post comment");

      setComment("");
      await fetchComments();
    } catch {
      setError("Your whisper could not be sent. Please try again.");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-magic-glow/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-4xl text-center md:mb-20"
        >
          <div className="mb-6 flex items-center justify-center gap-4 md:gap-7">
            <img src="/assets/line.webp" alt="" className="h-auto w-24 rotate-180 opacity-75 drop-shadow-[0_0_12px_rgba(255,0,127,0.45)] md:w-40" />
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-soft-pink/82 md:text-sm">The Whispers</p>
            <img src="/assets/line.webp" alt="" className="h-auto w-24 opacity-75 drop-shadow-[0_0_12px_rgba(255,0,127,0.45)] md:w-40" />
          </div>
          <h3 className="font-cinzel text-3xl font-bold lowercase leading-tight tracking-[0.13em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.32)] md:text-5xl">
            A Garden of Whispers
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative grid gap-6 overflow-hidden rounded-[36px] border border-white/12 bg-[#10031a]/66 p-5 shadow-[0_32px_110px_rgba(0,0,0,0.46)] backdrop-blur-2xl md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_10%,rgba(255,136,204,0.18),transparent_36%),radial-gradient(ellipse_at_80%_85%,rgba(255,0,127,0.12),transparent_34%)]" />

        <div className="relative z-10 flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-deep-night/44 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-8">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-soft-pink/12 blur-3xl" />
          <img
            src="/assets/letter_rose.webp"
            alt=""
            className="absolute bottom-0 right-0 w-52 translate-x-8 translate-y-8 object-contain opacity-45 drop-shadow-[0_0_40px_rgba(255,136,204,0.35)] md:w-72"
          />

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-soft-pink/24 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-soft-pink/86">
              <MessageCircle className="h-4 w-4" />
              Comment
            </div>
            <h3 className="font-cinzel text-3xl font-bold leading-tight tracking-[0.13em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.32)] md:text-5xl">
              Leave a little whisper.
            </h3>
            <p className="mt-5 max-w-md text-base leading-8 text-pearl-pink/72">
              Share a thought for DearU, a wish for the app, or a tiny signal from your side of the story.
            </p>
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-soft-pink/20 bg-white/[0.07] px-4 py-2.5 text-pearl-pink shadow-[0_14px_42px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <Download className="h-4 w-4 text-soft-pink" />
              <span className="font-cinzel text-2xl font-bold leading-none tracking-widest text-white">
                {isDownloadCountLoading ? "..." : (downloadCount ?? 0).toLocaleString("en-US")}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-soft-pink/74">
                downloads
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 mt-10">
            <div className="rounded-[26px] border border-white/12 bg-white/5.5 p-3 shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 focus-within:border-soft-pink/45 focus-within:bg-white/8">
              <textarea
                value={comment}
                onChange={(event) => setComment(event.target.value.slice(0, 180))}
                placeholder="Write your whisper..."
                className="min-h-32 w-full resize-none rounded-2xl bg-transparent px-4 py-3 font-serif text-xl italic leading-8 text-white outline-none placeholder:text-pearl-pink/38"
              />
              <div className="flex items-center justify-between gap-4 px-4 pt-3">
                <span className="text-xs uppercase tracking-[0.22em] text-pearl-pink/42">
                  {remaining} left
                </span>
                <button
                  type="submit"
                  disabled={!comment.trim() || isPosting}
                  className="inline-flex items-center gap-2 rounded-full border border-magic-glow/30 bg-magic-glow/15 px-5 py-3 font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_14px_38px_rgba(255,0,127,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-magic-glow/60 hover:bg-magic-glow/22 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {isPosting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/4.5 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-soft-pink/72">Whisper list</p>
              <h4 className="mt-2 font-cinzel text-2xl font-bold lowercase tracking-widest text-white">
                Garden Notes
              </h4>
            </div>
            <button
              type="button"
              onClick={() => void fetchComments()}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/7 text-pearl-pink transition-all duration-300 hover:border-soft-pink/40 hover:bg-white/12 hover:text-white"
              aria-label="Refresh comments"
            >
              <RefreshCw className={`h-5 w-5 ${isLoading ? "animate-spin" : ""}`} />
            </button>
          </div>

          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-pearl-pink/52">
            {comments.length.toLocaleString("en-US")} comments
          </p>

          <div className="magical-scrollbar max-h-[520px] space-y-4 overflow-y-auto pr-2">
            {isLoading ? (
              <div className="flex min-h-56 items-center justify-center rounded-[24px] border border-white/10 bg-deep-night/38 text-pearl-pink/62">
                <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                Loading whispers...
              </div>
            ) : comments.length > 0 ? (
              comments.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.28) }}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-deep-night/42 px-5 py-4 text-left shadow-[0_16px_45px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-soft-pink/32 hover:bg-white/6.5"
                >
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-soft-pink/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 flex gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-soft-pink/20 bg-soft-pink/10 text-soft-pink">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="wrap-break-word font-serif text-lg italic leading-7 text-white/92">
                        {item.text}
                      </p>
                      <p className="mt-3 text-xs uppercase tracking-[0.22em] text-pink-100">
                        {formatCommentDate(item.createdAt)}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="flex min-h-56 items-center justify-center rounded-[24px] border border-white/10 bg-deep-night/38 px-6 text-center font-serif text-xl italic text-pearl-pink/62">
                No whispers yet. Yours can be the first.
              </div>
            )}
          </div>

          {error && (
            <p className="mt-4 rounded-2xl border border-magic-glow/20 bg-magic-glow/10 px-4 py-3 text-sm text-pearl-pink/86">
              {error}
            </p>
          )}
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommentSection;
