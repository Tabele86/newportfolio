import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css';
import Tooltip from 'react-simple-tooltip';
import { FaArrowUp } from '@react-icons/all-files/fa/FaArrowUp';

export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			<div className="content">{children}</div>
			<footer>
				<div>
					<Tooltip content="Back to Top">
						<a href="#top">
							<FaArrowUp />
						</a>
					</Tooltip>
				</div>
				<p>Copyright 2021 Tony Abele</p>
			</footer>
		</div>
	);
}
