var React = require('react');

var  MyInput= React.createClass({

getInitialState: function() {
  return {
    name: 'dsd'
  };
},
  render: function() {
    return (
    <input value={this.props.value}></input>
    );
  }

});

module.exports = MyInput;
