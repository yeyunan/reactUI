var React = require('react');
var msg = require('iflux/msg');

var Tip = React.createClass({

   _onSubmit(){
       msg.emit(this.props.operate);
   },

   _close(){
     msg.emit('clearUpdateData');
   },

  render: function() {
var i=1;

    return (
      <div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
   <div className="modal-dialog">
     <div className="modal-content">
       <div className="modal-header">
         <button type="button" onClick={this._close} className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
         <h4 className="modal-title" id="myModalLabel">{this.props.title}</h4>
       </div>
       <div className="modal-body" >
         <form className="form-horizontal" role="form" ref='form'>
        {this.props.children}
        </form>
       </div>
       <div className="modal-footer">
         <button type="button" className="btn btn-default"  onClick={this._close} data-dismiss="modal"> Close</button>
         <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this._onSubmit}>确认</button>
       </div>
     </div>
   </div>
 </div>
    );
  }

});

module.exports = Tip;
