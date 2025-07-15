import React from "react"
import DesktopNavbar from "./nav"
import MobileNav from "./mobile-nav"

const Nav: React.FC = () => {
	return (
		<>
			<div className="hidden sm:block">
				<DesktopNavbar sticky />
			</div>
			<div className="sm:hidden">
				<MobileNav />
			</div>
		</>
	)
}

export default Nav
