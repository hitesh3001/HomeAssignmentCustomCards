import React, { Component, PropTypes } from 'react'
import ContentCard from './ContentCard'
import * as cardActions from '../actions/contentCardAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ContentCardContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.fetchCards()
  }

  render() {
    let content = this.props.contentCardData.map(card => {
      return <ContentCard key={card.id} deleteCard={this.props.actions.deleteCard} {...card}/>
    })
    return(
      <div>
        {content}
      </div>
    )
  }
}

//Redux store mappings for action and data.
const mapStateToProps = (state) => {
  const { contentCardReducer : {contentCardData} } = state
  return {contentCardData}
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(cardActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentCardContainer);