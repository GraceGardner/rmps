import React, { useEffect, useState } from "react"
import Logo from "../assets/logo.png"
import Bannar from "./bannar"

type NavItem = {
	label: string
	href: string
}

const navItems: NavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
	{ label: "Vendors", href: "/vendors" },
	{ label: "FAQ", href: "/faq" },
]

const Navbar: React.FC<{ sticky?: boolean }> = ({ sticky }) => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<header
			className={`bg-black text-white ${
				sticky ? "fixed top-0 w-full z-50" : ""
			} ${
				scrolled ? "bg-opacity-80 backdrop-blur" : ""
			} transition-all duration-700 ease-in-out`}
		>
			<Bannar />
			<div
				className={`container mx-auto flex items-center flex-col px-4 transition-all duration-700 ease-in-out pb-3 ${
					scrolled ? "pt-0" : "pt-3"
				}`}
			>
				<div
					className={`text-lg font-bold flex items-center space-x-4 flex-col transform transition-transform transition-opacity duration-700 ease-in-out ${
						scrolled
							? "opacity-0 -translate-y-10 pointer-events-none h-0 overflow-hidden"
							: "opacity-100 translate-y-0"
					}`}
				>
					<img src={Logo} alt="Logo" className="h-40" />
					<p className="tracking-widest text-5xl font-light">ROCKY MOUNTAIN</p>
					<p className="tracking-widest text-3xl font-thin">PLANT SHOW</p>
				</div>
				<hr
					className={`border-t-2 border-white mb-4 mx-auto transition-all duration-700 ease-in-out ${
						scrolled ? "w-full mt-0" : "mt-4 w-1/2"
					}`}
				/>
				<div className="w-full text-center">
					<nav className="space-x-14 uppercase tracking-widest font-light text-lg">
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="hover:text-gray-300 hover:underline transition-colors duration-500"
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Navbar
