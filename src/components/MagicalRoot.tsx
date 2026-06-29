// Generates a true 3D realistic organic tree root
export const MagicalRoot = ({ 
  segments = 40, 
  length = 200, 
  seed = 1 
}: { 
  segments?: number, 
  length?: number, 
  seed?: number 
}) => {
  return (
    <div className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transformStyle: 'preserve-3d' }}>
      {Array.from({ length: segments }).map((_, i) => {
        const progress = i / (segments - 1);
        const thickness = 22 * Math.pow(1 - progress, 1.2) + 2; 
        
        // 3D winding path
        const x = progress * -length; // Grows leftwards
        const y = Math.sin(progress * Math.PI * 2.5 + seed) * 35 * Math.sin(progress * Math.PI); // wavy, tapers at ends
        const z = Math.cos(progress * Math.PI * 2 + seed * 2) * 45 * (1 - progress * 0.5); // wraps around Z axis
        
        // Realistic woody brown palette
        const baseColor = "#4a2c1a"; // Rich bark brown
        const darkColor = "#1a0b04"; // Deep shadow (bottom)
        const highlightColor = "#73492f"; // Bark highlight (top)
        
        return (
          <div
            key={i}
            className="absolute rounded-full flex items-center justify-center"
            style={{
              width: `${thickness}px`,
              height: `${thickness}px`,
              marginTop: `-${thickness / 2}px`,
              marginLeft: `-${thickness / 2}px`,
              backgroundColor: baseColor, 
              // Bark texture using inset directional shadows to simulate 3D cylinder lighting
              boxShadow: `
                inset 2px -4px 8px ${darkColor}, 
                inset -2px 3px 6px ${highlightColor},
                0 3px 6px rgba(0,0,0,0.6)
              `,
              transform: `translate3d(${x}px, ${y}px, ${z}px) rotateX(${progress * 360}deg) rotateY(${seed * 45}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
             {/* Realistic Twigs/Roots branching off */}
             {i % 7 === 0 && i > 3 && i < segments - 8 && (
               <div 
                 className="absolute origin-bottom rounded-t-full"
                 style={{
                   width: `${Math.max(2, thickness * 0.2)}px`,
                   height: `${thickness * 1.5}px`,
                   backgroundColor: highlightColor,
                   transform: `translateY(-100%) rotateZ(${((i + seed) * 37) % 360}deg) rotateX(45deg)`,
                   boxShadow: `inset 1px -1px 3px ${darkColor}`,
                 }}
               />
             )}
             
             {/* Small green leaves/moss occasionally */}
             {i % 11 === 0 && i < segments - 10 && (
                <div 
                  className="absolute origin-bottom rounded-full rounded-tr-none"
                  style={{
                    width: `${Math.max(4, thickness * 0.35)}px`,
                    height: `${Math.max(6, thickness * 0.6)}px`,
                    backgroundColor: "#3A5F0B", // Leaf green
                    transform: `translateY(-120%) translateX(100%) rotateZ(${((i + seed * 2) * 51) % 360}deg) rotateX(-30deg)`,
                    boxShadow: `inset -1px -1px 4px #142401, 0 2px 4px rgba(0,0,0,0.4)`,
                  }}
                />
             )}
          </div>
        );
      })}
    </div>
  );
};
