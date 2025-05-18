import ControlerBtn from "./ControlerBtn";
import styles from "@/assets/css/control/Controler.module.scss";

const Controler = () => {
    return (
        <div className={`${styles.controlerBox}`}>
            <ControlerBtn title='Setting' action={()=>{console.log('test')}}></ControlerBtn>
        </div>
    )
}

export default Controler;