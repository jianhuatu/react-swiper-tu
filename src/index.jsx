import React,{Component} from "react";
import swiper from "swiper-tu";

class SwiperComponent extends Component{
	static defaultProps = {
		swiperOption : {

		}
	}
	componentDidMount (){
		this.swiper = new swiper(this.refs.swiper,this.props.swiperOption);
	}
	componentWillUnmount (){
	    if(this.swiper)this.swiper.destroy();
	    this.swiper = void 0;
	}
	createScrollbar (){
		return  this.props.swiperOption.scrollbar ? <div className="swiper-scrollbar"></div> : [];
	}
	createPagination (){
		return this.props.swiperOption.pagination==".swiper-pagination" ? <div className="swiper-pagination"></div> : [];
	}
	createPrevButton (){
		return this.props.swiperOption.prevButton==".swiper-button-prev" ? <div className="swiper-button-prev"></div> : [];
	}
	createNextButton (){
		return this.props.swiperOption.nextButton==".swiper-button-next" ? <div className="swiper-button-next"></div> : [];
	}
	createSwiperSlider (){
		let slider = new Array();
		var children = this.props.children.length ? this.props.children : [this.props.children] ;
		for(var i=0,ilen=children.length;i<ilen;i++){
			slider.push(<div key={i} className={this.props.swiperOption.slideClass ? this.props.swiperOption.slideClass : 'swiper-slide'}>{children[i]}</div>);
		}
		return slider;
	}
	render(){
		const scrollbar = this.createScrollbar();
		const pagination = this.createPagination();
		const swiperSlide = this.createSwiperSlider();
		const prevButton = this.createPrevButton();
		const nextButton = this.createNextButton();
		return (
			<div ref="swiper" className="swiper-container">
				<div className={this.props.swiperOption.wrapperClass ? this.props.swiperOption.wrapperClass : 'swiper-wrapper'}>
					{swiperSlide}
				</div>
				{scrollbar}
				{pagination}
				{prevButton}
				{nextButton}
			</div>
		)
	}
}


module.exports = SwiperComponent;