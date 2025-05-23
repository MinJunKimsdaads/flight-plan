import styles from '@/assets/css/RightMenu/RightMenuBtn.module.scss';
import { useState } from 'react';
import { useSettingStore } from '@/store/settingStore';
import { THEME_DARK } from '@/constants/settingConstant';

interface RightMenuBtn {
    title:string;
    img:string;
    action:()=>void;
}

const RightMenuBtn = ({title,img,action}:RightMenuBtn) => {
    const theme = useSettingStore(state => state.theme);
    const [isHovered,setIsHovered] = useState(false);
    return (
        <>
            <div className={`${styles.rightMenuBtn} ${theme === THEME_DARK ? styles.dark:''}`} onClick={()=>{action()}} onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
                <img src={img} width={25} height={25} alt={img}></img>
                <div className={`${styles.rightMenuBtnTooltip} ${isHovered && styles.tooltipOn} ${theme === THEME_DARK ? styles.dark:''}`}>{title}</div>
            </div> 
        </>
    
    );
};

export default RightMenuBtn;