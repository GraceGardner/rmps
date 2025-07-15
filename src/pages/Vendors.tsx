import React from "react"

import te from "../assets/vendors/te.jpg"
import ccc from "../assets/vendors/ccc.jpg"
import dmsg from "../assets/vendors/dmsg-1.png"
import ff from "../assets/vendors/ff.png"
import frg from "../assets/vendors/frg.jpg"
import lwp from "../assets/vendors/lwp.jpg"
import mike from "../assets/vendors/mike.png"
import tbp from "../assets/vendors/tbp.jpg"
import tfsa from "../assets/vendors/tfsa.jpg"
import rps from "../assets/vendors/rps.jpg"

type Vendor = {
	name: string
	image: string
	link: string
}

const vendors: Vendor[] = [
	{
		name: "Tropicals From South America",
		image: tfsa,
		link: "https://tropicalsplants.com/",
	},
	{
		name: "Tropical Exotique",
		image: te,
		link: "https://tropicalexotique.com",
	},
	{
		name: "Rare Plant Suite",
		image: rps,
		link: "https://instagram.com/rareplantsuite/",
	},
	{
		name: "Live With Plants (Thailand)",
		image: lwp,
		link: "https://facebook.com/sarutsuwanpakde",
	},
	{
		name: "Foliage Fancies",
		image: ff,
		link: "https://instagram.com/foliage_fancies",
	},
	{
		name: "Corra's Concrete Creations",
		image: ccc,
		link: "https://instagram.com/concrete_corra",
	},
	{ name: "The Bronze Petal", image: tbp, link: "https://thebronzepetal.com" },
	{
		name: "Front Range Gardens",
		image: frg,
		link: "https://frontrangegardens.com",
	},
	{
		name: "D&M Secret Garden",
		image: dmsg,
		link: "https://instagram.com/dmsecretgarden",
	},
	{
		name: "Mike's Nursery aka mda1635",
		image: mike,
		link: "https://instagram.com/mda1635",
	},
]

const Vendors: React.FC = () => (
	<main className="bg-white text-black min-h-screen pt-32 sm:pt-96 p-6">
		<h1 className="text-4xl font-bold my-8 text-center">Meet Our Vendors</h1>

		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
			{vendors.map((vendor, index) => (
				<a
					key={index}
					href={vendor.link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-center group"
				>
					<div
						className="
							w-full px-6 mb-2 overflow-hidden bg-white flex items-center justify-center
							sm:w-64 sm:h-64 sm:px-0 mx-auto
						"
					>
						<img
							src={vendor.image}
							alt={vendor.name}
							className="
								w-full h-auto max-h-96 object-contain transform 
								group-hover:scale-105 transition-transform duration-300
							"
						/>
					</div>
					<h2 className="uppercase font-medium text-black group-hover:underline">
						{vendor.name}
					</h2>
				</a>
			))}
		</div>
	</main>
)

export default Vendors
