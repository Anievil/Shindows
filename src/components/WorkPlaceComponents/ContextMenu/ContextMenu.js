import React from 'react'
import styles from './ContextMenu.module.css'

export default function ContextMenu(props) {

    return (
        <ul className={styles.contextMenu} style={{ left: `${props.pos[0]}`, top: `${props.pos[1]}` }}>
            <li onClick={props.createFile}>
                <p>Create file</p>
            </li>
        </ul>
    )
}
