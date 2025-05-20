import ControlerBtn from "./ControlerBtn";
import styles from "@/assets/css/controler/Controler.module.scss";
import settingImg from '@/assets/img/controler/setting.svg';
import filterImg from '@/assets/img/controler/filter.svg';
import widgetImg from '@/assets/img/controler/widget.svg';
import forecastImg from '@/assets/img/controler/setting.svg';

const Controler = () => {
    return (
        <div className={`${styles.controlerBox}`}>
            <ControlerBtn title='Setting' img={settingImg} action={()=>{console.log('Setting')}}></ControlerBtn>
            <ControlerBtn title='Filter' img={filterImg} action={()=>{console.log('Filter')}}></ControlerBtn>
            <ControlerBtn title='Widget' img={widgetImg} action={()=>{console.log('Widget')}}></ControlerBtn>
            <ControlerBtn title='Forecast' img={forecastImg} action={()=>{console.log('Forecast')}}></ControlerBtn>
        </div>
    )
}

export default Controler;