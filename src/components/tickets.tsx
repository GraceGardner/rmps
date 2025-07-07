import { useEffect } from "react"

export default function TicketWidget() {
	useEffect(() => {
		const script = document.createElement("script")
		script.src = "https://cdn.tickettailor.com/js/widgets/min/widget.js"
		script.async = true
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<div className="tt-widget">
			<div className="tt-widget-fallback">
				<p>
					<a
						href="https://www.tickettailor.com/events/rockymountainplantshow/1746414"
						target="_blank"
						rel="noopener noreferrer"
					>
						Click here to buy tickets
					</a>
					<br />
					<small>
						<a href="https://www.tickettailor.com?rf=wdg">
							Sell tickets online with Ticket Tailor
						</a>
					</small>
				</p>
			</div>
			<div
				data-url="https://www.tickettailor.com/events/rockymountainplantshow/1746414"
				data-type="inline"
				data-inline-minimal="true"
				data-inline-show-logo="false"
				data-inline-bg-fill="false"
			/>
		</div>
	)
}
