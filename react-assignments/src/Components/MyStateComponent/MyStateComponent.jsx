import React, { useState } from "react";

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
  const [formData, setFormData] = useState({
    name: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({...prevData, })

    )
  };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
};

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name here"
      />
      <input
        type="number"
        age="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Enter age here"
      />
      <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default MyStateComponent;
