import React, {Component} from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  list = () => {
     return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif}/>
    })
  }

  render = () => {
    return (
      <div className="gif-list">
        {this.list()}
      </div>
    );
  };
}


export default GifList;
