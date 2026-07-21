import './App.css'
import NavBar from './components/NavBar'


const navlinks = [
  {label: 'Home', href: '/'},
  {label: 'About', href: '/about'}
]

function App() {
  return <NavBar links= {navlinks} />
}


export default App
