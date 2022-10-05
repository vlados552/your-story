import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataContext } from '../Hooks/dataContext';
import Header from './Header';
import Footer from './Footer';
import Start from './Start';
import Character from '../Character/Character';
import Story from '../Story/Story';
import './reset.css';
import './App.css';

function App() {
	const [data, setData] = useState({});

	return (
		<div className=''>
			<header>
				<Routes>
					-
					<Route path='/' element={null} />
					<Route path='/*' element={<Header />} />
				</Routes>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Start />} />
					<Route
						path='/character'
						element={
							<DataContext.Provider value={{ data, setData }}>
								<Character />
							</DataContext.Provider>
						}
					/>
					<Route
						path='/my-story/:id'
						element={
							<DataContext.Provider value={{ data, setData }}>
								<Story />
							</DataContext.Provider>
						}
					/>
				</Routes>
			</main>
			<footer>
				<Routes>
					<Route path='/' element={null} />
					<Route path='/*' element={<Footer />} />
				</Routes>
			</footer>
		</div>
	);
}

export default App;
