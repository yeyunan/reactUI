var Store = require('iflux/store');

//用于update的 store
var operateStore=module.exports=Store({
      title:'',
      content:'',
      operate:'',
      updateData:new Map(),
      index:''
    });
