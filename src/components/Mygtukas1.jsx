import React from 'react';

class Mygtukas1 extends React.Component {

    render () {
        return (
            <button className="container" onClick={this.props.clickToApply}>Apply</button>
        )
    }
}

export default Mygtukas1