import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../Hooks/dataContext';
import ArrowLeft from '../Icons/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight';
import { Images } from '../Images/Images';
import { Roll } from '../Actions/Roll';

function Character(props) {
	const { data, setData } = useContext(DataContext);
	const initialState = {
		imgUrl: !data.characterImg ? Images[0] : data.characterImg,
		imgIndex: getImgIndex(data.characterImg, Images),
		name: '',
		stats: { str: 0, dex: 0, con: 0 },
	};

	const [character, setCharacter] = useState(initialState);
	useEffect(() => {}, []);

	function handleChange(e) {
		setCharacter({ ...character, name: e.target.value });
	}

	//ToDo: change on useReducer
	function handleClickStats(e) {
		switch (e.target.id) {
			case 'stats-str':
				setCharacter({
					...character,
					stats: { ...character.stats, str: bestOfThree(Roll(4)) },
				});
				break;
			case 'stats-dex':
				console.log(Roll(4));
				break;
			case 'stats-con':
				console.log(Roll(4));
				break;
			default:
				break;
		}
	}
	//ToDo: change on useReducer
	function handleClickCarousel(e) {
		let currIndex = character.imgIndex;
		switch (e.target.id) {
			case 'arrowLeft':
				currIndex -= 1;
				currIndex = currIndex < 0 ? Images.length - 1 : currIndex;
				break;
			case 'arrowRight':
				currIndex += 1;
				currIndex = currIndex >= Images.length ? 0 : currIndex;
				break;
			default:
				setCharacter({
					...character,
					imgUrl: Images[currIndex],
					imgIndex: currIndex,
				});
		}
	}

	function getImgIndex(url, arr) {
		if (!url) {
			return 0;
		}
		return arr.findIndex((element) => element === url);
	}

	function bestOfThree(obj) {
		console.log(obj);
		const sortedArr = obj.dice.sort((a, b) => {
			return a - b;
		});
		return obj.result - sortedArr[0];
	}

	return (
		<div>
			<form action=''>
				<label htmlFor='characterName'>What is your name?</label>
				<input
					type='text'
					name='characterName'
					id='characterName'
					placeholder='Enter your name'
					onChange={handleChange}
					value={character.name}
				/>
				<div>
					<h4>How you look?</h4>
					<ArrowLeft onClick={handleClickCarousel} />
					<img
						className='character-img'
						src={character.imgUrl}
						alt='your character'
					/>
					<ArrowRight onClick={handleClickCarousel} />
				</div>
				<div>
					<h4>Wow, it is your stats:</h4>
					<ul className='Stats'>
						<li>
							STR:{' '}
							<span
								id='stats-str'
								onClick={character.stats.str === 0 ? handleClickStats : null}>
								{character.stats.str === 0 ? 'Roll' : character.stats.str}
							</span>
						</li>
						<li>DEX: {}</li>
						<li>CON: {}</li>
					</ul>
				</div>
			</form>
		</div>
	);
}

export default Character;
