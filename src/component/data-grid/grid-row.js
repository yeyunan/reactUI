var React = require('react');
var GridColumn = require('./grid-column');
var OperateColumn = require('./operate-column');
var UpdateColumn = require('./update-column');
var msg = require('iflux/msg');

var GirdRow = React.createClass({





  render: function() {
    var data=this.props.data;
    var i=this.props.i;
    var UpdateRow=[];

    var columns=this.props.column.map(function(column){
      var render=column.render;
      var columnData=data.get(column.name);
      if(render){
        columnData=render(columnData)
      }
        UpdateRow.push(<UpdateColumn children={column.children} header={column.header}columnData={columnData} name={column.name}></UpdateColumn>)
      return(<GridColumn data={columnData}></GridColumn>);
    });

    var operateColumn=[];

     if(this.props.isOperate){
       operateColumn.push(<OperateColumn i={this.props.i}  UpdateRow={UpdateRow} ></OperateColumn>);
     }

    return (
      <tr>
      {columns}
      {operateColumn}
      </tr>

    );
  }

});

module.exports = GirdRow;
