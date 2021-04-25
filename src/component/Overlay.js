import React from 'react'

const Overlay = ({ children, ...props }) => {
    return (
        <div className='overlaySmall' {...props} >
            <svg id='overlaySmall__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.196 32.279" preserveAspectRatio="none">
                <path id='c2-overlay' className='white-key piano-key' data-note='C2' d="M10.848.265v31.75H1.323a1.056 1.056 0 01-1.058-1.059V.265h10.583z" />
                <path id='d2-overlay' className='white-key piano-key' d="M10.848.265h10.583v31.75H10.848z" />
                <path id='e2-overlay' className='white-key piano-key' d="M21.431.265h10.583v31.75H21.431z" />
                <path id='f2-overlay' className='white-key piano-key' d="M32.015.265h10.583v31.75H32.015z" />
                <path id='g2-overlay' className='white-key piano-key' d="M42.598.265h10.583v31.75H42.598z" />
                <path id='a2-overlay' className='white-key piano-key' d="M53.181.265h10.583v31.75H53.181z" />
                <path id='b2-overlay' className='white-key piano-key' d="M63.765.265h10.583v31.75H63.765z" />
                <path id='c3-overlay' className='white-key piano-key' d="M74.348.265v31.75h9.525c.586 0 1.058-.472 1.058-1.059V.265H74.348z" />
                <path id='cs2-overlay' className='black-key piano-key' data-note='C#2' d="M15.081.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z" />
                <path id='ds2-overlay' className='black-key piano-key' d="M25.665.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z" />
                <path id='fs2-overlay' className='black-key piano-key' d="M46.831.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z" />
                <path id='gs2-overlay' className='black-key piano-key' d="M57.415.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z" />
                <path id='as2-overlay' className='black-key piano-key' d="M67.998.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.587 0-1.059-.44-1.059-.988V.265z" />
            </svg>
            <div className='overlaySmall__overlay'>
                <div className='overlaySmall__overlay__text'>
                    {children}
                </div>
            </div>
        </div >
    )
}

export default Overlay
