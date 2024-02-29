// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="mainContainer">
        <div className="cardContainer">
          <div className="calculateLettersContainer">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="input">Enter the phrase</label>
            <br />
            <input
              type="text"
              id="input"
              placeholder="Enter the phrase"
              onChange={this.onChangeInput}
              className="inputEl"
            />
            <p className="para">No.of letters: {searchInput.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
