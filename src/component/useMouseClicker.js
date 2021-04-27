import React, { useEffect, useState } from 'react';
export default function useMouseClicker(sampler) {
    const [, setClicked] = useState(null)
    const [, setReleased] = useState(null)
    const clickedRef = React.useRef(null)
    const releasedRef = React.useRef(null)
    const mousePressedRef = React.useRef(false)
    useEffect(() => {
        const handleMouseUp = (e) => {
            mousePressedRef.current = false;
            if(e.target.dataset === undefined) return
            const { note } = e.target.dataset
            clickedRef.current = null;
            releasedRef.current = note;
            setReleased(note)
            setClicked(null)
        }

        const handleMouseMove = (e) => {
            if (mousePressedRef.current === true) {
                if(e.target.dataset === undefined) return
                const { note } = e.target.dataset
                const prevNote = clickedRef.current;
                if(note !== prevNote){
                    clickedRef.current = note;
                    releasedRef.current = prevNote;
                    setClicked(note)
                    setReleased(prevNote)
                }
            }
        }
        const handleMouseDown = (e) => {
            mousePressedRef.current = true;
            const { note } = e.target.dataset
            if (!note) return
            clickedRef.current = note;
            releasedRef.current = null;
            setClicked(note)
            setReleased(null)
        }

        // Here instead of in path because I mouse sometimes get released not over the clicked note.
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }, [sampler])
    return [clickedRef.current, releasedRef.current]
}