import React, { useEffect, useState } from 'react';
import InfoForm from '../InfoForm/InfoForm';
import publicIp from 'public-ip';

import './WelcomeScreen.css';
import LoginForm from '../LoginForm/LoginForm';

const WelcomeScreen = () => {
	const [currentInfo, setCurrentInfo] = useState(null);

	const getData = async () => {
		const v4 = await publicIp.v4();
		setCurrentInfo({ v4 });
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<h1 className='PageHeader'>SIS VPN</h1>
			<h2 className='PageText'>
				If you're seeing this message, it means you've successfully connected to SIS-VPN Service.
			</h2>
			{currentInfo && <InfoForm infoObjArg={currentInfo} />}
			<LoginForm />
		</>
	);
};

export default WelcomeScreen;
