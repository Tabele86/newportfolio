import React from 'react';
import { FaArrowUp } from '@react-icons/all-files/fa/FaArrowUp';
import {pointerHover} from '../styles/pointer.module.css'
export default function Pointer() {
	return (
		<>
			
				<a href="#top">
					<FaArrowUp className={pointerHover}/>
				</a>
		
		</>
	);
}
