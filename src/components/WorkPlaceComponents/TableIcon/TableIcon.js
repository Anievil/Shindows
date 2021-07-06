import React, { useEffect, useState } from 'react'
import styles from './TableIcon.module.css'
import ProgramWindow from '../ProgramWindow/ProgramWindow'

export default function TableIcon(props) {
    const [isOpenWindow, setIsOpenWindow] = useState(false)
    const [typeAndImg, setTypeAndImg] = useState(null)

    const move = (item, id, e) => {
        item.style.left = `${e.pageX - item.offsetWidth / 2}px`
        item.style.top = `${e.pageY - item.offsetHeight / 2}px`
        props.elemList[id].left = `${e.pageX - item.offsetWidth / 2}px`
        props.elemList[id].top = `${e.pageY - item.offsetHeight / 2}px`
        localStorage.setItem('elemList', JSON.stringify(props.elemList))
    }

    const dragElem = (e, id) => {
        if (e.target.alt === 'icon') {
            move(e.target.parentNode, id, e)
        }
        else {
            move(e.target, id, e)
        }
    }

    useEffect(() => {
        localStorage.setItem('elemList', JSON.stringify(props.elemList))
    }, [props.elemList])

    const closeWindow = () => {
        setIsOpenWindow(false)
        setTypeAndImg(null)
    }

    const openWindow = (type, img) => {
        setIsOpenWindow(true)
        setTypeAndImg({type: `${type}`, img: `${img}`})
    }

    return (
        <>
            {isOpenWindow ? <ProgramWindow typeAndImg={typeAndImg} closeWindow={closeWindow} /> : ''}
            {
                props.elemList.map((item) => (
                    <div draggable="true" onDoubleClick={() => (openWindow(item.type, item.img))} key={item.id} onDragEnd={(e) => (dragElem(e, item.id))} style={{ left: `${item.left}`, top: `${item.top}` }} className={styles.progIcon}>
                        <img src={item.img} alt='icon' width='30px' height='30px' />
                        <p>{item.name} ({item.type})</p>
                    </div>))
            }
        </>
    )
}
