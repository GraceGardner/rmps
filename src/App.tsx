import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import type { FC } from "react"
import Nav from "./components/navigation"
import Home from "./pages/Home"
import FAQ from "./pages/FAQ"
import Vendors from "./pages/Vendors"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Footer from "./components/footer"

const App: FC = () => {
	useEffect(() => {
		const script = document.createElement("script")
		script.src = "https://cdn.tickettailor.com/js/widgets/min/widget.js"
		script.async = true
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<Router>
			<div className="bg-stone-50 text-black min-h-screen">
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/vendors" element={<Vendors />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
