var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');

module.exports=function Store(/*Immutable.Map*/arg) {

  /**
   * 当前应用的数据
   */
  var state = Immutable.fromJS(arg || {});


  var callBacks=[];
  /**
     注册返回
   */
  var onStoreChange=(callBack)=>{

    callBacks.push(callBack);
  }


   var data = () => {

    return state;
  }

  var cursor=()=>{
    var change=(nextState, preState, path)=>{
      callBacks.forEach(function(callBack){
        callBack(nextState);
      })
      state=nextState;
    };
    var cursor=Cursor.from(state,change);

    return cursor;
  }

  var refresh=()=>{
    callBacks.forEach(function(callBack){
      callBack(state);
    });
  }

  return {
    onStoreChange:onStoreChange,
    cursor:cursor,
    data:data,
    refresh:refresh
  };

};
