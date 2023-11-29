import React, { useState } from "react";
import styled from "styled-components";

const SignUpForm = () => {
  const [errorMessages, setErrorMessages] = useState(Array(5).fill(""));
  const [values, setValues] = useState(Array(5).fill(""));

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = Array(5).fill(false);
    if (!values[0]) errors[0] = true;
    if (!values[1]) errors[1] = true;
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values[2]))
      errors[2] = true;
    if (values[3].length < 8) errors[3] = true;
    if (values[4] !== values[3]) errors[4] = true;

    if (errors.some((err) => err)) {
      let messages = [
        "First name cannot be empty",
        "Last name cannot be empty",
        "Invalid email address",
        "Password must be greater than 7 characters",
        "Passwords do not match",
      ];
      messages = messages.map((msg, idx) => (errors[idx] ? msg : ""));
      setErrorMessages(messages);
    } else console.log("Form submitted successfully");
  };

  const handleChange = (e, idx) => {
    const value = e.target.value;
    setErrorMessages(Array(5).fill(""));
    setValues((prev) => {
      let values = [...prev];
      values[idx] = value;
      return values;
    });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={(e) => handleChange(e, 0)}
        />
        <p data-testid="first-name-error-id" className="error">
          {errorMessages[0]}
        </p>
        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => handleChange(e, 1)}
        />
        <p data-testid="last-name-error-id" className="error">
          {errorMessages[1]}
        </p>
        <input
          data-testid="email-id"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={(e) => handleChange(e, 2)}
        />
        <p data-testid="email-error-id" className="error">
          {errorMessages[2]}
        </p>
        <input
          data-testid="password-id"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => handleChange(e, 3)}
        />
        <p data-testid="password-error-id" className="error">
          {errorMessages[3]}
        </p>
        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => handleChange(e, 4)}
        />
        <p data-testid="confirm-password-error-id" className="error">
          {errorMessages[4]}
        </p>
        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px);
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;
