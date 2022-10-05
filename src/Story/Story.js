import React, { useContext } from 'react';
import { DataContext } from '../Hooks/dataContext';
import { useParams } from 'react-router-dom';
import FirstStory from './FirstStory';
import SecondStory from './SecondStory';

function Story(props) {
	const { data, setData } = useContext(DataContext);
	const { storyId } = useParams();

	function renderStory() {
		switch (storyId) {
			case 'first-story':
				<FirstStory />;
				break;
			case 'second-story':
				<SecondStory />;
				break;
			default:
				break;
		}
	}

	return <div>{renderStory()}</div>;
}

export default Story;
