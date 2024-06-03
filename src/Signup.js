import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Signup.css';
import SignupImage from './assets/signup.png'; // Adjust the path according to your folder structure
import image2 from './assets/logo.png';

// Validation schema
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(5, 'First name should be at least 5 characters').required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
});

function Signup() {
  return (
    <div className="signup-container">
      <div className="left-section">
        <div className="Logo">
          <img src={image2} alt="logo" className="logo-image" />
        </div>
        <h2>Stay on top of time tracking</h2>
      </div>
      <div className="right-section">
        <h2>Create Account</h2>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
          validationSchema={SignupSchema}
          validateOnChange={false} // Disable validation on change
          validateOnBlur={false} // Disable validation on blur
          onSubmit={(values) => {
            alert('Form submitted successfully!');
          }}
          validate={(values) => {
            try {
              SignupSchema.validateSync(values, { abortEarly: false });
            } catch (errors) {
              errors.inner.forEach((error) => {
                alert(error.message);
              });
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="signup-form">
              <div className="form-group">
                <Field type="text" name="firstName" placeholder="First Name" />
                <Field type="text" name="lastName" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <Field type="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <Field type="password" name="password" placeholder="Password" />
              </div>
              <button type="submit" className="create-account-btn" disabled={isSubmitting}>
                Create Account
              </button>
              <p>Already have an account? <a href="/login">Login</a></p>
              <hr />
              <div className="social-login">
                <button className="google-btn">Sign up with Google</button>
                <button className="facebook-btn">Sign up with Facebook</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <img src={SignupImage} alt="Illustration" className="floating-image" />
    </div>
  );
}

export default Signup;
