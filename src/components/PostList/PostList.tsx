import { FC } from 'react'
import PostItem from '../PostItem/PostItem'
import useStore from '../../store'
import styles from './PostList.module.scss'
const PostList: FC = () => {
	const data = useStore((state: any) => state.data)
	const remove = useStore((state: any) => state.remove)

	return (
		<div className={styles.PostList}>
			{data.map((post: any, index: number) => {
				return (
					<PostItem num={index + 1} post={post} key={post.id} remove={remove} />
				)
			})}
			<div className={styles.alert}>Right click - context menu</div>
		</div>
	)
}

export default PostList
