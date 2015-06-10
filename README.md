# reactUI  
本人菜鸟 往多多吐槽


采用来了 react.js+immutable.js 写成的Grid  样式采取的是bootstrap


实现功能  1.根据 store 自动生成grid 可以显示用户需要展示的数据
          2.根据配置 自动生成 update delete 提示框 
          3.update 提示框 可以根据用户配置 显示 select 等 默认是input
          4.自动保持 和 删除 
          
后期功能 1.分页 
         2.ajax请求 
         
         
         
用户使用代码如下:



var  App= React.createClass({

  mixins:[MinStore(gridStore)],

  //  你需要按照你的方式 展示数据的呈现
  _renderIsSale(data){
    if(data=='1'){
      return '上架';
    }else{
      return '下架';
    }
  },
  render: function() {
    return (
    <div>
    <DataGrid gridStore={gridStore} isOperate={true}>
          <DataHeader dataField="id" header="商品编号" ></DataHeader>
          <DataHeader dataField="name" header="商品名称"></DataHeader>
          <DataHeader dataField="price" header="商品价格"></DataHeader>
          <DataHeader dataField="isSale" header="是否上架" render={this._renderIsSale}> 
           
            <select name="isSale" className="form-control" >
               <option value="1">上架</option>
               <option value="0">下架</option>
            </select>
          </DataHeader>
    </DataGrid>
    </div>
    )
  }

});

//DataGird 的 isOperate 属性 默认为 ture 会有操作列 自动update ，delete 
 
            <select name="isSale" className="form-control" >
               <option value="1">上架</option>
               <option value="0">下架</option>
            </select>
 //这里是update 你更新字段时候 特殊的控件 （默认是 ）


grid数据:

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

