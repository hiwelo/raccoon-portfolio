(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{259:function(e,t,n){"use strict";n.r(t);n(261);var a=n(0),i=n.n(a),r=n(262),s=n.n(r),o=n(272),l=n.n(o),d=n(29);function c(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  display: flex;\n  margin: 0 auto;\n  padding: 8rem 0 16rem;\n  width: 85%;\n  background: $color-gray-50;\n  z-index: -3;\n\n  @media (min-width: 1024px) {\n    padding-left: 160px;\n    padding-right: 160px;\n    width: 1024px;\n  }\n\n  @media (min-width: 1280px) {\n    padding-bottom: 0;\n    width: 1280px;\n  }\n"]);return c=function(){return e},e}var u=d.b.div(c());function f(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  margin: 0;\n  width: 600px;\n  background-color: #333333;\n  color: #ffffff;\n  font-size: 2.4rem;\n  font-weight: 200;\n  line-height: 1.3;\n  z-index: 1;\n\n  @media (min-width: 640px) {\n    font-size: 3.2rem;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 4rem;\n  }\n\n  @media (min-width: 1280px) {\n    border-end-end-radius: 55px;\n  }\n\n  & > strong {\n    font-weight: 500;\n  }\n"]);return f=function(){return e},e}var g=d.b.h1(f());function p(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  margin-top: -16rem;\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);\n\n  & [class=' gatsby-image-wrapper'],\n  & img {\n    display: block !important;\n    max-width: 100%;\n\n    @media (min-width: 1280px) {\n      max-width: 130%;\n    }\n\n    @supports not (clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%)) {\n      & {\n        width: 100%;\n      }\n    }\n  }\n\n  & img {\n    margin-bottom: 0;\n  }\n\n  @supports (clip-path: polygon(0 50%, 100% 0, 100% 100%)) {\n    @media (min-width: 1280px) {\n      & {\n        margin-bottom: -24rem;\n        margin-left: 50%;\n        margin-top: 0;\n        width: 50%;\n        clip-path: polygon(0 50%, 100% 0, 100% 100%);\n        overflow: hidden;\n      }\n    }\n  }\n"]);return p=function(){return e},e}var m=d.b.div(p());function h(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  position: relative;\n  color: #333333;\n\n  &::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    display: block;\n    height: 105%;\n    content: '';\n    background: #333333;\n    transition: clip-path 1s ease-in-out, height 1s ease-in-out;\n    z-index: 1;\n\n    @supports (clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%)) {\n      clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);\n    }\n\n    @supports (clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%)) {\n      @media (min-width: 1280px) {\n        height: 720px;\n        clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);\n      }\n    }\n  }\n"]);return h=function(){return e},e}var b=d.b.section(h());function y(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  margin: 0;\n  width: 600px;\n  background-color: #333333;\n  color: #ffffff;\n  font-size: 2.4rem;\n  font-weight: 200;\n  line-height: 1.3;\n  z-index: 1;\n\n  @media (min-width: 640px) {\n    font-size: 3.2rem;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 4rem;\n  }\n\n  & > strong {\n    font-weight: 500;\n  }\n"]);return y=function(){return e},e}var w=d.b.span(y());function v(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}([""]);return v=function(){return e},e}var E=d.b.span(v());function S(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  display: block;\n  margin-bottom: 1.6rem;\n  color: #cccccc;\n  font-size: 2.4rem;\n  font-weight: 200;\n\n  @media (min-width: 640px) {\n    font-size: 3.2rem;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 4.8rem;\n  }\n\n  & > span:not(:last-child) {\n    padding-right: 0.25em;\n  }\n"]);return S=function(){return e},e}var I=d.b.span(S()),x=function(e){var t=e.salutations;return i.a.createElement(I,null,t&&t.map((function(e,t){return i.a.createElement(E,{lang:e.lang,key:t},e.content)})))},k=function(e){var t=e.salutations,n=e.heroImage,a=e.componentId,r=void 0===a?l()():a;return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{id:r},i.a.createElement(u,null,i.a.createElement(g,null,i.a.createElement(x,{salutations:t}),i.a.createElement(w,null,"I am ",i.a.createElement("strong",null,"Damien"),", digital ",i.a.createElement("strong",null,"designer")," specialised in"," ",i.a.createElement("strong",null,"accessibility")," and ",i.a.createElement("strong",null,"design systems"),".")))),n&&i.a.createElement(m,null,i.a.createElement(s.a,{fixed:n,alt:"Face portrait of Damien Senger, looking directly at the camera. The person is smiling while wearing an overall outfit. They also have blue hair and several piercings."})))},L=n(250),z=n(249),O=n(129),R=n.n(O),V=n(254),C=n.n(V),N=function(e){var t=e.componentId;return i.a.createElement("section",{className:C.a.introduction,"aria-label":"Who am I in a nutshell?",id:t},i.a.createElement("div",{className:C.a.introduction__container},i.a.createElement("p",null,i.a.createElement("strong",null,"I'm a designer who codes")," living and working in Rotterdam"," ",i.a.createElement("span",{"aria-label":"The Netherlands"},"🇳🇱 "),". Originally from Strasbourg"," ",i.a.createElement("span",{"aria-label":"France"},"🇫🇷"),", I worked with clients on both side of the Atlantic Ocean."),i.a.createElement("p",null,"I'm ",i.a.createElement("strong",null,"Design systems and Accessibility lead")," for"," ",i.a.createElement("a",{href:"https://castoredc.com",target:"_blank",rel:"noopener noreferrer"},"Castor EDC")," ","where I collaborate with Product and Engineering teams to bring more ",i.a.createElement("strong",null,"consistency"),","," ",i.a.createElement("strong",null,"usability")," and ",i.a.createElement("strong",null,"accessibility")," in our products."),i.a.createElement("p",null,"My background includes ",i.a.createElement("strong",null,"experiences as UX and UI designer")," and"," ",i.a.createElement("strong",null,"several years as a web developer"),". This is helping me to be a ",i.a.createElement("strong",null,"strong bridge")," ","between ideation and implementation and to mentor engineers to develop inclusivity through their code.")))};N.defaultProps={componentId:R()()};var T=N,_=(n(177),n(75),n(255)),P=n.n(_),j=function(e){var t=e.content,n=e.componentId;return i.a.createElement("section",{className:P.a.specialties,id:n},i.a.createElement("h2",{className:P.a.specialties__title},"How may I help you?"),i.a.createElement("ul",{className:P.a.specialties__list},t.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("h3",{className:P.a.specialties__subtitle},e.title),i.a.createElement("p",{className:P.a.specialties__abstract},e.content),!1)}))))};j.defaultProps={content:null,componentId:R()()};var M=j;n.d(t,"IndexPageQuery",(function(){return q}));var W=[{title:"Building interfaces with inclusivity­ in mind",content:"An accessible interface starts with an accessible design. We can work together to make your projects more inclusive.",link:{label:"My portfolio",target:"/projects"}},{title:"Bringing accessibility in your work & workflow",content:"Accessibility is never a one-time fix. Let me train your product and engineering team to put accessibility at the core of their work.",link:{label:"My workshops",target:"/workshops"}},{title:"Raising awareness on accessibility­ & inclusivity",content:"I enjoy sharing my knowledge and learning from my peers: I spoke in 15+ events and I am a University guest teacher.",link:{label:"My talks",target:"/talks"}}],q=(t.default=function(e){return i.a.createElement(L.a,{mainClass:"home"},i.a.createElement(z.a,{title:"Web accessibility & Inclusive Design",keywords:["design studio","accessibility","inclusive design","damien senger"]}),i.a.createElement(k,{salutations:e.data.site.siteMetadata.heroSalutations,heroImage:e.data.heroImage.childImageSharp.fixed}),i.a.createElement(T,null),i.a.createElement(M,{content:W}))},"2893913583")},261:function(e,t,n){"use strict";n(172)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},262:function(e,t,n){"use strict";n(10),n(8),n(3),n(76),n(173),n(261);var a=n(31);t.__esModule=!0,t.default=void 0;var i,r=a(n(97)),s=a(n(96)),o=a(n(174)),l=a(n(175)),d=a(n(0)),c=a(n(1)),u=function(e){var t=(0,l.default)({},e),n=t.resolutions,a=t.sizes,i=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,n=e.fixed;return(t&&t[0]||n&&n[0]).src},g=Object.create({}),p=function(e){var t=u(e),n=f(t);return g[n]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,i=e.media,r=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:r}),d.default.createElement("source",{media:i,srcSet:n,sizes:r}))}))}function v(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function E(e){return e.map((function(e){var t=e.src,n=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:n,srcSet:a})}))}function S(e){return e.map((function(e){var t=e.src,n=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:n,srcSet:a})}))}function I(e,t){var n=e.srcSet,a=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:n)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var x=function(e,t){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return n&&(n.observe(e),y.set(e,t)),function(){n.unobserve(e),y.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+s+o+n+a+t+r+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,r=d.default.createElement(z,(0,l.default)({src:t},i));return n.length>1?d.default.createElement("picture",null,a(n),r):r},z=d.default.forwardRef((function(e,t){var n=e.sizes,a=e.srcSet,i=e.src,r=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:n,srcSet:a,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=h&&p(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!m&&b&&!n.isCritical&&!n.seenBefore;var a=n.isCritical||h&&(m||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=d.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,r.default)(n)),n.handleRef=n.handleRef.bind((0,r.default)(n)),n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=f(t),g[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,a=e.className,i=e.style,r=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,I=e.loading,x=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:O?1:0,transition:R?"opacity "+b+"ms":"none"},o),C="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&N,{},o,{},f),_={title:t,alt:this.state.isVisible?"":n,style:T,className:g};if(p){var P=p,j=P[0];return d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),C&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&N)}),j.base64&&d.default.createElement(L,{src:j.base64,spreadProps:_,imageVariants:P,generateSources:S}),j.tracedSVG&&d.default.createElement(L,{src:j.tracedSVG,spreadProps:_,imageVariants:P,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,w(P),d.default.createElement(z,{alt:n,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:I,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:n,title:t,loading:I},j,{imageVariants:P}))}}))}if(m){var M=m,W=M[0],q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},r);return"inherit"===r.display&&delete q.display,d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},C&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:C,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},R&&N)}),W.base64&&d.default.createElement(L,{src:W.base64,spreadProps:_,imageVariants:M,generateSources:S}),W.tracedSVG&&d.default.createElement(L,{src:W.tracedSVG,spreadProps:_,imageVariants:M,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,w(M),d.default.createElement(z,{alt:n,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:I,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:n,title:t,loading:I},W,{imageVariants:M}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});O.propTypes={resolutions:R,sizes:V,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=O;t.default=C},272:function(e,t,n){var a=n(178),i=n(179);e.exports=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||a)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var o=0;o<16;++o)t[r+o]=s[o];return t||i(s)}}}]);
//# sourceMappingURL=component---src-pages-index-js-bb952685c4588a855584.js.map