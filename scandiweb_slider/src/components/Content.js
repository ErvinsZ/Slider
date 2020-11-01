import React from 'react'


function Content({ src }) {
    let contentStyle={
        width:100+"%",
        height:100+"%"
    }
    return <img src={src} alt="slide-img" style={contentStyle}></img>
}

export default Content