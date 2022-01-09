import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
	return (
		<form className='LoginForm' method='GET'>
			<span className='LoginForm_Message'>Access hidden data behind the VPN.</span>
			<div></div>
			<span>Enter your SIS-VPN username:</span>
			<input name='text' className='LoginForm_InputText' type={'text'} />
			<span>Enter your SIS-VPN password:</span>
			<input name='password' className='LoginForm_InputText' type={'password'} />
			<div></div>
			<button className='LoginForm_Button'>Login</button>
		</form>
	);
};

export default LoginForm;
