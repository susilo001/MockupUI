import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
var input = /* @__PURE__ */ (() => '@import"https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Roboto:wght@300&display=swap";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root,[data-theme]{background-color:hsla(var(--b1) / var(--tw-bg-opacity, 1));color:hsla(var(--bc) / var(--tw-text-opacity, 1))}html{-webkit-tap-highlight-color:transparent}:root{--p: 141 50% 60%;--pf: 141 50% 48%;--sf: 219 96% 48%;--af: 10 81% 45%;--nf: 219 20% 20%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--btn-text-case: uppercase;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--pc: 151 28% 19%;--s: 219 96% 60%;--sc: 210 20% 98%;--a: 10 81% 56%;--ac: 210 20% 98%;--n: 219 20% 25%;--nc: 210 20% 98%;--b1: 0 0% 100%;--bc: 219 20% 25%;--animation-btn: 0;--animation-input: 0;--btn-focus-scale: 1}@media (prefers-color-scheme: dark){:root{--p: 326 100% 74%;--pf: 326 100% 59%;--sf: 265 89% 62%;--af: 31 100% 57%;--nf: 230 15% 24%;--b2: 231 15% 17%;--b3: 231 15% 15%;--pc: 326 100% 15%;--sc: 265 100% 16%;--ac: 31 100% 14%;--nc: 230 71% 86%;--inc: 191 100% 15%;--suc: 135 100% 13%;--wac: 65 100% 15%;--erc: 0 100% 93%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 265 89% 78%;--a: 31 100% 71%;--n: 230 15% 30%;--b1: 231 15% 18%;--bc: 60 30% 96%;--in: 191 97% 77%;--su: 135 94% 65%;--wa: 65 92% 76%;--er: 0 100% 67%}}[data-theme=emerald]{--p: 141 50% 60%;--pf: 141 50% 48%;--sf: 219 96% 48%;--af: 10 81% 45%;--nf: 219 20% 20%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--btn-text-case: uppercase;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--pc: 151 28% 19%;--s: 219 96% 60%;--sc: 210 20% 98%;--a: 10 81% 56%;--ac: 210 20% 98%;--n: 219 20% 25%;--nc: 210 20% 98%;--b1: 0 0% 100%;--bc: 219 20% 25%;--animation-btn: 0;--animation-input: 0;--btn-focus-scale: 1}[data-theme=dracula]{--p: 326 100% 74%;--pf: 326 100% 59%;--sf: 265 89% 62%;--af: 31 100% 57%;--nf: 230 15% 24%;--b2: 231 15% 17%;--b3: 231 15% 15%;--pc: 326 100% 15%;--sc: 265 100% 16%;--ac: 31 100% 14%;--nc: 230 71% 86%;--inc: 191 100% 15%;--suc: 135 100% 13%;--wac: 65 100% 15%;--erc: 0 100% 93%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 265 89% 78%;--a: 31 100% 71%;--n: 230 15% 30%;--b1: 231 15% 18%;--bc: 60 30% 96%;--in: 191 97% 77%;--su: 135 94% 65%;--wa: 65 92% 76%;--er: 0 100% 67%}*,:before,:after{--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.avatar{position:relative;display:inline-flex}.avatar>div{display:block;aspect-ratio:1 / 1;overflow:hidden}.avatar img{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.avatar.placeholder>div{display:flex;align-items:center;justify-content:center}.badge{display:inline-flex;align-items:center;justify-content:center;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);height:1.25rem;font-size:.875rem;line-height:1.25rem;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding-left:.563rem;padding-right:.563rem;border-width:1px;--tw-border-opacity: 1;border-color:hsl(var(--n) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity));border-radius:var(--rounded-badge, 1.9rem)}.btn{display:inline-flex;flex-shrink:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;border-color:transparent;border-color:hsl(var(--n) / var(--tw-border-opacity));text-align:center;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);border-radius:var(--rounded-btn, .5rem);height:3rem;padding-left:1rem;padding-right:1rem;font-size:.875rem;line-height:1.25rem;line-height:1em;min-height:3rem;font-weight:600;text-transform:uppercase;text-transform:var(--btn-text-case, uppercase);-webkit-text-decoration-line:none;text-decoration-line:none;border-width:var(--border-btn, 1px);-webkit-animation:button-pop var(--animation-btn, .25s) ease-out;animation:button-pop var(--animation-btn, .25s) ease-out;--tw-border-opacity: 1;--tw-bg-opacity: 1;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity))}.btn-disabled,.btn[disabled]{pointer-events:none}.btn-circle{height:3rem;width:3rem;border-radius:9999px;padding:0}.btn.loading,.btn.loading:hover{pointer-events:none}.btn.loading:before{margin-right:.5rem;height:1rem;width:1rem;border-radius:9999px;border-width:2px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;content:"";border-top-color:transparent;border-left-color:transparent;border-bottom-color:currentColor;border-right-color:currentColor}@media (prefers-reduced-motion: reduce){.btn.loading:before{-webkit-animation:spin 10s linear infinite;animation:spin 10s linear infinite}}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.btn-group>input[type=radio].btn{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-group>input[type=radio].btn:before{content:attr(data-title)}.card{position:relative;display:flex;flex-direction:column;overflow:hidden;border-radius:var(--rounded-box, 1rem)}.card:focus{outline:2px solid transparent;outline-offset:2px}.card-body{display:flex;flex:1 1 auto;flex-direction:column;padding:var(--padding-card, 2rem);gap:.5rem}.card-body :where(p){flex-grow:1}.card-actions{display:flex;flex-wrap:wrap;align-items:flex-start;gap:.5rem}.card figure{display:flex;align-items:center;justify-content:center}.card.image-full{display:grid}.card.image-full:before{position:relative;content:"";z-index:10;--tw-bg-opacity: 1;background-color:hsl(var(--n) / var(--tw-bg-opacity));opacity:.75;border-radius:var(--rounded-box, 1rem)}.card.image-full:before,.card.image-full>*{grid-column-start:1;grid-row-start:1}.card.image-full>figure img{height:100%;-o-object-fit:cover;object-fit:cover}.card.image-full>.card-body{position:relative;z-index:20;--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity))}.carousel{display:flex;overflow-x:scroll;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none}.carousel-item{box-sizing:content-box;display:flex;flex:none;scroll-snap-align:start}.carousel-center .carousel-item{scroll-snap-align:center}.carousel-end .carousel-item{scroll-snap-align:end}.checkbox{flex-shrink:0;--chkbg: var(--bc);--chkfg: var(--b1);height:1.5rem;width:1.5rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity: .2;border-radius:var(--rounded-btn, .5rem)}.divider{display:flex;flex-direction:row;align-items:center;align-self:stretch;margin-top:1rem;margin-bottom:1rem;height:1rem;white-space:nowrap}.divider:before,.divider:after{content:"";flex-grow:1;height:.125rem;width:100%}.dropdown{position:relative;display:inline-block}.dropdown>*:focus{outline:2px solid transparent;outline-offset:2px}.dropdown .dropdown-content{visibility:hidden;position:absolute;z-index:50;opacity:0;transform-origin:top;--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dropdown-end .dropdown-content{right:0px}.dropdown-left .dropdown-content{top:0px;right:100%;bottom:auto;transform-origin:right}.dropdown-right .dropdown-content{left:100%;top:0px;bottom:auto;transform-origin:left}.dropdown-top .dropdown-content{bottom:100%;top:auto;transform-origin:bottom}.dropdown-end.dropdown-right .dropdown-content,.dropdown-end.dropdown-left .dropdown-content{bottom:0px;top:auto}.dropdown.dropdown-open .dropdown-content,.dropdown.dropdown-hover:hover .dropdown-content,.dropdown:not(.dropdown-hover):focus .dropdown-content,.dropdown:not(.dropdown-hover):focus-within .dropdown-content{visibility:visible;opacity:1}.footer{display:grid;width:100%;grid-auto-flow:row;place-items:start;row-gap:2.5rem;-moz-column-gap:1rem;column-gap:1rem;font-size:.875rem;line-height:1.25rem}.footer>*{display:grid;place-items:start;gap:.5rem}@media (min-width: 48rem){.footer{grid-auto-flow:column}.footer-center{grid-auto-flow:row dense}}.label{display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;justify-content:space-between;padding:.5rem .25rem}.indicator{position:relative;display:inline-flex;width:-webkit-max-content;width:-moz-max-content;width:max-content}.indicator :where(.indicator-item){z-index:1;position:absolute;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.input{flex-shrink:1;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);height:3rem;padding-left:1rem;padding-right:1rem;font-size:.875rem;line-height:1.25rem;line-height:2;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity: 0;--tw-bg-opacity: 1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));border-radius:var(--rounded-btn, .5rem)}.input-group>*,.input-group>.input{border-radius:0}.link{cursor:pointer;-webkit-text-decoration-line:underline;text-decoration-line:underline}.menu{display:flex;flex-direction:column}.menu.horizontal{display:inline-flex;flex-direction:row}.menu.horizontal :where(li){flex-direction:row}.menu :where(li){position:relative;display:flex;flex-direction:column;flex-wrap:wrap;align-items:stretch}.menu :where(li:not(.menu-title))>:where(*:not(ul)){display:flex}.menu :where(li:not(.disabled):not(.menu-title))>:where(*:not(ul)){cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;outline:2px solid transparent;outline-offset:2px}.menu>:where(li > *:not(ul):focus){outline:2px solid transparent;outline-offset:2px}.menu>:where(li.disabled > *:not(ul):focus){cursor:auto}.menu>:where(li) :where(ul){display:flex;flex-direction:column;align-items:stretch}.menu>:where(li)>:where(ul){position:absolute;display:none;top:initial;left:100%;border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.menu>:where(li:hover)>:where(ul){display:flex}.menu>:where(li:focus)>:where(ul){display:flex}.navbar{display:flex;align-items:center;padding:var(--navbar-padding, .5rem);min-height:4rem;width:100%}:where(.navbar > *){display:inline-flex;align-items:center}.navbar-start{width:50%;justify-content:flex-start}.navbar-center{flex-shrink:0}.navbar-end{width:50%;justify-content:flex-end}.swap{position:relative;display:inline-grid;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;place-content:center;cursor:pointer}.swap>*{grid-column-start:1;grid-row-start:1;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:transform,opacity}.swap input{-webkit-appearance:none;-moz-appearance:none;appearance:none}.swap .swap-on,.swap .swap-indeterminate,.swap input:indeterminate~.swap-on{opacity:0}.swap input:checked~.swap-off,.swap.swap-active .swap-off,.swap input:indeterminate~.swap-off{opacity:0}.swap input:checked~.swap-on,.swap-active .swap-on,.swap input:indeterminate~.swap-indeterminate{opacity:1}.avatar-group .avatar{overflow:hidden;border-radius:9999px;border-width:4px;--tw-border-opacity: 1;border-color:hsl(var(--b1) / var(--tw-border-opacity))}.btn-outline .badge{--tw-border-opacity: 1;border-color:hsl(var(--nf, var(--n)) / var(--tw-border-opacity));--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity))}.btn-outline.btn-primary .badge{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-outline.btn-secondary .badge{--tw-border-opacity: 1;border-color:hsl(var(--s) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--s) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--sc) / var(--tw-text-opacity))}.btn-outline.btn-accent .badge{--tw-border-opacity: 1;border-color:hsl(var(--a) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--a) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--ac) / var(--tw-text-opacity))}.btn-outline .badge.outline{--tw-border-opacity: 1;border-color:hsl(var(--nf, var(--n)) / var(--tw-border-opacity));background-color:transparent}.btn-outline.btn-secondary .badge-outline{--tw-border-opacity: 1;border-color:hsl(var(--s) / var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--s) / var(--tw-text-opacity))}.btn-outline:hover .badge{--tw-border-opacity: 1;border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--bc) / var(--tw-text-opacity))}.btn-outline:hover .badge.outline{--tw-border-opacity: 1;border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity))}.btn-outline.btn-primary:hover .badge{--tw-border-opacity: 1;border-color:hsl(var(--pc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pc) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--p) / var(--tw-text-opacity))}.btn-outline.btn-primary:hover .badge.outline{--tw-border-opacity: 1;border-color:hsl(var(--pc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-outline.btn-secondary:hover .badge{--tw-border-opacity: 1;border-color:hsl(var(--sc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--sc) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--s) / var(--tw-text-opacity))}.btn-outline.btn-secondary:hover .badge.outline{--tw-border-opacity: 1;border-color:hsl(var(--sc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--sc) / var(--tw-text-opacity))}.btn-outline.btn-accent:hover .badge{--tw-border-opacity: 1;border-color:hsl(var(--ac) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--ac) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--a) / var(--tw-text-opacity))}.btn-outline.btn-accent:hover .badge.outline{--tw-border-opacity: 1;border-color:hsl(var(--ac) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--af, var(--a)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--ac) / var(--tw-text-opacity))}.btn:active:hover,.btn:active:focus{-webkit-animation:none;animation:none;transform:scale(var(--btn-focus-scale, .95))}.btn:hover,.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--nf, var(--n)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--nf, var(--n)) / var(--tw-bg-opacity))}.btn:focus-visible{outline:2px solid hsl(var(--nf));outline-offset:2px}.btn-secondary{--tw-border-opacity: 1;border-color:hsl(var(--s) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--s) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--sc) / var(--tw-text-opacity))}.btn-secondary:hover,.btn-secondary.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--sf, var(--s)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--sf, var(--s)) / var(--tw-bg-opacity))}.btn-secondary:focus-visible{outline:2px solid hsl(var(--s))}.btn.glass:hover,.btn.glass.btn-active{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn.glass:focus-visible{outline:2px solid 0 0 2px currentColor}.btn-ghost{border-width:1px;border-color:transparent;background-color:transparent;color:currentColor}.btn-ghost:hover,.btn-ghost.btn-active{--tw-border-opacity: 0;background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-bg-opacity: .2}.btn-ghost:focus-visible{outline:2px solid 0 0 2px currentColor}.btn-outline.btn-secondary{--tw-text-opacity: 1;color:hsl(var(--s) / var(--tw-text-opacity))}.btn-outline.btn-secondary:hover{--tw-border-opacity: 1;border-color:hsl(var(--sf, var(--s)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--sc) / var(--tw-text-opacity))}.btn-disabled,.btn-disabled:hover,.btn[disabled],.btn[disabled]:hover{--tw-border-opacity: 0;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-bg-opacity: .2;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity: .2}.btn.loading.btn-square:before,.btn.loading.btn-circle:before{margin-right:0}.btn.loading.btn-xl:before,.btn.loading.btn-lg:before{height:1.25rem;width:1.25rem}.btn.loading.btn-sm:before,.btn.loading.btn-xs:before{height:.75rem;width:.75rem}.btn-group>input[type=radio]:checked.btn,.btn-group>.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-group>input[type=radio]:checked.btn:focus-visible,.btn-group>.btn-active:focus-visible{outline:2px solid hsl(var(--p))}.btn-group>.btn:not(:first-of-type){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn:not(:last-of-type){border-top-right-radius:0;border-bottom-right-radius:0}@-webkit-keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .95))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .95))}40%{transform:scale(1.02)}to{transform:scale(1)}}.card:focus-visible{outline:2px solid currentColor;outline-offset:2px}.card.bordered{border-width:1px;--tw-border-opacity: 1;border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))}.card.compact .card-body{padding:1rem;font-size:.875rem;line-height:1.25rem}.card-title{display:flex;align-items:center;gap:.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600}.carousel::-webkit-scrollbar{display:none}.checkbox:focus-visible{outline:2px solid hsl(var(--bc));outline-offset:2px}.checkbox:checked,.checkbox[checked=true]{--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));background-repeat:no-repeat;-webkit-animation:checkmark var(--animation-input, .2s) ease-in-out;animation:checkmark var(--animation-input, .2s) ease-in-out;background-image:linear-gradient(-45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)}.checkbox:indeterminate{--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));background-repeat:no-repeat;-webkit-animation:checkmark var(--animation-input, .2s) ease-in-out;animation:checkmark var(--animation-input, .2s) ease-in-out;background-image:linear-gradient(90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(-90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(0deg,hsl(var(--chkbg)) 43%,hsl(var(--chkfg)) 43%,hsl(var(--chkfg)) 57%,hsl(var(--chkbg)) 57%)}.checkbox:disabled{cursor:not-allowed;border-color:transparent;--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));opacity:.2}@-webkit-keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}body[dir=rtl] .checkbox{--chkbg: var(--bc);--chkfg: var(--b1)}body[dir=rtl] .checkbox:checked,body[dir=rtl] .checkbox[checked=true]{background-image:linear-gradient(45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(-45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)}.divider:before{background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-bg-opacity: .1}.divider:after{background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-bg-opacity: .1}.divider:not(:empty){gap:1rem}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-secondary{outline:2px solid hsl(var(--s))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-ghost{outline:2px solid currentColor}.dropdown.dropdown-open .dropdown-content,.dropdown.dropdown-hover:hover .dropdown-content,.dropdown:focus .dropdown-content,.dropdown:focus-within .dropdown-content{--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.label a:hover{--tw-text-opacity: 1;color:hsl(var(--bc) / var(--tw-text-opacity))}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input-bordered{--tw-border-opacity: .2}.input:focus{outline:2px solid hsla(var(--bc) / .2);outline-offset:2px}.input-primary{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity))}.input-primary:focus{outline:2px solid hsl(var(--p))}.input-disabled,.input[disabled]{cursor:not-allowed;--tw-border-opacity: 1;border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));--tw-text-opacity: .2}.input-disabled::-moz-placeholder,.input[disabled]::-moz-placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity: .2}.input-disabled:-ms-input-placeholder,.input[disabled]:-ms-input-placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity: .2}.input-disabled::placeholder,.input[disabled]::placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity: .2}.link:focus{outline:2px solid transparent;outline-offset:2px}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px}.menu.horizontal li.bordered>a,.menu.horizontal li.bordered>button,.menu.horizontal li.bordered>span{border-left-width:0px;border-bottom-width:4px;--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity))}.menu[class*=" p-"] li>*,.menu[class^=p-] li>*{border-radius:var(--rounded-btn, .5rem)}.menu :where(li.bordered > *){border-left-width:4px;--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity))}.menu :where(li)>:where(*:not(ul)){gap:.75rem;padding:.75rem 1rem;color:currentColor}.menu :where(li:not(.menu-title):not(:empty))>:where(*:not(ul):focus),.menu :where(li:not(.menu-title):not(:empty))>:where(*:not(ul):hover){background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-bg-opacity: .1}.menu :where(li:not(.menu-title):not(:empty))>:where(:not(ul).active),.menu :where(li:not(.menu-title):not(:empty))>:where(*:not(ul):active){--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.menu :where(li:empty){margin:.5rem 1rem;height:1px;background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-bg-opacity: .1}.menu li.disabled>*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity: .2}.menu li.disabled>*:hover{background-color:transparent}.menu li.hover-bordered a{border-left-width:4px;border-color:transparent}.menu li.hover-bordered a:hover{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity))}.menu.compact li>a,.menu.compact li>span{padding-top:.5rem;padding-bottom:.5rem;font-size:.875rem;line-height:1.25rem}.menu .menu-title>*{padding-top:.25rem;padding-bottom:.25rem;font-size:.75rem;line-height:1rem;font-weight:700;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity: .4}.menu :where(li:not(.disabled))>:where(*:not(ul)){outline:2px solid transparent;outline-offset:2px;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.menu>:where(li:first-child){border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:unset;border-bottom-left-radius:unset}.menu>:where(li:first-child)>:where(:not(ul)){border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:unset;border-bottom-left-radius:unset}.menu>:where(li:last-child){border-top-left-radius:unset;border-top-right-radius:unset;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.menu>:where(li:last-child)>:where(:not(ul)){border-top-left-radius:unset;border-top-right-radius:unset;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.menu>:where(li)>:where(ul) :where(li){width:100%;white-space:nowrap}.menu>:where(li)>:where(ul) :where(li) :where(ul){padding-left:1rem}.menu>:where(li)>:where(ul) :where(li)>:where(:not(ul)){width:100%;white-space:nowrap}.menu>:where(li)>:where(ul)>:where(li:first-child){border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:unset;border-bottom-left-radius:unset}.menu>:where(li)>:where(ul)>:where(li:first-child)>:where(:not(ul)){border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:unset;border-bottom-left-radius:unset}.menu>:where(li)>:where(ul)>:where(li:last-child){border-top-left-radius:unset;border-top-right-radius:unset;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.menu>:where(li)>:where(ul)>:where(li:last-child)>:where(:not(ul)){border-top-left-radius:unset;border-top-right-radius:unset;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}@-webkit-keyframes progress-loading{50%{left:107%}}@keyframes progress-loading{50%{left:107%}}@-webkit-keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@-webkit-keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}.swap-rotate .swap-on,.swap-rotate .swap-indeterminate,.swap-rotate input:indeterminate~.swap-on{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-off,.swap-rotate.swap-active .swap-off,.swap-rotate input:indeterminate~.swap-off{--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-on,.swap-rotate.swap-active .swap-on,.swap-rotate input:indeterminate~.swap-indeterminate{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-flip .swap-on,.swap-flip .swap-indeterminate,.swap-flip input:indeterminate~.swap-on{transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;opacity:1}.swap-flip input:checked~.swap-off,.swap-flip.swap-active .swap-off,.swap-flip input:indeterminate~.swap-off{transform:rotateY(-180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;opacity:1}.swap-flip input:checked~.swap-on,.swap-flip.swap-active .swap-on,.swap-flip input:indeterminate~.swap-indeterminate{transform:rotateY(0)}.rounded-box{border-radius:var(--rounded-box, 1rem)}.badge-xs{height:.75rem;font-size:.75rem;line-height:.75rem;padding-left:.313rem;padding-right:.313rem}.badge-sm{height:1rem;font-size:.75rem;line-height:1rem;padding-left:.438rem;padding-right:.438rem}.btn-circle:where(.btn-xs){height:1.5rem;width:1.5rem;border-radius:9999px;padding:0}.btn-circle:where(.btn-sm){height:2rem;width:2rem;border-radius:9999px;padding:0}.btn-circle:where(.btn-md){height:3rem;width:3rem;border-radius:9999px;padding:0}.btn-circle:where(.btn-lg){height:4rem;width:4rem;border-radius:9999px;padding:0}.divider-vertical{flex-direction:row}.divider-vertical:before{height:.125rem;width:100%}.divider-vertical:after{height:.125rem;width:100%}.indicator :where(.indicator-item){right:0px;left:auto;top:0px;bottom:auto;--tw-translate-x: 50%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-start){right:auto;left:0px;--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-center){right:50%;left:50%;--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-end){right:0px;left:auto;--tw-translate-x: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-bottom){top:auto;bottom:0px;--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-middle){top:50%;bottom:50%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-top){top:0px;bottom:auto;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.avatar.online:before{content:"";position:absolute;z-index:10;display:block;border-radius:9999px;--tw-bg-opacity: 1;background-color:hsl(var(--su) / var(--tw-bg-opacity));width:15%;height:15%;top:7%;right:7%;box-shadow:0 0 0 2px hsl(var(--b1))}.avatar.offline:before{content:"";position:absolute;z-index:10;display:block;border-radius:9999px;--tw-bg-opacity: 1;background-color:hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));width:15%;height:15%;top:7%;right:7%;box-shadow:0 0 0 2px hsl(var(--b1))}.badge-primary{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.badge-accent{--tw-border-opacity: 1;border-color:hsl(var(--a) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--a) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--ac) / var(--tw-text-opacity))}.badge-outline.badge-primary{--tw-text-opacity: 1;color:hsl(var(--p) / var(--tw-text-opacity))}.badge-outline.badge-accent{--tw-text-opacity: 1;color:hsl(var(--a) / var(--tw-text-opacity))}.card-compact .card-body{padding:1rem;font-size:.875rem;line-height:1.25rem}.card-compact .card-title{margin-bottom:.25rem}.card-normal .card-body{padding:var(--padding-card, 2rem);font-size:1rem;line-height:1.5rem}.card-normal .card-title{margin-bottom:.75rem}.divider-vertical{margin-left:0;margin-right:0;margin-top:1rem;margin-bottom:1rem;height:1rem;width:auto}.menu-compact :where(li > *){padding-top:.5rem;padding-bottom:.5rem;font-size:.875rem;line-height:1.25rem}.carousel-item{transition:.2s opacity ease-in-out;transition-delay:.2s;opacity:0;display:block;position:absolute}.carousel-item[data-active]{opacity:1;transition-delay:0ms}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.inset-0{top:0px;right:0px;bottom:0px;left:0px}.inset-x-6{left:1.5rem;right:1.5rem}.inset-y-1\\/4{top:25%;bottom:25%}.inset-y-8{top:2rem;bottom:2rem}.inset-x-1\\/4{left:25%;right:25%}.inset-x-0{left:0px;right:0px}.inset-x-4{left:1rem;right:1rem}.top-0{top:0px}.top-8{top:2rem}.left-5{left:1.25rem}.right-5{right:1.25rem}.top-1\\/4{top:25%}.bottom-0{bottom:0px}.bottom-4{bottom:1rem}.z-50{z-index:50}.col-span-2{grid-column:span 2 / span 2}.row-span-2{grid-row:span 2 / span 2}.m-auto{margin:auto}.mx-auto{margin-left:auto;margin-right:auto}.my-8{margin-top:2rem;margin-bottom:2rem}.my-auto{margin-top:auto;margin-bottom:auto}.mb-8{margin-bottom:2rem}.mt-3{margin-top:.75rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.ml-4{margin-left:1rem}.mb-6{margin-bottom:1.5rem}.mb-12{margin-bottom:3rem}.-mt-20{margin-top:-5rem}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-screen{height:100vh}.h-5{height:1.25rem}.h-80{height:20rem}.h-64{height:16rem}.h-96{height:24rem}.h-10{height:2.5rem}.w-5{width:1.25rem}.w-52{width:13rem}.w-full{width:100%}.w-10{width:2.5rem}.w-12{width:3rem}.w-auto{width:auto}.w-6{width:1.5rem}.w-max{width:-webkit-max-content;width:-moz-max-content;width:max-content}.w-screen{width:100vw}.w-16{width:4rem}.max-w-xs{max-width:20rem}.flex-none{flex:none}.flex-shrink{flex-shrink:1}.flex-grow{flex-grow:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.grid-flow-col{grid-auto-flow:column}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.place-items-center{place-items:center}.content-center{align-content:center}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-10{gap:2.5rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-y-10{row-gap:2.5rem}.space-x-8>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y-2>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(2px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(2px * var(--tw-divide-y-reverse))}.divide-x>:not([hidden])~:not([hidden]){--tw-divide-x-reverse: 0;border-right-width:calc(1px * var(--tw-divide-x-reverse));border-left-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)))}.divide-white>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(255 255 255 / var(--tw-divide-opacity))}.whitespace-normal{white-space:normal}.break-words{overflow-wrap:break-word}.rounded-lg{border-radius:.5rem}.rounded-full{border-radius:9999px}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.border{border-width:1px}.border-info-content{--tw-border-opacity: 1;border-color:hsl(var(--inc, var(--nc)) / var(--tw-border-opacity))}.bg-base-100{--tw-bg-opacity: 1;background-color:hsl(var(--b1) / var(--tw-bg-opacity))}.bg-neutral{--tw-bg-opacity: 1;background-color:hsl(var(--n) / var(--tw-bg-opacity))}.bg-primary{--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity))}.bg-base-content{--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity))}.bg-opacity-30{--tw-bg-opacity: .3}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-primary{--tw-gradient-from: hsl(var(--p));--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, hsl(var(--p) / 0))}.from-neutral{--tw-gradient-from: hsl(var(--n));--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, hsl(var(--n) / 0))}.from-transparent{--tw-gradient-from: transparent;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(0 0 0 / 0))}.to-secondary{--tw-gradient-to: hsl(var(--s))}.to-base-100{--tw-gradient-to: hsl(var(--b1))}.to-accent{--tw-gradient-to: hsl(var(--a))}.fill-current{fill:currentColor}.object-cover{-o-object-fit:cover;object-fit:cover}.object-top{-o-object-position:top;object-position:top}.p-2{padding:.5rem}.p-0{padding:0}.p-4{padding:1rem}.p-1{padding:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-20{padding-left:5rem;padding-right:5rem}.py-16{padding-top:4rem;padding-bottom:4rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.px-60{padding-left:15rem;padding-right:15rem}.pl-2{padding-left:.5rem}.pb-16{padding-bottom:4rem}.text-center{text-align:center}.font-title{font-family:Lato,sans-serif,Bold-700}.font-content{font-family:Roboto,sans-serif,Regular-400}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-5xl{font-size:3rem;line-height:1}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-2xl{font-size:1.5rem;line-height:2rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-light{font-weight:300}.normal-case{text-transform:none}.leading-10{line-height:2.5rem}.leading-6{line-height:1.5rem}.text-error{--tw-text-opacity: 1;color:hsl(var(--er) / var(--tw-text-opacity))}.text-base-content{--tw-text-opacity: 1;color:hsl(var(--bc) / var(--tw-text-opacity))}.text-primary{--tw-text-opacity: 1;color:hsl(var(--p) / var(--tw-text-opacity))}.text-neutral{--tw-text-opacity: 1;color:hsl(var(--n) / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-info{--tw-text-opacity: 1;color:hsl(var(--in) / var(--tw-text-opacity))}.text-neutral-content{--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity))}.text-base-300{--tw-text-opacity: 1;color:hsl(var(--b3, var(--b2)) / var(--tw-text-opacity))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.outline-1{outline-width:1px}.brightness-75{--tw-brightness: brightness(.75);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow-md{--tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / .07)) drop-shadow(0 2px 2px rgb(0 0 0 / .06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.hover\\:rounded-2xl:hover{border-radius:1rem}.hover\\:bg-primary-focus:hover{--tw-bg-opacity: 1;background-color:hsl(var(--pf, var(--p)) / var(--tw-bg-opacity))}.focus\\:bg-purple-100:focus{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.active\\:bg-purple-200:active{--tw-bg-opacity: 1;background-color:rgb(233 213 255 / var(--tw-bg-opacity))}.group:hover .group-hover\\:rounded-t-xl{border-top-left-radius:.75rem;border-top-right-radius:.75rem}@media (min-width: 640px){.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 768px){.md\\:place-self-center{place-self:center}.md\\:justify-self-end{justify-self:end}.md\\:bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.md\\:px-10{padding-left:2.5rem;padding-right:2.5rem}.md\\:px-12{padding-left:3rem;padding-right:3rem}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}@media (min-width: 1024px){.lg\\:card-side{align-items:stretch;flex-direction:row}.lg\\:card-side figure>*{max-width:unset}:where(.lg\\:card-side figure > *){width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.lg\\:divider-horizontal{flex-direction:column}.lg\\:divider-horizontal:before{height:100%;width:.125rem}.lg\\:divider-horizontal:after{height:100%;width:.125rem}.lg\\:divider-horizontal{margin-top:0;margin-bottom:0;margin-left:1rem;margin-right:1rem;height:auto;width:1rem}.lg\\:inset-x-40{left:10rem;right:10rem}.lg\\:top-1\\/2{top:50%}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:h-100{height:37rem}.lg\\:w-12{width:3rem}.lg\\:w-8{width:2rem}.lg\\:-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.lg\\:px-20{padding-left:5rem;padding-right:5rem}.lg\\:px-4{padding-left:1rem;padding-right:1rem}.lg\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}@media (min-width: 1280px){.xl\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}\n')();
var __decorate = globalThis && globalThis.__decorate || function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AppComponent = class AppComponent2 extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <section title="carousel" class="mb-8 lg:px-20 px-4">
        <div class="carousel lg:h-100 h-80 relative w-full" data-carousel>
          <ul data-slides>
            <li data-active class="carousel-item inset-0 w-full">
              <article>
                <img
                  src="https://picsum.photos/id/237/1000/440"
                  class="w-full object-cover brightness-75"
                  loading="lazy"
                />
                <div
                  class="absolute transform lg:-translate-y-1/2 lg:inset-x-40 lg:top-1/2 top-8"
                >
                  <a href="single-page.html">
                    <h2
                      class="text-white break-words text-center font-bold lg:text-3xl"
                    >
                      Ea dolore incididunt duis velit proident sunt ad velit
                      dolor. Duis aliqua aute ad ea. Proident minim in cillum
                      officia excepteur ullamco cillum.
                    </h2>
                    <div
                      class="flex items-center justify-center divide-x divide-white"
                    >
                      <div class="avatar items-center lg:px-4 px-2 py-3">
                        <div class="lg:w-12 w-10 rounded-full">
                          <img
                            src="https://api.lorem.space/image/face?hash=92310"
                          />
                        </div>
                        <h4 class="pl-2 text-white hidden lg:block">
                          Susilo Suharsono
                        </h4>
                      </div>
                      <div class="lg:px-4 px-2 py-3 text-sm text-white">
                        June 13, 2022
                      </div>
                      <div class="lg:flex justify-end gap-2 lg:px-4 px-2 py-3">
                        <div class="badge badge-sm badge-accent">Fashion</div>
                        <div class="badge badge-sm badge-accent">Products</div>
                      </div>
                    </div>
                  </a>
                </div>
              </article>
            </li>
            <li class="carousel-item absolute inset-0 w-full">
              <article>
                <img
                  src="https://picsum.photos/id/257/1000/440"
                  class="w-full object-cover brightness-75"
                  loading="lazy"
                />
                <div
                  class="absolute transform lg:-translate-y-1/2 lg:inset-x-40 lg:top-1/2 top-8"
                >
                  <a href="single-page.html">
                    <h2
                      class="text-white break-words text-center font-bold lg:text-3xl"
                    >
                      Ea dolore incididunt duis velit proident sunt ad velit
                      dolor. Duis aliqua aute ad ea. Proident minim in cillum
                      officia excepteur ullamco cillum.
                    </h2>
                    <div
                      class="flex items-center justify-center divide-x divide-white"
                    >
                      <div class="avatar items-center px-4 py-3">
                        <div class="lg:w-12 w-10 rounded-full">
                          <img
                            src="https://api.lorem.space/image/face?hash=92310"
                          />
                        </div>
                        <h4 class="pl-2 text-white hidden lg:block">
                          Susilo Suharsono
                        </h4>
                      </div>
                      <div class="px-4 py-3 text-sm text-white">
                        June 13, 2022
                      </div>
                      <div class="lg:flex justify-end gap-2 px-4 py-3">
                        <div class="badge badge-sm badge-accent">Fashion</div>
                        <div class="badge badge-sm badge-accent">Products</div>
                      </div>
                    </div>
                  </a>
                </div>
              </article>
            </li>
            <li class="carousel-item absolute inset-0 w-full">
              <article>
                <img
                  src="https://picsum.photos/id/247/1000/440"
                  class="w-full object-cover brightness-75"
                  loading="lazy"
                />
                <div
                  class="absolute transform lg:-translate-y-1/2 lg:inset-x-40 lg:top-1/2 top-8"
                >
                  <a href="single-page.html">
                    <h2
                      class="text-white break-words text-center font-bold lg:text-3xl"
                    >
                      Ea dolore incididunt duis velit proident sunt ad velit
                      dolor. Duis aliqua aute ad ea. Proident minim in cillum
                      officia excepteur ullamco cillum.
                    </h2>
                    <div
                      class="flex items-center justify-center divide-x divide-white"
                    >
                      <div class="avatar items-center px-4 py-3">
                        <div class="lg:w-12 w-10 rounded-full">
                          <img
                            src="https://api.lorem.space/image/face?hash=92310"
                          />
                        </div>
                        <h4 class="pl-2 text-white hidden lg:block">
                          Susilo Suharsono
                        </h4>
                      </div>
                      <div class="px-4 py-3 text-sm text-white">
                        June 13, 2022
                      </div>
                      <div class="lg:flex justify-end gap-2 px-4 py-3">
                        <div class="badge badge-sm badge-accent">Fashion</div>
                        <div class="badge badge-sm badge-accent">Products</div>
                      </div>
                    </div>
                  </a>
                </div>
              </article>
            </li>
          </ul>

          <div
            class="absolute flex justify-between transform lg:-translate-y-1/2 left-5 right-5 lg:top-1/2 top-1/4"
          >
            <button data-carousel-button="prev" class="btn btn-circle">
              <ion-icon name="chevron-back"></ion-icon>
            </button>
            <button data-carousel-button="next" class="btn btn-circle">
              <ion-icon name="chevron-forward"></ion-icon>
            </button>
          </div>
        </div>
      </section>
    `;
  }
};
AppComponent = __decorate([
  customElement("app-component")
], AppComponent);
const runningOnBrowser = typeof window !== "undefined";
const isBot = runningOnBrowser && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent);
const supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;
const supportsClassList = runningOnBrowser && "classList" in document.createElement("p");
const isHiDpi = runningOnBrowser && window.devicePixelRatio > 1;
const defaultSettings = {
  elements_selector: ".lazy",
  container: isBot || runningOnBrowser ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: true,
  unobserve_entered: false,
  cancel_on_exit: true,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: false,
  restore_on_error: false
};
const getExtendedSettings = (customSettings) => {
  return Object.assign({}, defaultSettings, customSettings);
};
const createInstance = function(classObj, options) {
  let event;
  const eventString = "LazyLoad::Initialized";
  const instance = new classObj(options);
  try {
    event = new CustomEvent(eventString, { detail: { instance } });
  } catch (err) {
    event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventString, false, false, { instance });
  }
  window.dispatchEvent(event);
};
const autoInitialize = (classObj, options) => {
  if (!options) {
    return;
  }
  if (!options.length) {
    createInstance(classObj, options);
  } else {
    for (let i = 0, optionsItem; optionsItem = options[i]; i += 1) {
      createInstance(classObj, optionsItem);
    }
  }
};
const SRC = "src";
const SRCSET = "srcset";
const SIZES = "sizes";
const POSTER = "poster";
const ORIGINALS = "llOriginalAttrs";
const DATA = "data";
const statusLoading = "loading";
const statusLoaded = "loaded";
const statusApplied = "applied";
const statusEntered = "entered";
const statusError = "error";
const statusNative = "native";
const dataPrefix = "data-";
const statusDataName = "ll-status";
const getData = (element, attribute) => {
  return element.getAttribute(dataPrefix + attribute);
};
const setData = (element, attribute, value) => {
  var attrName = dataPrefix + attribute;
  if (value === null) {
    element.removeAttribute(attrName);
    return;
  }
  element.setAttribute(attrName, value);
};
const getStatus = (element) => getData(element, statusDataName);
const setStatus = (element, status) => setData(element, statusDataName, status);
const resetStatus = (element) => setStatus(element, null);
const hasEmptyStatus = (element) => getStatus(element) === null;
const hasStatusLoading = (element) => getStatus(element) === statusLoading;
const hasStatusError = (element) => getStatus(element) === statusError;
const hasStatusNative = (element) => getStatus(element) === statusNative;
const statusesAfterLoading = [statusLoading, statusLoaded, statusApplied, statusError];
const hadStartedLoading = (element) => statusesAfterLoading.indexOf(getStatus(element)) >= 0;
const safeCallback = (callback, arg1, arg2, arg3) => {
  if (!callback) {
    return;
  }
  if (arg3 !== void 0) {
    callback(arg1, arg2, arg3);
    return;
  }
  if (arg2 !== void 0) {
    callback(arg1, arg2);
    return;
  }
  callback(arg1);
};
const addClass = (element, className) => {
  if (supportsClassList) {
    element.classList.add(className);
    return;
  }
  element.className += (element.className ? " " : "") + className;
};
const removeClass = (element, className) => {
  if (supportsClassList) {
    element.classList.remove(className);
    return;
  }
  element.className = element.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
};
const addTempImage = (element) => {
  element.llTempImage = document.createElement("IMG");
};
const deleteTempImage = (element) => {
  delete element.llTempImage;
};
const getTempImage = (element) => element.llTempImage;
const unobserve = (element, instance) => {
  if (!instance)
    return;
  const observer = instance._observer;
  if (!observer)
    return;
  observer.unobserve(element);
};
const resetObserver = (observer) => {
  observer.disconnect();
};
const unobserveEntered = (element, settings, instance) => {
  if (settings.unobserve_entered)
    unobserve(element, instance);
};
const updateLoadingCount = (instance, delta) => {
  if (!instance)
    return;
  instance.loadingCount += delta;
};
const decreaseToLoadCount = (instance) => {
  if (!instance)
    return;
  instance.toLoadCount -= 1;
};
const setToLoadCount = (instance, value) => {
  if (!instance)
    return;
  instance.toLoadCount = value;
};
const isSomethingLoading = (instance) => instance.loadingCount > 0;
const haveElementsToLoad = (instance) => instance.toLoadCount > 0;
const getSourceTags = (parentTag) => {
  let sourceTags = [];
  for (let i = 0, childTag; childTag = parentTag.children[i]; i += 1) {
    if (childTag.tagName === "SOURCE") {
      sourceTags.push(childTag);
    }
  }
  return sourceTags;
};
const forEachPictureSource = (element, fn) => {
  const parent = element.parentNode;
  if (!parent || parent.tagName !== "PICTURE") {
    return;
  }
  let sourceTags = getSourceTags(parent);
  sourceTags.forEach(fn);
};
const forEachVideoSource = (element, fn) => {
  let sourceTags = getSourceTags(element);
  sourceTags.forEach(fn);
};
const attrsSrc = [SRC];
const attrsSrcPoster = [SRC, POSTER];
const attrsSrcSrcsetSizes = [SRC, SRCSET, SIZES];
const attrsData = [DATA];
const hasOriginalAttrs = (element) => !!element[ORIGINALS];
const getOriginalAttrs = (element) => element[ORIGINALS];
const deleteOriginalAttrs = (element) => delete element[ORIGINALS];
const setOriginalsObject = (element, attributes) => {
  if (hasOriginalAttrs(element)) {
    return;
  }
  const originals = {};
  attributes.forEach((attribute) => {
    originals[attribute] = element.getAttribute(attribute);
  });
  element[ORIGINALS] = originals;
};
const saveOriginalBackgroundStyle = (element) => {
  if (hasOriginalAttrs(element)) {
    return;
  }
  element[ORIGINALS] = { backgroundImage: element.style.backgroundImage };
};
const setOrResetAttribute = (element, attrName, value) => {
  if (!value) {
    element.removeAttribute(attrName);
    return;
  }
  element.setAttribute(attrName, value);
};
const restoreOriginalAttrs = (element, attributes) => {
  if (!hasOriginalAttrs(element)) {
    return;
  }
  const originals = getOriginalAttrs(element);
  attributes.forEach((attribute) => {
    setOrResetAttribute(element, attribute, originals[attribute]);
  });
};
const restoreOriginalBgImage = (element) => {
  if (!hasOriginalAttrs(element)) {
    return;
  }
  const originals = getOriginalAttrs(element);
  element.style.backgroundImage = originals.backgroundImage;
};
const manageApplied = (element, settings, instance) => {
  addClass(element, settings.class_applied);
  setStatus(element, statusApplied);
  if (!instance)
    return;
  if (settings.unobserve_completed) {
    unobserve(element, settings);
  }
  safeCallback(settings.callback_applied, element, instance);
};
const manageLoading = (element, settings, instance) => {
  addClass(element, settings.class_loading);
  setStatus(element, statusLoading);
  if (!instance)
    return;
  updateLoadingCount(instance, 1);
  safeCallback(settings.callback_loading, element, instance);
};
const setAttributeIfValue = (element, attrName, value) => {
  if (!value) {
    return;
  }
  element.setAttribute(attrName, value);
};
const setImageAttributes = (element, settings) => {
  setAttributeIfValue(element, SIZES, getData(element, settings.data_sizes));
  setAttributeIfValue(element, SRCSET, getData(element, settings.data_srcset));
  setAttributeIfValue(element, SRC, getData(element, settings.data_src));
};
const setSourcesImg = (imgEl, settings) => {
  forEachPictureSource(imgEl, (sourceTag) => {
    setOriginalsObject(sourceTag, attrsSrcSrcsetSizes);
    setImageAttributes(sourceTag, settings);
  });
  setOriginalsObject(imgEl, attrsSrcSrcsetSizes);
  setImageAttributes(imgEl, settings);
};
const setSourcesIframe = (iframe, settings) => {
  setOriginalsObject(iframe, attrsSrc);
  setAttributeIfValue(iframe, SRC, getData(iframe, settings.data_src));
};
const setSourcesVideo = (videoEl, settings) => {
  forEachVideoSource(videoEl, (sourceEl) => {
    setOriginalsObject(sourceEl, attrsSrc);
    setAttributeIfValue(sourceEl, SRC, getData(sourceEl, settings.data_src));
  });
  setOriginalsObject(videoEl, attrsSrcPoster);
  setAttributeIfValue(videoEl, POSTER, getData(videoEl, settings.data_poster));
  setAttributeIfValue(videoEl, SRC, getData(videoEl, settings.data_src));
  videoEl.load();
};
const setSourcesObject = (object, settings) => {
  setOriginalsObject(object, attrsData);
  setAttributeIfValue(object, DATA, getData(object, settings.data_src));
};
const setBackground = (element, settings, instance) => {
  const bg1xValue = getData(element, settings.data_bg);
  const bgHiDpiValue = getData(element, settings.data_bg_hidpi);
  const bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue;
  if (!bgDataValue)
    return;
  element.style.backgroundImage = `url("${bgDataValue}")`;
  getTempImage(element).setAttribute(SRC, bgDataValue);
  manageLoading(element, settings, instance);
};
const setMultiBackground = (element, settings, instance) => {
  const bg1xValue = getData(element, settings.data_bg_multi);
  const bgHiDpiValue = getData(element, settings.data_bg_multi_hidpi);
  const bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue;
  if (!bgDataValue) {
    return;
  }
  element.style.backgroundImage = bgDataValue;
  manageApplied(element, settings, instance);
};
const setImgsetBackground = (element, settings, instance) => {
  const bgImgSetDataValue = getData(element, settings.data_bg_set);
  if (!bgImgSetDataValue) {
    return;
  }
  const imgSetValues = bgImgSetDataValue.split("|");
  let bgImageValues = imgSetValues.map((value) => `image-set(${value})`);
  element.style.backgroundImage = bgImageValues.join();
  if (element.style.backgroundImage === "") {
    bgImageValues = imgSetValues.map((value) => `-webkit-image-set(${value})`);
    element.style.backgroundImage = bgImageValues.join();
  }
  manageApplied(element, settings, instance);
};
const setSourcesFunctions = {
  IMG: setSourcesImg,
  IFRAME: setSourcesIframe,
  VIDEO: setSourcesVideo,
  OBJECT: setSourcesObject
};
const setSourcesNative = (element, settings) => {
  const setSourcesFunction = setSourcesFunctions[element.tagName];
  if (!setSourcesFunction) {
    return;
  }
  setSourcesFunction(element, settings);
};
const setSources = (element, settings, instance) => {
  const setSourcesFunction = setSourcesFunctions[element.tagName];
  if (!setSourcesFunction) {
    return;
  }
  setSourcesFunction(element, settings);
  manageLoading(element, settings, instance);
};
const elementsWithLoadEvent = ["IMG", "IFRAME", "VIDEO", "OBJECT"];
const hasLoadEvent = (element) => elementsWithLoadEvent.indexOf(element.tagName) > -1;
const checkFinish = (settings, instance) => {
  if (instance && !isSomethingLoading(instance) && !haveElementsToLoad(instance)) {
    safeCallback(settings.callback_finish, instance);
  }
};
const addEventListener = (element, eventName, handler) => {
  element.addEventListener(eventName, handler);
  element.llEvLisnrs[eventName] = handler;
};
const removeEventListener = (element, eventName, handler) => {
  element.removeEventListener(eventName, handler);
};
const hasEventListeners = (element) => {
  return !!element.llEvLisnrs;
};
const addEventListeners = (element, loadHandler2, errorHandler2) => {
  if (!hasEventListeners(element))
    element.llEvLisnrs = {};
  const loadEventName = element.tagName === "VIDEO" ? "loadeddata" : "load";
  addEventListener(element, loadEventName, loadHandler2);
  addEventListener(element, "error", errorHandler2);
};
const removeEventListeners = (element) => {
  if (!hasEventListeners(element)) {
    return;
  }
  const eventListeners = element.llEvLisnrs;
  for (let eventName in eventListeners) {
    const handler = eventListeners[eventName];
    removeEventListener(element, eventName, handler);
  }
  delete element.llEvLisnrs;
};
const doneHandler = (element, settings, instance) => {
  deleteTempImage(element);
  updateLoadingCount(instance, -1);
  decreaseToLoadCount(instance);
  removeClass(element, settings.class_loading);
  if (settings.unobserve_completed) {
    unobserve(element, instance);
  }
};
const loadHandler = (event, element, settings, instance) => {
  const goingNative = hasStatusNative(element);
  doneHandler(element, settings, instance);
  addClass(element, settings.class_loaded);
  setStatus(element, statusLoaded);
  safeCallback(settings.callback_loaded, element, instance);
  if (!goingNative)
    checkFinish(settings, instance);
};
const errorHandler = (event, element, settings, instance) => {
  const goingNative = hasStatusNative(element);
  doneHandler(element, settings, instance);
  addClass(element, settings.class_error);
  setStatus(element, statusError);
  safeCallback(settings.callback_error, element, instance);
  if (settings.restore_on_error)
    restoreOriginalAttrs(element, attrsSrcSrcsetSizes);
  if (!goingNative)
    checkFinish(settings, instance);
};
const addOneShotEventListeners = (element, settings, instance) => {
  const elementToListenTo = getTempImage(element) || element;
  if (hasEventListeners(elementToListenTo)) {
    return;
  }
  const _loadHandler = (event) => {
    loadHandler(event, element, settings, instance);
    removeEventListeners(elementToListenTo);
  };
  const _errorHandler = (event) => {
    errorHandler(event, element, settings, instance);
    removeEventListeners(elementToListenTo);
  };
  addEventListeners(elementToListenTo, _loadHandler, _errorHandler);
};
const loadBackground = (element, settings, instance) => {
  addTempImage(element);
  addOneShotEventListeners(element, settings, instance);
  saveOriginalBackgroundStyle(element);
  setBackground(element, settings, instance);
  setMultiBackground(element, settings, instance);
  setImgsetBackground(element, settings, instance);
};
const loadRegular = (element, settings, instance) => {
  addOneShotEventListeners(element, settings, instance);
  setSources(element, settings, instance);
};
const load = (element, settings, instance) => {
  if (hasLoadEvent(element)) {
    loadRegular(element, settings, instance);
  } else {
    loadBackground(element, settings, instance);
  }
};
const loadNative = (element, settings, instance) => {
  element.setAttribute("loading", "lazy");
  addOneShotEventListeners(element, settings, instance);
  setSourcesNative(element, settings);
  setStatus(element, statusNative);
};
const removeImageAttributes = (element) => {
  element.removeAttribute(SRC);
  element.removeAttribute(SRCSET);
  element.removeAttribute(SIZES);
};
const resetSourcesImg = (element) => {
  forEachPictureSource(element, (sourceTag) => {
    removeImageAttributes(sourceTag);
  });
  removeImageAttributes(element);
};
const restoreImg = (imgEl) => {
  forEachPictureSource(imgEl, (sourceEl) => {
    restoreOriginalAttrs(sourceEl, attrsSrcSrcsetSizes);
  });
  restoreOriginalAttrs(imgEl, attrsSrcSrcsetSizes);
};
const restoreVideo = (videoEl) => {
  forEachVideoSource(videoEl, (sourceEl) => {
    restoreOriginalAttrs(sourceEl, attrsSrc);
  });
  restoreOriginalAttrs(videoEl, attrsSrcPoster);
  videoEl.load();
};
const restoreIframe = (iframeEl) => {
  restoreOriginalAttrs(iframeEl, attrsSrc);
};
const restoreObject = (objectEl) => {
  restoreOriginalAttrs(objectEl, attrsData);
};
const restoreFunctions = {
  IMG: restoreImg,
  IFRAME: restoreIframe,
  VIDEO: restoreVideo,
  OBJECT: restoreObject
};
const restoreAttributes = (element) => {
  const restoreFunction = restoreFunctions[element.tagName];
  if (!restoreFunction) {
    restoreOriginalBgImage(element);
    return;
  }
  restoreFunction(element);
};
const resetClasses = (element, settings) => {
  if (hasEmptyStatus(element) || hasStatusNative(element)) {
    return;
  }
  removeClass(element, settings.class_entered);
  removeClass(element, settings.class_exited);
  removeClass(element, settings.class_applied);
  removeClass(element, settings.class_loading);
  removeClass(element, settings.class_loaded);
  removeClass(element, settings.class_error);
};
const restore = (element, settings) => {
  restoreAttributes(element);
  resetClasses(element, settings);
  resetStatus(element);
  deleteOriginalAttrs(element);
};
const cancelLoading = (element, entry, settings, instance) => {
  if (!settings.cancel_on_exit)
    return;
  if (!hasStatusLoading(element))
    return;
  if (element.tagName !== "IMG")
    return;
  removeEventListeners(element);
  resetSourcesImg(element);
  restoreImg(element);
  removeClass(element, settings.class_loading);
  updateLoadingCount(instance, -1);
  resetStatus(element);
  safeCallback(settings.callback_cancel, element, entry, instance);
};
const onEnter = (element, entry, settings, instance) => {
  const dontLoad = hadStartedLoading(element);
  setStatus(element, statusEntered);
  addClass(element, settings.class_entered);
  removeClass(element, settings.class_exited);
  unobserveEntered(element, settings, instance);
  safeCallback(settings.callback_enter, element, entry, instance);
  if (dontLoad)
    return;
  load(element, settings, instance);
};
const onExit = (element, entry, settings, instance) => {
  if (hasEmptyStatus(element))
    return;
  addClass(element, settings.class_exited);
  cancelLoading(element, entry, settings, instance);
  safeCallback(settings.callback_exit, element, entry, instance);
};
const tagsWithNativeLazy = ["IMG", "IFRAME", "VIDEO"];
const shouldUseNative = (settings) => settings.use_native && "loading" in HTMLImageElement.prototype;
const loadAllNative = (elements, settings, instance) => {
  elements.forEach((element) => {
    if (tagsWithNativeLazy.indexOf(element.tagName) === -1) {
      return;
    }
    loadNative(element, settings, instance);
  });
  setToLoadCount(instance, 0);
};
const isIntersecting = (entry) => entry.isIntersecting || entry.intersectionRatio > 0;
const getObserverSettings = (settings) => ({
  root: settings.container === document ? null : settings.container,
  rootMargin: settings.thresholds || settings.threshold + "px"
});
const intersectionHandler = (entries, settings, instance) => {
  entries.forEach((entry) => isIntersecting(entry) ? onEnter(entry.target, entry, settings, instance) : onExit(entry.target, entry, settings, instance));
};
const observeElements = (observer, elements) => {
  elements.forEach((element) => {
    observer.observe(element);
  });
};
const updateObserver = (observer, elementsToObserve) => {
  resetObserver(observer);
  observeElements(observer, elementsToObserve);
};
const setObserver = (settings, instance) => {
  if (!supportsIntersectionObserver || shouldUseNative(settings)) {
    return;
  }
  instance._observer = new IntersectionObserver((entries) => {
    intersectionHandler(entries, settings, instance);
  }, getObserverSettings(settings));
};
const toArray = (nodeSet) => Array.prototype.slice.call(nodeSet);
const queryElements = (settings) => settings.container.querySelectorAll(settings.elements_selector);
const excludeManagedElements = (elements) => toArray(elements).filter(hasEmptyStatus);
const hasError = (element) => hasStatusError(element);
const filterErrorElements = (elements) => toArray(elements).filter(hasError);
const getElementsToLoad = (elements, settings) => excludeManagedElements(elements || queryElements(settings));
const retryLazyLoad = (settings, instance) => {
  const errorElements = filterErrorElements(queryElements(settings));
  errorElements.forEach((element) => {
    removeClass(element, settings.class_error);
    resetStatus(element);
  });
  instance.update();
};
const setOnlineCheck = (settings, instance) => {
  if (!runningOnBrowser) {
    return;
  }
  instance._onlineHandler = () => {
    retryLazyLoad(settings, instance);
  };
  window.addEventListener("online", instance._onlineHandler);
};
const resetOnlineCheck = (instance) => {
  if (!runningOnBrowser) {
    return;
  }
  window.removeEventListener("online", instance._onlineHandler);
};
const LazyLoad = function(customSettings, elements) {
  const settings = getExtendedSettings(customSettings);
  this._settings = settings;
  this.loadingCount = 0;
  setObserver(settings, this);
  setOnlineCheck(settings, this);
  this.update(elements);
};
LazyLoad.prototype = {
  update: function(givenNodeset) {
    const settings = this._settings;
    const elementsToLoad = getElementsToLoad(givenNodeset, settings);
    setToLoadCount(this, elementsToLoad.length);
    if (isBot || !supportsIntersectionObserver) {
      this.loadAll(elementsToLoad);
      return;
    }
    if (shouldUseNative(settings)) {
      loadAllNative(elementsToLoad, settings, this);
      return;
    }
    updateObserver(this._observer, elementsToLoad);
  },
  destroy: function() {
    if (this._observer) {
      this._observer.disconnect();
    }
    resetOnlineCheck(this);
    queryElements(this._settings).forEach((element) => {
      deleteOriginalAttrs(element);
    });
    delete this._observer;
    delete this._settings;
    delete this._onlineHandler;
    delete this.loadingCount;
    delete this.toLoadCount;
  },
  loadAll: function(elements) {
    const settings = this._settings;
    const elementsToLoad = getElementsToLoad(elements, settings);
    elementsToLoad.forEach((element) => {
      unobserve(element, this);
      load(element, settings, this);
    });
  },
  restoreAll: function() {
    const settings = this._settings;
    queryElements(settings).forEach((element) => {
      restore(element, settings);
    });
  }
};
LazyLoad.load = (element, customSettings) => {
  const settings = getExtendedSettings(customSettings);
  load(element, settings);
};
LazyLoad.resetStatus = (element) => {
  resetStatus(element);
};
if (runningOnBrowser) {
  autoInitialize(LazyLoad, window.lazyLoadOptions);
}
function themeToggle() {
  var toggleEl = document.querySelector("[data-toggle-theme]");
  (function(theme = localStorage.getItem("theme")) {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme", theme);
      if (toggleEl) {
        [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
          el.classList.add(toggleEl.getAttribute("data-act-class"));
        });
      }
    }
  })();
  if (toggleEl) {
    [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
      el.addEventListener("click", function() {
        var themesList = el.getAttribute("data-toggle-theme");
        if (themesList) {
          var themesArray = themesList.split(",");
          if (document.documentElement.getAttribute("data-theme") == themesArray[0]) {
            if (themesArray.length == 1) {
              document.documentElement.removeAttribute("data-theme");
              localStorage.removeItem("theme");
            } else {
              document.documentElement.setAttribute("data-theme", themesArray[1]);
              localStorage.setItem("theme", themesArray[1]);
            }
          } else {
            document.documentElement.setAttribute("data-theme", themesArray[0]);
            localStorage.setItem("theme", themesArray[0]);
          }
        }
        [...document.querySelectorAll("[data-toggle-theme]")].forEach((el2) => {
          el2.classList.toggle(this.getAttribute("data-act-class"));
        });
      });
    });
  }
}
function themeBtn() {
  (function(theme = localStorage.getItem("theme")) {
    if (theme != void 0 && theme != "") {
      if (localStorage.getItem("theme") && localStorage.getItem("theme") != "") {
        document.documentElement.setAttribute("data-theme", theme);
        var btnEl = document.querySelector("[data-set-theme='" + theme.toString() + "']");
        if (btnEl) {
          [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
            el.classList.remove(el.getAttribute("data-act-class"));
          });
          if (btnEl.getAttribute("data-act-class")) {
            btnEl.classList.add(btnEl.getAttribute("data-act-class"));
          }
        }
      } else {
        var btnEl = document.querySelector("[data-set-theme='']");
        if (btnEl.getAttribute("data-act-class")) {
          btnEl.classList.add(btnEl.getAttribute("data-act-class"));
        }
      }
    }
  })();
  [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
    el.addEventListener("click", function() {
      document.documentElement.setAttribute("data-theme", this.getAttribute("data-set-theme"));
      localStorage.setItem("theme", document.documentElement.getAttribute("data-theme"));
      [...document.querySelectorAll("[data-set-theme]")].forEach((el2) => {
        el2.classList.remove(el2.getAttribute("data-act-class"));
      });
      if (el.getAttribute("data-act-class")) {
        el.classList.add(el.getAttribute("data-act-class"));
      }
    });
  });
}
function themeSelect() {
  (function(theme = localStorage.getItem("theme")) {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme", theme);
      var optionToggler = document.querySelector("select[data-choose-theme] [value='" + theme.toString() + "']");
      if (optionToggler) {
        [...document.querySelectorAll("select[data-choose-theme] [value='" + theme.toString() + "']")].forEach((el) => {
          el.selected = true;
        });
      }
    }
  })();
  if (document.querySelector("select[data-choose-theme]")) {
    [...document.querySelectorAll("select[data-choose-theme]")].forEach((el) => {
      el.addEventListener("change", function() {
        document.documentElement.setAttribute("data-theme", this.value);
        localStorage.setItem("theme", document.documentElement.getAttribute("data-theme"));
        [...document.querySelectorAll("select[data-choose-theme] [value='" + localStorage.getItem("theme") + "']")].forEach((el2) => {
          el2.selected = true;
        });
      });
    });
  }
}
function themeChange(attach = true) {
  if (attach === true) {
    document.addEventListener("DOMContentLoaded", function(event) {
      themeToggle();
      themeSelect();
      themeBtn();
    });
  } else {
    themeToggle();
    themeSelect();
    themeBtn();
  }
}
if (typeof exports != "undefined") {
  module.exports = { themeChange };
} else {
  themeChange();
}
const buttonCaraousel = document.querySelectorAll("[data-carousel-button]");
buttonCaraousel.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlides = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlides) + offset;
    if (newIndex < 0)
      newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length)
      newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlides.dataset.active;
  });
});
var searchBar = document.getElementById("search-bar");
var btnshow = document.getElementById("btn-show");
btnshow.addEventListener("click", function() {
  if (searchBar.classList.contains("hidden")) {
    searchBar.classList.remove("hidden");
    searchBar.classList.add("block");
  }
});
searchBar.addEventListener("mouseout", () => {
  searchBar.classList.remove("block");
  searchBar.classList.add("hidden");
});
themeToggle();
themeToggle();
var lazyLoadInstance = new LazyLoad({
  use_native: true,
  callback_error: (img) => {
    img.setAttribute("srcset", "fallback_image@1x.jpg 1x, fallback_image@2x.jpg 2x");
    img.setAttribute("src", "fallback_image@1x.jpg");
  }
});
lazyLoadInstance.update();
