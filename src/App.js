import React from 'react';
import MyComponent from './MyComponent';

class App extends React.Component {
    state = {
        mountMyComponent: true,
    };
    toggleMountMyComponent = () => {
        this.setState(({ mountMyComponent }) => ({
            mountMyComponent: !mountMyComponent,
        }));
    };
    render() {
        const { mountMyComponent } = this.state;
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
                    {mountMyComponent &&
                        <MyComponent />
                    }
                </div>
            </div>
        );
    }
}
export default App;
