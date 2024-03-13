import * as React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from  "../../components/header/Header";
import Footer from '../../components/Footer';
import "./termsAndConditions.css";

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
        { id: 'section-01', title: 'Services Offered' },
        { id: 'section-02', title: 'Booking and Payment' },
        { id: 'section-03', title: 'User Responsibilities' },
        { id: 'section-04', title: 'Changes and Service Interruptions' },
        { id: 'section-05', title: 'User Conduct and Compliance' },
        { id: 'section-06', title: 'Intellectual Property' },
        { id: 'section-07', title: "Privacy Policy" },
        { id: 'section-08', title: 'Governing Law' },
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
                    <h1>Terms and Conditions for Online Hotel Reservation</h1>
                    <p className="lastUp">Last Updated: March 13, 2024</p>

                    <p>
                        Welcome to our online hotel reservation website. Before using our services, 
                        please carefully read the following terms and conditions. By accessing and 
                        using our site, you agree to be bound by these terms and conditions.
                    </p>

                    <h2 id="section-01">01 | Services Offered</h2>
                    <p>
                        Our website acts as a platform to facilitate online hotel reservations. 
                        We serve as an intermediary between users and various hotel establishments 
                        to streamline the booking process.
                    </p>

                    <h2 id="section-02">02 | Booking and Payment</h2>
                        <p>a. By initiating a reservation, users commit to providing accurate and complete information during the booking process.</p>
                        <p>b. Payments are processed securely through our platform. Additional fees may be applicable based on the policies established by the chosen hotel.</p>
                        <p>c. Cancellation and refund policies are subject to the specific terms outlined by each individual hotel.</p>

                    <h2 id="section-03">03 | User Responsibilities</h2>
                    
                        <p>a. Users are responsible for maintaining the confidentiality of their login credentials.</p>
                        <p>b. Access to and use of the site is restricted to individuals who are of legal age and possess the necessary legal capacity.</p>
                        <p>c. Users agree not to utilize the site for any illegal or prohibited activities.</p>

                    <h2 id="section-04">04 | Changes and Service Interruptions</h2>
                    <p>
                        We reserve the right to modify, suspend, or terminate our services at 
                        any time, without prior notice. We disclaim any liability for consequences 
                        resulting from such modifications or interruptions.
                    </p>

                    <h2 id="section-05">05 | User Conduct and Compliance</h2>
                        <p>a. Users are expected to adhere to all applicable laws and regulations when using our services.</p>
                        <p>b. Any misuse of the website, including but not limited to hacking or unauthorized access, is strictly prohibited.</p>
                        <p>c. Users shall not engage in any activities that could disrupt or interfere with the proper functioning of the website.</p>

                    <h2 id="section-06">06 | Intellectual Property</h2>
                    <p>
                        All content, trademarks, logos, and intellectual property displayed 
                        on our site are the property of our company or respective third parties. 
                        Unauthorized use is strictly prohibited.
                    </p>

                    <h2 id="section-07">07 | Privacy Policy</h2>
                    <p>
                        Please refer to our Privacy Policy for details on how we collect, use, 
                        and protect your personal information.
                    </p>

                    <h2 id="section-08">08 | Governing Law</h2>
                    <p>
                        These terms and conditions are governed by and construed in accordance 
                        with the laws of [Jurisdiction]. Any disputes arising out of or related 
                        to these terms shall be resolved through binding arbitration in accordance 
                        with the rules of the [Arbitration Institution], and the decision shall be 
                        final and binding.
                    </p>

                    <p>
                        By using our services, you acknowledge that you have read, understood, 
                        and agreed to these terms and conditions. If you do not agree with any part of 
                        these terms, please refrain from using our website. We reserve the right 
                        to update or modify these terms at any time without prior notice, 
                        and such changes will be effective upon posting on the website.
                    </p>

                    <p>Thank you for choosing Company Co.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};