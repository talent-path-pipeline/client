import React, { Component } from 'react'

export default class LessonTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      length: props.length,
    }
  }

  render() {
    const { title, length} = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <p>{length}</p>
      </div>
    )
  }
}
