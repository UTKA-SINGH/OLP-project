import { useState } from 'react';
import '../styles/Registration.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import bann2 from '../images/poster.png';
import bann15 from '../images/poster2.jpg';
import bann16 from '../images/poster3.jpg';
import bann3 from '../images/Ai.jpg';
import bann4 from '../images/power.jpg';
import bann5 from '../images/marketing.jpg';
import bann6 from '../images/cy.jpeg';
import bann7 from '../images/love.jpg';
import bann8 from '../images/harry.jpg';
import bann9 from '../images/aws.jpg';
import bann10 from '../images/ui.jpg';
import bann11 from '../images/hands.webp';
import bann12 from '../images/certi.webp';
import bann13 from '../images/customizable.png';
import bann14 from '../images/insights.png';
export function LandingPage () {
    const slides = [
        {
            image: bann16,
            heading: "In-demand skills. Available on demand.",
            description: "Get the top skills that others are using to advance their careers",
        },

        {
            image: bann15,
            heading: "Skills that drive you forward",
            description: "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
        },

        {
            image: bann2,
            heading: "A world of learning from ₹499",
            description: "Expand your horizons with learning that’s worldwide. Save now through March 20.",
        },
       
    ];

    const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide
    const [visibleImage, setVisibleImage] = useState(null);
    const [activeButton, setActiveButton] = useState(null);

    const boxImages = {
        handsOnTraining: bann11,
        certificationPrep: bann12,
        insightsAnalytics: bann13,
        customizableContent: bann14,
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Move to the next slide
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length); // Move to the previous slide
    };
   

    const handleShowImage = (imageKey) => {
        setVisibleImage(imageKey);
        setActiveButton(imageKey);
    };

    return (
        <div className="landingpage">
            <Navbar/>
            
               <div className="BannerContainer">
                 <button className="arrow left" onClick={goToPrevious}>
                &#8249; {/* Left arrow character */}
            </button>

            <div className="slide">
                    <img src={slides[currentIndex].image} alt="Banner" />
                    <div className="BannerText">
                        <h1>{slides[currentIndex].heading}</h1>
                        <p>{slides[currentIndex].description}</p>
                    </div>
                </div>

            <button className="arrow right" onClick={goToNext}>
                &#8250; {/* Right arrow character */}
            </button>
                 </div>
        <div className="mid">
                <h2>All the skills you need in one place</h2>
                <p>From critical skills to technical topics, Team Learner's supports your professional development.</p>
        </div>

        <div className="content">

            <div className="subcontent">
            <a href="https://youtu.be/NNG5zJTR6T0?si=K74dUSmgZdVY23oD" target="_blank" rel="noopener noreferrer">
            <img src={bann3} alt="Ai image" />
                <h3>The Complete Al Guide: Learn ChatGPT, Generative Al & More </h3>
                <p> By: AI Foundation</p>
                </a>
            </div>

            <div className="subcontent">
            <a href="https://youtu.be/5BD0m-bWdBQ?si=UXTrfE3BbCNePh91" target="_blank" rel="noopener noreferrer">
            <img src={bann4} alt="powered image" />
            <h3>The Complete Al-Powered Copywriting Course & ChatGPT... </h3>
            <p> By: Tomas Moravek</p>
            </a>
            </div>

            <div className="subcontent">
              <a href="https://youtu.be/Fhdm0eNpE4Q?si=GWZjKgLVi5H76_XQ " target="_blank" rel="noopener noreferrer">
              <img src={bann5} alt="marketing image" />
                <h3>ChatGPT, DeepSeek, Grok and
                30+ More Al Marketing Assistants</h3>
                <p>By: Julian Goldie SEO </p>
                </a>
            </div>

            <div className="subcontent">
            <a href="https://youtu.be/cKEf8H9cQGM?si=lGMzvcR2x7UqFjvO" target="_blank" rel="noopener noreferrer">
            <img src={bann6} alt="master image" />
            <h3>Ethical Hacking Full Course for Beginners in 5 Hours - 2024 Edition</h3>
            <p>By: WsCube Cyber Security</p>
            </a>
            </div>
        </div>
        <div className="content">

        
            <div className="subcontent">
  <a href="https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&si=Ru-R5ESdht841gDh " target="_blank" rel="noopener noreferrer">
    <img src={bann7} alt="love" />
    <h3>The Complete Full-Stack Web Development Bootcamp</h3>
    <p>By: Love Babbar, Developer and YouTuber</p>
  </a>
</div>


            <div className="subcontent">
            <a href="https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=RuooqQy22oebc0Ea" target="_blank" rel="noopener noreferrer">
            <img src={bann8} alt="JS" />
            <h3>Python for Beginners (Full Course) | #100DaysOfCode</h3>
            <p> By: Code with Harry, Google Developer & Mentor</p>
            </a>
            </div>

            <div className="subcontent">
            <a href="https://youtube.com/playlist?list=PLt1SIbA8guuvfvUDVLpJepmbnYpOfYCIB&si=V-S4LWcHYQd73M2f" target="_blank" rel="noopener noreferrer">
            <img src={bann9} alt="AWS" />
                <h3>[NEW] Ultimate AWS Certified
                Cloud Practitioner CLF-C02 2025</h3>
                <p>By: Stephane Maarek , AWS Developer</p>
                 </a>
            </div>

            <div className="subcontent">
            <a href="https://youtu.be/j6Ule7GXaRs?si=LjzSBvzDX39whqsn" target="_blank" rel="noopener noreferrer">
            <img src={bann10} alt="cloud" />
            <h3>Learn Web Design For Beginners - Full Course 2025</h3>
            <p>By: John Doe, Senior Flux Academy Mentor</p>
            </a>
            </div>
        </div>
        <div className="goal">
            <h1>Learning focused on your goals</h1>
            </div>

            <div className="Guide">

        <div className="Goals">
                <div className="box">
                    <h2>Hands-on training</h2>
                    <p>Upskill effectively with Al-powered coding exercises, practice tests, and quizzes.</p>
                    <button className={`box-button ${activeButton === 'handsOnTraining' ? 'active' : ''}`}
                    onClick={() => handleShowImage('handsOnTraining')}>Find out more 🡢</button>
                </div>

                <div className="box">
                    <h2>Certification prep</h2>
                    <p>Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.</p>
                    <button className={`box-button ${activeButton === 'certificationPrep' ? 'active' : ''}`}
                     onClick={() => handleShowImage('certificationPrep')}>Explore Courses 🡢</button>
                </div>

                <div className="box">
                    <h2>Insights and analytics</h2>
                    <p>Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.</p>
                    <button className={`box-button ${activeButton === 'insightsAnalytics' ? 'active' : ''}`}
                     onClick={() => handleShowImage('insightsAnalytics')}>Find out more 🡢</button>
                    </div>

                <div className="box">
                    <h2>Customizable content</h2>
                    <p>Create tailored learning paths for team and organization goals and even host your own content and resources.</p>
                    <button className={`box-button ${activeButton === 'customizableContent' ? 'active' : ''}`}
                    onClick={() => handleShowImage('customizableContent')}>Find out more 🡢
                </button>
                </div>
        </div>
        <div className="imgContainer">
                    {visibleImage && <img src={boxImages[visibleImage]} alt="Content details" />}
                </div>
        </div>
            <Footer/>
        </div>
    )
}