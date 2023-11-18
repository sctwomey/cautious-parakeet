const About = () => {
    return (
        <>
            <h2 className='about-retro-h2'>About</h2>
            <div className="container about-container">
                <div className="row justify-content-center">
                    <div className="col">
                        <img className="img-about" src="/images/record-display.jpg" alt="Diplay of Records" />
                    </div>
                    <div className="col about-paragraph d-flex align-items-center">
                        <p>
                            Music sets a tone, impacts a mood, connects people, documents history, influences culture, and simply makes life better! Here at Retro Rewind we want you to experience music the way it was meant to be.
                            <br /><br />
                            Have a Question, or just want to talk music? Drop us a line <a href="/contact">here</a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;