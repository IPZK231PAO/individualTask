import React, { useState } from 'react'
import useStore from '../../store'
import { NavLink } from 'react-router-dom'
import styles from './PostItem.module.scss'
import { SlClose } from "react-icons/sl";
interface PostItemProps {
	num: number;
	post: any;
	key: number;
	remove?:any;
}

const PostItem = ({ num, post,remove }: PostItemProps) => {
	const [choose, setChoose] = useState(false)
	
	const toggleClass = (): void => {
		setChoose(!choose)
	}

	return (
		<div
			onContextMenu={e => {
				e.preventDefault()
				toggleClass()
			}}
			className={
				  styles.PostItem +' '+ (choose ? styles.Choose : '')
			}
		>
			<NavLink to={`/${post.id}`}>
				<img
					src={post.image_url}
					className={styles.icon}
					alt={`${post.image_url} icon`}
				/>
				<div>
					<strong>
						{num}. {post.name}
					</strong>
					<p>{post.contributed_by}</p>
					<p>
						{post.tagline} {post.first_brewed}
					</p>
				</div>
			</NavLink>
			<button
				className={!choose ? styles.hiddenBtn : styles.removeBtn}
				onClick={()=>{remove(post.id)}}
			>	{<SlClose size={!choose?'0vw':'4vw'} />}
				
			</button>
		</div>
	)
}

export default PostItem
