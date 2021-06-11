import React from 'react';
import { Modal, Button } from '@material-ui/core/';
import AnswerModalBody from './AnswerModalBody.jsx';

export default function AnswerModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>
        Add Answer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <AnswerModalBody />
      </Modal>
    </>
  );
}
