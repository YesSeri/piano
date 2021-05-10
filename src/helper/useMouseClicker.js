import { useEffect, useState } from 'react';
export default function useMouseClicker(sampler) {
    const [clicked, setClicked] = useState(null)
    const [released, setReleased] = useState(null)
    useEffect(() => {
        const handleMouseUp = (e) => {
            if (e.target.dataset === undefined) return
            const { note } = e.target.dataset
            setReleased(note)
            setClicked(null)
        }

        const handleMouseMove = (e) => {
            if (clicked !== null) {
                console.log('move')
                if (e.target.dataset === undefined) return
                const { note } = e.target.dataset
                const prevNote = clicked;
                if (note !== prevNote) {
                    setClicked(note)
                    setReleased(prevNote)
                }
            }
        }
        const handleMouseDown = (e) => {
            const { note } = e.target.dataset
            if (!note) return
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
    }, [sampler, clicked])

    // Here the sound gets played
    useEffect(() => {
        if (clicked == null) return
        sampler.triggerAttack(clicked)
    }, [sampler, clicked])
    useEffect(() => {
        if (released == null) return
        sampler.triggerRelease(released)
    }, [sampler, released])

    return [clicked, released]
}