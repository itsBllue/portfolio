import React, { Component } from 'react';
import './Viewer.css';
import Projects from './DummyData.json'
import {Transition} from 'react-transition-group';
import Placeholder from '../../img/placeholder.png';
import ReactLogo from '../../img/react.png';
import GolangLogo from '../../img/golang.png';
const Images = {'React':ReactLogo, 'GoLang': GolangLogo}

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
        return<ListItem itemName={listItem.Display} Languages={listItem.Languages}></ListItem>})
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
    const LanguageBadge = props.Languages.map((lang) =>{ return <Langbadge lang={lang}/>})
    return(<div className='Item'>
    <div className='Holder'>
    <img src={props.IMG ? props.IMG : Placeholder}/>
        </div> 
    <h3>{props.itemName}</h3>
    <div className='Bottombar'>{LanguageBadge}</div>
    </div>)
}


function Langbadge(props){
    console.log(Images[props.lang])
    return(<div className={"Langbadge " + props.lang}><img src={Images[props.lang]}/> </div>)
}