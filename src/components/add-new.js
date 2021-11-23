import React from 'react';

const RemoveButton = ( props ) => {
    return (
        <div className="add-new" onClick={props.addListItem}>הוסף שחקן +</div>
    );
}

export default RemoveButton;