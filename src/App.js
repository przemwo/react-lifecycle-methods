import React from 'react';
import MyComponent from './MyComponent';

class App extends React.Component {
    state = {
        mountMyComponent: true,
        someProp: new Date(),
        ignoreProp: new Date(),
    };
    toggleMountMyComponent = () => {
        this.setState(({ mountMyComponent }) => ({
            mountMyComponent: !mountMyComponent,
        }));
    };
    updateSomeProp = () => this.setState({ someProp: new Date() });
    updateIgnoreProp = () => this.setState({ ignoreProp: new Date() });
    toggleFoo = () => this.setState({ foo: !this.state.foo });
    render() {
        const { mountMyComponent, someProp, ignoreProp } = this.state;
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Parent component</h1>
                    <button
                        className='btn btn-primary'
                        onClick={this.toggleMountMyComponent}
                    >
                        { mountMyComponent ? 'Unmount MyComponent' :  'Mount MyComponent' }
                    </button>
                    <button
                        className='btn btn-primary'
                        onClick={this.updateSomeProp}
                    >
                        Update some prop
                    </button>
                    <button
                        className='btn btn-primary'
                        onClick={this.updateIgnoreProp}
                    >
                        Update ignore prop
                    </button>
                    {mountMyComponent &&
                        <MyComponent someProp={someProp} ignoreProp={ignoreProp} />
                    }
                </div>
            </div>
        );
    }
}
export default App;
