import styles from '@/assets/css/RightMenu/RightMenu.module.scss';
import RightMenuBtn from './RightMenuBtn';
import { useState } from 'react';
import { toggleFullScreen } from '@/util/rightMenu';
//img
import fullScreenOnImg from '@/assets/img/rightMenu/fullScreenOn.svg';
import fullScreenOffImg from '@/assets/img/rightMenu/fullScreenOff.svg';
//img


const RightMenu = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    return(
        <div className={`${styles.rightMenuBox}`}>
            <RightMenuBtn title={`${isFullScreen ? '전체화면 종료':'전체화면 시작'}`} action={()=>{
                toggleFullScreen(isFullScreen);
                setIsFullScreen(!isFullScreen);
            }} img={`${isFullScreen ? fullScreenOffImg:fullScreenOnImg}`}></RightMenuBtn>
        </div>
    )    
}

export default RightMenu;