# pgdemo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


* **app组件说明**
### 城市下拉框
### citydropdown.vue

### 使用方法
* **参数**
    * :bgurl  为下拉框的到三角图片地址
    * v-domstyle color为显示的城市的字体颜色, width,height为到三角的尺寸
    * switchcity 为切换城市后的广播出来的监听事件
      <citydropdown  :bgurl="cityxialabg" v-domstyle="{color: '#333', width: '.11rem', height: '.06rem'}" @switchcity="switchcity"></citydropdown>


### input的搜索框
### inputSearch.vue

### 使用方法
* **参数**
    * 注意点使用此组件的时候需要用一个容器包住且需要相对定位
    * :styleObjet 为inputSearch框的一些样式配置
    * styleObjet: { // 搜索组件的一些配置
        positionbottom: '.1rem', // 为距离父组件的bottom定位
        placeholder: '请输入城区/商圈/胡同', // input框的默认文字
        bgse: '#fff', // 搜索按钮放大镜的背景颜色
        dorpdownDome: false //最左边是不是带下拉切换 true带下拉 false不带 注意现在下拉的值是写死的
      }
    * :searchinputbg  // 搜索按钮放大镜的图片地址
    <div style="position: relative">
      <inputSearch :styleObjet=styleObjet :searchinputbg="searchinputbg"></inputSearch>
    </div>

### 最右侧的弹窗栏目切换
### navigationPops.vue

### 使用方法
* **参数**
    * shownavigationpops //控制弹窗显示还是隐藏 true显示 false 隐藏
    * :pithOne 控制弹窗里面是那个栏目
    * :theCustom 控制显示弹窗按钮的样式是自定义还是采用默认的样式 true 代表自定义 false 代表采用默认 组件默认值是false
    * :menuSrc: 当启动默认弹窗的时候弹窗的图片地址
    * :searchinputbg 搜索按钮放大镜的图片地址
    * 自定义按钮样式
     <navigationpops @closePops="shownavigationpops=false"
        @shownavigationpopsshow="shownavigationpops=true"
        v-model = "pithOne"
        :theCustom = true
        :shownavigationpops="shownavigationpops" :menuSrc="navigationbg">
        <button>按钮</button>
        </navigationpops>
    * 采用默认按钮样式
     <navigationpops @closePops="shownavigationpops=false"
        @shownavigationpopsshow="shownavigationpops=true"
        v-model = "pithOne"
        :shownavigationpops="shownavigationpops" :menuSrc="navigationbg">
        </navigationpops>
