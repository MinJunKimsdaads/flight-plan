import { useState } from "react";
import styles from '@/assets/css/common/ToggleSwitch.module.scss';

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => setIsOn(!isOn);

    return (
        <div className={`${styles.toggleSwitch} ${isOn ? styles.on : styles.off}`} onClick={toggle}>
            <div className={`${styles.toggleSwitchCicle}`}></div>
        </div>
    )
}

export default ToggleSwitch;
