import React from 'react';


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            ignore: 'do not re-render when this value change',
        };
        console.log('constructor');
    };
    componentDidMount() {
        console.log('componentDidMount');
        console.log('=================================================');
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.ignore !== this.state.ignore) {
            console.log('shouldComponentUpdate: NO');
            console.log('=================================================');
            return false;
        };
        console.log('shouldComponentUpdate: YES');
        return true;
    };
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log('=================================================');
    };
    componentWillUnmount() {
        console.log('componentWillUnmount');
        console.log('=================================================');
    };
    updateLocalState = () => {
        this.setState(({ counter }) => ({
            counter: ++counter,
        }));
    };
    updateLocalStateIgnore = () => this.setState({ ignore: 'ignore has been changed'});
    render() {
        const { counter } = this.state;
        console.log('render');
        return (
            <div className="bg-light">
                <h2>Hello from MyComponent</h2>
                <p>{ counter }</p>
                <button
                    className="btn btn-primary"
                    onClick={this.updateLocalState}
                >
                    Update local state counter
                </button>
                <button
                    className="btn btn-primary"
                    onClick={this.updateLocalStateIgnore}
                >
                    Update local state ignore
                </button>
            </div>
        );
    };
};
export default MyComponent;