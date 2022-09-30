import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Start from './Start';
import './reset.css';
import './App.css';

function App() {
	return (
		<div>
			<header>
				<Routes>
					<Route path='/' element={null} />
					<Route path='/*' element={<Header />} />
				</Routes>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Start />} />
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
