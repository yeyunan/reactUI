var React = require('react');
var msg = require('iflux/msg');


//update 的时候 的输入
var UpdateColumn = React.createClass({

  getInitialState: function() {
    return {
      columnData  : this.props.columnData

    };
  },
  componentWillReceiveProps: function(nextProps) {
    this.state.columnData=nextProps.columnData;
  },


  _onChange(e){
  this.setState({columnData:e.target.value});
    msg.emit('changeValue',this.props.name,e.target.value);
  },

  render: function() {
    var column=''
    if(this.props.children){
      column=this.props.children;
      column.props.onChange=this._onChange;
    }else{
      column=<input  name={this.props.name}  className="form-control"   value={this.state.columnData} onChange={this._onChange}/>
    }
    return (
      <div className="form-group"  >
      <label className="col-sm-2 control-label">{this.props.header}</label>
      <div className="col-sm-6">
      {column}
      </div>
      </div>
    );
  }

});

module.exports = UpdateColumn;
