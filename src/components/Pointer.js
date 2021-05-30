import React from 'react';

import Tooltip from 'react-simple-tooltip';
import { FaArrowUp } from '@react-icons/all-files/fa/FaArrowUp';

export default function Pointer() {
	return (
		<>
			<Tooltip content="Back to Top">
				<a href="#top">
					<FaArrowUp />
				</a>
			</Tooltip>
		</>
	);
}
