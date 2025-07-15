import { useState } from "react"
import type { FC } from "react"
import Chevron from "../assets/chevron.svg"

const FAQ: FC = () => {
	const faqs = [
		{
			question: "What are VIP tickets?",
			answer:
				"VIP tickets provide early access to the event July 19th from 8am - 10am to avoid crowds. Cost for VIP tickets is $25 per person.",
		},
		{
			question: "What is the Rocky Mountain Plant Show?",
			answer:
				"The Rocky Mountain Plant Show is an annual event showcasing rare and exotic plants from around the world, featuring local vendors, workshops, and plant experts.",
		},
		{
			question: "Where should I park?",
			answer:
				"There is limited parking available at the venue. Overflow parking if available at the nearby church.",
		},
		{
			question: "Do I need to buy tickets in advance?",
			answer:
				"Tickets can be purchased in person or online. You can purchase tickets in advance to speed up entry. Tickets can be bought online through our TicketTailor page.",
		},
		{
			question: "Can I bring my own plants to trade or sell?",
			answer:
				"Unfortunately, personal plant sales or trades are not permitted at this event. Only registered vendors may sell plants.",
		},
		{
			question: "Is the event family-friendly?",
			answer:
				"Yes! We welcome plant lovers of all ages. If you're looking for the best time to come with your family, we highly recommend considering times outside of peak hours. Normally this would be mid-day - the end of the even on Saturday or anytime on Sunday.",
		},
		{
			question: "Is the event family-friendly?",
			answer:
				"If you're looking for the best time to come with your family, we highly recommend considering times outside of peak hours. Normally this would be mid-day - the end of the even on Saturday or anytime on Sunday.",
		},
		{
			question: "Is haggling allowed?",
			answer:
				"Haggling is not permitted at the event. All prices are set by the vendors. Some vendors may offer lower prices near the end of the event to clear out inventory, but this is at their discretion.",
		},
	]

	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<main className="bg-white text-black min-h-screen p-6 pt-32 sm:pt-96">
			<h1 className="text-4xl font-bold my-8">Frequently Asked Questions</h1>
			<div className="space-y-2">
				{faqs.map((faq, index) => (
					<div key={index} className="border-b pb-2">
						<button
							onClick={() => toggle(index)}
							className="flex w-full justify-between items-center text-left text-xl font-semibold py-2"
						>
							<span>{faq.question}</span>
							<img
								src={Chevron}
								alt="Toggle"
								className={`h-5 w-5 transition-transform duration-500 ${
									openIndex === index ? "rotate-180" : "rotate-0"
								}`}
							/>
						</button>
						{openIndex === index && (
							<p className="text-gray-700 mt-1">{faq.answer}</p>
						)}
					</div>
				))}
			</div>
		</main>
	)
}

export default FAQ
