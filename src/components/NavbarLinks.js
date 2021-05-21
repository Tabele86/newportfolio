import React from 'react';
import { NavItem } from './NavElements';

export default function NavbarLinks() {
	return (
		<>
			<NavItem to="/">Home</NavItem>
			<NavItem to="/about">About</NavItem>
			<NavItem to="/education">Education</NavItem>
			<NavItem to="/projects">Portfolio</NavItem>
		</>
	);
}
