import React, {useState} from 'react'
import styles from './WorkPlace.module.css'
import Logo from '../../components/Logo/Logo'
import PuskMenu from '../../components/WorkPlaceComponents/PuskMenu/PuskMenu'
import WorkTable from '../../components/WorkPlaceComponents/WorkTable/WorkTable'

export default function WorkPlace() {
    const [isPuskMenuOpen, setIsPuskMenuOpen] = useState(false)

    const closeMenu = () => {
        setIsPuskMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsPuskMenuOpen(!isPuskMenuOpen)
    }

    return (
        <div className={styles.workPlace}>
            <WorkTable closeMenu={closeMenu} />
            {isPuskMenuOpen ? <PuskMenu />  : '' } 
            <div className={styles.panel}>
                <div onClick={toggleMenu} className={styles.logoBlock + (isPuskMenuOpen ? ' ' + styles.open : '')}>
                    <Logo onClick={toggleMenu} size={styles.logo} />
                </div>
            </div>
        </div>
    )
}
