import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/Slider';
import './index.css'

if (module.hot) module.hot.accept()

ReactDOM.render(
    <Slider/>,
    document.getElementById('app')
)