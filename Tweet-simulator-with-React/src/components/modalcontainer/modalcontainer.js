import React from "react";
import "./modalcontainer.scss";
import { Modal } from "@mui/material";

export default function ModalContainer(props) {
  const { isOpenModal, closeModal, children } = props;

  //Modal
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="modal-container"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
}
