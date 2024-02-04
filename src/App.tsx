import React, { FC,useEffect} from 'react'
import useStore from './store'
import { shallow } from 'zustand/shallow'
import styles from './App.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import RecipePage from './pages/RecipePage/RecipePage'
import HomePage from './pages/HomePage/Homepage'
import axios from 'axios'
const App: FC = () => {

	
	// const recipes = useStore((state: any) => state.recipes)
    // const fetchData = useStore((state: any) => state.fetchData)
    useEffect(()=>{
		window.scrollTo({top:0,left:0,behavior:'smooth'})
	},[])
	return (
		<BrowserRouter basename='/'>
			<div style={styles}></div>
			<Routes>
				<Route
					path={'/'}
					element={<HomePage />}
				/>
				<Route path={`/:id`} element={<RecipePage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
