import * as React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from  "../../components/header/Header";
import Footer from '../../components/Footer';
import "./privacyPolicy.css";

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
        { id: 'section-01', title: 'Information We Collect' },
        { id: 'section-02', title: 'How We Use Your Information' },
        { id: 'section-03', title: 'Information Sharing' },
        { id: 'section-04', title: 'Cookies and Similar Technologies' },
        { id: 'section-05', title: 'Data Security' },
        { id: 'section-06', title: 'Your Choices' },
        { id: 'section-07', title: "Children's Privacy" },
        { id: 'section-08', title: 'Changes to this Privacy Policy' },
        { id: 'section-contact', title: 'Contact Us' },
    ];

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            
            <div className="privacy-policy-container">
                <div className={`table-of-contents ${activeSection === 'section-contact' ? 'limit-height' : ''}`}>
                    <h3>Table of Contents</h3>
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
                <div className="privacy-policy-content">
                    <h1>Privacy Policy</h1>
                    <p className="lastUp">Last Updated: March 13, 2024</p>

                    <p>
                        Welcome to Company Co (the "Company," "we," "us," or "our").
                        This Privacy Policy outlines how we collect, use, disclose, and
                        safeguard your personal information when you visit our website or use
                        our online hotel reservation services.
                    </p>

                    <p>
                        By accessing or using our website and services, you agree to the terms
                        and practices described in this Privacy Policy.
                    </p>

                    <h2 id="section-01">01 | Information We Collect</h2>
                    <p>
                        We may collect personal information when you interact with our website
                        or use our services. This information may include:
                    </p>
                    <ul>
                        <li>Contact Information: Name, email address, phone number, and mailing
                        address.</li>
                        <li>Reservation Details: Dates of stay, hotel preferences, and payment
                        information.</li>
                        <li>User Account Information: Username, password, and other
                        account-related details.</li>
                        <li>Browsing Information: IP address, browser type, device type, and
                        other technical information.</li>
                    </ul>

                    <h2 id="section-02">02 | How We Use Your Information</h2>
                    <p>
                        We use your personal information for the following purposes:
                    </p>
                    <ul>
                        <li>
                        <strong>Process Reservations:</strong> To facilitate hotel reservations and provide booking confirmations.
                        </li>
                        <li>
                        <strong>Customer Support:</strong> To respond to inquiries, provide assistance, and address concerns.
                        </li>
                        <li>
                        <strong>Personalization:</strong> To tailor our services and recommendations based on your preferences.
                        </li>
                        <li>
                        <strong>Communication:</strong> To send updates, promotional offers, and important notifications.
                        </li>
                        <li>
                        <strong>Analytics:</strong> To analyze website usage, improve our services, and enhance user experience.
                        </li>
                    </ul>

                    <h2 id="section-03">03 | Information Sharing</h2>
                    <p>
                        We may share your personal information with third parties under the following circumstances:
                    </p>
                    <ul>
                        <li>
                        <strong>Service Providers:</strong> We may share information with trusted 
                        third-party service providers to assist us in delivering our services.
                        </li>
                        <li>
                        <strong>Legal Compliance:</strong> We may disclose information in response 
                        to legal requests or to comply with applicable laws and regulations.
                        </li>
                        <li>
                        <strong>Business Transfers:</strong> In the event of a merger, acquisition, 
                        or sale of assets, your information may be transferred to the acquiring entity.
                        </li>
                    </ul>

                    <h2 id="section-04">04 | Cookies and Similar Technologies</h2>
                    <p>
                        We use cookies and similar technologies to enhance your browsing 
                        experience and collect information about your usage patterns.
                        You can manage your cookie preferences through your browser settings.
                    </p>

                    <h2 id="section-05">05 | Data Security</h2>
                    <p>
                        We implement reasonable security measures to protect your personal 
                        information from unauthorized access, disclosure, alteration, and destruction.
                    </p>

                    <h2 id="section-06">06 | Your Choices</h2>
                    <p>
                        You have the right to review, update, and delete your personal 
                        information. You can also opt-out of receiving promotional communications.
                    </p>

                    <h2 id="section-07">07 | Children's Privacy</h2>
                    <p>
                        Our services are not intended for individuals under the age of 18. 
                        We do not knowingly collect personal information from children.
                    </p>

                    <h2 id="section-08">08 | Changes to this Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy periodically. We will notify you of
                        any significant changes by posting the updated version on our website.
                    </p>

                    <h2 id="section-contact">Contact Us</h2>
                    <p>
                        If you have any questions or concerns regarding this Privacy Policy,
                        please contact us at <b>contact@timeshare.com</b>.
                    </p>

                    <p>Thank you for choosing Company Co.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};