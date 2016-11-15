import React,{Component} from "react";
import swiper from "swiper-tu";

class SwiperComponent extends Component{
	static swiperOption = {
		initialSlide : 0, //index
		direction : "vertical", //horizontal
		speed : 300, //number
		autoplay : 0, //number
		autoplayDisableOnInteraction : true, //boolean
		autoplayStopOnLast : false,//boolean
		grabCursor : false, //boolean
		parallax : false, //boolean
		hashnav : false, //boolean
		hashnavWatchState : false, //boolean
		history : false, //string
		replaceState : false, //boolean
		setWrapperSize : false, //boolean
		virtualTranslate : false,//boolean
		a11y : false, //boolean
		width : void 0, //number
		height : void 0, //number
		roundLengths : true,//boolean
		breakpoints : {},//Object
		autoHeight : false,//boolean
		swiper : false,//boolean
		watchSlidesProgress : false,//boolean
		watchSlidesVisibility : false,//boolean

		freeMode : true,//boolean
		freeModeMomentum : false,//boolean
		freeModeMomentumRatio : 1,//number
		freeModeMomentumVelocityRatio : 1,//number
		freeModeMomentumBounce : true,//boolean
		freeModeMomentumBounceRatio : 1,//number
		freeModeSticky: false,//boolean

		centeredSlides: false,//boolean
		slidesPerView: "auto",//number
		slidesPerGroup: 1,//number
		spaceBetween :0, //number
		slidesPerColumn: 1,//number
		slidesPerColumnFill : 'column',//row
		slidesOffsetBefore : 0,//number
		slidesOffsetAfter : 0,//number

		effect:"slide",//fade cube coverflow flip
		fade : false,//boolean
		cube : {
			slideShadows : true,//boolean
			shadow : true,//boolean
			shadowOffset : 20,//number
			shadowScale : 0.94//number
		},
		coverflow : {
			rotate :  50,//number
			stretch : 0,//number
			depth : 100,//number
			modifier : 1,//number
			slideShadows : true//boolean
		},
		flip : {
			slideShadows : true,//boolean
			limitRotation : true//
		},

		preventClicks: true,
		preventClicksPropagation : true,
		slideToClickedSlide : false,

		touchRatio : 1,
		simulateTouch : true,
		onlyExternal : false,
		followFinger : true,
		shortSwipes : true,
		longSwipesRatio : 0.5,
		threshold : false,
		touchAngle : 45,
		longSwipes : true,
		longSwipesMs : 300,
		touchMoveStopPropagation : true,
		resistance : true,
		resistanceRatio :0.85,
		iOSEdgeSwipeDetection : false,
		iOSEdgeSwipeThreshold : 20,
		passiveListeners : true,
		touchReleaseOnEdges : false,


		noSwiping : true,
		noSwipingClass : "swiper-no-swiping",
		allowSwipeToNext : true,
		allowSwipeToPrev : true,
		swipeHandler : null,

		pagination : null,
		paginationType : "bullets",//fraction progress custom
		paginationClickable : false,
		paginationHide : false,
		paginationElement : "span",
		paginationBulletRender :null,//function
		paginationFractionRender : null,//function
		paginationProgressRender : null,//function
		paginationCustomRender : null,//function
		uniqueNavElements : true,

		prevButton : null,
		nextButton : null,

		scrollbar : null,
		scrollbarHide : true,
		scrollbarDraggable : false,
		scrollbarSnapOnRelease : false,

		keyboardControl : false,
		mousewheelControl : false,
		mousewheelForceToAxis : false,
		mousewheelReleaseOnEdges : false,
		mousewheelInvert : false,
		mousewheelSensitivity : 1,
		mousewheelEventsTarged : 'container',

		preloadImages : true,
		updateOnImagesReady : true,
		lazyLoading : false,
		lazyLoadingInPrevNext : false,
		lazyLoadingInPrevNextAmount : 1,
		lazyLoadingOnTransitionStart : false,

		loop : false,
		loopAdditionalSlides : 0,
		loopedSlides : 1,

		zoom : false,
		zoomMax : 3,
		zoomMin : 1,
		zoomToggle : true,

		control : null,
		controlInverse : false,
		controlBy : 'slide',//'container'
		normalizeSlideIndex : true,

		observer : false,
		observeParents : false,

		wrapperClass      : "swiper-wrapper",
		slideClass        : "swiper-slide",
		slideActiveClass  : "swiper-slide-active",
		slideVisibleClass : "swiper-slide-visible",
		bulletClass       : "swiper-pagination-bullet",
		bulletActiveClass : "swiper-pagination-bullet-active",
		slideDuplicateClass : "swiper-slide-duplicate",
		slideNextClass : "swiper-slide-next",
		slidePrevClass : "swiper-slide-prev",
		paginationHiddenClass : "swiper-pagination-hidden",
		buttonDisabledClass : "swiper-button-disabled",
		slideDuplicateActiveClass : "swiper-slide-duplicate-active",
		slideDuplicateNextClass : "swiper-slide-duplicate-next",
		slideDuplicatePrevClass : "swiper-slide-duplicate-prev",
		containerModifierClass: "swiper-container-",
		lazyLoadingClass: "swiper-lazy",
		notificationClass: "swiper-notification",
		paginationClickableClass: "swiper-pagination-clickable",
		paginationModifierClass: "swiper-pagination-",
		lazyStatusLoadingClass: "swiper-lazy-loading",
		lazyStatusLoadedClass: "swiper-lazy-loaded",
		lazyPreloaderClass: "swiper-lazy-preloader",
		preloaderClass: "preloader",
		zoomContainerClass: "swiper-zoom-container",
		paginationCurrentClass: "swiper-pagination-current",
		paginationTotalClass: "swiper-pagination-total",
		paginationProgressbarClass: "swiper-pagination-progressbar",

		onInit : void 0,
		onTouchStart : void 0,
		onTouchMove : void 0,
		onTouchEnd : void 0,
		onSlideChangeStart : void 0,
		onSlideChangeEnd : void 0,
		onImagesReady : void 0,
		runCallbacksOnInit : true,
		onTransitionStart : void 0,
		onTransitionEnd : void 0,
		onTouchMoveOpposite : void 0,
		onSliderMove : void 0,
		onClick : void 0,
		onTap : void 0,
		onDoubleTap : void 0,
		onProgress : void 0,
		onReachBeginning : void 0,
		onReachEnd : void 0,
		onDestroy : void 0,
		onAutoplay : void 0,
		onAutoplayStart : void 0,
		onAutoplayStop : void 0,
		onLazyImageLoad : void 0,
		onLazyImageReady : void 0,
		onSetTransition : void 0,
		onSetTranslate : void 0,
		onSlideNextStart : void 0,
		onSlideNextEnd : void 0,
		onSlidePrevStart : void 0,
		onSlidePrevEnd : void 0,
		onPaginationRendered : void 0,
		onScroll : void 0
	}
	static defaultProps = {
		swiperOption : {}
	}
	componentDidMount (){
		var option = Object.assign(SwiperComponent.swiperOption,this.props.swiperOption);
		this.swiper = new swiper(this.refs.swiper,this.props.swiperOption);
	}
	componentWillUnmount (){
	    this.swiper.kill();
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
			slider.push(<div key={i} className="swiper-slide">{children[i]}</div>);
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
				<div className="swiper-wrapper">
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