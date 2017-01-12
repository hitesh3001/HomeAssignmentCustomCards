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
              <ContentInteraction isHovered={this.state.isHovered}/>
            </div>
              <div className="card-title">
                <h2><span className="glyphicon glyphicon-camera"></span>Title</h2>
              </div>
              <div className="card-desc">
                <p>Some description here</p>
              </div>
          </div>
          <div className="card-image">
            <img className="img-responsive" src="//cdn.podravka.net/repository/images/_variations/6/6/6684cc8e38977c977cfa97320dbb02b0-medium.jpg?v=1" />
          </div>
        </div>
      </div>
    )
  }
}