import React from "react";
import Carousel from 'react-material-ui-carousel';
import Slider1 from './slider1.jpg';
import Slider2 from './slider2.jpg';
import Slider3 from './slider3.jpg';
interface Props{
    
}

const Slider:React.FC<Props> =()=>{
    const item =[
        {img:Slider1},
        {img:Slider2},
        {img:Slider3},
    ]
    return (
        <>
        <Carousel
            fullHeightHover={false}    
            autoPlay={true}
            interval={4000}
            animation="slide"
            >
            {
                item.length !== 0?
                item.map( (obj, i) => <img src={obj.img} className="silder" width="100%" height="30%" key={i}/> )
                :
                <p>No Image Slider</p>
            }
            </Carousel>  
        </>
    );
    
};
export default Slider;
