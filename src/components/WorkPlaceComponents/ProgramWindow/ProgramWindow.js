import React, { useState } from 'react'
import styles from './ProgramWindow.module.css'
import DocxType from '../../ProgTypes/DocxType/DocxType'

export default function ProgramWindow(props) {
    const [isFullScrin, setIsFullScrin] = useState(false)
    const [isHiden, setIsHiden] = useState(false)
    
    const fullScrin = () => {
        setIsFullScrin(!isFullScrin)
    }

    const hide = () => {
        setIsHiden(!isHiden)
    }

    const move = (e) => {
        e.target.parentNode.style.left = `${e.pageX - e.target.offsetWidth / 2}px`
        e.target.parentNode.style.top = `${e.pageY - e.target.offsetHeight / 2}px`
    }

    return (
        <div className={styles.programWindow + (isFullScrin ? ' ' + styles.fullScrin : '') + (isHiden ? ' ' + styles.visibility : '')}>
            <div draggable="true" onDragEnd={move} className={styles.header}>
                <img src={props.typeAndImg.img} alt='icon' width='30px' height='30px' />
                <div className={styles.controlButtons}>
                    <div onClick={props.closeWindow}><div className={styles.controlButton}> </div></div>
                    <div onClick={fullScrin} className={styles.conyrolButton}><div className={styles.controlButton}> </div></div>
                    <div onClick={hide} className={styles.conyrolButton}><div className={styles.controlButton}> </div></div>
                </div>
            </div>
            <div className={styles.workPlace}>
                {props.typeAndImg.type == 'docx' ? <DocxType /> : ''}
            </div>
        </div>
    )
}
