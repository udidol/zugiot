import React from 'react';
import NameInput from './name-input';

const inputsList = ( { friends, updateFriendsList, deleteListItem } ) => {
	const generateUniqueID = () => Math.random().toString(36).substr(2, 9);

	const nameInputsList = friends.map( ( friend, id ) => {
		const uniqueId = generateUniqueID();

		return (
			<NameInput
				key={ uniqueId }
				friendsList={friends}
				updateFriendsList={updateFriendsList}
				friendId={id}
				friendName={friend}
				deleteListItem={deleteListItem}
			/>
		);
	} );

    return <div className="inputs-container">{nameInputsList}</div>;
}

export default inputsList;