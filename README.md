# citySelectJs

## HTML结构
1. 省市区-select控件-3级联动
		<div class="cityAreaSelect-group row">
			  <div class="cityAreaSelect-item col-md-4">
				    <select class="cityAreaSelect-select" id="provinceSelect">
				      	<option value="">请选择省/直辖市</option>
				    </select>
			  </div>
			  <div class="cityAreaSelect-item col-md-4">
				    <select class="cityAreaSelect-select" id="citySelect">
				      	<option value="">请选择城市/区</option>
				    </select>
			  </div>
			  <div class="cityAreaSelect-item col-md-4">
				    <select class="cityAreaSelect-select" id="areaSelect">
				      	<option value="">请选择区/县</option>
				    </select>
			  </div>
		</div>

2. 省市-select控件-2级联动
		<div class="cityAreaSelect-group row">
			  <div class="cityAreaSelect-item col-md-6">
				    <select class="cityAreaSelect-select" id="provinceSelect">
				      	<option value="">请选择省/直辖市</option>
				    </select>
			  </div>
			  <div class="cityAreaSelect-item col-md-6">
				    <select class="cityAreaSelect-select" id="citySelect">
				      	<option value="">请选择城市/区</option>
				    </select>
			  </div>
		</div>

3. 省市区-自定义div控件-3级联动
		<div class="cityAreaSelect-group row">
			  <div class="cityAreaSelect-item col-md-4">
				    <div class="cityAreaSelect-custom-box">
								<input type="text" hidden id="provinceSelect">
								<div class="cityAreaSelect-text">请选择省/直辖市</div>
						</div>
			  </div>
			  <div class="cityAreaSelect-item col-md-4">
				    <div class="cityAreaSelect-custom-box">
								<input type="text" hidden id="citySelect">
								<div class="cityAreaSelect-text">请选择城市/区</div>
						</div>
			  </div>
			  <div class="cityAreaSelect-item col-md-4">
				    <div class="cityAreaSelect-custom-box">
								<input type="text" hidden id="areaSelect">
								<div class="cityAreaSelect-text">请选择区/县</div>
						</div>
			  </div>
		</div>

4. 省市-自定义div控件-2级联动
		<div class="cityAreaSelect-group row">
			  <div class="cityAreaSelect-item col-md-6">
				    <div class="cityAreaSelect-custom-box">
								<input type="text" hidden id="provinceSelect">
								<div class="cityAreaSelect-text">请选择省/直辖市</div>
						</div>
			  </div>
			  <div class="cityAreaSelect-item col-md-6">
				    <div class="cityAreaSelect-custom-box">
								<input type="text" hidden id="citySelect">
								<div class="cityAreaSelect-text">请选择城市/区</div>
						</div>
			  </div>
		</div>

## CSS 和 JS 调用
		<link href="./dist/css/cityAreaSelect.css" rel="stylesheet" type="text/css"/>
		
		...

		<script type="text/javascript" src="./dist/js/cityAreaSelect.js"></script>

## JS参数说明

* addrValElem: 省市区控件参数Id, String(省市区控件合并显示时) / Array(省市区控件多级且独立分开时)
* separator: 合并地址分隔符, String
* provinceWord: 省/市占位提示语，String
* cityWord: 市/区占位提示语，String
* areaWord: 区/县占位提示语，String
* onInit: 初始加载后回调事件，Function, 可返回省/市/区控件id
* onSelected: 选择后回调事件，Function，可返回省/市/区参数值