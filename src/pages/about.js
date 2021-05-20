import React from 'react';
import Layout from '../components/Layout';
import Skills from '../components/Skills';
import { skills } from '../styles/about.module.css';

export default function About() {
	return (
		<Layout>
			<div>
				<h1>About Page</h1>
				<p>
					I have more than two years work experience in front-end and have a firm knowledge of HTML, CSS and
					JavaScript language and possess a good knowledge of computer software packages (frameworks and
					tools) that are used in today’s technology.
				</p>
				<p>
					On a personal level, I've had my ups and downs being a self taught developer at the start/before the
					pandemic. From learning outdated tutorials, finding correct material, going back to updated
					tutorials, learning <strong>MANY</strong> frameworks only to have them change/update versions twice
					in one quarter of a year(i.e., Gatsby v2,v3,v3.3,v3.5); but that is the life of a developer. And I
					embrace this lifelong journey to always improve, never stop learning, and never stop coding !
				</p>
				<p>
					I am highly-motivated, goal oriented, self-driven, hard-working, fast learner and constantly seeking
					to improve my skills and am fully aware of the latest Front-end Development Tools and trends.
				</p>
				<p>
					In addition to this, I have the ability to adapt to any type of team environment, I am team oriented
					and get along with ,usually everyone, when working in a group setting. I also have the ability to
					work independently while staying on schedule and meeting tight deadlines in my previous job(untested
					in developer deadlines yet).
				</p>
				<p> Below is a list of my current technical skills:</p>
				<div className={skills}>
					<Skills />
				</div>
			</div>
		</Layout>
	);
}
