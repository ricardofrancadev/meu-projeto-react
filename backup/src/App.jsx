import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Times from './pages/Times'
import Contato from './pages/Contato'
export default function App() {
return (
<div>
<nav style={{ marginBottom: 20 }}>
<Link to="/">Home</Link> |{" "}
<Link to="/sobre">Sobre</Link> |{" "}
<Link to="/times">Times</Link> |{" "}
<Link to="/contato">Contato</Link>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/sobre" element={<Sobre />} />
<Route path="/times" element={<Times />} />
<Route path="/contato" element={<Contato />} />
</Routes>
</div>
)
}
