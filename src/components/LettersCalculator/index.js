import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    noOfLetters: 0,
  }

  onChangeSearchInput = event => {
    const inputValue = event.target.value
    this.setState({
      searchInput: inputValue,
      noOfLetters: inputValue.length,
    })
  }

  render() {
    const {searchInput, noOfLetters} = this.state

    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">
            Calculate
            <br /> the letters
            <br /> you enter
          </h1>
          <label htmlFor="input">Enter the phrase</label>
          <input
            type="search"
            id="input"
            className="search-input"
            placeholder="enter the phrase"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <h1 className="result-box">No. of letters: {noOfLetters}</h1>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="icon"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
