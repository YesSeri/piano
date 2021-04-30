import React, { useEffect } from 'react'
import createKeyInfo from '../helper/createKeyInfo';




const Overlay = ({ low, high, children, ...props }) => {
    const whiteKeyInfo = createKeyInfo(low, high)
    // The path is created here, if it is the first or last white key the left respectively the right corner should be rounded.


    function createWhiteKeys() {
        return whiteKeyInfo.map((key, i) => {
            const id = key.note.toLowerCase()
            if (i === 0) {
                return createKeyPath(id, key.note, 'white', 'm 0 0 v 107 a 3 3 0 0 0 3 3 h 27 v -110 z')
            } else if (i === whiteKeyInfo.length - 1) {
                return createKeyPath(id, key.note, 'white', `m ${i * 30} 0 v 110 h 27 a 3 3 0 0 0 3 -3 v -107 z `)
            } else {
                return createKeyPath(id, key.note, 'white', `m ${i * 30} 0 v 110 h 30 v -110 z`)
            }
        })
    }
    function createKeyPath(id, note, color, d) {
        return <path
            key={id} id={id}
            data-note={note}
            className={`${color}-key`}
            d={d}
            onContextMenu={(e) => e.preventDefault()}
        />
    }
    // Maps through all the white keys. If the white key should have a neighbour it creates a black key, unless it is the last white key. If it shouldnt have a neighbour it returns null.
    function createBlackKeys() {
        return whiteKeyInfo.map((key, i) => {
            const id = (key.note.substr(0, 1) + 's' + key.note.substr(1)).toLowerCase()
            const note = key.note.substr(0, 1) + '#' + key.note.substr(1)
            if (i === whiteKeyInfo.length - 1) {
                return null;
            }
            else if (key.hasNeighbour) {
                return createKeyPath(id, note, 'black', `m ${18 + 30 * i} 0 v 63 a 2 2 0 0 0 2 2 h 18 a 2 2 0 0 0 2 -2 v -63 z`)

            }
            else {
                return null
            }
        })
    }
    return (
        <div className='overlay' {...props} >
                <svg version="1.1" baseProfile="full" id='overlay__svg' viewBox={`-1 -1 ${whiteKeyInfo.length * 30 + 2} 112`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    {createWhiteKeys()}
                    {createBlackKeys()}
                </svg>
            <div className='overlay__overlay'>
                <div className='overlay__overlay__text'>
                    {children}
                </div>
            </div>
        </div>
    )
}

// This creates an array with all white keys, also containing info if the key has a black key next to it.

export default Overlay