import React, {Component} from 'react';

class Global extends Component {

    render() {

        return (
            <div className="wrapper">
                <div className="content">
                    <div className="content-row step-1">
                        <div className="background">
                            Connect
                        </div>
                        <div className="content-row-header">
                            1
                        </div>
                        <div className="content-row-content">
                            <h2>Sorry, this feature is not implemented yet.</h2>
                        </div>
                    </div>
                    <div className="content-row step-2">
                        <div className="background">
                            Select
                        </div>
                        <div className="content-row-header">
                            2
                        </div>
                        <div className="content-row-content">
                        </div>
                    </div>
                    <div className="content-row step-3">
                        <div className="background">
                            Edit
                        </div>
                        <div className="content-row-header">
                            3
                        </div>
                        <div className="content-row-content">
                        </div>
                    </div>
                    <div className="content-row step-4">
                        <div className="background">
                            Write
                        </div>
                        <div className="content-row-header">
                            4
                        </div>
                        <div className="content-row-content">
                        </div>
                    </div>
                </div>
                <div className="help">
                    <h2>Help</h2>
                </div>
            </div>
        );
    }

}

export default Global;
