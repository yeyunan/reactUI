var React = require('react');
var MinStore = require('iflux/min-store');
var GridTBody = require('./grid-tbody');
var GridHeader = require('./grid-header');
var operateStore = require('./operate-store');
var Tip = require('../tip.js');
var msg = require('iflux/msg');


var gridStore;

var DataGrid = React.createClass({


  mixins:[MinStore(operateStore)],

  getDefaultProps: function() {
    return {
      isOperate:true
    };
  },

  componentWillMount: function() {
    gridStore=this.props.gridStore;
  },

  render: function() {
    var props = this.props;
    var columns= props.children.map(function(column,i){
       return {
          name: column.props.dataField,
          header:column.props.header,
          render:column.props.render,
          children:column.props.children,
          index: i
       }
     });


 var operateColumn=[];

    if(this.props.isOperate){
      operateColumn.push(<th>操作</th>);
          }
    return (
<div>
      <table className={'table'}>
        <thread>
          <tr>
            {this.props.children}
            {operateColumn}
          </tr>
       </thread>
        <GridTBody columns={columns} dataGrid={this.props.gridStore.cursor().get('grid')} isOperate={this.props.isOperate}></GridTBody>
      </table>

      <Tip title={operateStore.cursor().get('title')} operate={operateStore.cursor().get('operate')}>{operateStore.cursor().get('content')} </Tip>
      </div>

    );
  }

});
//这里比较额 希望有改进 
    msg.on('operateRow',(body,title,_i,operate)=>{
      operateStore.cursor().set('index',_i)
      operateStore.cursor().set('content',body);
      operateStore.cursor().set('title',title);
      operateStore.cursor().set('operate',operate);
    });

    msg.on('changeValue',(_key,_value,operate)=>{
      var map=operateStore.cursor().get('updateData');
      if(map instanceof Map ==false){
        map=new Map();
      }
      map.set(_key,_value);
      operateStore.cursor().set('updateData',map)
    });


    msg.on('saveChange',()=>{
      var map=operateStore.cursor().get('updateData');
      var index=operateStore.cursor().get('index');
      var grid=gridStore.cursor().get('grid');
      var temp;
      map.forEach(function(val,key){

        if(temp){
          temp=  temp.set(key,val);
        }else{
          temp=  grid.get(index).set(key,val);
        }
      })
    });

    msg.on('delRow',()=>{
      var index=operateStore.cursor().get('index');
       gridStore.cursor().get('grid').delete(index)
    });

    msg.on('clearUpdateData',()=>{
      operateStore.cursor().get('updateData').clear();
    });

module.exports = DataGrid;
