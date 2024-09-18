import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Blessing Onyeka Ogunsekan" description="This is the best place for local and intercontinental dishes.
            I got the best treat ever!"/>
            <TestimonialCard name="Olatunde Akin-Oluyomi" description="My lovely wife and children really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard name="Sibigam Nwachukwu" description="I've had some great local food before, but none of them beats
             Treats Cuisine in flavor and texture."/>
            <TestimonialCard name="Humphrey Chukwu" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
            <TestimonialCard name="Mercy Chidinma Ogobuiro" description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
            <TestimonialCard name="Samuel Asegiemhe" description="I came to Treeats after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
            <TestimonialCard name="Ama Alama Nneka" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Port Harcourt."/>
            <TestimonialCard name="Iheanacho Okoro" description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
             </Carousel>
    )
}