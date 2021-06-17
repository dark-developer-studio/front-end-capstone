import React, { useState, useContext, useEffect } from 'react';

import { Container, Button } from '@material-ui/core';

import QuestionSearchBar from './main/QuestionSearchBar.jsx';
import QuestionList from './main/QuestionList.jsx';
import QuestionDialog from './modals/QuestionDialog.jsx';

import { AppContext } from '../../helpers/context';
import { getQuestions } from './helpers/qaRequests';

const QuestionsAndAnswers = () => {
  const { product } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [displayCount, setDisplayCount] = useState(0);
  const [questions, setQuestions] = useState([]);

  // Make a request for more questions if we want to display more questions
  const retrieveMoreQuestions = () => {
    getQuestions(product.id, page)
      .then((questionsObj) => {
        if (questionsObj.results.length > 0) {
          // If get more questions from the get request update our local state
          const newQuestionArr = [...questions, ...questionsObj.results];
          setQuestions(newQuestionArr);

          setPage(page + 1);
        } else {
          // If we have gotten all the questions
          setPage(null);
        }
      })
      .catch();
  };

  useEffect(() => {
    if (product.id > -1 && page !== null) {
      retrieveMoreQuestions();
    } else if (page === null) {
      setDisplayCount(2);
    }
  }, [product, page]);

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
      <QuestionList
        searchValue={searchValue}
        displayCount={displayCount}
        questions={questions}
      />
      <Container style={{ padding: 0 }}>
        {
          displayCount < questions.length && searchValue.length < 3
            ? (
              <Button
                type="button"
                variant="outlined"
                onClick={() => setDisplayCount(displayCount + 2)}
              >
                MORE ANSWERED QUESTIONS
              </Button>
            )
            : null
        }
        <QuestionDialog />
      </Container>

    </Container>
  );
};

export default QuestionsAndAnswers;
