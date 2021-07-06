import React from 'react'
import styles from './PuskMenu.module.css'
import off from '../../../images/power-button.svg'

export default function PuskMenu() {
    return (
        <div className={styles.puskMenu}>
            <div className={styles.rightPanel}>
                <div className={styles.rightPanelButton}>
                    <img src={off} className={styles.off} alt='off' />
                </div>
            </div>
        </div>
    )
}
