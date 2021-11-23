import React from 'react';

const Modal = ( { children, popupActiveClass } ) => {
	return (
        <div className={`modal-background-overlay ${popupActiveClass}`}>
			<div className="modal-content">
				{children}
			</div>
		</div>
    );
}

export default Modal;