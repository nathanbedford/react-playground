import React from 'react';

class AwesomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {likesCount: 0};
        this.onLike = this.onLike.bind(this);
    }

    onLike() {
        let newLikesCount = this.state.likesCount + 1;
        this.setState({
                likesCount: newLikesCount,
                msg: 'Testing123'
            }
        );
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <div>
                    Like: <span>{this.state.likesCount}</span>
                    <div>
                        <button onClick={this.onLike}>Like Me</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AwesomeComponent;