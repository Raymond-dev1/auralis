

type NavLink = {
    label: string;
    href: string;
}

type NavBarProps = {
    links: NavLink[];
    logoText? :string;
}


export default function NavBar({links, logoText = 'Auralis' }: NavBarProps) {
  return (
    <nav className="navbar  flex justify-center sticky top-0 right-0 bg-amber-400">
      <div className="text-lg font-semibold bg-amber-950 ">{logoText}</div>

      <ul className="flex items-center gap-6">
        {links.map((link:any) => (
          <li key={link.href}>
            <a href={link.href} className="text-sm hover:opacity-70">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
 