import React from 'react';
import PlayerToken from '../Player/PlayerToken';
import './Card.css';

function Card({ state, position, displayToken }) {
	return (
		<div
			className={`grid grid-card ${
				state ? 'card-front' : 'card-back'
			} ${position}`}>
			<PlayerToken displayToken={displayToken} />
		</div>
	);
}

export default Card;
