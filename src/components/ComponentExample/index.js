import React from "react"
import Frame from 'react-frame-component';
import css from '!!raw-loader!lfui/dist/lf.css'; 
import Preview from '../Preview';
import Actions from '../Actions'
let src="http://www.lf.se"



class ComponentExample extends React.Component {
    state = {
      backgroundColor: '#fff'
    }
    handleSetBackgroundToWhite = () => {
      this.setState({
        backgroundColor: '#fff'
      });
    }
    handleSetBackgroundToGray = () => {
      this.setState({
        backgroundColor: '#f3f3f3'
      });
    }

    render () {
      console.log(this.state.backgroundColor)
      return (
        <React.Fragment>
          
          <Preview>
            <Actions white={this.handleSetBackgroundToWhite} gray={this.handleSetBackgroundToGray} />
            <Frame
            src={src}
            head={
              
              <style>
                {css}
                {'body{background-color:'+this.state.backgroundColor+'}'}
              </style>
            }
          
            >

            </Frame>
          </Preview>
        </React.Fragment>
      )
  }
};


export default ComponentExample;


