import React, { Component } from 'react';
import './Viewer.css';
export  default class Viewer extends Component {

    constructor(props){
        super(props);
        this.state = {
            CurrentItemInView : undefined,
            ViewList : undefined,
            // fetchView : d(),
        }
    }
    componentDidMount(){
        let localState = state
        localState = {...this.props}
        this.setState(localState)
    }

    render(){
        // const props = this.props;
        const localstate  = this.state
        const numberOfItems = state.CurrentItemInView == undefined ? false: localstate.CurrentItemInView.length
        return(
        <div className="Viewer">
                {numberOfItems > 0  ? <FullView/> : <Loader/>}
        </div>
        )
    }
}


function FullView(){

    return(
        <>FullView</>
    )
}

function Loader(){
    return(
        <div className="Loader">Loader</div>
    )
}