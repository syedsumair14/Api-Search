import React from 'react';

import { connect } from 'react-redux';

class show extends React.Component{
    render(){
        return(
            <div className="border offset-5 text-center mt-5" style={{width: '200px'}}>
                <h3 style={{backgroundColor: 'dodgerblue'}}>{this.props.reducer.name}</h3>
               <div style={{backgroundColor: 'yellow'}} className="border"> S1: {this.props.reducer.s1} </div>
               <div style={{backgroundColor: 'grey'}} className="border"> S2: {this.props.reducer.s2} </div>
               <div style={{backgroundColor: 'yellow'}} className="border"> S3: {this.props.reducer.s3} </div>
               <button onClick ={() => {this.props.history.push('/')}}>Back</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps)(show);