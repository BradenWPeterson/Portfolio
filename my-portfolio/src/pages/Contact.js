// src/pages/Contact.js
import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';

function Contact() {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <div className="contact-info">
                <div className="contact-item">
                    <MdEmail className="contact-icon" />
                    <a href="mailto:your.email@example.com">bradenwpeterson@gmail.com</a>
                </div>
                <div className="contact-item">
                    <MdPhone className="contact-icon" />
                    <a href="tel:+18018641582">(801) 864-1582</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
