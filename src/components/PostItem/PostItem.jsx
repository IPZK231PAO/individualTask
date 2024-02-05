import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './PostItem.module.scss'
import { SlClose } from 'react-icons/sl'

const PostItem = ({ num, post, remove }) => {
	const [choose, setChoose] = useState(false)

	const toggleClass = () => {
		setChoose(!choose)
	}

	return (
		<div
			onContextMenu={e => {
				e.preventDefault()
				toggleClass()
			}}
			className={styles.PostItem + ' ' + (choose ? styles.Choose : '')}
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
				onClick={() => {
					remove(post.id)
				}}
			>
				{' '}
				{<SlClose size={!choose ? '0vw' : '4vw'} />}
			</button>
		</div>
	)
}

export default PostItem
