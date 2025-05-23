import styles from '@/assets/css/controler/ControlerBtn.module.scss';
import { useControlerStore } from '@/store/controlerStore';

const ControlerBtn = ({title, img, action}) => {
    const control = useControlerStore(state => state.control);
    return (
        <div className={`${styles.btnBox} ${title === control ? styles.active:''}`} onClick={action}>
            <img src={img} width={35} height={35} alt={title}/>
            <div>{title}</div>
        </div>
    )
}

export default ControlerBtn;

