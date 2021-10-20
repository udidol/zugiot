import React, { useRef } from 'react';
import RemoveButton from './input-remove';

const NameInput = ( { friendsList, friendName, friendId, deleteListItem, updateFriendsList } ) => {
	const inputRef = useRef(),
		// Get the index of the current player before the input is changed
		savedNameIndex = friendsList.indexOf( friendName );

	const onInputChange = () => {
		const updatedFriendsList = [ ...friendsList ],
		// Get the name in the input after it has been changed
		currentName = inputRef.current.value;

		// Replace the pre-existing name in the friends list with the new name
		updatedFriendsList.splice( savedNameIndex, 1, currentName );

		updateFriendsList( updatedFriendsList );
	};

    return (
        <div className="input-wrapper">
			<input ref={inputRef} type="text" onChange={onInputChange} defaultValue={friendName || '' }/>
			<RemoveButton friendId={friendId} deleteListItem={deleteListItem} />
		</div>
    );
}

export default NameInput;