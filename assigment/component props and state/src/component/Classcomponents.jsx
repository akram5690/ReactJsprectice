import React, { Component } from 'react'

export default class Classcomponents extends Component {
  render() {
    return (
      <>
        <div className="welcome-container">
        <div className="message-box">
          <h1 className="welcome-text">Empower Your Future with React, {this.props.name}!</h1>
          <p className="welcome-subtext">React is a powerful JavaScript library for building interactive user interfaces. Start your journey today!</p>
        </div>
      </div>
      </>
    )
  }
}

