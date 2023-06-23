import {Component} from 'react'

import './index.css'

const headImge = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headImge,
    headCount: 0,
    tailCount: 0,
  }

  onClickTossButton = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    let tossImage = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (toss === 0) {
      tossImage = headImge
      latestHeadCount += 1
    } else {
      tossImage = tailImage
      latestTailCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {tossResultImage, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description"> Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result-count">Total:{totalCount}</p>
            <p className="result-count">Heads:{headCount}</p>
            <p className="result-count">Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
