import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from '@material-ui/core';
import QuestionItem from './QuestionItem.jsx';
import QuestionDialog from '../modals/QuestionDialog.jsx';

export default function QuestionList({ questions, searchValue }) {
  return (
    <Container
      className="questionlist"
      style={{
        padding: 3,
        maxHeight: window.innerHeight - 175,
        overflow: 'auto'
      }}
    >
      {
        // eslint-disable-next-line arrow-body-style
        questions.map((question) => {
          return (<QuestionItem key={question.question_id} question={question} />);
        })
      }
      <Container style={{ padding: 0 }} className="buttons">
        <Button type="button" variant="outlined" className="morequestions">MORE ANSWERED QUESTIONS</Button>
        <QuestionDialog />
      </Container>
    </Container>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  searchValue: PropTypes.string
};

QuestionList.defaultProps = {
  questions: [],
  searchValue: ''
};
