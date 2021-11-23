import React from 'react';
import { ReactComponent as X } from '../assets/images/x.svg';

const RemoveButton = ( { deleteListItem, friendId } ) => {
    return (
        <span className="remove" onClick={() => deleteListItem(friendId)}>
			<X fill="#fff" alt="Remove" />
		</span>
    );
}

export default RemoveButton;