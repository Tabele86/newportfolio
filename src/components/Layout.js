import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FiMail } from '@react-icons/all-files/fi/FiMail';

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Navbar />
			<div className="content">{children}</div>
			<footer>
				<div>
					<a href="https://www.linkedin.com/in/anthonyabele1986/" target="_blank" rel="noreferrer">
						<FaLinkedin size="3em" />
					</a>
					<a href="mailto:tabele86@gmail.com">
						<FiMail size="3em" />
					</a>
				</div>
				<p>Copyright 2021 Tony Abele</p>
			</footer>
		</div>
	);
}
