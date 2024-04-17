import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, ModalBody } from 'react-bootstrap';

function ModalInfo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component has mounted
    setShow(true);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button onClick={handleShow} style={{backgroundColor:"rgb(48, 86, 132)", border:'none', marginTop:'-40px'}} >
        Information
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: 'bold' }}>Information for success</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">Before you start let's give you some insider tips!</Modal.Body>
        <Modal.Body className="text-center">If you are using any other brower other than Google Chrome, we highly recommend you to switch to Google Chrome for the best experience.</Modal.Body>
        <Modal.Body className="text-center">Please take the time to read through this infomation. It will be very helpful! If needed, access this page again through the infomation button on the right of the screen!</Modal.Body>
        <Modal.Body className="text-center">Happy Escaping!</Modal.Body>
        <Modal.Header style={{ fontWeight: 'bold' }}>Tabs</Modal.Header>
        <Modal.Body style={{ textDecoration: 'underline' }}>On the right of the screen there are three tabs. Under each tab there's a tool to help you with the puzzles you will face within the game.</Modal.Body>
        <Modal.Body>Tab 1 - Notepad: Jot down any notes you would like here. Please enter your name in the game before typing in the notepad. Only after you enter your name will the notepad work.
        </Modal.Body>
        <Modal.Body>Tab 2 - Calculator: A basic calculator for simple calculations. The calculator can only make calculations with two inputs at a time (Ex. 6 x 3 = 18 works but 6 + 6 + 6 will not work. This will equal 12 which is incorrect). Please only do: "number","operation","number", then "equals".
        </Modal.Body>
        <Modal.Body>Tab 3 - Converter: A binary converter that takes in a binary input in the input box (ex. 00110010) and converts it to its decimal equivalent (ex. 50) at the bottom. 
        </Modal.Body>
        <Modal.Header style={{ fontWeight: 'bold' }}>
          Game
        </Modal.Header>
        <Modal.Body style={{ textDecoration: 'underline' }}> On the left of the screen is the escape room game. Please enter your name on the start screen and press play to get started! 
        </Modal.Body>
        <Modal.Body>
          Here are some special notes to play attention to in the game. 
        </Modal.Body>
        <Modal.Body>
          Note 1: The keypad in each room can have a maximum of nine characters.
        </Modal.Body>
        <Modal.Body>
          Note 2: Make sure the sound is on. If background sound icon is muted, the background sound will still play!
        </Modal.Body>
        <Modal.Header style={{ fontWeight: 'bold' }}>Game(Buttons/Icons)</Modal.Header>
        <Modal.Body style={{ textDecoration: 'underline' }}>Below will be a list of buttons and icons that will be helpful for the game.</Modal.Body>
        <Modal.Body>Fullscreen button: Below the game screen on the website is a button that will open the game into fullscreen. Press "esc" on keyboard to exit fullscreen.</Modal.Body>
        <Modal.Body>
        Pause icon: Right of game screen. Press to pause game and resume to resume game.
        </Modal.Body>
        <Modal.Body>
        Magnifying glass icon: Right of game screen. Press to get hints for the room.
        </Modal.Body>
        <Modal.Body>
        Sound icon: Right of game screen. Press to turn background music off. 
        </Modal.Body>
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
