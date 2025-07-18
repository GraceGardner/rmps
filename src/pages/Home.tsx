import React from "react"

import map from "$assets/map.png"
import marble from "$assets/plants/marble.png"
import monstera from "$assets/plants/monstera.png"

const Home: React.FC = () => {
	return (
		<div className="bg-stone-50 text-black min-h-screen pb-24 pt-32 px-4 sm:pt-96">
			<div className="container mx-auto max-w-4xl space-y-16">
				{/* Hero Section */}
				<div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 pt-4">
					<div className="flex-1 text-center md:pt-4 md:text-left">
						<h1 className="text-3xl font-bold uppercase mb-4">
							The best plant event of the summer is back!
						</h1>
						<h2 className="text-2xl uppercase mb-6">July 19th & 20th, 2025</h2>
						<p className="text-lg">
							Join us for a weekend of plant appreciation, education, and
							community at the Rocky Mountain Plant Show!
						</p>
					</div>
					<div className="w-full max-w-sm aspect-square overflow-hidden rounded-md shadow">
						<img
							src={monstera}
							alt="Monstera plant"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Rare Plant Section */}
				<div className="flex flex-col-reverse sm:flex-row items-center gap-8">
					<div className="w-full max-w-sm aspect-square overflow-hidden rounded-md shadow">
						<img
							src={marble}
							alt="Carmel marble plant"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex-1 text-center md:text-left">
						<h2 className="text-3xl font-bold uppercase mb-4">
							Discover a Rare Plant Paradise!
						</h2>
						<p className="text-lg">
							Join fellow plant lovers for a vibrant weekend at our second
							annual Rocky Mountain Plant Show — a must-attend event for
							enthusiasts and collectors alike. Explore an extraordinary
							selection of exotic and rare plants, brought to you by top vendors
							from across the country and around the globe. Whether you’re a
							seasoned botanist or just starting your plant journey, this is one
							of the year’s most anticipated gatherings — full of beauty,
							knowledge, and green inspiration!
						</p>
					</div>
				</div>

				{/* Location Section */}
				<div className="flex flex-col sm:flex-row gap-8">
					<div className="flex-1 text-center md:pt-4 md:text-left">
						<h3 className="text-3xl font-bold uppercase mb-4">Location</h3>
						<p className="text-lg">Family Resource Pavilion</p>
						<p className="text-lg">9700 E. Easter Lane,</p>
						<p className="text-lg mb-4">Centennial, CO 80112</p>
						<a
							href="https://maps.google.com/?q=9700+E+Easter+Ln+Centennial+CO+80112"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block mt-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors"
						>
							View on Google Maps
						</a>
					</div>
					<a
						href="https://maps.google.com/?q=9700+E+Easter+Ln+Centennial+CO+80112"
						target="_blank"
						rel="noopener noreferrer"
						className="flex-shrink-0"
					>
						<div className="w-full max-w-sm aspect-square overflow-hidden rounded-md shadow">
							<img
								src={map}
								alt="Map showing Family Resource Pavilion"
								className="w-full h-full object-cover"
							/>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Home
