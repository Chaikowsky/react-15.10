import React, {Component, Fragment} from 'react';

import MessagesList from 'components/MessagesList';
import MessagesForm from 'components/MessagesForm';

import { connect} from 'react-redux';
import { load, send, listen } from 'actions/messages';

class MessagesContainer extends Component {
 

  componentDidMount() {
    const { loadMessages, listenMessages } = this.props;
    loadMessages();
    listenMessages();

  }

  render() {
    const { messages, send } = this.props;

    return (
      <Fragment>
        <MessagesList messages= {messages} />
        <MessagesForm send= {send} />
      </Fragment>

    )
  }
}

function mapStateToProps(state, props){
  return {
    ...props,
    messages: state.messages.entities,
  }
}

function mapDispatchToProps(dispatch, props){
  return {
    ...props,
    loadMessages: () => dispatch(load()),
    listenMessages: () => dispatch(listen()),
    send: (message) => send(message)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);