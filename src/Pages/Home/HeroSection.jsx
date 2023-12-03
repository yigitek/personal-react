export default function HeroSection(){
    return (
        <section id ="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Yuvvid</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--desctiption">
                        Anankere anankere anankere
                    </p>
                    <br /> Manankere
                </div>
                <button className="btn btn--priary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section"></img>
            </div>
        </section>
    )
}