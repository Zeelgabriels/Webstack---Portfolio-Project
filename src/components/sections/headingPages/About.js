export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Treeats Cuisine</h1>
                <h2>Old GRA, Port Harcourt</h2>
                <p className="about-subtext">Treeats Cuisine was born from a passion to bring people together through delicious food and warm hospitality. 
                Founded in 2018 by Ifeanyi and Isioma, a Nigerian duo with a love for global cuisine, Treeats Cuisine fills a gap in Port Harcourt's culinary scene.
                Inspired by their travels and family traditions, Ifeanyi and Isioma crafted a menu blending African flavors with international twists.
                With roots in Delta State, Southern Nigeria, Treeats aims to become a beloved gathering spot, serving mouthwatering treats that transport customers to a world of comfort and joy. 
                Still family-owned and operated, Treeats Cuisine welcomes you to our table.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpg')} alt="Treats Cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Treats Cuisine 2"></img>
            </section>
    </article>
    );
}