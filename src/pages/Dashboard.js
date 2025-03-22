/*import '../styles/CoursesDashboard.css';
import { RegisteredNavbar } from '../components/RegisteredNavbar';
import { Footer } from '../components/Footer';
export function Dashboard (){
    return (
        <div className="dashboard">
            <RegisteredNavbar/>
            <div >
                <h1>Welcome User</h1>   
                <h2>Hello Learners!!!</h2>          
            </div>
            <Footer/>
        </div>
    )
} */

import '../styles/CoursesDashboard.css';
import { RegisteredNavbar } from '../components/RegisteredNavbar';
import { Footer } from '../components/Footer';

export function Dashboard() {
    const userName = "Learner's "; // Replace with dynamic user data when available

    return (
        <div>
            <RegisteredNavbar />
            <div className="dashboard">
            <div className="dashboard-content">
                <h1>Welcome, {userName}!</h1>
                <h2>Hello Learners!!! Ready to continue your journey?</h2>
                
                <div className="dashboard-sections">
                    {/* Current Progress */}
                    <section className="progress-section">
                        <h3>Your Current Progress</h3>
                        <p>Course: React for Beginners</p>
                        <p>Progress: 45%</p>
                        <progress value="45" max="100"></progress>
                    </section>

                    {/* Recommended Courses */}
                    <section className="recommend-section">
                        <h3>Recommended Courses</h3>
                        <ul>
                            <li>Advanced JavaScript Concepts</li>
                            <li>Full-Stack Development Bootcamp</li>
                            <li>Data Structures & Algorithms</li>
                        </ul>
                    </section>

                    {/* Announcements */}
                    <section className="announcements-section">
                        <h3>Announcements</h3>
                        <p>New courses added this week! Check out the latest in AI and Machine Learning.</p>
                        <p>Join our weekly live Q&A on Fridays!</p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
        </div>
    );
}
