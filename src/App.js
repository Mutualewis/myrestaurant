import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

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

function ListItem({ item }) {
  let choices = null;
  let related = null;
  if (item.choices && item.choices.length) {
    choices = (
      <ul>
        {item.choices.map(i => (
          <ListItem item={i} key={i.id} />
        ))}
      </ul>
    );
  }
  if (item.related && item.related.length) {
    related = (
      <ul>
        {item.related.map(i => (
          <ListItem item={i} key={i.id} />
        ))}
      </ul>
    );
  }

  return (
    <li>
      <input type = "checkbox" value = {item.name} /> {item.name}
      {choices}
      {related}
    </li>
  );
}

function App() {
  return (
   <div>
      <Header/>
      <ul>
        {items.map(i => (
          <ListItem item={i} key={i.id} />
        ))}
      </ul>
   </div>
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
