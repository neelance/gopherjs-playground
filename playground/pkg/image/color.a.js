p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �w���image/colorcolor��package color
type @"".Alpha struct { @"".A uint8 }
func (? @"".Alpha) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
func (? *@"".Alpha) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
type @"".Alpha16 struct { @"".A uint16 }
func (? @"".Alpha16) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
func (? *@"".Alpha16) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
var @"".Alpha16Model @"".Model
var @"".AlphaModel @"".Model
var @"".Black @"".Gray16
type @"".Color interface { @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32) }
type @"".Gray struct { @"".Y uint8 }
func (? @"".Gray) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
func (? *@"".Gray) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
type @"".Gray16 struct { @"".Y uint16 }
func (? @"".Gray16) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
func (? *@"".Gray16) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
var @"".Gray16Model @"".Model
var @"".GrayModel @"".Model
type @"".Model interface { @"".Convert(@"".c @"".Color) (? @"".Color) }
func @"".ModelFunc(@"".f func (? @"".Color) (? @"".Color)) (? @"".Model)
type @"".NRGBA struct { @"".R uint8; @"".G uint8; @"".B uint8; @"".A uint8 }
func (? @"".NRGBA) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
func (? *@"".NRGBA) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
type @"".NRGBA64 struct { @"".R uint16; @"".G uint16; @"".B uint16; @"".A uint16 }
func (? @"".NRGBA64) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
func (? *@"".NRGBA64) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
var @"".NRGBA64Model @"".Model
var @"".NRGBAModel @"".Model
var @"".Opaque @"".Alpha16
type @"".Palette []@"".Color
func (? @"".Palette) @"".Convert(@"".c @"".Color) (? @"".Color)
func (? @"".Palette) @"".Index(@"".c @"".Color) (? int)
func (? *@"".Palette) @"".Convert(@"".c @"".Color) (? @"".Color)
func (? *@"".Palette) @"".Index(@"".c @"".Color) (? int)
type @"".RGBA struct { @"".R uint8; @"".G uint8; @"".B uint8; @"".A uint8 }
func (? @"".RGBA) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
func (? *@"".RGBA) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
type @"".RGBA64 struct { @"".R uint16; @"".G uint16; @"".B uint16; @"".A uint16 }
func (? @"".RGBA64) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
func (? *@"".RGBA64) @"".RGBA() (@"".r uint32, @"".g uint32, @"".b uint32, @"".a uint32)
var @"".RGBA64Model @"".Model
var @"".RGBAModel @"".Model
func @"".RGBToYCbCr(@"".r uint8, @"".g uint8, @"".b uint8) (? uint8, ? uint8, ? uint8)
var @"".Transparent @"".Alpha16
var @"".White @"".Gray16
type @"".YCbCr struct { @"".Y uint8; @"".Cb uint8; @"".Cr uint8 }
func (? @"".YCbCr) @"".RGBA() (? uint32, ? uint32, ? uint32, ? uint32)
func (? *@"".YCbCr) @"".RGBA() (? uint32, ? uint32, ? uint32, ? uint32)
var @"".YCbCrModel @"".Model
func @"".YCbCrToRGB(@"".y uint8, @"".cb uint8, @"".cr uint8) (? uint8, ? uint8, ? uint8)
type @"".modelFunc struct { @"".f func (? @"".Color) (? @"".Color) }
func (? *@"".modelFunc) @"".Convert(@"".c @"".Color) (? @"".Color)
$$
AAQA=$pkg.Color=$newType(8,$kindInterface,"color.Color","Color","image/color",null);eA.init([{prop:"RGBA",name:"RGBA",pkg:"",typ:$funcType([],[$Uint32,$Uint32,$Uint32,$Uint32],false)}]);Colorimage/color.Color B��B=$pkg.RGBA=$newType(0,$kindStruct,"color.RGBA","RGBA","image/color",function(R_,G_,B_,A_){this.$val=this;if(arguments.length===0){this.R=0;this.G=0;this.B=0;this.A=0;return;}this.R=R_;this.G=G_;this.B=B_;this.A=A_;});gB.methods=[{prop:"RGBA",name:"RGBA",pkg:"",typ:$funcType([],[$Uint32,$Uint32,$Uint32,$Uint32],false)}];��B.init([{prop:"R",name:"R",pkg:"",typ:$Uint8,tag:""},{prop:"G",name:"G",pkg:"",typ:$Uint8,tag:""},{prop:"B",name:"B",pkg:"",typ:$Uint8,tag:""},{prop:"A",name:"A",pkg:"",typ:$Uint8,tag:""}]);RGBAimage/color.RGBA C��C=$pkg.RGBA64=$newType(0,$kindStruct,"color.RGBA64","RGBA64","image/color",function(R_,G_,B_,A_){this.$val=this;if(arguments.length===0){this.R=0;this.G=0;this.B=0;this.A=0;return;}this.R=R_;this.G=G_;this.B=B_;this.A=A_;});gC.methods=[{prop:"RGBA",name:"RGBA",pkg:"",typ:$funcType([],[$Uint32,$Uint32,$Uint32,$Uint32],false)}];��C.init([{prop:"R",name:"R",pkg:"",typ:$Uint16,tag:""},{prop:"G",name:"G",pkg:"",typ:$Uint16,tag:""},{prop:"B",name:"B",pkg:"",typ:$Uint16,tag:""},{prop:"A",name:"A",pkg:"",typ:$Uint16,tag:""}]);RGBA64image/color.RGBA64 D��D=$pkg.NRGBA=$newType(0,$kindStruct,"color.NRGBA","NRGBA","image/color",function(R_,G_,B_,A_){this.$val=this;if(arguments.length===0){this.R=0;this.G=0;this.B=0;this.A=0;return;}this.R=R_;this.G=G_;this.B=B_;this.A=A_;});gD.methods=[{prop:"RGBA",name:"RGBA",pkg:"",typ:$funcType([],[$Uint32,$Uint32,$Uint32,$Uint32],false)}];��D.init([{prop:"R",name:"R",pkg:"",typ:$Uint8,tag:""},{prop:"G",name:"G",pkg:"",typ:$Uint8,tag:""},{prop:"B",name:"B",pkg:"",typ:$Uint8,tag:""},{prop:"A",name:"A",pkg:"",typ:$Uint8,tag:""}]);NRGBAimage/color.NRGBA E��E=$pkg.NRGBA64=$newType(0,$kindStruct,"color.NRGBA64","NRGBA64","image/color",function(R_,G_,B_,A_){this.$val=this;if(arguments.length===0){this.R=0;this.G=0;this.B=0;this.A=0;return;}this.R=R_;this.G=G_;this.B=B_;this.A=A_;});gE.methods=[{prop:"RGBA",name:"RGBA",pkg:"",typ:$funcType([],[$Uint32,$Uint32,$Uint32,$Uint32],false)}];��E.init([{prop:"R",name:"R",pkg:"",typ:$Uint16,tag:""},{prop:"G",name:"G",pkg:"",typ:$Uint16,tag:""},{prop:"B",name:"B",pkg:"",typ:$Uint16,tag:""},{prop:"A",name:"A",pkg:"",typ:$Uint16,tag:""}]);NRGBA64image/color.NRGBA64 F��F=$pkg.Alpha=$newType(0,$kindStruct,"color.Alpha","Alpha","image/color",function(A_){this.$val=this;if(arguments.length===0){this.A=0;return;}this.A=A_;});gF.methods=[{prop:"RGBA",name:"RGBA",pkg:"",typ:$funcType([],[$Uint32,$Uint32,$Uint32,$Uint32],false)}];7F.init([{prop:"A",name:"A",pkg:"",typ:$Uint8,tag:""}]);Alphaimage/color.Alpha G��G=$pkg.Alpha16=$newType(0,$kindStruct,"color.Alpha16","Alpha16","image/color",function(A_){this.$val=this;if(arguments.length===0){this.A=0;return;}this.A=A_;});gG.methods=[{prop:"RGBA",name:"RGBA",pkg:"",typ:$funcType([],[$Uint32,$Uint32,$Uint32,$Uint32],false)}];8G.init([{prop:"A",name:"A",pkg:"",typ:$Uint16,tag:""}]);Alpha16image/color.Alpha16 H��H=$pkg.Gray=$newType(0,$kindStruct,"color.Gray","Gray","image/color",function(Y_){this.$val=this;if(arguments.length===0){this.Y=0;return;}this.Y=Y_;});gH.methods=[{prop:"RGBA",name:"RGBA",pkg:"",typ:$funcType([],[$Uint32,$Uint32,$Uint32,$Uint32],false)}];7H.init([{prop:"Y",name:"Y",pkg:"",typ:$Uint8,tag:""}]);Grayimage/color.Gray I��I=$pkg.Gray16=$newType(0,$kindStruct,"color.Gray16","Gray16","image/color",function(Y_){this.$val=this;if(arguments.length===0){this.Y=0;return;}this.Y=Y_;});gI.methods=[{prop:"RGBA",name:"RGBA",pkg:"",typ:$funcType([],[$Uint32,$Uint32,$Uint32,$Uint32],false)}];8I.init([{prop:"Y",name:"Y",pkg:"",typ:$Uint16,tag:""}]);Gray16image/color.Gray16 JQJ=$pkg.Model=$newType(8,$kindInterface,"color.Model","Model","image/color",null);NJ.init([{prop:"Convert",name:"Convert",pkg:"",typ:$funcType([A],[A],false)}]);Modelimage/color.Colorimage/color.Model L��L=$pkg.modelFunc=$newType(0,$kindStruct,"color.modelFunc","modelFunc","image/color",function(f_){this.$val=this;if(arguments.length===0){this.f=$throwNilPointerError;return;}this.f=f_;});PZ.methods=[{prop:"Convert",name:"Convert",pkg:"",typ:$funcType([A],[A],false)}];>L.init([{prop:"f",name:"f",pkg:"image/color",typ:AA,tag:""}]);	modelFuncimage/color.AAimage/color.Colorimage/color.Zimage/color.modelFunc UTU=$pkg.Palette=$newType(12,$kindSlice,"color.Palette","Palette","image/color",null);��U.methods=[{prop:"Convert",name:"Convert",pkg:"",typ:$funcType([A],[A],false)},{prop:"Index",name:"Index",pkg:"",typ:$funcType([A],[$Int],false)}];
U.init(A);Paletteimage/color.Colorimage/color.Palette X��X=$pkg.YCbCr=$newType(0,$kindStruct,"color.YCbCr","YCbCr","image/color",function(Y_,Cb_,Cr_){this.$val=this;if(arguments.length===0){this.Y=0;this.Cb=0;this.Cr=0;return;}this.Y=Y_;this.Cb=Cb_;this.Cr=Cr_;});gX.methods=[{prop:"RGBA",name:"RGBA",pkg:"",typ:$funcType([],[$Uint32,$Uint32,$Uint32,$Uint32],false)}];��X.init([{prop:"Y",name:"Y",pkg:"",typ:$Uint8,tag:""},{prop:"Cb",name:"Cb",pkg:"",typ:$Uint8,tag:""},{prop:"Cr",name:"Cr",pkg:"",typ:$Uint8,tag:""}]);YCbCrimage/color.YCbCr ZZ=$ptrType(L);Zimage/color.modelFunc AAAA=$funcType([A],[A],false);AAimage/color.Color 	RGBAModel RGBA64Model 
NRGBAModel NRGBA64Model 
AlphaModel Alpha16Model 	GrayModel Gray16Model Black White Transparent Opaque 
YCbCrModel     $pkg.RGBAModel=K(M);image/color.ModelFuncimage/color.RGBAModelimage/color.rgbaModel     $pkg.RGBA64Model=K(N);image/color.ModelFuncimage/color.RGBA64Modelimage/color.rgba64Model     $pkg.NRGBAModel=K(O);image/color.ModelFuncimage/color.NRGBAModelimage/color.nrgbaModel     $pkg.NRGBA64Model=K(P);image/color.ModelFuncimage/color.NRGBA64Modelimage/color.nrgba64Model     $pkg.AlphaModel=K(Q);image/color.AlphaModelimage/color.ModelFuncimage/color.alphaModel     $pkg.Alpha16Model=K(R);image/color.Alpha16Modelimage/color.ModelFuncimage/color.alpha16Model     $pkg.GrayModel=K(S);image/color.GrayModelimage/color.ModelFuncimage/color.grayModel     $pkg.Gray16Model=K(T);image/color.Gray16Modelimage/color.ModelFuncimage/color.gray16Model     $pkg.Black=new I.ptr(0);Blackimage/color.Blackimage/color.Gray16 !    $pkg.White=new I.ptr(65535);Whiteimage/color.Gray16image/color.White #    $pkg.Transparent=new G.ptr(0);Transparentimage/color.Alpha16image/color.Transparent "    $pkg.Opaque=new G.ptr(65535);Opaqueimage/color.Alpha16image/color.Opaque     $pkg.YCbCrModel=K(Y);image/color.ModelFuncimage/color.YCbCrModelimage/color.yCbCrModel (image/color.RGBA).RGBA��B.ptr.prototype.RGBA=function(){var $ptr,a,b,c,d,e;a=0;b=0;c=0;d=0;  !e=$clone(this,B);      Ga=(e.R>>>0);  X  Xa=(a|((a<<8>>>0)))>>>0;      eb=(e.G>>>0);  v  vb=(b|((b<<8>>>0)))>>>0;      �c=(e.B>>>0);  �  �c=(c|((c<<8>>>0)))>>>0;      �d=(e.A>>>0);  �  �d=(d|((d<<8>>>0)))>>>0;      �return[a,b,c,d];    };B.prototype.RGBA=function(){return this.$val.RGBA();};RGBAimage/color.RGBA (image/color.RGBA64).RGBA��C.ptr.prototype.RGBA=function(){var $ptr,a,b,c,d,e,f,g,h,i;a=0;b=0;c=0;d=0;  me=$clone(this,C);      �    f=(e.R>>>0);g=(e.G>>>0);h=(e.B>>>0);i=(e.A>>>0);a=f;b=g;c=h;d=i;return[a,b,c,d];    };C.prototype.RGBA=function(){return this.$val.RGBA();};RGBA64image/color.RGBA64 (image/color.NRGBA).RGBA��D.ptr.prototype.RGBA=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k;a=0;b=0;c=0;d=0;  =e=$clone(this,D);      da=(e.R>>>0);  u  ua=(a|((a<<8>>>0)))>>>0;      �  �a=(f=(e.A>>>0),(((a>>>16<<16)*f>>>0)+(a<<16>>>16)*f)>>>0);      �  �a=(g=a/(255),(g===g&&g!==1/0&&g!==-1/0)?g>>>0:$throwRuntimeError("integer divide by zero"));      �b=(e.G>>>0);  �  �b=(b|((b<<8>>>0)))>>>0;      �  �b=(h=(e.A>>>0),(((b>>>16<<16)*h>>>0)+(b<<16>>>16)*h)>>>0);      �  �b=(i=b/(255),(i===i&&i!==1/0&&i!==-1/0)?i>>>0:$throwRuntimeError("integer divide by zero"));      �c=(e.B>>>0);  �  �c=(c|((c<<8>>>0)))>>>0;      �  �c=(j=(e.A>>>0),(((c>>>16<<16)*j>>>0)+(c<<16>>>16)*j)>>>0);      
  
c=(k=c/(255),(k===k&&k!==1/0&&k!==-1/0)?k>>>0:$throwRuntimeError("integer divide by zero"));      d=(e.A>>>0);  &  &d=(d|((d<<8>>>0)))>>>0;      3return[a,b,c,d];    };D.prototype.RGBA=function(){return this.$val.RGBA();};NRGBAimage/color.NRGBA (image/color.NRGBA64).RGBA�"E.ptr.prototype.RGBA=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k;a=0;b=0;c=0;d=0;  �e=$clone(this,E);      a=(e.R>>>0);  !  !a=(f=(e.A>>>0),(((a>>>16<<16)*f>>>0)+(a<<16>>>16)*f)>>>0);      3  3a=(g=a/(65535),(g===g&&g!==1/0&&g!==-1/0)?g>>>0:$throwRuntimeError("integer divide by zero"));      @b=(e.G>>>0);  Q  Qb=(h=(e.A>>>0),(((b>>>16<<16)*h>>>0)+(b<<16>>>16)*h)>>>0);      c  cb=(i=b/(65535),(i===i&&i!==1/0&&i!==-1/0)?i>>>0:$throwRuntimeError("integer divide by zero"));      pc=(e.B>>>0);  �  �c=(j=(e.A>>>0),(((c>>>16<<16)*j>>>0)+(c<<16>>>16)*j)>>>0);      �  �c=(k=c/(65535),(k===k&&k!==1/0&&k!==-1/0)?k>>>0:$throwRuntimeError("integer divide by zero"));      �d=(e.A>>>0);  �return[a,b,c,d];    };E.prototype.RGBA=function(){return this.$val.RGBA();};NRGBA64image/color.NRGBA64 (image/color.Alpha).RGBA�F.ptr.prototype.RGBA=function(){var $ptr,a,b,c,d,e,f,g,h,i;a=0;b=0;c=0;d=0;  e=$clone(this,F);      2d=(e.A>>>0);  C  Cd=(d|((d<<8>>>0)))>>>0;      P    f=d;g=d;h=d;i=d;a=f;b=g;c=h;d=i;return[a,b,c,d];    };F.prototype.RGBA=function(){return this.$val.RGBA();};Alphaimage/color.Alpha (image/color.Alpha16).RGBA��G.ptr.prototype.RGBA=function(){var $ptr,a,b,c,d,e,f,g,h,i;a=0;b=0;c=0;d=0;  �e=$clone(this,G);      �d=(e.A>>>0);  �    f=d;g=d;h=d;i=d;a=f;b=g;c=h;d=i;return[a,b,c,d];    };G.prototype.RGBA=function(){return this.$val.RGBA();};Alpha16image/color.Alpha16 (image/color.Gray).RGBA�H.ptr.prototype.RGBA=function(){var $ptr,a,b,c,d,e,f,g,h,i,j;a=0;b=0;c=0;d=0;  	[e=$clone(this,H);      	�f=(e.Y>>>0);  	�  	�f=(f|((f<<8>>>0)))>>>0;      	�    g=f;h=f;i=f;j=65535;a=g;b=h;c=i;d=j;return[a,b,c,d];    };H.prototype.RGBA=function(){return this.$val.RGBA();};Grayimage/color.Gray (image/color.Gray16).RGBA��I.ptr.prototype.RGBA=function(){var $ptr,a,b,c,d,e,f,g,h,i,j;a=0;b=0;c=0;d=0;  
e=$clone(this,I);      
9f=(e.Y>>>0);  
K    g=f;h=f;i=f;j=65535;a=g;b=h;c=i;d=j;return[a,b,c,d];    };I.prototype.RGBA=function(){return this.$val.RGBA();};Gray16image/color.Gray16 image/color.ModelFuncKMK=$pkg.ModelFunc=function(a){var $ptr,a;      Qreturn new L.ptr(a);    };	ModelFuncimage/color.ModelFuncimage/color.modelFunc  (*image/color.modelFunc).Convert�L.ptr.prototype.Convert=function $b(a){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;      �c=b.f(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}return c;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Convert=function(a){return this.$val.Convert(a);};	modelFuncimage/color.modelFunc image/color.rgbaModelM�M=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      �  �b=$assertType(a,B,true);c=b[1];    if(c){  �return a;    }  �e=a.RGBA();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];h=d[2];i=d[3];  �return(j=new B.ptr(((f>>>8>>>0)<<24>>>24),((g>>>8>>>0)<<24>>>24),((h>>>8>>>0)<<24>>>24),((i>>>8>>>0)<<24>>>24)),new j.constructor.elem(j));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};	rgbaModelimage/color.RGBAimage/color.rgbaModel image/color.rgba64ModelN��N=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      >  Ab=$assertType(a,C,true);c=b[1];    if(c){  ]return a;    }  je=a.RGBA();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];h=d[2];i=d[3];  �return(j=new C.ptr((f<<16>>>16),(g<<16>>>16),(h<<16>>>16),(i<<16>>>16)),new j.constructor.elem(j));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};rgba64Modelimage/color.RGBA64image/color.rgba64Model image/color.nrgbaModelO�O=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      �  �b=$assertType(a,D,true);c=b[1];    if(c){  �return a;    }  e=a.RGBA();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];h=d[2];i=d[3];  $    if(i===65535){  7return(j=new D.ptr(((f>>>8>>>0)<<24>>>24),((g>>>8>>>0)<<24>>>24),((h>>>8>>>0)<<24>>>24),255),new j.constructor.elem(j));    }  {    if(i===0){  �return(k=new D.ptr(0,0,0,0),new k.constructor.elem(k));    }  f=(l=(((((f>>>16<<16)*65535>>>0)+(f<<16>>>16)*65535)>>>0))/i,(l===l&&l!==1/0&&l!==-1/0)?l>>>0:$throwRuntimeError("integer divide by zero"));  !g=(m=(((((g>>>16<<16)*65535>>>0)+(g<<16>>>16)*65535)>>>0))/i,(m===m&&m!==1/0&&m!==-1/0)?m>>>0:$throwRuntimeError("integer divide by zero"));  7h=(n=(((((h>>>16<<16)*65535>>>0)+(h<<16>>>16)*65535)>>>0))/i,(n===n&&n!==1/0&&n!==-1/0)?n>>>0:$throwRuntimeError("integer divide by zero"));  Mreturn(o=new D.ptr(((f>>>8>>>0)<<24>>>24),((g>>>8>>>0)<<24>>>24),((h>>>8>>>0)<<24>>>24),((i>>>8>>>0)<<24>>>24)),new o.constructor.elem(o));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.$s=$s;$f.$r=$r;return $f;};
nrgbaModelimage/color.NRGBAimage/color.nrgbaModel image/color.nrgba64ModelP��P=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      �  �b=$assertType(a,E,true);c=b[1];    if(c){  �return a;    }  �e=a.RGBA();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];h=d[2];i=d[3];      if(i===65535){  return(j=new E.ptr((f<<16>>>16),(g<<16>>>16),(h<<16>>>16),65535),new j.constructor.elem(j));    }  Q    if(i===0){  _return(k=new E.ptr(0,0,0,0),new k.constructor.elem(k));    }  �f=(l=(((((f>>>16<<16)*65535>>>0)+(f<<16>>>16)*65535)>>>0))/i,(l===l&&l!==1/0&&l!==-1/0)?l>>>0:$throwRuntimeError("integer divide by zero"));  �g=(m=(((((g>>>16<<16)*65535>>>0)+(g<<16>>>16)*65535)>>>0))/i,(m===m&&m!==1/0&&m!==-1/0)?m>>>0:$throwRuntimeError("integer divide by zero"));  h=(n=(((((h>>>16<<16)*65535>>>0)+(h<<16>>>16)*65535)>>>0))/i,(n===n&&n!==1/0&&n!==-1/0)?n>>>0:$throwRuntimeError("integer divide by zero"));  %return(o=new E.ptr((f<<16>>>16),(g<<16>>>16),(h<<16>>>16),(i<<16>>>16)),new o.constructor.elem(o));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.$s=$s;$f.$r=$r;return $f;};nrgba64Modelimage/color.NRGBA64image/color.nrgba64Model image/color.alphaModelQ��Q=function $b(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      �  �b=$assertType(a,F,true);c=b[1];    if(c){  �return a;    }  �e=a.RGBA();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[3];  �return(g=new F.ptr(((f>>>8>>>0)<<24>>>24)),new g.constructor.elem(g));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};
alphaModelimage/color.Alphaimage/color.alphaModel image/color.alpha16ModelR�|R=function $b(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:        b=$assertType(a,G,true);c=b[1];    if(c){  +return a;    }  8e=a.RGBA();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[3];  Preturn(g=new G.ptr((f<<16>>>16)),new g.constructor.elem(g));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};alpha16Modelimage/color.Alpha16image/color.alpha16Model image/color.grayModelS��S=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      �  �b=$assertType(a,H,true);c=b[1];    if(c){  �return a;    }  �e=a.RGBA();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];h=d[2];  �j=(i=((((((((299>>>16<<16)*f>>>0)+(299<<16>>>16)*f)>>>0)+((((587>>>16<<16)*g>>>0)+(587<<16>>>16)*g)>>>0)>>>0)+((((114>>>16<<16)*h>>>0)+(114<<16>>>16)*h)>>>0)>>>0)+500>>>0))/1000,(i===i&&i!==1/0&&i!==-1/0)?i>>>0:$throwRuntimeError("integer divide by zero"));  �return(k=new H.ptr(((j>>>8>>>0)<<24>>>24)),new k.constructor.elem(k));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};	grayModelimage/color.Grayimage/color.grayModel image/color.gray16ModelT��T=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      <  ?b=$assertType(a,I,true);c=b[1];    if(c){  [return a;    }  he=a.RGBA();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];h=d[2];  �j=(i=((((((((299>>>16<<16)*f>>>0)+(299<<16>>>16)*f)>>>0)+((((587>>>16<<16)*g>>>0)+(587<<16>>>16)*g)>>>0)>>>0)+((((114>>>16<<16)*h>>>0)+(114<<16>>>16)*h)>>>0)>>>0)+500>>>0))/1000,(i===i&&i!==1/0&&i!==-1/0)?i>>>0:$throwRuntimeError("integer divide by zero"));  �return(k=new I.ptr((j<<16>>>16)),new k.constructor.elem(k));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};gray16Modelimage/color.Gray16image/color.gray16Model (image/color.Palette).Convert��U.prototype.Convert=function $b(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Rb=this;      w    if(b.$length===0){  �return $ifaceNil;    }  �d=b.Index(a);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}return(c=d,((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$ptrType(U).prototype.Convert=function(a){return this.$get().Convert(a);};Paletteimage/color.Palette (image/color.Palette).Index�FU.prototype.Index=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  b=this;      ud=a.RGBA();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];f=c[1];g=c[2];  �h=0;i=4294967295;j=h;k=i;  �l=b;m=0;case 2:if(!(m<l.$length)){$s=3;continue;}n=m;o=((m<0||m>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+m]);  �q=o.RGBA();$s=4;case 4:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}p=q;r=p[0];s=p[1];t=p[2];  Bu=(((e>>0)-(r>>0)>>0))>>1>>0;  jv=(((((u>>>16<<16)*u>>0)+(u<<16>>>16)*u)>>0)>>>0);  �u=(((f>>0)-(s>>0)>>0))>>1>>0;  �  �v=v+((((((u>>>16<<16)*u>>0)+(u<<16>>>16)*u)>>0)>>>0))>>>0;      �u=(((g>>0)-(t>>0)>>0))>>1>>0;  �  �v=v+((((((u>>>16<<16)*u>>0)+(u<<16>>>16)*u)>>0)>>>0))>>>0;          if(v<k){  +    if(v===0){  =return n;    }  Nw=n;x=v;j=w;k=x;    }    m++;$s=2;continue;case 3:  lreturn j;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.$s=$s;$f.$r=$r;return $f;};$ptrType(U).prototype.Index=function(a){return this.$get().Index(a);};Paletteimage/color.Palette image/color.RGBToYCbCrV�`V=$pkg.RGBToYCbCr=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i;      d=(a>>0);   e=(b>>0);  .f=(c>>0);  <g=(((((19595*d>>0)+(38470*e>>0)>>0)+(7471*f>>0)>>0)+32768>>0))>>16>>0;  qh=(((((-11056*d>>0)-(21712*e>>0)>>0)+(32768*f>>0)>>0)+8421376>>0))>>16>>0;  �i=(((((32768*d>>0)-(27440*e>>0)>>0)-(5328*f>>0)>>0)+8421376>>0))>>16>>0;  �    if(g<0){  �g=0;        }else if(g>255){  g=255;    }      if(h<0){  )h=0;        }else if(h>255){  Hh=255;    }  U    if(i<0){  ci=0;        }else if(i>255){  �i=255;    }  �return[(g<<24>>>24),(h<<24>>>24),(i<<24>>>24)];    };
RGBToYCbCrimage/color.RGBToYCbCr image/color.YCbCrToRGBW�W=$pkg.YCbCrToRGB=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i;      �d=((a>>0)<<16>>0)+32768>>0;  e=(b>>0)-128>>0;  .f=(c>>0)-128>>0;  Dg=((d+(91881*f>>0)>>0))>>16>>0;  bh=(((d-(22554*e>>0)>>0)-(46802*f>>0)>>0))>>16>>0;  �i=((d+(116130*e>>0)>>0))>>16>>0;  �    if(g<0){  �g=0;        }else if(g>255){  �g=255;    }  �    if(h<0){  �h=0;        }else if(h>255){   h=255;    }       if(i<0){   $i=0;        }else if(i>255){   Ai=255;    }   Mreturn[(g<<24>>>24),(h<<24>>>24),(i<<24>>>24)];    };
YCbCrToRGBimage/color.YCbCrToRGB (image/color.YCbCr).RGBA�X.ptr.prototype.RGBA=function(){var $ptr,a,b,c,d,e,f,g,h;  #a=$clone(this,X);      #Lb=W(a.Y,a.Cb,a.Cr);c=b[0];d=b[1];e=b[2];  #treturn[(f=(c>>>0),(((f>>>16<<16)*257>>>0)+(f<<16>>>16)*257)>>>0),(g=(d>>>0),(((g>>>16<<16)*257>>>0)+(g<<16>>>16)*257)>>>0),(h=(e>>>0),(((h>>>16<<16)*257>>>0)+(h<<16>>>16)*257)>>>0),65535];    };X.prototype.RGBA=function(){return this.$val.RGBA();};YCbCrimage/color.YCbCrimage/color.YCbCrToRGB image/color.yCbCrModelY�GY=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      $<  $?b=$assertType(a,X,true);c=b[1];    if(c){  $Zreturn a;    }  $ge=a.RGBA();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];h=d[2];  $i=V(((f>>>8>>>0)<<24>>>24),((g>>>8>>>0)<<24>>>24),((h>>>8>>>0)<<24>>>24));j=i[0];k=i[1];l=i[2];  $�return(m=new X.ptr(j,k,l),new m.constructor.elem(m));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};
yCbCrModelimage/color.RGBToYCbCrimage/color.YCbCrimage/color.yCbCrModel �C{"Base":9430,"Files":[{"Name":"/usr/local/go/src/image/color/color.go","Base":1,"Size":6661,"Lines":[0,55,109,159,160,211,225,226,303,335,358,433,509,585,599,627,629,630,697,754,773,791,793,794,837,854,867,884,897,914,927,944,957,965,967,968,1025,1083,1104,1123,1125,1126,1171,1230,1232,1233,1293,1313,1331,1333,1334,1378,1395,1408,1426,1437,1454,1467,1485,1496,1513,1526,1544,1555,1572,1585,1593,1595,1596,1658,1716,1738,1757,1759,1760,1806,1823,1841,1854,1871,1889,1902,1919,1937,1950,1967,1975,1977,1978,2020,2040,2049,2051,2052,2096,2113,2126,2145,2147,2148,2192,2214,2224,2226,2227,2273,2290,2309,2311,2312,2357,2376,2385,2387,2388,2431,2449,2462,2486,2488,2489,2536,2557,2567,2569,2570,2615,2633,2657,2659,2660,2739,2756,2779,2803,2805,2806,2879,2923,2972,3021,3071,3121,3151,3173,3175,3176,3200,3221,3223,3224,3269,3284,3286,3287,3327,3333,3376,3421,3465,3511,3555,3601,3644,3689,3691,3692,3724,3752,3763,3766,3790,3863,3865,3866,3900,3930,3941,3944,3968,4027,4029,4030,4063,4092,4103,4106,4130,4148,4214,4217,4230,4257,4260,4361,4383,4405,4427,4501,4503,4504,4539,4570,4581,4584,4608,4626,4684,4687,4700,4729,4732,4833,4855,4877,4899,4959,4961,4962,4995,5024,5035,5038,5062,5091,5093,5094,5129,5160,5171,5174,5198,5225,5227,5228,5260,5288,5299,5302,5326,5369,5397,5399,5400,5434,5464,5475,5478,5502,5545,5571,5573,5574,5609,5630,5631,5707,5749,5767,5780,5783,5805,5807,5808,5882,5898,5936,6002,6003,6030,6066,6089,6117,6178,6207,6247,6278,6317,6348,6387,6418,6439,6456,6469,6474,6499,6503,6506,6518,6520,6521,6541,6547,6572,6602,6628,6659],"Infos":null},{"Name":"/usr/local/go/src/image/color/ycbcr.go","Base":6663,"Size":2766,"Lines":[0,55,109,159,160,174,175,232,287,320,361,408,455,522,536,550,564,617,674,729,742,751,773,784,787,800,809,831,842,845,858,867,889,900,903,943,945,946,1003,1060,1093,1123,1172,1202,1269,1296,1318,1340,1370,1412,1443,1455,1463,1484,1494,1497,1509,1517,1538,1548,1551,1563,1571,1592,1602,1605,1642,1644,1645,1724,1763,1766,1840,1915,1993,2046,2049,2128,2203,2275,2295,2312,2314,2315,2372,2412,2484,2486,2487,2533,2578,2579,2612,2641,2652,2655,2679,2741,2764],"Infos":null}]}
 