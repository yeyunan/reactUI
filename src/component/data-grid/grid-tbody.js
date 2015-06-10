var React = require('react');
var GridRow = require('./grid-row');

var GridTBody = React.createClass({

  render: function() {

     var data=this.props.dataGrid;
     var column=this.props.columns;
     var isOperate=this.props.isOperate;
     var rows=data.map(function(rowData,i){
      return(<GridRow  data={rowData} i={i} column={column} isOperate={isOperate}></GridRow>)
    });

    return (
    <tbody>
        {rows}
    </tbody>
    );
  }

});

module.exports = GridTBody;
