import React, { useEffect, useState } from 'react'
import styles from './TableIcon.module.css'
import ProgramWindow from '../ProgramWindow/ProgramWindow'

export default function TableIcon(props) {
    const [isOpenWindow, setIsOpenWindow] = useState(false)
    const [typeAndImg, setTypeAndImg] = useState(null)
    const [text, setText] = useState(null)

    const check = (position, type, offset) => {
        if (position < offset) {
            return 0
        }
        else if ((type === 'width' && position > window.innerWidth - offset - 5) || (type === 'height' && position > window.innerHeight - offset - 40)) {
            return type === 'width' ? window.innerWidth - offset - 5 : window.innerHeight  - 130
        }
        else {
            return position - offset / 2
        }
    }

    const move = (item, id, e) => {
        const width = check(e.pageX, 'width', item.offsetWidth)
        const height = check(e.pageY, 'height', item.offsetHeight)
        item.style.left = `${width}px`
        item.style.top = `${height}px`
        props.elemList[id].left = `${width}px`
        props.elemList[id].top = `${height}px`
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
        setTypeAndImg({ type: `${type}`, img: `${img}` })
    }
    // СЛОМАНО
    // const typeText = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     setText(e.target.value)
    // }

    // const saveName = (name, id) => {
    //     setText(name)
    //     props.rename(id);
    // }

    return (
        <>
            {isOpenWindow ? <ProgramWindow typeAndImg={typeAndImg} closeWindow={closeWindow} /> : ''}
            {
                props.elemList.map((item) => (
                    <div draggable="true" onDoubleClick={() => (openWindow(item.type, item.img))} key={item.id} onDragEnd={(e) => (dragElem(e, item.id))} style={{ left: `${item.left}`, top: `${item.top}` }} className={styles.progIcon}>
                        <img src={item.img} alt='icon' width='45px' height='45px' />
                        {/* СЛОМАНО {props.isRename ? <form onSubmit={() => (props.rename(item.id, text))}><input onChange={typeText} type='text' value={text}></input></form> : <p onClick={() => {saveName(item.name, item.id)}}>{item.name} ({item.type})</p>} */}
                        <p>{item.name} ({item.type})</p>
                    </div>))
            }
        </>
    )
}
