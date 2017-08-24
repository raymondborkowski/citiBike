import React, { Component } from 'react';
import fire from './fire';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { stationInfo: [] }; // <- set up react state
    }
    componentWillMount(){
      /* Create reference to messages in Firebase Database */
        let messagesRef = fire.database().ref('stationInfo').orderByKey().limitToLast(100);
        messagesRef.on('child_added', snapshot => {
          /* Update React state when message is added at Firebase Database */
            let message = { stationInfo: snapshot.val(), id: snapshot.key };
            this.setState({ stationInfo: [message].concat(this.state.stationInfo) });
        })
    }
    render() {
        return (
            <ul>
            { /* Render the list of messages */
                this.state.stationInfo.map( stationInfo => <li key={stationInfo.id}>{stationInfo.stationInfo.name}</li> )
    }
    </ul>
    );
    }
}

export default App;