import React from 'react';
import { FiHardHat, FiZap, FiBriefcase, FiRefreshCw, FiClipboard, FiCheckSquare } from 'react-icons/fi';

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-item">
        <FiHardHat className="icon-class" />
        <h3>Service 1</h3>
        <p>Description of Service 1.</p>
      </div>
      <div className="service-item">
        <FiZap className="icon-class" />
        <h3>Service 2</h3>
        <p>Description of Service 2.</p>
      </div>
      <div className="service-item">
        <FiBriefcase className="icon-class" />
        <h3>Service 3</h3>
        <p>Description of Service 3.</p>
      </div>
      <div className="service-item">
        <FiRefreshCw className="icon-class" />
        <h3>Service 4</h3>
        <p>Description of Service 4.</p>
      </div>
      <div className="service-item">
        <FiClipboard className="icon-class" />
        <h3>Service 5</h3>
        <p>Description of Service 5.</p>
      </div>
      <div className="service-item">
        <FiCheckSquare className="icon-class" />
        <h3>Service 6</h3>
        <p>Description of Service 6.</p>
      </div>
    </div>
  );
};

export default Services;