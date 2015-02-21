p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �`���	io/ioutilioutilbytesioospath/filepathsortstrconvsynctime�.�package ioutil
import bytes "bytes"
import io "io"
import os "os"
import sort "sort"
import sync "sync"
import filepath "path/filepath"
import strconv "strconv"
import time "time"
var @"".Discard @"io".Writer
func @"".NopCloser(@"".r @"io".Reader) (? @"io".ReadCloser)
func @"".ReadAll(@"".r @"io".Reader) (? []byte, ? error)
func @"".ReadDir(@"".dirname string) (? []@"os".FileInfo, ? error)
func @"".ReadFile(@"".filename string) (? []byte, ? error)
func @"".TempDir(@"".dir string, @"".prefix string) (@"".name string, @"".err error)
func @"".TempFile(@"".dir string, @"".prefix string) (@"".f *@"os".File, @"".err error)
func @"".WriteFile(@"".filename string, @"".data []byte, @"".perm @"os".FileMode) (? error)
type @"".byName []@"os".FileInfo
func (? @"".byName) @"".Len() (? int)
func (? @"".byName) @"".Less(@"".i int, @"".j int) (? bool)
func (? @"".byName) @"".Swap(@"".i int, @"".j int) ()
func (? *@"".byName) @"".Len() (? int)
func (? *@"".byName) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".byName) @"".Swap(@"".i int, @"".j int) ()
type @"".devNull int
func (? @"".devNull) @"".ReadFrom(@"".r @"io".Reader) (@"".n int64, @"".err error)
func (? @"".devNull) @"".Write(@"".p []byte) (? int, ? error)
func (? @"".devNull) @"".WriteString(@"".s string) (? int, ? error)
func (? *@"".devNull) @"".ReadFrom(@"".r @"io".Reader) (@"".n int64, @"".err error)
func (? *@"".devNull) @"".Write(@"".p []byte) (? int, ? error)
func (? *@"".devNull) @"".WriteString(@"".s string) (? int, ? error)
type @"".nopCloser struct { ? @"io".Reader }
func (? @"".nopCloser) @"".Close() (? error)
func (? *@"".nopCloser) @"".Close() (? error)
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"os".FileInfo interface { @"os".IsDir() (? bool); @"os".ModTime() (? @"time".Time); @"os".Mode() (? @"os".FileMode); @"os".Name() (? string); @"os".Size() (? int64); @"os".Sys() (? interface {  }) }
type @"os".File struct { ? *@"os".file }
func (? *@"os".File) @"os".Chdir() (? error)
func (? *@"os".File) @"os".Chmod(@"os".mode @"os".FileMode) (? error)
func (? *@"os".File) @"os".Chown(@"os".uid int, @"os".gid int) (? error)
func (? *@"os".File) @"os".Close() (? error)
func (? *@"os".File) @"os".Fd() (? uintptr)
func (? *@"os".File) @"os".Name() (? string)
func (? *@"os".File) @"os".Read(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".ReadAt(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".Readdir(@"os".n int) (@"os".fi []@"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".Readdirnames(@"os".n int) (@"os".names []string, @"os".err error)
func (? *@"os".File) @"os".Seek(@"os".offset int64, @"os".whence int) (@"os".ret int64, @"os".err error)
func (? *@"os".File) @"os".Stat() (@"os".fi @"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".Sync() (@"os".err error)
func (? *@"os".File) @"os".Truncate(@"os".size int64) (? error)
func (? *@"os".File) @"os".Write(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".WriteAt(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".WriteString(@"os".s string) (@"os".ret int, @"os".err error)
func (? *@"os".File) @"os".pread(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".pwrite(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".read(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".readdir(@"os".n int) (@"os".fi []@"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".readdirnames(@"os".n int) (@"os".names []string, @"os".err error)
func (? *@"os".File) @"os".seek(@"os".offset int64, @"os".whence int) (@"os".ret int64, @"os".err error)
func (? *@"os".File) @"os".write(@"os".b []byte) (@"os".n int, @"os".err error)
type @"os".FileMode uint32
func (? @"os".FileMode) @"os".IsDir() (? bool)
func (? @"os".FileMode) @"os".IsRegular() (? bool)
func (? @"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? @"os".FileMode) @"os".String() (? string)
func (? *@"os".FileMode) @"os".IsDir() (? bool)
func (? *@"os".FileMode) @"os".IsRegular() (? bool)
func (? *@"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? *@"os".FileMode) @"os".String() (? string)
type @"time".Time struct { @"time".sec int64; @"time".nsec int32; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? @"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"time".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? @"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? @"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
func (? *@"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? *@"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"time".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? *@"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? *@"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
type @"os".file struct { @"os".fd int; @"os".name string; @"os".dirinfo *@"os".dirInfo; @"os".nepipe int32 }
func (? *@"os".file) @"os".close() (? error)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
type @"time".Duration int64
func (? @"time".Duration) @"time".Hours() (? float64)
func (? @"time".Duration) @"time".Minutes() (? float64)
func (? @"time".Duration) @"time".Nanoseconds() (? int64)
func (? @"time".Duration) @"time".Seconds() (? float64)
func (? @"time".Duration) @"time".String() (? string)
func (? *@"time".Duration) @"time".Hours() (? float64)
func (? *@"time".Duration) @"time".Minutes() (? float64)
func (? *@"time".Duration) @"time".Nanoseconds() (? int64)
func (? *@"time".Duration) @"time".Seconds() (? float64)
func (? *@"time".Duration) @"time".String() (? string)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"os".dirInfo struct { @"os".buf []byte; @"os".nbuf int; @"os".bufp int }
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
)AA=$packages["bytes"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["io"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["os"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} FF=$packages["path/filepath"];E    $r=F.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} DD=$packages["sort"];E    $r=D.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} GG=$packages["strconv"];E    $r=G.$init($BLOCKING);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} EE=$packages["sync"];E    $r=E.$init($BLOCKING);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} HH=$packages["time"];E    $r=H.$init($BLOCKING);$s=8;case 8:if($r&&$r.$blocking){$r=$r();} MPM=$pkg.byName=$newType(12,$kindSlice,"ioutil.byName","byName","io/ioutil",null);��M.methods=[{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Less",name:"Less",pkg:"",typ:$funcType([$Int,$Int],[$Bool],false)},{prop:"Swap",name:"Swap",pkg:"",typ:$funcType([$Int,$Int],[],false)}];M.init(C.FileInfo);io/ioutil.byNameio/ioutil.byNameos.FileInfo O��O=$pkg.nopCloser=$newType(0,$kindStruct,"ioutil.nopCloser","nopCloser","io/ioutil",function(Reader_){this.$val=this;this.Reader=Reader_!==undefined?Reader_:$ifaceNil;});PO.methods=[{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];=O.init([{prop:"Reader",name:"",pkg:"",typ:B.Reader,tag:""}]);io/ioutil.nopCloser	io.Readerio/ioutil.nopCloser QPQ=$pkg.devNull=$newType(4,$kindInt,"ioutil.devNull","devNull","io/ioutil",null);�Q.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([Z],[$Int,$error],false)},{prop:"WriteString",name:"WriteString",pkg:"",typ:$funcType([$String],[$Int,$error],false)},{prop:"ReadFrom",name:"ReadFrom",pkg:"",typ:$funcType([B.Reader],[$Int64,$error],false)}];io/ioutil.devNull	io.Readerio/ioutil.devNullio/ioutil:[]byte YY=$sliceType($emptyInterface);io/ioutil:[]interface{} ZZ=$sliceType($Uint8);io/ioutil:[]byte AAAA=$ptrType(Z);io/ioutil:*[]byteio/ioutil:[]byte ABAB=$sliceType(C.FileInfo);io/ioutil:[]os.FileInfoos.FileInfo ACAC=$ptrType(C.File);io/ioutil:*os.Fileos.File ADAD=$sliceType($String);io/ioutil:[]string Rio/ioutil.blackHolePool io/ioutil.Discard SS=0;io/ioutil.randio/ioutil.rand TT=new E.Mutex.ptr();io/ioutil.randmuio/ioutil.randmu
sync.Mutex     io/ioutil._ ��    R=new E.Pool.ptr(0,0,Y.nil,(function(){var a;  �a=$makeSlice(Z,8192);  return new AA(function(){return a;},function($v){a=$v;});    }));io/ioutil.blackHolePoolio/ioutil:*[]byteio/ioutil:[]byteio/ioutil:[]interface{}	sync.Pool     $pkg.Discard=new Q(0);io/ioutil.Discardio/ioutil.Discardio/ioutil.devNull io/ioutil.readAllI�cI=function(a,b){var $deferred=[],$err=null,a,b,c=Z.nil,d=$ifaceNil,e,f,g,h;try{$deferFrames.push($deferred);  �e=A.NewBuffer($makeSlice(Z,0,$flatten64(b)));  �$deferred.push([(function(){var f,g,h,i;  �f=$recover();  �    if($interfaceIsEqual(f,$ifaceNil)){  �return;    }  �  �g=$assertType(f,$error,true);h=g[0];i=g[1];    if(i&&$interfaceIsEqual(h,A.ErrTooLarge)){  d=h;    }else{  3$panic(f);    }    }),[]]);  Ff=e.ReadFrom(a);d=f[1];  `    g=e.Bytes();h=d;c=g;d=h;return[c,d];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[c,d];}};io/ioutil.readAllbytes.ErrTooLargebytes.NewBufferio/ioutil.readAllio/ioutil:[]byte io/ioutil.ReadAllJKJ=$pkg.ReadAll=function(a){var a;  �return I(a,new $Int64(0,512));    };io/ioutil.ReadAllio/ioutil.ReadAllio/ioutil.readAll io/ioutil.ReadFileK�mK=$pkg.ReadFile=function(a){var $deferred=[],$err=null,a,b,c,d,e,f,g,h,i;try{$deferFrames.push($deferred);  �b=C.Open(a);c=b[0];d=b[1];      if(!($interfaceIsEqual(d,$ifaceNil))){  return[Z.nil,d];    }  .$deferred.push([$methodVal(c,"Close"),[]]);  �  �e=new $Int64(0,0);  �  �f=c.Stat();g=f[0];h=f[1];    if($interfaceIsEqual(h,$ifaceNil)){  A  Di=g.Size();    if((i.$high<0||(i.$high===0&&i.$low<1000000000))){  ge=i;    }    }  �return I(c,new $Int64(e.$high+0,e.$low+512));    }catch(err){$err=err;return[Z.nil,$ifaceNil];}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};io/ioutil.ReadFileio/ioutil.ReadFileio/ioutil.readAllio/ioutil:[]byteos.Open io/ioutil.WriteFileL�~L=$pkg.WriteFile=function(a,b,c){var a,b,c,d,e,f,g,h,i;  
!d=C.OpenFile(a,1537,c);e=d[0];f=d[1];  
l    if(!($interfaceIsEqual(f,$ifaceNil))){  
~return f;    }  
�g=e.Write(b);h=g[0];f=g[1];  
�    if($interfaceIsEqual(f,$ifaceNil)&&h<b.$length){  
�f=B.ErrShortWrite;    }  
�  
�i=e.Close();    if($interfaceIsEqual(f,$ifaceNil)){  	f=i;    }  return f;    };io/ioutil.WriteFileio.ErrShortWriteio/ioutil.WriteFileos.OpenFile (io/ioutil.byName).Len��M.prototype.Len=function(){var a;  la=this;  �return a.$length;    };$ptrType(M).prototype.Len=function(){return this.$get().Len();};io/ioutil.byNameio/ioutil.byName (io/ioutil.byName).Less�GM.prototype.Less=function(a,b){var a,b,c;  �c=this;  �return((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).Name()<((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).Name();    };$ptrType(M).prototype.Less=function(a,b){return this.$get().Less(a,b);};io/ioutil.byNameio/ioutil.byName (io/ioutil.byName).Swap��M.prototype.Swap=function(a,b){var a,b,c,d,e;  �c=this;  d=((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]);e=((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]);(a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]=d;(b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]=e;    };$ptrType(M).prototype.Swap=function(a,b){return this.$get().Swap(a,b);};io/ioutil.byNameio/ioutil.byName io/ioutil.ReadDirN�zN=$pkg.ReadDir=function(a){var a,b,c,d,e,f;  �b=C.Open(a);c=b[0];d=b[1];  �    if(!($interfaceIsEqual(d,$ifaceNil))){  �return[AB.nil,d];    }  e=c.Readdir(-1);f=e[0];d=e[1];  c.Close();  )    if(!($interfaceIsEqual(d,$ifaceNil))){  ;return[AB.nil,d];    }  OD.Sort($subslice(new M(f.$array),f.$offset,f.$offset+f.$length));  hreturn[f,$ifaceNil];    };io/ioutil.ReadDirio/ioutil.ReadDirio/ioutil.byNameio/ioutil:[]os.FileInfoos.FileInfoos.Open	sort.Sort (io/ioutil.nopCloser).ClosevO.ptr.prototype.Close=function(){  �return $ifaceNil;    };O.prototype.Close=function(){return this.$val.Close();};io/ioutil.nopCloserio/ioutil.nopCloser io/ioutil.NopCloserPbP=$pkg.NopCloser=function(a){var a,b;  ]return(b=new O.ptr(a),new b.constructor.elem(b));    };io/ioutil.NopCloserio/ioutil.NopCloserio/ioutil.nopCloser (io/ioutil.devNull).Write��Q.prototype.Write=function(a){var a;  Mreturn[a.$length,$ifaceNil];    };$ptrType(Q).prototype.Write=function(a){return new Q(this.$get()).Write(a);};io/ioutil.devNullio/ioutil.devNull (io/ioutil.devNull).WriteString��Q.prototype.WriteString=function(a){var a;  �return[a.length,$ifaceNil];    };$ptrType(Q).prototype.WriteString=function(a){return new Q(this.$get()).WriteString(a);};io/ioutil.devNullio/ioutil.devNull (io/ioutil.devNull).ReadFrom�$Q.prototype.ReadFrom=function(a){var a,b=new $Int64(0,0),c=$ifaceNil,d,e,f,g,h,i;  Rd=$assertType(R.Get(),AA);  ye=0;  �while(true){if(!(true)){break;}  �f=a.Read(d.$get());e=f[0];c=f[1];  �  �b=(g=new $Int64(0,e),new $Int64(b.$high+g.$high,b.$low+g.$low));      �    if(!($interfaceIsEqual(c,$ifaceNil))){  �R.Put(d);  �    if($interfaceIsEqual(c,B.EOF)){      h=b;i=$ifaceNil;b=h;c=i;return[b,c];    }  "return[b,c];    }    }    };$ptrType(Q).prototype.ReadFrom=function(a){return new Q(this.$get()).ReadFrom(a);};io/ioutil.devNullio.EOFio/ioutil.blackHolePoolio/ioutil.devNullio/ioutil:*[]byte io/ioutil.reseedU��U=function(){var a,b;  �return((a=H.Now().UnixNano(),b=new $Int64(0,C.Getpid()),new $Int64(a.$high+b.$high,a.$low+b.$low)).$low>>>0);    };io/ioutil.reseedio/ioutil.reseed	os.Getpidtime.Now io/ioutil.nextSuffixV�UV=function($b){var $args=arguments,$r,$s=0,$this=this,a,b;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  �$r=T.Lock($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  �a=S;      if(a===0){  a=U();    }  &a=((((a>>>16<<16)*1664525>>>0)+(a<<16>>>16)*1664525)>>>0)+1013904223>>>0;  fS=a;  p$r=T.Unlock($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();}  �return G.Itoa(((1000000000+(b=a%1000000000,b===b?b:$throwRuntimeError("integer divide by zero"))>>>0)>>0)).substring(1);    case-1:}return;}};$f.$blocking=true;return $f;};io/ioutil.nextSuffixio/ioutil.nextSuffixio/ioutil.randio/ioutil.randmuio/ioutil.reseedstrconv.Itoa io/ioutil.TempFileW�0W=$pkg.TempFile=function(a,b,$b){var $args=arguments,$r,$s=0,$this=this,c=AC.nil,d=$ifaceNil,e,f,g,h,i,j,k;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  �    if(a===""){}else{$s=1;continue;}  e=C.TempDir($BLOCKING);$s=2;case 2:if(e&&e.$blocking){e=e();}a=e;    case 1:  f=0;  ,  0g=0;case 3:if(!(g<10000)){$s=4;continue;}  Kh=V($BLOCKING);$s=5;case 5:if(h&&h.$blocking){h=h();}i=F.Join(new AD([a,b+h]),$BLOCKING);$s=6;case 6:if(i&&i.$blocking){i=i();}j=i;  }k=C.OpenFile(j,2562,384);c=k[0];d=k[1];  �    if(C.IsExist(d)){  �  �  �f=f+(1)>>0;        if(f>10){  �S=U();    }    C  Cg=g+(1)>>0;    $s=3;continue;    }  %$s=4;continue;    $s=3;continue;case 4:  /return[c,d];    case-1:}return;}};$f.$blocking=true;return $f;};io/ioutil.TempFileio/ioutil.TempFileio/ioutil.nextSuffixio/ioutil.randio/ioutil.reseedio/ioutil:*os.Fileio/ioutil:[]stringos.File
os.IsExistos.OpenFile
os.TempDirpath/filepath.Join io/ioutil.TempDirX�OX=$pkg.TempDir=function(a,b,$b){var $args=arguments,$r,$s=0,$this=this,c="",d=$ifaceNil,e,f,g,h,i,j;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  $    if(a===""){}else{$s=1;continue;}  5e=C.TempDir($BLOCKING);$s=2;case 2:if(e&&e.$blocking){e=e();}a=e;    case 1:  Mf=0;  ]  ag=0;case 3:if(!(g<10000)){$s=4;continue;}  |h=V($BLOCKING);$s=5;case 5:if(h&&h.$blocking){h=h();}i=F.Join(new AD([a,b+h]),$BLOCKING);$s=6;case 6:if(i&&i.$blocking){i=i();}j=i;  �d=C.Mkdir(j,448);  �    if(C.IsExist(d)){  �  �  �f=f+(1)>>0;        if(f>10){  S=U();    }    t  tg=g+(1)>>0;    $s=3;continue;    }  -    if($interfaceIsEqual(d,$ifaceNil)){  @c=j;    }  Q$s=4;continue;    $s=3;continue;case 4:  [return[c,d];    case-1:}return;}};$f.$blocking=true;return $f;};io/ioutil.TempDir	io/ioutil.TempDirio/ioutil.nextSuffixio/ioutil.randio/ioutil.reseedio/ioutil:[]string
os.IsExistos.Mkdir
os.TempDirpath/filepath.Join ��{"Base":7013,"Files":[{"Name":"/usr/local/go/src/io/ioutil/ioutil.go","Base":1,"Size":4524,"Lines":[0,55,109,159,160,217,232,233,242,251,257,263,271,279,281,282,357,422,488,539,599,653,669,686,702,712,716,786,804,815,827,831,836,862,887,889,890,966,1042,1116,1147,1191,1225,1227,1228,1299,1373,1445,1464,1513,1542,1559,1577,1580,1597,1680,1750,1763,1764,1802,1854,1891,1903,1907,1910,1992,2075,2155,2237,2300,2336,2338,2339,2393,2468,2520,2591,2666,2683,2696,2699,2724,2758,2783,2786,2822,2835,2838,2850,2852,2853,2890,2916,2917,2971,3044,3108,3109,3169,3208,3262,3290,3307,3325,3328,3356,3367,3384,3402,3405,3430,3448,3450,3451,3475,3486,3488,3489,3535,3536,3605,3631,3675,3696,3698,3699,3716,3717,3783,3835,3868,3869,3915,3935,3937,3938,3990,4010,4012,4013,4044,4071,4097,4109,4113,4115,4116,4176,4215,4230,4237,4269,4292,4310,4337,4359,4377,4382,4392,4396,4399,4401,4402,4462,4489],"Infos":null},{"Name":"/usr/local/go/src/io/ioutil/tempfile.go","Base":4526,"Size":2486,"Lines":[0,56,110,160,161,176,177,186,192,209,220,228,236,238,239,263,329,397,423,439,461,462,485,544,546,547,574,589,600,613,628,631,695,705,722,765,767,768,830,895,947,1014,1055,1108,1171,1243,1288,1348,1364,1385,1388,1389,1405,1435,1485,1553,1576,1612,1632,1637,1649,1653,1661,1664,1672,1674,1675,1741,1806,1870,1929,1981,2055,2105,2165,2181,2202,2205,2206,2222,2252,2301,2329,2352,2388,2408,2413,2425,2429,2447,2461,2465,2473,2476,2484],"Infos":null}]}
 