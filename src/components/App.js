import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

// const App = () => {
class App extends React.Component {
  state = {images: [] };

  onSearchSubmit = async term =>{
    // axios.get('https://api.unsplash.com/search/photos?query=cars',{
    const response = await unsplash.get('/search/photos', {
      params:{ query: term }
    });

    this.setState({images: response.data.results});
  };

  render (){
    if(this.state.images.length)
      return (
        <div className="ui container" style={{marginTop : '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <div className="ui segment">
            <ImageList images={this.state.images} />
          </div>
        </div>
      );
    else{
      return (
        <div className="ui container" style={{marginTop : '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
      );
    }
  }
}

export default App;
