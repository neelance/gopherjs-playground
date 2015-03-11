p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �o��
crypto/rc4rc4strconv��package rc4
import strconv "strconv"
type @"".Cipher struct { @"".s [256]uint32; @"".i uint8; @"".j uint8 }
func (? *@"".Cipher) @"".Reset() ()
func (? *@"".Cipher) @"".XORKeyStream(@"".dst []byte, @"".src []byte) ()
func (? *@"".Cipher) @"".xorKeyStreamGeneric(@"".dst []byte, @"".src []byte) ()
type @"".KeySizeError int
func (? @"".KeySizeError) @"".Error() (? string)
func (? *@"".KeySizeError) @"".Error() (? string)
func @"".NewCipher(@"".key []byte) (? *@"".Cipher, ? error)
$$
AA=$packages["strconv"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} B��B=$pkg.Cipher=$newType(0,$kindStruct,"rc4.Cipher","Cipher","crypto/rc4",function(s_,i_,j_){this.$val=this;if(arguments.length===0){this.s=F.zero();this.i=0;this.j=0;return;}this.s=s_;this.i=i_;this.j=j_;});� E.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"xorKeyStreamGeneric",name:"xorKeyStreamGeneric",pkg:"crypto/rc4",typ:$funcType([G,G],[],false)},{prop:"XORKeyStream",name:"XORKeyStream",pkg:"",typ:$funcType([G,G],[],false)}];��B.init([{prop:"s",name:"s",pkg:"crypto/rc4",typ:F,tag:""},{prop:"i",name:"i",pkg:"crypto/rc4",typ:$Uint8,tag:""},{prop:"j",name:"j",pkg:"crypto/rc4",typ:$Uint8,tag:""}]);Ciphercrypto/rc4.Ciphercrypto/rc4.Ecrypto/rc4.Fcrypto/rc4.G C]C=$pkg.KeySizeError=$newType(4,$kindInt,"rc4.KeySizeError","KeySizeError","crypto/rc4",null);QC.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];KeySizeErrorcrypto/rc4.KeySizeError EE=$ptrType(B);Ecrypto/rc4.Cipher FF=$arrayType($Uint32,256);F GG=$sliceType($Uint8);G (crypto/rc4.KeySizeError).Error��C.prototype.Error=function(){var $ptr,a;  a=this.$val;      ?return"crypto/rc4: invalid key size "+A.Itoa((a>>0));    };$ptrType(C).prototype.Error=function(){return new C(this.$get()).Error();};KeySizeErrorcrypto/rc4.KeySizeErrorstrconv.Itoa crypto/rc4.NewCipherD�.D=$pkg.NewCipher=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;      1b=a.$length;  @    if(b<1||b>256){  Xreturn[E.nil,new C((b>>0))];    }  x  |c=$clone(new B.ptr(),B);  �  �d=0;while(true){if(!(d<256)){break;}  �(e=c.s,((d<0||d>=e.length)?$throwRuntimeError("index out of range"):e[d]=(d>>>0)));      �  �d=d+(1)>>0;    }  �  �f=0;  �  �g=0;while(true){if(!(g<256)){break;}  �  �f=f+((((h=c.s,((g<0||g>=h.length)?$throwRuntimeError("index out of range"):h[g]))<<24>>>24)+(i=(j=g%b,j===j?j:$throwRuntimeError("integer divide by zero")),((i<0||i>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+i]))<<24>>>24))<<24>>>24;      k=(l=c.s,((f<0||f>=l.length)?$throwRuntimeError("index out of range"):l[f]));m=(n=c.s,((g<0||g>=n.length)?$throwRuntimeError("index out of range"):n[g]));(o=c.s,((g<0||g>=o.length)?$throwRuntimeError("index out of range"):o[g]=k));(p=c.s,((f<0||f>=p.length)?$throwRuntimeError("index out of range"):p[f]=m));      �  �g=g+(1)>>0;    }  ,return[c,$ifaceNil];    };	NewCiphercrypto/rc4.Ciphercrypto/rc4.Ecrypto/rc4.KeySizeErrorcrypto/rc4.NewCipher (*crypto/rc4.Cipher).Reset�0B.ptr.prototype.Reset=function(){var $ptr,a,b,c,d,e,f,g;  �a=this;      �b=a.s;c=0;while(true){if(!(c<256)){break;}d=c;  �(e=a.s,((d<0||d>=e.length)?$throwRuntimeError("index out of range"):e[d]=0));    c++;}  �f=0;g=0;a.i=f;a.j=g;    };B.prototype.Reset=function(){return this.$val.Reset();};Ciphercrypto/rc4.Cipher ((*crypto/rc4.Cipher).xorKeyStreamGeneric��B.ptr.prototype.xorKeyStreamGeneric=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;  c=this;      Ld=c.i;e=c.j;f=d;g=e;  ^h=b;i=0;while(true){if(!(i<h.$length)){break;}j=i;k=((i<0||i>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+i]);  x  xf=f+(1)<<24>>>24;      �  �g=g+(((l=c.s,((f<0||f>=l.length)?$throwRuntimeError("index out of range"):l[f]))<<24>>>24))<<24>>>24;      �m=(n=c.s,((g<0||g>=n.length)?$throwRuntimeError("index out of range"):n[g]));o=(p=c.s,((f<0||f>=p.length)?$throwRuntimeError("index out of range"):p[f]));(q=c.s,((f<0||f>=q.length)?$throwRuntimeError("index out of range"):q[f]=m));(r=c.s,((g<0||g>=r.length)?$throwRuntimeError("index out of range"):r[g]=o));  �((j<0||j>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+j]=(k^((s=c.s,t=(((u=c.s,((f<0||f>=u.length)?$throwRuntimeError("index out of range"):u[f]))+(v=c.s,((g<0||g>=v.length)?$throwRuntimeError("index out of range"):v[g]))>>>0)<<24>>>24),((t<0||t>=s.length)?$throwRuntimeError("index out of range"):s[t]))<<24>>>24))<<24>>>24);    i++;}  �w=f;x=g;c.i=w;c.j=x;    };B.prototype.xorKeyStreamGeneric=function(a,b){return this.$val.xorKeyStreamGeneric(a,b);};CipherxorKeyStreamGeneric~crypto/rc4.Cipher !(*crypto/rc4.Cipher).XORKeyStream��B.ptr.prototype.XORKeyStream=function(a,b){var $ptr,a,b,c;  pc=this;      �c.xorKeyStreamGeneric(a,b);    };B.prototype.XORKeyStream=function(a,b){return this.$val.XORKeyStream(a,b);};Ciphercrypto/rc4.Ciphercrypto/rc4.xorKeyStreamGeneric~ �4{"Base":2239,"Files":[{"Name":"/usr/local/go/src/crypto/rc4/rc4.go","Base":1,"Size":1787,"Lines":[0,55,109,159,160,233,258,270,271,341,380,381,398,399,457,478,496,508,510,511,533,534,573,636,638,639,718,769,815,830,853,883,886,900,928,949,952,969,997,1029,1063,1066,1082,1084,1085,1153,1174,1201,1223,1236,1239,1256,1258,1259,1328,1399,1415,1418,1488,1554,1610,1628,1653,1662,1683,1717,1765,1768,1785],"Infos":null},{"Name":"/usr/local/go/src/crypto/rc4/rc4_ref.go","Base":1789,"Size":449,"Lines":[0,55,109,159,160,206,207,219,220,294,365,414,447],"Infos":null}]}
 