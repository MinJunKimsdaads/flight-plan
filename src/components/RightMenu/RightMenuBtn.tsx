import styles from '@/assets/css/RightMenu/RightMenuBtn.module.scss';
import { useState } from 'react';
import { useSettingStore } from '@/store/settingStore';

const RightMenuBtn = ({title,img,action}) => {
    const theme = useSettingStore(state => state.theme);
    const [isHovered,setIsHovered] = useState(false);
    return (
        <>
            <div className={`${styles.rightMenuBtn} ${theme === 'dark' ? styles.dark:''}`} onClick={()=>{action()}} onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
                <img src={img} width={30} height={30} alt={img}></img>
                <div className={`${styles.rightMenuBtnTooltip} ${isHovered && styles.tooltipOn} ${theme === 'dark' ? styles.dark:''}`}>{title}</div>
            </div> 
        </>
    
    );
};

export default RightMenuBtn;