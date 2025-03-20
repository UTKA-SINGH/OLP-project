// 




import '../styles/Registration.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import bann2 from '../images/poster.png';
import bann3 from '../images/Ai.jpg';
import bann4 from '../images/power.jpg';
import bann5 from '../images/marketing.jpg';
import bann6 from '../images/master.jpg';
import bann7 from '../images/angela.jpg';
import bann8 from '../images/angelajs.jpg';
import bann9 from '../images/aws.jpg';
import bann10 from '../images/cloud.jpg';
export function LandingPage () {
    return (
        <div className="landingpage">
            <Navbar/>
            
               <div className="BannerContainer">
                <img src={bann2} alt="Banner image" />

                    <div className="BannerText">
                       <h1>A world of learning from ₹499</h1> 
                       <p>Expand your horizons with learning that’s worldwide. 
                        <br></br>Save now through March 20.</p>
                    </div>
                 </div>
        <div className="mid">
                <h2>All the skills you need in one place</h2>
                <p>From critical skills to technical topics, Udemy supports your professional development.</p>
        </div>

        <div className="content">

            <div className="subcontent">
            <img src={bann3} alt="Ai image" />
                <h3>The Complete Al Guide: Learn ChatGPT, Generative Al & More </h3>
                <p> Julian Melanson, Benza Maman, Leap...</p>
            </div>

            <div className="subcontent">
            <img src={bann4} alt="powered image" />
            <h3>The Complete Al-Powered Copywriting Course & ChatGPT... </h3>
            <p> Ing. Tomas Moravek, Learn Digital..</p>
            </div>

            <div className="subcontent">
            <img src={bann5} alt="marketing image" />
                <h3>ChatGPT, DeepSeek, Grok and
                30+ More Al Marketing Assistants</h3>
                <p>Anton Voroniuk, Anton Voroniuk Suppor...</p>
            </div>

            <div className="subcontent">
            <img src={bann6} alt="master image" />
            <h3>Mastering SEO With ChatGPT: Ultimate Beginner's Guide</h3>
            <p>Anton Voroniuk, Anton Voroniuk Support</p>
            </div>
        </div>
        <div className="content">

            <div className="subcontent">
            <img src={bann7} alt="PYTHON" />
                <h3>100 Days of Code: The Complete Python Pro Bootcamp</h3>
                <p> Dr. Angela Yu, Developer and Lead...</p>
            </div>

            <div className="subcontent">
            <img src={bann8} alt="JS" />
            <h3>The Complete Full-Stack Web Development Bootcamp</h3>
            <p> Dr. Angela Yu, Developer and Lead...</p>
            </div>

            <div className="subcontent">
            <img src={bann9} alt="AWS" />
                <h3>[NEW] Ultimate AWS Certified
                Cloud Practitioner CLF-C02 2025</h3>
                <p>Stephane Maarek | AWS Certified Cloud..</p>
            </div>

            <div className="subcontent">
            <img src={bann10} alt="cloud" />
            <h3>Ultimate AWS Certified Solutions Architect Associate 2025</h3>
            <p>Stephane Maarek | AWS Certified Cloud...</p>
            </div>
        </div>
        <div className="goal">
            <h1>Learning focused on your goals</h1>
            </div>
        <div className="Goals">
                <div className="box">
                    <h2>Hands-on training</h2>
                    <p>Upskill effectively with Al-powered coding exercises, practice tests, and quizzes.</p>
                </div>

                <div className="box">
                    <h2>Certification prep</h2>
                    <p>Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.</p>
                    <a href="#">Explore Courses 🡢</a>
                </div>

                <div className="box">
                    <h2>Insights and analytics</h2>
                    <p>Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.</p>
                    <a href="#">Find out more 🡢</a>
                </div>

                <div className="box">
                    <h2>Customizable content</h2>
                    <p>Create tailored learning paths for team and organization goals and even host your own content and resources.</p>
                    <a href="#">Find out more 🡢</a>
                </div>
        </div>
            <Footer/>
        </div>
    )
}