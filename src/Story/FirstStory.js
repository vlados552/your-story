import React from 'react';
import Card from '../Card/Card'
import PlayerToken from '../Player/PlayerToken'

function FirstStory(props) {
	return <div>
		<PlayerToken/>
		<Card state={true} data={'start'} />
		<Card state={false} data={'item'} />
		<Card state={false} data={'combat'} />
		<Card state={true} data={'end'} />
	</div>;
}

export default FirstStory;
