import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import { NavBox, Toggle, Navigation, Hamburger, TitleWrap } from './NavElements';

export default function Navbar() {
	const data = useStaticQuery(graphql`
		query SiteInfo {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	const { title } = data.site.siteMetadata;
	const [ navbarOpen, setNavbarOpen ] = useState(false);

	return (
		<Navigation>
			<TitleWrap>{title}</TitleWrap>
			<Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
				{navbarOpen ? <Hamburger open /> : <Hamburger />}
			</Toggle>
			{navbarOpen ? (
				<NavBox>
					<NavbarLinks />
				</NavBox>
			) : (
				<NavBox open>
					<NavbarLinks />
				</NavBox>
			)}
		</Navigation>
	);
}
