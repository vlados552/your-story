import React, { useContext } from 'react';
import { DataContext } from '../Hooks/dataContext';

function FirstStory(props) {
	const { data, setData } = useContext(DataContext);
	return <div></div>;
}

export default FirstStory;
