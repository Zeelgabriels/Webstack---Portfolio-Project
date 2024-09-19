import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Treeats Cuisine</h1>
                    <h2>Old GRA, Port Harcourt</h2>
                    <p className="subsection">Welcome to Treeats Cuisine! Where tradition meets innovation, and every bite tells a story. 
                    Enjoy our delicious local and intercontinental dishes, crafted with love, and served with warmth.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/food1.webp')} alt="Treeats cuisine"></img>
                </section>
            </article>
      </header>
    );
}
