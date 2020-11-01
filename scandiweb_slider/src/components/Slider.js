import React, {useState} from 'react'
import '../slider.css'
import Content from './Content'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'


function Slider(){
    let sliderArray = [<Content src={img1}/>, <Content src={img2}/>, <Content src={img3}/>, <Content src={img4}/>, <Content src={img5}/>];
    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x +100)
    };
    const goRight = () => {
        (x=== -100*(sliderArray.length -1)) ? setX(0) : setX(x-100)
    }

    return(
        <div className="slider">
        {sliderArray.map((item,index)=>{
            return(
                <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                    {item}
                </div>
            )
        })}
        <button id="goLeft" onClick={goLeft}><i class="fas fa-chevron-left fa-4x"></i></button>
        <button id="goRight" onClick={goRight}><i class="fas fa-chevron-right fa-4x"></i></button>
        </div>
    )
}

export default Slider