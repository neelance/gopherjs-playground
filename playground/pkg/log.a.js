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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �m���loglogfmt#github.com/gopherjs/gopherjs/nosyncioosruntimetime�bversion 4

 log 	 	Fatal   v   	 Fatalf  format       	 Fatalln      	 	Flags    LUTC *%@ 	Ldate *% Llongfile *% Lmicroseconds *% Logger 
 mu  	MutexnosyncEgithub.com/gopherjs/gopherjs/nosync locked   Lock>m     Unlock>&      prefix    flag   out  Writerio2  	Write"p n &err   buf "   <l         <>   
         <>         <>      Output<>  calldepth   s  &   	Panic<>         Panicf<>   
         Panicln<>         Prefix<>       	Print<>         Printf<>   
         Println<>         SetFlags<>  ,     SetOutput<>  @w     SetPrefix<>   *     formatHeader <>  "<   Timetime` wall  ext
  loc Location name   zone l j   offset  	isDST     tx zoneTrans when
  	index  	isstd   	isutc     cacheStart
  cacheEnd
  cacheZoneF  StringD>      firstZoneUsedD>      getD>  D   lookupD> 
sec 
 j n  p 
	start 
end   lookupFirstZoneD>     lookupNameD>  j 
unix n  ok   d AddBt  Duration
 	HoursJd     MinutesJ�     NanosecondsJ�  
   	RoundJ� J& J   SecondsJ�     �J�      TruncateJ� J& J  � B   AddDateB� 	years months days B   	AfterB� Bu     AppendFormatB� "b  layout "   BeforeB� B�     	ClockB�  hour min �   DateB�  year  	Month �L&     	month day   DayB�     	EqualB� B�     FormatB�  �     GobDecodeB� "data &   GobEncodeB�  " &   HourB�     ISOWeekB�  � week   InB� Df B   IsZeroB�      	LocalB�  B   hB�  D   MarshalBinaryB�  " &   MarshalJSONB�  " &   MarshalTextB�  " &   MinuteB�     �B�  L   NanosecondB�     �B� J� B   SecondB�     �B�      SubB� B� J   �B� J� B   UTCB�  B   UnixB�  
   UnixNanoB�  
   UnmarshalBinaryB� "� &   UnmarshalJSONB� "� &   UnmarshalTextB� "� &   WeekdayB�   � �N�        YearB�     YearDayB�     ZoneB�   j n   absB�     addSecB� 
�    dateB�  full � L� � yday   locabsB�   j n �   monoB�  
   nsecB�     �B�  
   setLocB� Df    setMonoB� 
&    stripMonoB�     unixSecB�  
  �   file  line     Lshortfile *%  LstdFlags *% 	Ltime *%	 New @.   *  ,  < 	 @ B   D  & 	 F      	 H  
       	 J      	 L    	 N      	 P  
       	 R      	 T ,   	 V @X   	 Z  *   0/AA=$packages["fmt"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} E3E=$packages["github.com/gopherjs/gopherjs/nosync"];a    $r=E.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["io"];a    $r=B.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["os"];a    $r=C.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["runtime"];a    $r=D.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["time"];a    $r=F.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} G�CG=$pkg.Logger=$newType(0,$kindStruct,"log.Logger",true,"log",true,function(mu_,prefix_,flag_,out_,buf_){this.$val=this;if(arguments.length===0){this.mu=new E.Mutex.ptr(false);this.prefix="";this.flag=0;this.out=$ifaceNil;this.buf=Z.nil;return;}this.mu=mu_;this.prefix=prefix_;this.flag=flag_;this.out=out_;this.buf=buf_;});��AD.methods=[{prop:"SetOutput",name:"SetOutput",pkg:"",typ:$funcType([B.Writer],[],false)},{prop:"formatHeader",name:"formatHeader",pkg:"log",typ:$funcType([AB,F.Time,$String,$Int],[],false)},{prop:"Output",name:"Output",pkg:"",typ:$funcType([$Int,$String],[$error],false)},{prop:"Printf",name:"Printf",pkg:"",typ:$funcType([$String,AC],[],true)},{prop:"Print",name:"Print",pkg:"",typ:$funcType([AC],[],true)},{prop:"Println",name:"Println",pkg:"",typ:$funcType([AC],[],true)},{prop:"Fatal",name:"Fatal",pkg:"",typ:$funcType([AC],[],true)},{prop:"Fatalf",name:"Fatalf",pkg:"",typ:$funcType([$String,AC],[],true)},{prop:"Fatalln",name:"Fatalln",pkg:"",typ:$funcType([AC],[],true)},{prop:"Panic",name:"Panic",pkg:"",typ:$funcType([AC],[],true)},{prop:"Panicf",name:"Panicf",pkg:"",typ:$funcType([$String,AC],[],true)},{prop:"Panicln",name:"Panicln",pkg:"",typ:$funcType([AC],[],true)},{prop:"Flags",name:"Flags",pkg:"",typ:$funcType([],[$Int],false)},{prop:"SetFlags",name:"SetFlags",pkg:"",typ:$funcType([$Int],[],false)},{prop:"Prefix",name:"Prefix",pkg:"",typ:$funcType([],[$String],false)},{prop:"SetPrefix",name:"SetPrefix",pkg:"",typ:$funcType([$String],[],false)}];��G.init("log",[{prop:"mu",name:"mu",anonymous:false,exported:false,typ:E.Mutex,tag:""},{prop:"prefix",name:"prefix",anonymous:false,exported:false,typ:$String,tag:""},{prop:"flag",name:"flag",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"out",name:"out",anonymous:false,exported:false,typ:B.Writer,tag:""},{prop:"buf",name:"buf",anonymous:false,exported:false,typ:Z,tag:""}]);Logger)github.com/gopherjs/gopherjs/nosync.Mutex	io.Writerlog.ABlog.AClog.AD
log.Loggerlog.Z	time.Time ZZ=$sliceType($Uint8);Z AAAA=$arrayType($Uint8,20);AA ABAB=$ptrType(Z);ABlog.Z ACAC=$sliceType($emptyInterface);AC ADAD=$ptrType(G);AD
log.Logger Istd     I=H(C.Stderr,"",3);log.Newlog.std	os.Stderr log.NewHhH=function(a,b,c){var a,b,c;  �return new G.ptr(new E.Mutex.ptr(false),b,c,a,Z.nil);    };$pkg.New=H;New)github.com/gopherjs/gopherjs/nosync.Mutex
log.Loggerlog.Newlog.Z (*log.Logger).SetOutput��G.ptr.prototype.SetOutput=function(a){var a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=this;  *b.mu.Lock();  7$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  Lb.out=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};G.prototype.SetOutput=function(a){return this.$val.SetOutput(a);};Logger
log.Logger log.itoaJ�J=function(a,b,c){var a,b,c,d,e,f,g;  3d=AA.zero();  ?e=19;  Qwhile(true){if(!(b>=10||c>1)){break;}  lc=c-(1)>>0;  tg=(f=b/10,(f===f&&f!==1/0&&f!==-1/0)?f>>0:$throwRuntimeError("integer divide by zero"));  �((e<0||e>=d.length)?($throwRuntimeError("index out of range"),undefined):d[e]=((((48+b>>0)-($imul(g,10))>>0)<<24>>>24)));  �e=e-(1)>>0;  �b=g;    }  �((e<0||e>=d.length)?($throwRuntimeError("index out of range"),undefined):d[e]=(((48+b>>0)<<24>>>24)));  �a.$set($appendSlice(a.$get(),$subslice(new Z(d),e)));    };itoalog.AAlog.Zlog.itoa (*log.Logger).formatHeader��G.ptr.prototype.formatHeader=function(a,b,c,d){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=this;  ,a.$set($appendSlice(a.$get(),e.prefix));  Nif(!(((e.flag&7)===0))){$s=1;continue;}$s=2;continue;    case 1:    if(!(((e.flag&32)===0))){  �F.Time.copy(b,$clone(b,F.Time).UTC());    }  �if(!(((e.flag&1)===0))){$s=3;continue;}$s=4;continue;    case 3:  �g=$clone(b,F.Time).Date();$s=5;case 5:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;h=f[0];i=f[1];j=f[2];  �J(a,h,4);  �a.$set($append(a.$get(),47));  J(a,((i>>0)),2);  0a.$set($append(a.$get(),47));  LJ(a,j,2);  aa.$set($append(a.$get(),32));    case 4:  �if(!(((e.flag&6)===0))){$s=6;continue;}$s=7;continue;    case 6:  �l=$clone(b,F.Time).Clock();$s=8;case 8:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;m=k[0];n=k[1];o=k[2];  �J(a,m,2);  �a.$set($append(a.$get(),58));  �J(a,n,2);  a.$set($append(a.$get(),58));  ,J(a,o,2);    if(!(((e.flag&4)===0))){  da.$set($append(a.$get(),46));  �J(a,(p=$clone(b,F.Time).Nanosecond()/1000,(p===p&&p!==1/0&&p!==-1/0)?p>>0:$throwRuntimeError("integer divide by zero")),6);    }  �a.$set($append(a.$get(),32));    case 7:    case 2:    if(!(((e.flag&24)===0))){    if(!(((e.flag&16)===0))){  q=c;  )r=c.length-1>>0;while(true){if(!(r>0)){break;}    if(c.charCodeAt(r)===47){  gq=$substring(c,(r+1>>0));  break;    }  Dr=r-(1)>>0;    }  �c=q;    }  �a.$set($appendSlice(a.$get(),c));  �a.$set($append(a.$get(),58));  �J(a,d,-1);  �a.$set($appendSlice(a.$get(),": "));    }    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.formatHeader};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.formatHeader=function(a,b,c,d){return this.$val.formatHeader(a,b,c,d);};LoggerformatHeader~
log.Loggerlog.itoa	time.Time (*log.Logger).Output�VG.ptr.prototype.Output=function(a,b){var a,b,c,d,e,f,g,h,i,j,k,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);c=this;  �d=$clone(F.Now(),F.Time);  �e="";  �f=0;  c.mu.Lock();  $deferred.push([$methodVal(c.mu,"Unlock"),[]]);    if(!(((c.flag&24)===0))){  �c.mu.Unlock();  �g=false;  �h=D.Caller(a);e=h[1];f=h[2];g=h[3];    if(!g){  �e="???";  �f=0;    }  c.mu.Lock();    }  c.buf=$subslice(c.buf,0,0);  *$r=c.formatHeader((c.$ptr_buf||(c.$ptr_buf=new AB(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c))),$clone(d,F.Time),e,f);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  Sc.buf=$appendSlice(c.buf,b);    if((b.length===0)||!((b.charCodeAt((b.length-1>>0))===10))){  �c.buf=$append(c.buf,10);    }  �j=c.out.Write(c.buf);$s=2;case 2:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;k=i[1];  �$s=-1;return k;    }return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:G.ptr.prototype.Output};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};G.prototype.Output=function(a,b){return this.$val.Output(a,b);};Loggerlog.AB
log.Loggerlog.Zlog.formatHeader~runtime.Callertime.Now	time.Time (*log.Logger).Printf��G.ptr.prototype.Printf=function(a,b){var a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  �d=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;f=c.Output(2,e);$s=2;case 2:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Printf};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Printf=function(a,b){return this.$val.Printf(a,b);};Loggerfmt.Sprintf
log.Logger (*log.Logger).Print�mG.ptr.prototype.Print=function(a){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  Cc=A.Sprint(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Print};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Print=function(a){return this.$val.Print(a);};Logger
fmt.Sprint
log.Logger (*log.Logger).Println�wG.ptr.prototype.Println=function(a){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �c=A.Sprintln(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Println};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Println=function(a){return this.$val.Println(a);};Loggerfmt.Sprintln
log.Logger (*log.Logger).Fatal�|G.ptr.prototype.Fatal=function(a){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �c=A.Sprint(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  �C.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Fatal};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Fatal=function(a){return this.$val.Fatal(a);};Logger
fmt.Sprint
log.Loggeros.Exit (*log.Logger).Fatalf��G.ptr.prototype.Fatalf=function(a,b){var a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  @d=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;f=c.Output(2,e);$s=2;case 2:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;  hC.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Fatalf};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Fatalf=function(a,b){return this.$val.Fatalf(a,b);};Loggerfmt.Sprintf
log.Loggeros.Exit (*log.Logger).Fatalln��G.ptr.prototype.Fatalln=function(a){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �c=A.Sprintln(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  C.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Fatalln};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Fatalln=function(a){return this.$val.Fatalln(a);};Loggerfmt.Sprintln
log.Loggeros.Exit (*log.Logger).Panic��G.ptr.prototype.Panic=function(a){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �c=A.Sprint(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  �e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  �$panic(new $String(d));    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Panic};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Panic=function(a){return this.$val.Panic(a);};Logger
fmt.Sprint
log.Logger (*log.Logger).Panicf��G.ptr.prototype.Panicf=function(a,b){var a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  @d=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;  `f=c.Output(2,e);$s=2;case 2:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;  p$panic(new $String(e));    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Panicf};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Panicf=function(a,b){return this.$val.Panicf(a,b);};Loggerfmt.Sprintf
log.Logger (*log.Logger).Panicln��G.ptr.prototype.Panicln=function(a){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �c=A.Sprintln(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  
e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  $panic(new $String(d));    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Panicln};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Panicln=function(a){return this.$val.Panicln(a);};Loggerfmt.Sprintln
log.Logger (*log.Logger).Flags��G.ptr.prototype.Flags=function(){var a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);a=this;  xa.mu.Lock();  �$deferred.push([$methodVal(a.mu,"Unlock"),[]]);  �return a.flag;    }catch(err){$err=err;return 0;}finally{$callDeferred($deferred,$err);}};G.prototype.Flags=function(){return this.$val.Flags();};Logger
log.Logger (*log.Logger).SetFlags��G.ptr.prototype.SetFlags=function(a){var a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=this;  b.mu.Lock();  $deferred.push([$methodVal(b.mu,"Unlock"),[]]);  &b.flag=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};G.prototype.SetFlags=function(a){return this.$val.SetFlags(a);};Logger
log.Logger (*log.Logger).Prefix��G.ptr.prototype.Prefix=function(){var a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);a=this;  �a.mu.Lock();  �$deferred.push([$methodVal(a.mu,"Unlock"),[]]);  �return a.prefix;    }catch(err){$err=err;return"";}finally{$callDeferred($deferred,$err);}};G.prototype.Prefix=function(){return this.$val.Prefix();};Logger
log.Logger (*log.Logger).SetPrefix��G.ptr.prototype.SetPrefix=function(a){var a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=this;  %b.mu.Lock();  2$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  Gb.prefix=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};G.prototype.SetPrefix=function(a){return this.$val.SetPrefix(a);};Logger
log.Logger log.SetOutputK�=K=function(a){var a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  �I.mu.Lock();  �$deferred.push([$methodVal(I.mu,"Unlock"),[]]);  �I.out=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};$pkg.SetOutput=K;	SetOutputlog.SetOutputlog.std 	log.FlagsL7L=function(){   Areturn I.Flags();    };$pkg.Flags=L;Flags	log.Flagslog.std log.SetFlagsM>M=function(a){var a;   �I.SetFlags(a);    };$pkg.SetFlags=M;SetFlagslog.SetFlagslog.std 
log.PrefixN9N=function(){  !return I.Prefix();    };$pkg.Prefix=N;Prefix
log.Prefixlog.std log.SetPrefixO@O=function(a){var a;  !�I.SetPrefix(a);    };$pkg.SetPrefix=O;	SetPrefixlog.SetPrefixlog.std 	log.PrintP�P=function(a){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  "db=A.Sprint(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;    $s=-1;return;}return;}if($f===undefined){$f={$blk:P};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Print=P;Print
fmt.Sprint	log.Printlog.std 
log.PrintfQ�Q=function(a,b){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  #%c=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=I.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;    $s=-1;return;}return;}if($f===undefined){$f={$blk:Q};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Printf=Q;Printffmt.Sprintf
log.Printflog.std log.PrintlnR�R=function(a){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  #�b=A.Sprintln(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;    $s=-1;return;}return;}if($f===undefined){$f={$blk:R};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Println=R;Printlnfmt.Sprintlnlog.Printlnlog.std 	log.FatalS�S=function(a){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  $lb=A.Sprint(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  $�C.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:S};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Fatal=S;Fatal
fmt.Sprint	log.Fatallog.stdos.Exit 
log.FatalfT�&T=function(a,b){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  %c=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=I.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  %;C.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:T};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Fatalf=T;Fatalffmt.Sprintf
log.Fatalflog.stdos.Exit log.FatallnU�U=function(a){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  %�b=A.Sprintln(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  %�C.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:U};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Fatalln=U;Fatallnfmt.Sprintlnlog.Fatallnlog.stdos.Exit 	log.PanicV�"V=function(a){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  &Eb=A.Sprint(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  &\d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  &n$panic(new $String(c));    $s=-1;return;}return;}if($f===undefined){$f={$blk:V};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Panic=V;Panic
fmt.Sprint	log.Paniclog.std 
log.PanicfW�8W=function(a,b){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  &�c=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  'e=I.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  '$panic(new $String(d));    $s=-1;return;}return;}if($f===undefined){$f={$blk:W};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Panicf=W;Panicffmt.Sprintf
log.Panicflog.std log.PaniclnX�&X=function(a){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  '�b=A.Sprintln(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  '�d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  '�$panic(new $String(c));    $s=-1;return;}return;}if($f===undefined){$f={$blk:X};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Panicln=X;Paniclnfmt.Sprintlnlog.Paniclnlog.std 
log.OutputY��Y=function(a,b){var a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  )�c=I.Output(a+1>>0,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;    }return;}if($f===undefined){$f={$blk:Y};}$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Output=Y;Output
log.Outputlog.std ��{"Base":10724,"Files":[{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.F8uTPUBBIW/goroot/src/log/log.go","Base":1,"Size":10722,"Lines":[0,55,109,159,160,239,314,390,463,532,559,631,694,764,829,841,842,851,858,864,870,881,889,897,899,900,986,1040,1108,1176,1247,1264,1324,1355,1421,1475,1483,1561,1637,1728,1809,1913,2013,2086,2088,2089,2161,2234,2305,2378,2399,2474,2538,2571,2616,2669,2671,2672,2727,2777,2844,2897,2956,3010,3012,3013,3070,3112,3125,3146,3157,3159,3160,3200,3201,3293,3334,3373,3389,3407,3433,3441,3455,3486,3493,3501,3504,3515,3538,3570,3572,3573,3634,3671,3734,3801,3882,3916,3962,3986,4001,4005,4030,4062,4084,4112,4140,4168,4189,4217,4221,4262,4293,4315,4343,4364,4392,4413,4447,4476,4513,4518,4546,4550,4553,4594,4624,4641,4681,4705,4729,4740,4746,4751,4767,4771,4802,4829,4851,4882,4885,4887,4888,4959,5027,5094,5159,5229,5252,5309,5347,5364,5378,5391,5412,5453,5515,5531,5545,5593,5604,5620,5632,5636,5650,5653,5672,5713,5742,5783,5813,5816,5846,5858,5860,5861,5910,5964,6023,6063,6065,6066,6114,6167,6242,6243,6293,6348,6427,6428,6498,6541,6572,6584,6586,6587,6659,6718,6758,6770,6772,6773,6847,6892,6925,6937,6939,6940,7007,7050,7073,7089,7099,7101,7102,7171,7230,7262,7278,7288,7290,7291,7362,7407,7432,7448,7458,7460,7461,7511,7542,7555,7576,7591,7593,7594,7644,7682,7695,7716,7731,7733,7734,7786,7821,7834,7855,7872,7874,7875,7927,7971,7984,8005,8024,8026,8027,8093,8123,8138,8161,8174,8176,8177,8236,8255,8275,8277,8278,8337,8363,8383,8385,8386,8447,8470,8491,8493,8494,8555,8587,8610,8612,8613,8662,8663,8718,8771,8802,8835,8837,8838,8894,8948,8995,9037,9039,9040,9097,9152,9185,9220,9222,9223,9291,9322,9355,9367,9369,9370,9440,9487,9529,9541,9543,9544,9616,9649,9684,9696,9698,9699,9764,9795,9818,9836,9846,9848,9849,9916,9963,9995,10013,10023,10025,10026,10095,10128,10153,10171,10181,10183,10184,10255,10323,10390,10452,10515,10589,10618,10663,10720],"Infos":null}]}
 