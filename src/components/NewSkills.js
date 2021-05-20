import React from 'react';
import Tooltip from 'react-simple-tooltip';
import { SiFlutter } from '@react-icons/all-files/si/SiFlutter';
import { SiMicrosoftazure } from '@react-icons/all-files/si/SiMicrosoftazure';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { RiVuejsLine } from '@react-icons/all-files/ri/RiVuejsLine';
import { FaPython } from '@react-icons/all-files/fa/FaPython';
import { FaAws } from '@react-icons/all-files/fa/FaAws';

export default function NewSkills() {
	return (
		<div>
			<Tooltip content="Next.js">
				<SiNextDotJs size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="Vue.js">
				<RiVuejsLine size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="Flutter">
				<SiFlutter size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="Azure">
				<SiMicrosoftazure size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="AWS">
				<FaAws size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="Python">
				<FaPython size="2em" padding="5px" />
			</Tooltip>
		</div>
	);
}