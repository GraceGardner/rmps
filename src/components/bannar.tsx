import FbIcon from "../assets/fb-white.svg"
import InstaIcon from "../assets/ig-wht.svg"

export default function Bannar() {
	return (
		<header className="bg-black text-white w-full flex items-center justify-between px-4 py-3">
			<div className="flex items-center">
				<a
					href="https://www.facebook.com/profile.php?id=61558634189443&mibextid=wwXIfr&mibextid=wwXIfr"
					target="_blank"
					rel="noopener noreferrer"
					className="h-5 w-5 mr-2 inline-block"
				>
					<img src={FbIcon} alt="Facebook Icon" />
				</a>
				<a
					href="https://www.instagram.com/rockymountainplantshow?igsh=MWk2dmwwMGIwcGNuaw=="
					target="_blank"
					rel="noopener noreferrer"
					className="h-7 w-7 mr-2 inline-block"
				>
					<img src={InstaIcon} alt="Instagram Icon" />
				</a>
			</div>
			<a
				href="https://www.tickettailor.com/events/rockymountainplantshow"
				target="_blank"
				className="font-light hover:text-gray-300 hover:underline uppercase transition-colors duration-300"
			>
				BUY TICKETS
			</a>
		</header>
	)
}
