import PostItem from '../PostItem/PostItem'
import useStore from '../../store'
import styles from './PostList.module.scss'
const PostList = () => {
	const data = useStore(state => state.data)
	const remove = useStore(state => state.remove)

	return (
		<div className={styles.PostList}>
			{data.map((post, index) => {
				return (
					<PostItem num={index + 1} post={post} key={post.id} remove={remove} />
				)
			})}
			<div className={styles.alert}>Right click - context menu</div>
		</div>
	)
}

export default PostList
