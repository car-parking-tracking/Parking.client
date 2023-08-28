"use strict";(self.webpackChunkparking_client=self.webpackChunkparking_client||[]).push([[709],{"./src/components/atoms/title/title.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Default=void 0;var jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),title_styles_1=__webpack_require__("./src/components/atoms/title/title.styles.tsx");exports.default={title:"Title",component:title_styles_1.Title,argTypes:{variant:{type:"string",description:"Title appearance option",options:["modal"],control:{type:"radio"}},fontSize:{description:"Font size in pixels",options:{Small:"24",Medium:"28",Large:"36"},control:{type:"select"}},fontWeight:{description:"Font weight",options:{Normal:"400",Medium:"500",SemiBold:"600",Bold:"700"},type:"select"},textColor:{description:"Text color",control:{type:"color"}}}};exports.Default=function(args){return(0,jsx_runtime_1.jsx)(title_styles_1.Title,__assign({},args,{style:{fontSize:"".concat(args.fontSize,"px"),color:args.textColor,fontWeight:args.fontWeight}}))}.bind({}),exports.Default.args={variant:"modal",children:"Регистрация"},exports.Default.parameters=__assign(__assign({},exports.Default.parameters),{docs:__assign(__assign({},null===(_a=exports.Default.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"args => <Title {...args} style={{\n  fontSize: `${args.fontSize}px`,\n  color: args.textColor,\n  fontWeight: args.fontWeight\n}} />"},null===(_c=null===(_b=exports.Default.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})})},"./src/components/atoms/title/title.styles.tsx":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Title=void 0;var templateObject_1,templateObject_2,templateObject_3,styled_components_1=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),shared=(0,styled_components_1.css)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  color: rgba(25, 28, 48, 0.9);\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  font-weight: 700;\n"],["\n  color: rgba(25, 28, 48, 0.9);\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  font-weight: 700;\n"]))),modal=(0,styled_components_1.css)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  ","\n  margin-bottom: 0.5rem;\n"],["\n  ","\n  margin-bottom: 0.5rem;\n"])),shared);exports.Title=styled_components_1.default.h1(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),(function(_a){if("modal"===_a.variant)return modal}));try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"modal"'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"number"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/title/title.styles.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"src/components/atoms/title/title.styles.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}}}]);