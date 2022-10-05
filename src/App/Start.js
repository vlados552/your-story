import React from 'react';
import { useNavigate } from 'react-router-dom';

function Start() {
	const navigate = useNavigate();

	function handleClick() {
		navigate('/character');
	}

	return (
		<div className='wrapper'>
			<h1>YOUR STORY</h1>
			<button onClick={handleClick}>Narrate</button>
		</div>
	);
}

export default Start;
