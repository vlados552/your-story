import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../Hooks/dataContext';
import ArrowLeft from '../Icons/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight';
import { Images } from '../Images/Images';
import { Roll } from '../Actions/Roll';

function Character(props) {
	const { data, setData } = useContext(DataContext);
	const navigate = useNavigate();
	const initialState = {
		imgUrl: !data.characterImg ? Images[0] : data.characterImg,
		imgIndex: getImgIndex(data.characterImg, Images),
		name: '',
		stats: { str: 0, dex: 0, con: 0 },
		hp: 0,
		energy: 0,
	};
	const [character, setCharacter] = useState(initialState);
	const difficult = 3;

	function handleChange(e) {
		setCharacter({ ...character, name: e.target.value });
	}
	function handleClickStats(e) {
		switch (e.target.id) {
			case 'stats-str':
				setCharacter({
					...character,
					stats: {
						...character.stats,
						str: 'Rolling...',
					},
				});
				Roll(4)
					.then((result) => {
						return bestOfThree(result);
					})
					.then((result) => {
						setCharacter({
							...character,
							stats: {
								...character.stats,
								str: result,
							},
						});
					});
				break;
			case 'stats-dex':
				setCharacter({
					...character,
					stats: {
						...character.stats,
						dex: 'Rolling...',
					},
				});
				Roll(4)
					.then((result) => {
						return bestOfThree(result);
					})
					.then((result) => {
						setCharacter({
							...character,
							stats: {
								...character.stats,
								dex: result,
							},
						});
					});
				break;
			case 'stats-con':
				setCharacter({
					...character,
					stats: {
						...character.stats,
						con: 'Rolling...',
					},
				});
				Roll(4)
					.then((result) => {
						return bestOfThree(result);
					})
					.then((result) => {
						setCharacter({
							...character,
							stats: {
								...character.stats,
								con: result,
							},
							hp: result * difficult,
						});
					});
				break;
			default:
				break;
		}
	}
	function handleClickCarousel(e) {
		let currIndex = character.imgIndex;
		switch (e.target.id) {
			case 'arrowLeft':
				currIndex -= 1;
				currIndex = currIndex < 0 ? Images.length - 1 : currIndex;
			case 'arrowRight':
				currIndex += 1;
				currIndex = currIndex >= Images.length ? 0 : currIndex;
			default:
				setCharacter({
					...character,
					imgUrl: Images[currIndex],
					imgIndex: currIndex,
				});
		}
	}
	function handleSubmit(e) {
		e.preventDefault();
		setData({ ...character });
		navigate('/my-story/first-story');
	}
	function getImgIndex(url, arr) {
		if (!url) {
			return 0;
		}
		return arr.findIndex((element) => element === url);
	}
	function bestOfThree(obj) {
		const sortedArr = obj.dice.sort((a, b) => {
			return a - b;
		});
		return obj.result - sortedArr[0];
	}

	return (
		<div>
			<form action='' onSubmit={handleSubmit}>
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
						<li>
							DEX:{' '}
							<span
								id='stats-dex'
								onClick={character.stats.dex === 0 ? handleClickStats : null}>
								{character.stats.dex === 0 ? 'Roll' : character.stats.dex}
							</span>
						</li>
						<li>
							CON:{' '}
							<span
								id='stats-con'
								onClick={character.stats.con === 0 ? handleClickStats : null}>
								{character.stats.con === 0 ? 'Roll' : character.stats.con}
							</span>
						</li>
					</ul>
				</div>
				<div>
					<button
						type='button'
						onClick={() => {
							navigate('/');
						}}>
						Back
					</button>
					<button type='submit'>Confirm</button>
				</div>
			</form>
		</div>
	);
}

export default Character;
