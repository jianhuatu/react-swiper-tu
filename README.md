# react-swiper-tu
react swiper包，很简单的组件，用于把swiper作为组件集成到react中。</br>
核心部分是由swiper完成</br>
swiper官网 ： http://idangero.us/swiper/</br>
swiper中文网站 ： http://www.swiper.com.cn/ </br>
swiper中文文档 ： http://www.swiper.com.cn/api/index.html</br>

```
import React from "react";
import ReactDom from "react-dom";
import SwiperComponent from "react-swiper-tu";

var swiperOption = {
	direction: "vertical"
}

ReactDom.render(
	(<SwiperComponent swiperOption={swiperOption}>
		<div>
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
			<div>7</div>
			<div>8</div>
			<div>9</div>
		</div>
	</SwiperComponent>),
	document.getElementById("example")
);
```

swipers默认是横向移动，这里默认是竖向移动,默认修改了两个配置属性
{
direction : "vertical",
freeMode : true
}

在props中可以配置所有的配置属性，props名称为swiperOption。
配置api参见swiperapi http://www.swiper.com.cn/api/index.html</br>

