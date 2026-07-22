import "./App.css";
import NavBar from "./components/NavBar";

const navlinks = [
  { label: "Auralis Studio", href: "/" },
  { label: "Auralis Agents", href: "/agent" },
  { label: "Auralis API", href: "/api" },
  { label: "Resources", href: "/resource" },
  { label: "Enteprise", href: "/enteprise" },
  { label: "Pricing", href: "/pricing"},
];

function App() {
  return (
    <div className="min-h-screen bg-[F3F2EF]">
  <NavBar links={navlinks} />
  </div>
  )
}

export default App;
