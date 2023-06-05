import {Component} from 'react'

import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    coinUrl: headsUrl,
  }

  changeImg = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        coinUrl: headsUrl,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        coinUrl: tailsUrl,
      }))
    }
  }

  render() {
    const {coinUrl, heads, tails} = this.state
    const total = heads + tails

    return (
      <div className="bg-main-con">
        <div className="card-con">
          <h1 className="title">Coin Toss Game</h1>
          <p className="pera">Heads (or) Tails</p>
          <img className="img-sty" src={coinUrl} alt="toss result" />
          <button className="btn-sty" type="button" onClick={this.changeImg}>
            Toss Coin
          </button>
          <div className="result-con">
            <p className="count-sty">Total: {total}</p>
            <p className="count-sty">Heads: {heads}</p>
            <p className="count-sty">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
