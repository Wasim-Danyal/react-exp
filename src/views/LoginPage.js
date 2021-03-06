import React from 'react';
// import sections
import Login from '../components/sections/login.component.js';
import Testimonial from '../components/sections/Testimonial';
import "./styles.css"

const LoginPage = () => {

  return (
    <>
      <Login />
      <Testimonial topDivider />
    </>
  );
}

export default LoginPage;