import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''}
  
  // onFormSubmit (event) {
  onFormSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  } ;

  render() {
    return (
      <div className="ui clearing segment">
      <div className="ui container">
        <form onSubmit={this.onFormSubmit} className="ui form">
        {/* <form onSubmit={ (e) => this.onFormSubmit(e)} className="ui form"> */}
          <div className="field">
            <label>Image Search using unsplash's api</label>
            {/* <input type="text" onChange={this.onInputChange} /> */}
            {/* <input type="text" onChange={e => console.log(e.target.value)} /> */}
            <input 
              type="text" 
              value={this.state.term} 
              onChange={e => this.setState({term:e.target.value})} 
              />
          </div>
          <button className="ui right floated button submit">Submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default SearchBar;