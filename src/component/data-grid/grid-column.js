var React = require('react');

var GridColumn = React.createClass({

  render: function() {
    return (
       <td >
         {this.props.data}
       </td>
    );
  }

});

module.exports = GridColumn;
