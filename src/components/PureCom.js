////////////////pure-Components///////////////////
// class based components // =>pure components are the components which do not re-render when the value of state and props has been updated with the same values


import React ,{PureComponent}from 'react'
class PureCom extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            data: 10
        }
    }
    render() {
 console.warn("inner")
        return (
            <>
                <h1>PureComponent{this.state.data}</h1>
                <button onClick={()=>{this.setState({data:10})}}>Clicked Me</button>

            </>
        )


    }
}
export default PureCom;
