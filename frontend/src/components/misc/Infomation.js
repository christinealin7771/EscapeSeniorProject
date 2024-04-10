import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} style={{backgroundColor:"rgb(48, 86, 132)", border:'none', marginTop:'-40px'}} >
        Information
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Ground Rules</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, are you ready to conquer this game?</Modal.Body>
        <Modal.Body>Before you start let's breakdown the game!</Modal.Body>
        <Modal.Body>Rule 1:</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInfo;