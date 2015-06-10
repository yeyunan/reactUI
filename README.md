# reactUI &nbsp;<br />
本人菜鸟 往多多吐槽<br />
<br />
<br />
采用来了 react.js+immutable.js 写成的Grid &nbsp;样式采取的是bootstrap<br />
<br />
<br />
实现功能 &nbsp;1.根据 store 自动生成grid 可以显示用户需要展示的数据<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2.根据配置 自动生成 update delete 提示框&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3.update 提示框 可以根据用户配置 显示 select 等 默认是input&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4.自动保存 和 删除&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br />
后期功能 1.分页&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2.ajax请求&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br />
用户使用代码如下:<br />
<br />
<br />
<br />
var &nbsp;App= React.createClass({<br />
<br />
&nbsp; mixins:[MinStore(gridStore)],<br />
<br />
&nbsp; // &nbsp;你需要按照你的方式 展示数据的呈现<br />
&nbsp; _renderIsSale(data){<br />
&nbsp; &nbsp; if(data=='1'){<br />
&nbsp; &nbsp; &nbsp; return '上架';<br />
&nbsp; &nbsp; }else{<br />
&nbsp; &nbsp; &nbsp; return '下架';<br />
&nbsp; &nbsp; }<br />
&nbsp; },<br />
&nbsp; render: function() {<br />
&nbsp; &nbsp; return (<br />
&nbsp; &nbsp; &lt;div&gt;<br />
&nbsp; &nbsp; &lt;DataGrid gridStore={gridStore} isOperate={true}&gt;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;DataHeader dataField="id" header="商品编号" &gt;&lt;/DataHeader&gt;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;DataHeader dataField="name" header="商品名称"&gt;&lt;/DataHeader&gt;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;DataHeader dataField="price" header="商品价格"&gt;&lt;/DataHeader&gt;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;DataHeader dataField="isSale" header="是否上架" render={this._renderIsSale}&gt;&nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;select name="isSale" className="form-control" &gt;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;option value="1"&gt;上架&lt;/option&gt;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;option value="0"&gt;下架&lt;/option&gt;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;/select&gt;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;/DataHeader&gt;<br />
&nbsp; &nbsp; &lt;/DataGrid&gt;<br />
&nbsp; &nbsp; &lt;/div&gt;<br />
&nbsp; &nbsp; )<br />
&nbsp; }<br />
<br />
});<br />
<br />
<p>
	//DataGird 的 isOperate 属性 默认为 ture 会有操作列 自动update ，delete&nbsp;
</p>
<p>
	&lt;DataGrid gridStore={gridStore} isOperate={true}&gt;
</p>
<p>
	&nbsp;//这里是update 你更新字段时候 特殊的控件 select （默认是 input ）
</p>
<p>
	&nbsp;&lt;select name="isSale" className="form-control" &gt;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;option value="1"&gt;上架&lt;/option&gt;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;option value="0"&gt;下架&lt;/option&gt;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;/select&gt;
</p>
<br />
<br />
grid数据:<br />
<br />
&nbsp;var gridStore = module.exports=Store({<br />
&nbsp; grid:[<br />
&nbsp; {<br />
&nbsp; &nbsp; &nbsp; id: 1,<br />
&nbsp; &nbsp; &nbsp; name: "Item name 1",<br />
&nbsp; &nbsp; &nbsp; price: 100,<br />
&nbsp; &nbsp; &nbsp; isSale:1<br />
<br />
&nbsp; },{<br />
&nbsp; &nbsp; &nbsp; id: 2,<br />
&nbsp; &nbsp; &nbsp; name: "Item name 2",<br />
&nbsp; &nbsp; &nbsp; price: 100,<br />
&nbsp; &nbsp; &nbsp; isSale:0<br />
&nbsp; },{<br />
&nbsp; &nbsp; &nbsp; id: 3,<br />
&nbsp; &nbsp; &nbsp; name: "Item name 3",<br />
&nbsp; &nbsp; &nbsp; price: 110,<br />
&nbsp; &nbsp; &nbsp; isSale:1<br />
&nbsp; },{<br />
&nbsp; &nbsp; &nbsp; id: 4,<br />
&nbsp; &nbsp; &nbsp; name: "Item name 4",<br />
&nbsp; &nbsp; &nbsp; price: 100,<br />
&nbsp; &nbsp; &nbsp; isSale:1<br />
&nbsp; },{<br />
&nbsp; &nbsp; &nbsp; id: 5,<br />
&nbsp; &nbsp; &nbsp; name: "Item name 5",<br />
&nbsp; &nbsp; &nbsp; price: 100,<br />
&nbsp; &nbsp; &nbsp; isSale:0<br />
&nbsp; },{<br />
&nbsp; &nbsp; &nbsp; id: 6,<br />
&nbsp; &nbsp; &nbsp; name: "Item name 6",<br />
&nbsp; &nbsp; &nbsp; price: 100,<br />
&nbsp; &nbsp; &nbsp; isSale:1<br />
&nbsp; }<br />
]<br />
});<br />
<br />


效果:
<br />表单显示![image](https://github.com/yeyunan/reactUI/blob/master/example/doc/pic/data.png)

<br />update&nbsp; &nbsp; &nbsp; 自动生成 并且自动完成更新
<br>![image](https://github.com/yeyunan/reactUI/blob/master/example/doc/pic/update.png)

<br />delete![image](https://github.com/yeyunan/reactUI/blob/master/example/doc/pic/delete.png)


