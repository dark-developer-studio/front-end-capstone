import React from 'react';
import { Modal, Button } from '@material-ui/core/';

import ImageModalBody from './ImageModalBody.jsx';

export default function AnswerModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleKey = (e) => {
    if (e.keyCode === 27) {
      setOpen(false);
    } else if (e.keyCode === 13) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} onKeyDown={handleKey}>
        <img src="https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg" alt="thumbnail" width="auto" height="120" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ImageModalBody />
      </Modal>
    </div>
  );
}
