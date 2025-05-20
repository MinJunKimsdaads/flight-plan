import styles from '@/assets/css/controler/ControlerBtn.module.scss';

const ControlerBtn = ({title, img, action}) => {
    return (
        <div className={`${styles.btnBox}`} onClick={action}>
            <img src={img} width={35} height={35} alt={title}/>
            <div>{title}</div>
        </div>
    )
}

export default ControlerBtn;

