import React, { useState, useRef } from 'react';
import Result from './components/result';
import InputsList from './components/inputs-list';
import AddNew from './components/add-new';
import PowersButton from './components/powers-button';
import Modal from './components/modal';

function App() {
	const friends = [ 'גל', 'מתן', 'תום', 'אודי', 'מוש', 'אליאור', 'מרצי', 'טולי' ],
		[ friendsList, setFriendsList ] = useState( friends ),
		// Prep for Hebrew/English language switcher
		[ direction, setDirection ] = useState( 'rtl' ),
		[ numOfPlayersInGroup, setNumOfPlayersInGroup ] = useState( 2 ),
		[ powersGroups, setPowersGroups ] = useState(),
		[ popupActiveClass, setPopupActiveClass ] = useState(''),
		minThreeElement = useRef(),
		numOfGroupsInput = useRef();

	const toggleMinThreeText = ( list ) => {
		if ( 3 >= list.length ) {
			minThreeElement.current.style.display = 'block';

			return true;
		} else {
			minThreeElement.current.style.display = 'none';

			return false;
		};
	}

	const deleteListItem = ( id ) => {
		const isThreeFriendsOrLess = toggleMinThreeText( friendsList );

		if ( isThreeFriendsOrLess ) {
			// If there are 3 friends or less - don't allow to delete a friend
			return; 
		};

		const newList = [...friendsList ];

		newList.splice( id, 1 );

		setFriendsList( newList ); 
	};

	const addListItem = () => {
		// Add an empty input to the list
		const newList = [ '', ...friendsList ];

		// Remove the text saying a minimum of three players is required to do powers
		toggleMinThreeText( newList );

		// Update the state with the new list to render the new empty input
		setFriendsList( newList );
	};

	const onNumOfGroupsChange = () => {
		setNumOfPlayersInGroup( numOfGroupsInput.current.value );
	};

    return (
        <div className="app" dir={direction}>
			<div className="friends-list-container">	
				<div className="num-of-groups-container">
					<span>מס' שחקנים בקבוצה: </span>
					<input className="num-of-groups" ref={numOfGroupsInput} onChange={onNumOfGroupsChange} type="number" step="1" min="2" value={numOfPlayersInGroup} />
				</div>
				<div className="min-three" ref={minThreeElement}>הלו, צריך לפחות 3 בשביל לעשות כוחות</div>
				<InputsList friends={friendsList} updateFriendsList={setFriendsList} deleteListItem={deleteListItem}/>
				<AddNew addListItem={addListItem} />
			</div>
			<PowersButton 
				friends={friends}
				numOfPlayersInGroup={numOfPlayersInGroup}
				setPopupActiveClass={setPopupActiveClass}
				changePopupState={true}
				setPowersGroups={setPowersGroups}
			/>
			<Modal popupActiveClass={popupActiveClass}>	
				<div className='results-container'>
					<Result
						friends={friendsList}
						numOfPlayersInGroup={numOfPlayersInGroup}
						powersGroups={powersGroups}
						setPowersGroups={setPowersGroups}
						setPopupActiveClass={setPopupActiveClass}
					/>
				</div>
			</Modal>
        </div>
    );
}

export default App;
