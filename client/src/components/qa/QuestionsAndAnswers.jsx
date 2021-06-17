import React, { useState } from 'react';

import Container from '@material-ui/core/Container';

import QuestionSearchBar from './main/QuestionSearchBar.jsx';
import QuestionList from './main/QuestionList.jsx';

const QuestionsAndAnswers = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Container
      className="qaContainer"
      style={{
        margin: '10px 0px 10px 0px',
        padding: 3,
        border: '1px solid #ddd'
      }}
    >
      <QuestionSearchBar setSearchValue={setSearchValue} />
      <QuestionList searchValue={searchValue} />
    </Container>
  );
};

export default QuestionsAndAnswers;
