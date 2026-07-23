const logos = ["VELOCITY", "NEXUS", "LUMINA", "STACK", "QUANTA", "ORBITAL"];

export default function LogoMarquee() {
  return (
    <div className="py-4 scroll-fade-x overflow-hidden">
      <div className="flex  w-max animate-marquee">
        {[...logos, ...logos].map((logo, i) => (
          <span key={i} className="font-bold px-13 shrink-0">
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}