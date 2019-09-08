import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import LoadingScreen from "./LoadingScreen";

class App extends React.Component {
    state = {lat: null, errorMessage: null};
    
    //same as
    // constructor(props) {
    //     super(props);

    //     this.state = {lat: null, errorMessage: null};
    // }

    // componentDidMount only runs once
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if(this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        } else if(this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        return <LoadingScreen message="Please accept location request" />
    }

    render(){
        return this.renderContent();
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));