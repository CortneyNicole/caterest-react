import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './list'
import pins from './pins_formatted.json';

// ========================================

ReactDOM.render(<List pictures={[]}/>, document.getElementById("root"));

