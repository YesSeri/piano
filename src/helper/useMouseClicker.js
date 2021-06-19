import { useEffect, useState } from 'react';
export default function useMouseClicker(sampler, loading) {
    const [clicked, setClicked] = useState(null)
    const [released, setReleased] = useState(null)
    useEffect(() => {
        const handleMouseUp = (e) => {
            const { note } = e.target.dataset
            setReleased(note)
            setClicked(null)
        }

        const handleMouseMove = (e) => {
            if (clicked !== null && e.target.dataset !== undefined) {
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
            setClicked(note)
            setReleased(null)
        }

        // Here instead of in path because I mouse sometimes get released not over the clicked note.
        if (!loading) {
            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }, [sampler, clicked, loading])

    // Here the sound gets played
    useEffect(() => {
        if (clicked == null) return
        sampler.triggerAttack(clicked)
    }, [sampler, clicked])
    useEffect(() => {
        if (released == null) return
        sampler.triggerRelease(released)
    }, [sampler, released])
    return clicked
}