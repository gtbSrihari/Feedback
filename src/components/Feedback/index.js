// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  handleClick = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state
    return (
      <div className="bg">
        {isClicked ? (
          <div className="feedback-container">
            <img alt="love emoji" src={loveEmojiUrl} />
            <h1>Thank You!</h1>
            <p>
              We will use this feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="feedback-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(emoji => (
                <li className="list" key={emoji.id}>
                  <button
                    type="button"
                    className="btn"
                    onClick={this.handleClick}
                  >
                    <img
                      className="emoji-img"
                      src={emoji.imageUrl}
                      alt={emoji.name}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
