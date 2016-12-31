console.log('hellow from jsx');

var ReactDOM = require('react-dom');
var React = require('react');

var TodoList = require('./components/todolist.jsx');

var list = [{
    name: "Complete React course",
    done: false
}, {
    name: "Complete ES6 course",
    done: true
}, {
    name: "Complete Relay course",
    done: false
}];

ReactDOM.render(<TodoList items={list} />, app);