var hexcase=0;var b64pad="";var chrsz=8;function hex_md5(A){return binl2hex(core_md5(str2binl(A),A.length*chrsz))}function b64_md5(A){return binl2b64(core_md5(str2binl(A),A.length*chrsz))}function str_md5(A){return binl2str(core_md5(str2binl(A),A.length*chrsz))}function hex_hmac_md5(A,B){return binl2hex(core_hmac_md5(A,B))}function b64_hmac_md5(A,B){return binl2b64(core_hmac_md5(A,B))}function str_hmac_md5(A,B){return binl2str(core_hmac_md5(A,B))}function md5_vm_test(){return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72"}function core_md5(I,G){I[G>>5]|=128<<((G)%32);I[(((G+64)>>>9)<<4)+14]=G;var H=1732584193;var F=-271733879;var J=-1732584194;var K=271733878;for(var C=0;C<I.length;C+=16){var D=H;var E=F;var A=J;var B=K;H=md5_ff(H,F,J,K,I[C+0],7,-680876936);K=md5_ff(K,H,F,J,I[C+1],12,-389564586);J=md5_ff(J,K,H,F,I[C+2],17,606105819);F=md5_ff(F,J,K,H,I[C+3],22,-1044525330);H=md5_ff(H,F,J,K,I[C+4],7,-176418897);K=md5_ff(K,H,F,J,I[C+5],12,1200080426);J=md5_ff(J,K,H,F,I[C+6],17,-1473231341);F=md5_ff(F,J,K,H,I[C+7],22,-45705983);H=md5_ff(H,F,J,K,I[C+8],7,1770035416);K=md5_ff(K,H,F,J,I[C+9],12,-1958414417);J=md5_ff(J,K,H,F,I[C+10],17,-42063);F=md5_ff(F,J,K,H,I[C+11],22,-1990404162);H=md5_ff(H,F,J,K,I[C+12],7,1804603682);K=md5_ff(K,H,F,J,I[C+13],12,-40341101);J=md5_ff(J,K,H,F,I[C+14],17,-1502002290);F=md5_ff(F,J,K,H,I[C+15],22,1236535329);H=md5_gg(H,F,J,K,I[C+1],5,-165796510);K=md5_gg(K,H,F,J,I[C+6],9,-1069501632);J=md5_gg(J,K,H,F,I[C+11],14,643717713);F=md5_gg(F,J,K,H,I[C+0],20,-373897302);H=md5_gg(H,F,J,K,I[C+5],5,-701558691);K=md5_gg(K,H,F,J,I[C+10],9,38016083);J=md5_gg(J,K,H,F,I[C+15],14,-660478335);F=md5_gg(F,J,K,H,I[C+4],20,-405537848);H=md5_gg(H,F,J,K,I[C+9],5,568446438);K=md5_gg(K,H,F,J,I[C+14],9,-1019803690);J=md5_gg(J,K,H,F,I[C+3],14,-187363961);F=md5_gg(F,J,K,H,I[C+8],20,1163531501);H=md5_gg(H,F,J,K,I[C+13],5,-1444681467);K=md5_gg(K,H,F,J,I[C+2],9,-51403784);J=md5_gg(J,K,H,F,I[C+7],14,1735328473);F=md5_gg(F,J,K,H,I[C+12],20,-1926607734);H=md5_hh(H,F,J,K,I[C+5],4,-378558);K=md5_hh(K,H,F,J,I[C+8],11,-2022574463);J=md5_hh(J,K,H,F,I[C+11],16,1839030562);F=md5_hh(F,J,K,H,I[C+14],23,-35309556);H=md5_hh(H,F,J,K,I[C+1],4,-1530992060);K=md5_hh(K,H,F,J,I[C+4],11,1272893353);J=md5_hh(J,K,H,F,I[C+7],16,-155497632);F=md5_hh(F,J,K,H,I[C+10],23,-1094730640);H=md5_hh(H,F,J,K,I[C+13],4,681279174);K=md5_hh(K,H,F,J,I[C+0],11,-358537222);J=md5_hh(J,K,H,F,I[C+3],16,-722521979);F=md5_hh(F,J,K,H,I[C+6],23,76029189);H=md5_hh(H,F,J,K,I[C+9],4,-640364487);K=md5_hh(K,H,F,J,I[C+12],11,-421815835);J=md5_hh(J,K,H,F,I[C+15],16,530742520);F=md5_hh(F,J,K,H,I[C+2],23,-995338651);H=md5_ii(H,F,J,K,I[C+0],6,-198630844);K=md5_ii(K,H,F,J,I[C+7],10,1126891415);J=md5_ii(J,K,H,F,I[C+14],15,-1416354905);F=md5_ii(F,J,K,H,I[C+5],21,-57434055);H=md5_ii(H,F,J,K,I[C+12],6,1700485571);K=md5_ii(K,H,F,J,I[C+3],10,-1894986606);J=md5_ii(J,K,H,F,I[C+10],15,-1051523);F=md5_ii(F,J,K,H,I[C+1],21,-2054922799);H=md5_ii(H,F,J,K,I[C+8],6,1873313359);K=md5_ii(K,H,F,J,I[C+15],10,-30611744);J=md5_ii(J,K,H,F,I[C+6],15,-1560198380);F=md5_ii(F,J,K,H,I[C+13],21,1309151649);H=md5_ii(H,F,J,K,I[C+4],6,-145523070);K=md5_ii(K,H,F,J,I[C+11],10,-1120210379);J=md5_ii(J,K,H,F,I[C+2],15,718787259);F=md5_ii(F,J,K,H,I[C+9],21,-343485551);H=safe_add(H,D);F=safe_add(F,E);J=safe_add(J,A);K=safe_add(K,B)}return Array(H,F,J,K)}function md5_cmn(B,F,C,D,A,E){return safe_add(bit_rol(safe_add(safe_add(F,B),safe_add(D,E)),A),C)}function md5_ff(F,C,D,A,E,B,G){return md5_cmn((C&D)|((~C)&A),F,C,E,B,G)}function md5_gg(F,C,D,A,E,B,G){return md5_cmn((C&A)|(D&(~A)),F,C,E,B,G)}function md5_hh(F,C,D,A,E,B,G){return md5_cmn(C^D^A,F,C,E,B,G)}function md5_ii(F,C,D,A,E,B,G){return md5_cmn(D^(C|(~A)),F,C,E,B,G)}function core_hmac_md5(B,G){var F=str2binl(B);if(F.length>16){F=core_md5(F,B.length*chrsz)}var A=Array(16),D=Array(16);for(var C=0;C<16;C++){A[C]=F[C]^909522486;D[C]=F[C]^1549556828}var E=core_md5(A.concat(str2binl(G)),512+G.length*chrsz);return core_md5(D.concat(E),512+128)}function safe_add(B,C){var A=(B&65535)+(C&65535);var D=(B>>16)+(C>>16)+(A>>16);return(D<<16)|(A&65535)}function bit_rol(B,A){return(B<<A)|(B>>>(32-A))}function str2binl(B){var C=Array();var D=(1<<chrsz)-1;for(var A=0;A<B.length*chrsz;A+=chrsz){C[A>>5]|=(B.charCodeAt(A/chrsz)&D)<<(A%32)}return C}function binl2str(C){var B="";var D=(1<<chrsz)-1;for(var A=0;A<C.length*32;A+=chrsz){B+=String.fromCharCode((C[A>>5]>>>(A%32))&D)}return B}function binl2hex(C){var A=hexcase?"0123456789ABCDEF":"0123456789abcdef";var D="";for(var B=0;B<C.length*4;B++){D+=A.charAt((C[B>>2]>>((B%4)*8+4))&15)+A.charAt((C[B>>2]>>((B%4)*8))&15)}return D}function binl2b64(B){var C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var D="";for(var A=0;A<B.length*4;A+=3){var E=(((B[A>>2]>>8*(A%4))&255)<<16)|(((B[A+1>>2]>>8*((A+1)%4))&255)<<8)|((B[A+2>>2]>>8*((A+2)%4))&255);for(var F=0;F<4;F++){if(A*8+F*6>B.length*32){D+=b64pad}else{D+=C.charAt((E>>6*(3-F))&63)}}}return D};