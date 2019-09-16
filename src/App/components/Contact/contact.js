import React, { Component } from 'react';

export class Contact extends Component {
  state = {
    subject: '',
    body: ''
  };

  handleInput = (e) => {
    e.preventDefault();
    const { target } = e;
    this.setState({ [target.name]: target.value });
  };

  send = (e) => {
    e.preventDefault();
    const { subject, body } = this.state;
    const link = `mailto:alainburindi62@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = link;
  };

  clear = () => {
    this.setState({
      body: '',
      subject: ''
    });
  };

  render() {
    const { subject, body } = this.state;
    return (
      <div className="container">
        <div className="columns">
          <form onSubmit={this.send} className="column is-4 is-offset-4">
            <h2 className="title is-2">Contact Me</h2>
            <div className="field">
              <label className="label" htmlFor="subject">
                Subject
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  name="subject"
                  className="input"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={this.handleInput}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-file" />
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="message">
                Message
              </label>
              <div className="control">
                <textarea
                  name="body"
                  onChange={this.handleInput}
                  className="textarea"
                  placeholder="Your message"
                  value={body}
                />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button type="button" onClick={this.send} className="button is-info">
                  Send
                </button>
              </div>
              <div className="control">
                <button type="button" onClick={this.clear} className="button is-light">
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
