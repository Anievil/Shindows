import React from 'react'
import styles from './Logo.module.css'

export default function Logo(props) {
    return (
        <div onClick={props.onClick} className={`${styles.logo}` + ` ${props.size}`} >
            <hr />
            <hr />
        </div>
    )
}
