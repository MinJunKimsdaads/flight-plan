import styles from '@/assets/css/widget/WidgetBox.module.scss';

const WidgetBox = ({title,children}) => {
    return (
        <div className={`${styles.widgetBox}`}>
            <div className={`${styles.header}`}>
                <strong>{title}</strong>
                <span>
                    close
                </span>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default WidgetBox;