import React, { Component } from 'react';
import './Viewer.css';
import Projects from './DummyData.json'
import {Transition} from 'react-transition-group';
export  default class Viewer extends React.Component {

    state={}
    constructor(props){
        super(props);
        console.log('Projects', Projects, Object.keys(Projects).length)
         this.state = {
            CurrentItemInView : undefined,
            ViewList : Projects,
            // fetchView : d(),
        }
    }
    // componentDidMount(){
    //     console.log(Projects)
    //     // let localState = this.state
    //     // localState = {...this.props}
    //     // this.setState(localState)
    // }

    render(){
        // const props = this.props;
        
        const localstate  = this.state
        const numberOfItems = localstate.ViewList == undefined ? false: Object.keys(localstate.ViewList).length
        console.log('Projects', numberOfItems, Object.keys(localstate.ViewList).length)
        return(
        <div className="Viewer">
                {numberOfItems  == undefined  ? <Loader/> :localstate.CurrentItemInView ? <FullView/> : <ProjectViewer list={localstate.ViewList}/>}
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


function ProjectViewer(props){
    let list = Object.keys(props.list).map((item,value)=>{
            // console.log(props.list[item])
            let listItem = props.list[item]
        return<ListItem itemName={listItem.Display}></ListItem>})
    // let list = Object.keys(props.list)
    console.log(list)
    return(
        <>{list}</>
        // <Transition>
            // {/* {list} */}
        // </Transition>
    )
}

function ListItem(props){
    return(<div className='Item'>
    <h1>{props.itemName}</h1>
    <div className='test'></div>
    </div>)
}