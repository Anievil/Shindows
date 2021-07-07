import React, {useState, useEffect} from 'react'
import styles from './WorkTable.module.css'
import TableIcon from '../TableIcon/TableIcon'
import ContextMenu from '../ContextMenu/ContextMenu'

export default function WorkTable(props) {
    const [elemList] = useState(JSON.parse(localStorage.getItem('elemList')) || [{ id: 0, name: 'My portfolio', type: 'pdf', img: 'https://www.iconpacks.net/icons/2/free-pdf-download-icon-2617-thumb.png' ,left: '0px', top: '0px' }])
    const [isContextMenuOpen ,setIsContextMenuOpen] = useState(false)
    const [isRename ,setIsRename] = useState(false)
    const [pos] = useState([0, 0])
    // СЛОМАНО
    // const rename = (id, value) => {
    //     console.log('ol')
    //     if(!isRename && id){
    //         setIsRename(true)
    //         console.log('ok')
    //         if(value){
    //             elemList[id].name = value
    //         }
    //     }
    //     else if(isRename){
    //         console.log('off')
    //         setIsRename(false)
    //     }
    // }

    const createFile = () => {
        elemList.push({id: elemList.length, name: 'New file', type: 'docx', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/.docx_icon.svg/1200px-.docx_icon.svg.png', left: pos[0], top: pos[1]})
    }
    const closeMenu = () => {
        setIsContextMenuOpen(false)
        props.closeMenu()
        // rename() СЛОМАНО
    }
    const contextMenuOpen = (e) => {
        setIsContextMenuOpen(!isContextMenuOpen)
        pos[0] = `${e.pageX}px`
        pos[1] = `${e.pageY}px`
    }
    
    return (
        <div onClick={closeMenu} onContextMenu={contextMenuOpen} className={styles.workTable}>
            { isContextMenuOpen ? <ContextMenu pos={pos} createFile={createFile} /> : '' }
            {/* СЛОМАНО <TableIcon elemList={elemList} rename={rename} isRename={isRename} />             */}
            <TableIcon elemList={elemList} />   
        </div>
    )
}
