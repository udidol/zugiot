import React, {useRef } from 'react';
import { ReactComponent as X } from '../assets/images/x.svg';
import PowersButton from './powers-button';

const Result = ( { friends, numOfPlayersInGroup, powersGroups, setPowersGroups, setPopupActiveClass } ) => {

    const powersResultsContainer = useRef();

    return (
        <React.Fragment>
			<div className="powers-popup-title">הקבוצות</div>
			<div ref={powersResultsContainer} className="powers-results">
				{powersGroups}
			</div>
			<PowersButton 
				buttonText={'לא מתאים, תנסה שוב'}
				friends={friends}
				numOfPlayersInGroup={numOfPlayersInGroup}
				setPopupActiveClass={setPopupActiveClass}
				changePopupState={false}
				setPowersGroups={setPowersGroups}
			/>
			<X className="x" height="50px" width="50px" fill="#fff" alt="Remove" onClick={() => setPopupActiveClass()} />
        </React.Fragment>
    );
};

export default Result;