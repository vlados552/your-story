import React from 'react';
import './Tooltip.css';

function Tooltip({ stat, description }) {
	return (
		<div className='tooltip'>
			{stat}
			<span className='tooltip-text'>{description}</span>
		</div>
	);
}

export default Tooltip;
