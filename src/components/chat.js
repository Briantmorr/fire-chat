import React, { Component } from 'react';
import db from '../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../actions';
import '../assets/css/chat.css';

class Chat extends Component {
    componentDidMount(){
        db.ref('/chat').on('value', snapshot => {
            console.log('Chat Log: ', snapshot.val());
            this.props.updateChat(snapshot.val());
        })
    }
    render() {
        console.log('Chat log: ', this.props.log);
        // let chatLog = this.props.log.map(x => (<div><h4>{x.author}</h4><p>{x.message}</p></div>));
        const messages = this.props.log.map((msg, index) => {
            return(
                <p key = {index}>
                    <b>{msg.author}:</b>
                    <span> {msg.message}</span>
                </p>
            )
        })
        return (
            <div className="chat container">
                <h1 className="center">Chat Room</h1>
                <div className="">
                    {messages}
                </div>
                {/* {chatLog} */}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        log: state.chat.log
    }
}

export default connect(mapStateToProps, { updateChat })(Chat);