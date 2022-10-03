import React, {useContext} from 'react';
import {DataContext} from '../Hooks/dataContext'
import ArrowLeft from '../Icons/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight';

function Character(props) {
	const {data, setData} = useContext(DataContext);
	
	function handleChange(e){
		setData(...data, data.characterName = e.target.value);
	}
	function hangleClick(){

	}

	return <div>
		<form action="">
			<label htmlFor="characterName">What is your name?</label>
			<input type="text" name="characterName" id="characterName" placeholder='Enter your name' onChange={handleChange} value={data.characterName}/>
			<div>
				<ArrowLeft onClick={hangleClick}/>
				<img src="" alt="" />
				<ArrowRight/>
			</div>
			
		</form>
	</div>;
}

export default Character;
