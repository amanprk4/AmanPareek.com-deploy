import{a as te,b as je,c as Ve,e as Ge,g as He,i as We,j as Ue,k as $e,l as Qe}from"./chunk-F6XFB6CU.js";import{A as Nt,c as Ft,i as Rt,m as Lt,w as Bt,y as zt}from"./chunk-JQH7CCPS.js";import{c as Jt,d as It,e as Pe,h as Xt,i as Fe,j as Re,l as J,m as X,n as St,p as Le,q as Be,r as ze,t as Ot,u as Ne,v as Pt,x as B}from"./chunk-VJYNZ4BJ.js";import"./chunk-5KXIPVCR.js";import{a as Te,d as At,e as Ee,f as Tt,h as Kt,j as Et,l as Me,s as Ie,t as Se,v as Oe,w as Mt,z as K}from"./chunk-DHFO47BQ.js";import{$a as vt,Aa as mt,B as ot,Cb as Ce,Ea as v,Fa as x,Fb as Dt,Ga as C,Hb as q,I as V,Ia as ut,Ib as we,J as D,Ja as pt,Ka as bt,L as s,La as f,Ma as d,N as k,Na as l,O as A,Oa as qt,Pa as ft,Pb as De,Q as w,Qa as ht,R as it,Ra as gt,T as rt,Ta as P,Tb as ke,U as G,Ua as Yt,Ub as kt,V as de,Va as b,Vb as Ae,X as me,Xa as u,Ya as Zt,Za as U,aa as ue,ab as _t,ba as st,bb as yt,c as S,ca as H,da as R,e as Qt,gb as ge,hb as M,ib as $,ja as pe,jb as p,ka as r,kb as L,la as be,lb as _,m as at,ma as fe,mb as Q,mc as Y,na as lt,oa as ct,ob as ve,p as ce,pa as dt,pb as xt,q as Z,qa as h,qb as Ct,rb as wt,u as j,ua as g,va as W,vb as _e,wa as O,wb as ye,ya as he,yb as xe,za as E}from"./chunk-G3ROJ6QL.js";import{a as T,b as le}from"./chunk-WFIHWVQO.js";var fn={capture:!0},hn=["focus","mousedown","mouseenter","touchstart"],ee="mat-ripple-loader-uninitialized",ne="mat-ripple-loader-class-name",qe="mat-ripple-loader-centered",jt="mat-ripple-loader-disabled",Ye=(()=>{class a{_document=s(it);_animationsDisabled=B();_globalRippleOptions=s(Ve,{optional:!0});_platform=s(Tt);_ngZone=s(G);_injector=s(w);_eventCleanups;_hosts=new Map;constructor(){let t=s(fe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>hn.map(e=>t.listen(this._document,e,this._onInteraction,fn)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(ee,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(ne))&&t.setAttribute(ne,e.className||""),e.centered&&t.setAttribute(qe,""),e.disabled&&t.setAttribute(jt,"")}setDisabled(t,e){let n=this._hosts.get(t);n?(n.target.rippleDisabled=e,!e&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(t))):e?t.setAttribute(jt,""):t.removeAttribute(jt)}_onInteraction=t=>{let e=Ee(t);if(e instanceof HTMLElement){let n=e.closest(`[${ee}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(ne)),t.append(e);let n=this._globalRippleOptions,o=this._animationsDisabled?0:n?.animation?.enterDuration??te.enterDuration,c=this._animationsDisabled?0:n?.animation?.exitDuration??te.exitDuration,m={rippleDisabled:this._animationsDisabled||n?.disabled||t.hasAttribute(jt),rippleConfig:{centered:t.hasAttribute(qe),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:c}}},y=new je(m,this._ngZone,e,this._platform,this._injector),N=!m.rippleDisabled;N&&y.setupTriggerEvents(t),this._hosts.set(t,{target:m,renderer:y,hasSetUpEvents:N}),t.removeAttribute(ee)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||a)};static \u0275prov=H({token:a,factory:a.\u0275fac})}return a})();var gn=new D("MAT_BUTTON_CONFIG");function Ze(a){return a==null?void 0:we(a)}var Ke=(()=>{class a{_elementRef=s(R);_ngZone=s(G);_animationsDisabled=B();_config=s(gn,{optional:!0});_focusMonitor=s(Et);_cleanupClick;_renderer=s(lt);_rippleLoader=s(Ye);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Ce(!1,{transform:q});constructor(){s(Me).load(Ge);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||a)};static \u0275dir=O({type:a,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(e,n){e&2&&(v("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled())("tabindex",n._getTabIndex()),$(n.color?"mat-"+n.color:""),M("mat-mdc-button-progress-indicator-shown",n.showProgress())("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("mat-unthemed",!n.color)("_mat-animation-noopable",n._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",q],disabled:[2,"disabled","disabled",q],ariaDisabled:[2,"aria-disabled","ariaDisabled",q],disabledInteractive:[2,"disabledInteractive","disabledInteractive",q],tabIndex:[2,"tabIndex","tabIndex",Ze],_tabindex:[2,"tabindex","_tabindex",Ze],showProgress:[1,"showProgress"]}})}return a})();var vn=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],_n=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function yn(a,i){a&1&&(ft(0,"div",2),U(1,3),ht())}var Je=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Xe=(()=>{class a extends Ke{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=xn(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,n=this._appearance?Je.get(this._appearance):null,o=Je.get(t);n&&e.remove(...n),e.add(...o),this._appearance=t}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[E],ngContentSelectors:_n,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,n){e&1&&(Zt(vn),gt(0,"span",0),U(1),ft(2,"span",1),U(3,1),ht(),U(4,2),x(5,yn,2,0,"div",2),gt(6,"span",3)(7,"span",4)),e&2&&(M("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab),r(5),C(n.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return a})();function xn(a){return a.hasAttribute("mat-raised-button")?"elevated":a.hasAttribute("mat-stroked-button")?"outlined":a.hasAttribute("mat-flat-button")?"filled":a.hasAttribute("mat-button")?"text":null}var tn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=W({type:a});static \u0275inj=V({imports:[Ue,It]})}return a})();function wn(a,i){}var F=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var oe=(()=>{class a extends Re{_elementRef=s(R);_focusTrapFactory=s(Se);_config;_interactivityChecker=s(Ie);_ngZone=s(G);_focusMonitor=s(Et);_renderer=s(lt);_changeDetectorRef=s(Dt);_injector=s(w);_platform=s(Tt);_document=s(it);_portalOutlet;_focusTrapped=new S;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(F,{optional:!0})||new F,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),c(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",n),c=this._renderer.listen(t,"mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_trapFocus(t){this._isDestroyed||pe(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let n=At(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=At();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=At()))}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["cdk-dialog-container"]],viewQuery:function(e,n){if(e&1&&vt(J,7),e&2){let o;_t(o=yt())&&(n._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,n){e&2&&v("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[E],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,n){e&1&&mt(0,wn,0,0,"ng-template",0)},dependencies:[J],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return a})(),tt=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new S;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,t){this.overlayRef=i,this.config=t,this.disableClose=t.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Mt(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(i,t){if(this._canClose(i)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(i),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",t=""){return this.overlayRef.updateSize({width:i,height:t}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(i,t,this.componentInstance))}},Dn=new D("DialogScrollStrategy",{providedIn:"root",factory:()=>{let a=s(w);return()=>St(a)}}),kn=new D("DialogData"),An=new D("DefaultDialogConfig");function Tn(a){let i=de(a),t=new rt;return{valueSignal:i,get value(){return i()},change:t,ngOnDestroy(){t.complete()}}}var ie=(()=>{class a{_injector=s(w);_defaultOptions=s(An,{optional:!0});_parentDialog=s(a,{optional:!0,skipSelf:!0});_overlayContainer=s(Be);_idGenerator=s(K);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;_ariaHiddenElements=new Map;_scrollStrategy=s(Dn);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=at(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ot(void 0)));open(t,e){let n=this._defaultOptions||new F;e=T(T({},n),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let o=this._getOverlayConfig(e),c=Ne(this._injector,o),m=new tt(c,e),y=this._attachContainer(c,m,e);if(m.containerInstance=y,!this.openDialogs.length){let N=this._overlayContainer.getContainerElement();y._focusTrapped?y._focusTrapped.pipe(j(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(N)}):this._hideNonDialogContentFromAssistiveTechnology(N)}return this._attachDialogContent(t,m,y,e),this.openDialogs.push(m),m.closed.subscribe(()=>this._removeOpenDialog(m,!0)),this.afterOpened.next(m),m}closeAll(){ae(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){ae(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),ae(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Le({positionStrategy:t.positionStrategy||Ot().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,n){let o=n.injector||n.viewContainerRef?.injector,c=[{provide:F,useValue:n},{provide:tt,useValue:e},{provide:ze,useValue:t}],m;n.container?typeof n.container=="function"?m=n.container:(m=n.container.type,c.push(...n.container.providers(n))):m=oe;let y=new Xt(m,n.viewContainerRef,w.create({parent:o||this._injector,providers:c}));return t.attach(y).instance}_attachDialogContent(t,e,n,o){if(t instanceof be){let c=this._createInjector(o,e,n,void 0),m={$implicit:o.data,dialogRef:e};o.templateContext&&(m=T(T({},m),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),n.attachTemplatePortal(new Fe(t,null,m,c))}else{let c=this._createInjector(o,e,n,this._injector),m=n.attachComponentPortal(new Xt(t,o.viewContainerRef,c,null,o.bindings));e.componentRef=m,e.componentInstance=m.instance}}_createInjector(t,e,n,o){let c=t.injector||t.viewContainerRef?.injector,m=[{provide:kn,useValue:t.data},{provide:tt,useValue:e}];return t.providers&&(typeof t.providers=="function"?m.push(...t.providers(e,t,n)):m.push(...t.providers)),t.direction&&(!c||!c.get(Jt,null,{optional:!0}))&&m.push({provide:Jt,useValue:Tn(t.direction)}),w.create({parent:c||o,providers:m})}_removeOpenDialog(t,e){let n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,c)=>{o?c.setAttribute("aria-hidden",o):c.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){let o=e[n];o!==t&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||a)};static \u0275prov=H({token:a,factory:a.\u0275fac})}return a})();function ae(a,i){let t=a.length;for(;t--;)i(a[t])}var nn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=W({type:a});static \u0275inj=V({providers:[ie],imports:[Pt,X,Oe,X]})}return a})();function En(a,i){}var Gt=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},re="mdc-dialog--open",an="mdc-dialog--opening",on="mdc-dialog--closing",Mn=150,In=75,Sn=(()=>{class a extends oe{_animationStateChanged=new rt;_animationsEnabled=!B();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?sn(this._config.enterAnimationDuration)??Mn:0;_exitAnimationDuration=this._animationsEnabled?sn(this._config.exitAnimationDuration)??In:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(rn,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(an,re)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(re),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(re),this._animationsEnabled?(this._hostElement.style.setProperty(rn,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(on)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(an,on)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(n){return(t||(t=st(a)))(n||a)}})();static \u0275cmp=g({type:a,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,n){e&2&&(Yt("id",n._config.id),v("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),M("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[E],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(d(0,"div",0)(1,"div",1),mt(2,En,0,0,"ng-template",2),l()())},dependencies:[J],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return a})(),rn="--mat-dialog-transition-duration";function sn(a){return a==null?null:typeof a=="number"?a:a.endsWith("ms")?Kt(a.substring(0,a.length-2)):a.endsWith("s")?Kt(a.substring(0,a.length-1))*1e3:a==="0"?0:null}var Vt=(function(a){return a[a.OPEN=0]="OPEN",a[a.CLOSING=1]="CLOSING",a[a.CLOSED=2]="CLOSED",a})(Vt||{}),I=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Qt(1);_beforeClosed=new Qt(1);_result;_closeFallbackTimeout;_state=Vt.OPEN;_closeInteractionType;constructor(i,t,e){this._ref=i,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(Z(n=>n.state==="opened"),j(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(Z(n=>n.state==="closed"),j(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ce(this.backdropClick(),this.keydownEvents().pipe(Z(n=>n.keyCode===27&&!this.disableClose&&!Mt(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),ln(this,n.type==="keydown"?"keyboard":"mouse"))})}close(i){let t=this._config.closePredicate;t&&!t(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(Z(e=>e.state==="closing"),j(1)).subscribe(e=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=Vt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let t=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?t.left(i.left):t.right(i.right):t.centerHorizontally(),i&&(i.top||i.bottom)?i.top?t.top(i.top):t.bottom(i.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",t=""){return this._ref.updateSize(i,t),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Vt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function ln(a,i,t){return a._closeInteractionType=i,a.close(t)}var et=new D("MatMdcDialogData"),On=new D("mat-mdc-dialog-default-options"),Pn=new D("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let a=s(w);return()=>St(a)}}),nt=(()=>{class a{_defaultOptions=s(On,{optional:!0});_scrollStrategy=s(Pn);_parentDialog=s(a,{optional:!0,skipSelf:!0});_idGenerator=s(K);_injector=s(w);_dialog=s(ie);_animationsDisabled=B();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;dialogConfigClass=Gt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=at(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ot(void 0)));constructor(){this._dialogRefConstructor=I,this._dialogContainerType=Sn,this._dialogDataToken=et}open(t,e){let n;e=T(T({},this._defaultOptions||new Gt),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,le(T({},e),{positionStrategy:Ot(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:F,useValue:e}]},templateContext:()=>({dialogRef:n}),providers:(c,m,y)=>(n=new this._dialogRefConstructor(c,e,y),n.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:y},{provide:this._dialogDataToken,useValue:m.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let c=this.openDialogs.indexOf(n);c>-1&&(this.openDialogs.splice(c,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||a)};static \u0275prov=H({token:a,factory:a.\u0275fac})}return a})(),cn=(()=>{class a{dialogRef=s(I,{optional:!0});_elementRef=s(R);_dialog=s(nt);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=mn(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&ln(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=O({type:a,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,n){e&1&&b("click",function(c){return n._onButtonClick(c)}),e&2&&v("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[ue]})}return a})(),dn=(()=>{class a{_dialogRef=s(I,{optional:!0});_elementRef=s(R);_dialog=s(nt);ngOnInit(){this._dialogRef||(this._dialogRef=mn(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(e){return new(e||a)};static \u0275dir=O({type:a})}return a})(),Ht=(()=>{class a extends dn{id=s(K).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=st(a)))(n||a)}})();static \u0275dir=O({type:a,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,n){e&2&&Yt("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[E]})}return a})(),Wt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=O({type:a,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[he([Pe])]})}return a})(),Ut=(()=>{class a extends dn{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=st(a)))(n||a)}})();static \u0275dir=O({type:a,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,n){e&2&&M("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[E]})}return a})();function mn(a,i){let t=a.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?i.find(e=>e.id===t.id):null}var $t=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=W({type:a});static \u0275inj=V({providers:[nt],imports:[nn,Pt,X,It]})}return a})();var pn=(()=>{class a{constructor(t,e,n){this.dialogRef=t,this.data=e,this.i18n=n}onNoClick(){this.dialogRef.close()}static{this.\u0275fac=function(e){return new(e||a)(h(I),h(et),h(Y))}}static{this.\u0275cmp=g({type:a,selectors:[["app-edit-group-name-dialog"]],decls:12,vars:6,consts:[["mat-dialog-title",""],["matInput","",3,"ngModelChange","ngModel"],["type","button","mat-button","",3,"click"],["type","button","mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(e,n){e&1&&(d(0,"h2",0),p(1),l(),d(2,"mat-dialog-content")(3,"mat-form-field")(4,"mat-label"),p(5),l(),d(6,"input",1),wt("ngModelChange",function(c){return Ct(n.data.groupName,c)||(n.data.groupName=c),c}),l(),ct(),l()(),d(7,"mat-dialog-actions")(8,"button",2),b("click",function(){return n.onNoClick()}),p(9),l(),d(10,"button",3),p(11),l()()),e&2&&(r(),L(n.i18n.t("Edit Group Name")),r(4),L(n.i18n.t("Group Name")),r(),xt("ngModel",n.data.groupName),dt(),r(3),L(n.i18n.t("Cancel")),r(),f("mat-dialog-close",n.data.groupName),r(),L(n.i18n.t("Save")))},dependencies:[$t,cn,Ht,Ut,Wt,Bt,Ft,Rt,Lt,Qe,$e,We,He,tn,Xe],encapsulation:2,changeDetection:1})}}return a})();function Ln(a,i){if(a&1&&(d(0,"p")(1,"strong"),p(2),l(),p(3),l()),a&2){let t=u();r(2),_("",t.i18n.t("Completed At"),":"),r(),_(" ",t.formatDate(t.data.completedAt))}}var bn=(()=>{class a{constructor(t,e,n){this.dialogRef=t,this.data=e,this.i18n=n}onClose(){this.dialogRef.close()}formatDate(t){return this.i18n.formatDate(t,{dateStyle:"full"})}static{this.\u0275fac=function(e){return new(e||a)(h(I),h(et),h(Y))}}static{this.\u0275cmp=g({type:a,selectors:[["app-todo-details-dialog"]],decls:14,vars:7,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["icon","x",3,"onButtonClickEvent","buttonName"]],template:function(e,n){e&1&&(d(0,"h2",0),p(1),l(),d(2,"div",1)(3,"p")(4,"strong"),p(5),l(),p(6),l(),d(7,"p")(8,"strong"),p(9),l(),p(10),l(),x(11,Ln,4,2,"p"),l(),d(12,"div",2)(13,"app-custom-button",3),b("onButtonClickEvent",function(){return n.onClose()}),l()()),e&2&&(r(),L(n.i18n.t("Todo Details")),r(4),_("",n.i18n.t("Description"),":"),r(),_(" ",n.data.text),r(3),_("",n.i18n.t("Created At"),":"),r(),_(" ",n.formatDate(n.data.createdAt)),r(),C(n.data.completedAt?11:-1),r(2),f("buttonName",n.i18n.t("Close")))},dependencies:[$t,Ht,Ut,Wt,kt,Nt,zt],encapsulation:2,changeDetection:1})}}return a})();var Bn=["scrollContainer"],zn=a=>({"background-color":a});function Nn(a,i){if(a&1){let t=P();d(0,"button",17),b("click",function(){let n=k(t).$implicit,o=u();return A(o.selectedColor=n.name)}),l()}if(a&2){let t=i.$implicit,e=u();$("w-6 h-6 rounded-full border-2 "+t.class+" "+(e.selectedColor===t.name?"ring-2 ring-offset-2":"")),v("aria-label",e.i18n.t("Use")+" "+e.i18n.t(t.name)+" "+e.i18n.t("group"))("aria-pressed",e.selectedColor===t.name)}}function jn(a,i){if(a&1){let t=P();d(0,"div",15)(1,"app-custom-button",18),b("onButtonClickEvent",function(){k(t);let n=u();return A(n.clearAllTodos())}),l()()}if(a&2){let t=u();r(),f("buttonName",t.i18n.t("Clear All"))}}function Vn(a,i){if(a&1&&(d(0,"span"),p(1),l()),a&2){let t=u(2).$implicit,e=u(3);r(),Q("",e.i18n.t("Checked"),": ",e.formatDate(t.completedAt))}}function Gn(a,i){if(a&1&&(d(0,"div",39)(1,"span"),p(2),l(),x(3,Vn,2,2,"span"),l()),a&2){let t=u().$implicit,e=u(3);r(2),Q("",e.i18n.t("Created"),": ",e.formatDate(t.createdAt)),r(),C(t.completed?3:-1)}}function Hn(a,i){if(a&1){let t=P();d(0,"div",34)(1,"span",35),p(2),l(),d(3,"input",36),b("change",function(){let n=k(t).$implicit,o=u(3);return A(o.toggleTodo(n))}),l(),d(4,"span",37),p(5),l(),d(6,"button",38),b("click",function(){let n=k(t).$implicit,o=u(3);return A(o.openTodoDetails(n))}),p(7),l(),x(8,Gn,4,3,"div",39),d(9,"button",40),b("click",function(){let n=k(t).$implicit,o=u(3);return A(o.deleteTodo(n.id))}),qt(10,"app-icon",41),l()()}if(a&2){let t=i.$implicit,e=i.$index,n=u().$index,o=u(2);$(o.getColorClass(t.color)),r(2),Q("",n+1,".",e+1),r(),f("checked",t.completed),v("aria-label",o.i18n.t("Mark task as")+" "+o.i18n.t(t.completed?"incomplete":"complete")+": "+t.text),r(),$(t.completed?"line-through text-gray-500":"text-gray-900"),f("title",t.text),r(),_(" ",t.text," "),r(2),_(" ",o.i18n.t("View Details")," "),r(),C(t.showDetails?8:-1),r(),v("aria-label",o.i18n.t("Delete task")+": "+t.text),r(),f("size",16)}}function Wn(a,i){if(a&1){let t=P();d(0,"div",22)(1,"div",26)(2,"span",27),p(3),l(),d(4,"div",28)(5,"div",29)(6,"span"),p(7),l(),d(8,"span"),p(9),ye(10,"number"),l()(),d(11,"button",30),b("click",function(){let n=k(t).$implicit,o=u(2);return A(o.openEditModal(n))}),qt(12,"app-icon",31),l()()(),d(13,"div",32),pt(14,Hn,11,14,"div",33,ut),l()()}if(a&2){let t=i.$implicit,e=u(2);f("ngStyle",_e(10,zn,e.getColorClass(t.color))),r(3),_(" ",e.i18n.t(t.color)," "),r(4),Q("",e.getCompletedCount(t.todos),"/",t.todos.length),r(2),_("(",xe(10,7,e.getCompletedCount(t.todos)/t.todos.length*100,"1.0-0"),"%)"),r(2),v("aria-label",e.i18n.t("Rename")+" "+e.i18n.t(t.color)+" "+e.i18n.t("group")),r(),f("size",16),r(2),bt(t.todos)}}function Un(a,i){if(a&1){let t=P();d(0,"app-custom-button",42),b("onButtonClickEvent",function(){k(t);let n=u(2);return A(n.scrollLeft())}),l()}if(a&2){let t=u(2);f("buttonName",t.i18n.t("Scroll Left"))}}function $n(a,i){if(a&1){let t=P();d(0,"app-custom-button",43),b("onButtonClickEvent",function(){k(t);let n=u(2);return A(n.scrollRight())}),l()}if(a&2){let t=u(2);f("buttonName",t.i18n.t("Scroll Right"))}}function Qn(a,i){if(a&1){let t=P();d(0,"div",19)(1,"div",20,0),b("scroll",function(){k(t);let n=u();return A(n.onScroll())}),d(3,"div",21),pt(4,Wn,16,12,"div",22,ut),l()()(),d(6,"div",23)(7,"div"),x(8,Un,1,1,"app-custom-button",24),l(),d(9,"div"),x(10,$n,1,1,"app-custom-button",25),l()()}if(a&2){let t=u();r(4),bt(t.getGroupedTodos()),r(4),C(t.canScrollLeft?8:-1),r(2),C(t.canScrollRight?10:-1)}}function qn(a,i){if(a&1&&(d(0,"div",16),p(1),l()),a&2){let t=u();r(),_(" ",t.i18n.t("No todos yet. Add one above!")," ")}}var Ao=(()=>{class a{constructor(t,e,n,o){this.cdr=e,this.dialog=n,this.i18n=o,this.portfolioEmbed=!1,this.todos=[],this.newTodoText="",this.selectedColor="blue",this.maxTextLength=500,this.canScrollLeft=!1,this.canScrollRight=!1,this.scrollAmount=300,this.colors=[{name:"blue",class:"bg-blue-100 border-blue-500"},{name:"green",class:"bg-green-100 border-green-500"},{name:"yellow",class:"bg-yellow-100 border-yellow-500"},{name:"red",class:"bg-red-100 border-red-500"},{name:"purple",class:"bg-purple-100 border-purple-500"},{name:"pink",class:"bg-pink-100 border-pink-500"},{name:"orange",class:"bg-orange-100 border-orange-500"},{name:"teal",class:"bg-teal-100 border-teal-500"}],this.isBrowser=Ae(t)}ngOnInit(){this.loadTodos()}ngAfterViewInit(){this.checkScrollability()}onScroll(){this.checkScrollability()}checkScrollability(){if(!this.scrollContainer)return;let t=this.scrollContainer.nativeElement;this.canScrollLeft=t.scrollLeft>0,this.canScrollRight=t.scrollLeft<t.scrollWidth-t.clientWidth,this.cdr.detectChanges()}scrollLeft(){if(!this.scrollContainer)return;this.scrollContainer.nativeElement.scrollBy({left:-this.scrollAmount,behavior:"smooth"})}scrollRight(){if(!this.scrollContainer)return;this.scrollContainer.nativeElement.scrollBy({left:this.scrollAmount,behavior:"smooth"})}loadTodos(){if(this.isBrowser){let t=localStorage.getItem("todos");t&&(this.todos=JSON.parse(t))}}saveTodos(){this.isBrowser&&localStorage.setItem("todos",JSON.stringify(this.todos))}addTodo(){if(this.newTodoText.trim()&&this.newTodoText.length<=this.maxTextLength){let t={id:Date.now(),text:this.newTodoText.trim(),completed:!1,createdAt:new Date,color:this.selectedColor};this.todos=[t,...this.todos],this.newTodoText="",this.saveTodos(),this.checkScrollability()}}toggleTodo(t){t.completed=!t.completed,t.completed?t.completedAt=new Date:t.completedAt=void 0,this.todos=[...this.todos],this.saveTodos()}deleteTodo(t){this.todos=this.todos.filter(e=>e.id!==t),this.saveTodos(),this.checkScrollability()}clearAllTodos(){this.todos=[],this.saveTodos(),this.checkScrollability()}onKeyPress(t){t.key==="Enter"&&this.addTodo()}getColorClass(t){return this.colors.find(e=>e.name===t)?.class||this.colors[0].class}formatDate(t){return this.i18n.formatDate(t,{dateStyle:"short",timeStyle:"short"})}getGroupedTodos(){let t=this.todos.reduce((e,n)=>(e[n.color]||(e[n.color]=[]),e[n.color].push(n),e),{});return Object.entries(t).map(([e,n])=>({color:e,todos:n.sort((o,c)=>Number(o.completed)-Number(c.completed))}))}getCompletionStats(){let t=this.todos.length,e=this.todos.filter(o=>o.completed).length,n=t>0?Math.round(e/t*100):0;return{completed:e,total:t,percentage:n}}updateGroupName(t,e){let n=t.target.value.trim();n&&(e.color=n,this.saveTodos())}getCompletedCount(t){return t.filter(e=>e.completed).length}openEditModal(t){this.dialog.open(pn,{width:"250px",data:{groupName:t.color}}).afterClosed().subscribe(n=>{if(n!==void 0&&n!==t.color){let o=t.color;t.color=n,t.todos.forEach(c=>{c.color===o&&(c.color=n)}),this.saveTodos(),this.cdr.detectChanges()}})}toggleDetails(t){t.showDetails=!t.showDetails}openTodoDetails(t){this.dialog.open(bn,{width:"400px",data:{text:t.text,createdAt:t.createdAt,completedAt:t.completedAt}})}static{this.\u0275fac=function(e){return new(e||a)(h(me),h(Dt),h(nt),h(Y))}}static{this.\u0275cmp=g({type:a,selectors:[["app-todo-list"]],viewQuery:function(e,n){if(e&1&&vt(Bn,5),e&2){let o;_t(o=yt())&&(n.scrollContainer=o.first)}},inputs:{portfolioEmbed:"portfolioEmbed"},decls:21,vars:17,consts:[["scrollContainer",""],[1,"todo-shell","h-[calc(100dvh-90px)]","bg-white"],[1,"mx-auto","h-full"],[1,"h-full","px-4","py-2","flex","flex-col","max-md:p-4"],[1,"mb-2"],[1,"flex","flex-col","gap-4"],[1,"flex","gap-2","items-center","max-md:flex-col","max-md:items-stretch","max-md:gap-2"],["type","text",1,"w-full","px-4","py-2","text-lg","rounded-lg","border","border-primary-700","bg-primary-50/10","text-primary-900","placeholder-primary-500","focus:outline-none","focus:ring-1","focus:ring-primary-500","max-md:text-base","max-md:px-3","max-md:py-2",3,"ngModelChange","keyup","ngModel","placeholder","maxLength"],["icon","plus",1,"max-md:w-full",3,"onButtonClickEvent","buttonName"],[1,"flex","items-center","justify-between","max-md:flex-col","max-md:items-stretch","max-md:gap-2"],[1,"flex","items-center","gap-2","max-md:justify-between","max-md:w-full"],[1,"text-sm","text-gray-500"],[1,"flex-1","flex","gap-2","max-md:gap-1","max-md:flex-wrap"],["type","button",3,"class"],[1,"flex","items-center","gap-2","max-md:justify-between","max-md:w-full","max-md:mt-2"],[1,"flex","justify-end","max-md:w-auto"],[1,"flex","flex-1","min-h-0","items-center","justify-center","px-4","text-center","text-gray-500"],["type","button",3,"click"],["icon","trash",1,"max-md:w-full",3,"onButtonClickEvent","buttonName"],[1,"flex-1","min-h-0","h-full","relative"],[1,"h-full","overflow-x-auto",3,"scroll"],[1,"flex","gap-4","h-full"],[1,"flex-none","h-full","border-x","border-solid","border-x-primary-100","rounded-lg","px-4","group",3,"ngStyle"],[1,"todo-scroll-actions","flex","min-h-12","justify-between","items-center","gap-3","pt-2"],["icon","chevron-left",1,"z-20",3,"buttonName"],["icon","chevron-right",1,"z-20",3,"buttonName"],[1,"flex","items-center","justify-between","border-b","border-primary-100"],[1,"text-lg","font-semibold","capitalize","bg-white","py-2","w-full"],[1,"flex","items-center"],[1,"text-sm","text-gray-500","flex","items-center","gap-2"],["type","button",1,"edit-button","p-2","text-blue-500","hover:text-blue-600","focus:outline-none","transition-opacity","opacity-0","group-hover:opacity-100",3,"click"],["name","pencil",3,"size"],[1,"flex","flex-col","flex-wrap","h-[calc(100%-50px)]"],[1,"todo-item","m-2","break-inside-avoid","p-4","rounded-lg","group","transition-colors","flex","items-center","w-[min(25rem,calc(100vw-3rem))]",3,"class"],[1,"todo-item","m-2","break-inside-avoid","p-4","rounded-lg","group","transition-colors","flex","items-center","w-[min(25rem,calc(100vw-3rem))]"],[1,"text-sm","text-gray-500","mr-2"],["type","checkbox",1,"w-5","h-5","text-blue-500","border-gray-300","rounded","focus:ring-blue-500",3,"change","checked"],[1,"flex-1","truncate","ml-2",3,"title"],["type","button",1,"ml-2","text-primary-900","hover:text-blue-600","focus:outline-none",3,"click"],[1,"text-xs","text-gray-400","ml-2"],["type","button",1,"delete-button","p-2","!text-red-500","hover:!text-red-600","focus:outline-none","transition-opacity",3,"click"],["name","trash",3,"size"],["icon","chevron-left",1,"z-20",3,"onButtonClickEvent","buttonName"],["icon","chevron-right",1,"z-20",3,"onButtonClickEvent","buttonName"]],template:function(e,n){e&1&&(d(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"input",7),wt("ngModelChange",function(c){return Ct(n.newTodoText,c)||(n.newTodoText=c),c}),b("keyup",function(c){return n.onKeyPress(c)}),l(),ct(),d(7,"app-custom-button",8),b("onButtonClickEvent",function(){return n.addTodo()}),l()(),d(8,"div",9)(9,"div",10)(10,"span",11),p(11),l(),d(12,"div",12),pt(13,Nn,1,4,"button",13,ut),l()(),d(15,"div",14)(16,"div",11),p(17),l(),x(18,jn,2,1,"div",15),l()()()(),x(19,Qn,11,2)(20,qn,2,1,"div",16),l()()()),e&2&&(ge("height",n.portfolioEmbed?"100%":null),M("portfolio-embed",n.portfolioEmbed),r(6),xt("ngModel",n.newTodoText),f("placeholder",n.i18n.t("Add a new task..."))("maxLength",n.maxTextLength),v("aria-label",n.i18n.t("New task")),dt(),r(),f("buttonName",n.i18n.t("Add")),r(4),Q("",n.newTodoText.length,"/",n.maxTextLength),r(2),bt(n.colors),r(4),ve(" ",n.i18n.t("Overall"),": ",n.getCompletionStats().completed,"/",n.getCompletionStats().total," (",n.getCompletionStats().percentage,"%) "),r(),C(n.todos.length>0?18:-1),r(),C(n.todos.length>0?19:20))},dependencies:[kt,De,Bt,Ft,Rt,Lt,Nt,Te,zt,ke],styles:['input[type=checkbox][_ngcontent-%COMP%]{appearance:none;-webkit-appearance:none;width:1.25rem;height:1.25rem;border:2px solid #d1d5db;border-radius:.25rem;outline:none;cursor:pointer;position:relative;transition:all .2s ease-in-out}input[type=checkbox][_ngcontent-%COMP%]:checked{background-color:#3b82f6;border-color:#3b82f6}input[type=checkbox][_ngcontent-%COMP%]:checked:after{content:"";position:absolute;left:6px;top:2px;width:4px;height:8px;border:solid white;border-width:0 2px 2px 0;transform:rotate(45deg)}.todo-item[_ngcontent-%COMP%]{transition:transform .2s ease-in-out,background-color .2s ease-in-out}.todo-item[_ngcontent-%COMP%]:hover{transform:translateY(-2px);background-color:#f0f0f0}.flex-1[_ngcontent-%COMP%]{min-height:0}.flex-wrap[_ngcontent-%COMP%]{align-content:start}#scrollContainer[_ngcontent-%COMP%]::-webkit-scrollbar{height:8px;background:#f3f4f6}#scrollContainer[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#e5e7eb;border-radius:10px}#scrollContainer[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#3b82f6;border-radius:10px}#scrollContainer[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#1d4ed8}.delete-button[_ngcontent-%COMP%]{opacity:.72;transition:opacity .2s ease-in-out}.todo-item[_ngcontent-%COMP%]:hover   .delete-button[_ngcontent-%COMP%], .delete-button[_ngcontent-%COMP%]:hover, .delete-button[_ngcontent-%COMP%]:focus-visible{opacity:1}#scrollContainer[_ngcontent-%COMP%]{transition:transform .3s ease-in-out}.portfolio-embed[_ngcontent-%COMP%]{min-height:0}.portfolio-embed[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .portfolio-embed[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-height:0}.portfolio-embed[_ngcontent-%COMP%]   .todo-scroll-actions[_ngcontent-%COMP%]{flex:none;border-top:1px solid var(--app-border)}@media(max-width:767px){.portfolio-embed[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:.75rem}.portfolio-embed[_ngcontent-%COMP%]   app-custom-button[_ngcontent-%COMP%]{display:block}.portfolio-embed[_ngcontent-%COMP%]   app-custom-button[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%}}',".todo-item[_ngcontent-%COMP%]:hover   .hover-info[_ngcontent-%COMP%]{opacity:1}"]})}}return a})();export{Ao as TodoListComponent};
