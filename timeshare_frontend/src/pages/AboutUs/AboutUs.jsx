import * as React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from  "../../components/header/Header";
import Footer from '../../components/Footer';
import "./aboutUs.css";

export default function PrivacyPolicy() {

    const [activeSection, setActiveSection] = React.useState(null);

    const handleSectionClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    const sections = [
        { id: 'section-01', title: 'Our Dedication to Quality' },
        { id: 'section-02', title: 'Harnessing the Power of Technology' },
        { id: 'section-03', title: 'Exceptional Customer Service' },
        { id: 'section-04', title: 'Our Commitment to Security' },
        { id: 'section-05', title: 'Our Commitment to Security' },
        { id: 'section-06', title: 'Explore the World with Timeshare' },
        { id: 'section-07', title: "Join Us on Your Journey" },
    ];

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            
            <div className="about-us-container">
                <div className={`table-of-contents ${activeSection === 'section-contact' ? 'limit-height' : ''}`}>
                    <h3>About us</h3>
                    {sections.map((section, index) => (
                        <p
                            key={section.id}
                            className={activeSection === section.id ? 'active' : ''}
                            onClick={() => handleSectionClick(section.id)}
                        >
                            {section.title}
                        </p>
                    ))}
                </div>
                <div className="about-us-content">
                    <h1>Welcome to Timeshare - Your Trusted Hub for Effortless Hotel Booking</h1>

                    <p>At Timeshare, we believe that every journey should be an extraordinary adventure, 
                        and our commitment is to make it happen for you. As a premier online hotel reservation platform, 
                        we've curated a seamless blend of convenience, reliability, and innovation, aiming to redefine 
                        your travel experience through the lens of simplicity and satisfaction.</p>

                    <h2 id="section-01">Our Dedication to Quality</h2>
                    <p>
                        We recognize the significance of quality in hospitality, and thus, 
                        our platform hosts a diverse array of accommodations. From chic boutique 
                        establishments to grand luxury hotels, we've meticulously chosen each option 
                        to cater to varied tastes and preferences. Our dedicated team tirelessly 
                        works to ensure that every listed property meets the highest standards 
                        of excellence.
                    </p>

                    <h2 id="section-02">Harnessing the Power of Technology</h2>
                        <p>Embark on your journey with Timeshare, where your travel experience begins 
                            before you step through your room's door. Our user-friendly platform empowers you 
                            to explore an extensive selection of hotels, compare prices, delve into authentic reviews, 
                            and seamlessly make reservations. We leverage cutting-edge technology to make the booking 
                            process transparent, efficient, and enjoyable.</p>

                    <h2 id="section-03">Exceptional Customer Service</h2>
                    
                        <p>Your satisfaction is our paramount concern. Our customer service team is available 24/7, 
                            dedicated to answering your queries, resolving issues, and ensuring a worry-free experience.
                            We believe in open and transparent communication, placing the customer at the core of our operations.</p>

                    <h2 id="section-04">Our Commitment to Security</h2>
                    <p>
                        We understand the importance of safeguarding your data and transactions. 
                        Employing state-of-the-art security technologies, we guarantee that your personal information 
                        remains confidential, and your online transactions are secure.
                    </p>

                    <h2 id="section-05">Explore the World with Timeshare</h2>
                        <p>Whether you're planning a business trip, a family vacation, or a romantic getaway, 
                            Timeshare is your trusted companion in discovering and booking accommodations. 
                            We take pride in contributing to making every stay an unforgettable experience.</p>

                    <h2 id="section-06">Join Us on Your Journey</h2>
                    <p>
                        At Timeshare, we're more than just a booking platform; we're your travel companion, 
                        dedicated to transforming your every trip into a cherished memory. Welcome to Timeshare - 
                        Where the World Awaits You, and Every Stay is a Journey in Itself.
                    </p>

                    <p>Thank you for choosing Company Co.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};