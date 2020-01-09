import React from 'react';
import Img from './imageRender';
import Sidebar from './sidebarRender';
import './randomImage.css';

class Main extends React.Component {
  state = {
    textT: [
      { text: 'Введите свой размер или ' },
      { text: 'second img' },
      { text: 'third img' }
    ]
  };

  render() {
    const text = this.state.textT;
    console.log('main');
    return (
      <div className="App">
        <Img text={text[0].text}>
            {/* <p>hi</p> */}
        </Img>
        <Sidebar></Sidebar>
      </div>
    );
  }
}

export default Main;
