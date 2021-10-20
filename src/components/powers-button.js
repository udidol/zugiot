import React from 'react';

const PowersButton = ( { buttonText = 'יאללה תעשה כוחות', friends, numOfPlayersInGroup, setPowersGroups, setPopupActiveClass, changePopupState } ) => {
	const groups = [];

	let friendsArray = [...friends];

	const pickOutFriend = (group = groups, insertAsArray = true) => {
        // When there is a remainder to numOfFriends / numOfPlayersInGroup, friendsArray
        // can be empty.
        if (!friendsArray.length) {
            return;
        }

        let index = 0;

        if (friendsArray.length > 1) {
            index = Math.floor(Math.random() * friendsArray.length);
        }

        // Cherry pick that random friend out of the list
        let pickedFriend = friendsArray.splice(index, 1);

        if (!insertAsArray) {
            pickedFriend = pickedFriend[0];
        }

        group.push(pickedFriend);
	}

	const resetData = () => {
        if (!friendsArray.length) {
            friendsArray = [...friends];
        }

        groups.length = 0;

        setPowersGroups(null);
	}

	const createGroupsMarkup = () => {
        return groups.map(group => {
            return <div key={group[0]} className="powers-group">{group.join(', ')}</div>;
        });
    };

	const doPowers = () => {
        if (groups.length) {
            resetData();
        }

        if (friendsArray.length && friendsArray.length <= numOfPlayersInGroup) {
            return;
        }

        const numOfFriends = friendsArray.length,
            numOfGroups = Math.ceil(numOfFriends / numOfPlayersInGroup);

        for (let i = 1; i < (numOfGroups + 1); i++) {
            pickOutFriend();
        }

        let currentGroupIndex = 0,
            currentGroup;

        while (friendsArray.length) {
            currentGroup = groups[currentGroupIndex];

            if (currentGroup.length == numOfPlayersInGroup) {
                currentGroupIndex++;

                continue;
            }

            pickOutFriend(currentGroup, false);
		}

		// Do the powers. the `powersGroup` state variable contains the powers group markup.
		setPowersGroups(createGroupsMarkup());

		// If the popup should be activated, add the 'active' class to it.
		if ( changePopupState ) {
			setPopupActiveClass( 'active' );
		}
	}

	return (
	<div className="powers-button" onClick={doPowers}>{buttonText}</div>
    );
};

export default PowersButton;