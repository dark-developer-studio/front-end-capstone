import React from 'react';

import { Container, Button } from '@material-ui/core';
import QuestionItem from './QuestionItem.jsx';
import QuestionModal from '../modals/QuestionModal.jsx';

export default function QuestionList() {
  return (
    <Container className="questionlist" style={{ padding: 3 }}>
      <QuestionItem />
      <QuestionItem />
      <Container style={{ padding: 0 }} className="buttons">
        <Button type="button" variant="outlined" className="morequestions">MORE ANSWERED QUESTIONS</Button>
        <QuestionModal />
      </Container>
    </Container>
  );
}
