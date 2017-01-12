import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'


export default class ContentInteraction extends Component {
  render() {
    let interactionStyle = classNames({
      "interactions": true,
      "btn-group": true,
      "hidden": !this.props.isHovered
    })
    return(
      <div className={interactionStyle}>
        <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-heart"></span>Open</button>
        <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-remove"></span>Delete</button>
        <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-print"></span>Print</button>
      </div>
    )
  }
}