import React, { useEffect, useState } from 'react';
import './UserInfoComponent.css';

const UserInfoComponent = ({ userInfo }) => {
	const [dates, setDates] = useState(null);

	useEffect(() => {
		const firstDate = new Date(userInfo.firstLogin);
		const lastDate = new Date(Date.now());

		setDates({
			firstLogin: `${firstDate.getDate()}. ${firstDate.getUTCMonth() + 1}. ${firstDate.getFullYear()}`,
			lastLogin: `${lastDate.getDate()}. ${lastDate.getUTCMonth() + 1}. ${lastDate.getFullYear()}`,
		});
	}, [userInfo.firstLogin]);

	return (
		<div className='userInfoArea'>
			<span>Name: </span>
			<span>{userInfo.firstName}</span>
			<span>Role: </span>
			<span>{userInfo.role}</span>
			<span>First login: </span>
			<span>{dates?.firstLogin}</span>
			<span>Last login: </span>
			<span>{dates?.lastLogin}</span>
		</div>
	);
};

export default UserInfoComponent;
