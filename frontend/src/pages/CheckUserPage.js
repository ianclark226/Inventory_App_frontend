import React from 'react';
import Auth from '../components/Auth';

const CheckUserPage = () => {
  return (
   <Auth titleText='Verify Yourself!' bottomText='Submit' linkText='Go Back' isPassword={false} linkPath='/login'>

   </Auth>
  )
}

export default CheckUserPage