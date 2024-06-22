export default function validateInfo(values) {
    let errors = {};
  
    if (!values.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (isNaN(values.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be a valid number';
    }
  
    if (!values.position) {
      errors.position = 'Position is required';
    }
  
    if ((values.position === 'Developer' || values.position === 'Designer') && !values.experience) {
      errors.experience = 'Relevant Experience is required';
    } else if (values.experience && isNaN(values.experience)) {
      errors.experience = 'Relevant Experience must be a number greater than 0';
    }
  
    if (values.position === 'Designer' && !values.portfolioURL) {
      errors.portfolioURL = 'Portfolio URL is required';
    } else if (values.portfolioURL && !/^https?:\/\/.*\.\w{2,}$/.test(values.portfolioURL)) {
      errors.portfolioURL = 'Portfolio URL is invalid';
    }
  
    if (values.position === 'Manager' && !values.managementExperience.trim()) {
      errors.managementExperience = 'Management Experience is required';
    }
  
    if (values.skills.length === 0) {
      errors.skills = 'At least one skill must be selected';
    }
  
    if (!values.interviewTime) {
      errors.interviewTime = 'Preferred Interview Time is required';
    }
  
    return errors;
  }
  