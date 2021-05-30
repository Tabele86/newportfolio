import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css';

export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			<div className="content">{children}</div>
			<footer>
				<p>Copyright 2021 Tony Abele</p>
			</footer>
		</div>
	);
}
