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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �6���
hash/crc32crc32hashsync��
$$ exports $$
pv0
crc32hash/crc32Castagnoli$!����	Checksum data2tab
Table �   	ChecksumIEEE data2  IEEE$!����IEEETable>Koopman$!����	MakeTable poly > 	New tab> Hash32hashhashHashWriterioio 
Write p2nerr6  BlockSize    
Reset    Size    Sum b2 2  
Sum32      	NewIEEE   P Size$!>	Update crctab>p2  %AA=$packages["hash"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["sync"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CQC=$pkg.Table=$newType(1024,$kindArray,"crc32.Table",true,"hash/crc32",true,null);C.init($Uint32,256);Tablehash/crc32.Table HbH=$pkg.slicing8Table=$newType(8192,$kindArray,"crc32.slicing8Table",true,"hash/crc32",false,null);H.init(C,8);slicing8Tablehash/crc32.Tablehash/crc32.slicing8Table N��N=$pkg.digest=$newType(0,$kindStruct,"crc32.digest",true,"hash/crc32",false,function(crc_,tab_){this.$val=this;if(arguments.length===0){this.crc=0;this.tab=X.nil;return;}this.crc=crc_;this.tab=tab_;});��AC.methods=[{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([AB],[$Int,$error],false)},{prop:"Sum32",name:"Sum32",pkg:"",typ:$funcType([],[$Uint32],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([AB],[AB],false)}];��N.init("hash/crc32",[{prop:"crc",name:"crc",exported:false,typ:$Uint32,tag:""},{prop:"tab",name:"tab",exported:false,typ:X,tag:""}]);digesthash/crc32.ABhash/crc32.AChash/crc32.Xhash/crc32.digest XX=$ptrType(C);Xhash/crc32.Table YY=$ptrType(H);Yhash/crc32.slicing8Table ZZ=$arrayType($Uint32,256);Z AAAA=$arrayType(C,8);AAhash/crc32.Table ABAB=$sliceType($Uint8);AB ACAC=$ptrType(N);AChash/crc32.digest DD=X.nil;castagnoliTablehash/crc32.Tablehash/crc32.Xhash/crc32.castagnoliTable EE=Y.nil;castagnoliTable8hash/crc32.Yhash/crc32.castagnoliTable8hash/crc32.slicing8Table F)F=new B.Once.ptr(new B.Mutex.ptr(0,0),0);castagnoliOncehash/crc32.castagnoliOnce
sync.Mutex	sync.Once 	IEEETable II=Y.nil;
ieeeTable8hash/crc32.Yhash/crc32.ieeeTable8 J)J=new B.Once.ptr(new B.Mutex.ptr(0,0),0);ieeeTable8Oncehash/crc32.ieeeTable8Once
sync.Mutex	sync.Once "    $pkg.IEEETable=L(3988292384);hash/crc32.IEEETablehash/crc32.makeTable hash/crc32.castagnoliInitGGG=function(){var $ptr;  �D=L(2197175160);  �E=M(2197175160);    };castagnoliInithash/crc32.castagnoliInithash/crc32.castagnoliTablehash/crc32.castagnoliTable8hash/crc32.makeTablehash/crc32.makeTable8 hash/crc32.MakeTableK��K=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    b=a;  �if(b===(3988292384)){$s=2;continue;}if(b===(2197175160)){$s=3;continue;}$s=4;continue;    case 2:  �$s=-1;return $pkg.IEEETable;return $pkg.IEEETable;    case 3:  	$r=F.Do(G);$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  	%$s=-1;return D;return D;    case 4:    case 1:  	@$s=-1;return L(a);return L(a);    }return;}if($f===undefined){$f={$blk:K};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};$pkg.MakeTable=K;	MakeTablehash/crc32.IEEETablehash/crc32.MakeTablehash/crc32.castagnoliInithash/crc32.castagnoliOncehash/crc32.castagnoliTablehash/crc32.makeTable hash/crc32.makeTableL��L=function(a){var $ptr,a,b,c,d,e,f;  	�b=Z.zero();  	�c=0;while(true){if(!(c<256)){break;}  	�d=(c>>>0);  
e=0;while(true){if(!(e<8)){break;}    if(((d&1)>>>0)===1){  
;d=(((d>>>1>>>0))^a)>>>0;    }else{  
cd=(f=(1),f<32?(d>>>f):0)>>>0;    }  
e=e+(1)>>0;    }  
xb.nilCheck,((c<0||c>=b.length)?$throwRuntimeError("index out of range"):b[c]=d);  	�c=c+(1)>>0;    }  
�return b;    };	makeTablehash/crc32.Zhash/crc32.makeTable hash/crc32.makeTable8M�oM=function(a){var $ptr,a,b,c,d,e,f,g,h,i;  b=AA.zero();  *C.copy((b.nilCheck,b[0]),L(a));  Gc=0;while(true){if(!(c<256)){break;}  `e=(d=(b.nilCheck,b[0]),((c<0||c>=d.length)?$throwRuntimeError("index out of range"):d[c]));  uf=1;while(true){if(!(f<8)){break;}  �e=((g=(b.nilCheck,b[0]),h=(e&255)>>>0,((h<0||h>=g.length)?$throwRuntimeError("index out of range"):g[h]))^((e>>>8>>>0)))>>>0;  �(i=(b.nilCheck,((f<0||f>=b.length)?$throwRuntimeError("index out of range"):b[f])),((c<0||c>=i.length)?$throwRuntimeError("index out of range"):i[c]=e));  �f=f+(1)>>0;    }  Xc=c+(1)>>0;    }  �return b;    };
makeTable8hash/crc32.AAhash/crc32.Tablehash/crc32.Zhash/crc32.makeTablehash/crc32.makeTable8 hash/crc32.NewOFO=function(a){var $ptr,a;  return new N.ptr(0,a);    };$pkg.New=O;Newhash/crc32.Newhash/crc32.digest hash/crc32.NewIEEEPJP=function(){var $ptr;  �return O($pkg.IEEETable);    };$pkg.NewIEEE=P;NewIEEEhash/crc32.IEEETablehash/crc32.Newhash/crc32.NewIEEE (*hash/crc32.digest).Size��N.ptr.prototype.Size=function(){var $ptr,a;  a=this;  (return 4;    };N.prototype.Size=function(){return this.$val.Size();};digesthash/crc32.digest (*hash/crc32.digest).BlockSize��N.ptr.prototype.BlockSize=function(){var $ptr,a;  =a=this;  Zreturn 1;    };N.prototype.BlockSize=function(){return this.$val.BlockSize();};digesthash/crc32.digest (*hash/crc32.digest).Reset��N.ptr.prototype.Reset=function(){var $ptr,a;  la=this;  �a.crc=0;    };N.prototype.Reset=function(){return this.$val.Reset();};digesthash/crc32.digest hash/crc32.updateQ�mQ=function(a,b,c){var $ptr,a,b,c,d,e,f,g;  �a=~a>>>0;  �d=c;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  �a=((g=((a<<24>>>24)^f)<<24>>>24,(b.nilCheck,((g<0||g>=b.length)?$throwRuntimeError("index out of range"):b[g])))^((a>>>8>>>0)))>>>0;    e++;}  return~a>>>0;    };updatehash/crc32.update hash/crc32.updateSlicingBy8R�&R=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;  �a=~a>>>0;  �while(true){if(!(c.$length>8)){break;}  �a=(a^(((((((((0>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+0])>>>0)|(((1>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+1])>>>0)<<8>>>0))>>>0)|(((2>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+2])>>>0)<<16>>>0))>>>0)|(((3>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+3])>>>0)<<24>>>0))>>>0)))>>>0;  a=((((((((((((((d=(b.nilCheck,b[0]),e=(7>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+7]),((e<0||e>=d.length)?$throwRuntimeError("index out of range"):d[e]))^(f=(b.nilCheck,b[1]),g=(6>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+6]),((g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g])))>>>0)^(h=(b.nilCheck,b[2]),i=(5>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+5]),((i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i])))>>>0)^(j=(b.nilCheck,b[3]),k=(4>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+4]),((k<0||k>=j.length)?$throwRuntimeError("index out of range"):j[k])))>>>0)^(l=(b.nilCheck,b[4]),m=a>>>24>>>0,((m<0||m>=l.length)?$throwRuntimeError("index out of range"):l[m])))>>>0)^(n=(b.nilCheck,b[5]),o=(((a>>>16>>>0))&255)>>>0,((o<0||o>=n.length)?$throwRuntimeError("index out of range"):n[o])))>>>0)^(p=(b.nilCheck,b[6]),q=(((a>>>8>>>0))&255)>>>0,((q<0||q>=p.length)?$throwRuntimeError("index out of range"):p[q])))>>>0)^(r=(b.nilCheck,b[7]),s=(a&255)>>>0,((s<0||s>=r.length)?$throwRuntimeError("index out of range"):r[s])))>>>0;  �c=$subslice(c,8);    }  �a=~a>>>0;    if(c.$length===0){  �return a;    }  �return Q(a,(b.nilCheck,b[0]),c);    };updateSlicingBy8hash/crc32.updatehash/crc32.updateSlicingBy8 hash/crc32.UpdateS��S=function(a,b,c){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    d=b;  �if($equal(d,(D),C)){$s=2;continue;}if($equal(d,($pkg.IEEETable),C)){$s=3;continue;}$s=4;continue;    case 2:  �$s=-1;return V(a,c);return V(a,c);    case 3:  �e=W(a,c);$s=5;case 5:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$s=-1;return e;return e;    case 4:    case 1:  �$s=-1;return Q(a,b,c);return Q(a,b,c);    }return;}if($f===undefined){$f={$blk:S};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Update=S;Updatehash/crc32.IEEETablehash/crc32.Tablehash/crc32.Updatehash/crc32.castagnoliTablehash/crc32.updatehash/crc32.updateCastagnolihash/crc32.updateIEEE (*hash/crc32.digest).Write��N.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  d=this;  Me=S(d.crc,d.tab,a);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d.crc=e;    f=a.$length;g=$ifaceNil;b=f;c=g;$s=-1;return[b,c];return[b,c];    }return;}if($f===undefined){$f={$blk:N.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};N.prototype.Write=function(a){return this.$val.Write(a);};digesthash/crc32.Updatehash/crc32.digest (*hash/crc32.digest).Sum32��N.ptr.prototype.Sum32=function(){var $ptr,a;  �a=this;  �return a.crc;    };N.prototype.Sum32=function(){return this.$val.Sum32();};digesthash/crc32.digest (*hash/crc32.digest).Sum��N.ptr.prototype.Sum=function(a){var $ptr,a,b,c;  �b=this;  �c=b.Sum32();  �return $append(a,((c>>>24>>>0)<<24>>>24),((c>>>16>>>0)<<24>>>24),((c>>>8>>>0)<<24>>>24),(c<<24>>>24));    };N.prototype.Sum=function(a){return this.$val.Sum(a);};digesthash/crc32.digest hash/crc32.ChecksumT��T=function(a,b){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �c=S(0,b,a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;return c;    }return;}if($f===undefined){$f={$blk:T};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Checksum=T;Checksumhash/crc32.Checksumhash/crc32.Update hash/crc32.ChecksumIEEEU��U=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  _b=W(0,a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;return b;    }return;}if($f===undefined){$f={$blk:U};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};$pkg.ChecksumIEEE=U;ChecksumIEEEhash/crc32.ChecksumIEEEhash/crc32.updateIEEE hash/crc32.updateCastagnoliVkV=function(a,b){var $ptr,a,b;    if(b.$length>=16){  Rreturn R(a,E,b);    }  �return Q(a,D,b);    };updateCastagnolihash/crc32.castagnoliTablehash/crc32.castagnoliTable8hash/crc32.updatehash/crc32.updateCastagnolihash/crc32.updateSlicingBy8 hash/crc32.updateIEEEW�tW=function(a,b){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  	if(b.$length>=16){$s=1;continue;}$s=2;continue;    case 1:  )$r=J.Do((function(){var $ptr;  GI=M(3988292384);    }));$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  l$s=-1;return R(a,I,b);return R(a,I,b);    case 2:  �$s=-1;return Q(a,$pkg.IEEETable,b);return Q(a,$pkg.IEEETable,b);    }return;}if($f===undefined){$f={$blk:W};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};
updateIEEEhash/crc32.IEEETablehash/crc32.ieeeTable8hash/crc32.ieeeTable8Oncehash/crc32.makeTable8hash/crc32.updatehash/crc32.updateIEEEhash/crc32.updateSlicingBy8 �l{"Base":6080,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.3yb4TYabM8/goroot/src/hash/crc32/crc32.go","Base":1,"Size":5243,"Lines":[0,55,109,159,160,235,309,325,328,416,419,547,567,581,582,591,599,607,609,610,653,668,669,717,743,744,771,779,842,909,928,929,973,1031,1071,1096,1097,1123,1186,1233,1255,1257,1258,1341,1364,1365,1440,1516,1592,1618,1645,1681,1710,1711,1735,1776,1819,1821,1822,1873,1905,1906,1944,1972,1973,2017,2047,2076,2077,2149,2201,2238,2253,2265,2284,2302,2338,2363,2366,2390,2392,2393,2467,2504,2521,2549,2568,2595,2614,2642,2654,2668,2673,2677,2690,2693,2703,2705,2706,2785,2831,2856,2881,2909,2926,2953,2990,3007,3011,3014,3024,3026,3027,3086,3107,3119,3131,3133,3134,3197,3247,3314,3374,3375,3442,3472,3539,3592,3593,3637,3638,3684,3685,3724,3725,3780,3792,3815,3853,3856,3869,3871,3872,3923,3996,4008,4026,4104,4172,4218,4262,4274,4277,4289,4307,4320,4323,4355,4357,4358,4424,4479,4493,4516,4550,4567,4595,4598,4626,4628,4629,4683,4716,4736,4738,4739,4788,4789,4830,4846,4912,4914,4915,4963,5013,5091,5092,5144,5174],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.3yb4TYabM8/goroot/src/hash/crc32/crc32_generic.go","Base":5245,"Size":834,"Lines":[0,55,109,159,160,194,195,209,210,283,343,344,397,436,467,519,522,562,564,565,612,651,682,711,744,749,795,798,832],"Infos":null}]}
 