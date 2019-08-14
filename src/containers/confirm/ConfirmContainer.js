import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class ConfirmContainer extends Component {
  state = { open: false, result: 'show the modal to capture a result' }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ result: 'confirmed', open: false })
  handleCancel = () => this.setState({ result: 'cancelled', open: false })

  render() {
    const { open, result } = this.state
    return (
      <div>  
        <Button size='huge' onClick={this.show}>Confirm</Button>
        <Confirm
          open={this.state.open}
          header='Confirm Example'
          content='Confrim Example 메시지 입니다.'
          cancelButton='취소'
          confirmButton="확인"
          onCancel={this.handleCancel} 
          onConfirm={this.handleConfirm}
          size='mini'
        />
        <p style={{marginTop:'10px'}}>
          Result: <em>{result}</em>
        </p>
      </div>
    )
  }
}

export default ConfirmContainer
