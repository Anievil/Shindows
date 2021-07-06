import React, {useState} from 'react'
import styles from './WorkPlace.module.css'
import Logo from '../../components/Logo/Logo'
import PuskMenu from '../../components/WorkPlaceComponents/PuskMenu/PuskMenu'
import WorkTable from '../../components/WorkPlaceComponents/WorkTable/WorkTable'

export default function WorkPlace() {
    const [isPuskMenuOpen, setIsPuskMenuOpen] = useState(false)

    const toggleMenu = () => {
        console.log(isPuskMenuOpen)
        setIsPuskMenuOpen(!isPuskMenuOpen)
    }

    return (
        <div className={styles.workPlace}>
            <WorkTable />
            {isPuskMenuOpen ? <PuskMenu />  : '' } 
            <div className={styles.panel}>
                <div onClick={toggleMenu} className={styles.logoBlock + (isPuskMenuOpen ? ' ' + styles.open : '')}>
                    <Logo onClick={toggleMenu} size={styles.logo} />
                </div>
            </div>
        </div>
    )
}
