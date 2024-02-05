import styles from './Loader.module.scss'

const Loader = props => {
	return <div className={styles.loading}>{props.children}</div>
}

export default Loader
