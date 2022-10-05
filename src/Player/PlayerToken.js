import React, { useContext } from 'react';
import { DataContext } from '../Hooks/dataContext';
import './PlayerToken.css';

function PlayerToken({ displayToken }) {
	const { data } = useContext(DataContext);

	return (
		<div className={`player-token mc ${displayToken ? 'display' : ''}`}>
			<img src={data.imgUrl} alt='' />
		</div>
	);
}

export default PlayerToken;
