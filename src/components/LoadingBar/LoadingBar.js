import React, { useEffect, useState, useRef } from 'react'
import styles from './LoadingBar.module.css'

export default function LoadingBar() {
    const canvasRef = useRef(null)
    const [a] = useState([])
    const [b, setB] = useState([])

    const move = (i) => {
        a[i] += 1
        if (a[i] >= 305) {
            a[i] = -5
        }
    }

    const draw = (ctx, x, y) => {
        for (let i = 0; i < 3; i++) {
            a.push(5 + (i * 15))
        }
        setInterval(() => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            for (let i = 0; i < 3; i++) {
                ctx.beginPath()
                let grd = ctx.createLinearGradient(0,0,300,0);
                grd.addColorStop(0,"#ff6a00");
                grd.addColorStop(0.2,"#37b804");
                grd.addColorStop(0.4,"#4093ff");
                grd.addColorStop(1,"#aa32bf");

                ctx.fillStyle = grd

                ctx.rect(a[i], 0, 10, 30)

                move(i)
                ctx.fill()
            }
        }, 10)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        draw(context, 300, 20)
    }, [])

    return (
        <canvas className={styles.loadingBar} width='300px' height='20px' ref={canvasRef} />
    );
}
