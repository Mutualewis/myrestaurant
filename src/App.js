import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange() {
    this.setState({
      checked: !this.state.checked
    })
  }
  render() {
    const hidden = this.state.checked ? '' : 'hidden';
    return (
     <div>
        <Header/>
        <ul>
          {items.map(i => (
            <ListItem item={i} key={i.id} checked={ this.state.checked } onChange={ this.handleChange } className={ hidden } />
          ))}
        </ul>
     </div>
    );
  }
}
const items = [
{

     "name":'Salad',
     "choices": [
        {"name": 'Santa Fe'},
        {"name": 'Greek'},
        {"name": 'Asian'},
     ],
     "related": [
       {
          "name":'Dressing',
          "choices": [
            {"name": 'Italian'},
            {"name": 'Blue Cheese'},
            {"name": 'Ranch'},
          ]
       },
       {
          "name":'Bread',
          "choices": [
            {"name": 'Italian'},
            {"name": 'Flat'},
            {"name": 'Sourdough'},
          ]                  
       }

     ]
  },
  {
     "name":'Entree',
     "choices": [
        {"name": 'Steak'},
        {"name": 'Salmon'},
        {"name": 'Rice'},
     ],
     "related": [
     ]
  },
  {
     "name":'Soup',
     "choices": [
        {"name": 'Minestrone'},
        {"name": 'Hot and sour'},
        {"name": 'Miso'},
     ],
     "related": [
       {
          "name":'Bread',
          "choices": [
            {"name": 'Breadsticks'}
          ]
       }
     ]
  },

];

function ListItem({ item, checked, onChange, className }) {
  let choices = null;
  let related = null;

  if (item.choices && item.choices.length) {
    choices = (
      <ul class={className}>
        {item.choices.map(i => (
          <ListItem item={i} key={i.id} />
        ))}
      </ul>
    );
  }
  if (item.related && item.related.length) {
    related = (
      <ul class={className}>
        {item.related.map(i => (
          <ListItem item={i} key={i.id} />
        ))}
      </ul>
    );
  }

  return (
    <li onChange={onChange}>
      <input type = "checkbox" checked ={checked} value = {item.name}/> {item.name}
      {choices}
      {related}
    </li>
  );
}



class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Restaurant Menu</h1>
         </div>
      );
   }
}

App.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}



export default App;
