import React from "react"

const About: React.FC = () => {
	return (
		<main className="bg-stone-50 text-black min-h-screen pb-24 pt-32 px-4 sm:pt-96">
			<section className="container mx-auto max-w-4xl text-center">
				<h1 className="text-4xl font-bold my-8">
					About the Rocky Mountain Plant Show
				</h1>
				<hr className="border-t-2 border-black w-24 mx-auto mb-8" />

				<p className="text-lg mb-12 text-gray-700">
					Welcome to the Rocky Mountain Plant Show — where plant enthusiasts,
					vendors, and collectors come together to celebrate our shared love of
					greenery. From rare tropicals to hardy natives, our show brings you
					the very best that the plant world has to offer.
				</p>

				<p className="text-lg mb-12 text-gray-700">
					We’re passionate about building a vibrant community that fosters
					connections between growers, makers, and plant lovers of all kinds.
					Whether you’re looking to expand your collection, learn something new,
					or simply soak up the atmosphere, there’s something here for everyone.
				</p>

				<p className="text-lg mb-12 text-gray-700">
					Thank you for being part of our journey — we can’t wait to grow with
					you!
				</p>
			</section>
		</main>
	)
}

export default About
