import "./App.css";
import NavBar from "./components/NavBar";
import Hero from './components/Hero'
import Product from "./components/Product";
import Client from "./components/client"
import Logo from "./components/logo"
import System from "./components/System"
import AuralisStudio from "./components/AuralisStudio"
import AuralisAgent from "./components/AuralisAgents"

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
    <div className="scroll-smooth min-h-screen bg-[F3F2EF]">
  <NavBar links={navlinks} />
  <Hero />
  <Product />
  <Client />
  <Logo />
  <System />
  <AuralisStudio />
  <AuralisAgent />
  </div>
  )
}

export default App;
