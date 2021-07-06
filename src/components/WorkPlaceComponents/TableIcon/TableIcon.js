import React from 'react'
import styles from './TableIcon.module.css'

export default function TableIcon() {
    const dragElem = (e) => {
        e.target.style.left = `${e.pageX - e.target.offsetWidth / 2}px`
        e.target.style.top = `${e.pageY - e.target.offsetWidth / 2}px`
    }

    return (
        <div draggable="true" onDragEnd={dragElem} className={styles.progIcon}>
            
        </div>
    )
}
