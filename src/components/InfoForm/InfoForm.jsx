import React from 'react';
import './InfoForm.css';

const InfoForm = ({ infoObjArg }) => {
	return (
		<>
			<div className='InfoForm'>
				<span>Your IPv4:</span>
				<span>{infoObjArg.v4}</span>
			</div>
		</>
	);
};

export default InfoForm;
