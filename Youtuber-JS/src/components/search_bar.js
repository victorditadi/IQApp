import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render(){
    // console.log(this.state.term);
    return(
      <div>
        <nav>
          <div className="nav-wrapper grey lighten-2">
              <div className="input-field">
                <input
                  value={this.state.term}
                  onChange={event => this.onInputChange(event.target.value)}
                  id="search" type="search" required/>
                  <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                  <i className="material-icons">close</i>
             </div>
         </div>
        </nav>
      </div>
    );
  }
}


export default SearchBar;
