import PostList from "../../components/PostList/PostList";
import useStore from "../../store";
import { useEffect} from "react";
import styles from './HomePage.module.scss'
import Loader from "../../components/UI/Loader/Loader";


const HomePage = () => {

    const data = useStore((state: any) => state.data)
    const recipes =data;
    const fetchData = useStore((state: any) => state.fetchData)
    useEffect(()=>{
        fetchData();
    },[fetchData])

    useEffect(()=>{
		window.scrollTo({top:0,left:0,behavior:'smooth'})
	},[fetchData])


    return ( <div className={styles.HomePage}>
        {!data.length
        ?<Loader/>
        :<PostList/>}
        
    </div> );
}
 
export default HomePage;

