// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

type NavLink = {
  label: string;
  href: string;
};

type NavBarProps = {
  links: NavLink[];
  logoText?: string;
};

export default function NavBar({ links, logoText = "Auralis" }: NavBarProps) {
  return (
    <nav className="navbar font-geist sticky top-0 z-50 flex items-center justify-between px-6 py-4 h-21 border-b bg-background">
      <div className="flex gap-20">
      <div className="flex items-center  gap-4">
      <span className="font-extrabold text-lg text-[#18181B]">{logoText}</span>
      </div>
        <ul className="flex items-center gap-6 text-[#71717A]">
          {links.map((link: NavLink) => (
            <li key={link.href}>
              <a href={link.href} className="text-medium font-medium opacity-100">
                {link.label}
              </a>
            </li> 
          ))}
        </ul>
        </div>
        {/* CTA */}
        <button className="items-center bg-black text-sm text-white font-medium px-3 h-9 rounded-2xl"> Sign up</button>
    </nav>
  );
}
