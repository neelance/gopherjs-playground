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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ����go/tokentokenfmt#github.com/gopherjs/gopherjs/nosyncsortstrconv�
3version 4

 	token  ADD  	Token 
 IsKeyword<tok       IsLiteral<
       IsOperator<
       Precedence<op      String<
      % ADD_ASSIGN <%. AND <%" AND_ASSIGN <%8 AND_NOT <%, AND_NOT_ASSIGN <%B 	ARROW <%H ASSIGN <%T 	BREAK <%z CASE <%|| CHAN <%~ CHAR <% 	COLON <%t 	COMMA <%h COMMENT <% 	CONST <%� CONTINUE <%� DEC <%L DEFAULT <%� 	DEFER <%� DEFINE <%^ ELLIPSIS <%` ELSE <%� EOF <% EQL <%N FALLTHROUGH <%� 	FLOAT <% FOR <%� FUNC <%� File  set  FileSet  	mutex  RWMutexnosyncEgithub.com/gopherjs/gopherjs/nosync writeLocked   readLockCounter  LockBrw     	RLockBb     RUnlockBb     UnlockBb      base   	files >  last >  AddFile@s   filename  j  size  >   Base@r      N@r   Pos  IsValidDp      ~  >f    Iterate@r  >   �     Position@r  D~   �  Filename   Offset  Line  Column  ||Fpos       F�      �    PositionFor@r  D~   adjusted  F�    Read@r     & decode  &   	Write@r     & encode  &   file @r  D~  >    name    j   v   T  	Mutex locked   `Hm     hH�      	lines   	infos  lineInfo  �  �   �     AddLine>�  offset     AddLineInfo>�  �   t  line     x>�      �>�  D~     LineCount>�      MergeLine>�  �     Name>�       �>�  D~     z>�  �  D   �>�  D~  F�    �>�  D~   �  F�    SetLines>�  �      #SetLinesForContent>�  "content     Size>�      position >�  D~   �  F�    unpack >�  �   �   t  �  column   @ GEQ <%\ GO <%� GOTO <%� GTR <%R HighestPrec *% 	IDENT <% IF <%� ILLEGAL <%  IMAG <% IMPORT <%� INC <%J INT <%
 INTERFACE <%� LAND <%D LBRACE <%f LBRACK <%d LEQ <%Z LOR <%F LPAREN <%b LSS <%P	 Lookup  	ident  <  LowestPrec *%  MAP <%� MUL <% MUL_ASSIGN <%2 NEQ <%X NOT <%V	 NewFileSet  @  	NoPos D%  OR <%|S OR_ASSIGN <%: PACKAGE <%� PERIOD <%jDF QUO <% QUO_ASSIGN <%4 	RANGE <%� RBRACE <%p RBRACK <%n REM <%  REM_ASSIGN <%6 RETURN <%� RPAREN <%l SELECT <%� SEMICOLON <%r SHL <%( SHL_ASSIGN <%> SHR <%* SHR_ASSIGN <%@ STRING <% STRUCT <%� SUB <% SUB_ASSIGN <%0 SWITCH <%� TYPE <%�< UnaryPrec *% VAR <%� XOR <%& XOR_ASSIGN <%<�AAA=$packages["fmt"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} C3C=$packages["github.com/gopherjs/gopherjs/nosync"];a    $r=C.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["sort"];a    $r=B.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["strconv"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} E�3E=$pkg.Position=$newType(0,$kindStruct,"token.Position",true,"go/token",true,function(Filename_,Offset_,Line_,Column_){this.$val=this;if(arguments.length===0){this.Filename="";this.Offset=0;this.Line=0;this.Column=0;return;}this.Filename=Filename_;this.Offset=Offset_;this.Line=Line_;this.Column=Column_;});��E.methods=[{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)}];AB.methods=[{prop:"IsValid",name:"IsValid",pkg:"",typ:$funcType([],[$Bool],false)}];�@E.init("",[{prop:"Filename",name:"Filename",anonymous:false,exported:true,typ:$String,tag:""},{prop:"Offset",name:"Offset",anonymous:false,exported:true,typ:$Int,tag:""},{prop:"Line",name:"Line",anonymous:false,exported:true,typ:$Int,tag:""},{prop:"Column",name:"Column",anonymous:false,exported:true,typ:$Int,tag:""}]);Positiongo/token.ABgo/token.Position FFF=$pkg.Pos=$newType(4,$kindInt,"token.Pos",true,"go/token",true,null);SF.methods=[{prop:"IsValid",name:"IsValid",pkg:"",typ:$funcType([],[$Bool],false)}];Posgo/token.Pos G��G=$pkg.File=$newType(0,$kindStruct,"token.File",true,"go/token",true,function(set_,name_,base_,size_,mutex_,lines_,infos_){this.$val=this;if(arguments.length===0){this.set=Y.nil;this.name="";this.base=0;this.size=0;this.mutex=new C.Mutex.ptr(false);this.lines=V.nil;this.infos=Z.nil;return;}this.set=set_;this.name=name_;this.base=base_;this.size=size_;this.mutex=mutex_;this.lines=lines_;this.infos=infos_;});��W.methods=[{prop:"Name",name:"Name",pkg:"",typ:$funcType([],[$String],false)},{prop:"Base",name:"Base",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"LineCount",name:"LineCount",pkg:"",typ:$funcType([],[$Int],false)},{prop:"AddLine",name:"AddLine",pkg:"",typ:$funcType([$Int],[],false)},{prop:"MergeLine",name:"MergeLine",pkg:"",typ:$funcType([$Int],[],false)},{prop:"SetLines",name:"SetLines",pkg:"",typ:$funcType([V],[$Bool],false)},{prop:"SetLinesForContent",name:"SetLinesForContent",pkg:"",typ:$funcType([AC],[],false)},{prop:"AddLineInfo",name:"AddLineInfo",pkg:"",typ:$funcType([$Int,$String,$Int],[],false)},{prop:"Pos",name:"Pos",pkg:"",typ:$funcType([$Int],[F],false)},{prop:"Offset",name:"Offset",pkg:"",typ:$funcType([F],[$Int],false)},{prop:"Line",name:"Line",pkg:"",typ:$funcType([F],[$Int],false)},{prop:"unpack",name:"unpack",pkg:"go/token",typ:$funcType([$Int,$Bool],[$String,$Int,$Int],false)},{prop:"position",name:"position",pkg:"go/token",typ:$funcType([F,$Bool],[E],false)},{prop:"PositionFor",name:"PositionFor",pkg:"",typ:$funcType([F,$Bool],[E],false)},{prop:"Position",name:"Position",pkg:"",typ:$funcType([F],[E],false)}];�G.init("go/token",[{prop:"set",name:"set",anonymous:false,exported:false,typ:Y,tag:""},{prop:"name",name:"name",anonymous:false,exported:false,typ:$String,tag:""},{prop:"base",name:"base",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"size",name:"size",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"mutex",name:"mutex",anonymous:false,exported:false,typ:C.Mutex,tag:""},{prop:"lines",name:"lines",anonymous:false,exported:false,typ:V,tag:""},{prop:"infos",name:"infos",anonymous:false,exported:false,typ:Z,tag:""}]);File	)github.com/gopherjs/gopherjs/nosync.Mutexgo/token.ACgo/token.Filego/token.Posgo/token.Position
go/token.V
go/token.W
go/token.Y
go/token.Z H�
H=$pkg.lineInfo=$newType(0,$kindStruct,"token.lineInfo",true,"go/token",false,function(Offset_,Filename_,Line_){this.$val=this;if(arguments.length===0){this.Offset=0;this.Filename="";this.Line=0;return;}this.Offset=Offset_;this.Filename=Filename_;this.Line=Line_;});��H.init("",[{prop:"Offset",name:"Offset",anonymous:false,exported:true,typ:$Int,tag:""},{prop:"Filename",name:"Filename",anonymous:false,exported:true,typ:$String,tag:""},{prop:"Line",name:"Line",anonymous:false,exported:true,typ:$Int,tag:""}]);lineInfogo/token.lineInfo J�9J=$pkg.FileSet=$newType(0,$kindStruct,"token.FileSet",true,"go/token",true,function(mutex_,base_,files_,last_){this.$val=this;if(arguments.length===0){this.mutex=new C.RWMutex.ptr(false,0);this.base=0;this.files=X.nil;this.last=W.nil;return;}this.mutex=mutex_;this.base=base_;this.files=files_;this.last=last_;});��Y.methods=[{prop:"Base",name:"Base",pkg:"",typ:$funcType([],[$Int],false)},{prop:"AddFile",name:"AddFile",pkg:"",typ:$funcType([$String,$Int,$Int],[W],false)},{prop:"Iterate",name:"Iterate",pkg:"",typ:$funcType([AD],[],false)},{prop:"file",name:"file",pkg:"go/token",typ:$funcType([F],[W],false)},{prop:"File",name:"File",pkg:"",typ:$funcType([F],[W],false)},{prop:"PositionFor",name:"PositionFor",pkg:"",typ:$funcType([F,$Bool],[E],false)},{prop:"Position",name:"Position",pkg:"",typ:$funcType([F],[E],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([AE],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([AE],[$error],false)}];�<J.init("go/token",[{prop:"mutex",name:"mutex",anonymous:false,exported:false,typ:C.RWMutex,tag:""},{prop:"base",name:"base",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"files",name:"files",anonymous:false,exported:false,typ:X,tag:""},{prop:"last",name:"last",anonymous:false,exported:false,typ:W,tag:""}]);FileSet	+github.com/gopherjs/gopherjs/nosync.RWMutexgo/token.ADgo/token.AEgo/token.FileSetgo/token.Posgo/token.Position
go/token.W
go/token.X
go/token.Y N�RN=$pkg.serializedFile=$newType(0,$kindStruct,"token.serializedFile",true,"go/token",false,function(Name_,Base_,Size_,Lines_,Infos_){this.$val=this;if(arguments.length===0){this.Name="";this.Base=0;this.Size=0;this.Lines=V.nil;this.Infos=Z.nil;return;}this.Name=Name_;this.Base=Base_;this.Size=Size_;this.Lines=Lines_;this.Infos=Infos_;});�vN.init("",[{prop:"Name",name:"Name",anonymous:false,exported:true,typ:$String,tag:""},{prop:"Base",name:"Base",anonymous:false,exported:true,typ:$Int,tag:""},{prop:"Size",name:"Size",anonymous:false,exported:true,typ:$Int,tag:""},{prop:"Lines",name:"Lines",anonymous:false,exported:true,typ:V,tag:""},{prop:"Infos",name:"Infos",anonymous:false,exported:true,typ:Z,tag:""}]);serializedFile
go/token.V
go/token.Zgo/token.serializedFile O��O=$pkg.serializedFileSet=$newType(0,$kindStruct,"token.serializedFileSet",true,"go/token",false,function(Base_,Files_){this.$val=this;if(arguments.length===0){this.Base=0;this.Files=AA.nil;return;}this.Base=Base_;this.Files=Files_;});��O.init("",[{prop:"Base",name:"Base",anonymous:false,exported:true,typ:$Int,tag:""},{prop:"Files",name:"Files",anonymous:false,exported:true,typ:AA,tag:""}]);serializedFileSetgo/token.AAgo/token.serializedFileSet PJP=$pkg.Token=$newType(4,$kindInt,"token.Token",true,"go/token",true,null);��P.methods=[{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"Precedence",name:"Precedence",pkg:"",typ:$funcType([],[$Int],false)},{prop:"IsLiteral",name:"IsLiteral",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"IsOperator",name:"IsOperator",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"IsKeyword",name:"IsKeyword",pkg:"",typ:$funcType([],[$Bool],false)}];Tokengo/token.Token UU=$sliceType($emptyInterface);U VV=$sliceType($Int);V WW=$ptrType(G);Wgo/token.File XX=$sliceType(W);X
go/token.W YY=$ptrType(J);Ygo/token.FileSet ZZ=$sliceType(H);Zgo/token.lineInfo AAAA=$sliceType(N);AAgo/token.serializedFile ABAB=$ptrType(E);ABgo/token.Position ACAC=$sliceType($Uint8);AC AD AD=$funcType([W],[$Bool],false);AD
go/token.W AE/AE=$funcType([$emptyInterface],[$error],false);AE Qtokens RR=false;keywordsgo/token.keywords �     Q=$toNativeArray($kindString,["ILLEGAL","EOF","COMMENT","","IDENT","INT","FLOAT","IMAG","CHAR","STRING","","","+","-","*","/","%","&","|","^","<<",">>","&^","+=","-=","*=","/=","%=","&=","|=","^=","<<=",">>=","&^=","&&","||","<-","++","--","==","<",">","=","!","!=","<=",">=",":=","...","(","[","{",",",".",")","]","}",";",":","","","break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"]);tokensgo/token.tokens (*go/token.Position).IsValid��E.ptr.prototype.IsValid=function(){var a;a=this;  �return a.Line>0;    };E.prototype.IsValid=function(){return this.$val.IsValid();};Positiongo/token.Position (go/token.Position).String��E.ptr.prototype.String=function(){var a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  Pb=a.Filename;  cif(a.IsValid()){$s=1;continue;}$s=2;continue;    case 1:    if(!(b==="")){  �b=b+(":");    }  �c=A.Sprintf("%d:%d",new U([new $Int(a.Line),new $Int(a.Column)]));$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=b+(c);    case 2:    if(b===""){  �b="-";    }  �$s=-1;return b;    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.String};}$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.String=function(){return this.$val.String();};Positionfmt.Sprintfgo/token.Position
go/token.U (go/token.Pos).IsValid��F.prototype.IsValid=function(){var a;a=this.$val;  
{return!((a===0));    };$ptrType(F).prototype.IsValid=function(){return new F(this.$get()).IsValid();};Posgo/token.Pos (*go/token.File).Name}G.ptr.prototype.Name=function(){var a;a=this;  Ereturn a.name;    };G.prototype.Name=function(){return this.$val.Name();};Filego/token.File (*go/token.File).Base}G.ptr.prototype.Base=function(){var a;a=this;  �return a.base;    };G.prototype.Base=function(){return this.$val.Base();};Filego/token.File (*go/token.File).Size}G.ptr.prototype.Size=function(){var a;a=this;  &return a.size;    };G.prototype.Size=function(){return this.$val.Size();};Filego/token.File (*go/token.File).LineCount��G.ptr.prototype.LineCount=function(){var a,b;a=this;  �a.mutex.Lock();  �b=a.lines.$length;  �a.mutex.Unlock();  �return b;    };G.prototype.LineCount=function(){return this.$val.LineCount();};Filego/token.File (*go/token.File).AddLine�{G.ptr.prototype.AddLine=function(a){var a,b,c,d,e;b=this;  �b.mutex.Lock();  �c=b.lines.$length;    if(((c===0)||(d=b.lines,e=c-1>>0,((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]))<a)&&a<b.size){  b.lines=$append(b.lines,a);    }  =b.mutex.Unlock();    };G.prototype.AddLine=function(a){return this.$val.AddLine(a);};Filego/token.File (*go/token.File).MergeLine��G.ptr.prototype.MergeLine=function(a){var a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=this;    if(a<=0){  �$panic(new $String("illegal line number (line numbering starts at 1)"));    }  �b.mutex.Lock();  �$deferred.push([$methodVal(b.mutex,"Unlock"),[]]);    if(a>=b.lines.$length){  0$panic(new $String("illegal line number"));    }  �$copySlice($subslice(b.lines,a),$subslice(b.lines,(a+1>>0)));  �b.lines=$subslice(b.lines,0,(b.lines.$length-1>>0));    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};G.prototype.MergeLine=function(a){return this.$val.MergeLine(a);};Filego/token.File (*go/token.File).SetLines�G.ptr.prototype.SetLines=function(a){var a,b,c,d,e,f,g,h;b=this;  (c=b.size;  8d=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);    if(f>0&&g<=(h=f-1>>0,((h<0||h>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+h]))||c<=g){  �return false;    }    e++;}  �b.mutex.Lock();  �b.lines=a;  �b.mutex.Unlock();  �return true;    };G.prototype.SetLines=function(a){return this.$val.SetLines(a);};Filego/token.File #(*go/token.File).SetLinesForContent��G.ptr.prototype.SetLinesForContent=function(a){var a,b,c,d,e,f,g,h;b=this;  �c=V.nil;  �d=0;  �e=a;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);    if(d>=0){  �c=$append(c,d);    }  d=-1;    if(h===10){  <d=g+1>>0;    }    f++;}  kb.mutex.Lock();  {b.lines=c;  �b.mutex.Unlock();    };G.prototype.SetLinesForContent=function(a){return this.$val.SetLinesForContent(a);};Filego/token.File
go/token.V (*go/token.File).AddLineInfo��G.ptr.prototype.AddLineInfo=function(a,b,c){var a,b,c,d,e,f,g;d=this;  �d.mutex.Lock();  �e=d.infos.$length;    if((e===0)||(f=d.infos,g=e-1>>0,((g<0||g>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+g])).Offset<a&&a<d.size){  �d.infos=$append(d.infos,new H.ptr(a,b,c));    }  4d.mutex.Unlock();    };G.prototype.AddLineInfo=function(a,b,c){return this.$val.AddLineInfo(a,b,c);};Filego/token.Filego/token.lineInfo (*go/token.File).Pos��G.ptr.prototype.Pos=function(a){var a,b;b=this;    if(a>b.size){  �$panic(new $String("illegal file offset"));    }   return(((b.base+a>>0)>>0));    };G.prototype.Pos=function(a){return this.$val.Pos(a);};Filego/token.File (*go/token.File).Offset��G.ptr.prototype.Offset=function(a){var a,b;b=this;    if(((a>>0))<b.base||((a>>0))>(b.base+b.size>>0)){  &$panic(new $String("illegal Pos value"));    }  Ereturn((a>>0))-b.base>>0;    };G.prototype.Offset=function(a){return this.$val.Offset(a);};Filego/token.File (*go/token.File).Line��G.ptr.prototype.Line=function(a){var a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �c=b.Position(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c.Line;    }return;}if($f===undefined){$f={$blk:G.ptr.prototype.Line};}$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Line=function(a){return this.$val.Line(a);};Filego/token.File go/token.searchLineInfosI�[I=function(a,b){var a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=[a];b=[b];  Ac=B.Search(a[0].$length,(function(a,b){return function(c){var c;  oreturn((c<0||c>=a[0].$length)?($throwRuntimeError("index out of range"),undefined):a[0].$array[a[0].$offset+c]).Offset>b[0];    };})(a,b));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c-1>>0;    }return;}if($f===undefined){$f={$blk:I};}$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};searchLineInfosgo/token.searchLineInfossort.Search (*go/token.File).unpack�[G.ptr.prototype.unpack=function(a,b){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);c="";d=0;e=0;f=this;   �f.mutex.Lock();   �$deferred.push([$methodVal(f.mutex,"Unlock"),[]]);   �c=f.name;  !g=M(f.lines,a);    if(g>=0){  !>h=g+1>>0;i=(a-(j=f.lines,((g<0||g>=j.$length)?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+g]))>>0)+1>>0;d=h;e=i;    }  !jif(b&&f.infos.$length>0){$s=1;continue;}$s=2;continue;    case 1:  !�k=I(f.infos,a);$s=3;case 3:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=k;    if(l>=0){  !�n=(m=f.infos,((l<0||l>=m.$length)?($throwRuntimeError("index out of range"),undefined):m.$array[m.$offset+l]));  "c=n.Filename;  "#o=M(f.lines,n.Offset);    if(o>=0){  "Vd=d+(((n.Line-o>>0)-1>>0))>>0;    }    }    case 2:  "|$s=-1;return[c,d,e];    }return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return[c,d,e];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:G.ptr.prototype.unpack};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};G.prototype.unpack=function(a,b){return this.$val.unpack(a,b);};Fileunpack~go/token.Filego/token.searchIntsgo/token.searchLineInfos (*go/token.File).position��G.ptr.prototype.position=function(a,b){var a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=new E.ptr("",0,0,0);d=this;  "�e=((a>>0))-d.base>>0;  "�c.Offset=e;  "�g=d.unpack(e,b);$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;c.Filename=f[0];c.Line=f[1];c.Column=f[2];  #7$s=-1;return c;    }return;}if($f===undefined){$f={$blk:G.ptr.prototype.position};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.position=function(a,b){return this.$val.position(a,b);};File	position~go/token.Filego/token.Positiongo/token.unpack~ (*go/token.File).PositionFor�
G.ptr.prototype.PositionFor=function(a,b){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=new E.ptr("",0,0,0);d=this;  ${if(!((a===0))){$s=1;continue;}$s=2;continue;    case 1:    if(((a>>0))<d.base||((a>>0))>(d.base+d.size>>0)){  $�$panic(new $String("illegal Pos value"));    }  $�e=d.position(a,b);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}E.copy(c,e);    case 2:  %$s=-1;return c;    }return;}if($f===undefined){$f={$blk:G.ptr.prototype.PositionFor};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.PositionFor=function(a,b){return this.$val.PositionFor(a,b);};Filego/token.Filego/token.Positiongo/token.position~ (*go/token.File).Position�6G.ptr.prototype.Position=function(a){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=new E.ptr("",0,0,0);c=this;    d=c.PositionFor(a,true);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}E.copy(b,d);$s=-1;return b;    }return;}if($f===undefined){$f={$blk:G.ptr.prototype.Position};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Position=function(a){return this.$val.Position(a);};Filego/token.Filego/token.Position go/token.NewFileSetKfK=function(){  (return new J.ptr(new C.RWMutex.ptr(false,0),1,X.nil,W.nil);    };$pkg.NewFileSet=K;
NewFileSet+github.com/gopherjs/gopherjs/nosync.RWMutexgo/token.Filego/token.FileSetgo/token.NewFileSet
go/token.W
go/token.X (*go/token.FileSet).Base��J.ptr.prototype.Base=function(){var a,b;a=this;  (�a.mutex.RLock();  (�b=a.base;  (�a.mutex.RUnlock();  ) return b;    };J.prototype.Base=function(){return this.$val.Base();};FileSetgo/token.FileSet (*go/token.FileSet).AddFile�J.ptr.prototype.AddFile=function(a,b,c){var a,b,c,d,e,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);d=this;  ,td.mutex.Lock();  ,�$deferred.push([$methodVal(d.mutex,"Unlock"),[]]);    if(b<0){  ,�b=d.base;    }    if(b<d.base||c<0){  ,�$panic(new $String("illegal base or size"));    }  -!e=new G.ptr(d,a,b,c,new C.Mutex.ptr(false),new V([0]),Z.nil);  -nb=b+((c+1>>0))>>0;    if(b<0){  -�$panic(new $String("token.Pos offset overflow (> 2G of source code in file set)"));    }  . d.base=b;  ./d.files=$append(d.files,e);  .Md.last=e;  .Yreturn e;    }catch(err){$err=err;return W.nil;}finally{$callDeferred($deferred,$err);}};J.prototype.AddFile=function(a,b,c){return this.$val.AddFile(a,b,c);};FileSet)github.com/gopherjs/gopherjs/nosync.Mutexgo/token.Filego/token.FileSet
go/token.V
go/token.W
go/token.Y
go/token.Zgo/token.lineInfo (*go/token.FileSet).Iterate��J.ptr.prototype.Iterate=function(a){var a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  /c=0;case 1:  /d=W.nil;  /(b.mutex.RLock();    if(c<b.files.$length){  /Sd=(e=b.files,((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]));    }  /kb.mutex.RUnlock();  /if(d===W.nil){f=true;$s=5;continue s;}g=a(d);$s=6;case 6:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=!g;case 5:if(f){$s=3;continue;}$s=4;continue;    case 3:  /�$s=2;continue;    case 4:  /c=c+(1)>>0;    $s=1;continue;case 2:    $s=-1;return;}return;}if($f===undefined){$f={$blk:J.ptr.prototype.Iterate};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.Iterate=function(a){return this.$val.Iterate(a);};FileSetgo/token.FileSet
go/token.W go/token.searchFilesL�YL=function(a,b){var a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=[a];b=[b];  /�c=B.Search(a[0].$length,(function(a,b){return function(c){var c;  0return((c<0||c>=a[0].$length)?($throwRuntimeError("index out of range"),undefined):a[0].$array[a[0].$offset+c]).base>b[0];    };})(a,b));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c-1>>0;    }return;}if($f===undefined){$f={$blk:L};}$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};searchFilesgo/token.searchFilessort.Search (*go/token.FileSet).file�J.ptr.prototype.file=function(a){var a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  0Mb.mutex.RLock();  0�c=b.last;    if(!(c===W.nil)&&c.base<=((a>>0))&&((a>>0))<=(c.base+c.size>>0)){  0�b.mutex.RUnlock();  0�$s=-1;return c;    }  1d=L(b.files,((a>>0)));$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;    if(e>=0){  1Lg=(f=b.files,((e<0||e>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+e]));    if(((a>>0))<=(g.base+g.size>>0)){  1�b.mutex.RUnlock();  1�b.mutex.Lock();  1�b.last=g;  2b.mutex.Unlock();  2!$s=-1;return g;    }    }  22b.mutex.RUnlock();  2E$s=-1;return W.nil;    }return;}if($f===undefined){$f={$blk:J.ptr.prototype.file};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.file=function(a){return this.$val.file(a);};FileSetfile~go/token.FileSet
go/token.Wgo/token.searchFiles (*go/token.FileSet).File�RJ.ptr.prototype.File=function(a){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=W.nil;c=this;  3	if(!((a===0))){$s=1;continue;}$s=2;continue;    case 1:  3d=c.file(a);$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}b=d;    case 2:  3-$s=-1;return b;    }return;}if($f===undefined){$f={$blk:J.ptr.prototype.File};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.File=function(a){return this.$val.File(a);};FileSetgo/token.FileSet
go/token.Wgo/token.file~ (*go/token.FileSet).PositionFor�zJ.ptr.prototype.PositionFor=function(a,b){var a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=new E.ptr("",0,0,0);d=this;  4qif(!((a===0))){$s=1;continue;}$s=2;continue;    case 1:  4�e=d.file(a);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;  4�if(!(f===W.nil)){$s=4;continue;}$s=5;continue;    case 4:    g=f.position(a,b);$s=6;case 6:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}E.copy(c,g);$s=-1;return c;    case 5:    case 2:  4�$s=-1;return c;    }return;}if($f===undefined){$f={$blk:J.ptr.prototype.PositionFor};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.PositionFor=function(a,b){return this.$val.PositionFor(a,b);};FileSetgo/token.FileSetgo/token.Position
go/token.Wgo/token.file~go/token.position~ (*go/token.FileSet).Position�6J.ptr.prototype.Position=function(a){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=new E.ptr("",0,0,0);c=this;    d=c.PositionFor(a,true);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}E.copy(b,d);$s=-1;return b;    }return;}if($f===undefined){$f={$blk:J.ptr.prototype.Position};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.Position=function(a){return this.$val.Position(a);};FileSetgo/token.FileSetgo/token.Position go/token.searchIntsM��M=function(a,b){var a,b,c,d,e,f,g,h;  8c=0;d=a.$length;e=c;f=d;  8&while(true){if(!(e<f)){break;}  84h=e+(g=((f-e>>0))/2,(g===g&&g!==1/0&&g!==-1/0)?g>>0:$throwRuntimeError("integer divide by zero"))>>0;    if(((h<0||h>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+h])<=b){  8�e=h+1>>0;    }else{  8�f=h;    }    }  8�return e-1>>0;    };
searchIntsgo/token.searchInts (*go/token.FileSet).Read��J.ptr.prototype.Read=function(a){var a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=[b];c=this;  :�b[0]=new O.ptr(0,AA.nil);  ;
d=a(b[0]);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;    if(!($interfaceIsEqual(e,$ifaceNil))){  ;-$s=-1;return e;    }  ;=c.mutex.Lock();  ;Mc.base=b[0].Base;  ;_f=$makeSlice(X,b[0].Files.$length);  ;�g=0;while(true){if(!(g<b[0].Files.$length)){break;}  ;�i=(h=b[0].Files,((g<0||g>=h.$length)?($throwRuntimeError("index out of range"),undefined):h.$array[h.$offset+g]));  ;�((g<0||g>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+g]=new G.ptr(c,i.Name,i.Base,i.Size,new C.Mutex.ptr(false),i.Lines,i.Infos));  ;�g=g+(1)>>0;    }  <Dc.files=f;  <Uc.last=W.nil;  <cc.mutex.Unlock();  <v$s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:J.ptr.prototype.Read};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.Read=function(a){return this.$val.Read(a);};FileSet)github.com/gopherjs/gopherjs/nosync.Mutexgo/token.AAgo/token.Filego/token.FileSet
go/token.V
go/token.W
go/token.X
go/token.Y
go/token.Zgo/token.serializedFilego/token.serializedFileSet (*go/token.FileSet).Write��J.ptr.prototype.Write=function(a){var a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  <�c=new O.ptr(0,AA.nil);  =b.mutex.Lock();  =#c.Base=b.base;  =5d=$makeSlice(AA,b.files.$length);  =de=b.files;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);  =�h.mutex.Lock();  =�N.copy(((g<0||g>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+g]),new N.ptr(h.name,h.base,h.size,$appendSlice((V.nil),h.lines),$appendSlice((Z.nil),h.infos)));  >Ch.mutex.Unlock();    f++;}  >Xc.Files=d;  >jb.mutex.Unlock();  >}i=a(new c.constructor.elem(c));$s=1;case 1:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}$s=-1;return i;    }return;}if($f===undefined){$f={$blk:J.ptr.prototype.Write};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.Write=function(a){return this.$val.Write(a);};FileSetgo/token.AAgo/token.FileSet
go/token.V
go/token.Zgo/token.serializedFilego/token.serializedFileSet (go/token.Token).String�IP.prototype.String=function(){var a,b;a=this.$val;  L�b="";    if(0<=a&&a<86){  L�b=((a<0||a>=Q.length)?($throwRuntimeError("index out of range"),undefined):Q[a]);    }    if(b===""){  L�b="token("+D.Itoa(((a>>0)))+")";    }  M,return b;    };$ptrType(P).prototype.String=function(){return new P(this.$get()).String();};Tokengo/token.Tokengo/token.tokensstrconv.Itoa (go/token.Token).Precedence�P.prototype.Precedence=function(){var a,b;a=this.$val;    b=a;    if(b===(35)){  O�return 1;    }else if(b===(34)){  O�return 2;    }else if((b===(39))||(b===(44))||(b===(40))||(b===(45))||(b===(41))||(b===(46))){  O�return 3;    }else if((b===(12))||(b===(13))||(b===(18))||(b===(19))){  O�return 4;    }else if((b===(14))||(b===(15))||(b===(16))||(b===(20))||(b===(21))||(b===(17))||(b===(22))){  P-return 5;    }  P:return 0;    };$ptrType(P).prototype.Precedence=function(){return new P(this.$get()).Precedence();};Tokengo/token.Token go/token.initS�S=function(){var a,b;  P}R={};  P�a=61;while(true){if(!(a<86)){break;}  P�b=((a<0||a>=Q.length)?($throwRuntimeError("index out of range"),undefined):Q[a]);(R||$throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(b)]={k:b,v:a};  P�a=a+(1)>>0;    }    };	    S();go/token.initgo/token.keywordsgo/token.tokens go/token.LookupT��T=function(a){var a,b,c,d,e;  Qib=(c=R[$String.keyFor(a)],c!==undefined?[c.v,true]:[0,false]);d=b[0];e=b[1];    if(e){  Q�return d;    }  Q�return 4;    };$pkg.Lookup=T;Lookupgo/token.Lookupgo/token.keywords (go/token.Token).IsLiteral��P.prototype.IsLiteral=function(){var a;a=this.$val;  Rkreturn 3<a&&a<10;    };$ptrType(P).prototype.IsLiteral=function(){return new P(this.$get()).IsLiteral();};Tokengo/token.Token (go/token.Token).IsOperator��P.prototype.IsOperator=function(){var a;a=this.$val;  S4return 11<a&&a<59;    };$ptrType(P).prototype.IsOperator=function(){return new P(this.$get()).IsOperator();};Tokengo/token.Token (go/token.Token).IsKeyword��P.prototype.IsKeyword=function(){var a;a=this.$val;  S�return 60<a&&a<86;    };$ptrType(P).prototype.IsKeyword=function(){return new P(this.$get()).IsKeyword();};Tokengo/token.Token �{"Base":21534,"Files":[{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.F8uTPUBBIW/goroot/src/go/token/position.go","Base":1,"Size":14529,"Lines":[0,55,109,159,160,174,175,184,191,199,207,209,210,291,304,305,356,406,456,459,482,519,561,608,670,672,673,723,783,784,836,839,892,948,1003,1061,1064,1102,1121,1141,1156,1168,1172,1222,1225,1239,1249,1252,1262,1264,1265,1334,1405,1432,1435,1513,1591,1603,1606,1683,1762,1831,1900,1941,1944,2020,2092,2166,2242,2302,2305,2318,2319,2393,2462,2532,2577,2580,2600,2601,2651,2681,2700,2702,2703,2784,2792,2793,2850,2901,2904,2923,2938,2987,3055,3104,3105,3148,3166,3275,3293,3295,3296,3364,3395,3410,3412,3413,3483,3511,3526,3528,3529,3592,3620,3635,3637,3638,3690,3723,3739,3758,3776,3786,3788,3789,3837,3909,3982,3985,4022,4038,4116,4152,4155,4173,4175,4176,4252,4332,4410,4467,4470,4507,4523,4583,4586,4602,4626,4653,4684,4687,4758,4825,4893,4966,5012,5052,5088,5090,5091,5170,5243,5314,5363,5436,5508,5518,5588,5591,5635,5670,5686,5718,5773,5789,5793,5796,5797,5817,5833,5850,5868,5881,5883,5884,5956,6005,6057,6074,6085,6119,6136,6167,6171,6183,6200,6221,6225,6228,6229,6249,6265,6282,6300,6302,6303,6367,6430,6464,6487,6542,6556,6573,6587,6589,6590,6659,6729,6796,6848,6851,6917,6983,6986,7054,7070,7153,7215,7218,7236,7238,7239,7295,7330,7358,7361,7398,7420,7451,7454,7483,7485,7486,7546,7591,7629,7632,7667,7715,7744,7747,7771,7773,7774,7837,7885,7888,7921,7948,7950,7951,7999,8076,8078,8079,8156,8232,8311,8314,8401,8417,8441,8460,8507,8549,8552,8587,8630,8683,8705,8732,8785,8814,8819,8823,8826,8834,8836,8837,8900,8927,8948,9013,9021,9023,9024,9097,9170,9228,9268,9271,9337,9354,9403,9433,9437,9469,9472,9480,9482,9483,9553,9627,9630,9678,9709,9711,9712,9793,9804,9805,9852,9914,9947,9950,9972,10017,10070,10137,10189,10191,10192,10230,10259,10277,10302,10305,10307,10308,10373,10411,10414,10445,10462,10475,10494,10504,10505,10507,10508,10585,10661,10737,10818,10880,10883,10958,11033,11095,11098,11122,11125,11204,11278,11308,11311,11378,11394,11418,11433,11449,11452,11484,11516,11519,11551,11628,11684,11699,11770,11773,11806,11821,11851,11863,11873,11875,11876,11954,11980,11983,12031,12052,12069,12087,12111,12132,12136,12156,12187,12196,12200,12203,12205,12206,12247,12322,12324,12325,12363,12380,12415,12490,12510,12521,12524,12569,12617,12635,12686,12717,12738,12756,12809,12829,12841,12845,12848,12867,12879,12881,12882,12937,12996,13018,13021,13063,13080,13096,13099,13107,13109,13110,13180,13253,13311,13351,13354,13423,13440,13472,13506,13510,13513,13521,13523,13524,13591,13665,13668,13719,13750,13752,13753,13834,13854,13855,13893,13950,13954,14029,14033,14103,14169,14236,14295,14353,14372,14385,14439,14456,14473,14486,14497,14506,14510,14513,14527],"Infos":null},{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.F8uTPUBBIW/goroot/src/go/token/serialize.go","Base":14531,"Size":1486,"Lines":[0,55,109,159,160,174,175,204,276,290,301,312,325,343,345,346,378,389,413,415,416,490,553,579,616,629,632,633,649,667,706,744,764,784,797,815,833,851,870,889,893,896,913,927,945,946,958,960,961,1012,1076,1102,1103,1119,1137,1184,1213,1230,1259,1277,1295,1313,1355,1402,1406,1425,1428,1446,1464,1465,1484],"Infos":null},{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.F8uTPUBBIW/goroot/src/go/token/token.go","Base":16018,"Size":5515,"Lines":[0,55,109,159,160,237,316,319,333,334,351,352,422,437,438,461,469,488,510,515,524,525,538,578,627,643,660,678,697,712,729,742,743,757,786,796,806,816,826,836,837,851,865,879,894,909,924,925,943,961,979,997,1015,1016,1038,1060,1082,1105,1128,1151,1152,1165,1178,1191,1204,1217,1218,1232,1245,1258,1271,1284,1285,1301,1317,1333,1349,1366,1367,1380,1393,1406,1419,1432,1433,1449,1465,1481,1497,1513,1527,1528,1541,1554,1561,1567,1573,1580,1590,1591,1600,1607,1613,1626,1631,1632,1638,1642,1648,1652,1660,1661,1672,1677,1686,1693,1701,1702,1710,1718,1726,1732,1737,1750,1752,1753,1779,1800,1801,1818,1839,1840,1858,1874,1892,1909,1926,1945,1946,1957,1968,1979,1990,2001,2002,2017,2032,2047,2063,2079,2095,2096,2115,2134,2153,2172,2191,2192,2215,2238,2261,2285,2309,2333,2334,2348,2362,2376,2390,2404,2405,2420,2434,2448,2462,2476,2477,2494,2511,2528,2545,2563,2564,2578,2592,2606,2620,2634,2635,2652,2669,2686,2703,2720,2721,2741,2760,2779,2799,2822,2823,2848,2871,2893,2922,2943,2944,2961,2976,2993,3008,3027,3028,3053,3072,3095,3116,3138,3139,3158,3177,3196,3213,3229,3231,3232,3293,3361,3429,3495,3563,3566,3601,3610,3653,3671,3674,3688,3734,3737,3747,3749,3750,3813,3876,3941,4002,4056,4059,4067,4101,4118,4135,4137,4138,4198,4257,4281,4284,4319,4332,4343,4354,4366,4377,4413,4424,4449,4460,4505,4516,4519,4538,4540,4541,4571,4572,4586,4621,4671,4697,4700,4702,4703,4782,4785,4819,4872,4885,4888,4902,4904,4905,4919,4920,4986,5042,5045,5129,5130,5199,5242,5245,5332,5333,5397,5428,5431],"Infos":null}]}
 