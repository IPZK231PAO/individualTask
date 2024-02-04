import styles from './Loader.module.scss'
type LoaderProp={
    children?:React.ReactNode;
}
const Loader = (props:LoaderProp) => {
    return ( <div className={styles.loading}> 
        {props.children}
        </div> );
}
 
export default Loader;