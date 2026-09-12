import{d as Ee,e as qe,f as yn,h as xn,j as Cn,k as wn,l as Tn}from"./chunk-F6XFB6CU.js";import{A as Qe,a as tn,b as nn,c as an,f as on,g as rn,i as ln,j as sn,k as dn,l as nt,m as cn,n as mn,o as pn,p as un,s as bn,t as hn,u as _n,w as gn,x as fn,y as $e,z as vn}from"./chunk-JQH7CCPS.js";import{c as Me,d as re,e as $t,f as Ke,g as Qt,i as Ge,k as qt,l as tt,o as Yt,p as Ut,s as Zt,u as Xt,v as Jt,w as en,x as J}from"./chunk-VJYNZ4BJ.js";import"./chunk-5KXIPVCR.js";import{a as Bt,d as Ft,e as Vt,f as Pe,k as Nt,l as je,m as Wt,n as Ht,p as zt,q as jt,w as oe,x as Kt,y as Gt,z as fe}from"./chunk-DHFO47BQ.js";import{a as kn,b as Sn,d as In}from"./chunk-M3SPQ74I.js";import"./chunk-5EJZPZUL.js";import{$ as Pt,$a as U,A as Tt,Aa as ue,B as $,Ba as Fe,C as Q,D as Te,Da as Et,E as kt,Ea as C,Fa as g,Fb as X,G as St,Ga as f,Hb as L,I as ne,Ia as O,Ib as Ne,J as N,Ja as A,Ka as D,L as u,La as v,M as It,Ma as l,N as y,Na as r,O as x,Oa as h,P as Le,Pa as Ze,Q as de,Qa as Xe,Rb as Dt,T as R,Ta as V,Tb as We,U as le,Ua as Ve,Ub as He,V as Ue,Va as w,Xa as p,Xb as Lt,Ya as ae,Yb as Rt,Za as Y,_a as be,a as H,aa as Re,ab as S,b as xe,ba as ke,bb as I,c as G,da as z,ea as Mt,f as ft,fb as he,gb as Ot,h as K,hb as B,ib as _e,j as De,ja as ce,jb as s,ka as o,kb as _,la as me,lb as b,m as vt,mb as Z,mc as ze,na as Se,o as yt,oa as T,p as te,pa as k,pb as P,q as Ce,qa as pe,qb as M,ra as Be,rb as E,s as xt,sb as ge,t as we,tb as j,u as Ct,ua as F,ub as At,va as ie,w as wt,wa as q,wb as Je,xb as et,za as Ie}from"./chunk-G3ROJ6QL.js";import{a as gt,e as Ye}from"./chunk-WFIHWVQO.js";var Pn=(()=>{class i{_animationsDisabled=J();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(n){return new(n||i)};static \u0275cmp=F({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,t){n&2&&B("mat-pseudo-checkbox-indeterminate",t.state==="indeterminate")("mat-pseudo-checkbox-checked",t.state==="checked")("mat-pseudo-checkbox-disabled",t.disabled)("mat-pseudo-checkbox-minimal",t.appearance==="minimal")("mat-pseudo-checkbox-full",t.appearance==="full")("_mat-animation-noopable",t._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,t){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var Qn=["text"],qn=[[["mat-icon"]],"*"],Yn=["mat-icon","*"];function Un(i,c){if(i&1&&h(0,"mat-pseudo-checkbox",1),i&2){let e=p();v("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Zn(i,c){if(i&1&&h(0,"mat-pseudo-checkbox",3),i&2){let e=p();v("disabled",e.disabled)}}function Xn(i,c){if(i&1&&(l(0,"span",4),s(1),r()),i&2){let e=p();o(),b("(",e.group.label,")")}}var at=new N("MAT_OPTION_PARENT_COMPONENT"),ot=new N("MatOptgroup");var Oe=class{source;isUserInput;constructor(c,e=!1){this.source=c,this.isUserInput=e}},ve=(()=>{class i{_element=u(z);_changeDetectorRef=u(X);_parent=u(at,{optional:!0});group=u(ot,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(fe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Ue(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new R;_text;_stateChanges=new G;constructor(){let e=u(je);e.load(qe),e.load(Wt),this._signalDisableRipple=!!this._parent&&Pt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let t=this._getHostElement();typeof t.focus=="function"&&t.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!oe(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Oe(this,e))}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=F({type:i,selectors:[["mat-option"]],viewQuery:function(n,t){if(n&1&&U(Qn,7),n&2){let a;S(a=I())&&(t._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,t){n&1&&w("click",function(){return t._selectViaInteraction()})("keydown",function(d){return t._handleKeydown(d)}),n&2&&(Ve("id",t.id),C("aria-selected",t.selected)("aria-disabled",t.disabled.toString()),B("mdc-list-item--selected",t.selected)("mat-mdc-option-multiple",t.multiple)("mat-mdc-option-active",t.active)("mdc-list-item--disabled",t.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",L]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Yn,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,t){n&1&&(ae(qn),g(0,Un,1,2,"mat-pseudo-checkbox",1),Y(1),l(2,"span",2,0),Y(4,1),r(),g(5,Zn,1,1,"mat-pseudo-checkbox",3),g(6,Xn,2,1,"span",4),h(7,"div",5)),n&2&&(f(t.multiple?0:-1),o(5),f(!t.multiple&&t.selected&&!t.hideSingleSelectionIndicator?5:-1),o(),f(t.group&&t.group._inert?6:-1),o(),v("matRippleTrigger",t._getHostElement())("matRippleDisabled",t.disabled||t.disableRipple))},dependencies:[Pn,Ee],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return i})();function Mn(i,c,e){if(e.length){let n=c.toArray(),t=e.toArray(),a=0;for(let d=0;d<i+1;d++)n[d].group&&n[d].group===t[a]&&a++;return a}return 0}function En(i,c,e,n){return i<e?i:i+c>e+n?Math.max(0,i-n+c):e}var On=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ie({type:i});static \u0275inj=ne({imports:[re]})}return i})();var rt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ie({type:i});static \u0275inj=ne({imports:[Cn,On,ve,re]})}return i})();var ti=["panel"],ni=["*"];function ii(i,c){if(i&1&&(Ze(0,"div",1,0),Y(2),Xe()),i&2){let e=c.id,n=p();_e(n._classList),B("mat-mdc-autocomplete-visible",n.showPanel)("mat-mdc-autocomplete-hidden",!n.showPanel)("mat-autocomplete-panel-animations-enabled",!n._animationsDisabled)("mat-primary",n._color==="primary")("mat-accent",n._color==="accent")("mat-warn",n._color==="warn"),Ve("id",n.id),C("aria-label",n.ariaLabel||null)("aria-labelledby",n._getPanelAriaLabelledby(e))}}var lt=class{source;option;constructor(c,e){this.source=c,this.option=e}},Ln=new N("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Rn=(()=>{class i{_changeDetectorRef=u(X);_elementRef=u(z);_defaults=u(Ln);_animationsDisabled=J();_activeOptionChanges=H.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new R;opened=new R;closed=new R;optionActivated=new R;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(fe).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(Pe);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Kt(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let n=new lt(this,e);this.optionSelected.emit(n)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=F({type:i,selectors:[["mat-autocomplete"]],contentQueries:function(n,t,a){if(n&1&&be(a,ve,5)(a,ot,5),n&2){let d;S(d=I())&&(t.options=d),S(d=I())&&(t.optionGroups=d)}},viewQuery:function(n,t){if(n&1&&U(me,7)(ti,5),n&2){let a;S(a=I())&&(t.template=a.first),S(a=I())&&(t.panel=a.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",L],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",L],requireSelection:[2,"requireSelection","requireSelection",L],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",L],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",L]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[j([{provide:at,useExisting:i}])],ngContentSelectors:ni,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(n,t){n&1&&(ae(),Fe(0,ii,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2})}return i})();var ai={provide:tn,useExisting:St(()=>st),multi:!0};var oi=new N("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let i=u(de);return()=>Yt(i)}}),st=(()=>{class i{_environmentInjector=u(It);_element=u(z);_injector=u(de);_viewContainerRef=u(Be);_zone=u(le);_changeDetectorRef=u(X);_dir=u(Me,{optional:!0});_formField=u(xn,{optional:!0,host:!0});_viewportRuler=u(Ke);_scrollStrategy=u(oi);_renderer=u(Se);_animationsDisabled=J();_defaults=u(Ln,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new G;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=H.EMPTY;_breakpointObserver=u(zt);_handsetLandscapeSubscription=H.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new G;_overlayPanelClass=Ht(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return te(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Ce(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Ce(()=>this._overlayAttached)):K()).pipe(De(e=>e instanceof Oe?e:null))}optionSelections=vt(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe($(e),Q(()=>te(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(Q(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new xe(e=>{let n=a=>{let d=Vt(a),m=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,W=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&d!==this._element.nativeElement&&!this._hasFocus()&&(!m||!m.contains(d))&&(!W||!W.contains(d))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(d)&&e.next(a)},t=[this._renderer.listen("document","click",n),this._renderer.listen("document","auxclick",n),this._renderer.listen("document","touchend",n)];return()=>{t.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let n=e,t=n.keyCode,a=oe(n);if(t===27&&!a&&n.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&t===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),n.preventDefault();else if(this.autocomplete){let d=this.autocomplete._keyManager.activeItem,m=t===38||t===40;t===9||m&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(n):m&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(m||this.autocomplete._keyManager.activeItem!==d)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let n=e.target,t=n.value;if(n.type==="number"&&(t=t==""?null:parseFloat(t)),this._previousValue!==t){if(this._previousValue=t,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(t),!t)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(d=>d.selected);if(a){let d=this._getDisplayValue(a.value);t!==d&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Ft()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new xe(t=>{ce(()=>{t.next()},{injector:this._environmentInjector})}),n=this.autocomplete.options?.changes.pipe(kt(()=>this._positionStrategy.reapplyLastPosition()),wt(0))??K();return te(e,n).pipe(Q(()=>this._zone.run(()=>{let t=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),t!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Ct(1)).subscribe(t=>this._setValueAndClose(t))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let n=this.autocomplete;return n&&n.displayWith?n.displayWith(e):e}_assignOptionValue(e){let n=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(n??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let n=this.autocomplete,t=e?e.source:this._pendingAutoselectedOption;t?(this._clearPreviousSelectedOption(t),this._assignOptionValue(t.value),this._onChange(t.value),n._emitSelectEvent(t),this._element.nativeElement.focus()):n.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,n){this.autocomplete?.options?.forEach(t=>{t!==e&&t.selected&&t.deselect(n)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let n=this._overlayRef;n?(this._positionStrategy.setOrigin(this._getConnectedElement()),n.updateSize({width:this._getPanelWidth()})):(this._portal=new Ge(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),n=Xt(this._injector,this._getOverlayConfig()),this._overlayRef=n,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&n&&n.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(en.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),n&&!n.hasAttached()&&(n.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let t=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&t!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!oe(e)||e.keyCode===38&&oe(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Ut({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Zt(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let n=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],t=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:t},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:t}],d;this.position==="above"?d=a:this.position==="below"?d=n:d=[...n,...a],e.withPositions(d)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let n=-1;for(let t=0;t<e.options.length;t++)if(!e.options.get(t).disabled){n=t;break}e._keyManager.setActiveItem(n)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let n=this.autocomplete,t=Mn(e,n.options,n.optionGroups);if(e===0&&t===1)n._setScrollTop(0);else if(n.panel){let a=n.options.toArray()[e];if(a){let d=a._getHostElement(),m=En(d.offsetTop,d.offsetHeight,n._getScrollTop(),n.panel.nativeElement.offsetHeight);n._setScrollTop(m)}}}static \u0275fac=function(n){return new(n||i)};static \u0275dir=q({type:i,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(n,t){n&1&&w("focusin",function(){return t._handleFocus()})("blur",function(){return t._onTouched()})("input",function(d){return t._handleInput(d)})("keydown",function(d){return t._handleKeydown(d)})("click",function(){return t._handleClick()}),n&2&&C("autocomplete",t.autocompleteAttribute)("role",t.autocompleteDisabled?null:"combobox")("aria-autocomplete",t.autocompleteDisabled?null:"list")("aria-activedescendant",t.panelOpen&&t.activeOption?t.activeOption.id:null)("aria-expanded",t.autocompleteDisabled?null:t.panelOpen.toString())("aria-controls",t.autocompleteDisabled||!t.panelOpen?null:t.autocomplete?.id)("aria-haspopup",t.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",L]},exportAs:["matAutocompleteTrigger"],features:[j([ai]),Re]})}return i})(),Bn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ie({type:i});static \u0275inj=ne({imports:[Jt,rt,Qt,rt,re]})}return i})();var di=()=>({maximumFractionDigits:0});function ci(i,c){i&1&&(l(0,"span",13),s(1," | "),r())}function mi(i,c){if(i&1&&(l(0,"span"),s(1),r()),i&2){let e=p();o(),Z("",e.i18n.t("Experiences"),": ",e.translatedExperiences)}}function pi(i,c){i&1&&(l(0,"span",13),s(1," | "),r())}function ui(i,c){if(i&1&&(l(0,"span"),s(1),r()),i&2){let e=p();o(),Z("",e.i18n.t("Budget"),": ",e.i18n.formatNumber(e.savedItinerary.trip.budget,At(2,di))," INR")}}function bi(i,c){if(i&1&&(l(0,"div",16)(1,"div",17)(2,"span",18),s(3),r(),Le(),l(4,"svg",19),h(5,"circle",20)(6,"path",21),r()()()),i&2){let e=p();o(3),_(e.i18n.t("Preparing image for download..."))}}var Fn=(()=>{class i{constructor(e){this.i18n=e,this.delete=new R,this.downloading=!1}get tripLabel(){return`${this.savedItinerary.trip.startLocation} \u2192 ${this.savedItinerary.trip.destination}`}get translatedExperiences(){return this.savedItinerary.trip.experiences.map(e=>this.i18n.t(e)).join(", ")}get createdAtFormatted(){return this.savedItinerary.createdAt?this.i18n.formatDate(this.savedItinerary.createdAt,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}downloadItinerary(){return Ye(this,null,function*(){this.downloading=!0;try{yield this.downloadMarkdownFile(this.savedItinerary.itinerary,this.savedItinerary.trip.destination)}finally{this.downloading=!1}})}downloadMarkdownFile(e,n="document.png"){return Ye(this,null,function*(){if(typeof window>"u"||typeof document>"u")return;let t=(yield import("./chunk-LJ2YWI35.js")).default,a=yield kn(e),d=document.createElement("div");d.style.position="absolute",d.style.left="-9999px",d.style.top="0",d.style.width="794px",d.style.padding="24px",d.style.background="white",d.style.fontFamily="Arial, sans-serif",d.style.fontSize="14px",d.style.color="#1e293b",d.innerHTML=a;let m=document.createElement("style");m.textContent=`
      h1, h2, h3 {
        font-size: 1.125rem;
        font-weight: bold;
        color: #334155;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
      }
      ul {
        list-style: disc;
        padding-left: 1.5rem;
        margin-bottom: 1rem;
      }
      li {
        margin-bottom: 0.25rem;
      }
    `,d.appendChild(m),document.body.appendChild(d),yield new Promise($n=>setTimeout($n,300));let ye=(yield t(d,{backgroundColor:"#fff"})).toDataURL("image/png"),ee=document.createElement("a");ee.href=ye,ee.download=n.endsWith(".png")?n:n+".png",document.body.appendChild(ee),ee.click(),document.body.removeChild(ee),document.body.removeChild(d)})}static{this.\u0275fac=function(n){return new(n||i)(pe(ze))}}static{this.\u0275cmp=F({type:i,selectors:[["app-itinerary-view"]],inputs:{savedItinerary:"savedItinerary"},outputs:{delete:"delete"},decls:26,vars:15,consts:[[1,"py-2","sm:py-4","bg-white"],[1,"flex","flex-col","p-3","sm:p-4","rounded-2xl","bg-gradient-to-br","from-primary-50","via-white"],[1,"flex","flex-col","sm:flex-row","sm:justify-between","sm:items-center","mb-2","gap-2","sm:gap-0"],[1,"flex","flex-col","sm:flex-row","sm:items-center"],[1,"font-semibold","text-primary-800","text-sm","sm:text-base"],[1,"flex","flex-wrap","items-center","gap-2","mt-1","sm:mt-0","sm:ml-2"],[1,"text-xs","text-primary-400"],[1,"text-xs","text-primary-500"],[1,"flex","flex-col","sm:flex-row","items-stretch","sm:items-center","gap-2"],["icon","download",1,"w-full","sm:w-auto",3,"onButtonClickEvent","buttonName"],["icon","trash",1,"w-full","sm:w-auto",3,"onButtonClickEvent","buttonName"],[1,"mb-2","text-xs","sm:text-sm","text-primary-600"],[1,"flex","flex-col","sm:flex-row","sm:items-center","gap-1","sm:gap-2"],[1,"hidden","sm:inline"],[1,"flex","mt-3","sm:mt-4","!h-[calc(100dvh-21.5rem)]","overflow-y-auto","bg-gradient-to-br","from-primary-50","via-white","p-3","sm:p-4","rounded-2xl","text-sm","sm:text-base"],[3,"data"],[1,"fixed","inset-0","z-50","flex","items-center","justify-center","bg-white","bg-opacity-60"],[1,"bg-primary-50","rounded-lg","shadow-lg","p-4","sm:p-8","flex","flex-col","items-center","mx-4","sm:mx-0"],[1,"text-lg","sm:text-2xl","mb-2","text-primary-800","text-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24",1,"animate-spin","h-6","w-6","sm:h-8","sm:w-8","text-primary-600"],["cx","12","cy","12","r","10","stroke","currentColor","stroke-width","4",1,"opacity-25"],["fill","currentColor","d","M4 12a8 8 0 018-8v8z",1,"opacity-75"]],template:function(n,t){n&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",3)(5,"span",4),s(6),r(),l(7,"div",5)(8,"span",6),s(9),r(),l(10,"span",7),s(11),r()()()(),l(12,"div",8)(13,"app-custom-button",9),w("onButtonClickEvent",function(){return t.downloadItinerary()}),r(),l(14,"app-custom-button",10),w("onButtonClickEvent",function(){return t.delete.emit(t.savedItinerary.id)}),r()()(),l(15,"div",11)(16,"div",12)(17,"span"),s(18),r(),g(19,ci,2,0,"span",13),g(20,mi,2,2,"span"),g(21,pi,2,0,"span",13),g(22,ui,2,3,"span"),r()()(),l(23,"div",14),h(24,"markdown",15),r()(),g(25,bi,7,1,"div",16)),n&2&&(o(6),_(t.tripLabel),o(3),Z("(",t.savedItinerary.trip.days," ",t.i18n.t("days"),")"),o(2),Z("",t.i18n.t("Created"),": ",t.createdAtFormatted),o(2),v("buttonName",t.i18n.t("Download Itinerary")),o(),v("buttonName",t.i18n.t("Delete")),o(4),Z("",t.i18n.t("Mode"),": ",t.i18n.t(t.savedItinerary.trip.travelMode)),o(),f(t.savedItinerary.trip.experiences?.length?19:-1),o(),f(t.savedItinerary.trip.experiences?.length?20:-1),o(),f(t.savedItinerary.trip.budget?21:-1),o(),f(t.savedItinerary.trip.budget?22:-1),o(2),v("data",t.savedItinerary.itinerary),o(),f(t.downloading?25:-1))},dependencies:[He,Qe,$e,In,Sn],styles:["[_nghost-%COMP%]     markdown h1, [_nghost-%COMP%]     markdown h2, [_nghost-%COMP%]     markdown h3{margin-top:.75rem;margin-bottom:.5rem;font-size:1rem;line-height:1.5rem;font-weight:700;--tw-text-opacity: 1;color:rgb(21 25 25 / var(--tw-text-opacity, 1))}@media(min-width:640px){[_nghost-%COMP%]     markdown h1, [_nghost-%COMP%]     markdown h2, [_nghost-%COMP%]     markdown h3{margin-top:1rem;font-size:1.125rem;line-height:1.75rem}}[_nghost-%COMP%]     markdown ul{margin-bottom:.75rem;list-style-type:disc;padding-left:1rem}@media(min-width:640px){[_nghost-%COMP%]     markdown ul{margin-bottom:1rem;padding-left:1.5rem}}[_nghost-%COMP%]     markdown li{margin-bottom:.25rem;font-size:.875rem;line-height:1.25rem}@media(min-width:640px){[_nghost-%COMP%]     markdown li{font-size:1rem;line-height:1.5rem}}[_nghost-%COMP%]     markdown p{margin-bottom:.5rem;font-size:.875rem;line-height:1.25rem}@media(min-width:640px){[_nghost-%COMP%]     markdown p{margin-bottom:.75rem;font-size:1rem;line-height:1.5rem}}[_nghost-%COMP%]     markdown a{text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px}[_nghost-%COMP%]     markdown a:hover, [_nghost-%COMP%]     markdown a:focus{--tw-text-opacity: 1;color:rgb(47 93 98 / var(--tw-text-opacity, 1))}@media(max-width:640px){[_nghost-%COMP%]     markdown{font-size:.875rem;line-height:1.25rem}[_nghost-%COMP%]     markdown h1, [_nghost-%COMP%]     markdown h2, [_nghost-%COMP%]     markdown h3{font-size:1rem;line-height:1.5rem}}"],changeDetection:1})}}return i})();var bt=["*"];function hi(i,c){i&1&&Y(0)}var _i=["tabListContainer"],gi=["tabList"],fi=["tabListInner"],vi=["nextPaginator"],yi=["previousPaginator"],xi=["content"];function Ci(i,c){}var wi=["tabBodyWrapper"],Ti=["tabHeader"];function ki(i,c){}function Si(i,c){if(i&1&&ue(0,ki,0,0,"ng-template",12),i&2){let e=p().$implicit;v("cdkPortalOutlet",e.templateLabel)}}function Ii(i,c){if(i&1&&s(0),i&2){let e=p().$implicit;_(e.textLabel)}}function Pi(i,c){if(i&1){let e=V();l(0,"div",7,2),w("click",function(){let t=y(e),a=t.$implicit,d=t.$index,m=p(),W=he(1);return x(m._handleClick(a,W,d))})("cdkFocusChange",function(t){let a=y(e).$index,d=p();return x(d._tabFocusChanged(t,a))}),h(2,"span",8)(3,"div",9),l(4,"span",10)(5,"span",11),g(6,Si,1,1,null,12)(7,Ii,1,1),r()()()}if(i&2){let e=c.$implicit,n=c.$index,t=he(1),a=p();_e(e.labelClass),B("mdc-tab--active",a.selectedIndex===n),v("id",a._getTabLabelId(e,n))("disabled",e.disabled)("fitInkBarToContent",a.fitInkBarToContent),C("tabIndex",a._getTabIndex(n))("aria-posinset",n+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(n))("aria-selected",a.selectedIndex===n)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),o(3),v("matRippleTrigger",t)("matRippleDisabled",e.disabled||a.disableRipple),o(3),f(e.templateLabel?6:7)}}function Mi(i,c){i&1&&Y(0)}function Ei(i,c){if(i&1){let e=V();l(0,"mat-tab-body",13),w("_onCentered",function(){y(e);let t=p();return x(t._removeTabBodyWrapperHeight())})("_onCentering",function(t){y(e);let a=p();return x(a._setTabBodyWrapperHeight(t))})("_beforeCentering",function(t){y(e);let a=p();return x(a._bodyCentered(t))}),r()}if(i&2){let e=c.$implicit,n=c.$index,t=p();_e(e.bodyClass),v("id",t._getTabContentId(n))("content",e.content)("position",e.position)("animationDuration",t._bodyAnimationDuration)("preserveContent",t.preserveContent),C("tabindex",t.contentTabIndex!=null&&t.selectedIndex===n?t.contentTabIndex:null)("aria-labelledby",t._getTabLabelId(e,n))("aria-hidden",t.selectedIndex!==n)}}var Oi=new N("MatTabContent"),Ai=(()=>{class i{template=u(me);static \u0275fac=function(n){return new(n||i)};static \u0275dir=q({type:i,selectors:[["","matTabContent",""]],features:[j([{provide:Oi,useExisting:i}])]})}return i})(),Di=new N("MatTabLabel"),Hn=new N("MAT_TAB"),ht=(()=>{class i extends qt{_closestTab=u(Hn,{optional:!0});static \u0275fac=(()=>{let e;return function(t){return(e||(e=ke(i)))(t||i)}})();static \u0275dir=q({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[j([{provide:Di,useExisting:i}]),Ie]})}return i})(),zn=new N("MAT_TAB_GROUP"),_t=(()=>{class i{_viewContainerRef=u(Be);_closestTabGroup=u(zn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new G;position=null;origin=null;isActive=!1;constructor(){u(je).load(qe)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Ge(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=F({type:i,selectors:[["mat-tab"]],contentQueries:function(n,t,a){if(n&1&&be(a,ht,5)(a,Ai,7,me),n&2){let d;S(d=I())&&(t.templateLabel=d.first),S(d=I())&&(t._explicitContent=d.first)}},viewQuery:function(n,t){if(n&1&&U(me,7),n&2){let a;S(a=I())&&(t._implicitContent=a.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(n,t){n&2&&C("id",null)},inputs:{disabled:[2,"disabled","disabled",L],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[j([{provide:Hn,useExisting:i}]),Re],ngContentSelectors:bt,decls:1,vars:0,template:function(n,t){n&1&&(ae(),Fe(0,hi,1,0,"ng-template"))},encapsulation:2,changeDetection:1})}return i})(),dt="mdc-tab-indicator--active",Vn="mdc-tab-indicator--no-transition",mt=class{_items;_currentItem;constructor(c){this._items=c}hide(){this._items.forEach(c=>c.deactivateInkBar()),this._currentItem=void 0}alignToElement(c){let e=this._items.find(t=>t.elementRef.nativeElement===c),n=this._currentItem;if(e!==n&&(n?.deactivateInkBar(),e)){let t=n?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(t),this._currentItem=e}}},Li=(()=>{class i{_elementRef=u(z);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let n=this._elementRef.nativeElement;if(!e||!n.getBoundingClientRect||!this._inkBarContentElement){n.classList.add(dt);return}let t=n.getBoundingClientRect(),a=e.width/t.width,d=e.left-t.left;n.classList.add(Vn),this._inkBarContentElement.style.setProperty("transform",`translateX(${d}px) scaleX(${a})`),n.getBoundingClientRect(),n.classList.remove(Vn),n.classList.add(dt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(dt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,n=this._inkBarElement=e.createElement("span"),t=this._inkBarContentElement=e.createElement("span");n.className="mdc-tab-indicator",t.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",n.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(n){return new(n||i)};static \u0275dir=q({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",L]}})}return i})();var jn=(()=>{class i extends Li{elementRef=u(z);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(t){return(e||(e=ke(i)))(t||i)}})();static \u0275dir=q({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(n,t){n&2&&(C("aria-disabled",!!t.disabled),B("mat-mdc-tab-disabled",t.disabled))},inputs:{disabled:[2,"disabled","disabled",L]},features:[Ie]})}return i})(),Nn={passive:!0},Ri=650,Bi=100;function ct(i){let c=i+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(c)?`${i}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(c)?c:""}var Fi=(()=>{class i{_elementRef=u(z);_changeDetectorRef=u(X);_viewportRuler=u(Ke);_dir=u(Me,{optional:!0});_ngZone=u(le);_platform=u(Pe);_sharedResizeObserver=u(yn);_injector=u(de);_renderer=u(Se);_animationsDisabled=J();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new G;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new G;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let n=isNaN(e)?0:e;this._selectedIndex!=n&&(this._selectedIndexChanged=!0,this._selectedIndex=n,this._keyManager&&this._keyManager.updateActiveItem(n))}_selectedIndex=0;selectFocusedIndex=new R;indexFocused=new R;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Nn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Nn))}ngAfterContentInit(){let e=this._dir?this._dir.change:K("ltr"),n=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(we(32),Te(this._destroyed)),t=this._viewportRuler.change(150).pipe(Te(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Gt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ce(a,{injector:this._injector}),te(e,t,n,this._items.changes,this._itemsResized()).pipe(Te(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(d=>{this.indexFocused.emit(d),this._setTabFocus(d)})}_itemsResized(){return typeof ResizeObserver!="function"?ft:this._items.changes.pipe($(this._items),Q(e=>new xe(n=>this._ngZone.runOutsideAngular(()=>{let t=new ResizeObserver(a=>n.next(a));return e.forEach(a=>t.observe(a.elementRef.nativeElement)),()=>{t.disconnect()}}))),Tt(1),Ce(e=>e.some(n=>n.contentRect.width>0&&n.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!oe(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let n=this._items.get(this.focusIndex);n&&!n.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let n=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?n.scrollLeft=0:n.scrollLeft=n.scrollWidth-n.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,n=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let n=this._tabListContainer.nativeElement.offsetWidth,t=(e=="before"?-1:1)*n/3;return this._scrollTo(this._scrollDistance+t)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let n=this._items?this._items.toArray()[e]:null;if(!n)return;let t=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:d}=n.elementRef.nativeElement,m,W;this._getLayoutDirection()=="ltr"?(m=a,W=m+d):(W=this._tabListInner.nativeElement.offsetWidth-a,m=W-d);let ye=this.scrollDistance,ee=this.scrollDistance+t;m<ye?this.scrollDistance-=ye-m:W>ee&&(this.scrollDistance+=Math.min(W-ee,m-ye))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,n=this._elementRef.nativeElement.offsetWidth,t=e-n>=5;t||(this.scrollDistance=0),t!==this._showPaginationControls&&(this._showPaginationControls=t,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,n=this._tabListContainer.nativeElement.offsetWidth;return e-n||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,n=e?e.elementRef.nativeElement:null;n?this._inkBar.alignToElement(n):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,n){n&&n.button!=null&&n.button!==0||(this._stopInterval(),yt(Ri,Bi).pipe(Te(te(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:t,distance:a}=this._scrollHeader(e);(a===0||a>=t)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let n=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(n,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:n,distance:this._scrollDistance}}static \u0275fac=function(n){return new(n||i)};static \u0275dir=q({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",L],selectedIndex:[2,"selectedIndex","selectedIndex",Ne]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),Vi=(()=>{class i extends Fi{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new mt(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=ke(i)))(t||i)}})();static \u0275cmp=F({type:i,selectors:[["mat-tab-header"]],contentQueries:function(n,t,a){if(n&1&&be(a,jn,4),n&2){let d;S(d=I())&&(t._items=d)}},viewQuery:function(n,t){if(n&1&&U(_i,7)(gi,7)(fi,7)(vi,5)(yi,5),n&2){let a;S(a=I())&&(t._tabListContainer=a.first),S(a=I())&&(t._tabList=a.first),S(a=I())&&(t._tabListInner=a.first),S(a=I())&&(t._nextPaginator=a.first),S(a=I())&&(t._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(n,t){n&2&&B("mat-mdc-tab-header-pagination-controls-enabled",t._showPaginationControls)("mat-mdc-tab-header-rtl",t._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",L]},features:[Ie],ngContentSelectors:bt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(n,t){n&1&&(ae(),l(0,"div",5,0),w("click",function(){return t._handlePaginatorClick("before")})("mousedown",function(d){return t._handlePaginatorPress("before",d)})("touchend",function(){return t._stopInterval()}),h(2,"div",6),r(),l(3,"div",7,1),w("keydown",function(d){return t._handleKeydown(d)}),l(5,"div",8,2),w("cdkObserveContent",function(){return t._onContentChanges()}),l(7,"div",9,3),Y(9),r()()(),l(10,"div",10,4),w("mousedown",function(d){return t._handlePaginatorPress("after",d)})("click",function(){return t._handlePaginatorClick("after")})("touchend",function(){return t._stopInterval()}),h(12,"div",6),r()),n&2&&(B("mat-mdc-tab-header-pagination-disabled",t._disableScrollBefore),v("matRippleDisabled",t._disableScrollBefore||t.disableRipple),o(3),B("_mat-animation-noopable",t._animationsDisabled),o(2),C("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null),o(5),B("mat-mdc-tab-header-pagination-disabled",t._disableScrollAfter),v("matRippleDisabled",t._disableScrollAfter||t.disableRipple))},dependencies:[Ee,jt],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return i})(),Ni=new N("MAT_TABS_CONFIG"),Wn=(()=>{class i extends tt{_host=u(pt);_ngZone=u(le);_centeringSub=H.EMPTY;_leavingSub=H.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe($(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=ke(i)))(t||i)}})();static \u0275dir=q({type:i,selectors:[["","matTabBodyHost",""]],features:[Ie]})}return i})(),pt=(()=>{class i{_elementRef=u(z);_dir=u(Me,{optional:!0});_ngZone=u(le);_injector=u(de);_renderer=u(Se);_diAnimationsDisabled=J();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=H.EMPTY;_position;_previousPosition;_onCentering=new R;_beforeCentering=new R;_afterLeavingCenter=new R;_onCentered=new R(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(X);this._dirChangeSubscription=this._dir.change.subscribe(n=>{this._computePositionAnimationState(n),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ce(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,n=t=>{t.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),t.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",t=>{t.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",n),this._renderer.listen(e,"transitioncancel",n)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ce(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=F({type:i,selectors:[["mat-tab-body"]],viewQuery:function(n,t){if(n&1&&U(Wn,5)(xi,5),n&2){let a;S(a=I())&&(t._portalHost=a.first),S(a=I())&&(t._contentElement=a.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(n,t){n&2&&C("inert",t._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(n,t){n&1&&(l(0,"div",1,0),ue(2,Ci,0,0,"ng-template",2),r()),n&2&&B("mat-tab-body-content-left",t._position==="left")("mat-tab-body-content-right",t._position==="right")("mat-tab-body-content-can-animate",t._position==="center"||t._previousPosition==="center")},dependencies:[Wn,$t],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})}return i})(),Kn=(()=>{class i{_elementRef=u(z);_changeDetectorRef=u(X);_ngZone=u(le);_tabsSubscription=H.EMPTY;_tabLabelSubscription=H.EMPTY;_tabBodySubscription=H.EMPTY;_diAnimationsDisabled=J();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Mt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e=="object"?(this._bodyAnimationDuration=ct(e.body),this._headerAnimationDuration=ct(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=ct(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let n=this._elementRef.nativeElement.classList;n.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&n.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new R;focusChange=new R;animationDone=new R;selectedTabChange=new R(!0);_groupId;_isServer=!u(Pe).isBrowser;constructor(){let e=u(Ni,{optional:!0});this._groupId=u(fe).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let n=this._selectedIndex==null;if(!n){this.selectedTabChange.emit(this._createChangeEvent(e));let t=this._tabBodyWrapper.nativeElement;t.style.minHeight=t.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((t,a)=>t.isActive=a===e),n||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((n,t)=>{n.position=t-e,this._selectedIndex!=null&&n.position==0&&!n.origin&&(n.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let n=this._tabs.toArray(),t;for(let a=0;a<n.length;a++)if(n[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,t=n[a];break}!t&&n[e]&&Promise.resolve().then(()=>{n[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe($(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(n=>n._closestTabGroup===this||!n._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let n=this._tabHeader;n&&(n.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let n=new ut;return n.index=e,this._tabs&&this._tabs.length&&(n.tab=this._tabs.toArray()[e]),n}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=te(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,n){return e.id||`${this._groupId}-label-${n}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let n=this._tabBodyWrapper.nativeElement;n.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(n.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,n,t){n.focusIndex=t,e.disabled||(this.selectedIndex=t)}_getTabIndex(e){let n=this._lastFocusedTabIndex??this.selectedIndex;return e===n?0:-1}_tabFocusChanged(e,n){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=n)}_bodyCentered(e){e&&this._tabBodies?.forEach((n,t)=>n._setActiveClass(t===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=F({type:i,selectors:[["mat-tab-group"]],contentQueries:function(n,t,a){if(n&1&&be(a,_t,5),n&2){let d;S(d=I())&&(t._allTabs=d)}},viewQuery:function(n,t){if(n&1&&U(wi,5)(Ti,5)(pt,5),n&2){let a;S(a=I())&&(t._tabBodyWrapper=a.first),S(a=I())&&(t._tabHeader=a.first),S(a=I())&&(t._tabBodies=a)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(n,t){n&2&&(C("mat-align-tabs",t.alignTabs),_e("mat-"+(t.color||"primary")),Ot("--mat-tab-body-animation-duration",t._bodyAnimationDuration)("--mat-tab-header-animation-duration",t._headerAnimationDuration),B("mat-mdc-tab-group-dynamic-height",t.dynamicHeight)("mat-mdc-tab-group-inverted-header",t.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",t.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",L],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",L],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",L],selectedIndex:[2,"selectedIndex","selectedIndex",Ne],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ne],disablePagination:[2,"disablePagination","disablePagination",L],disableRipple:[2,"disableRipple","disableRipple",L],preserveContent:[2,"preserveContent","preserveContent",L],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[j([{provide:zn,useExisting:i}])],ngContentSelectors:bt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(n,t){n&1&&(ae(),l(0,"mat-tab-header",3,0),w("indexFocused",function(d){return t._focusChanged(d)})("selectFocusedIndex",function(d){return t.selectedIndex=d}),A(2,Pi,8,17,"div",4,O),r(),g(4,Mi,1,0),l(5,"div",5,1),A(7,Ei,1,10,"mat-tab-body",6,O),r()),n&2&&(v("selectedIndex",t.selectedIndex||0)("disableRipple",t.disableRipple)("disablePagination",t.disablePagination),Et("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby),o(2),D(t._tabs),o(2),f(t._isServer?4:-1),o(),B("_mat-animation-noopable",t._bodyAnimationsDisabled()),o(2),D(t._tabs))},dependencies:[Vi,jn,Nt,Ee,tt,pt],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})}return i})(),ut=class{index;tab};var Gn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ie({type:i});static \u0275inj=ne({imports:[re]})}return i})();function Hi(i,c){if(i&1&&(l(0,"span",64),h(1,"app-icon",65),s(2),r()),i&2){let e=p();o(2),b(" ",e.i18n.t("Plan a Trip"))}}function zi(i,c){if(i&1&&(l(0,"h2",9),h(1,"app-icon",66),s(2),r()),i&2){let e=p();o(2),b(" ",e.i18n.t("Trip Planner")," ")}}function ji(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Ki(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Gi(i,c){if(i&1&&(l(0,"mat-option",30),s(1),r()),i&2){let e=c.$implicit;v("value",e),o(),b(" ",e," ")}}function $i(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Qi(i,c){if(i&1&&(l(0,"mat-option",30),s(1),r()),i&2){let e=c.$implicit;v("value",e),o(),b(" ",e," ")}}function qi(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Yi(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Ui(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Zi(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Xi(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Ji(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function ea(i,c){if(i&1&&(l(0,"span",56),s(1),r()),i&2){let e=p();o(),_(e.i18n.t("More Trip Preferences"))}}function ta(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function na(i,c){if(i&1){let e=V();l(0,"label",69)(1,"input",86,3),w("change",function(t){let a=y(e).$implicit,d=p(2);return x(d.onCheckboxChange("activityTypes",a.value,t.target.checked))}),r(),s(3),r()}if(i&2){let e=c.$implicit,n=p(2);o(),v("name",ge("activityTypes_",e.value))("checked",n.trip.activityTypes.includes(e.value)),o(2),b(" ",n.i18n.t(e.label)," ")}}function ia(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function aa(i,c){if(i&1){let e=V();l(0,"label",69)(1,"input",86,3),w("change",function(t){let a=y(e).$implicit,d=p(2);return x(d.onCheckboxChange("tripType",a.value,t.target.checked))}),r(),s(3),r()}if(i&2){let e=c.$implicit,n=p(2);o(),v("name",ge("tripType_",e.value))("checked",n.trip.tripType.includes(e.value)),o(2),b(" ",n.i18n.t(e.label)," ")}}function oa(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function ra(i,c){if(i&1){let e=V();l(0,"label",69)(1,"input",86,3),w("change",function(t){let a=y(e).$implicit,d=p(2);return x(d.onCheckboxChange("naturePreference",a.value,t.target.checked))}),r(),s(3),r()}if(i&2){let e=c.$implicit,n=p(2);o(),v("name",ge("naturePreference_",e.value))("checked",n.trip.naturePreference.includes(e.value)),o(2),b(" ",n.i18n.t(e.label)," ")}}function la(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function sa(i,c){if(i&1){let e=V();l(0,"label",69)(1,"input",86,3),w("change",function(t){let a=y(e).$implicit,d=p(2);return x(d.onCheckboxChange("culturalInterest",a.value,t.target.checked))}),r(),s(3),r()}if(i&2){let e=c.$implicit,n=p(2);o(),v("name",ge("culturalInterest_",e.value))("checked",n.trip.culturalInterest.includes(e.value)),o(2),b(" ",n.i18n.t(e.label)," ")}}function da(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function ca(i,c){if(i&1){let e=V();l(0,"label",69)(1,"input",86,3),w("change",function(t){let a=y(e).$implicit,d=p(2);return x(d.onCheckboxChange("shoppingInterest",a.value,t.target.checked))}),r(),s(3),r()}if(i&2){let e=c.$implicit,n=p(2);o(),v("name",ge("shoppingInterest_",e.value))("checked",n.trip.shoppingInterest.includes(e.value)),o(2),b(" ",n.i18n.t(e.label)," ")}}function ma(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function pa(i,c){if(i&1&&(l(0,"option",30),s(1),r()),i&2){let e=c.$implicit,n=p(2);v("value",e.value),o(),_(n.i18n.t(e.label))}}function ua(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function ba(i,c){if(i&1&&(l(0,"option",30),s(1),r()),i&2){let e=c.$implicit,n=p(2);v("value",e.value),o(),_(n.i18n.t(e.label))}}function ha(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function _a(i,c){if(i&1&&(l(0,"option",30),s(1),r()),i&2){let e=c.$implicit,n=p(2);v("value",e.value),o(),_(n.i18n.t(e.label))}}function ga(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function fa(i,c){if(i&1&&(l(0,"option",30),s(1),r()),i&2){let e=c.$implicit,n=p(2);v("value",e.value),o(),_(n.i18n.t(e.label))}}function va(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function ya(i,c){if(i&1&&(l(0,"option",30),s(1),r()),i&2){let e=c.$implicit,n=p(2);v("value",e.value),o(),_(n.i18n.t(e.label))}}function xa(i,c){if(i&1){let e=V();l(0,"input",87),E("ngModelChange",function(t){y(e);let a=p(2);return M(a.trip.languageComfortOther,t)||(a.trip.languageComfortOther=t),x(t)}),r(),T()}if(i&2){let e=p(2);P("ngModel",e.trip.languageComfortOther),v("placeholder",e.i18n.t("Please specify")),C("aria-label",e.i18n.t("Other preferred language")),k()}}function Ca(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function wa(i,c){if(i&1&&(l(0,"option",30),s(1),r()),i&2){let e=c.$implicit,n=p(2);v("value",e.value),o(),_(n.i18n.t(e.label))}}function Ta(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function ka(i,c){if(i&1&&(l(0,"option",30),s(1),r()),i&2){let e=c.$implicit,n=p(2);v("value",e.value),o(),_(n.i18n.t(e.label))}}function Sa(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Ia(i,c){if(i&1&&(l(0,"option",30),s(1),r()),i&2){let e=c.$implicit,n=p(2);v("value",e.value),o(),_(n.i18n.t(e.label))}}function Pa(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Ma(i,c){if(i&1&&(l(0,"option",30),s(1),r()),i&2){let e=c.$implicit,n=p(2);v("value",e.value),o(),_(n.i18n.t(e.label))}}function Ea(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Oa(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Aa(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function Da(i,c){i&1&&(l(0,"span",14),h(1,"app-icon",67),r())}function La(i,c){if(i&1){let e=V();l(0,"div")(1,"label",27),s(2),g(3,ta,2,0,"span",14),r(),l(4,"div",68),A(5,na,4,4,"label",69,O),r()(),l(7,"div")(8,"label",27),s(9),g(10,ia,2,0,"span",14),r(),l(11,"div",68),A(12,aa,4,4,"label",69,O),r()(),l(14,"div")(15,"label",27),s(16),g(17,oa,2,0,"span",14),r(),l(18,"div",68),A(19,ra,4,4,"label",69,O),r()(),l(21,"div")(22,"label",27),s(23),g(24,la,2,0,"span",14),r(),l(25,"div",68),A(26,sa,4,4,"label",69,O),r()(),l(28,"div")(29,"label",27),s(30),g(31,da,2,0,"span",14),r(),l(32,"div",68),A(33,ca,4,4,"label",69,O),r()(),l(35,"div",70)(36,"div")(37,"label",27),s(38),g(39,ma,2,0,"span",14),r(),l(40,"select",71),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.nightlifePreference,t)||(a.trip.nightlifePreference=t),x(t)}),l(41,"option",35),s(42),r(),A(43,pa,2,2,"option",30,O),r(),T(),r(),l(45,"div")(46,"label",27),s(47),g(48,ua,2,0,"span",14),r(),l(49,"select",72),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.dietPreference,t)||(a.trip.dietPreference=t),x(t)}),l(50,"option",35),s(51),r(),A(52,ba,2,2,"option",30,O),r(),T(),r(),l(54,"div")(55,"label",27),s(56),g(57,ha,2,0,"span",14),r(),l(58,"select",73),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.fitnessLevel,t)||(a.trip.fitnessLevel=t),x(t)}),l(59,"option",35),s(60),r(),A(61,_a,2,2,"option",30,O),r(),T(),r(),l(63,"div")(64,"label",27),s(65),g(66,ga,2,0,"span",14),r(),l(67,"select",74),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.travelCompanionType,t)||(a.trip.travelCompanionType=t),x(t)}),l(68,"option",35),s(69),r(),A(70,fa,2,2,"option",30,O),r(),T(),r(),l(72,"div")(73,"label",27),s(74),g(75,va,2,0,"span",14),r(),l(76,"select",75),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.languageComfort,t)||(a.trip.languageComfort=t),x(t)}),l(77,"option",35),s(78),r(),A(79,ya,2,2,"option",30,O),r(),T(),g(81,xa,1,3,"input",76),r(),l(82,"div")(83,"label",27),s(84),g(85,Ca,2,0,"span",14),r(),l(86,"select",77),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.paceOfTravel,t)||(a.trip.paceOfTravel=t),x(t)}),l(87,"option",35),s(88),r(),A(89,wa,2,2,"option",30,O),r(),T(),r(),l(91,"div")(92,"label",27),s(93),g(94,Ta,2,0,"span",14),r(),l(95,"select",78),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.accommodationType,t)||(a.trip.accommodationType=t),x(t)}),l(96,"option",35),s(97),r(),A(98,ka,2,2,"option",30,O),r(),T(),r(),l(100,"div")(101,"label",27),s(102),g(103,Sa,2,0,"span",14),r(),l(104,"select",79),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.connectivityPreference,t)||(a.trip.connectivityPreference=t),x(t)}),l(105,"option",35),s(106),r(),A(107,Ia,2,2,"option",30,O),r(),T(),r(),l(109,"div")(110,"label",27),s(111),g(112,Pa,2,0,"span",14),r(),l(113,"select",80),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.weatherPreference,t)||(a.trip.weatherPreference=t),x(t)}),l(114,"option",35),s(115),r(),A(116,Ma,2,2,"option",30,O),r(),T(),r()(),l(118,"div",81)(119,"div")(120,"label",27),s(121),g(122,Ea,2,0,"span",14),r(),l(123,"textarea",82),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.placesVisited,t)||(a.trip.placesVisited=t),x(t)}),r(),T(),r(),l(124,"div")(125,"label",27),s(126),g(127,Oa,2,0,"span",14),r(),l(128,"textarea",83),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.mustVisit,t)||(a.trip.mustVisit=t),x(t)}),r(),T(),r(),l(129,"div")(130,"label",27),s(131),g(132,Aa,2,0,"span",14),r(),l(133,"input",84),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.eventOccasion,t)||(a.trip.eventOccasion=t),x(t)}),r(),T(),r(),l(134,"div")(135,"label",27),s(136),g(137,Da,2,0,"span",14),r(),l(138,"textarea",85),E("ngModelChange",function(t){y(e);let a=p();return M(a.trip.additionalComments,t)||(a.trip.additionalComments=t),x(t)}),r(),T(),r()()}if(i&2){let e=p();o(2),b(" ",e.i18n.t("Activity Types")," "),o(),f(e.isFieldFilled(e.trip.activityTypes)?3:-1),o(2),D(e.activityTypesOptions),o(4),b(" ",e.i18n.t("Trip Type")," "),o(),f(e.isFieldFilled(e.trip.tripType)?10:-1),o(2),D(e.tripTypeOptions),o(4),b(" ",e.i18n.t("Nature Preference")," "),o(),f(e.isFieldFilled(e.trip.naturePreference)?17:-1),o(2),D(e.naturePreferenceOptions),o(4),b(" ",e.i18n.t("Cultural Interest")," "),o(),f(e.isFieldFilled(e.trip.culturalInterest)?24:-1),o(2),D(e.culturalInterestOptions),o(4),b(" ",e.i18n.t("Shopping Interest")," "),o(),f(e.isFieldFilled(e.trip.shoppingInterest)?31:-1),o(2),D(e.shoppingInterestOptions),o(5),b(" ",e.i18n.t("Nightlife Preference")," "),o(),f(e.isFieldFilled(e.trip.nightlifePreference)?39:-1),o(),P("ngModel",e.trip.nightlifePreference),C("aria-label",e.i18n.t("Nightlife preference")),k(),o(2),_(e.i18n.t("Select...")),o(),D(e.nightlifePreferenceOptions),o(4),b(" ",e.i18n.t("Diet Preference")," "),o(),f(e.isFieldFilled(e.trip.dietPreference)?48:-1),o(),P("ngModel",e.trip.dietPreference),C("aria-label",e.i18n.t("Diet preference")),k(),o(2),_(e.i18n.t("Select...")),o(),D(e.dietPreferenceOptions),o(4),b(" ",e.i18n.t("Fitness Level")," "),o(),f(e.isFieldFilled(e.trip.fitnessLevel)?57:-1),o(),P("ngModel",e.trip.fitnessLevel),C("aria-label",e.i18n.t("Fitness level")),k(),o(2),_(e.i18n.t("Select...")),o(),D(e.fitnessLevelOptions),o(4),b(" ",e.i18n.t("Travel Companion Type")," "),o(),f(e.isFieldFilled(e.trip.travelCompanionType)?66:-1),o(),P("ngModel",e.trip.travelCompanionType),C("aria-label",e.i18n.t("Travel companion type")),k(),o(2),_(e.i18n.t("Select...")),o(),D(e.travelCompanionTypeOptions),o(4),b(" ",e.i18n.t("Language Comfort")," "),o(),f(e.isFieldFilled(e.trip.languageComfort)||e.isFieldFilled(e.trip.languageComfortOther)?75:-1),o(),P("ngModel",e.trip.languageComfort),C("aria-label",e.i18n.t("Language comfort")),k(),o(2),_(e.i18n.t("Select...")),o(),D(e.languageComfortOptions),o(2),f(e.trip.languageComfort==="other"?81:-1),o(3),b(" ",e.i18n.t("Pace of Travel")," "),o(),f(e.isFieldFilled(e.trip.paceOfTravel)?85:-1),o(),P("ngModel",e.trip.paceOfTravel),C("aria-label",e.i18n.t("Pace of travel")),k(),o(2),_(e.i18n.t("Select...")),o(),D(e.paceOfTravelOptions),o(4),b(" ",e.i18n.t("Accommodation Type")," "),o(),f(e.isFieldFilled(e.trip.accommodationType)?94:-1),o(),P("ngModel",e.trip.accommodationType),C("aria-label",e.i18n.t("Accommodation type")),k(),o(2),_(e.i18n.t("Select...")),o(),D(e.accommodationTypeOptions),o(4),b(" ",e.i18n.t("Connectivity Preference")," "),o(),f(e.isFieldFilled(e.trip.connectivityPreference)?103:-1),o(),P("ngModel",e.trip.connectivityPreference),C("aria-label",e.i18n.t("Connectivity preference")),k(),o(2),_(e.i18n.t("Select...")),o(),D(e.connectivityPreferenceOptions),o(4),b(" ",e.i18n.t("Weather Preference")," "),o(),f(e.isFieldFilled(e.trip.weatherPreference)?112:-1),o(),P("ngModel",e.trip.weatherPreference),C("aria-label",e.i18n.t("Weather preference")),k(),o(2),_(e.i18n.t("Select...")),o(),D(e.weatherPreferenceOptions),o(5),b(" ",e.i18n.t("Places already visited (to avoid repetition)")," "),o(),f(e.isFieldFilled(e.trip.placesVisited)?122:-1),o(),P("ngModel",e.trip.placesVisited),v("placeholder",e.i18n.t("e.g., Mumbai, Goa")),C("aria-label",e.i18n.t("Places already visited")),k(),o(3),b(" ",e.i18n.t("Must-visit or bucket list places")," "),o(),f(e.isFieldFilled(e.trip.mustVisit)?127:-1),o(),P("ngModel",e.trip.mustVisit),v("placeholder",e.i18n.t("e.g., Eravikulam National Park")),C("aria-label",e.i18n.t("Must-visit or bucket-list places")),k(),o(3),b(" ",e.i18n.t("Event/Occasion")," "),o(),f(e.isFieldFilled(e.trip.eventOccasion)?132:-1),o(),P("ngModel",e.trip.eventOccasion),v("placeholder",e.i18n.t("e.g., Honeymoon, Birthday, Festival Trip")),C("aria-label",e.i18n.t("Event or occasion")),k(),o(3),b(" ",e.i18n.t("Additional Comments")," "),o(),f(e.isFieldFilled(e.trip.additionalComments)?137:-1),o(),P("ngModel",e.trip.additionalComments),v("placeholder",e.i18n.t("Any extra notes or requests")),C("aria-label",e.i18n.t("Additional comments")),k()}}function Ra(i,c){if(i&1&&(l(0,"div",60)(1,"b"),s(2),r(),s(3),h(4,"br"),l(5,"span",88),s(6),r()()),i&2){let e=p();o(2),b("",e.i18n.t("Error"),":"),o(),b(" ",e.error),o(3),_(e.i18n.t("Check your API key, network connection, or try again later."))}}function Ba(i,c){if(i&1&&(l(0,"div",61),s(1),r()),i&2){let e=p();o(),_(e.i18n.t("Generating itinerary..."))}}function Fa(i,c){if(i&1&&(l(0,"span",91),h(1,"app-icon",92),l(2,"span",93),s(3),r(),l(4,"span",94),s(5),r()()),i&2){let e=p(),n=e.$implicit,t=e.$index;o(3),Z("",t+1,". ",n.trip.startLocation+" \u2192 "+n.trip.destination),o(2),Z("",t+1,". ",n.trip.destination)}}function Va(i,c){if(i&1){let e=V();l(0,"mat-tab"),ue(1,Fa,6,4,"ng-template",7),l(2,"div",89)(3,"app-itinerary-view",90),w("delete",function(){let t=y(e).$implicit,a=p();return x(a.removeItinerary(t.id))}),r()()()}if(i&2){let e=c.$implicit;o(3),v("savedItinerary",e)}}function Na(i,c){if(i&1&&(l(0,"div",62)(1,"div",95)(2,"span",96),s(3),r(),Le(),l(4,"svg",97),h(5,"circle",98)(6,"path",99),r()()()),i&2){let e=p();o(3),_(e.i18n.t("Preparing itinerary for you..."))}}function Wa(i,c){if(i&1){let e=V();l(0,"app-modal-holder",100),w("onCancel",function(){y(e);let t=p();return x(t.closeApiKeyInstructionsModal())}),l(1,"div",101)(2,"div",102)(3,"span"),s(4,"\u{1F511}"),r(),l(5,"span"),s(6),r()(),l(7,"div",103),s(8),r(),l(9,"div"),s(10),l(11,"a",104),s(12,"https://platform.openai.com"),r(),h(13,"br"),s(14),r(),l(15,"div",103),s(16),r(),l(17,"div"),s(18),l(19,"a",105),s(20,"https://platform.openai.com/account/api-keys"),r()(),l(21,"div",103),s(22),r(),l(23,"div"),s(24),h(25,"br"),s(26),h(27,"br"),s(28),r(),l(29,"div",106),s(30,"\u26A0\uFE0F "),l(31,"span"),s(32),r()(),l(33,"div",107),s(34),r(),l(35,"div"),s(36),h(37,"br"),s(38),l(39,"a",108),s(40),r(),h(41,"br"),s(42),l(43,"ul",109)(44,"li"),s(45),r(),l(46,"li"),s(47),r()(),s(48),l(49,"a",110),s(50,"https://openai.com/pricing"),r()()()()}if(i&2){let e=p();v("headerText",e.i18n.t("How to Get a ChatGPT API Key")),o(6),_(e.i18n.t("How to Get a ChatGPT API Key")),o(2),b("\u2705 ",e.i18n.t("Step 1: Create/Open an OpenAI Account")),o(2),b(" ",e.i18n.t("Go to")," "),o(4),b(" ",e.i18n.t("Sign up or log in with your existing OpenAI account")," "),o(2),b("\u2705 ",e.i18n.t("Step 2: Visit the API Keys Section")),o(2),b(" ",e.i18n.t("After logging in, go to:")," "),o(4),b("\u2705 ",e.i18n.t("Step 3: Create a New Secret Key")),o(2),b(" ",e.i18n.t('Click "Create new secret key"')),o(2),b(" ",e.i18n.t("Give it a descriptive name")),o(2),b(" ",e.i18n.t("Copy the key shown \u2014 you won't be able to see it again")," "),o(4),_(e.i18n.t("Keep this key private \u2014 don't share it publicly")),o(2),b("\u{1F4B0} ",e.i18n.t("Pricing Note")),o(2),b(" ",e.i18n.t("OpenAI's API is pay-as-you-go")),o(2),b(" ",e.i18n.t("New accounts may receive free credits; check")," "),o(2),_(e.i18n.t("usage")),o(2),b(" ",e.i18n.t("You'll be charged based on:")," "),o(3),_(e.i18n.t("The model you use affects the price")),o(2),_(e.i18n.t("The number of tokens in each request and response")),o(),b(" ",e.i18n.t("More information:")," ")}}var Kr=(()=>{class i{toggleMorePreferences(){this.showMorePreferences=!this.showMorePreferences}openApiKeyInstructionsModal(){this.showApiKeyInstructionsModal=!0}closeApiKeyInstructionsModal(){this.showApiKeyInstructionsModal=!1}resetTripForm(){this.trip={startLocation:"",destination:"",days:1,travelMode:"",experiences:[],budget:void 0,numberOfTravellers:1,startDate:"",tripType:[],naturePreference:[],culturalInterest:[],activityTypes:[],shoppingInterest:[],nightlifePreference:"",dietPreference:"",fitnessLevel:"",travelCompanionType:"",languageComfort:"",languageComfortOther:"",paceOfTravel:"",placesVisited:"",mustVisit:"",accommodationType:"",eventOccasion:"",connectivityPreference:"",weatherPreference:"",additionalComments:""},this.startLocationControl.setValue(""),this.destinationControl.setValue(""),this.formattedBudget="",this.showMorePreferences=!1}isStartLocationValid(){return!!(this.startLocationControl.value&&this.startLocationControl.value.trim().length>0)}isDestinationValid(){return!!(this.destinationControl.value&&this.destinationControl.value.trim().length>0)}isDaysValid(){return!!(this.trip.days&&this.trip.days>0)}isTravellersValid(){return!!(this.trip.numberOfTravellers&&this.trip.numberOfTravellers>0)}isApiKeyValid(){return!!(this.apiKey&&this.apiKey.trim().length>0)}isFieldFilled(e){return Array.isArray(e)?e.length>0:typeof e=="string"?e.trim().length>0:typeof e=="number"?!isNaN(e)&&e!==null&&e!==void 0&&e!==0:!!e}onCheckboxChange(e,n,t){if(!Array.isArray(this.trip[e]))return;let a=this.trip[e];if(t)a.includes(n)||a.push(n);else{let d=a.indexOf(n);d>-1&&a.splice(d,1)}}constructor(e,n,t){if(this.http=e,this.decimalPipe=n,this.i18n=t,this.portfolioEmbed=!1,this.trip={startLocation:"",destination:"",days:1,travelMode:"",experiences:[],budget:void 0,numberOfTravellers:1,startDate:"",tripType:[],naturePreference:[],culturalInterest:[],activityTypes:[],shoppingInterest:[],nightlifePreference:"",dietPreference:"",fitnessLevel:"",travelCompanionType:"",languageComfort:"",languageComfortOther:"",paceOfTravel:"",placesVisited:"",mustVisit:"",accommodationType:"",eventOccasion:"",connectivityPreference:"",weatherPreference:"",additionalComments:""},this.apiKey="",this.loading=!1,this.error=null,this.itinerary=null,this.saveApiKey=!1,this.formattedBudget="",this.showApiKeyInstructionsModal=!1,this.startLocationControl=new nt(""),this.destinationControl=new nt(""),this.filteredStartLocations=K([]),this.filteredDestinations=K([]),this.experienceOptions=[{label:"Adventure",value:"adventure"},{label:"Relaxation",value:"relaxation"},{label:"Culture & Heritage",value:"culture_heritage"},{label:"Nature & Scenery",value:"nature"},{label:"Food & Culinary",value:"food"},{label:"Luxury & Wellness",value:"luxury_wellness"},{label:"Spiritual & Pilgrimage",value:"spiritual"},{label:"Wildlife & Safari",value:"wildlife"},{label:"Shopping",value:"shopping"},{label:"Romantic & Honeymoon",value:"romantic"},{label:"Water Activities",value:"water_activities"},{label:"Mountains & Trekking",value:"mountains_trekking"},{label:"Offbeat & Hidden Gems",value:"offbeat"},{label:"Festivals & Events",value:"festivals"},{label:"Photography",value:"photography"},{label:"Budget Travel",value:"budget_travel"},{label:"Road Trips",value:"road_trip"},{label:"Nightlife & Entertainment",value:"nightlife"},{label:"Family-friendly",value:"family_friendly"},{label:"Solo Travel",value:"solo_travel"},{label:"Local Experiences",value:"local_experiences"}],this.tripTypeOptions=[{label:"Relaxation",value:"relaxation"},{label:"Adventure",value:"adventure"},{label:"Honeymoon",value:"honeymoon"},{label:"Backpacking",value:"backpacking"},{label:"Luxury",value:"luxury"},{label:"Family Vacation",value:"family"},{label:"Solo Travel",value:"solo"},{label:"Friends Getaway",value:"friends"},{label:"Workation",value:"workation"},{label:"Spiritual Retreat",value:"spiritual_retreat"},{label:"Road Trip",value:"road_trip"},{label:"Cultural Exploration",value:"cultural"},{label:"Wellness Retreat",value:"wellness"},{label:"Eco-Tourism",value:"eco_tourism"},{label:"Cruise Trip",value:"cruise"},{label:"Weekend Getaway",value:"weekend_getaway"},{label:"Festival or Event-based Trip",value:"festival_event"},{label:"Photography Tour",value:"photography_tour"}],this.naturePreferenceOptions=[{label:"Hills & Mountains",value:"hills_mountains"},{label:"Beaches & Coastlines",value:"beaches"},{label:"Forests & Jungles",value:"forest"},{label:"Deserts & Dunes",value:"desert"},{label:"Lakes & Rivers",value:"lakes_rivers"},{label:"Waterfalls",value:"waterfalls"},{label:"Caves & Rock Formations",value:"caves_rocks"},{label:"Volcanoes & Geothermal Areas",value:"volcanoes"},{label:"Valleys & Meadows",value:"valleys_meadows"},{label:"Islands & Archipelagos",value:"islands"},{label:"Snowy Landscapes",value:"snow"},{label:"Countryside & Farmlands",value:"countryside"}],this.culturalInterestOptions=[{label:"Temples & Religious Sites",value:"temples"},{label:"Local Markets & Bazaars",value:"local_markets"},{label:"Museums & Art Galleries",value:"museums"},{label:"Historical Monuments & Forts",value:"historical_sites"},{label:"Traditional Villages & Tribes",value:"traditional_villages"},{label:"Architecture & Heritage Walks",value:"architecture"},{label:"Cultural Performances (Dance, Music, Theatre)",value:"cultural_performances"},{label:"UNESCO World Heritage Sites",value:"unesco_sites"},{label:"Festivals & Local Celebrations",value:"festivals"},{label:"Colonial History & Sites",value:"colonial_history"},{label:"Handicrafts & Artisan Workshops",value:"handicrafts"},{label:"Spiritual Experiences & Rituals",value:"spiritual_culture"},{label:"Local Cuisine & Food Traditions",value:"food_culture"},{label:"Language & Literature",value:"language_literature"}],this.activityTypesOptions=[{label:"Trekking & Hiking",value:"trekking"},{label:"Spa & Wellness",value:"spa"},{label:"Local Food Exploration",value:"local_food"},{label:"Wildlife Safari / Bird Watching",value:"wildlife"},{label:"Boating / Canoeing",value:"boating"},{label:"Scuba Diving / Snorkeling",value:"diving"},{label:"Paragliding / Zip-lining",value:"adventure_sports"},{label:"Cycling / Biking Tours",value:"cycling"},{label:"Camping / Stargazing",value:"camping"},{label:"Hot Air Ballooning",value:"hot_air_balloon"},{label:"Cultural Shows / Folk Performances",value:"cultural_shows"},{label:"Cooking Classes / Food Trails",value:"cooking"},{label:"Temple / Heritage Walks",value:"heritage_walk"},{label:"Shopping Tours / Street Markets",value:"shopping"},{label:"Photography Tours",value:"photography"},{label:"Horse / Camel Riding",value:"animal_rides"},{label:"Ayurveda / Healing Retreats",value:"healing"},{label:"Zip Boat / Shikara Rides",value:"shikara"},{label:"Theme Parks & Entertainment Zones",value:"theme_park"}],this.shoppingInterestOptions=[{label:"Handicrafts & Local Art",value:"handicrafts"},{label:"Fashion & Apparel",value:"fashion"},{label:"Souvenirs & Gifts",value:"souvenirs"},{label:"Jewelry & Accessories",value:"jewelry"},{label:"Street Markets & Bazaars",value:"street_markets"},{label:"Luxury & Designer Brands",value:"luxury_brands"},{label:"Home Decor & Antiques",value:"home_decor"},{label:"Spices & Local Ingredients",value:"spices"},{label:"Tea, Coffee & Beverages",value:"beverages"},{label:"Books & Stationery",value:"books"},{label:"Cosmetics & Skincare",value:"cosmetics"},{label:"Electronic Gadgets & Accessories",value:"electronics"},{label:"Flea Markets & Vintage Finds",value:"flea_market"},{label:"Cultural Collectibles (Masks, Puppets, Textiles)",value:"cultural_collectibles"}],this.nightlifePreferenceOptions=[{label:"Yes",value:"yes"},{label:"No",value:"no"},{label:"Doesn't Matter",value:"doesnt_matter"}],this.dietPreferenceOptions=[{label:"Veg",value:"veg"},{label:"Vegan",value:"vegan"},{label:"Jain",value:"jain"},{label:"Eggetarian",value:"eggetarian"},{label:"Non-Veg",value:"non_veg"}],this.fitnessLevelOptions=[{label:"Light walking",value:"light_walking"},{label:"Moderate",value:"moderate"},{label:"Adventurous",value:"adventurous"}],this.travelCompanionTypeOptions=[{label:"Solo",value:"solo"},{label:"Couple",value:"couple"},{label:"Family",value:"family"},{label:"Friends",value:"friends"}],this.languageComfortOptions=[{label:"Hindi",value:"hindi"},{label:"English",value:"english"},{label:"Regional Indian Languages (e.g., Tamil, Bengali, Kannada)",value:"regional_indian"},{label:"French",value:"french"},{label:"Spanish",value:"spanish"},{label:"German",value:"german"},{label:"Mandarin / Chinese",value:"chinese"},{label:"Arabic",value:"arabic"},{label:"Japanese",value:"japanese"},{label:"Other",value:"other"}],this.paceOfTravelOptions=[{label:"Super Chill (Lots of free time, minimal activities)",value:"super_chill"},{label:"Chill (Slow pace with some light activities)",value:"chill"},{label:"Balanced (Sightseeing + downtime)",value:"balanced"},{label:"Active (Busy days with multiple experiences)",value:"active"},{label:"Packed (Maximize every day with back-to-back plans)",value:"packed"}],this.accommodationTypeOptions=[{label:"Budget Hotel",value:"budget_hotel"},{label:"Mid-range Hotel",value:"midrange_hotel"},{label:"Luxury Hotel / 5-Star",value:"luxury_hotel"},{label:"Resort",value:"resort"},{label:"Boutique Stay / Heritage Property",value:"boutique"},{label:"Airbnb / Vacation Rental",value:"airbnb"},{label:"Hostel / Dormitory",value:"hostel"},{label:"Homestay / Local Family Stay",value:"homestay"},{label:"Treehouse / Eco Stay",value:"eco_stay"},{label:"Camping / Glamping",value:"camping"},{label:"Wellness Retreat / Ashram",value:"retreat"}],this.connectivityPreferenceOptions=[{label:"Completely Remote / No Signal Preferred",value:"remote"},{label:"Basic 4G Connectivity Required",value:"4g_needed"},{label:"High-Speed Wi-Fi (for Work / Streaming)",value:"high_speed_wifi"},{label:"Co-working Friendly (Digital Nomad Setup)",value:"coworking_friendly"},{label:"Doesn't Matter",value:"doesnt_matter"}],this.weatherPreferenceOptions=[{label:"Mild / Pleasant Weather",value:"mild"},{label:"Cool / Cold Weather",value:"cold"},{label:"Warm & Sunny",value:"warm"},{label:"Avoid Rainy Season",value:"avoid_rain"},{label:"Snowy / Winter Wonderland",value:"snow"},{label:"Tropical Climate",value:"tropical"},{label:"Doesn\u2019t Matter",value:"doesnt_matter"}],this.savedItineraries=[],this.selectedTabIndex=0,this.showMorePreferences=!1,this.filteredStartLocations=this.startLocationControl.valueChanges.pipe($(""),we(300),Q(a=>this.searchLocations(a||""))),this.filteredDestinations=this.destinationControl.valueChanges.pipe($(""),we(300),Q(a=>this.searchLocations(a||""))),typeof window<"u"&&window.localStorage){let a=localStorage.getItem("openai_api_key");a&&(this.apiKey=a,this.saveApiKey=!0)}this.loadSavedItineraries()}ngOnInit(){this.trip.budget&&(this.formattedBudget=this.formatNumber(this.trip.budget))}onBudgetInput(e){let n=e.replace(/[^0-9]/g,"");this.trip.budget=n?Number(n):void 0,this.formattedBudget=this.formatNumber(this.trip.budget)}formatNumber(e){return e==null?"":this.decimalPipe.transform(e,"1.0-0")||""}searchLocations(e){return!e||e.length<2?K([]):this.http.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(e)}&count=5&language=${this.i18n.locale()}&format=json`).pipe(De(n=>n.results?.map(t=>[t.name,t.admin1,t.country].filter(Boolean).join(", "))||[]),xt(()=>K([])))}onStartLocationSelected(e){this.trip.startLocation=e}onDestinationSelected(e){this.trip.destination=e}removeApiKey(){this.apiKey="",this.saveApiKey=!1,typeof window<"u"&&window.localStorage&&localStorage.removeItem("openai_api_key")}onSubmit(){if(this.error=null,!this.isApiKeyValid()||!this.isStartLocationValid()||!this.isDestinationValid()||!this.isDaysValid()||!this.isTravellersValid()){this.error=this.i18n.t("Please fill all required fields: OpenAI API Key, Start Location, Destination, Number of Days, and Number of Travellers."),this.loading=!1;return}this.loading=!0,this.itinerary=null,this.trip.startLocation=this.startLocationControl.value||this.trip.startLocation,this.trip.destination=this.destinationControl.value||this.trip.destination,Array.isArray(this.trip.experiences)||(this.trip.experiences=this.trip.experiences?[this.trip.experiences]:[]),typeof window<"u"&&window.localStorage&&(this.saveApiKey&&this.apiKey?localStorage.setItem("openai_api_key",this.apiKey):localStorage.removeItem("openai_api_key"));let e=this.buildPrompt(),n=new Lt({"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`}),t={model:"gpt-3.5-turbo",messages:[{role:"system",content:`${this.i18n.t("You are a helpful travel planner assistant.")} ${this.i18n.t("Respond in")} ${this.i18n.option().nativeLabel}.`},{role:"user",content:e}],max_tokens:4096};this.http.post("https://api.openai.com/v1/chat/completions",t,{headers:n}).subscribe({next:a=>{this.loading=!1;let d=a.choices?.[0]?.message?.content||this.i18n.t("No itinerary generated.");d=this.convertUsdToInr(d),this.itinerary=d,this.saveItinerary(),this.resetTripForm()},error:a=>{this.loading=!1,console.error("Failed to generate itinerary:",a),this.error=this.i18n.t("Failed to generate itinerary. Please check your API key and try again.")}})}buildPrompt(){let e=this.trip,n=Math.max(1,e.days-1),t=(d,m)=>m&&(Array.isArray(m)?m.length:m!=="N/A")?`- **${d}**: ${Array.isArray(m)?m.join(", "):m}`:"",a=(d,m)=>!m||Array.isArray(m)&&m.length===0||typeof m=="string"&&m.trim()===""?"":`- ${d}: ${Array.isArray(m)?m.join(", "):m}`;return`You are an expert travel planner. Write the complete response in ${this.i18n.option().nativeLabel}.
  
  Based on the user's inputs, generate a **realistic and structured travel itinerary in Markdown**.
  
  ---
  
  ## \u{1F4CB} Trip Summary
  
  ${t("From",e.startLocation)}
  ${t("To",e.destination)}
  ${t("Start Date",e.startDate||"Not specified")}
  ${t("Duration",`${e.days} days / ${n} nights`)}
  ${t("Travellers",e.numberOfTravellers)}
  ${t("Budget",`\u20B9${e.budget??"Not specified"}`)}
  
  ---
  
  ## \u2728 Preferences
  
  ${a("Trip Type",e.tripType)}
  ${a("Nature",e.naturePreference)}
  ${a("Culture",e.culturalInterest)}
  ${a("Activities",e.activityTypes)}
  ${a("Shopping",e.shoppingInterest)}
  ${a("Diet",e.dietPreference)}
  ${a("Fitness Level",e.fitnessLevel)}
  ${a("Companion",e.travelCompanionType)}
  ${a("Language",e.languageComfort==="other"?e.languageComfortOther:e.languageComfort)}
  ${a("Travel Pace",e.paceOfTravel)}
  ${a("Accommodation",e.accommodationType)}
  ${a("Special Occasion",e.eventOccasion)}
  ${a("Connectivity",e.connectivityPreference)}
  ${a("Weather Preference",e.weatherPreference)}
  ${a("Must Visit",e.mustVisit)}
  ${a("Already Visited",e.placesVisited)}
  ${a("Notes",e.additionalComments)}
  
  ---
  
  ## \u{1F697} Travel Mode
  
  Describe the best travel option from ${e.startLocation} to ${e.destination}, with:
  - Approximate travel time
  - Preferred mode: ${e.travelMode}
  - Any tips (like permits, time to avoid, or scenic routes)
  - Alternative travel options, if applicable
  
  ---
  
  ## \u{1F3E8} Stay Options
  
  Suggest **1 or 2 well-rated stay options** in ${e.destination} based on the accommodation type (${e.accommodationType}).
  The stay should be consistent for all days.
  
  Example:
  - [Hotel ABC](https://...) \u2013 Mid-range resort with great views
  - [XYZ Homestay](https://...) \u2013 Budget stay close to the city center
  
  ---
  
  ## \u{1F37D}\uFE0F Restaurant Options
  
  Suggest 3\u20135 local restaurants based on:
  - Local cuisine
  - Dietary preference: ${e.dietPreference}
  - Unique dining experiences
  
  ---
  
  ## \u{1F3DE}\uFE0F Sightseeing Options
  
  List the top attractions and things to do in ${e.destination}.
  Include famous landmarks, cultural or nature experiences, and any **must-visit**: ${e.mustVisit||"N/A"}.
  
  ---
  
  ## \u{1F4C5} Day-wise Itinerary
  
  Each day starts with:
  
  \`\`\`
  ### Day 1: Title
  \`\`\`
  
  Then follow this format:
  - \u{1F305} Morning: Activity
  - \u{1F37D}\uFE0F Lunch at [place](https://...)
  - \u{1F307} Afternoon: Activity
  - \u{1F303} Evening: Activity or relaxation
  - \u{1F6CF}\uFE0F Return to same stay option
  
  ---
  
  ## \u{1F4B0} Cost of the Trip
  
  | Category      | Unit Cost | Quantity                            | Total Cost |
  |---------------|-----------|--------------------------------------|------------|
  | Accommodation | \u20B94,000    | ${n} nights \xD7 ${e.numberOfTravellers} people | \u20B9xx,xxx     |
  | Meals         | \u20B9600      | 3\xD7${e.days}\xD7${e.numberOfTravellers} | \u20B9xx,xxx     |
  | Transport     | \u20B9xx,xxx   | Round-trip \xD7 ${e.numberOfTravellers} | \u20B9xx,xxx     |
  | Activities    | \u20B9x,xxx    | Entry fees & local experiences       | \u20B9xx,xxx     |
  | **Total**     |           |                                      | \u20B9xx,xxx     |
  
  \`\`\`
  **Estimated Total Cost (for ${e.numberOfTravellers} ${e.numberOfTravellers>1?"travelers":"traveler"}): \u20B9xx,xxx**
  \`\`\`
  
  Mention whether this is per person or for all travelers.
  
  ---
  
  ## \u{1F4A1} Travel Tips & Recommendations
  
  - \u{1F4F1} Mobile connectivity or SIM options
  - \u{1F9F4} Essentials: sunscreen, water bottles, repellents
  - \u{1F35B} Local food to try
  - \u{1F9E5} Clothing based on weather
  - \u{1F4F8} Best photo spots
  - \u{1F5D3}\uFE0F Things to avoid (e.g., local holidays, closures)
  
  ---
  
  Return a beautiful, structured Markdown output.`}convertUsdToInr(e){let n=t=>Math.round(t*83);return e.replace(/\$([0-9]+(\.[0-9]+)?)/g,(t,a)=>{let d=parseFloat(a);return isNaN(d)?t:`\u20B9${n(d).toLocaleString("en-IN")}`})}saveItinerary(){if(!this.itinerary)return;let e={id:Date.now().toString(),trip:gt({},this.trip),itinerary:this.itinerary,createdAt:Date.now()};this.savedItineraries=[...this.savedItineraries,e],this.persistItineraries(),this.selectedTabIndex=this.savedItineraries.length}removeItinerary(e){this.savedItineraries=this.savedItineraries.filter(n=>n.id!==e),this.persistItineraries(),this.selectedTabIndex>this.savedItineraries.length&&(this.selectedTabIndex=this.savedItineraries.length)}persistItineraries(){typeof window<"u"&&window.localStorage&&localStorage.setItem("trip_itineraries",JSON.stringify(this.savedItineraries))}loadSavedItineraries(){if(typeof window<"u"&&window.localStorage){let e=localStorage.getItem("trip_itineraries");e&&(this.savedItineraries=JSON.parse(e))}}static{this.\u0275fac=function(n){return new(n||i)(pe(Rt),pe(We),pe(ze))}}static{this.\u0275cmp=F({type:i,selectors:[["app-trip-planner"]],inputs:{portfolioEmbed:"portfolioEmbed"},features:[j([We])],decls:138,vars:79,consts:[["tripForm","ngForm"],["autoStart","matAutocomplete"],["autoDest","matAutocomplete"],["cb",""],[1,"trip-planner-shell","h-[calc(100dvh-90px)]","bg-white"],[1,"trip-planner-frame","h-full","px-2","py-1","flex","flex-col","sm:px-4","md:px-6"],[1,"trip-planner-tabs","bg-gradient-to-br","from-primary-50","via-white","to-primary-100/80","rounded-xl","mt-2",3,"selectedIndexChange","selectedIndex"],["mat-tab-label",""],[1,"trip-planner-content","w-full","mx-auto","p-4","bg-gradient-to-br","from-primary-50","via-white","px-2","sm:px-4"],[1,"mb-4","text-xl","font-bold","text-primary-800","sm:text-2xl"],[1,"trip-planner-form",3,"ngSubmit"],[1,"trip-planner-fields","space-y-6","!h-[calc(100dvh-21.5rem)]","overflow-y-auto"],[1,"api-key-heading","mb-2","flex","items-center","justify-between","gap-3"],["for","trip-api-key",1,"flex","items-center","font-medium","text-primary-700","text-sm","sm:text-base"],[1,"ml-1"],[1,"text-red-600","ml-1"],["icon","lightbulb",1,"api-key-help","text-xs",3,"onButtonClickEvent","buttonName"],["id","trip-api-key","type","password","name","apiKey","required","",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],[1,"api-key-actions","flex","flex-col","sm:flex-row","items-start","sm:items-center","mt-2","justify-between","border-x-2","bg-green-500/10","border-solid","border-green-500","rounded","p-2","gap-2"],[1,"flex","items-center"],["type","checkbox","id","saveApiKey","name","saveApiKey",1,"mr-2","accent-primary-600",3,"ngModelChange","ngModel"],["for","saveApiKey",1,"text-primary-700","text-xs","sm:text-sm"],["icon","trash",1,"text-xs",3,"onButtonClickEvent","buttonName"],[1,"text-green-900","block","mt-1","text-xs","sm:text-sm"],["name","info","aria-hidden","true",1,"mr-1","text-green-500"],[1,"font-bold","text-green-700","text-sm","sm:text-base"],[1,"grid","grid-cols-1","gap-4","sm:grid-cols-2","sm:gap-6"],[1,"block","font-medium","text-primary-700","mb-2","flex","items-center","gap-2","text-sm","sm:text-base"],["type","text","matInput","",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"placeholder","formControl","matAutocomplete"],[3,"optionSelected"],[3,"value"],["type","number","name","days","min","1","required","",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["type","date","name","startDate","required","",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["type","number","name","numberOfTravellers","min","1","required","",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["name","travelMode","required","",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["value","",1,"text-gray-400"],["value","suggest"],["value","car"],["value","train"],["value","flight"],["value","bus"],["value","other"],["name","experiences","required","",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["value","adventure"],["value","relaxation"],["value","culture"],["value","nature"],["value","food"],[1,"relative"],[1,"absolute","left-3","top-1/2","-translate-y-1/2","text-primary-700","font-semibold","text-sm","sm:text-base"],["type","text","name","budget","placeholder","0","autocomplete","off",1,"w-full","pl-12","sm:pl-14","pr-4","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],[1,"trip-planner-submit"],[1,"my-4"],[1,"text-sm",3,"onButtonClickEvent","icon","buttonName"],[1,"flex","items-center","gap-2","mt-4","px-2","text-primary-700","text-xs","sm:text-sm"],["name","info",1,"text-primary-500"],[1,"text-base","sm:text-lg","font-semibold","text-primary-700","py-2","mt-2","flex"],[1,"trip-planner-footer"],["type","submit",1,"w-full","px-4","py-3","rounded-2xl","transition-colors","duration-200","text-white","text-base","sm:text-lg","font-medium","hover:bg-primary-700","bg-primary-500","disabled:bg-gray-300","disabled:text-gray-400","disabled:cursor-not-allowed",3,"disabled"],["name","list",1,"text-white","mr-2"],[1,"mt-4","text-primary-700","text-sm","sm:text-base"],[1,"mt-4","text-primary-600","text-sm","sm:text-base"],[1,"fixed","inset-0","z-50","flex","items-center","justify-center","bg-white","bg-opacity-60"],[3,"headerText"],[1,"text-gray-700","font-bold","text-sm","sm:text-base"],["name","pencil",1,"text-gray-700","mr-1"],["name","send",1,"mr-2","text-primary-700"],["name","check",1,"text-green-600"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-x-4","gap-y-2"],[1,"flex","items-center","text-sm","sm:text-base"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-4","sm:gap-6"],["name","nightlifePreference",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["name","dietPreference",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["name","fitnessLevel",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["name","travelCompanionType",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["name","languageComfort",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["type","text","name","languageComfortOther",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500","mt-2",3,"ngModel","placeholder"],["name","paceOfTravel",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["name","accommodationType",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["name","connectivityPreference",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],["name","weatherPreference",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel"],[1,"space-y-4"],["name","placesVisited","rows","2",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel","placeholder"],["name","mustVisit","rows","2",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel","placeholder"],["type","text","name","eventOccasion",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel","placeholder"],["name","additionalComments","rows","2",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500",3,"ngModelChange","ngModel","placeholder"],["type","checkbox",1,"mr-2","accent-primary-600",3,"change","checked","name"],["type","text","name","languageComfortOther",1,"w-full","px-3","py-2","text-base","sm:text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-gray-400","focus:outline-none","focus:ring-1","focus:ring-primary-500","mt-2",3,"ngModelChange","ngModel","placeholder"],[1,"text-xs","sm:text-sm"],[1,"!h-[calc(100dvh-12rem)]","bg-white"],[3,"delete","savedItinerary"],[1,"text-primary-900","flex","items-center","text-xs","sm:text-sm"],["name","route","aria-hidden","true",1,"fas","text-primary-900","mr-1","sm:mr-2"],[1,"text-primary-900","hidden","sm:inline"],[1,"text-primary-900","sm:hidden"],[1,"bg-primary-50","rounded-lg","shadow-lg","p-4","sm:p-8","flex","flex-col","items-center","max-w-sm","mx-4"],[1,"text-lg","sm:text-2xl","mb-2","text-primary-800","text-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24",1,"animate-spin","h-6","w-6","sm:h-8","sm:w-8","text-primary-600"],["cx","12","cy","12","r","10","stroke","currentColor","stroke-width","4",1,"opacity-25"],["fill","currentColor","d","M4 12a8 8 0 018-8v8z",1,"opacity-75"],[3,"onCancel","headerText"],[1,"space-y-2","text-primary-900","text-sm","sm:text-base"],[1,"flex","items-center","gap-2","text-base","sm:text-lg","font-semibold"],[1,"font-semibold","text-green-700"],["href","https://platform.openai.com","target","_blank","rel","noopener noreferrer",1,"text-primary-700","underline"],["href","https://platform.openai.com/account/api-keys","target","_blank","rel","noopener noreferrer",1,"text-primary-700","underline"],[1,"text-yellow-700","font-semibold","flex","items-center","gap-2"],[1,"font-semibold","text-blue-700"],["href","https://platform.openai.com/account/usage","target","_blank","rel","noopener noreferrer",1,"text-primary-700","underline"],[1,"list-disc","ml-4","sm:ml-6"],["href","https://openai.com/pricing","target","_blank","rel","noopener noreferrer",1,"text-primary-700","underline"]],template:function(n,t){if(n&1){let a=V();l(0,"div",4)(1,"div",5)(2,"mat-tab-group",6),E("selectedIndexChange",function(m){return y(a),M(t.selectedTabIndex,m)||(t.selectedTabIndex=m),x(m)}),l(3,"mat-tab"),ue(4,Hi,3,1,"ng-template",7),l(5,"div",8),g(6,zi,3,1,"h2",9),l(7,"form",10,0),w("ngSubmit",function(){return t.onSubmit()}),l(9,"div",11)(10,"div")(11,"div",12)(12,"label",13),s(13),g(14,ji,2,0,"span",14),l(15,"span",15),s(16,"*"),r()(),l(17,"app-custom-button",16),w("onButtonClickEvent",function(){return t.openApiKeyInstructionsModal()}),r()(),l(18,"input",17),E("ngModelChange",function(m){return y(a),M(t.apiKey,m)||(t.apiKey=m),x(m)}),r(),T(),l(19,"div",18)(20,"div",19)(21,"input",20),E("ngModelChange",function(m){return y(a),M(t.saveApiKey,m)||(t.saveApiKey=m),x(m)}),r(),T(),l(22,"label",21),s(23),r()(),l(24,"app-custom-button",22),w("onButtonClickEvent",function(){return t.removeApiKey()}),r()(),l(25,"small",23),h(26,"app-icon",24),s(27),l(28,"span",25),s(29),r(),s(30),r()(),l(31,"div",26)(32,"div")(33,"label",27),s(34),g(35,Ki,2,0,"span",14),l(36,"span",15),s(37,"*"),r()(),h(38,"input",28),T(),l(39,"mat-autocomplete",29,1),w("optionSelected",function(m){return t.onStartLocationSelected(m.option.value)}),A(41,Gi,2,2,"mat-option",30,O),Je(43,"async"),r()(),l(44,"div")(45,"label",27),s(46),g(47,$i,2,0,"span",14),l(48,"span",15),s(49,"*"),r()(),h(50,"input",28),T(),l(51,"mat-autocomplete",29,2),w("optionSelected",function(m){return t.onDestinationSelected(m.option.value)}),A(53,Qi,2,2,"mat-option",30,O),Je(55,"async"),r()(),l(56,"div")(57,"label",27),s(58),g(59,qi,2,0,"span",14),l(60,"span",15),s(61,"*"),r()(),l(62,"input",31),E("ngModelChange",function(m){return y(a),M(t.trip.days,m)||(t.trip.days=m),x(m)}),r(),T(),r(),l(63,"div")(64,"label",27),s(65),g(66,Yi,2,0,"span",14),r(),l(67,"input",32),E("ngModelChange",function(m){return y(a),M(t.trip.startDate,m)||(t.trip.startDate=m),x(m)}),r(),T(),r(),l(68,"div")(69,"label",27),s(70),g(71,Ui,2,0,"span",14),r(),l(72,"input",33),E("ngModelChange",function(m){return y(a),M(t.trip.numberOfTravellers,m)||(t.trip.numberOfTravellers=m),x(m)}),r(),T(),r(),l(73,"div")(74,"label",27),s(75),g(76,Zi,2,0,"span",14),r(),l(77,"select",34),E("ngModelChange",function(m){return y(a),M(t.trip.travelMode,m)||(t.trip.travelMode=m),x(m)}),l(78,"option",35),s(79),r(),l(80,"option",36),s(81),r(),l(82,"option",37),s(83),r(),l(84,"option",38),s(85),r(),l(86,"option",39),s(87),r(),l(88,"option",40),s(89),r(),l(90,"option",41),s(91),r()(),T(),r(),l(92,"div")(93,"label",27),s(94),g(95,Xi,2,0,"span",14),r(),l(96,"select",42),E("ngModelChange",function(m){return y(a),M(t.trip.experiences,m)||(t.trip.experiences=m),x(m)}),l(97,"option",35),s(98),r(),l(99,"option",43),s(100),r(),l(101,"option",44),s(102),r(),l(103,"option",45),s(104),r(),l(105,"option",46),s(106),r(),l(107,"option",47),s(108),r(),l(109,"option",41),s(110),r()(),T(),r(),l(111,"div")(112,"label",27),s(113),g(114,Ji,2,0,"span",14),r(),l(115,"div",48)(116,"span",49),s(117,"INR"),r(),l(118,"input",50),w("ngModelChange",function(m){return t.onBudgetInput(m)}),r(),T(),r()()(),l(119,"div",51),h(120,"hr",52),l(121,"app-custom-button",53),w("onButtonClickEvent",function(){return t.toggleMorePreferences()}),r(),l(122,"div",54),h(123,"app-icon",55),l(124,"span"),s(125),r()(),g(126,ea,2,1,"span",56),r(),g(127,La,139,76),r(),l(128,"div",57)(129,"button",58),h(130,"app-icon",59),s(131),r()()(),g(132,Ra,7,3,"div",60),g(133,Ba,2,1,"div",61),r()(),A(134,Va,4,1,"mat-tab",null,O),r()()(),g(136,Na,7,1,"div",62),g(137,Wa,51,20,"app-modal-holder",63)}if(n&2){let a=he(40),d=he(52);B("portfolio-embed",t.portfolioEmbed),o(2),P("selectedIndex",t.selectedTabIndex),o(4),f(t.portfolioEmbed?-1:6),o(7),b(" ",t.i18n.t("OpenAI API Key")," "),o(),f(t.isFieldFilled(t.apiKey)?14:-1),o(3),v("buttonName",t.i18n.t("How to get an API Key?")),o(),P("ngModel",t.apiKey),k(),o(3),P("ngModel",t.saveApiKey),k(),o(2),_(t.i18n.t("Save API key for future use (stored in your browser)")),o(),v("buttonName",t.i18n.t("Remove API Key")),o(3),b("",t.i18n.t("Your API key is")," "),o(2),_(t.i18n.t("never sent to any server")),o(),b(" ",t.i18n.t("except OpenAI. For your privacy, clear the field after use if you do not wish to save it.")),o(4),b(" ",t.i18n.t("Start Location")," "),o(),f(t.isFieldFilled(t.startLocationControl.value)?35:-1),o(3),v("placeholder",t.i18n.t("Start Location"))("formControl",t.startLocationControl)("matAutocomplete",a),C("aria-label",t.i18n.t("Start location")),k(),o(3),D(et(43,75,t.filteredStartLocations)),o(5),b(" ",t.i18n.t("Select Destination")," "),o(),f(t.isFieldFilled(t.destinationControl.value)?47:-1),o(3),v("placeholder",t.i18n.t("Destination"))("formControl",t.destinationControl)("matAutocomplete",d),C("aria-label",t.i18n.t("Destination")),k(),o(3),D(et(55,77,t.filteredDestinations)),o(5),b(" ",t.i18n.t("Number of Days")," "),o(),f(t.isFieldFilled(t.trip.days)?59:-1),o(3),P("ngModel",t.trip.days),C("aria-label",t.i18n.t("Number of days")),k(),o(3),b(" ",t.i18n.t("Trip Start Date")," "),o(),f(t.isFieldFilled(t.trip.startDate)?66:-1),o(),P("ngModel",t.trip.startDate),C("aria-label",t.i18n.t("Trip start date")),k(),o(3),b(" ",t.i18n.t("Number of Travellers")," "),o(),f(t.isFieldFilled(t.trip.numberOfTravellers)?71:-1),o(),P("ngModel",t.trip.numberOfTravellers),C("aria-label",t.i18n.t("Number of travellers")),k(),o(3),b(" ",t.i18n.t("Travel Mode")," "),o(),f(t.isFieldFilled(t.trip.travelMode)?76:-1),o(),P("ngModel",t.trip.travelMode),C("aria-label",t.i18n.t("Travel mode")),k(),o(2),_(t.i18n.t("Select...")),o(2),_(t.i18n.t("Suggest Best Way")),o(2),_(t.i18n.t("Car")),o(2),_(t.i18n.t("Train")),o(2),_(t.i18n.t("Flight")),o(2),_(t.i18n.t("Bus")),o(2),_(t.i18n.t("Other")),o(3),b(" ",t.i18n.t("Type of Experiences")," "),o(),f(t.isFieldFilled(t.trip.experiences)?95:-1),o(),P("ngModel",t.trip.experiences),C("aria-label",t.i18n.t("Type of experiences")),k(),o(2),_(t.i18n.t("Select...")),o(2),_(t.i18n.t("Adventure")),o(2),_(t.i18n.t("Relaxation")),o(2),_(t.i18n.t("Culture")),o(2),_(t.i18n.t("Nature")),o(2),_(t.i18n.t("Food")),o(2),_(t.i18n.t("Other")),o(3),b(" ",t.i18n.t("Estimated Budget (optional)")," "),o(),f(t.isFieldFilled(t.trip.budget)?114:-1),o(4),v("ngModel",t.formattedBudget),C("aria-label",t.i18n.t("Estimated budget in Indian rupees")),k(),o(3),v("icon",t.showMorePreferences?"minus":"plus")("buttonName",t.i18n.t(t.showMorePreferences?"Hide preferences":"Add more preferences")),o(4),_(t.i18n.t("Add more preferences for a more personalised itinerary.")),o(),f(t.showMorePreferences?126:-1),o(),f(t.showMorePreferences?127:-1),o(2),v("disabled",!t.isApiKeyValid()||!t.isStartLocationValid()||!t.isDestinationValid()||!t.isDaysValid()||!t.isTravellersValid()),o(2),b(" ",t.i18n.t("Generate Itinerary")," "),o(),f(t.error?132:-1),o(),f(t.loading?133:-1),o(),D(t.savedItineraries),o(2),f(t.loading?136:-1),o(),f(t.showApiKeyInstructionsModal?137:-1)}},dependencies:[He,gn,mn,hn,_n,an,pn,nn,bn,ln,sn,rn,on,cn,dn,fn,un,Gn,ht,_t,Kn,Qe,Bt,$e,vn,Bn,Rn,ve,st,Tn,wn,Fn,Dt],styles:["@media(max-width:640px){.trip-planner-container[_ngcontent-%COMP%]{padding:.5rem}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{min-height:44px}.space-y-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-top:1.25rem}input[type=checkbox][_ngcontent-%COMP%]{min-width:20px;min-height:20px}button[_ngcontent-%COMP%]{min-height:48px}}.portfolio-embed[_ngcontent-%COMP%]{height:100%;min-height:0;overflow:hidden}.portfolio-embed[_ngcontent-%COMP%]   .trip-planner-frame[_ngcontent-%COMP%], .portfolio-embed[_ngcontent-%COMP%]   .trip-planner-tabs[_ngcontent-%COMP%], .portfolio-embed[_ngcontent-%COMP%]   .trip-planner-content[_ngcontent-%COMP%], .portfolio-embed[_ngcontent-%COMP%]   .trip-planner-form[_ngcontent-%COMP%]{min-height:0}.portfolio-embed[_ngcontent-%COMP%]   .trip-planner-tabs[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;margin-top:0}.portfolio-embed[_ngcontent-%COMP%]   .trip-planner-content[_ngcontent-%COMP%], .portfolio-embed[_ngcontent-%COMP%]   .trip-planner-form[_ngcontent-%COMP%]{display:flex;height:100%;flex:1;flex-direction:column;overflow:hidden}.portfolio-embed[_ngcontent-%COMP%]   .trip-planner-fields[_ngcontent-%COMP%]{height:auto!important;min-height:0;flex:1;overflow-y:auto;overscroll-behavior:contain;padding:.25rem .25rem 1rem;scrollbar-gutter:stable}.portfolio-embed[_ngcontent-%COMP%]   .trip-planner-submit[_ngcontent-%COMP%]{padding-top:.75rem}.portfolio-embed[_ngcontent-%COMP%]   .trip-planner-footer[_ngcontent-%COMP%]{position:relative;z-index:4;flex:none;border-top:1px solid color-mix(in srgb,var(--app-border) 78%,transparent);padding:.75rem .25rem .25rem;background:color-mix(in srgb,var(--project-panel-solid) 94%,transparent);box-shadow:0 -.75rem 1.5rem color-mix(in srgb,var(--project-canvas) 70%,transparent)}.portfolio-embed[_ngcontent-%COMP%]   .trip-planner-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:3.25rem;margin-top:0}.portfolio-embed[_ngcontent-%COMP%]   .api-key-heading[_ngcontent-%COMP%], .portfolio-embed[_ngcontent-%COMP%]   .api-key-actions[_ngcontent-%COMP%]{min-height:3rem}.portfolio-embed[_ngcontent-%COMP%]   .api-key-help[_ngcontent-%COMP%], .portfolio-embed[_ngcontent-%COMP%]   .api-key-actions[_ngcontent-%COMP%]   app-custom-button[_ngcontent-%COMP%]{display:inline-flex;flex:none}.portfolio-embed[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper, .portfolio-embed[_ngcontent-%COMP%]     .mat-mdc-tab-body, .portfolio-embed[_ngcontent-%COMP%]     .mat-mdc-tab-body-content{min-height:0;flex:1}.portfolio-embed[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper, .portfolio-embed[_ngcontent-%COMP%]     .mat-mdc-tab-body-content{overflow:hidden!important}@media(max-width:640px){.portfolio-embed[_ngcontent-%COMP%]   .api-key-heading[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}.portfolio-embed[_ngcontent-%COMP%]   .api-key-help[_ngcontent-%COMP%]{width:100%}.portfolio-embed[_ngcontent-%COMP%]   .api-key-help[_ngcontent-%COMP%]    >div, .portfolio-embed[_ngcontent-%COMP%]   .api-key-actions[_ngcontent-%COMP%]   app-custom-button[_ngcontent-%COMP%], .portfolio-embed[_ngcontent-%COMP%]   .api-key-actions[_ngcontent-%COMP%]   app-custom-button[_ngcontent-%COMP%]    >button{width:100%;justify-content:center}}  .mat-mdc-tab-group .mdc-tab-indicator__content--underline{border-color:#00000036!important}@media(max-width:640px){  .mat-mdc-tab-group .mdc-tab{min-width:auto;padding:0 8px}  .mat-mdc-tab-group .mdc-tab__text-label{font-size:.875rem}}@media(max-width:640px){input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{outline:none;border-color:#2563eb;box-shadow:0 0 0 3px #2563eb1a}}@media(max-width:640px){.modal-content[_ngcontent-%COMP%]{margin:1rem;max-width:calc(100vw - 2rem)}}"],changeDetection:1})}}return i})();export{Kr as TripPlannerComponent};
