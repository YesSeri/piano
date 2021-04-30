import React from 'react'
const PianoContainer = React.lazy(() => import('./PianoContainer'));

const LazyPianoContainer = ({ high, low }) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <PianoContainer high={high} low={low} />
        </React.Suspense>
    )
}

export default LazyPianoContainer
