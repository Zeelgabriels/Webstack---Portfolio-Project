import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import JollofRice from '../../../assets/food/jollof-rice.png';
import FriedYam from '../../../assets/food/fried-yam.jpg';
import Fufu from '../../../assets/food/fufu.jpg';
import SpecialCard from './CardInfo/SpecialCard';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={JollofRice} name="Jollof Rice" price="₦4,000.00" description="Long-grained Rice, plantain, chicken"/>
            <SpecialCard image={FriedYam}name="Fried Yam" price="₦3,000.00" description="Fried Yam, tomoato sauce, snails"/>
            <SpecialCard image={Fufu} name="Fufu" price="₦3,500.00" description="Cassava Flour, melon soup, assorted meats"/>
        </Carousel>
    )
}