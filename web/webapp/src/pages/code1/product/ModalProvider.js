import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const {Provider, Consumer} = React.createContext({});
export {Consumer};



export const ModalProvider = (props) => {

    const [showModal, setShowModal] = useState();

    const handleOpen  = () => {setShowModal(true);}
    const handleClose = () => {setShowModal(false);}
    const toggle      = () => {setShowModal(!showModal);}

    return(
        <div>
            <Provider value = {{openModal :handleOpen, closeModal : handleClose}}>
                {props.children}
                {showModal && (
                    <div>
                        <Modal isOpen={showModal} toggle={toggle} >
                            <ModalHeader>삭제유무</ModalHeader>
                            <ModalBody>
                                정말로 삭제하시겠습니까?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary"   onClick={()=> setShowModal(false)}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={()=> setShowModal(false)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>)}
            </Provider>
        </div>
    );
}

