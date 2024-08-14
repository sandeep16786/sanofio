import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {
    const form = useRef();
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState(''); // New state for alert type
    const [formValid, setFormValid] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_subject: '',
        user_message: '',
    });

    // Regular expression for validating email and phone number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    const validateForm = () => {
        const { user_name, user_email, user_phone, user_subject, user_message } = formData;
        const isValid = 
            user_name.length >= 5 &&
            emailRegex.test(user_email) &&
            phoneRegex.test(user_phone) &&
            user_subject.length >= 5 &&
            user_message.length >= 10;
        setFormValid(isValid);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Restrict phone input to numeric characters only
        if (name === 'user_phone' && !/^[0-9]*$/.test(value)) {
            return;
        }

        setFormData({
            ...formData,
            [name]: value
        });
        validateForm();
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formValid) {
            setAlertType('danger'); // Set alert type to danger
            setAlertMessage('Please fill out all fields correctly.');
            setTimeout(() => {
                setAlertMessage('');
                setAlertType(''); // Clear alert type after message disappears
            }, 5000); // Clear the alert message after 5 seconds
            return;
        }

        emailjs
            .sendForm('service_kothwjl', 'template_sy5kqyn', form.current, {
                publicKey: '5osYasuSVTyeL_Tdf',
            })
            .then(
                () => {
                    setAlertType('success'); // Set alert type to success
                    setAlertMessage('Your data has been sent successfully!');
                    form.current.reset(); // Clear form fields
                    setFormData({
                        user_name: '',
                        user_email: '',
                        user_phone: '',
                        user_subject: '',
                        user_message: '',
                    });
                    setFormValid(false); // Disable button after submission
                    setTimeout(() => {
                        setAlertMessage('');
                        setAlertType(''); // Clear alert type after message disappears
                    }, 5000); // Clear the alert message after 5 seconds
                },
                (error) => {
                    setAlertType('danger'); // Set alert type to danger
                    setAlertMessage(`Failed to send data. Error: ${error.text}`);
                    setTimeout(() => {
                        setAlertMessage('');
                        setAlertType(''); // Clear alert type after message disappears
                    }, 5000); // Clear the alert message after 5 seconds
                }
            );
    };

    return (
        <section id="contact" className="home-contact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="home-contact-wrapper">
                            <div className="section-heading-middle">
                                <div className="sub-heading d-flex align-items-center mx-auto">
                                    <img src="src/assets/img/orangeDot.png" alt="orange-dot" />
                                    <p>My Contact</p>
                                </div>
                                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                    I WANT TO HEAR FROM YOU
                                </h2>
                            </div>

                            {alertMessage && (
                                <div className={`alert alert-${alertType}`} role="alert">
                                    {alertMessage}
                                </div>
                            )}

                            <div className="home-contact-info-container row row-mobile-margin mt-50 align-items-start">
                                <div className="col-12 col-md-8">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="row g-4">
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control home-contact-input"
                                                    placeholder="Your Name" name='user_name'
                                                    value={formData.user_name} onChange={handleInputChange}
                                                    required />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="email" className="form-control home-contact-input"
                                                    placeholder="Your Email" name='user_email'
                                                    value={formData.user_email} onChange={handleInputChange}
                                                    required />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="tel" className="form-control home-contact-input"
                                                    placeholder="Your Phone" name='user_phone'
                                                    value={formData.user_phone} onChange={handleInputChange}
                                                    required />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control home-contact-input"
                                                    placeholder="Subject" name='user_subject'
                                                    value={formData.user_subject} onChange={handleInputChange}
                                                    required />
                                            </div>
                                            <div className="col-12">
                                                <textarea placeholder="Message"
                                                    className="form-control home-contact-input" name='user_message'
                                                    value={formData.user_message} onChange={handleInputChange}
                                                    required></textarea>
                                            </div>
                                            <div className="col-12">
                                                <div className="col-12">
                                                    <button type="submit" value="Send"
                                                        className="btn orange-btn btn_effect row-mobile-margin mt-30"
                                                        disabled={!formValid}><span
                                                            className="z-1 position-relative">Send Me
                                                            Message</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-12 col-md-4 home-contact-icon-container">
                                    <div className="row row-mobile-margin gy-3 gy-sm-0">
                                        <div className="col-12 d-flex align-items-center">
                                            <div className="mr-10">
                                                <div className="light-orange-bg-icon">
                                                    <i className="fa-solid fa-location-dot orange-color"></i>
                                                </div>
                                            </div>
                                            <div className="about-complete-project">
                                                <h4 className="fw-500 black-color h4">Address</h4>
                                                <p className="fw-400 secondary-black">
                                                    <a href="geo:377749">
                                                        B/286, HIRABAUG 2 SOCIETY, NR-GHATLODIYA,
                                                        SATADHAR CROSS ROAD, AHMEDABAD-380061
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex align-items-center row-mobile-margin mt-50">
                                            <div className="mr-10">
                                                <div className="light-orange-bg-icon">
                                                    <i className="fa-solid fa-phone-volume orange-color"></i>
                                                </div>
                                            </div>
                                            <div className="about-years-experience">
                                                <h4 className="fw-500 black-color h4">Phone</h4>
                                                <p className="fw-400 secondary-black">
                                                    <a href="tel:9624660186">(+91) 9624660186</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex align-items-center row-mobile-margin mt-50">
                                            <div className="mr-10">
                                                <div className="light-orange-bg-icon">
                                                    <i className="fa-solid fa-envelope orange-color"></i>
                                                </div>
                                            </div>
                                            <div className="about-years-experience">
                                                <h4 className="fw-500 black-color h4">Email</h4>
                                                <p className="fw-400 secondary-black">
                                                    <a href="mailto:Sandeepdodiya1@gmail.com">
                                                        Sandeepdodiya1@gmail.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contactus;
