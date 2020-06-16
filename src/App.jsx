import React from 'react';
import { DatePicker, Button } from 'antd';
import { Router, Route } from "react-router-dom";

// import './App.css';
import './css/app.css';

import 'antd/dist/antd.css';
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <div> App.js</div>
          {/* <Route exact path="/" component={LoginContainer} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/snippets" component={SnippetsContainer} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
