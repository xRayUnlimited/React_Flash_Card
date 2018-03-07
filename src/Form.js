import React from 'react';

class Form extends React.Component {
  state = { name: '', question: '', answer: '', nextId: 1 }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, question, answer, nextId } = this.state;
    const card = { name, question, answer, id: nextId }
    this.setState({ name: '', question: '', answer: '', nextId: nextId + 1 })
    this.props.addCard(card);
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value})
  }

  handleChangeQuestion = (e) => {
    this.setState({ question: e.target.value})
  }

  handleChangeAnswer = (e) => {
    this.setState({ answer: e.target.value})
  }

  render() {
    const { name } = this.state.name;
    const { question } = this.state.question;
    const { answer } = this.state.answer;

    return(
      <form class="container">
        Name: <input value={name} onChange={this.handleChangeName} />
        <br />
        Question: <input value={question} onChange={this.handleChangeQuestion} />
        <br />
        Answer: <input value={answer} onChange={this.handleChangeAnswer} />
        <br />
        <button class="btn large waves-light pink accent-3" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form;
