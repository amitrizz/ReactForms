import { useState, useEffect } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    experience: '',
    portfolioURL: '',
    managementExperience: '',
    skills: [],
    interviewTime: '',
    submitted: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setValues({
          ...values,
          [name]: [...values[name], value],
        });
      } else {
        setValues({
          ...values,
          [name]: values[name].filter((item) => item !== value),
        });
      }
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setValues({ ...values, submitted: true });
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
