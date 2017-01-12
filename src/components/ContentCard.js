import React, { Component } from 'react'
import ContentInteraction from './ContentInteraction'
import classNames from 'classnames'

export default class ContentCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovered : false
    }
  }

  /** Mouse Events **/
  handleMouseEnter = (e) => {
    this.setState({isHovered: true})
  }

  handleMouseLeave = (e) => {
    this.setState({isHovered: false})
  }
  /** **/

  render() {
    let cardStyle = classNames({
      'card': true,
      'card-hover': this.state.isHovered
    });

    let headerStyle = classNames({
      "header-hover": this.state.isHovered,
      "card-title": true
    })

    return(
      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div className={cardStyle} onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave} onMouseOver={this.handleMouseEnter}>
          <div className="card-content">
            <div className="text-center">
              <ContentInteraction
                isHovered={this.state.isHovered}
                deleteCard={this.props.deleteCard}
                cardURL={this.props.cardURL}
                id={this.props.id}
              />
            </div>
              <div className={headerStyle}>
                <h3><span className="glyphicon glyphicon-camera"></span>{this.props.cardTitle}</h3>
              </div>
              <div className="card-desc">
                <p>{this.props.cardShortDesc}</p>
              </div>
          </div>
          <div className="card-image">
            <img className="img-responsive" src={this.props.cardURL} alt="Image here"/>
          </div>
        </div>
      </div>
    )
  }
}