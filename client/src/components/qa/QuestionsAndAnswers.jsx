import React, { useState } from 'react';

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);

  return (
    <div className="app-toBeDeleted">

      <div className="qaContainer" style={{ width: '98%', padding: '3px', border: '2px solid green' }}>
        <div className="searchbarContainer" style={{ width: '98%', border: '2px solid purple' }}>
          <div className="text" style={{ width: '98%', border: '2px solid red' }}>Questions &amp; Answers</div>
          <input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." className="searchbar" style={{ width: '98%', border: '2px solid red' }} />
        </div>
        <div className="questionlist" style={{ width: '98%', border: '2px solid blue' }}>
          <div className="questionContainer" style={{ width: '98%', border: '2px solid yellow' }}>
            <div className="question" style={{ width: '98%', border: '2px solid red' }}>
              <span className="text" style={{ border: '2px solid red' }}>Q: This is a question?</span>
              <span className="helpful" style={{ border: '2px solid red' }}>Helpful</span>
              <span className="addAnswer" style={{ border: '2px solid red' }}>Add Answer</span>
            </div>
            <span className="text" style={{ border: '2px solid red' }}>A:</span>
            <span className="answer" style={{ width: '98%', border: '2px solid red' }}>
              <span className="text" style={{ border: '2px solid red' }}>
                Hi answer here, lorem ipsum not data with javascript this
                is a basic text with blank response plus two equals hi
              </span>
              <span className="helpful" style={{ border: '2px solid red' }}>Helpful</span>
              <span className="addAnswer" style={{ border: '2px solid red' }}>Report</span>
            </span>
            <button type="button" className="moreAnswers" style={{ width: '98%', border: '2px solid red' }}>LOAD MORE ANSWERS</button>
          </div>
          <div className="buttons" style={{ width: '98%', border: '2px solid orange' }}>
            <button type="button" className="morequestions" style={{ width: '50%', border: '2px solid red' }}>MORE ANSWERED QUESTIONS</button>
            <button type="button" className="addquestion" style={{ width: '50%', border: '2px solid red' }}>ADD A QUESTION</button>
          </div>
        </div>
      </div>

      <div className="answerModal" style={{ width: '98%', padding: '3px', border: '2px solid green' }}>
      </div>

    </div>
  );
};

export default QuestionsAndAnswers;
