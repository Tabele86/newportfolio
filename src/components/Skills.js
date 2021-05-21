
import Tooltip from 'react-simple-tooltip';
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5';
import { FaCss3Alt } from '@react-icons/all-files/fa/FaCss3Alt';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby';
import { AiOutlineConsoleSql } from '@react-icons/all-files/ai/AiOutlineConsoleSql';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiGraphql } from '@react-icons/all-files/si/SiGraphql';
import { DiGit } from '@react-icons/all-files/di/DiGit';
export default function Skills() {
	return (
		<>
        <Tooltip content="HTML5">
			<FaHtml5 size="2em" padding="5px"/></Tooltip>
            <Tooltip content="CSS3">
			<FaCss3Alt size="2em" padding="5px"/></Tooltip>
			<Tooltip content="JavaScript"><DiJavascript1 size="2em" padding="5px"/></Tooltip>
			<Tooltip content="SQL"><AiOutlineConsoleSql size="2em" padding="5px"/></Tooltip>
			<Tooltip content="React"><FaReact size="2em" padding="5px"/></Tooltip>
			<Tooltip content="Gatsby"><SiGatsby size="2em" padding="5px"/></Tooltip>
			<Tooltip content="GraphQL"><SiGraphql size="2em" padding="5px"/></Tooltip>
			<Tooltip content="TypeScript"><SiTypescript size="2em" padding="5px"/></Tooltip>
			<Tooltip content="Git"><DiGit size="2em" padding="5px"/></Tooltip>
		</>
	);
}