import React, { useState } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';

import QuestionSearchBar from './main/QuestionSearchBar.jsx';
import QuestionList from './main/QuestionList.jsx';
// import AnswerModal from './modals/AnswerModal.jsx';

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);

  const apiCall = (productId) => {
    axios.get('/api/qa/questions', {
      params: {
        product_id: productId
      }
    })
      .then()
      .catch();
  };

  return (
    <Container className="qaContainer" style={{ margin: '10px 0px 10px 0px', padding: 3, border: '1px solid #ddd' }}>
      <QuestionSearchBar />
      <QuestionList questions={questions} />
    </Container>
    // <AnswerModal />
  );
};

export default QuestionsAndAnswers;
