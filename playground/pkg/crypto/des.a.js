����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �q?��
crypto/desdescrypto/cipherencoding/binarystrconv��version 4

 des  BlockSize *% KeySizeError  	Error<k      	 NewCipher "key   	Blockciphercrypto/cipher     Decrypt"dst "src   Encrypt" "   & 	 #NewTripleDESCipher "  > & 5BB=$packages["crypto/cipher"];a    $r=B.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["encoding/binary"];a    $r=A.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["strconv"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} OXO=$pkg.KeySizeError=$newType(4,$kindInt,"des.KeySizeError",true,"crypto/des",true,null);QO.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];KeySizeErrorcrypto/des.KeySizeError P��P=$pkg.desCipher=$newType(0,$kindStruct,"des.desCipher",true,"crypto/des",false,function(subkeys_){this.$val=this;if(arguments.length===0){this.subkeys=AH.zero();return;}this.subkeys=subkeys_;});�CAJ.methods=[{prop:"generateSubkeys",name:"generateSubkeys",pkg:"crypto/des",typ:$funcType([AF],[],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Encrypt",name:"Encrypt",pkg:"",typ:$funcType([AF,AF],[],false)},{prop:"Decrypt",name:"Decrypt",pkg:"",typ:$funcType([AF,AF],[],false)}];dP.init("crypto/des",[{prop:"subkeys",name:"subkeys",anonymous:false,exported:false,typ:AH,tag:""}]);	desCiphercrypto/des.AFcrypto/des.AHcrypto/des.AJcrypto/des.desCipher R�\R=$pkg.tripleDESCipher=$newType(0,$kindStruct,"des.tripleDESCipher",true,"crypto/des",false,function(cipher1_,cipher2_,cipher3_){this.$val=this;if(arguments.length===0){this.cipher1=new P.ptr(AH.zero());this.cipher2=new P.ptr(AH.zero());this.cipher3=new P.ptr(AH.zero());return;}this.cipher1=cipher1_;this.cipher2=cipher2_;this.cipher3=cipher3_;});��AK.methods=[{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Encrypt",name:"Encrypt",pkg:"",typ:$funcType([AF,AF],[],false)},{prop:"Decrypt",name:"Decrypt",pkg:"",typ:$funcType([AF,AF],[],false)}];��R.init("crypto/des",[{prop:"cipher1",name:"cipher1",anonymous:false,exported:false,typ:P,tag:""},{prop:"cipher2",name:"cipher2",anonymous:false,exported:false,typ:P,tag:""},{prop:"cipher3",name:"cipher3",anonymous:false,exported:false,typ:P,tag:""}]);tripleDESCiphercrypto/des.AFcrypto/des.AHcrypto/des.AKcrypto/des.desCiphercrypto/des.tripleDESCipher ABAB=$arrayType($Uint32,64);AB ACAC=$arrayType(AB,8);ACcrypto/des.AB ADAD=$arrayType($Uint8,16);AD AEAE=$arrayType(AD,4);AEcrypto/des.AD AFAF=$sliceType($Uint8);AF AGAG=$sliceType($Uint32);AG AHAH=$arrayType($Uint64,16);AH AIAI=$sliceType($Uint64);AI AJAJ=$ptrType(P);AJcrypto/des.desCipher AKAK=$ptrType(R);AKcrypto/des.tripleDESCipher HH=AC.zero();
feistelBoxcrypto/des.ABcrypto/des.ACcrypto/des.feistelBox TinitialPermutation UfinalPermutation VexpansionFunction WpermutationFunction XpermutedChoice1 YpermutedChoice2 ZsBoxes AAksRotations ��    T=$toNativeArray($kindUint8,[6,14,22,30,38,46,54,62,4,12,20,28,36,44,52,60,2,10,18,26,34,42,50,58,0,8,16,24,32,40,48,56,7,15,23,31,39,47,55,63,5,13,21,29,37,45,53,61,3,11,19,27,35,43,51,59,1,9,17,25,33,41,49,57]);initialPermutationcrypto/des.initialPermutation ��    U=$toNativeArray($kindUint8,[24,56,16,48,8,40,0,32,25,57,17,49,9,41,1,33,26,58,18,50,10,42,2,34,27,59,19,51,11,43,3,35,28,60,20,52,12,44,4,36,29,61,21,53,13,45,5,37,30,62,22,54,14,46,6,38,31,63,23,55,15,47,7,39]);finalPermutationcrypto/des.finalPermutation ��    V=$toNativeArray($kindUint8,[0,31,30,29,28,27,28,27,26,25,24,23,24,23,22,21,20,19,20,19,18,17,16,15,16,15,14,13,12,11,12,11,10,9,8,7,8,7,6,5,4,3,4,3,2,1,0,31]);expansionFunctioncrypto/des.expansionFunction z    W=$toNativeArray($kindUint8,[16,25,12,11,3,20,4,15,31,17,9,6,27,14,1,22,30,24,8,18,0,5,29,23,13,19,2,26,10,21,28,7]);permutationFunctioncrypto/des.permutationFunction ��    X=$toNativeArray($kindUint8,[7,15,23,31,39,47,55,63,6,14,22,30,38,46,54,62,5,13,21,29,37,45,53,61,4,12,20,28,1,9,17,25,33,41,49,57,2,10,18,26,34,42,50,58,3,11,19,27,35,43,51,59,36,44,52,60]);permutedChoice1crypto/des.permutedChoice1 ��    Y=$toNativeArray($kindUint8,[42,39,45,32,55,51,53,28,41,50,35,46,33,37,44,52,30,48,40,49,29,36,43,54,15,4,25,19,9,1,26,16,5,11,23,8,12,7,17,0,22,3,10,14,6,20,27,24]);permutedChoice2crypto/des.permutedChoice2 �	l    Z=$toNativeArray($kindArray,[$toNativeArray($kindArray,[$toNativeArray($kindUint8,[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7]),$toNativeArray($kindUint8,[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8]),$toNativeArray($kindUint8,[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0]),$toNativeArray($kindUint8,[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10]),$toNativeArray($kindUint8,[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5]),$toNativeArray($kindUint8,[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15]),$toNativeArray($kindUint8,[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8]),$toNativeArray($kindUint8,[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1]),$toNativeArray($kindUint8,[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7]),$toNativeArray($kindUint8,[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15]),$toNativeArray($kindUint8,[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9]),$toNativeArray($kindUint8,[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4]),$toNativeArray($kindUint8,[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9]),$toNativeArray($kindUint8,[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6]),$toNativeArray($kindUint8,[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14]),$toNativeArray($kindUint8,[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11]),$toNativeArray($kindUint8,[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8]),$toNativeArray($kindUint8,[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6]),$toNativeArray($kindUint8,[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1]),$toNativeArray($kindUint8,[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6]),$toNativeArray($kindUint8,[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2]),$toNativeArray($kindUint8,[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7]),$toNativeArray($kindUint8,[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2]),$toNativeArray($kindUint8,[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8]),$toNativeArray($kindUint8,[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11])])]);sBoxescrypto/des.ADcrypto/des.AEcrypto/des.sBoxes E    AA=$toNativeArray($kindUint8,[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1]);ksRotationscrypto/des.ksRotations crypto/des.cryptBlockD��D=function(a,b,c,d){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;  e=$clone(A.BigEndian,A.bigEndian).Uint64(c);  /e=K(e);  Kf=(($shiftRightUint64(e,32).$low>>>0));g=((e.$low>>>0));h=f;i=g;  uh=(((h<<1>>>0))|((h>>>31>>>0)))>>>0;  �i=(((i<<1>>>0))|((i>>>31>>>0)))>>>0;    if(d){  �j=0;while(true){if(!(j<8)){break;}  �k=G(h,i,(l=15-($imul(2,j))>>0,((l<0||l>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+l])),(m=15-((($imul(2,j))+1>>0))>>0,((m<0||m>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+m])));h=k[0];i=k[1];  �j=j+(1)>>0;    }    }else{  Gn=0;while(true){if(!(n<8)){break;}  _o=G(h,i,(p=$imul(2,n),((p<0||p>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+p])),(q=($imul(2,n))+1>>0,((q<0||q>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+q])));h=o[0];i=o[1];  Vn=n+(1)>>0;    }    }  �h=(((h<<31>>>0))|((h>>>1>>>0)))>>>0;  �i=(((i<<31>>>0))|((i>>>1>>>0)))>>>0;  )t=(r=$shiftLeft64((new $Uint64(0,i)),32),s=(new $Uint64(0,h)),new $Uint64(r.$high|s.$high,(r.$low|s.$low)>>>0));  \$clone(A.BigEndian,A.bigEndian).PutUint64(b,L(t));    };
cryptBlockcrypto/des.cryptBlockcrypto/des.feistelcrypto/des.permuteFinalBlockcrypto/des.permuteInitialBlockencoding/binary.BigEndianencoding/binary.bigEndian crypto/des.encryptBlockE7E=function(a,b,c){var a,b,c;  D(a,b,c,false);    };encryptBlockcrypto/des.cryptBlockcrypto/des.encryptBlock crypto/des.decryptBlockF6F=function(a,b,c){var a,b,c;  �D(a,b,c,true);    };decryptBlockcrypto/des.cryptBlockcrypto/des.decryptBlock crypto/des.feistelG�	`G=function(a,b,c,d){var a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;e=0;f=0;  .g=0;  9g=(b^(($shiftRightUint64(c,32).$low>>>0)))>>>0;  Qa=(a^((((((((h=H[7],i=(g&63)>>>0,((i<0||i>=h.length)?($throwRuntimeError("index out of range"),undefined):h[i]))^(j=H[5],k=(((g>>>8>>>0))&63)>>>0,((k<0||k>=j.length)?($throwRuntimeError("index out of range"),undefined):j[k])))>>>0)^(l=H[3],m=(((g>>>16>>>0))&63)>>>0,((m<0||m>=l.length)?($throwRuntimeError("index out of range"),undefined):l[m])))>>>0)^(n=H[1],o=(((g>>>24>>>0))&63)>>>0,((o<0||o>=n.length)?($throwRuntimeError("index out of range"),undefined):n[o])))>>>0)))>>>0;  �g=((((((b<<28>>>0))|((b>>>4>>>0)))>>>0))^((c.$low>>>0)))>>>0;  �a=(a^((((((((p=H[6],q=((g)&63)>>>0,((q<0||q>=p.length)?($throwRuntimeError("index out of range"),undefined):p[q]))^(r=H[4],s=(((g>>>8>>>0))&63)>>>0,((s<0||s>=r.length)?($throwRuntimeError("index out of range"),undefined):r[s])))>>>0)^(t=H[2],u=(((g>>>16>>>0))&63)>>>0,((u<0||u>=t.length)?($throwRuntimeError("index out of range"),undefined):t[u])))>>>0)^(v=H[0],w=(((g>>>24>>>0))&63)>>>0,((w<0||w>=v.length)?($throwRuntimeError("index out of range"),undefined):v[w])))>>>0)))>>>0;  tg=(a^(($shiftRightUint64(d,32).$low>>>0)))>>>0;  �b=(b^((((((((x=H[7],y=(g&63)>>>0,((y<0||y>=x.length)?($throwRuntimeError("index out of range"),undefined):x[y]))^(z=H[5],aa=(((g>>>8>>>0))&63)>>>0,((aa<0||aa>=z.length)?($throwRuntimeError("index out of range"),undefined):z[aa])))>>>0)^(ab=H[3],ac=(((g>>>16>>>0))&63)>>>0,((ac<0||ac>=ab.length)?($throwRuntimeError("index out of range"),undefined):ab[ac])))>>>0)^(ad=H[1],ae=(((g>>>24>>>0))&63)>>>0,((ae<0||ae>=ad.length)?($throwRuntimeError("index out of range"),undefined):ad[ae])))>>>0)))>>>0;  g=((((((a<<28>>>0))|((a>>>4>>>0)))>>>0))^((d.$low>>>0)))>>>0;  1b=(b^((((((((af=H[6],ag=((g)&63)>>>0,((ag<0||ag>=af.length)?($throwRuntimeError("index out of range"),undefined):af[ag]))^(ah=H[4],ai=(((g>>>8>>>0))&63)>>>0,((ai<0||ai>=ah.length)?($throwRuntimeError("index out of range"),undefined):ah[ai])))>>>0)^(aj=H[2],ak=(((g>>>16>>>0))&63)>>>0,((ak<0||ak>=aj.length)?($throwRuntimeError("index out of range"),undefined):aj[ak])))>>>0)^(al=H[0],am=(((g>>>24>>>0))&63)>>>0,((am<0||am>=al.length)?($throwRuntimeError("index out of range"),undefined):al[am])))>>>0)))>>>0;    an=a;ao=b;e=an;f=ao;return[e,f];    };feistelcrypto/des.feistelcrypto/des.feistelBox crypto/des.permuteBlockI��I=function(a,b){var a,b,c,d,e,f,g,h,i,j;c=new $Uint64(0,0);  �d=b;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  �i=(h=$shiftRightUint64(a,g),new $Uint64(h.$high&0,(h.$low&1)>>>0));  	c=(j=$shiftLeft64(i,(((((b.$length-1>>0))-f>>0)>>>0))),new $Uint64(c.$high|j.$high,(c.$low|j.$low)>>>0));    e++;}  	>return c;    };permuteBlockcrypto/des.permuteBlock crypto/des.initJ��J=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n;  	Wa=Z;b=0;while(true){if(!(b<8)){break;}c=b;  	ud=0;while(true){if(!(d<4)){break;}  	�e=0;while(true){if(!(e<16)){break;}  	�h=$shiftLeft64((new $Uint64(0,(f=(g=((c<0||c>=Z.length)?($throwRuntimeError("index out of range"),undefined):Z[c]),((d<0||d>=g.length)?($throwRuntimeError("index out of range"),undefined):g[d])),((e<0||e>=f.length)?($throwRuntimeError("index out of range"),undefined):f[e])))),((4*((7-((c>>>0))>>>0))>>>0)));  	�h=I(h,new AF(W));  
li=(((((((d&2))<<4>>0))|(d&1))<<24>>>24));  
�j=(((e<<1>>0)<<24>>>24));  
�k=(i|j)>>>0;  /h=(l=$shiftLeft64(h,1),m=$shiftRightUint64(h,31),new $Uint64(l.$high|m.$high,(l.$low|m.$low)>>>0));  M(n=((c<0||c>=H.length)?($throwRuntimeError("index out of range"),undefined):H[c]),((k<0||k>=n.length)?($throwRuntimeError("index out of range"),undefined):n[k]=((h.$low>>>0))));  	�e=e+(1)>>0;    }  	�d=d+(1)>>0;    }    b++;}    };	    J();crypto/des.AFcrypto/des.feistelBoxcrypto/des.initcrypto/des.permutationFunctioncrypto/des.permuteBlockcrypto/des.sBoxes crypto/des.permuteInitialBlockK�OK=function(a){var a,aa,ab,ac,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  2b=$shiftRightUint64(a,48);  Ec=$shiftLeft64(a,48);  Xa=(d=(e=(f=new $Uint64(b.$high^c.$high,(b.$low^c.$low)>>>0),g=$shiftLeft64(b,48),new $Uint64(f.$high^g.$high,(f.$low^g.$low)>>>0)),h=$shiftRightUint64(c,48),new $Uint64(e.$high^h.$high,(e.$low^h.$low)>>>0)),new $Uint64(a.$high^d.$high,(a.$low^d.$low)>>>0));  �b=(i=$shiftRightUint64(a,32),new $Uint64(i.$high&0,(i.$low&16711935)>>>0));  �c=new $Uint64(a.$high&0,(a.$low&4278255360)>>>0);  �a=(j=(k=(l=(m=$shiftLeft64(b,32),new $Uint64(m.$high^c.$high,(m.$low^c.$low)>>>0)),n=$shiftLeft64(b,8),new $Uint64(l.$high^n.$high,(l.$low^n.$low)>>>0)),o=$shiftLeft64(c,24),new $Uint64(k.$high^o.$high,(k.$low^o.$low)>>>0)),new $Uint64(a.$high^j.$high,(a.$low^j.$low)>>>0));  eb=new $Uint64(a.$high&252641280,(a.$low&252641280)>>>0);  �c=new $Uint64(a.$high&61680,(a.$low&61680)>>>0);  �a=(p=(q=(r=new $Uint64(b.$high^c.$high,(b.$low^c.$low)>>>0),s=$shiftRightUint64(b,12),new $Uint64(r.$high^s.$high,(r.$low^s.$low)>>>0)),t=$shiftLeft64(c,12),new $Uint64(q.$high^t.$high,(q.$low^t.$low)>>>0)),new $Uint64(a.$high^p.$high,(a.$low^p.$low)>>>0));  {b=new $Uint64(a.$high&855651072,(a.$low&855651072)>>>0);  �c=new $Uint64(a.$high&13369548,(a.$low&13369548)>>>0);  �a=(u=(v=(w=new $Uint64(b.$high^c.$high,(b.$low^c.$low)>>>0),x=$shiftRightUint64(b,6),new $Uint64(w.$high^x.$high,(w.$low^x.$low)>>>0)),y=$shiftLeft64(c,6),new $Uint64(v.$high^y.$high,(v.$low^y.$low)>>>0)),new $Uint64(a.$high^u.$high,(a.$low^u.$low)>>>0));  �b=new $Uint64(a.$high&2863311530,(a.$low&1431655765)>>>0);  �a=(z=(aa=(ab=$shiftRightUint64(b,33),new $Uint64(b.$high^ab.$high,(b.$low^ab.$low)>>>0)),ac=$shiftLeft64(b,33),new $Uint64(aa.$high^ac.$high,(aa.$low^ac.$low)>>>0)),new $Uint64(a.$high^z.$high,(a.$low^z.$low)>>>0));  �return a;    };permuteInitialBlockcrypto/des.permuteInitialBlock crypto/des.permuteFinalBlockL�OL=function(a){var a,aa,ab,ac,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  �b=new $Uint64(a.$high&2863311530,(a.$low&1431655765)>>>0);  �a=(c=(d=(e=$shiftRightUint64(b,33),new $Uint64(b.$high^e.$high,(b.$low^e.$low)>>>0)),f=$shiftLeft64(b,33),new $Uint64(d.$high^f.$high,(d.$low^f.$low)>>>0)),new $Uint64(a.$high^c.$high,(a.$low^c.$low)>>>0));  �b=new $Uint64(a.$high&855651072,(a.$low&855651072)>>>0);  g=new $Uint64(a.$high&13369548,(a.$low&13369548)>>>0);  .a=(h=(i=(j=new $Uint64(b.$high^g.$high,(b.$low^g.$low)>>>0),k=$shiftRightUint64(b,6),new $Uint64(j.$high^k.$high,(j.$low^k.$low)>>>0)),l=$shiftLeft64(g,6),new $Uint64(i.$high^l.$high,(i.$low^l.$low)>>>0)),new $Uint64(a.$high^h.$high,(a.$low^h.$low)>>>0));  Qb=new $Uint64(a.$high&252641280,(a.$low&252641280)>>>0);  rg=new $Uint64(a.$high&61680,(a.$low&61680)>>>0);  �a=(m=(n=(o=new $Uint64(b.$high^g.$high,(b.$low^g.$low)>>>0),p=$shiftRightUint64(b,12),new $Uint64(o.$high^p.$high,(o.$low^p.$low)>>>0)),q=$shiftLeft64(g,12),new $Uint64(n.$high^q.$high,(n.$low^q.$low)>>>0)),new $Uint64(a.$high^m.$high,(a.$low^m.$low)>>>0));  �b=(r=$shiftRightUint64(a,32),new $Uint64(r.$high&0,(r.$low&16711935)>>>0));  �g=new $Uint64(a.$high&0,(a.$low&4278255360)>>>0);  �a=(s=(t=(u=(v=$shiftLeft64(b,32),new $Uint64(v.$high^g.$high,(v.$low^g.$low)>>>0)),w=$shiftLeft64(b,8),new $Uint64(u.$high^w.$high,(u.$low^w.$low)>>>0)),x=$shiftLeft64(g,24),new $Uint64(t.$high^x.$high,(t.$low^x.$low)>>>0)),new $Uint64(a.$high^s.$high,(a.$low^s.$low)>>>0));  b=$shiftRightUint64(a,48);  *g=$shiftLeft64(a,48);  <a=(y=(z=(aa=new $Uint64(b.$high^g.$high,(b.$low^g.$low)>>>0),ab=$shiftLeft64(b,48),new $Uint64(aa.$high^ab.$high,(aa.$low^ab.$low)>>>0)),ac=$shiftRightUint64(g,48),new $Uint64(z.$high^ac.$high,(z.$low^ac.$low)>>>0)),new $Uint64(a.$high^y.$high,(a.$low^y.$low)>>>0));  `return a;    };permuteFinalBlockcrypto/des.permuteFinalBlock crypto/des.ksRotateM��M=function(a){var a,b,c,d,e,f,g,h;b=AG.nil;  �b=$makeSlice(AG,16);  �c=a;  d=0;while(true){if(!(d<16)){break;}  Gf=(((e=((4+((d<0||d>=AA.length)?($throwRuntimeError("index out of range"),undefined):AA[d])<<24>>>24)),e<32?(c<<e):0)>>>0))>>>4>>>0;  uh=(g=((32-((d<0||d>=AA.length)?($throwRuntimeError("index out of range"),undefined):AA[d])<<24>>>24)),g<32?(((c<<4>>>0))>>>g):0)>>>0;  �((d<0||d>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+d]=((f|h)>>>0));  �c=((d<0||d>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+d]);  d=d+(1)>>0;    }  �return b;    };ksRotatecrypto/des.AGcrypto/des.ksRotatecrypto/des.ksRotations '(*crypto/des.desCipher).generateSubkeys�.P.ptr.prototype.generateSubkeys=function(a){var a,b,c,d,e,f,g,h,i,j,k;b=this;  ec=$clone(A.BigEndian,A.bigEndian).Uint64(a);  �d=I(c,new AF(X));  e=M((($shiftRightUint64(d,28).$low>>>0)));  Af=M((($shiftLeft64(d,4).$low>>>0))>>>4>>>0);  �g=0;while(true){if(!(g<16)){break;}  �j=(h=$shiftLeft64((new $Uint64(0,((g<0||g>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+g]))),28),i=(new $Uint64(0,((g<0||g>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+g]))),new $Uint64(h.$high|i.$high,(h.$low|i.$low)>>>0));  N(k=b.subkeys,((g<0||g>=k.length)?($throwRuntimeError("index out of range"),undefined):k[g]=N(I(j,new AF(Y)))));  �g=g+(1)>>0;    }    };P.prototype.generateSubkeys=function(a){return this.$val.generateSubkeys(a);};	desCiphergenerateSubkeys~	crypto/des.AFcrypto/des.desCiphercrypto/des.ksRotatecrypto/des.permuteBlockcrypto/des.permutedChoice1crypto/des.permutedChoice2crypto/des.unpackencoding/binary.BigEndianencoding/binary.bigEndian crypto/des.unpackN��N=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;  �b=new $Uint64(0,0);  �b=(c=(d=(e=(f=(g=(h=(i=$shiftLeft64(((j=$shiftRightUint64(a,6),new $Uint64(j.$high&0,(j.$low&255)>>>0))),0),k=$shiftLeft64(((l=$shiftRightUint64(a,18),new $Uint64(l.$high&0,(l.$low&255)>>>0))),8),new $Uint64(i.$high|k.$high,(i.$low|k.$low)>>>0)),m=$shiftLeft64(((n=$shiftRightUint64(a,30),new $Uint64(n.$high&0,(n.$low&255)>>>0))),16),new $Uint64(h.$high|m.$high,(h.$low|m.$low)>>>0)),o=$shiftLeft64(((p=$shiftRightUint64(a,42),new $Uint64(p.$high&0,(p.$low&255)>>>0))),24),new $Uint64(g.$high|o.$high,(g.$low|o.$low)>>>0)),q=$shiftLeft64(((r=$shiftRightUint64(a,0),new $Uint64(r.$high&0,(r.$low&255)>>>0))),32),new $Uint64(f.$high|q.$high,(f.$low|q.$low)>>>0)),s=$shiftLeft64(((t=$shiftRightUint64(a,12),new $Uint64(t.$high&0,(t.$low&255)>>>0))),40),new $Uint64(e.$high|s.$high,(e.$low|s.$low)>>>0)),u=$shiftLeft64(((v=$shiftRightUint64(a,24),new $Uint64(v.$high&0,(v.$low&255)>>>0))),48),new $Uint64(d.$high|u.$high,(d.$low|u.$low)>>>0)),w=$shiftLeft64(((x=$shiftRightUint64(a,36),new $Uint64(x.$high&0,(x.$low&255)>>>0))),56),new $Uint64(c.$high|w.$high,(c.$low|w.$low)>>>0));  �return b;    };unpackcrypto/des.unpack (crypto/des.KeySizeError).Error��O.prototype.Error=function(){var a;a=this.$val;  $return"crypto/des: invalid key size "+C.Itoa(((a>>0)));    };$ptrType(O).prototype.Error=function(){return new O(this.$get()).Error();};KeySizeErrorcrypto/des.KeySizeErrorstrconv.Itoa crypto/des.NewCipherQ��Q=function(a){var a,b;    if(!((a.$length===8))){  Areturn[$ifaceNil,new O(((a.$length>>0)))];    }  ib=new P.ptr(AH.zero());  ~b.generateSubkeys(a);  �return[b,$ifaceNil];    };$pkg.NewCipher=Q;	NewCiphercrypto/des.AHcrypto/des.KeySizeErrorcrypto/des.NewCiphercrypto/des.desCiphercrypto/des.generateSubkeys~ !(*crypto/des.desCipher).BlockSize��P.ptr.prototype.BlockSize=function(){var a;a=this;  �return 8;    };P.prototype.BlockSize=function(){return this.$val.BlockSize();};	desCiphercrypto/des.desCipher (*crypto/des.desCipher).Encrypt��P.ptr.prototype.Encrypt=function(a,b){var a,b,c;c=this;  E(new AI(c.subkeys),a,b);    };P.prototype.Encrypt=function(a,b){return this.$val.Encrypt(a,b);};	desCiphercrypto/des.AIcrypto/des.desCiphercrypto/des.encryptBlock (*crypto/des.desCipher).Decrypt��P.ptr.prototype.Decrypt=function(a,b){var a,b,c;c=this;  gF(new AI(c.subkeys),a,b);    };P.prototype.Decrypt=function(a,b){return this.$val.Decrypt(a,b);};	desCiphercrypto/des.AIcrypto/des.decryptBlockcrypto/des.desCipher crypto/des.NewTripleDESCipherS��S=function(a){var a,b;    if(!((a.$length===24))){  �return[$ifaceNil,new O(((a.$length>>0)))];    }  �b=new R.ptr(new P.ptr(AH.zero()),new P.ptr(AH.zero()),new P.ptr(AH.zero()));  �b.cipher1.generateSubkeys($subslice(a,0,8));   
b.cipher2.generateSubkeys($subslice(a,8,16));   0b.cipher3.generateSubkeys($subslice(a,16));   Ureturn[b,$ifaceNil];    };$pkg.NewTripleDESCipher=S;NewTripleDESCiphercrypto/des.AHcrypto/des.KeySizeErrorcrypto/des.NewTripleDESCiphercrypto/des.desCiphercrypto/des.generateSubkeys~crypto/des.tripleDESCipher '(*crypto/des.tripleDESCipher).BlockSize��R.ptr.prototype.BlockSize=function(){var a;a=this;   �return 8;    };R.prototype.BlockSize=function(){return this.$val.BlockSize();};tripleDESCiphercrypto/des.tripleDESCipher %(*crypto/des.tripleDESCipher).Encrypt�oR.ptr.prototype.Encrypt=function(a,b){var a,aa,ab,ac,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;c=this;   �d=$clone(A.BigEndian,A.bigEndian).Uint64(b);   �d=K(d);  !e=(($shiftRightUint64(d,32).$low>>>0));f=((d.$low>>>0));g=e;h=f;  !Eg=(((g<<1>>>0))|((g>>>31>>>0)))>>>0;  !hh=(((h<<1>>>0))|((h>>>31>>>0)))>>>0;  !�i=0;while(true){if(!(i<8)){break;}  !�j=G(g,h,(k=c.cipher1.subkeys,l=$imul(2,i),((l<0||l>=k.length)?($throwRuntimeError("index out of range"),undefined):k[l])),(m=c.cipher1.subkeys,n=($imul(2,i))+1>>0,((n<0||n>=m.length)?($throwRuntimeError("index out of range"),undefined):m[n])));g=j[0];h=j[1];  !�i=i+(1)>>0;    }  "o=0;while(true){if(!(o<8)){break;}  "p=G(h,g,(q=c.cipher2.subkeys,r=15-($imul(2,o))>>0,((r<0||r>=q.length)?($throwRuntimeError("index out of range"),undefined):q[r])),(s=c.cipher2.subkeys,t=15-((($imul(2,o))+1>>0))>>0,((t<0||t>=s.length)?($throwRuntimeError("index out of range"),undefined):s[t])));h=p[0];g=p[1];  "o=o+(1)>>0;    }  "�u=0;while(true){if(!(u<8)){break;}  "�v=G(g,h,(w=c.cipher3.subkeys,x=$imul(2,u),((x<0||x>=w.length)?($throwRuntimeError("index out of range"),undefined):w[x])),(y=c.cipher3.subkeys,z=($imul(2,u))+1>>0,((z<0||z>=y.length)?($throwRuntimeError("index out of range"),undefined):y[z])));g=v[0];h=v[1];  "�u=u+(1)>>0;    }  "�g=(((g<<31>>>0))|((g>>>1>>>0)))>>>0;  #h=(((h<<31>>>0))|((h>>>1>>>0)))>>>0;  #>ac=(aa=$shiftLeft64((new $Uint64(0,h)),32),ab=(new $Uint64(0,g)),new $Uint64(aa.$high|ab.$high,(aa.$low|ab.$low)>>>0));  #q$clone(A.BigEndian,A.bigEndian).PutUint64(a,L(ac));    };R.prototype.Encrypt=function(a,b){return this.$val.Encrypt(a,b);};tripleDESCiphercrypto/des.feistelcrypto/des.permuteFinalBlockcrypto/des.permuteInitialBlockcrypto/des.tripleDESCipherencoding/binary.BigEndianencoding/binary.bigEndian %(*crypto/des.tripleDESCipher).Decrypt��R.ptr.prototype.Decrypt=function(a,b){var a,aa,ab,ac,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;c=this;  #�d=$clone(A.BigEndian,A.bigEndian).Uint64(b);  $d=K(d);  $'e=(($shiftRightUint64(d,32).$low>>>0));f=((d.$low>>>0));g=e;h=f;  $Qg=(((g<<1>>>0))|((g>>>31>>>0)))>>>0;  $th=(((h<<1>>>0))|((h>>>31>>>0)))>>>0;  $�i=0;while(true){if(!(i<8)){break;}  $�j=G(g,h,(k=c.cipher3.subkeys,l=15-($imul(2,i))>>0,((l<0||l>=k.length)?($throwRuntimeError("index out of range"),undefined):k[l])),(m=c.cipher3.subkeys,n=15-((($imul(2,i))+1>>0))>>0,((n<0||n>=m.length)?($throwRuntimeError("index out of range"),undefined):m[n])));g=j[0];h=j[1];  $�i=i+(1)>>0;    }  %o=0;while(true){if(!(o<8)){break;}  %2p=G(h,g,(q=c.cipher2.subkeys,r=$imul(2,o),((r<0||r>=q.length)?($throwRuntimeError("index out of range"),undefined):q[r])),(s=c.cipher2.subkeys,t=($imul(2,o))+1>>0,((t<0||t>=s.length)?($throwRuntimeError("index out of range"),undefined):s[t])));h=p[0];g=p[1];  %*o=o+(1)>>0;    }  %�u=0;while(true){if(!(u<8)){break;}  %�v=G(g,h,(w=c.cipher1.subkeys,x=15-($imul(2,u))>>0,((x<0||x>=w.length)?($throwRuntimeError("index out of range"),undefined):w[x])),(y=c.cipher1.subkeys,z=15-((($imul(2,u))+1>>0))>>0,((z<0||z>=y.length)?($throwRuntimeError("index out of range"),undefined):y[z])));g=v[0];h=v[1];  %�u=u+(1)>>0;    }  &g=(((g<<31>>>0))|((g>>>1>>>0)))>>>0;  &+h=(((h<<31>>>0))|((h>>>1>>>0)))>>>0;  &Rac=(aa=$shiftLeft64((new $Uint64(0,h)),32),ab=(new $Uint64(0,g)),new $Uint64(aa.$high|ab.$high,(aa.$low|ab.$low)>>>0));  &�$clone(A.BigEndian,A.bigEndian).PutUint64(a,L(ac));    };R.prototype.Decrypt=function(a,b){return this.$val.Decrypt(a,b);};tripleDESCiphercrypto/des.feistelcrypto/des.permuteFinalBlockcrypto/des.permuteInitialBlockcrypto/des.tripleDESCipherencoding/binary.BigEndianencoding/binary.bigEndian ��{"Base":14572,"Files":[{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.F8uTPUBBIW/goroot/src/crypto/des/block.go","Base":1,"Size":6854,"Lines":[0,55,109,159,160,172,173,198,199,266,301,329,370,371,406,444,445,459,486,562,566,576,603,671,675,678,679,714,752,753,807,858,921,923,924,983,1038,1076,1078,1079,1138,1193,1230,1232,1233,1257,1320,1334,1335,1359,1389,1420,1452,1482,1483,1524,1556,1587,1619,1649,1650,1674,1704,1735,1767,1797,1798,1839,1871,1902,1934,1964,1965,1978,1980,1981,2049,2083,2112,2113,2175,2243,2283,2307,2361,2364,2372,2374,2375,2389,2414,2441,2470,2526,2574,2575,2624,2663,2702,2727,2746,2747,2858,2887,2888,2921,2926,2930,2933,2935,2936,3000,3026,3074,3120,3139,3158,3194,3195,3231,3260,3287,3355,3356,3415,3443,3471,3499,3527,3555,3583,3611,3639,3640,3683,3716,3749,3785,3786,3816,3820,3845,3849,3865,3881,3897,3922,3923,3961,3994,4027,4061,4062,4092,4102,4112,4122,4132,4142,4152,4162,4190,4191,4229,4262,4293,4294,4324,4351,4378,4405,4432,4459,4486,4513,4540,4554,4556,4557,4621,4645,4691,4749,4775,4809,4840,4841,4874,4908,4942,4943,4976,5009,5045,5046,5075,5102,5141,5142,5160,5178,5214,5228,5230,5231,5277,5305,5347,5373,5385,5412,5444,5490,5538,5562,5578,5581,5589,5591,5592,5643,5698,5731,5773,5827,5828,5897,5951,6008,6009,6030,6057,6105,6176,6219,6287,6290,6292,6293,6386,6505,6547,6578,6597,6598,6635,6664,6693,6722,6751,6780,6809,6836,6837,6852],"Infos":null},{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.F8uTPUBBIW/goroot/src/crypto/des/cipher.go","Base":6856,"Size":3069,"Lines":[0,55,109,159,160,172,173,182,199,218,229,231,232,264,284,285,307,308,347,410,412,413,460,484,504,506,507,560,611,631,668,671,672,693,717,732,734,735,792,793,879,880,966,967,1028,1058,1095,1097,1098,1160,1220,1241,1278,1281,1282,1309,1345,1383,1420,1435,1437,1438,1501,1502,1555,1590,1618,1659,1660,1695,1733,1734,1760,1847,1850,1876,1971,1974,2000,2087,2090,2091,2126,2164,2165,2216,2279,2281,2282,2335,2370,2398,2439,2440,2475,2513,2514,2540,2635,2638,2664,2751,2754,2780,2875,2878,2879,2914,2952,2953,3004,3067],"Infos":null},{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.F8uTPUBBIW/goroot/src/crypto/des/const.go","Base":9926,"Size":4645,"Lines":[0,55,109,159,160,229,283,353,356,425,442,454,455,522,557,589,621,653,684,716,748,780,811,813,814,893,926,959,990,1021,1053,1085,1117,1149,1181,1213,1215,1216,1293,1302,1336,1368,1401,1434,1467,1493,1519,1521,1522,1568,1604,1635,1665,1695,1726,1728,1729,1775,1799,1831,1863,1895,1927,1957,1989,2021,2054,2056,2057,2134,2154,2186,2219,2252,2285,2315,2344,2375,2377,2378,2425,2460,2490,2502,2505,2563,2621,2679,2737,2741,2753,2756,2814,2872,2930,2988,2992,3004,3007,3065,3123,3181,3239,3243,3255,3258,3316,3374,3432,3490,3494,3506,3509,3567,3625,3683,3741,3745,3757,3760,3818,3876,3934,3992,3996,4008,4011,4069,4127,4185,4243,4247,4259,4262,4320,4378,4436,4494,4498,4500,4501,4569],"Infos":null}]}
 