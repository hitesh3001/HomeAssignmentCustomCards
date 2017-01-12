import React, { Component } from 'react'
import classNames from 'classnames'

export default class ContentInteraction extends Component {

  handleDeleteClick = () => {
    this.props.deleteCard(this.props.id)
  }

  handlePrintClick = () => {
    var ref = window.open(this.props.cardURL);
    ref.document.write(`<img src=${this.props.cardURL}></img>`)
    setTimeout(() => {
      ref.print();
    },500)

  }

  handleOpenClick = () => {
    window.open(this.props.cardURL);
  }

  render() {
    let interactionStyle = classNames({
      "interactions": true,
      "btn-group": true,
      "hidden": !this.props.isHovered
    })
    return(
      <div className={interactionStyle}>
        <button type="button" className="btn btn-default" onClick={this.handleOpenClick}>
          <span className="glyphicon glyphicon-heart"></span>
          Open
        </button>
        <button type="button" className="btn btn-default" onClick={this.handleDeleteClick}>
          <span className="glyphicon glyphicon-remove"></span>
          Delete
        </button>
        <button type="button" className="btn btn-default" onClick={this.handlePrintClick}>
          <span className="glyphicon glyphicon-print"></span>
          Print
        </button>
      </div>
    )
  }
}