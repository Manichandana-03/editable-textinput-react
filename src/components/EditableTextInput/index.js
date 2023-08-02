import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {
    textInput: '',
    isClicked: false,
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onButtonClick = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {textInput, isClicked} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="output">
            {isClicked ? (
              <>
                <p>{textInput}</p>
                <button
                  type="button"
                  onClick={this.onButtonClick}
                  className="button"
                >
                  Edit
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  value={textInput}
                  onChange={this.onChangeInput}
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.onButtonClick}
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
