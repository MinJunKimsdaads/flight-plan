import styles from '@/assets/css/control/ControlerBtn.module.scss';

const ControlerBtn = ({title, action}) => {
    return (
        <div className={`${styles.btnBox}`} onClick={action}>
            {title}
        </div>
    )
}

export default ControlerBtn;

