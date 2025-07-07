import React from "react"

import plt1 from "../assets/vendors/plt1.jpg"

type Vendor = {
	name: string
	image: string
	link: string
}

const vendors: Vendor[] = [
	{
		name: "Succulent Sisters",
		image: plt1,
		link: "https://succulentsisters.com",
	},
	{ name: "The Orchid House", image: plt1, link: "https://orchidhouse.com" },
	{ name: "Cactus Kingdom", image: plt1, link: "https://cactuskingdom.com" },
	{ name: "Fern & Fiddle", image: plt1, link: "https://fernfiddle.com" },
	{ name: "Bonsai Masters", image: plt1, link: "https://bonsaimasters.com" },
]

const Vendors: React.FC = () => (
	<main className="bg-white text-black min-h-screen p-6 pt-96">
		<h1 className="text-4xl font-bold mb-8 text-center">Meet Our Vendors</h1>
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{vendors.map((vendor, index) => (
				<a
					key={index}
					href={vendor.link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-center group"
				>
					<img
						src={vendor.image}
						alt={vendor.name}
						className="rounded shadow-md mb-2 w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
					/>
					<h2 className="text-xl font-semibold text-green-800 group-hover:underline">
						{vendor.name}
					</h2>
				</a>
			))}
		</div>
	</main>
)

export default Vendors
