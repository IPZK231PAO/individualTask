import React, { FC, useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './RecipePage.module.scss'
import RecipeItem from '../../components/RecipeItem/RecipeItem'
import Loader from '../../components/UI/Loader/Loader'
import { HiHome } from "react-icons/hi";
import { IoFastFoodSharp } from "react-icons/io5";
import useStore from '../../store'
const RecipePage: FC = () => {
	
	const { id } = useParams()
	const toTop=()=>window.scrollTo({top:0,left:0,behavior:'smooth'})
	const fetchByID = useStore((state: any) => state.fetchByID)
	const info = useStore((state: any) => state.idData)
	useEffect(() => {
		fetchByID(id)
	}, [fetchByID])
	console.log(info)
	
	useEffect(()=>{
		window.scrollTo({top:0,left:0,behavior:'smooth'})
	},[])

	
	return (
		<div className={styles.BeerPage}>
			{Object.keys(info).length==0
				?<Loader/>
				:<div><div className={styles.linkTitle}>
				<NavLink to='/' className={styles.homeLink}>
					HOME<HiHome size='2vw'/>
				</NavLink>
				<h1 className={styles.HeroName}>"{info.name}" Page</h1>
			</div>
			<div className={styles.info}>
				{/* image */}
				<img
					src={info.image_url}
					className={styles.image}
					alt={`image ${info.image_url}`}
				/>

				{/* Main info */}
				<div className={styles.mainInfo}>
					
					<h2 className={styles.beerName}>{info.name}</h2>

					{/* Tagline */}
					<div className={styles.tagline}>
						<i>"{info.tagline}"</i>
					</div>

					{/* First brewed */}
					<RecipeItem 
						className={styles.firstBrewed} 
						titleText="First brewed" 
						text={info.first_brewed}
					/>
						
					{/* Contributed by */}
					<RecipeItem 
						className={styles.firstBrewed} 
						titleText="Contributed by" 
						text={info.contributed_by}
					/>
				</div>
				{/* Desc */}
				<RecipeItem 
					className={styles.desc} 
					titleText="Description" 
					text={info.description}
				/>
				<div>
					{/* ABV PH SRM*/}
					<div className={styles.abvPhSrm}>
						{/* ABV */}
						<RecipeItem 
							className={styles.abv} 
							titleText="ABV" 
							text={info.abv}
						/>
						{/* PH */}
						<RecipeItem 
							className={styles.ph} 
							titleText="PH" 
							text={info.ph}
						/>
						{/* SRM */}
						<RecipeItem 
							className={styles.srm} 
							titleText="SRM" 
							text={info.srm}
						/>
					</div>
					{/* Food pairing */}
					
					<div className={styles.foodPairing}>
						<h3>Food pairing</h3>
						<ul>
							{info.food_pairing?.map((item: any,index:number) => (
								<li key={index}><IoFastFoodSharp /> {item}</li>
							))}
						</ul>
					</div>
				</div>

				{/* Recipe */}
				<div className={styles.recipe}>
					{/* Ingredients */}
					<div className={styles.ingredients}>
						<h3>Ingredients</h3>
						<ul>
							<h4>Hops:</h4>
							<li>
								<p>
									{' '}
									{info.ingredients?.hops[0].name} ({' '}
									{info.ingredients?.hops[0].amount.value}{' '}
									{info.ingredients?.hops[0].amount.unit})
								</p>
							</li>{' '}
							<h5>Malts:</h5>
							<ul className='malts-ul'>
								{' '}
								{info.ingredients?.malt.map((item: any,index:number) => (
									<li key={index}>
										<p>
											{item.name} ({item.amount.value} {item.amount.unit})
										</p>
									</li>
								))}
							</ul>
							<li>
								<h4>Yeast: </h4>
								{info.ingredients?.yeast}
							</li>
						</ul>
					</div>

					{/* Method */}
					<div className={styles.method}>
						<h3>Method</h3>
						<ul>
							<li>
								<p>
									Fermentation: ({info.method?.fermentation.temp.value}{' '}
									{info.method?.fermentation.temp.unit})
								</p>
							</li>
							<ul>
								<h4>Mesh temp:</h4>
								{info.method?.mash_temp.map((item: any,index:number) => (
									<li key={index}>
										<p>Duration {item.duration}</p>
										<p>
											Temp: {item.temp.value} {item.temp.unit}
										</p>
									</li>
								))}
							</ul>
						</ul>
					</div>
				</div>
				</div></div>
			}
		</div>
	)
}

export default RecipePage
