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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �v���contextcontexterrorsfmtreflectsynctime�a
$$ exports $$
pv0contextcontext	Background   Context  Deadline  deadlineTimetimetimesec
 nsec locLocationname  zonezonename  offset 
isDST    txzoneTranswhen
 
index 
isstd  
isutc    cacheStart
 cacheEnd
 cacheZoneL getlF  F StringlF    lookuplFsec

name offset
isDST 
start
end
 lookupFirstZonelF   firstZoneUsedlF    lookupNamelFname unix
offset
isDST ok   TStringt@    Formatt@layout    AppendFormatt@b2layout  2 
Aftert@u@   Beforet@u@   
Equalt@u@   IsZerot@    abst@   locabst@ name offsetabs Datet@ year
month
MonthStringm�    day Yeart@   
Montht@  � Dayt@   Weekdayt@  WeekdayStringd�     ISOWeekt@ yearweek 
Clockt@ hourminsec Hourt@   Minutet@   Secondt@   Nanosecondt@   YearDayt@   Addt@dDuration

Stringd�    Nanosecondsd�  
 Secondsd�   Minutesd�   
Hoursd�    @ Subt@u@ � AddDatet@
yearsmonthsdays @ datet@full year
month�dayyday UTCt@  @ 
Localt@  @ Int@locF @ Locationt@  F Zonet@ name offset Unixt@  
 UnixNanot@  
 MarshalBinaryt@  2 6 UnmarshalBinaryt@data2 6 GobEncodet@  2 6 GobDecodet@data2 6 MarshalJSONt@  2 6 UnmarshalJSONt@data2 6 MarshalTextt@  2 6 UnmarshalTextt@data2 6 Truncatet@d� @ 
Roundt@d� @ ok  Done     Err   6 
Value key        CancelFunc      Canceled6: DeadlineExceeded6	TODO   : 	WithCancel parent:ctx:cancel� 	WithDeadline parent:deadline@ : � 	WithTimeout parent:timeout� : � 	WithValue parent:key  val� : :AA=$packages["errors"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["fmt"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["reflect"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["sync"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["time"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FUF=$pkg.Context=$newType(8,$kindInterface,"context.Context",true,"context",true,null);�4F.init([{prop:"Deadline",name:"Deadline",pkg:"",typ:$funcType([],[E.Time,$Bool],false)},{prop:"Done",name:"Done",pkg:"",typ:$funcType([],[AH],false)},{prop:"Err",name:"Err",pkg:"",typ:$funcType([],[$error],false)},{prop:"Value",name:"Value",pkg:"",typ:$funcType([$emptyInterface],[$emptyInterface],false)}]);Context
context.AB
context.AHcontext.Context	time.Time G��G=$pkg.deadlineExceededError=$newType(0,$kindStruct,"context.deadlineExceededError",true,"context",false,function(){this.$val=this;if(arguments.length===0){return;}});��G.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)},{prop:"Timeout",name:"Timeout",pkg:"",typ:$funcType([],[$Bool],false)}];G.init("",[]);deadlineExceededErrorcontext.deadlineExceededError HRH=$pkg.emptyCtx=$newType(4,$kindInt,"context.emptyCtx",true,"context",false,null);�}Z.methods=[{prop:"Deadline",name:"Deadline",pkg:"",typ:$funcType([],[E.Time,$Bool],false)},{prop:"Done",name:"Done",pkg:"",typ:$funcType([],[AH],false)},{prop:"Err",name:"Err",pkg:"",typ:$funcType([],[$error],false)},{prop:"Value",name:"Value",pkg:"",typ:$funcType([$emptyInterface],[$emptyInterface],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)}];emptyCtx
context.AH	context.Zcontext.emptyCtx	time.Time MVM=$pkg.CancelFunc=$newType(4,$kindFunc,"context.CancelFunc",true,"context",true,null);M.init([],[],false);
CancelFunccontext.CancelFunc SXS=$pkg.canceler=$newType(8,$kindInterface,"context.canceler",true,"context",false,null);��S.init([{prop:"Done",name:"Done",pkg:"",typ:$funcType([],[AH],false)},{prop:"cancel",name:"cancel",pkg:"context",typ:$funcType([$Bool,$error],[],false)}]);canceler
context.AHcontext.canceler T�vT=$pkg.cancelCtx=$newType(0,$kindStruct,"context.cancelCtx",true,"context",false,function(Context_,done_,mu_,children_,err_){this.$val=this;if(arguments.length===0){this.Context=$ifaceNil;this.done=$chanNil;this.mu=new D.Mutex.ptr(0,0);this.children=false;this.err=$ifaceNil;return;}this.Context=Context_;this.done=done_;this.mu=mu_;this.children=children_;this.err=err_;});�%AC.methods=[{prop:"Done",name:"Done",pkg:"",typ:$funcType([],[AH],false)},{prop:"Err",name:"Err",pkg:"",typ:$funcType([],[$error],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"cancel",name:"cancel",pkg:"context",typ:$funcType([$Bool,$error],[],false)}];�/T.init("context",[{prop:"Context",name:"",exported:true,typ:F,tag:""},{prop:"done",name:"done",exported:false,typ:AI,tag:""},{prop:"mu",name:"mu",exported:false,typ:D.Mutex,tag:""},{prop:"children",name:"children",exported:false,typ:AJ,tag:""},{prop:"err",name:"err",exported:false,typ:$error,tag:""}]);	cancelCtx	
context.AB
context.AC
context.AH
context.AI
context.AJcontext.Contextcontext.cancelCtxcontext.canceler
sync.Mutex V��V=$pkg.timerCtx=$newType(0,$kindStruct,"context.timerCtx",true,"context",false,function(cancelCtx_,timer_,deadline_){this.$val=this;if(arguments.length===0){this.cancelCtx=new T.ptr($ifaceNil,$chanNil,new D.Mutex.ptr(0,0),false,$ifaceNil);this.timer=AG.nil;this.deadline=new E.Time.ptr(new $Int64(0,0),0,AA.nil);return;}this.cancelCtx=cancelCtx_;this.timer=timer_;this.deadline=deadline_;});��AD.methods=[{prop:"Deadline",name:"Deadline",pkg:"",typ:$funcType([],[E.Time,$Bool],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"cancel",name:"cancel",pkg:"context",typ:$funcType([$Bool,$error],[],false)}];��V.init("context",[{prop:"cancelCtx",name:"",exported:false,typ:T,tag:""},{prop:"timer",name:"timer",exported:false,typ:AG,tag:""},{prop:"deadline",name:"deadline",exported:false,typ:E.Time,tag:""}]);timerCtx
context.AA
context.AD
context.AGcontext.cancelCtxcontext.timerCtx
sync.Mutex	time.Time Y�Y=$pkg.valueCtx=$newType(0,$kindStruct,"context.valueCtx",true,"context",false,function(Context_,key_,val_){this.$val=this;if(arguments.length===0){this.Context=$ifaceNil;this.key=$ifaceNil;this.val=$ifaceNil;return;}this.Context=Context_;this.key=key_;this.val=val_;});��AE.methods=[{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"Value",name:"Value",pkg:"",typ:$funcType([$emptyInterface],[$emptyInterface],false)}];��Y.init("context",[{prop:"Context",name:"",exported:true,typ:F,tag:""},{prop:"key",name:"key",exported:false,typ:$emptyInterface,tag:""},{prop:"val",name:"val",exported:false,typ:$emptyInterface,tag:""}]);valueCtx
context.AEcontext.Contextcontext.valueCtx ZZ=$ptrType(H);Zcontext.emptyCtx AAAA=$ptrType(E.Location);AAtime.Location ABAB=$structType("",[]);AB ACAC=$ptrType(T);ACcontext.cancelCtx ADAD=$ptrType(V);ADcontext.timerCtx AEAE=$ptrType(Y);AEcontext.valueCtx AFAF=$sliceType($emptyInterface);AF AGAG=$ptrType(E.Timer);AG
time.Timer AHAH=$chanType(AB,false,true);AH
context.AB AIAI=$chanType(AB,false,false);AI
context.AB AJAJ=$mapType(S,$Bool);AJcontext.canceler Canceled DeadlineExceeded I
background Jtodo -    $pkg.Canceled=A.New("context canceled");context.Canceled
errors.New aE    $pkg.DeadlineExceeded=(a=new G.ptr(),new a.constructor.elem(a));DeadlineExceededcontext.DeadlineExceededcontext.deadlineExceededError     I=$newDataPointer(0,Z);	context.Zcontext.backgroundcontext.emptyCtx     J=$newDataPointer(0,Z);	context.Zcontext.todo %(context.deadlineExceededError).Error��G.ptr.prototype.Error=function(){var $ptr;  breturn"context deadline exceeded";    };G.prototype.Error=function(){return this.$val.Error();};deadlineExceededErrorcontext.deadlineExceededError '(context.deadlineExceededError).Timeout��G.ptr.prototype.Timeout=function(){var $ptr;  �return true;    };G.prototype.Timeout=function(){return this.$val.Timeout();};deadlineExceededErrorcontext.deadlineExceededError (*context.emptyCtx).Deadline��$ptrType(H).prototype.Deadline=function(){var $ptr,b,c;b=new E.Time.ptr(new $Int64(0,0),0,AA.nil);c=false;  �return[b,c];    };emptyCtx
context.AAcontext.emptyCtxtime.Location	time.Time (*context.emptyCtx).DoneK$ptrType(H).prototype.Done=function(){var $ptr;  �return $chanNil;    };emptyCtxcontext.emptyCtx (*context.emptyCtx).ErrK$ptrType(H).prototype.Err=function(){var $ptr;  return $ifaceNil;    };emptyCtxcontext.emptyCtx (*context.emptyCtx).ValueP$ptrType(H).prototype.Value=function(b){var $ptr,b;  Preturn $ifaceNil;    };emptyCtxcontext.emptyCtx (*context.emptyCtx).String��$ptrType(H).prototype.String=function(){var $ptr,b,c;  db=this;    c=b;    if(c===(I)){  �return"context.Background";    }else if(c===(J)){  �return"context.TODO";    }  �return"unknown empty Context";    };emptyCtxcontext.backgroundcontext.emptyCtxcontext.todo context.BackgroundK=K=function(){var $ptr;  Treturn I;    };$pkg.Background=K;
Backgroundcontext.Backgroundcontext.background context.TODOL7L=function(){var $ptr;  �return J;    };$pkg.TODO=L;TODOcontext.TODOcontext.todo context.WithCancelN��N=function(b){var $ptr,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=[c];d=$ifaceNil;e=$throwNilPointerError;   �c[0]=$clone(O(b),T);   �$r=P(b,c[0]);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    f=c[0];g=(function(c){return function $b(){var $ptr,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:   �$r=c[0].cancel(true,$pkg.Canceled);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.$s=$s;$f.$r=$r;return $f;};})(c);d=f;e=g;$s=-1;return[d,e];return[d,e];    }return;}if($f===undefined){$f={$blk:N};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};$pkg.WithCancel=N;
WithCancelcontext.Canceledcontext.WithCancelcontext.cancelCtxcontext.cancel~context.newCancelCtxcontext.propagateCancel context.newCancelCtxOnO=function(b){var $ptr,b;  !Xreturn new T.ptr(b,new $Chan(AB,0),new D.Mutex.ptr(0,0),false,$ifaceNil);    };newCancelCtx
context.ABcontext.cancelCtxcontext.newCancelCtx
sync.Mutex context.propagateCancelP�	.P=function(b,c){var $ptr,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=[b];c=[c];  " d=b[0].Done();$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}if(d===$chanNil){$s=1;continue;}$s=2;continue;    case 1:  "<$s=-1;return;return;    case 2:  "fe=Q(b[0]);f=e[0];g=e[1];  "cif(g){$s=4;continue;}$s=5;continue;    case 4:  "�$r=f.mu.Lock();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  "�if(!($interfaceIsEqual(f.err,$ifaceNil))){$s=8;continue;}$s=9;continue;    case 8:  "�$r=c[0].cancel(false,f.err);$s=11;case 11:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=10;continue;case 9:    if(f.children===false){  #f.children={};    }  #Jh=c[0];(f.children||$throwRuntimeError("assignment to entry in nil map"))[S.keyFor(h)]={k:h,v:true};    case 10:  #i$r=f.mu.Unlock();$s=12;case 12:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=6;continue;case 5:  #�$go((function(b,c){return function $b(){var $ptr,i,j,k,l,m,n,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  #�j=b[0].Done();$s=1;case 1:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=c[0].Done();$s=2;case 2:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=$select([[j],[k]]);$s=3;case 3:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}i=l;if(i[0]===0){$s=4;continue;}if(i[0]===1){$s=5;continue;}$s=6;continue;    case 4:  #�m=b[0].Err();$s=7;case 7:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=m;$r=c[0].cancel(false,n);$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=6;continue;    case 5:    case 6:    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.$s=$s;$f.$r=$r;return $f;};})(b,c),[]);    case 6:    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:P};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};propagateCancelcontext.cancelercontext.cancel~context.parentCancelCtxcontext.propagateCancel context.parentCancelCtxQ�`Q=function(b){var $ptr,b,c,d,e,f,g;  $�while(true){  %c=b;    if($assertType(c,AC,true)[1]){    d=c.$val;  %3return[d,true];    }else if($assertType(c,AD,true)[1]){    e=c.$val;  %Wreturn[e.cancelCtx,true];    }else if($assertType(c,AE,true)[1]){    f=c.$val;  %�b=f.Context;    }else{    g=c;  %�return[AC.nil,false];    }    }    };parentCancelCtx
context.AC
context.AD
context.AEcontext.cancelCtxcontext.parentCancelCtxcontext.timerCtxcontext.valueCtx context.removeChildR��R=function(b,c){var $ptr,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  &)d=Q(b);e=d[0];f=d[1];    if(!f){  &V$s=-1;return;return;    }  &a$r=e.mu.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    if(!(e.children===false)){  &�delete e.children[S.keyFor(c)];    }  &�$r=e.mu.Unlock();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:R};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};removeChildcontext.cancelercontext.parentCancelCtxcontext.removeChild (*context.cancelCtx).Done��T.ptr.prototype.Done=function(){var $ptr,b;  (�b=this;  )return b.done;    };T.prototype.Done=function(){return this.$val.Done();};	cancelCtxcontext.cancelCtx (*context.cancelCtx).Err�TT.ptr.prototype.Err=function(){var $ptr,b,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  )3b=this;  )P$r=b.mu.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  )]$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  )r$s=-1;return b.err;return b.err;    }return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:T.ptr.prototype.Err};}$f.$ptr=$ptr;$f.b=b;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};T.prototype.Err=function(){return this.$val.Err();};	cancelCtxcontext.cancelCtx (*context.cancelCtx).String�/T.ptr.prototype.String=function(){var $ptr,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  )�b=this;  )�c=B.Sprintf("%v.WithCancel",new AF([b.Context]));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;return c;    }return;}if($f===undefined){$f={$blk:T.ptr.prototype.String};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};T.prototype.String=function(){return this.$val.String();};	cancelCtx
context.AFcontext.cancelCtxfmt.Sprintf (*context.cancelCtx).cancel�*T.ptr.prototype.cancel=function(b,c){var $ptr,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  *cd=this;    if($interfaceIsEqual(c,$ifaceNil)){  *�$panic(new $String("context: internal error: missing cancel error"));    }  *�$r=d.mu.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  *�if(!($interfaceIsEqual(d.err,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  +$r=d.mu.Unlock();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  +$s=-1;return;return;    case 3:  +:d.err=c;  +G$close(d.done);  +Ve=d.children;f=0;g=$keys(e);case 5:if(!(f<g.length)){$s=6;continue;}h=e[g[f]];    if(h===undefined){    f++;$s=5;continue;    }i=h.k;  +�$r=i.cancel(false,c);$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    f++;$s=5;continue;case 6:  +�d.children=false;  +�$r=d.mu.Unlock();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  +�if(b){$s=9;continue;}$s=10;continue;    case 9:  ,$r=R(d.Context,d);$s=11;case 11:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 10:    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:T.ptr.prototype.cancel};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};T.prototype.cancel=function(b,c){return this.$val.cancel(b,c);};	cancelCtxcancel~context.cancelCtxcontext.cancel~context.removeChild context.WithDeadlineU��U=function(b,c){var $ptr,b,c,d,e,f,g,h,i,j,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);d=[d];  .�c=$clone(c,E.Time);  .�f=b.Deadline();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=$clone(e[0],E.Time);h=e[1];  .�if(h&&g.Before(c)){$s=2;continue;}$s=3;continue;    case 2:  /Ii=N(b);$s=4;case 4:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}$s=-1;return i;return i;    case 3:  /gd[0]=new V.ptr($clone(O(b),T),AG.nil,$clone(c,E.Time));  /�$r=P(b,d[0]);$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  /�j=c.Sub(E.Now());  /�if((j.$high<0||(j.$high===0&&j.$low<=0))){$s=6;continue;}$s=7;continue;    case 6:  /�$r=d[0].cancel(true,$pkg.DeadlineExceeded);$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  0@$s=-1;return[d[0],(function(d){return function $b(){var $ptr,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  0S$r=d[0].cancel(true,$pkg.Canceled);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.$s=$s;$f.$r=$r;return $f;};})(d)];return[d[0],(function(d){return function $b(){var $ptr,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  0S$r=d[0].cancel(true,$pkg.Canceled);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.$s=$s;$f.$r=$r;return $f;};})(d)];    case 7:  0r$r=d[0].cancelCtx.mu.Lock();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  0$deferred.push([$methodVal(d[0].cancelCtx.mu,"Unlock"),[]]);    if($interfaceIsEqual(d[0].cancelCtx.err,$ifaceNil)){  0�d[0].timer=E.AfterFunc(j,(function(d){return function $b(){var $ptr,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  0�$r=d[0].cancel(true,$pkg.DeadlineExceeded);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.$s=$s;$f.$r=$r;return $f;};})(d));    }  0�$s=-1;return[d[0],(function(d){return function $b(){var $ptr,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  1$r=d[0].cancel(true,$pkg.Canceled);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.$s=$s;$f.$r=$r;return $f;};})(d)];return[d[0],(function(d){return function $b(){var $ptr,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  1$r=d[0].cancel(true,$pkg.Canceled);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.$s=$s;$f.$r=$r;return $f;};})(d)];    }return;}}catch(err){$err=err;$s=-1;return[$ifaceNil,$throwNilPointerError];}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:U};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};$pkg.WithDeadline=U;WithDeadline
context.AA
context.AGcontext.Canceledcontext.DeadlineExceededcontext.WithCancelcontext.WithDeadlinecontext.cancelCtxcontext.cancel~context.newCancelCtxcontext.propagateCancelcontext.timerCtx
sync.Mutextime.AfterFunctime.Now	time.Time
time.Timer (*context.timerCtx).Deadline�V.ptr.prototype.Deadline=function(){var $ptr,b,c,d,e,f;b=new E.Time.ptr(new $Int64(0,0),0,AA.nil);c=false;  2Jd=this;    e=$clone(d.deadline,E.Time);f=true;E.Time.copy(b,e);c=f;return[b,c];    };V.prototype.Deadline=function(){return this.$val.Deadline();};timerCtx
context.AAcontext.timerCtx	time.Time (*context.timerCtx).String��V.ptr.prototype.String=function(){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  2�b=this;  2�d=B.Sprintf("%v.WithDeadline(%s [%s])",new AF([b.cancelCtx.Context,(c=b.deadline,new c.constructor.elem(c)),b.deadline.Sub(E.Now())]));$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;return d;    }return;}if($f===undefined){$f={$blk:V.ptr.prototype.String};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};V.prototype.String=function(){return this.$val.String();};timerCtx
context.AFcontext.timerCtxfmt.Sprintftime.Now (*context.timerCtx).cancel�V.ptr.prototype.cancel=function(b,c){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  39d=this;  3r$r=d.cancelCtx.cancel(false,c);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  3�if(b){$s=2;continue;}$s=3;continue;    case 2:  3�$r=R(d.cancelCtx.Context,d);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 3:  4$r=d.cancelCtx.mu.Lock();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    if(!(d.timer===AG.nil)){  45d.timer.Stop();  4Fd.timer=AG.nil;    }  4X$r=d.cancelCtx.mu.Unlock();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:V.ptr.prototype.cancel};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};V.prototype.cancel=function(b,c){return this.$val.cancel(b,c);};timerCtxcancel~
context.AGcontext.cancel~context.removeChildcontext.timerCtx context.WithTimeoutW��W=function(b,c){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  6�d=U(b,E.Now().Add(c));$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;return d;    }return;}if($f===undefined){$f={$blk:W};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.WithTimeout=W;WithTimeoutcontext.WithDeadlinecontext.WithTimeouttime.Now context.WithValueX��X=function(b,c,d){var $ptr,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if($interfaceIsEqual(c,$ifaceNil)){  8I$panic(new $String("nil key"));    }  8^e=C.TypeOf(c).Comparable();$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}if(!e){$s=1;continue;}$s=2;continue;    case 1:  8�$panic(new $String("key is not comparable"));    case 2:  8�$s=-1;return new Y.ptr(b,c,d);return new Y.ptr(b,c,d);    }return;}if($f===undefined){$f={$blk:X};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.WithValue=X;	WithValuecontext.WithValuecontext.valueCtxreflect.TypeOf (*context.valueCtx).String�DY.ptr.prototype.String=function(){var $ptr,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  9�b=this;  9�c=B.Sprintf("%v.WithValue(%#v, %#v)",new AF([b.Context,b.key,b.val]));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;return c;    }return;}if($f===undefined){$f={$blk:Y.ptr.prototype.String};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};Y.prototype.String=function(){return this.$val.String();};valueCtx
context.AFcontext.valueCtxfmt.Sprintf (*context.valueCtx).Value�qY.ptr.prototype.Value=function(b){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  :c=this;    if($interfaceIsEqual(c.key,b)){  :H$s=-1;return c.val;return c.val;    }  :Yd=c.Context.Value(b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;return d;    }return;}if($f===undefined){$f={$blk:Y.ptr.prototype.Value};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};Y.prototype.Value=function(b){return this.$val.Value(b);};valueCtxcontext.valueCtx �
�{"Base":14968,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.3yb4TYabM8/goroot/src/context/context.go","Base":1,"Size":14966,"Lines":[0,55,109,159,160,230,308,334,337,408,475,546,615,677,724,727,793,864,928,996,1063,1131,1197,1220,1223,1298,1378,1394,1397,1468,1546,1581,1584,1643,1667,1673,1676,1755,1804,1807,1886,1945,1948,2028,2094,2097,2176,2189,2205,2206,2215,2225,2232,2243,2251,2259,2261,2262,2341,2360,2363,2437,2462,2533,2604,2667,2709,2710,2784,2856,2927,2931,3000,3066,3139,3152,3156,3207,3211,3282,3348,3412,3424,3458,3481,3500,3509,3525,3551,3576,3598,3607,3615,3622,3626,3700,3736,3760,3761,3833,3901,3969,4042,4055,4056,4129,4200,4242,4246,4312,4385,4400,4404,4476,4544,4616,4681,4744,4760,4764,4838,4880,4884,4952,4970,4974,4996,5000,5058,5086,5090,5158,5228,5246,5250,5317,5386,5430,5455,5459,5522,5591,5639,5646,5650,5716,5775,5817,5836,5843,5879,5881,5882,5961,6007,6008,6084,6104,6157,6158,6194,6195,6278,6279,6339,6340,6420,6487,6505,6506,6566,6574,6576,6577,6619,6631,6633,6634,6665,6677,6679,6680,6734,6746,6748,6749,6786,6798,6816,6846,6858,6882,6885,6917,6919,6920,6926,6954,6982,6984,6985,7062,7137,7209,7222,7250,7269,7271,7272,7348,7425,7495,7569,7628,7650,7663,7665,7666,7722,7774,7844,7867,7868,7945,8025,8106,8109,8189,8264,8331,8358,8387,8435,8437,8438,8488,8534,8553,8572,8604,8607,8609,8610,8679,8734,8761,8798,8801,8844,8858,8878,8917,8947,8958,8984,9025,9030,9058,9062,9078,9088,9102,9114,9139,9177,9201,9206,9212,9215,9217,9218,9291,9371,9405,9463,9470,9500,9519,9537,9555,9584,9602,9624,9635,9656,9660,9663,9665,9666,9716,9767,9801,9811,9820,9823,9836,9860,9888,9891,9906,9908,9909,9976,10025,10051,10093,10117,10119,10120,10196,10224,10248,10257,10258,10314,10315,10336,10403,10474,10476,10477,10522,10537,10539,10540,10574,10587,10608,10622,10624,10625,10663,10711,10713,10714,10777,10844,10907,10924,10981,10984,10997,11016,11032,11061,11064,11077,11092,11125,11192,11219,11222,11240,11255,11256,11279,11307,11310,11312,11313,11393,11471,11549,11630,11705,11741,11744,11824,11899,11977,12040,12102,12130,12133,12150,12185,12208,12211,12239,12270,12283,12349,12397,12400,12413,12434,12453,12492,12528,12533,12536,12583,12585,12586,12657,12732,12767,12790,12801,12843,12844,12864,12866,12867,12929,12954,12956,12957,12994,13103,13105,13106,13168,13200,13223,13287,13325,13328,13341,13362,13379,13395,13398,13413,13415,13416,13486,13489,13569,13644,13647,13720,13787,13880,13911,13917,13997,14051,14053,14054,14134,14142,14145,14224,14283,14286,14326,14389,14406,14425,14428,14468,14501,14504,14540,14542,14543,14620,14674,14697,14706,14728,14730,14731,14768,14839,14841,14842,14898,14917,14932,14935,14964],"Infos":null}]}
 