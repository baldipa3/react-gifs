import React, {Component} from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "WN16kBTKVAEuI"
    }
  }

  search = (query) => {
    giphy('Alvn3kLDhhEtVYjZChNmx3xUmY6Q042O').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, results) => {
      this.setState({
        gifs: results.data
      })
    });
  }

  render() {
    const gifs = [
      {id: 'WN16kBTKVAEuI'},
      {id: 'HeDLTI576bBgA'}
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
      )
  };
}


export default App;

