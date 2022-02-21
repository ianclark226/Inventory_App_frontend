// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Form, Input, Button, notification } from 'antd';

// import { useDispatch, useSelector } from 'react-redux';

// import { login } from '../actions/userActions';




// const LoginPage = (isPassword=true) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const dispatch = useDispatch();

//     let location = useLocation();
//     let navigate = useNavigate();
   

//     const redirect = location.search ? location.search.split('=')[1] : '/'

//     const userLogin = useSelector(state => state.userLogin)
//     const { error, userInfo } = userLogin

//     useEffect(() => {
//         if(userInfo){
//             navigate(redirect)
//         }
//     }, [navigate, userInfo, redirect])


//     const onSubmit = () => {
//         console.log('hello')
        
//         dispatch(login(email, password))

        
        
//     }
//     return (
//         <div className='login'>
//             <div className='inner'>
//                 <div className='header'>
//                     <h3>Login</h3>
//                     <h2>Inventory</h2>
//                 { error && notification.error({
//                     message: "Login Error",
//                     description: "Username or Password Invalid"
//                 })}     
//                 </div>
            
//                 <Form onSubmit={onSubmit}
//       layout="vertical" 
//     >
//       <Form.Item 
//       label='Email'
//       name="email"
//       rules={[{ required: true, message: 'Please input your email!' }]}

//       >
//         <Input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//       </Form.Item>

//       {isPassword && <Form.Item 
//       label='Password' 
//       name="password"
//       rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)}/>
//       </Form.Item>}

//       <Form.Item>
//       <Button htmlType="submit" type="primary">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//     <Link to= {redirect ? `/register?redirect=${redirect}` : '/register'}></Link>
//             </div>
//         </div>
            
        
//     )
// }

// export default LoginPage;