import React from "../../node_modules/react";
import ReactDom from "../../node_modules/react-dom";
import SwiperComponent from "../../index";

var swiperOption = {
	direction : "vertical",
	freeMode : true,
	slidesPerView: "auto"
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
			<div>5</div>
			<div>6</div>
			<div>7</div>
			<div>8</div>
			<div>9</div>
			<div>5</div>
			<div>6</div>
			<div>7</div>
			<div>8</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
			<div>9</div>
		</div>
	</SwiperComponent>),
	document.getElementById("example")
);