import React from 'react';
import { Modal, Button } from '@material-ui/core/';
import QuestionModalBody from './QuestionModalBody.jsx';

export default function QuestionModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        ADD A QUESTION
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <QuestionModalBody />
      </Modal>
    </>
  );
}
