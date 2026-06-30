// 3D Magical Chain - Heavily Optimized for 144fps (Zero lag)
// - No backdrop-blur
// - Native CSS animation for spinning
// - Reduced DOM nodes (2 chains instead of 3, thicker links)
export const MagicalChain = ({ radius, count, color }: { radius: number, count: number, color: string }) => {
  return (
    <div className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transformStyle: 'preserve-3d' }}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i * 360) / count;
        // i % 2 === 0 is flat on the XY plane, i % 2 === 1 stands perpendicular (rotateY(90deg))
        // This creates a perfect interlocking 3D physical chain structure
        return (
          <div
            key={i}
            className="absolute rounded-full border-[3px]"
            style={{
              width: '24px',
              height: '48px',
              marginTop: '-24px',
              marginLeft: '-12px',
              borderColor: color,
              backgroundColor: 'rgba(15, 0, 30, 0.9)', // Solid dark core to hide links behind and avoid expensive blending
              boxShadow: `0 0 15px ${color}, inset 0 0 8px ${color}`,
              transform: `rotateZ(${angle}deg) translateX(${radius}px) rotateY(${i % 2 === 0 ? 0 : 90}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Inner crystalline highlight for 3D depth */}
            <div className="absolute inset-[2px] rounded-full border border-white/50" style={{ transform: 'translateZ(1px)' }}></div>
          </div>
        );
      })}
    </div>
  );
};
