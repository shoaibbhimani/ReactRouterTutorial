import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory, Link } from  'react-router';


const App = () => (
	<div>
		<h2>App</h2>
		<Link to="/about">About Component</Link>
	</div>
);

const About = () => (
	<div>
		<h2>About</h2>
		<Link to="/">App Component</Link>
	</div>
);

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/about" component={About} />
	</Router>
,
  document.getElementById('root')
);
