import React from 'react'
import Circle from '../../components/Circle'
import './style.scss'

export default function Basic() {
    return (
        <div className="preview-wrap">
            <div className="preview-item">
                <Circle></Circle>
            </div>
            <div className="preview-item">
                <Circle isGradient></Circle>
            </div>
            <div className="preview-item">
                <Circle 
                    isGradient
                    isBgShadow 
                    emptyColor="#f7f7f7" 
                    thicknessFg="10"
                    thicknessBg="20"
                    gradient={{
                        startColor: 'blue',
                        stopColor: 'green'
                    }}
                    >
                    </Circle>
            </div>
        </div>
    )
}
