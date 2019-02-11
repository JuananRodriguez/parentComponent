import React from 'react';


const parentComponent = (Components) => {
    class childComponent extends React.Component {

        state={
            Functions: {},
            Content: {},
            lastRenderForce: new Date()
        };

        stateBase = this.state;
        stateLess = {} ;

        updateStore = (state,section) =>{
            this.setState({
                [section]:{...state}
            })
        };

        getState = () =>{
            return this.state
        };

        getStateLess = () =>{
            return this.stateLess;
        };

        clearState =()=>{
            this.setState({...this.stateBase})
        };

        getParent = () =>{
            return this
        };

        updateStatelessStore = (state,section) =>{
            this.stateLess = Object.assign({},this[section],{...state});
            console.log('In parent component',this.stateLess)
        };

        forceUpdate = () =>{
            this.setState({
                lastRenderForce: new Date()
            })
        };

        render() {
            return (
                Components.map((Component,index) => {
                    return <Component
                        {...this.props}
                        {...this.state}
                        key={'Child' + index}
                        getState={this.getState}
                        getStateLess={this.getStateLess}
                        getParent={this.getParent}
                        clearState={this.clearState}
                        forceUpdate={this.forceUpdate}
                        storageFunctions={(store)=>this.updateStore('Functions', store)}
                        storageParent={(store,section)=>this.updateStore(store, section="Content")}
                        storageStatelessParent={(store,section)=>this.updateStatelessStore(store, section="Stateless")}
                    />
                })
            )
        }
    }

    return childComponent;

};

export default parentComponent
