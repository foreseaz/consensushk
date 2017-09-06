import React, { Component } from 'react'
import _bindAll from 'lodash/bindAll'

import logo from './logo.svg'
import particlesConfig from './config/particles.js'
import 'particles.js'

import './Home.css'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: ''
    }

    _bindAll(this,[
      'handleEmailInput',
      'onSubmit'
    ])
  }

  componentDidMount() {
    if (window.particlesJS) {
      window.particlesJS('particles-js', particlesConfig);
    }
  }

  handleEmailInput (e) {
    const email = e.target.value
    this.setState({ email })
  }

  onSubmit () {
    console.log(this.state.email)
  }

  render () {
    return (
      <div className="container">
        <div id="particles-js"></div>
        <div className="slogan">
          DECENTRALIZED <br />
          TOMORROW <br />
          IS <br />
          TODAY
        </div>

        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="mail">
          Join our mailing list for exclusive Ethereum news and first hint of ConsensusHK updates.

          <div className="newsletter">
            <input
              type="email"
              name="EMAIL"
              className="formControl"
              placeholder="Your email address"
              onChange={this.handleEmailInput}
            />
            <button
              onClick={this.onSubmit}
              className="button newsletterButton">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
