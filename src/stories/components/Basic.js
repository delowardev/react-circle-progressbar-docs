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
                    strokeWidth="10"
                    strokeWidthBg="20"
                    >
                    </Circle>
            </div>
        </div>
    )
}
