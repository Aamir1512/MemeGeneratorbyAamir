import React from 'react'

export default function Spinner() {
    return (
        <div style={{"margin" : "auto"}}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
