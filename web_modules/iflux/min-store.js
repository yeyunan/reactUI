var msg = require('iflux/msg');
var Store = require('iflux/store');
module.exports=(gridStore)=>{

return{
getInitialState: function() {
  return gridStore.data();
},

  componentDidMount: function() {
    var _this=this;
    gridStore.onStoreChange(function (nextState){
      if(_this.isMounted()){
        _this.replaceState(nextState);
      }

    });
  }

};
};
