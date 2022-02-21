// import React from 'react';
// import { Form, Input, Button } from 'antd';
// import {Link} from 'react-router-dom';

// const Auth = ({ 
//     titleText="Sign In", 
//     isPassword = true, 
//     bottomText="Login",
//     linkText="New User?",
//     linkPath="/check-user",
    
// }) => {

//     // const onSubmit = (e) => {

//     // }

   
//     return (
//         <div className='login'>
//             <div className='inner'>
//                 <div className='header'>
//                     <h3>Register</h3>
//                     <h2>Inventory</h2>
//                 </div>

//                 <Form
//       layout="vertical" onSubmit 
//     >
//       <Form.Item 
//       label='Email'
//       name="email"
//       rules={[{ required: true, message: 'Please input your email!' }]}

//       >
//         <Input placeholder='Email' type="email" />
//       </Form.Item>

//       {isPassword && <Form.Item 
//       label='Password' 
//       name="password"
//       rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input placeholder='Password' type="password"/>
//       </Form.Item>}

//       <Form.Item>
//       <Button  htmlType="submit" type="primary" block={bottomText}>
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//     <Link to={linkPath}>{linkText}</Link>
//             </div>
//         </div>
//     )
// }

// export default Auth;