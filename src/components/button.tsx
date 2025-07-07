type ButtonProps = {
	href: string
	children: React.ReactNode
	target?: React.HTMLAttributeAnchorTarget
	className?: string
}

export default function Button({
	href,
	children,
	target,
	className = "",
}: ButtonProps) {
	return (
		<a
			href={href}
			target={target}
			className={`
          inline-block
          px-4 py-2
          bg-gray-600
          text-white
          rounded
          hover:bg-gray-700
          active:bg-gray-800
          focus:ring-gray-400
          transition
          ${className}
        `}
		>
			{children}
		</a>
	)
}
