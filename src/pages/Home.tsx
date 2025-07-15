import React from "react"

const Home: React.FC = () => {
	return (
		<div className="bg-stone-50 text-black min-h-screen pb-24 pt-32 px-4 sm:pt-96">
			<div className="container mx-auto max-w-4xl text-center">
				<h1 className="text-4xl font-bold my-8">
					The best plant event of the summer is back!
				</h1>
				<h2 className="text-3xl uppercase my-6">July 19th & 20th, 2025</h2>
				<p className="text-lg mb-12 text-gray-700">
					Join us for a weekend of plant appreciation, education, and community
					at the Rocky Mountain Plant Show!
				</p>
				<h2 className="text-4xl font-bold text-black uppercase pt-10">
					Discover a Rare Plant Paradise!
				</h2>
				<p className="max-w-3xl mx-auto text-lg">
					Join fellow plant lovers for a vibrant weekend at our second annual
					Rocky Mountain Plant Show, a must-attend event for enthusiasts and
					collectors alike. Explore an extraordinary selection of exotic and
					rare plants, brought to you by top vendors from across the country and
					around the globe. Whether you’re a seasoned botanist or just starting
					your plant journey, this is one of the year’s most anticipated
					gatherings — full of beauty, knowledge, and green inspiration!
				</p>
			</div>

			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold text-black uppercase pt-10">
					Photos from Last Year's Event???
				</h2>
			</div>
		</div>
	)
}

export default Home
