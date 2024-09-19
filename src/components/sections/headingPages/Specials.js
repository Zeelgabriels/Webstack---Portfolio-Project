import Carousel from './SpecialsCarousel';
import JollofRice from '../../../assets/food/jollof-rice.png';
import FriedYam from '../../../assets/food/fried-yam.jpg';
import Fufu from '../../../assets/food/fufu.jpg';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/treeatsmenu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={JollofRice} name="Jollof Rice" price="₦4,000.00" description="Refreshing jollof rice, made with tomatoes, chillies, onions, and spices.
                 Dressed with garlic, plantain, and chicken."/>
                <SpecialCard image={FriedYam}name="Fried Yam" price="₦3,000.00" description="Oiled tomato stew, topped with fresh tomato, pepper, and snails. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image={Fufu} name="Fufu" price="₦3,500.00" description="Staple made from boiled and pounded cassava flour. Powdered by assorted meats,
                 and fish."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}