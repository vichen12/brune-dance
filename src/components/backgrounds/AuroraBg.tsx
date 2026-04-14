const PARTICLES = [
  { size: 4,  left: "7%",  bottom: "5%",  dur: 18, delay: 0   },
  { size: 3,  left: "18%", bottom: "15%", dur: 22, delay: 3   },
  { size: 5,  left: "32%", bottom: "8%",  dur: 15, delay: 6   },
  { size: 3,  left: "48%", bottom: "20%", dur: 20, delay: 1.5 },
  { size: 4,  left: "63%", bottom: "3%",  dur: 17, delay: 9   },
  { size: 6,  left: "75%", bottom: "12%", dur: 24, delay: 4   },
  { size: 3,  left: "88%", bottom: "18%", dur: 19, delay: 7   },
  { size: 4,  left: "55%", bottom: "30%", dur: 21, delay: 2   },
];

export function AuroraBg() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* Aurora blobs */}
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-blob aurora-blob-4" />
      <div className="aurora-blob aurora-blob-5" />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="bg-particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            bottom: p.bottom,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
