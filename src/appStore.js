var Store = require('iflux/store');
var msg = require('iflux/msg');

var appStore = module.exports=Store({
  username:'222'
});

msg.on('usernameChange',(username)=>{
  appStore.cursor().set('username',username);

})
