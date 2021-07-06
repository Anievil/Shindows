import { useHistory } from "react-router-dom";
import React, { useState } from 'react'
import styles from './Autorization.module.css'
import UserPic from '../../images/userpic.png'
import off from '../../images/power-button.svg'
import startup from '../../sounds/winxp.ogv'

export default function Autorization() {
    const history = useHistory()

    const [isClicked, setIsClicked] = useState(false)

    const enter = () => {
        const audio = new Audio(startup);
        audio.play();
        setIsClicked(true)
        setTimeout(() => {
            history.push('/workplace')
        }, 5000)
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.background}>
                {!isClicked ?
                    <div className={styles.userCont}>
                        <img className={styles.userPic} src={UserPic} alt='userPic' />
                        <h2 className={styles.userName}>User</h2>
                        <button onClick={enter} className={styles.enterButton}>Enter</button>
                        <img className={styles.off} src={off} alt="off" />
                    </div> :
                    <h2 className={styles.welcomeText}>Welcome User!</h2>}
            </div>
        </div>
    )
}

