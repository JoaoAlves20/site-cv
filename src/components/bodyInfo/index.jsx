import { useState } from "react"
import Modal from 'react-modal'

import { Container } from "./style"

export default function BodyInfo(props) {
    const [modalIsOpen, setIsOpen] = useState(false)

    const modalOpen = () => {
        setIsOpen(true)
    }

    const modalClose = () => {
        setIsOpen(false)
    }
      
    return (
        <>
            <Container className="container-bodyinfo" onClick={modalOpen}>
                <div className="title-time">
                    <span>{props.position} / {props.organ}</span><br />
                    <span>{props.time}</span>
                </div>
            </Container>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={modalClose}
                contentLabel="Modal-Description"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <div className="container-description">
                    <button onClick={modalClose}>&times;</button>
                    <div className="description">
                        <h1>{props.position} / {props.organ}</h1>
                        <span>{props.description}</span>
                    </div>
                </div>
            </Modal>
        </>
    )
}