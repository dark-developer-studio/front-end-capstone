import React, { useState, useEffect, useContext } from 'react';

import Container from '@material-ui/core/Container';

import { AppContext } from '../../helpers/context';
import QuestionSearchBar from './main/QuestionSearchBar.jsx';
import QuestionList from './main/QuestionList.jsx';

import { getQuestions } from './helpers/qaRequests';

const QuestionsAndAnswers = () => {
  const { product } = useContext(AppContext);

  const [questions, setQuestions] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (product.id > -1) {
      getQuestions(product.id)
        .then((questionsObj) => {
          setQuestions(questionsObj.results);
        })
        .catch();
    }
  }, [product]);

  return (
    <Container className="qaContainer" style={{ margin: '10px 0px 10px 0px', padding: 3, border: '1px solid #ddd' }}>
      <QuestionSearchBar setSearchValue={setSearchValue} />
      <QuestionList questions={questions} searchValue={searchValue} />
    </Container>
  );
};

export default QuestionsAndAnswers;
