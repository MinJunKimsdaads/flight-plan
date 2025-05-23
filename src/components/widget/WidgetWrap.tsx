import WidgetBox from "./WidgetBox";
import styles from "@/assets/css/widget/WidgetWrap.module.scss";

const WidgetWrap = () => {
    return(
        <div className={styles.widgetWrap}>
            <WidgetBox title='test1'>
                <div></div>
            </WidgetBox>
            <WidgetBox title='test2'>
                <div></div>
            </WidgetBox>
            <WidgetBox title='test3'>
                <div></div>
            </WidgetBox>
        </div>
    )
};

export default WidgetWrap;