import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import {BsFillPlayCircleFill} from 'react-icons/bs';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
           
            {/* <Modal.Body className='bg-transparent'> */}
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/hDiQIeYznR8" title="YouTube video player" allowfullscreen></iframe>
                </div>
            {/* </Modal.Body> */}
            {/* <Modal.Footer>
                <Button onClick={
                    props.onHide
                }>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className='container'>
                <a variant="primary"
                    onClick={
                        () => setModalShow(true)
                }>
                    <Link to="#" className='playbutton'>
                        <BsFillPlayCircleFill className=''/>
                    </Link>
                </a>

                <MyVerticallyCenteredModal show={modalShow}
                    onHide={
                        () => setModalShow(false)
                    }/>
            </div>
        </>
    );
}


export default App
