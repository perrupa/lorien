import React, { Component } from 'react'

class GetInTouch extends Component {

  render() {
    const {showCTA} = this.props
    // debugger
    return (
      <center style={{ marginBottom: '1em' }}>
        <p>
          {showCTA && <a href="mailto:lorien@lolifecoach.com">
            Let's work together
          </a>}
        </p>
      </center>
    )
  }
}

export default GetInTouch
