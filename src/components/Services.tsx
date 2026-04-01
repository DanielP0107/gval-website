import React from 'react';
import { FiHardHat, FiZap, FiBriefcase, FiRefreshCw, FiClipboard, FiCheckSquare } from 'react-icons/fi';
import './Services.css'; // Ensure to have the styling for services

const services = [
    { title: 'Engineering', icon: <FiHardHat />, description: 'Quality engineering services.' },
    { title: 'Consulting', icon: <FiBriefcase />, description: 'Professional consulting.' },
    { title: 'Innovation', icon: <FiZap />, description: 'Innovative solutions for your needs.' },
    { title: 'Maintenance', icon: <FiRefreshCw />, description: 'Regular maintenance services.' },
    { title: 'Documentation', icon: <FiClipboard />, description: 'Comprehensive documentation provided.' },
    { title: 'Satisfaction', icon: <FiCheckSquare />, description: 'Your satisfaction is our priority.' },
];

const Services = () => {
    return (
        <div className='service-container'>
            {services.map((service, index) => (
                <div key={index} className='service-card'>
                    <div className='icon'>{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Services;
