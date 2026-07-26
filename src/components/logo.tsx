import velLogoUrl from "../assets/vel-logo.svg"
import nexusLogoUrl from "../assets/nexus-logo.svg"
import luminaLogoUrl from "../assets/lumina-logo.svg"
import stackLogoUrl from "../assets/stack-logo.svg"
import quantaLogoUrl from "../assets/quanta-logo.svg"
import orbitalLogoUrl from "../assets/orbital-logo.svg"

const logos =[
  {name: "VELOCITY",  src : velLogoUrl },
  {name: "NEXUS",  src : nexusLogoUrl  },
  {name: "LUMINA",  src : luminaLogoUrl},
  {name: "STACK",  src : stackLogoUrl },
  {name: "QUANTA",  src : quantaLogoUrl },
  {name: "ORBITAL",  src : orbitalLogoUrl }
]

export default function LogoMarquee() {
  return (
    <div className="py-4 scroll-fade-x overflow-hidden">
      <div className="flex  w-max animate-marquee">
        {[...logos, ...logos].map((logo, i) => (
          <span key={i} className="font-bold flex items-center gap-2 px-13 shrink-0">
            <img src={logo.src} alt= {logo.name} className="h-6"/>
            {logo.name}
          </span>
        ))}
      </div>
    </div>
  );
}