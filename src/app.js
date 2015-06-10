var React = require('react');
var MyInput = require('./component/my-input');
var MinStore = require('iflux/min-store');
var msg = require('iflux/msg');
var gridStore = require('./grid-store');
var DataGrid = require('./component/data-grid/data-grid');
var DataHeader = require('./component/data-grid/grid-header');


var  App= React.createClass({

  mixins:[MinStore(gridStore)],

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
    <DataGrid gridStore={gridStore} >
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

module.exports = App;

//render
React.render(<App/>, document.body);
