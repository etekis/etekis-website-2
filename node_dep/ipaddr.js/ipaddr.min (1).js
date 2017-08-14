(function(){var r,t,n,e,i,o,a,s;t={},s=this,"undefined"!=typeof module&&null!==module&&module.exports?module.exports=t:s.ipaddr=t,a=function(r,t,n,e){var i,o;if(r.length!==t.length)throw new Error("ipaddr: cannot match CIDR for objects with different lengths");for(i=0;e>0;){if(o=n-e,0>o&&(o=0),r[i]>>o!==t[i]>>o)return!1;e-=n,i+=1}return!0},t.subnetMatch=function(r,t,n){var e,i,o,a,s;null==n&&(n="unicast");for(e in t)for(i=t[e],!i[0]||i[0]instanceof Array||(i=[i]),a=0,s=i.length;s>a;a++)if(o=i[a],r.match.apply(r,o))return e;return n},t.IPv4=function(){function r(r){var t,n,e;if(4!==r.length)throw new Error("ipaddr: ipv4 octet count should be 4");for(n=0,e=r.length;e>n;n++)if(t=r[n],!(t>=0&&255>=t))throw new Error("ipaddr: ipv4 octet should fit in 8 bits");this.octets=r}return r.prototype.kind=function(){return"ipv4"},r.prototype.toString=function(){return this.octets.join(".")},r.prototype.toByteArray=function(){return this.octets.slice(0)},r.prototype.match=function(r,t){var n;if(void 0===t&&(n=r,r=n[0],t=n[1]),"ipv4"!==r.kind())throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");return a(this.octets,r.octets,8,t)},r.prototype.SpecialRanges={unspecified:[[new r([0,0,0,0]),8]],broadcast:[[new r([255,255,255,255]),32]],multicast:[[new r([224,0,0,0]),4]],linkLocal:[[new r([169,254,0,0]),16]],loopback:[[new r([127,0,0,0]),8]],"private":[[new r([10,0,0,0]),8],[new r([172,16,0,0]),12],[new r([192,168,0,0]),16]],reserved:[[new r([192,0,0,0]),24],[new r([192,0,2,0]),24],[new r([192,88,99,0]),24],[new r([198,51,100,0]),24],[new r([203,0,113,0]),24],[new r([240,0,0,0]),4]]},r.prototype.range=function(){return t.subnetMatch(this,this.SpecialRanges)},r.prototype.toIPv4MappedAddress=function(){return t.IPv6.parse("::ffff:"+this.toString())},r.prototype.prefixLengthFromSubnetMask=function(){var r,t,n,e,i,o,a;for(o={0:8,128:7,192:6,224:5,240:4,248:3,252:2,254:1,255:0},r=0,e=!1,t=a=3;a>=0;t=a+=-1){if(n=this.octets[t],!(n in o))return null;if(i=o[n],e&&0!==i)return null;8!==i&&(e=!0),r+=i}return 32-r},r}(),n="(0?\\d+|0x[a-f0-9]+)",e={fourOctet:new RegExp("^"+n+"\\."+n+"\\."+n+"\\."+n+"$","i"),longValue:new RegExp("^"+n+"$","i")},t.IPv4.parser=function(r){var t,n,i,o,a;if(n=function(r){return"0"===r[0]&&"x"!==r[1]?parseInt(r,8):parseInt(r)},t=r.match(e.fourOctet))return function(){var r,e,o,a;for(o=t.slice(1,6),a=[],r=0,e=o.length;e>r;r++)i=o[r],a.push(n(i));return a}();if(t=r.match(e.longValue)){if(a=n(t[1]),a>4294967295||0>a)throw new Error("ipaddr: address outside defined range");return function(){var r,t;for(t=[],o=r=0;24>=r;o=r+=8)t.push(a>>o&255);return t}().reverse()}return null},t.IPv6=function(){function r(r){var t,n,e,i,o,a;if(16===r.length)for(this.parts=[],t=e=0;14>=e;t=e+=2)this.parts.push(r[t]<<8|r[t+1]);else{if(8!==r.length)throw new Error("ipaddr: ipv6 part count should be 8 or 16");this.parts=r}for(a=this.parts,i=0,o=a.length;o>i;i++)if(n=a[i],!(n>=0&&65535>=n))throw new Error("ipaddr: ipv6 part should fit in 16 bits")}return r.prototype.kind=function(){return"ipv6"},r.prototype.toString=function(){var r,t,n,e,i,o,a;for(i=function(){var r,n,e,i;for(e=this.parts,i=[],r=0,n=e.length;n>r;r++)t=e[r],i.push(t.toString(16));return i}.call(this),r=[],n=function(t){return r.push(t)},e=0,o=0,a=i.length;a>o;o++)switch(t=i[o],e){case 0:n("0"===t?"":t),e=1;break;case 1:"0"===t?e=2:n(t);break;case 2:"0"!==t&&(n(""),n(t),e=3);break;case 3:n(t)}return 2===e&&(n(""),n("")),r.join(":")},r.prototype.toByteArray=function(){var r,t,n,e,i;for(r=[],i=this.parts,n=0,e=i.length;e>n;n++)t=i[n],r.push(t>>8),r.push(255&t);return r},r.prototype.toNormalizedString=function(){var r;return function(){var t,n,e,i;for(e=this.parts,i=[],t=0,n=e.length;n>t;t++)r=e[t],i.push(r.toString(16));return i}.call(this).join(":")},r.prototype.match=function(r,t){var n;if(void 0===t&&(n=r,r=n[0],t=n[1]),"ipv6"!==r.kind())throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");return a(this.parts,r.parts,16,t)},r.prototype.SpecialRanges={unspecified:[new r([0,0,0,0,0,0,0,0]),128],linkLocal:[new r([65152,0,0,0,0,0,0,0]),10],multicast:[new r([65280,0,0,0,0,0,0,0]),8],loopback:[new r([0,0,0,0,0,0,0,1]),128],uniqueLocal:[new r([64512,0,0,0,0,0,0,0]),7],ipv4Mapped:[new r([0,0,0,0,0,65535,0,0]),96],rfc6145:[new r([0,0,0,0,65535,0,0,0]),96],rfc6052:[new r([100,65435,0,0,0,0,0,0]),96],"6to4":[new r([8194,0,0,0,0,0,0,0]),16],teredo:[new r([8193,0,0,0,0,0,0,0]),32],reserved:[[new r([8193,3512,0,0,0,0,0,0]),32]]},r.prototype.range=function(){return t.subnetMatch(this,this.SpecialRanges)},r.prototype.isIPv4MappedAddress=function(){return"ipv4Mapped"===this.range()},r.prototype.toIPv4Address=function(){var r,n,e;if(!this.isIPv4MappedAddress())throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");return e=this.parts.slice(-2),r=e[0],n=e[1],new t.IPv4([r>>8,255&r,n>>8,255&n])},r}(),i="(?:[0-9a-f]+::?)+",o={"native":new RegExp("^(::)?("+i+")?([0-9a-f]+)?(::)?$","i"),transitional:new RegExp("^((?:"+i+")|(?:::)(?:"+i+")?)"+(""+n+"\\."+n+"\\."+n+"\\."+n+"$"),"i")},r=function(r,t){var n,e,i,o,a;if(r.indexOf("::")!==r.lastIndexOf("::"))return null;for(n=0,e=-1;(e=r.indexOf(":",e+1))>=0;)n++;if("::"===r.substr(0,2)&&n--,"::"===r.substr(-2,2)&&n--,n>t)return null;for(a=t-n,o=":";a--;)o+="0:";return r=r.replace("::",o),":"===r[0]&&(r=r.slice(1)),":"===r[r.length-1]&&(r=r.slice(0,-1)),function(){var t,n,e,o;for(e=r.split(":"),o=[],t=0,n=e.length;n>t;t++)i=e[t],o.push(parseInt(i,16));return o}()},t.IPv6.parser=function(t){var n,e,i,a,s,p;if(t.match(o["native"]))return r(t,8);if((n=t.match(o.transitional))&&(a=r(n[1].slice(0,-1),6))){for(i=[parseInt(n[2]),parseInt(n[3]),parseInt(n[4]),parseInt(n[5])],s=0,p=i.length;p>s;s++)if(e=i[s],!(e>=0&&255>=e))return null;return a.push(i[0]<<8|i[1]),a.push(i[2]<<8|i[3]),a}return null},t.IPv4.isIPv4=t.IPv6.isIPv6=function(r){return null!==this.parser(r)},t.IPv4.isValid=function(r){var t;try{return new this(this.parser(r)),!0}catch(n){return t=n,!1}},t.IPv6.isValid=function(r){var t;if("string"==typeof r&&-1===r.indexOf(":"))return!1;try{return new this(this.parser(r)),!0}catch(n){return t=n,!1}},t.IPv4.parse=t.IPv6.parse=function(r){var t;if(t=this.parser(r),null===t)throw new Error("ipaddr: string is not formatted like ip address");return new this(t)},t.IPv4.parseCIDR=function(r){var t,n;if((n=r.match(/^(.+)\/(\d+)$/))&&(t=parseInt(n[2]),t>=0&&32>=t))return[this.parse(n[1]),t];throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range")},t.IPv6.parseCIDR=function(r){var t,n;if((n=r.match(/^(.+)\/(\d+)$/))&&(t=parseInt(n[2]),t>=0&&128>=t))return[this.parse(n[1]),t];throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range")},t.isValid=function(r){return t.IPv6.isValid(r)||t.IPv4.isValid(r)},t.parse=function(r){if(t.IPv6.isValid(r))return t.IPv6.parse(r);if(t.IPv4.isValid(r))return t.IPv4.parse(r);throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format")},t.parseCIDR=function(r){var n;try{return t.IPv6.parseCIDR(r)}catch(e){n=e;try{return t.IPv4.parseCIDR(r)}catch(e){throw n=e,new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format")}}},t.fromByteArray=function(r){var n;if(n=r.length,4===n)return new t.IPv4(r);if(16===n)return new t.IPv6(r);throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address")},t.process=function(r){var t;return t=this.parse(r),"ipv6"===t.kind()&&t.isIPv4MappedAddress()?t.toIPv4Address():t}}).call(this);