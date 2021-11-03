import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Person(props){
  return( 
    <div className='info__tab'>
            <h3>{props.name}</h3>
            <p>{props.sent}</p>
            </div>
  );
}

function App(){
  return(
  <div className='boxes_client'>
  <Person name='Hamza' sent='Life is test between odds and evens.'/>
  <Person name='Ali' sent='Life is test between odds and evens.'/>
  <Person name='Saqib' sent='Life is test between odds and evens.'/>
  <Person name='Pershotam' sent='Life is test between odds and evens.'/>
  </div>
  );
}



ReactDOM.render(<App/>,document.getElementById('root'))


