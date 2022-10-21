import React from 'react';
import ReactDOM from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';
import './index.css';


class NobleTruths extends React.Component {
  image="lotus.jpg"
  alt="Lotus in pool."

  textProps = [
    {
      title:"The First Noble Truth",
      text:"Suffering is an unavoidable part of the cycle of life, death, and rebirth."
    },
    {
      title:"The Second Noble Truth",
      text:"Attachment to our desires leads to suffering."
    },
    {
      title:"The Third Noble Truth",
      text:"Detaching from our desires leads to the end of suffering."
    },      
    {
      title:"The Fourth Noble Truth",
      text:"The eightfold path shows us the way to detach from our desires."
    },
  ];

  constructor(props) {
    super(props);
    this.state = {  
                  text:this.textProps[0].text,
                  title:this.textProps[0].title
                };
    this.setText = this.setText.bind(this);
  }

  setText(theTitle, theText) {
    this.setState({
      title:theTitle,
      text:theText
    });
  }

  render() {
    return (
      <div className="noble-truths">
        <img className="noble-truths-image" src={this.image} alt={this.alt}/>
        <div className="noble-truths-title">{this.state.title}</div>
        <div className="noble-truths-text">{this.state.text}</div>
        <div className="noble-truths-button-container">
          {this.textProps.map((props) => {
            return <NobleTruthButton key={uuidv4()} setText={this.setText} title={props.title} text={props.text}/>
          })}
        </div>
      </div>
    )
  }
}

function NobleTruthButton(props) {
    return (
      <button className='noble-truths-button' onClick={() => props.setText(props.title, props.text)}>
        {props.title}
      </button>
    );
}

class App  extends React.Component {
  render() {
    return <NobleTruths/>
  }

}  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App/>);