import React, { useState } from "react"
import Logo from "../assets/logo.png"
import FbIcon from "../assets/fb-white.svg"
import InstaIcon from "../assets/ig-wht.svg"

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
	{ label: "Vendors", href: "/vendors" },
	{ label: "FAQ", href: "/faq" },
]

const MobileNav: React.FC = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<header className="fixed top-0 left-0 w-full z-50 bg-black text-white flex justify-between items-start p-4 sm:hidden">
				<div className="flex">
					<img src={Logo} alt="Logo" className="h-20 pr-6" />
					<div>
						<p className="tracking-widest text-3xl font-light">
							ROCKY MOUNTAIN
						</p>
						<p className="tracking-widest text-2xl font-thin">PLANT SHOW</p>
					</div>
				</div>
				<button
					onClick={() => setOpen(true)}
					className="text-white text-4xl font-thin"
					aria-label="Open menu"
				>
					☰
				</button>
			</header>
			{open && (
				<div className="fixed gap-10 inset-0 z-50 bg-black text-white flex flex-col items-center justify-center space-y-6 uppercase tracking-widest font-light text-2xl p-4">
					<button
						onClick={() => setOpen(false)}
						className="absolute top-4 right-4 text-5xl font-thin"
						aria-label="Close menu"
					>
						×
					</button>
					<div className="flex flex-col items-center space-y-1">
						<img src={Logo} alt="Logo" className="h-20" />
						<p className="text-2xl font-light">ROCKY MOUNTAIN</p>
						<p className="text-xl font-thin">PLANT SHOW</p>
					</div>
					<nav className="flex flex-col space-y-4 text-center">
						{navItems.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
								className="hover:text-gray-300 hover:underline transition-colors"
							>
								{link.label}
							</a>
						))}
					</nav>
					<div className="flex flex-col items-center space-x-4 mt-4">
						<a
							href="https://www.tickettailor.com/events/rockymountainplantshow"
							target="_blank"
							rel="noopener noreferrer"
							className="uppercase font-light mt-4 hover:text-gray-300 hover:underline transition-colors"
						>
							Buy Tickets
						</a>
						<div className="flex space-x-4 mt-4">
							<a
								href="https://www.facebook.com/profile.php?id=61558634189443&mibextid=wwXIfr"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
								className="inline-block"
							>
								<img src={FbIcon} alt="Facebook" className="h-6 w-6" />
							</a>
							<a
								href="https://www.instagram.com/rockymountainplantshow?igsh=MWk2dmwwMGIwcGNuaw=="
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								className="inline-block"
							>
								<img src={InstaIcon} alt="Instagram" className="h-6 w-6" />
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default MobileNav
