
/*
* cityAreaSelect.js
* v1.0
*/

(function() {
  // 省市区数据源
  const areaData = {
    // 示例数据结构
    '110000': { name: '北京市', children: { '110100': { name: '北京市', children: { '110101': '东城区', '110102': '西城区'} } } },
    '120000': { name: '天津市', children: { '120100': { name: '天津市', children: { '120101': '和平区', '120102': '河东区'} } } }
    // ... 更多省市区数据
  };

  // 省市区联动选择插件
  function ProvinceCityAreaSelect(options) {
    this.addrValElem = null;
    this.isSelect = true;
    this.separator = options.separator || ' ';
    this.mergeDiv = options.mergeDiv || false;
  }

  ProvinceCityAreaSelect.prototype.init = function() {
    var addrValElem = this.addrValElem;
    if(Array.isArray(addrValElem)){  // 如果是数组
      this.provinceSel = document.getElementById(addrValElem[0]);
      this.citySel = addrValElem[1] ? document.getElementById(addrValElem[1]) : null;
      this.areaSel = addrValElem[2] ? document.getElementById(addrValElem[2]) : null
    }
    else{
      this.addrAllSel = document.getElementById(addrValElem);
    }

    console.log(this.areaSel.tagName)
  };

  ProvinceCityAreaSelect.prototype.populateProvinces = function() {
    if (this.isSelect) {
      // this.populateSelect(this.provinceSel, areaData);
    } else {
      // this.populateDiv(this.provinceSel, areaData);
    }
  };


  // 暴露插件给全局
  window.ProvinceCityAreaSelect = ProvinceCityAreaSelect;
})();

// 使用示例
const pcaSelect1 = new ProvinceCityAreaSelect({
      addrValElem: ['provinceSelect1', 'citySelect1', 'areaSelect1']
});

const pcaSelect2 = new ProvinceCityAreaSelect({
      // provinceSelElem: 'provinceSelect2',
      // citySelElem: 'citySelect2',
      // areaSelElem: 'areaSelect2',
      // separator: ' - ',
      // mergeDiv: false
});
