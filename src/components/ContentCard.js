import React, { Component, PropTypes } from 'react'
import ContentInteraction from './ContentInteraction'
import classNames from 'classnames'

export default class ContentCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovered : false
    }
  }

  handleClick = () => {
    alert('hi')
  }

  handleMouseEnter = (e) => {
    this.setState({isHovered: true})
  }

  handleMouseLeave = (e) => {
    this.setState({isHovered: false})
  }

  render() {
    let cardStyle = classNames({
      'card': true,
      'card-hover': this.state.isHovered
    });

    let interactionStyle = classNames({
      "interactions": true,
      "btn-group": true,
      "hidden": !this.state.isHovered
    })
    return(
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className={cardStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <div className="card-content">
            <div className="text-center">
              <ContentInteraction
                isHovered={this.state.isHovered}
                deleteCard={this.props.deleteCard}
                cardURL={this.props.cardURL}
                id={this.props.id}
              />
            </div>
              <div className="card-title">
                <h2><span className="glyphicon glyphicon-camera"></span>{this.props.cardTitle}</h2>
              </div>
              <div className="card-desc">
                <p>{this.props.cardShortDesc}</p>
              </div>
          </div>
          <div className="card-image">
            <img className="img-responsive" src={this.props.cardURL} />
          </div>
        </div>
      </div>
    )
  }
}