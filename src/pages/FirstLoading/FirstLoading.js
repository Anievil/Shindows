import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import styles from './FirstLoading.module.css'
import LoadingBar from '../../components/LoadingBar/LoadingBar'
import Logo from '../../components/Logo/Logo'

export default function FirstLoading() {
    const history = useHistory()
    useEffect(() => {
        setTimeout(()=>{
            history.push('/login')
        }, 5000)
    }, [])

    return (
        <div className={styles.loadingCont}>
            <div className={styles.loadingElem}>
                <div className={styles.logoBlock}>
                    <h2 className={styles.corpName}>Ыыыыыыыы</h2>
                    <Logo size={styles.logoLoad} />
                </div>
                <h1 className={styles.mainText}>Shindows</h1>
                <h2 className={styles.secondaryText}>Professional</h2>
                <LoadingBar />
            </div>
            <div className={styles.poverdBy}>
                <p>Copypaste 2021</p>
                <p>Ыыыыыыыы Corpation</p>
            </div>
            <p className={styles.corporationName}>Ыыыыыыыы</p>
        </div>
    )
}
