import React from 'react';

const Card = ({ name, question, answer, id, toggleCard }) => (
  <div className="container">
    {name}
    <br />
    {question}?
    <br />
    Answer: <span className="answerReveal">{answer}</span>
    <br />
    <button class="btn med pink accent-3">
      Show Answer
    </button>
  </div>
)

export default Card;
