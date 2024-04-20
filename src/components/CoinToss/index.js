// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  changeImage = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
      }))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        total: prevState.total + 1,
      }))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {heads, tails, total, imageUrl} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1>Coin Toss Game</h1>
          <p className="first-para">Heads (or) Tails</p>
          <img src={imageUrl} className="image" alt="toss result"/>
          <br />
          <button onClick={this.changeImage}>Toss Coin</button>
          <div className="results-count-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
