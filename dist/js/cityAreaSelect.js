
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
    this.provinceSelElem = null;
    this.citySelElem = null;
    this.areaSelElem = null;
    this.isSelect = true;
    this.separator = options.separator || ' ';
    this.mergeDiv = options.mergeDiv || false;
  }

  ProvinceCityAreaSelect.prototype.init = function() {
    const provinceSelElem = this.provinceSelElem,
          citySelElem = this.citySelElem,
          areaSelElem = this.areaSelElem;
    this.provinceSel = document.getElementById(provinceSelElem);
    this.citySel = document.getElementById(citySelElem);
    this.areaSel = document.getElementById(areaSelElem);

    this.isSelect = this.provinceSel.tagName === 'SELECT';

    if (!this.isSelect && this.mergeDiv) {
      this.createDivStructure(this.provinceSel, this.citySel, this.areaSel);
    }

    this.populateProvinces();
    this.bindEvents();
  };

  ProvinceCityAreaSelect.prototype.populateProvinces = function() {
    if (this.isSelect) {
      this.populateSelect(this.provinceSel, areaData);
    } else {
      this.populateDiv(this.provinceSel, areaData);
    }
  };

  ProvinceCityAreaSelect.prototype.createDivStructure = function(provinceSel, citySel, areaSel) {
    this.provinceSel.innerHTML = '';
    this.citySel.innerHTML = '';
    this.areaSel.innerHTML = '';

    this.provinceSel.classList.add('region-select');
    this.citySel.classList.add('region-select');
    this.areaSel.classList.add('region-select');

    this.provinceSel.appendChild(this.createList(areaData));
    this.citySel.appendChild(document.createElement('ul'));
    this.areaSel.appendChild(document.createElement('ul'));

    // 创建显示当前选择的地区信息的div
    const selectedDiv = document.createElement('div');
    selectedDiv.className = 'selected-text';
    this.provinceSel.parentNode.appendChild(selectedDiv);
  };

  ProvinceCityAreaSelect.prototype.createList = function(data) {
    const ul = document.createElement('ul');
    for (const code in data) {
      if (data.hasOwnProperty(code)) {
        const li = document.createElement('li');
        li.value = code;
        li.textContent = data[code].name;
        li.onclick = this.selectDiv.bind(this, li);
        ul.appendChild(li);
      }
    }
    return ul;
  };

    ProvinceCityAreaSelect.prototype.selectDiv = function(li) {
    const parentDiv = li.parentNode.parentNode;
    const selectedDiv = parentDiv.querySelector('.selected');
    if (selectedDiv) {
      selectedDiv.classList.remove('selected');
    }
    li.classList.add('selected');
    this.updateSelectedDiv(li.textContent);

    if (parentDiv.id === this.provinceSel.id) {
      this.populateCities(li.value);
    } else if (parentDiv.id === this.citySel.id) {
      this.populateAreas(li.value);
    }
  };

  ProvinceCityAreaSelect.prototype.populateCities = function(provinceCode) {
    const cities = areaData[provinceCode].children;
    if (this.isSelect) {
      this.populateSelect(this.citySel, cities);
      this.populateAreas(Object.keys(cities)[0]);
    } else {
      this.populateDiv(this.citySel, cities);
    }
  };

  ProvinceCityAreaSelect.prototype.populateAreas = function(cityCode) {
    if (!this.isSelect) return;
    const areas = areaData[this.provinceSel.value].children[cityCode].children;
    this.populateSelect(this.areaSel, areas);
  };

  ProvinceCityAreaSelect.prototype.populateSelect = function(sel, data) {
    sel.innerHTML = '';
    for (const code in data) {
      if (data.hasOwnProperty(code)) {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = data[code].name;
        sel.appendChild(option);
      }
    }
  };

  ProvinceCityAreaSelect.prototype.populateDiv = function(div, data) {
    const ul = document.createElement('ul');
    for (const code in data) {
      if (data.hasOwnProperty(code)) {
        const li = document.createElement('li');
        li.value = code;
        li.textContent = data[code].name;
        li.onclick = this.selectDiv.bind(this, li);
        ul.appendChild(li);
      }
    }
    div.appendChild(ul);
  };

  ProvinceCityAreaSelect.prototype.updateSelectedDiv = function(text) {
    if (this.mergeDiv) {
      const selectedText = this.provinceSel.parentNode.querySelector('.selected-text');
      if (selectedText) {
        selectedText.textContent = text;
      } else {
        const span = document.createElement('span');
        span.className = 'selected-text';
        span.textContent = text;
        this.provinceSel.parentNode.appendChild(span);
      }
    }
  };

  // 暴露插件给全局
  window.ProvinceCityAreaSelect = ProvinceCityAreaSelect;
})();

// 使用示例
const pcaSelect1 = new ProvinceCityAreaSelect({
      provinceSelElem: 'provinceSelect1',
      citySelElem: 'citySelect1',
      areaSelElem: 'areaSelect1',
});

const pcaSelect2 = new ProvinceCityAreaSelect({
      provinceSelElem: 'provinceSelect2',
      citySelElem: 'citySelect2',
      areaSelElem: 'areaSelect2',
      separator: ' - ',
      mergeDiv: false
});
