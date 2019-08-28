import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component {
     constructor() {
      super();
      this.state = {
         data: 
         [
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
            
         ]
      }   
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }  
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((food, i) => <TableRow key = {i} 
                     data = {food} />)}
               </tbody>
            </table>
         </div>
      );
   }
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
class TableRow extends React.Component {
   render() {
      return (
         <div>
            <input type = "checkbox" value = {this.props.data.name} onChange = {this.updateState} /> {this.props.data.name}
            <div>{this.props.data.choices.name}</div>
         </div>
      );
   }
}

class Choices extends React.Component {
   render() {
      return (
         <div>
            <input type = "checkbox" value = {this.props.data.name} onChange = {this.updateState} /> {this.props.data.name}
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
