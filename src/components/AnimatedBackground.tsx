interface AnimatedBackgroundProps {
  position?: "fixed" | "absolute";
  className?: string;
}

const AnimatedBackground = ({ position = "fixed", className = "" }: AnimatedBackgroundProps) => {
  const base = "pointer-events-none inset-0 overflow-hidden";
  const positionClass = position === "fixed" ? "fixed z-10" : "absolute z-0";
  const containerClass = `${base} ${positionClass} ${className}`.trim();

  return (
    <div className={containerClass}>
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300/10 via-transparent to-transparent dark:from-sky-400/15" />
    </div>
  );
};

export default AnimatedBackground;
