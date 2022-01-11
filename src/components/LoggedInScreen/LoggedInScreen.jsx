import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './LoggedInScreen.css';
import checkUserExists from '../../util/high-tech-password-checker';
import UserFilesComponent from '../UserFilesComponent/UserFilesComponent';
import UserInfoComponent from '../UserInfoComponent/UserInfoComponent';

const LoggedInScreen = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [userInfo, setUserInfo] = useState(null);
	const logout = useCallback(() => {
		setSearchParams('');
	}, [setSearchParams]);

	useEffect(() => {
		const loginInfo = {
			username: searchParams.get('username'),
			password: searchParams.get('password'),
		};
		setUserInfo(checkUserExists(loginInfo));
	}, [searchParams, logout, userInfo]);

	return (
		<>
			<button className='LogoutButton' onClick={logout}>
				🚫 Logout
			</button>
			{userInfo && (
				<>
					<div className='WelcomeMessage'>
						<h1>Welcome, {userInfo.firstName}.</h1>
						<p style={{ fontSize: 'larger' }}>
							Welcome back to SIS-VPN. Where your data is safeguarded by our VPN.<br></br>
							At SIS-VPN, your data is our top priority. That, and SIS class final grade.
						</p>
					</div>
					<UserInfoComponent userInfo={userInfo} />
					<UserFilesComponent userInfo={userInfo} />
				</>
			)}
		</>
	);
};

export default LoggedInScreen;
