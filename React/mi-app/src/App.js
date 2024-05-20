import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = 'react'
const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='


function isSearched(searchTerm) {
  return function (item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

function Search({value, onChange, children}) { // se ha vuelto una funcion
  return( <form>
          {children}
          <input type="text" value={value} onChange={onChange}/>
      </form>
  )
}


class Button extends Component {
  render() {
      const {onClick,className='',children} = this.props;
      return <button className={className} onClick={onClick}>{children}</button>;
  }
}

class Table extends Component {
  render() {
      const {list,pattern,onDismiss} = this.props;
      return(
          <div>
          {list.filter(isSearched(pattern)).map(item => {
              return <div key={item.objectID}>
                  <span style={{width: '40%'}}><a href={item.url}>{item.title}</a></span>
                  <span style={{width: '30%'}}>{item.author}</span>
                  <span style={{width: '10%'}}>{item.num_comments}</span>
                  <span style={{width: '10%'}}>{item.points}</span>
                  <span style={{width: '10%'}}>
                    <Button onClick={() => onDismiss(item.objectID)}>Dismiss</Button>
                  </span>
              </div>

          })}
          </div>
      )
  }
}


class App extends Component {
  onDismiss(id) {
    function isNotId(item) {
      return item.objectID !== id;
    }
    const updatedList = this.state.list.filter(isNotId); // filtramos la lista para quitar un elemento
    this.setState({ list: updatedList }); // actualizamos el estado
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });

  }
  setSearchTopStories(result) {
    this.setState({result});
 }
 
  componentDidMount() {
    const {searchTerm} = this.state;
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
        .then(response => response.json)
        .then(result => this.setSearchTopStories(result))
        .catch(error => error);
 }
 
 


  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    }
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);


  }

  render() {
    const { result, searchTerm } = this.state; // destructuring

    return (
      <div className="App">
        <Search value={searchTerm} onChange={this.onSearchChange}>Search</Search>
        <Table list={result} pattern={searchTerm} onDismiss={this.onDismiss} /> 

      </div>
    )

  }
}

export default App;
