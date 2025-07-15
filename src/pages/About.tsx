import React from "react"

const About: React.FC = () => {
	return (
		<main className="bg-white text-black min-h-screen pt-32 sm:pt-48 px-6">
			<section className="max-w-3xl mx-auto text-center">
				<h1 className="text-4xl font-light tracking-widest mb-6">
					About the Rocky Mountain Plant Show
				</h1>
				<hr className="border-t-2 border-black w-24 mx-auto mb-8" />

				<p className="text-lg font-thin tracking-wider leading-relaxed mb-6">
					Welcome to the Rocky Mountain Plant Show — where plant enthusiasts,
					vendors, and collectors come together to celebrate our shared love of
					greenery. From rare tropicals to hardy natives, our show brings you
					the very best that the plant world has to offer.
				</p>

				<p className="text-lg font-thin tracking-wider leading-relaxed mb-6">
					We’re passionate about building a vibrant community that fosters
					connections between growers, makers, and plant lovers of all kinds.
					Whether you’re looking to expand your collection, learn something new,
					or simply soak up the atmosphere, there’s something here for everyone.
				</p>

				<p className="text-lg font-thin tracking-wider leading-relaxed">
					Thank you for being part of our journey — we can’t wait to grow with
					you!
				</p>
			</section>
		</main>
	)
}

export default About
