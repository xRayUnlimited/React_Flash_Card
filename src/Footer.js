import React from 'react';

const answerReveal = (answer) => {
  return(
    <span
      style={{display: 'block', cursor: 'pointer'}}
    >{answer}
    </span>
  )
}

const filterLink = (text, current) => {
  if (text === current)
    return <span>{text}</span>
  return(
    <span
      onClick={() => (text)}
      style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer'}}
    >
      {text}
    </span>
  )
}

const Footer = ({ activeFilter, changeFilter }) => (
  <div class="btn large waves-light pink accent-3">
    { filterLink('Show Answer', answerReveal, changeFilter) }
  </div>
)

export default Footer;

