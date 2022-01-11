import React, { useRef, useState } from 'react';
import checkUserExists from '../../util/high-tech-password-checker';
import './LoginForm.css';

const LoginForm = () => {
	const usernameField = useRef(null);
	const passwordField = useRef(null);
	const [error, setError] = useState(false);

	const performLogin = (e) => {
		if (!checkUserExists({ username: usernameField.current.value, password: passwordField.current.value })) {
			e.preventDefault();
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 200);
		}
	};

	return (
		<form className='LoginForm' method='GET' onSubmit={performLogin}>
			<span className='LoginForm_Message'>Access hidden data behind the VPN.</span>
			<span>Enter your SIS-VPN username:</span>
			<input ref={usernameField} name='username' className='LoginForm_InputText' type={'text'} />
			<span>Enter your SIS-VPN password:</span>
			<input ref={passwordField} name='password' className='LoginForm_InputText' type={'password'} />
			<button style={{ backgroundColor: error ? 'red' : 'green' }} className='LoginForm_Button'>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
