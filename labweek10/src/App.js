import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }
}

function App() {
  return (
    <form>
      <div>
        <h1>Data Entry Form</h1>
        <label>Email<br></br>
          <input type="text"/>
        </label>
        <br></br>
        <label>Name<br></br>
          <input type="text" />
        </label>
        <br></br>
        <label>Address<br></br>
          <input type="text" />
        </label>
        <br></br>
        <label>Address2<br></br>
          <input type="text" />
        </label>
        <br></br>
        <label>City<br></br>
          <input type="text" />
        </label>
        <br></br>
        <label>Province</label>
        <br></br>
        <select>
          <option value='Alberta'>Alberta</option>
          <option value='British Columbia'>British Columbia</option>
          <option value='Manitoba'>Manitoba</option>
          <option value='New Brunswick'>New Brunswick</option>
          <option value='Newfoundland and Labrador'>Newfoundland and Labrador</option>
          <option value='Nova Scotia'>Nova Scotia</option>
          <option value='Ontario'>Ontario</option>
          <option value='Prince Edward Island'>Prince Edward Island</option>
          <option value='Quebec'>Quebec</option>
          <option value='Saskatchewan'>Saskatchewan</option>
        </select>
        <br></br>
        <label>Postal Code<br></br>
          <input type="text" />
        </label>
        <br></br>
        <input type="submit" />
      </div>
    </form>
  );
}

export default App;
