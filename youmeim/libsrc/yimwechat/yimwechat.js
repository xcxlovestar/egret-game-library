!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("youme-im/voice")):"function"==typeof define&&define.amd?define(["youme-im/voice"],t):n.WechatRecorder=t(n.VoiceMessage)}(this,function(n){n=n&&n.hasOwnProperty("default")?n.default:n;var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t){function o(){var n=null!==t&&t.apply(this,arguments)||this;return n.n="",n.t="",n.i=0,n.o=0,n.r=!1,n.e=!1,n.u=!1,n.s=function(){},n.c=function(){},n.f=function(){},n.typeId=1,n.typeName="wechat",n}return function(n,t){function i(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(o,t),o.h=function(){var o=this;if(this.a)return Promise.resolve();if(this.l)return new Promise(function(n,t){o.m.push(n),o.v.push(t),300<o.m.length&&(o.m.unshift(),o.v.unshift())});var i=this.d;if(!i){var n=new Error;return n.name="WXObjectIsEmptyError",Promise.reject(n)}return this.l=!0,new Promise(function(n){i.ready(function(){n()})}).then(function(){return new Promise(function(s,c){var f=["startRecord","stopRecord","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice"];i.checkJsApi({jsApiList:f,success:function(n){if(!n||!n.checkResult)return(t=new Error).name="WXObjectNoConfigError",void c(t);for(var t,i=n.checkResult,o=[],r=0,e=f;r<e.length;r++){var u=e[r];i[u]||o.push(u)}if(o.length)return(t=new Error).name="WXNoPermissionError",void c(t);s()}})})}).then(function(){return new Promise(function(n,t){i.startRecord({success:function(){setTimeout(function(){i.stopRecord({success:function(){},complete:function(){setTimeout(function(){return n()},100)}})},200)},fail:function(){var n=new Error;n.name="NotAllowedError",t(n)}})})}).then(function(){o.a=!0,o.l=!1;for(var n=0,t=o.m;n<t.length;n++){(0,t[n])()}return o.m.splice(0,333),o.v.splice(0,333),o.d.onVoiceRecordEnd({complete:function(n){o.w&&o.p.call(o.w,n)}}),o.d.onVoicePlayEnd({success:function(n){o.P.call(o.y,n)}}),Promise.resolve()}).catch(function(n){for(var t=0,i=o.v;t<i.length;t++){(0,i[t])(n)}throw n})},o.b=function(t,n,i){var o=this;if(this.w){var r=new Error("Recorder is busy.");throw r.name="RecorderBusyError",r}this.y&&this.j(),this.w=n,this.p=i,this.T=!0,this.d.startRecord(Object.assign({},t,{success:function(n){t&&t.success&&t.success(n),setTimeout(function(){o.T=!1},900)}}))},o.g=function(){var t=this;this.T?setTimeout(function(){return t.g()},500):this.d.stopRecord({success:function(n){t.w&&t.p.call(t.w,n),t.w=null,t.p=function(){}}})},o.O=function(n,t,i){var o=this;if(this.y)return this.j(),void setTimeout(function(){return o.O(n,t,i)},100);this.d.playVoice(n),this.y=t,this.V=n,this.P=i},o.j=function(){this.d.stopVoice(this.V),this.y&&this.P.call(this.y),this.y=null,this.V={},this.P=function(){}},o.D=function(n){var i=this;return new Promise(function(t){i.d.downloadVoice({serverId:n,isShowProgressTips:0,success:function(n){t(n.localId||"")}})})},o.I=function(n){var i=this;return new Promise(function(t){i.d.uploadVoice({localId:n,isShowProgressTips:0,success:function(n){t(n.serverId)}})})},o.setWXObject=function(n){this.d=n},o.isWechat=function(){return!!navigator.userAgent.toLowerCase().match(/micromessenger/i)},o.prototype.isEnvSupport=function(){return o.isWechat()},o.prototype.isSupportMsg=function(n){return"object"==typeof n&&"string"==typeof n.mediaid&&0<n.mediaid.length},o.prototype.initRecord=function(){return o.h().then(function(){})},o.prototype.startRecord=function(){var i=this;return this.o=+new Date,new Promise(function(n,t){o.b({success:function(){i.o=+new Date,n()}},i,i.R),i.r=!0,i.u=!1})},o.prototype.finishRecord=function(){var i=this;return new Promise(function(n,t){i.c=n,o.g(),i.i=(+new Date-i.o)/1e3})},o.prototype.cancelRecord=function(){this.u=!0,o.g()},o.prototype.isRecording=function(){return this.r},o.prototype.onRecordEnd=function(n){this.s=n},o.prototype.getJsonMsg=function(){return{voicetime:this.getDuration().toFixed(2),mediaid:this.t,recordmode:this.getTypeId()}},o.prototype.initWithJsonMsg=function(n){var t=this;return this.i=n.voicetime,this.t=n.mediaid,o.h().then(function(){return o.D(t.t)}).then(function(n){t.n=n})},o.prototype.play=function(){o.O({localId:this.n},this,this._),this.e=!0,o.y=this},o.prototype.stop=function(){o.j(),this.e=!1,o.y=null},o.prototype.isPlaying=function(){return this.e},o.prototype.onPlayEnd=function(n){this.f=n},o.prototype.getDuration=function(){return this.i},o.prototype._=function(){this.e=!1,this.f()},o.prototype.R=function(n){var t=this,i=n.localId;this.u||(this.i=this.i<.1?(+new Date-this.o)/1e3:this.i,o.I(i).then(function(n){t.n=i,t.t=n,t.c(),t.s(),t.c=function(){},t.r=!1}))},o.d=null,o.a=!1,o.l=!1,o.T=!1,o.m=[],o.v=[],o.w=null,o.y=null,o.V={},o}(n.Recorder)});