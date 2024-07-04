# cityAreaSelect.js

## HTML 调用
	<html>
		<head>
			<link href="./dist/css/cityAreaSelect.css" rel="stylesheet" type="text/css"/>
		</head>

		<body>
			<!-- 1. 省市区-select控件-3级联动 -->
			<div class="cityAreaSelect-group row">
			  <div class="cityAreaSelect-item col-md-4">
			    <select class="cityAreaSelect-select" id="provinceSelect1">
			      <option value="">请选择省/直辖市</option>
			    </select>
			  </div>
			  <div class="cityAreaSelect-item col-md-4">
			    <select class="cityAreaSelect-select" id="citySelect1">
			      <option value="">请选择城市/区</option>
			    </select>
			  </div>
			  <div class="cityAreaSelect-item col-md-4">
			    <select class="cityAreaSelect-select" id="areaSelect1">
			      <option value="">请选择区/县</option>
			    </select>
			  </div>
			</div>

			<!-- 2. 省市-select控件-2级联动 -->
			<div class="cityAreaSelect-group row">
			  <div class="cityAreaSelect-item col-md-6">
			    <select class="cityAreaSelect-select" id="provinceSelect2">
			      <option value="">请选择省/直辖市</option>
			    </select>
			  </div>
			  <div class="cityAreaSelect-item col-md-6">
			    <select class="cityAreaSelect-select" id="citySelect2">
			      <option value="">请选择城市/区</option>
			    </select>
			  </div>
			</div>

			<!-- 3. 省市区-自定义div控件-3级联动 -->
			<div class="cityAreaSelect-group row">
			  <div class="cityAreaSelect-item col-md-4">
			    <div class="cityAreaSelect-custom-box">
			      <input type="text" hidden id="provinceSelect3">
			      <div class="cityAreaSelect-text">请选择省/直辖市</div>
			    </div>
			  </div>
			  <div class="cityAreaSelect-item col-md-4">
			    <div class="cityAreaSelect-custom-box">
			      <input type="text" hidden id="citySelect3">
			      <div class="cityAreaSelect-text">请选择城市/区</div>
			    </div>
			  </div>
			  <div class="cityAreaSelect-item col-md-4">
			    <div class="cityAreaSelect-custom-box">
			      <input type="text" hidden id="areaSelect3">
			      <div class="cityAreaSelect-text">请选择区/县</div>
			    </div>
			  </div>
			</div>

			<!-- 4. 省市-自定义div控件-2级联动 -->
			<div class="cityAreaSelect-group row">
			  <div class="cityAreaSelect-item col-md-6">
			    <div class="cityAreaSelect-custom-box">
			      <input type="text" hidden id="provinceSelect4">
			      <div class="cityAreaSelect-text">请选择省/直辖市</div>
			    </div>
			  </div>
			  <div class="cityAreaSelect-item col-md-6">
			    <div class="cityAreaSelect-custom-box">
			      <input type="text" hidden id="citySelect4">
			      <div class="cityAreaSelect-text">请选择城市/区</div>
			    </div>
			  </div>
			</div>
		</body>

		<script type="text/javascript" src="./dist/js/cityAreaSelect.js"></script>
	</html>

## JS调用方法
	<script type="text/javascript">
		// 使用示例
		// 省市区控件多级且独立分开时，addrValElem必须是数组；合并显示时，为字符串
		const pcaSelect1 = new ProvinceCityAreaSelect({
		  addrValElem: ['provinceSelect1', 'citySelect1', 'areaSelect1'],
		  onInit: function(provinceSelect, citySelect, areaSelect){
		  	console.log(provinceSelect+', '+citySelect+', '+areaSelect)
		  },
		  onSelected: function(provinceVal, cityVal, areaVal){
		  	console.log(provinceVal+', '+cityVal+', '+areaVal)
		  }
		});

		const pcaSelect2 = new ProvinceCityAreaSelect({
		  addrValElem: ['provinceSelect2', 'citySelect2']
		});

		const pcaSelect3 = new ProvinceCityAreaSelect({
		  addrValElem: ['provinceSelect3', 'citySelect3', 'areaSelect3'],
		  onSelected: function(provinceVal, cityVal, areaVal){
		  	console.log(provinceVal+', '+cityVal+', '+areaVal)
		  }
		});

		const pcaSelect4 = new ProvinceCityAreaSelect({
		  addrValElem: ['provinceSelect4', 'citySelect4']
		});
	</script>

## JS参数说明

* addrValElem: 省市区控件参数Id, String(省市区控件合并显示时) / Array(省市区控件多级且独立分开时)
* separator: 合并地址分隔符, String
* provinceWord: 省/市占位提示语，String
* cityWord: 市/区占位提示语，String
* areaWord: 区/县占位提示语，String
* onInit: 初始加载后回调事件，Function, 可返回省/市/区控件id
* onSelected: 选择后回调事件，Function，可返回省/市/区参数值