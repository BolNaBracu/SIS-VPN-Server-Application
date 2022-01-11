import React, { useState } from 'react';
import './UserFilesComponent.css';

const UserFilesComponent = ({ userInfo }) => {
	const [isDiaryOpened, setIsDiaryOpened] = useState(false);

	const diary = () => {
		setIsDiaryOpened((diary) => !diary);
	};

	return (
		<div className='confidentalArea'>
			<h1>Your SIS-VPN protected data</h1>
			<button className='Journal_Button' onClick={diary}>
				{isDiaryOpened ? 'Close Journal' : 'Open Journal'}
			</button>
			{isDiaryOpened && (
				<div className='Journal' title='Journal'>
					<div className='Journal_PageNumber'>
						{userInfo.diary.pages}/{userInfo.diary.pages} ↪️
					</div>
					{userInfo.diary.lastEntry.split('<newline/>').map((value) => (
						<p className='Journal_Text'>{value}</p>
					))}
				</div>
			)}
		</div>
	);
};

export default UserFilesComponent;
