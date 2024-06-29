// FloatingPencilIcon.js
import React from 'react';
import { useState } from 'react';
import '../Assets/css/floating.css'; // CSS for styling
import { Modal } from 'react-bootstrap';

const FloatingPencilIcon = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="floating-pencil-icon " style={{zIndex:'0'}}>
      {children}
      <div className={`pencil-icon ${'d-none'}`} onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M14.84 5.74l3.41 3.41L8.41 19.15l-3.41-3.41zM4.58 15.49l1.41 1.41-2.44.61.62-2.44zM18.17 7.16l-9 9L7 16l9-9-3.42-3.41-9 9L4 20l4-1 1 1 5.83-5.83-1-1 2.17-2.17 1.41 1.41L8.58 17l1.84-1.84 1.17 1.17L6 19l2-.5L18.5 8l-2.33-2.34 1.41-1.41z" />
        </svg>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal content goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FloatingPencilIcon;
