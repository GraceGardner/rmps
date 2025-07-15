import React from "react"
import Logo from "../assets/logo.png"
import FbIcon from "../assets/fb-white.svg"
import InstaIcon from "../assets/ig-wht.svg"

const Footer: React.FC = () => (
	<footer className="bg-black text-white py-8 px-6">
		<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
			<div className="flex flex-col items-center">
				<img src={Logo} alt="Logo" className="h-16 mb-4" />
				<p className="tracking-widest font-light text-xl">ROCKY MOUNTAIN</p>
				<p className="tracking-widest font-thin text-lg">PLANT SHOW</p>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col items-start">
					<p className="font-bold">Location:</p>
					<p className="font-thin">Family Resource Pavillion</p>
					<p className="font-thin">9700 E. Easter Lane,</p>
					<p className="font-thin">Centennial, CO 80112</p>
				</div>
				<div className="flex flex-col items-start">
					<p className="font-bold">Hours:</p>
					<p className="font-thin">July 19: 10am - 6pm</p>
					<p className="font-thin">July 20: 10am - 5pm</p>
				</div>
			</div>
			<div className="flex flex-row items-center sm:items-end space-y-4 gap-6">
				<a
					href="https://www.facebook.com/rockymountainplantshow"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
				>
					<img
						src={FbIcon}
						alt="Facebook"
						className="h-6 w-6 hover:opacity-80 transition-opacity"
					/>
				</a>
				<a
					href="https://www.instagram.com/rockymountainplantshow"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<img
						src={InstaIcon}
						alt="Instagram"
						className="h-6 w-6 hover:opacity-80 transition-opacity"
					/>
				</a>
				<a
					href="https://www.tickettailor.com/events/rockymountainplantshow"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-4 uppercase tracking-widest font-light text-sm border border-white py-2 px-4 hover:bg-white hover:text-black transition-colors"
				>
					Buy Tickets
				</a>
			</div>
		</div>
		<hr className="border-t border-gray-700 my-8 mx-6" />
		<div className="text-center text-xs tracking-wide">
			© {new Date().getFullYear()} Rocky Mountain Plant Show. All rights
			reserved.
		</div>
	</footer>
)

export default Footer
