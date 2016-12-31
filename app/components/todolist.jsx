var React = require('react');

var TodoList = React.createClass({
    render: () => {
        var list = this.props.items.map((item, index) => item.name);
        return (
            <div>
                <h1>Todo Lists</h1>
                {list}
            </div>
        );
    }
});
console.log(TodoList);
module.exports = TodoList;