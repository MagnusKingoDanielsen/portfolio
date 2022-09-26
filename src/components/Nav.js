import { useState } from "react";
import { NavLink } from "react-router-dom";



export default function Nav() {
    const [color, setColor] = useState(false)
    const COLOR_CHANGE_THRESHOLD = 1;
    const changeColor = () => {
        if(window.scrollY >= COLOR_CHANGE_THRESHOLD && color !== true){
            setColor(true)
        }
        if(window.scrollY < COLOR_CHANGE_THRESHOLD && color !== false){
            setColor(false)
        }}
        
        window.addEventListener('scroll',changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
        <div className="headerItems">
            <a href="#Top">top</a>
            <a href="#projekt">mine projekter</a>
            <a href="#omMig">om mig</a>
        </div>
        </div>
    );
}
