var React = require('react');
var UpdateOperate = require('./update-operate');
var msg = require('iflux/msg');

var OperateColumn = React.createClass({


  _addUpdate(){
    msg.emit('operateRow',this.props.UpdateRow,'修改内容',this.props.i,'saveChange');
 },


 _addDelete(){
   msg.emit('operateRow','你确定删除吗?','删除内容',this.props.i,'delRow');
},


  render() {
    return (
      <td>
      <button   className="btn btn-lg btn-danger"  onClick={this._addUpdate} data-toggle="modal" data-target="#modal"
           >修改</button>
      <button type="button"  className="btn btn-primary btn-lg" onClick={this._addDelete}  data-toggle="modal" data-target="#modal">
          删除
      </button>
      </td>
    );
  }

});

module.exports = OperateColumn;
