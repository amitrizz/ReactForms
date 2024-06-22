import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validateInfo'; 

const Registration = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  const [isAttendingWithGuest, setIsAttendingWithGuest] = useState(false);

  const handleAttendingChange = (e) => {
    const attending = e.target.value === 'Yes';
    setIsAttendingWithGuest(attending);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
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
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
        />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <div>
        <label>Are you attending with a guest?</label>
        <select name="attendingWithGuest" onChange={handleAttendingChange}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
      {isAttendingWithGuest && (
        <div>
          <label>Guest Name</label>
          <input
            type="text"
            name="guestName"
            value={values.guestName}
            onChange={handleChange}
          />
          {errors.guestName && <p>{errors.guestName}</p>}
        </div>
      )}
      <button type="submit">Submit</button>
      {values.submitted && (
        <div>
          <h2>Form Submitted</h2>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Age: {values.age}</p>
          <p>Attending with guest: {isAttendingWithGuest ? 'Yes' : 'No'}</p>
          {isAttendingWithGuest && <p>Guest Name: {values.guestName}</p>}
        </div>
      )}
    </form>
  );
};

export default Registration;
