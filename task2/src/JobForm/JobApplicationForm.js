import React, { useState, useEffect } from 'react';
import useForm from './useForm';
import validate from './validateInfo';

const JobApplicationForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  const [selectedPosition, setSelectedPosition] = useState('');

  useEffect(() => {
    // Setting the min attribute to the current date and time
    const now = new Date();
    const formattedDateTime = now.toISOString().slice(0, 16);
    document.getElementById('interviewTime').setAttribute('min', formattedDateTime);
  }, []);

  const handlePositionChange = (e) => {
    const position = e.target.value;
    setSelectedPosition(position);
    handleChange(e);
  };

  const skills = ['JavaScript', 'CSS', 'Python', 'HTML', 'React'];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p>{errors.fullName}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="number"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
      </div>
      <div>
        <label>Applying for Position</label>
        <select name="position" value={values.position} onChange={handlePositionChange}>
          <option value="">Select</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
        {errors.position && <p>{errors.position}</p>}
      </div>
      {(selectedPosition === 'Developer' || selectedPosition === 'Designer') && (
        <div>
          <label>Relevant Experience (years)</label>
          <input
            type="number"
            name="experience"
            value={values.experience}
            onChange={handleChange}
          />
          {errors.experience && <p>{errors.experience}</p>}
        </div>
      )}
      {selectedPosition === 'Designer' && (
        <div>
          <label>Portfolio URL</label>
          <input
            type="text"
            name="portfolioURL"
            value={values.portfolioURL}
            onChange={handleChange}
          />
          {errors.portfolioURL && <p>{errors.portfolioURL}</p>}
        </div>
      )}
      {selectedPosition === 'Manager' && (
        <div>
          <label>Management Experience</label>
          <input
            type="text"
            name="managementExperience"
            value={values.managementExperience}
            onChange={handleChange}
          />
          {errors.managementExperience && <p>{errors.managementExperience}</p>}
        </div>
      )}
      <div>
        <label>Additional Skills</label>
        {skills.map((skill) => (
          <div key={skill}>
            <input
              type="checkbox"
              name="skills"
              value={skill}
              checked={values.skills.includes(skill)}
              onChange={handleChange}
            />
            <label>{skill}</label>
          </div>
        ))}
        {errors.skills && <p>{errors.skills}</p>}
      </div>
      <div>
        <label>Preferred Interview Time</label>
        <input
          type="datetime-local"
          id="interviewTime"
          name="interviewTime"
          value={values.interviewTime}
          onChange={handleChange}
        />
        {errors.interviewTime && <p>{errors.interviewTime}</p>}
      </div>
      <button type="submit">Submit</button>
      {values.submitted && (
        <div>
          <h2>Form Submitted</h2>
          <p>Full Name: {values.fullName}</p>
          <p>Email: {values.email}</p>
          <p>Phone Number: {values.phoneNumber}</p>
          <p>Position: {values.position}</p>
          {values.position && (values.position === 'Developer' || values.position === 'Designer') && (
            <p>Relevant Experience: {values.experience} years</p>
          )}
          {values.position === 'Designer' && (
            <p>Portfolio URL: {values.portfolioURL}</p>
          )}
          {values.position === 'Manager' && (
            <p>Management Experience: {values.managementExperience}</p>
          )}
          <p>Skills: {values.skills.join(', ')}</p>
          <p>Preferred Interview Time: {values.interviewTime}</p>
        </div>
      )}
    </form>
  );
};

export default JobApplicationForm;
