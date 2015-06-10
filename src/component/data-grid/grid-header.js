var React = require('react');

var GridHeader = React.createClass({

  render: function() {


    return (
      <th>{this.props.header}</th>
    );
  }

});

module.exports = GridHeader;
