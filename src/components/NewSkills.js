import Tooltip from 'react-simple-tooltip';
import { SiFlutter } from '@react-icons/all-files/si/SiFlutter';
import { SiMicrosoftazure } from '@react-icons/all-files/si/SiMicrosoftazure';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { SiKotlin } from '@react-icons/all-files/si/SiKotlin';
import { SiFigma } from '@react-icons/all-files/si/SiFigma';
import { SiAngular } from '@react-icons/all-files/si/SiAngular';
import { SiDocker } from '@react-icons/all-files/si/SiDocker';
import { SiAndroid } from '@react-icons/all-files/si/SiAndroid';
import { SiFlask } from '@react-icons/all-files/si/SiFlask';
import { RiVuejsLine } from '@react-icons/all-files/ri/RiVuejsLine';
import { FaPython } from '@react-icons/all-files/fa/FaPython';
import { FaAws } from '@react-icons/all-files/fa/FaAws';

export default function NewSkills() {
	return (
		<div>
			<Tooltip content="Vue.js">
				<RiVuejsLine size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="Figma">
				<SiFigma size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="Next.js">
				<SiNextDotJs size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="Angular">
				<SiAngular size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="Android">
				<SiAndroid size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="Kotlin">
				<SiKotlin size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="Flutter">
				<SiFlutter size="2em" padding="5px" />
			</Tooltip>
			<Tooltip content="Docker">
				<SiDocker size="2em" padding="5px" />
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
			<Tooltip content="Flask">
				<SiFlask size="2em" padding="5px" />
			</Tooltip>
		</div>
	);
}
