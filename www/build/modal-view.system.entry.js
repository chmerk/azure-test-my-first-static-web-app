var __awaiter=this&&this.__awaiter||function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function s(t){try{l(n.next(t))}catch(e){r(e)}}function a(t){try{l(n["throw"](t))}catch(e){r(e)}}function l(t){t.done?i(t.value):o(t.value).then(s,a)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,o,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return l([t,e])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(r=s[0]&2?o["return"]:s[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;if(o=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;o=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(s[0]===6&&i.label<r[1]){i.label=r[1];r=s;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(s);break}if(r[2])i.ops.pop();i.trys.pop();continue}s=e.call(t,i)}catch(a){s=[6,a];o=0}finally{n=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(t,e){for(var i=0,n=e.length,o=t.length;i<n;i++,o++)t[o]=e[i];return t};System.register(["./index-e78d0dfe.system.js","./view-state-19a56002.system.js"],(function(t){"use strict";var e,i,n,o,r,s,a,l,c,u;return{setters:[function(t){e=t.r;i=t.f;n=t.h;o=t.e;r=t.g},function(t){s=t.V;a=t.L;l=t.S;c=t.r;u=t.C}],execute:function(){var p='.a-box{max-width:44rem}h3{margin-top:1rem;margin-bottom:0}.second-p{margin-top:2rem}.checkboxes{margin-top:2.25rem;margin-bottom:1rem}bbg-button>button{width:100%;margin-left:0 !important}#save-modal-dialog>button{margin-bottom:1rem}.read-more{margin-top:0.75rem;margin-left:32.5px}.smallprint-links{margin-bottom:1.5rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row}.smallprint-links span:after{content:"|";margin-right:1rem;margin-left:1rem}.smallprint-links span:last-child:after{content:"";margin:0;padding-top:0.1rem}@media (max-width: 48rem){.smallprint-links{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.smallprint-links span{padding:0.75rem 0}.smallprint-links span:after{display:none}}';var h=t("modal_view",function(){function t(t){e(this,t);this.modalShowEvent=i(this,"modalShowEvent",7);this.modalHideEvent=i(this,"modalHideEvent",7);this.saveAcceptAllEvent=i(this,"saveAcceptAllEvent",7);this.saveCurrentSelectionEvent=i(this,"saveCurrentSelectionEvent",7);this.checkboxToggleModalEvent=i(this,"checkboxToggleModalEvent",7);this.modalViewStateChangedEvent=i(this,"modalViewStateChangedEvent",7);this.changeToPrivacySettingsLinkEditViewEvent=i(this,"changeToPrivacySettingsLinkEditViewEvent",7);this.uiTextSmallprint=[];this.uiTextSmallprintLinks=[];this.uiCheckboxList=[];this.viewState=s.InitialView;this.disabledComfort=false;this.disabledMarketing=false;this.show=false;this.handleCheckbox=this.handleCheckbox.bind(this);this.changeToEditViewFromPrivacySettingsLink=this.changeToEditViewFromPrivacySettingsLink.bind(this)}t.prototype.modalVisibility=function(t){if(t){this.modalShowEvent.emit()}else{this.modalHideEvent.emit()}};t.prototype.changedModalViewState=function(t){this.modalViewStateChangedEvent.emit(t)};t.prototype.updateUi=function(t,e,i,n,o,r,s,l,c){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(u){switch(u.label){case 0:if(s){this.viewState=s}if(l!==undefined){this.disabledComfort=l}if(c!==undefined){this.disabledMarketing=c}return[4,this.applyAllLinks(i,n,o,r)];case 1:u.sent();if(!e)return[3,3];return[4,this.applyLocale(e)];case 2:u.sent();u.label=3;case 3:return[4,this.applyConsents(t)];case 4:u.sent();a.log.debug("Updated modal user interface");return[2]}}))}))};t.prototype.componentDidLoad=function(){this.modalShowEvent.emit()};t.prototype.render=function(){return n(o,null,n("bbg-dialog",{type:"modal",show:this.show},n("span",{slot:"content"},n("h3",null,this.uiTextTitle),n("slot",null),this.createDescription(),this.createCheckboxList()),this.createSmallprintText(),n("span",{style:{width:"100%"},slot:"actions"},this.createSaveAllButton(),this.createSaveButton(),this.createFooterLinks())))};t.prototype.createSmallprintText=function(){return this.viewState===s.InitialView?n("span",{slot:"code"},this.uiTextSmallprint):""};t.prototype.createDescription=function(){var t="";var e="";if(this.viewState===s.EditView){t=n("div",null,n("strong",null,this.uiTextDescription1Title),n("br",null));e=n("div",null,n("strong",null,this.uiTextDescription2Title),n("br",null))}return n("div",null,n("p",null,t,n("div",{class:"desc1"},this.uiTextDescription1Text)),n("p",{class:"second-p"},e,n("div",{class:"desc2"},this.uiTextDescription2Text)))};t.prototype.createCheckboxList=function(){var t=this;var e=this.viewState===s.EditView;return this.uiCheckboxList.map((function(i){return n("p",{class:"checkboxes"},n("bbg-checkbox",{fid:i.checkboxId},n("input",{style:{display:"none"},type:"checkbox",checked:i.userConsents,onClick:t.handleCheckbox}),n("label",null,i.label)),n("div",{class:"read-more"},e?i.name===l.Comfort?t.uiTextDescriptionReadMoreComfort:"":"",e?i.name===l.Marketing?t.uiTextDescriptionReadMoreMarketing:"":"",e?n("span",null," "):"",n("bbg-link",{type:t.viewState===s.InitialView?"primary":"simple",href:i.readMoreLink},i.readMoreLabel)))}))};t.prototype.createSaveAllButton=function(){var t=this;return this.viewState===s.InitialView?n("p",{style:{"margin-top":"0"}},n("bbg-button",{id:"save-all-modal-dialog",type:"primary",label:this.uiTextButtonConfirm,onClick:function(){return t.saveAcceptAllAndCloseModal()}})):""};t.prototype.createSaveButton=function(){var t=this;var e="tertiary";if(this.viewState===s.EditView){e="primary"}return n("p",null,n("bbg-button",{id:"save-modal-dialog",type:e,label:this.uiTextButtonCancel,onClick:function(){return t.saveCurrentSelectionAndCloseModal()}}))};t.prototype.createFooterLinks=function(){return n("div",{class:"smallprint-links"},this.uiTextSmallprintLinks.map((function(t){return n("span",null,n("bbg-link",{type:"simple",href:t.url},t.text))})))};t.prototype.applyLocale=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){a.log.debug("Apply locale");switch(this.viewState){case s.InitialView:this.applyInitialViewTexts(t);break;case s.EditView:this.applyEditViewTexts(t);break}this.uiTextSmallprint=c(t.smallprint.saveDescription+" "+t.smallprint.withdrawDescription,"SETTINGS_LINK",t.smallprint.settings.term,this.changeToEditViewFromPrivacySettingsLink);this.uiTextButtonCancel=t.general.save;this.smallprintValidation(t);a.log.debug("Applied language to user interface");return[2]}))}))};t.prototype.smallprintValidation=function(t){this.uiTextSmallprintLinks=[];if(this.uiLinkUrlPolicy){this.uiTextSmallprintLinks.push({text:t.smallprint.policy.term,url:this.uiLinkUrlPolicy})}if(this.uiLinkUrlImprint){this.uiTextSmallprintLinks.push({text:t.smallprint.imprint.term,url:this.uiLinkUrlImprint})}};t.prototype.applyInitialViewTexts=function(t){a.log.debug("Apply initial view texts");this.uiTextTitle=t.title.initialView;if(!this.disabledComfort&&this.disabledMarketing){this.uiTextLinkReadMoreComfort=t.comfortCookieDescription.link.label;this.uiTextLinkLabelReadMoreComfort=t.comfortCookieDescription.button.label;this.uiTextButtonConfirm=t.comfortCookieDescription.button.label;this.uiTextDescription1Text=t.description.cookies.onlycomfort;this.uiTextDescription2Text=t.description.cookies.onlycomfort2}else if(this.disabledComfort&&!this.disabledMarketing){this.uiTextLinkReadMoreMarketing=t.marketingCookieDescription.link.label;this.uiTextLinkLabelReadMoreMarketing=t.marketingCookieDescription.button.label;this.uiTextButtonConfirm=t.marketingCookieDescription.button.label;this.uiTextDescription1Text=t.description.cookies.onlymarketing;this.uiTextDescription2Text=t.description.cookies.onlymarketing2}else{this.uiTextLinkReadMoreComfort=t.comfortCookieDescription.link.label;this.uiTextLinkLabelReadMoreComfort=t.comfortCookieDescription.button.label;this.uiTextLinkReadMoreMarketing=t.marketingCookieDescription.link.label;this.uiTextLinkLabelReadMoreMarketing=t.marketingCookieDescription.button.label;this.uiTextButtonConfirm=t.general.acceptAllButtonLabel;this.uiTextDescription1Text=t.description.cookies.all;this.uiTextDescription2Text=t.description.cookies.all2}};t.prototype.applyEditViewTexts=function(t){a.log.debug("Apply edit view texts");this.uiTextTitle=t.title.editView;this.uiTextDescription1Title=t.description.deactivate.title;this.uiTextDescription1Text=t.description.deactivate.text;if(!this.disabledComfort&&this.disabledMarketing){this.uiTextDescription2Title=t.description.settings.titleonlycomfort;this.uiTextDescription2Text=t.description.settings.textonlycomfort}else if(this.disabledComfort&&!this.disabledMarketing){this.uiTextDescription2Title=t.description.settings.titleonlymarketing;this.uiTextDescription2Text=t.description.settings.textonlymarketing}else{this.uiTextDescription2Title=t.description.settings.titleall;this.uiTextDescription2Text=t.description.settings.textall}this.uiTextLinkLabelReadMoreComfort=t.comfortCookieDescription.button.label;this.uiTextLinkLabelReadMoreMarketing=t.marketingCookieDescription.button.label;this.uiTextDescriptionReadMoreComfort=t.comfortCookieDescription.text;this.uiTextDescriptionReadMoreMarketing=t.marketingCookieDescription.text;this.uiTextLinkReadMoreComfort=t.comfortCookieDescription.link.label;this.uiTextLinkReadMoreMarketing=t.marketingCookieDescription.link.label};t.prototype.applyAllLinks=function(t,e,i,n){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(o){if(t){this.uiLinkReadMoreComfort=t}if(e){this.uiLinkReadMoreMarketing=e}this.uiLinkUrlPolicy=i?i:undefined;this.uiLinkUrlImprint=n?n:undefined;return[2]}))}))};t.prototype.applyConsents=function(t){return __awaiter(this,void 0,void 0,(function(){var e,i,n,o,r,s,a;return __generator(this,(function(c){e=[];i=[];for(n=0,o=t;n<o.length;n++){r=o[n],s=r.name,a=r.userConsents;if(s===l.Comfort){e.push.apply(e,u.consentUiElementFactory([{indexId:s,name:s,label:this.uiTextLinkLabelReadMoreComfort,linkAddress:this.uiLinkReadMoreComfort,linkLabel:this.uiTextLinkReadMoreComfort,userConsents:a}]))}else if(s===l.Marketing){e.push.apply(e,u.consentUiElementFactory([{indexId:s,name:s,label:this.uiTextLinkLabelReadMoreMarketing,linkAddress:this.uiLinkReadMoreMarketing,linkLabel:this.uiTextLinkReadMoreMarketing,userConsents:a}]))}else{i.push.apply(i,u.consentUiElementFactory([{indexId:s,name:s,label:s+" (To Do)",linkAddress:"ToDo",linkLabel:"Read more link (To Do)",userConsents:a}]))}}this.uiCheckboxList=__spreadArray(__spreadArray([],e),i);return[2]}))}))};t.prototype.saveAcceptAllAndCloseModal=function(){var t=this;var e=this.hostElement.querySelectorAll("p.checkboxes > bbg-checkbox > div > input");e.forEach((function(e){e.checked=true;var i=e.getAttribute("id");var n={name:i,userConsents:e.checked};t.checkboxToggleModalEvent.emit(n)}));setTimeout((function(){t.saveAcceptAllEvent.emit()}),500)};t.prototype.changeToEditViewFromPrivacySettingsLink=function(){this.changeToPrivacySettingsLinkEditViewEvent.emit()};t.prototype.saveCurrentSelectionAndCloseModal=function(){this.saveCurrentSelectionEvent.emit()};t.prototype.handleCheckbox=function(t){var e=t.target;var i=e.getAttribute("id");var n=e.checked;var o={name:i,userConsents:n};this.checkboxToggleModalEvent.emit(o)};Object.defineProperty(t.prototype,"hostElement",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{show:["modalVisibility"],viewState:["changedModalViewState"]}},enumerable:false,configurable:true});return t}());h.style=p}}}));