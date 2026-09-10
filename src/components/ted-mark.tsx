type TedMarkProps = {
  size?: number;
  variant?: "green" | "white";
};

export function TedMark({ size = 26, variant = "green" }: TedMarkProps) {
  const background = variant === "white" ? "#F8FAF7" : "#2EE59D";
  const color = variant === "white" ? "#111827" : "#053E37";
  const iconSize = Math.round(size * 0.72);

  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background,
        color,
        display: "grid",
        placeItems: "center",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
        <circle cx="11.2" cy="12.2" r="2.3" fill="currentColor" />
        <path d="M18.1 13.4 Q20.3 8.6 22.5 13.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" className="ted-wink-closed" />
        <circle cx="20.3" cy="12.2" r="2.3" fill="currentColor" className="ted-wink-open" />
        <path d="M9.5 20 Q16 25.5 22.5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </span>
  );
}
