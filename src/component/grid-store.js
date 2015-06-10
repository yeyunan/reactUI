var Store = require('iflux/store');


var gridStore = module.exports=Store({
  grid:[
  {
      id: 1,
      name: "Item name 1",
      price: 100,
      isSale:1

  },{
      id: 2,
      name: "Item name 2",
      price: 100,
      isSale:0
  },{
      id: 3,
      name: "Item name 3",
      price: 110,
      isSale:1
  },{
      id: 4,
      name: "Item name 4",
      price: 100,
      isSale:1
  },{
      id: 5,
      name: "Item name 5",
      price: 100,
      isSale:0
  },{
      id: 6,
      name: "Item name 6",
      price: 100,
      isSale:1
  }
]
});
