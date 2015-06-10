var React = require('react');

var UpdateOperate = React.createClass({

  render: function() {

    return (
      <form className="form-horizontal" role="form">
           <div className="form-group">
        {this.props.UpdateRow}
          </div>
        </form>
    );
  }

});

module.exports = UpdateOperate;
