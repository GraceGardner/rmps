import React from "react"

const Contact: React.FC = () => {
	return (
		<main className="bg-white text-black min-h-screen p-6 pt-32 sm:pt-96">
			<h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
			<div className="max-w-xl mx-auto">
				<p className="text-lg mb-6">
					Have questions about the Rocky Mountain Plant Show? Check out our FAQ
					page or get in touch with us!
				</p>
				<p className="text-lg mb-6">
					We are not currently accepting vendor applications.
				</p>
				<form
					className="space-y-4"
					action="mailto:your-email@example.com"
					method="POST"
					encType="text/plain"
				>
					<div>
						<label htmlFor="name" className="block mb-1 font-medium">
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="w-full border border-gray-300 rounded px-3 py-2"
							placeholder="Your Name"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block mb-1 font-medium">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="w-full border border-gray-300 rounded px-3 py-2"
							placeholder="you@example.com"
						/>
					</div>
					<div>
						<label htmlFor="message" className="block mb-1 font-medium">
							Message
						</label>
						<textarea
							name="message"
							id="message"
							rows={5}
							className="w-full border border-gray-300 rounded px-3 py-2"
							placeholder="Your message..."
						></textarea>
					</div>
					<button
						type="submit"
						className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors"
					>
						Send Message
					</button>
				</form>
			</div>
		</main>
	)
}

export default Contact
