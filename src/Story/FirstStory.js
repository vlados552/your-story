import React from 'react';
import Card from '../Card/Card';

function FirstStory(props) {
	return (
		<>
			<Card state={true} position={'bl'} displayToken={true} />
			<Card state={false} position={'bc'} displayToken={false} />
			<Card state={false} position={'mc'} displayToken={false} />
			<Card state={true} position={'mr'} displayToken={false} />
		</>
	);
}

export default FirstStory;
