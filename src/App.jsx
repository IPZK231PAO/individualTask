import { useEffect } from 'react'
import styles from './App.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import RecipePage from './pages/RecipePage/RecipePage'
import HomePage from './pages/HomePage/Homepage'
const App = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [])
	return (
		<BrowserRouter basename='/'>
			<div style={styles}></div>
			<Routes>
				<Route path={'/'} element={<HomePage />} />
				<Route path={`/:id`} element={<RecipePage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
