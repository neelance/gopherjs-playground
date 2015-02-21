p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �^���compress/zlibzlibbufiocompress/flateerrorsfmthashhash/adler32io�#package zlib
import bufio "bufio"
import flate "compress/flate"
import errors "errors"
import hash "hash"
import adler32 "hash/adler32"
import io "io"
import fmt "fmt"
const @"".BestCompression = 0x9
const @"".BestSpeed = 0x1
const @"".DefaultCompression = -0x1
var @"".ErrChecksum error
var @"".ErrDictionary error
var @"".ErrHeader error
func @"".NewReader(@"".r @"io".Reader) (? @"io".ReadCloser, ? error)
func @"".NewReaderDict(@"".r @"io".Reader, @"".dict []byte) (? @"io".ReadCloser, ? error)
func @"".NewWriter(@"".w @"io".Writer) (? *@"".Writer)
func @"".NewWriterLevel(@"".w @"io".Writer, @"".level int) (? *@"".Writer, ? error)
func @"".NewWriterLevelDict(@"".w @"io".Writer, @"".level int, @"".dict []byte) (? *@"".Writer, ? error)
const @"".NoCompression = 0x0
type @"".Resetter interface { @"".Reset(@"".r @"io".Reader, @"".dict []byte) (? error) }
type @"".Writer struct { @"".w @"io".Writer; @"".level int; @"".dict []byte; @"".compressor *@"compress/flate".Writer; @"".digest @"hash".Hash32; @"".err error; @"".scratch [4]byte; @"".wroteHeader bool }
func (? *@"".Writer) @"".Close() (? error)
func (? *@"".Writer) @"".Flush() (? error)
func (? *@"".Writer) @"".Reset(@"".w @"io".Writer) ()
func (? *@"".Writer) @"".Write(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".Writer) @"".writeHeader() (@"".err error)
type @"".reader struct { @"".r @"compress/flate".Reader; @"".decompressor @"io".ReadCloser; @"".digest @"hash".Hash32; @"".err error; @"".scratch [4]byte }
func (? *@"".reader) @"".Close() (? error)
func (? *@"".reader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".reader) @"".Reset(@"".r @"io".Reader, @"".dict []byte) (? error)
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"compress/flate".Writer struct { @"compress/flate".d @"compress/flate".compressor; @"compress/flate".dict []byte }
func (? *@"compress/flate".Writer) @"compress/flate".Close() (? error)
func (? *@"compress/flate".Writer) @"compress/flate".Flush() (? error)
func (? *@"compress/flate".Writer) @"compress/flate".Reset(@"compress/flate".dst @"io".Writer) ()
func (? *@"compress/flate".Writer) @"compress/flate".Write(@"compress/flate".data []byte) (@"compress/flate".n int, @"compress/flate".err error)
type @"hash".Hash32 interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"hash".Sum32() (? uint32); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"compress/flate".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".ReadByte() (@"io".c byte, @"io".err error) }
type @"compress/flate".compressor struct { ? @"compress/flate".compressionLevel; @"compress/flate".w *@"compress/flate".huffmanBitWriter; @"compress/flate".fill func (? *@"compress/flate".compressor, ? []byte) (? int); @"compress/flate".step func (? *@"compress/flate".compressor) (); @"compress/flate".sync bool; @"compress/flate".chainHead int; @"compress/flate".hashHead []int; @"compress/flate".hashPrev []int; @"compress/flate".hashOffset int; @"compress/flate".index int; @"compress/flate".window []byte; @"compress/flate".windowEnd int; @"compress/flate".blockStart int; @"compress/flate".byteAvailable bool; @"compress/flate".tokens []@"compress/flate".token; @"compress/flate".length int; @"compress/flate".offset int; @"compress/flate".hash int; @"compress/flate".maxInsertIndex int; @"compress/flate".err error }
func (? *@"compress/flate".compressor) @"compress/flate".close() (? error)
func (? *@"compress/flate".compressor) @"compress/flate".deflate() ()
func (? *@"compress/flate".compressor) @"compress/flate".fillDeflate(@"compress/flate".b []byte) (? int)
func (? *@"compress/flate".compressor) @"compress/flate".fillStore(@"compress/flate".b []byte) (? int)
func (? *@"compress/flate".compressor) @"compress/flate".findMatch(@"compress/flate".pos int, @"compress/flate".prevHead int, @"compress/flate".prevLength int, @"compress/flate".lookahead int) (@"compress/flate".length int, @"compress/flate".offset int, @"compress/flate".ok bool)
func (? *@"compress/flate".compressor) @"compress/flate".init(@"compress/flate".w @"io".Writer, @"compress/flate".level int) (@"compress/flate".err error)
func (? *@"compress/flate".compressor) @"compress/flate".initDeflate() ()
func (? *@"compress/flate".compressor) @"compress/flate".reset(@"compress/flate".w @"io".Writer) ()
func (? *@"compress/flate".compressor) @"compress/flate".store() ()
func (? *@"compress/flate".compressor) @"compress/flate".syncFlush() (? error)
func (? *@"compress/flate".compressor) @"compress/flate".write(@"compress/flate".b []byte) (@"compress/flate".n int, @"compress/flate".err error)
func (? *@"compress/flate".compressor) @"compress/flate".writeBlock(@"compress/flate".tokens []@"compress/flate".token, @"compress/flate".index int, @"compress/flate".eof bool) (? error)
func (? *@"compress/flate".compressor) @"compress/flate".writeStoredBlock(@"compress/flate".buf []byte) (? error)
type @"compress/flate".compressionLevel struct { @"compress/flate".good int; @"compress/flate".lazy int; @"compress/flate".nice int; @"compress/flate".chain int; @"compress/flate".fastSkipHashing int }
type @"compress/flate".huffmanBitWriter struct { @"compress/flate".w @"io".Writer; @"compress/flate".bits uint32; @"compress/flate".nbits uint32; @"compress/flate".bytes [64]byte; @"compress/flate".nbytes int; @"compress/flate".literalFreq []int32; @"compress/flate".offsetFreq []int32; @"compress/flate".codegen []uint8; @"compress/flate".codegenFreq []int32; @"compress/flate".literalEncoding *@"compress/flate".huffmanEncoder; @"compress/flate".offsetEncoding *@"compress/flate".huffmanEncoder; @"compress/flate".codegenEncoding *@"compress/flate".huffmanEncoder; @"compress/flate".err error }
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".flush() ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".flushBits() ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".generateCodegen(@"compress/flate".numLiterals int, @"compress/flate".numOffsets int) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".reset(@"compress/flate".writer @"io".Writer) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeBits(@"compress/flate".b int32, @"compress/flate".nb int32) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeBlock(@"compress/flate".tokens []@"compress/flate".token, @"compress/flate".eof bool, @"compress/flate".input []byte) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeBytes(@"compress/flate".bytes []byte) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeCode(@"compress/flate".code *@"compress/flate".huffmanEncoder, @"compress/flate".literal uint32) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeDynamicHeader(@"compress/flate".numLiterals int, @"compress/flate".numOffsets int, @"compress/flate".numCodegens int, @"compress/flate".isEof bool) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeFixedHeader(@"compress/flate".isEof bool) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeStoredHeader(@"compress/flate".length int, @"compress/flate".isEof bool) ()
type @"compress/flate".token uint32
func (? @"compress/flate".token) @"compress/flate".length() (? uint32)
func (? @"compress/flate".token) @"compress/flate".literal() (? uint32)
func (? @"compress/flate".token) @"compress/flate".offset() (? uint32)
func (? @"compress/flate".token) @"compress/flate".typ() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".length() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".literal() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".offset() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".typ() (? uint32)
type @"compress/flate".huffmanEncoder struct { @"compress/flate".codeBits []uint8; @"compress/flate".code []uint16 }
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".assignEncodingAndSize(@"compress/flate".bitCount []int32, @"compress/flate".list []@"compress/flate".literalNode) ()
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".bitCounts(@"compress/flate".list []@"compress/flate".literalNode, @"compress/flate".maxBits int32) (? []int32)
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".bitLength(@"compress/flate".freq []int32) (? int64)
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".generate(@"compress/flate".freq []int32, @"compress/flate".maxBits int32) ()
type @"compress/flate".literalNode struct { @"compress/flate".literal uint16; @"compress/flate".freq int32 }
$$
#AA=$packages["bufio"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["compress/flate"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["errors"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} GG=$packages["fmt"];E    $r=G.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} DD=$packages["hash"];E    $r=D.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} EE=$packages["hash/adler32"];E    $r=E.$init($BLOCKING);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} FF=$packages["io"];E    $r=F.$init($BLOCKING);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} H��H=$pkg.reader=$newType(0,$kindStruct,"zlib.reader","reader","compress/zlib",function(r_,decompressor_,digest_,err_,scratch_){this.$val=this;this.r=r_!==undefined?r_:$ifaceNil;this.decompressor=decompressor_!==undefined?decompressor_:$ifaceNil;this.digest=digest_!==undefined?digest_:$ifaceNil;this.err=err_!==undefined?err_:$ifaceNil;this.scratch=scratch_!==undefined?scratch_:T.zero();});��U.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([F.Reader,P],[$error],false)}];�aH.init([{prop:"r",name:"r",pkg:"compress/zlib",typ:B.Reader,tag:""},{prop:"decompressor",name:"decompressor",pkg:"compress/zlib",typ:F.ReadCloser,tag:""},{prop:"digest",name:"digest",pkg:"compress/zlib",typ:D.Hash32,tag:""},{prop:"err",name:"err",pkg:"compress/zlib",typ:$error,tag:""},{prop:"scratch",name:"scratch",pkg:"compress/zlib",typ:T,tag:""}]);compress/zlib.readercompress/flate.Readercompress/zlib.reader#compress/zlib:*compress/zlib.readercompress/zlib:[4]bytecompress/zlib:[]bytehash.Hash32io.ReadCloser	io.Reader I[I=$pkg.Resetter=$newType(8,$kindInterface,"zlib.Resetter","Resetter","compress/zlib",null);XI.init([{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([F.Reader,P],[$error],false)}]);compress/zlib.Resettercompress/zlib.Resettercompress/zlib:[]byte	io.Reader L�L=$pkg.Writer=$newType(0,$kindStruct,"zlib.Writer","Writer","compress/zlib",function(w_,level_,dict_,compressor_,digest_,err_,scratch_,wroteHeader_){this.$val=this;this.w=w_!==undefined?w_:$ifaceNil;this.level=level_!==undefined?level_:0;this.dict=dict_!==undefined?dict_:P.nil;this.compressor=compressor_!==undefined?compressor_:S.nil;this.digest=digest_!==undefined?digest_:$ifaceNil;this.err=err_!==undefined?err_:$ifaceNil;this.scratch=scratch_!==undefined?scratch_:T.zero();this.wroteHeader=wroteHeader_!==undefined?wroteHeader_:false;});��Q.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([F.Writer],[],false)},{prop:"writeHeader",name:"writeHeader",pkg:"compress/zlib",typ:$funcType([],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];�L.init([{prop:"w",name:"w",pkg:"compress/zlib",typ:F.Writer,tag:""},{prop:"level",name:"level",pkg:"compress/zlib",typ:$Int,tag:""},{prop:"dict",name:"dict",pkg:"compress/zlib",typ:P,tag:""},{prop:"compressor",name:"compressor",pkg:"compress/zlib",typ:S,tag:""},{prop:"digest",name:"digest",pkg:"compress/zlib",typ:D.Hash32,tag:""},{prop:"err",name:"err",pkg:"compress/zlib",typ:$error,tag:""},{prop:"scratch",name:"scratch",pkg:"compress/zlib",typ:T,tag:""},{prop:"wroteHeader",name:"wroteHeader",pkg:"compress/zlib",typ:$Bool,tag:""}]);compress/zlib.Writercompress/zlib.Writer$compress/zlib:*compress/flate.Writer#compress/zlib:*compress/zlib.Writercompress/zlib:[4]bytecompress/zlib:[]bytehash.Hash32	io.Writer PP=$sliceType($Uint8);compress/zlib:[]byte QQ=$ptrType(L);#compress/zlib:*compress/zlib.Writercompress/zlib.Writer RR=$sliceType($emptyInterface);compress/zlib:[]interface{} SS=$ptrType(B.Writer);$compress/zlib:*compress/flate.Writercompress/flate.Writer TT=$arrayType($Uint8,4);compress/zlib:[4]byte UU=$ptrType(H);#compress/zlib:*compress/zlib.readercompress/zlib.reader compress/zlib.ErrChecksum compress/zlib.ErrDictionary compress/zlib.ErrHeader 6    $pkg.ErrChecksum=C.New("zlib: invalid checksum");compress/zlib.ErrChecksum
errors.New :    $pkg.ErrDictionary=C.New("zlib: invalid dictionary");compress/zlib.ErrDictionary
errors.New 2    $pkg.ErrHeader=C.New("zlib: invalid header");compress/zlib.ErrHeader
errors.New compress/zlib.NewReaderJAJ=$pkg.NewReader=function(a){var a;  �return K(a,P.nil);    };compress/zlib.NewReadercompress/zlib.NewReadercompress/zlib.NewReaderDictcompress/zlib:[]byte compress/zlib.NewReaderDictK��K=$pkg.NewReaderDict=function(a,b){var a,b,c,d;  	�c=new H.ptr();  	�d=c.Reset(a,b);  	�    if(!($interfaceIsEqual(d,$ifaceNil))){  	�return[$ifaceNil,d];    }  	�return[c,$ifaceNil];    };compress/zlib.NewReaderDictcompress/zlib.NewReaderDictcompress/zlib.reader (*compress/zlib.reader).Read��H.ptr.prototype.Read=function(a){var a,b=0,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p;  
	d=this;  
9    if(!($interfaceIsEqual(d.err,$ifaceNil))){  
M    e=0;f=d.err;b=e;c=f;return[b,c];    }  
a    if(a.$length===0){  
t    g=0;h=$ifaceNil;b=g;c=h;return[b,c];    }  
�i=d.decompressor.Read(a);b=i[0];c=i[1];  
�d.digest.Write($subslice(a,0,b));  
�    if(!((b===0))||!($interfaceIsEqual(c,F.EOF))){  
�d.err=c;  
�return[b,c];    }    j=F.ReadFull(d.r,$subslice(new P(d.scratch),0,4));k=j[1];    if(!($interfaceIsEqual(k,$ifaceNil))){  Zd.err=k;  h    l=0;m=k;b=l;c=m;return[b,c];    }  �n=(((((((d.scratch[0]>>>0)<<24>>>0)|((d.scratch[1]>>>0)<<16>>>0))>>>0)|((d.scratch[2]>>>0)<<8>>>0))>>>0)|(d.scratch[3]>>>0))>>>0;  '    if(!((n===d.digest.Sum32()))){  Kd.err=$pkg.ErrChecksum;  a    o=0;p=d.err;b=o;c=p;return[b,c];    }  ureturn[b,c];    };H.prototype.Read=function(a){return this.$val.Read(a);};compress/zlib.readercompress/zlib.ErrChecksumcompress/zlib.readercompress/zlib:[]byteio.EOFio.ReadFull (*compress/zlib.reader).Close��H.ptr.prototype.Close=function(){var a;  �a=this;  �    if(!($interfaceIsEqual(a.err,$ifaceNil))){  return a.err;    }  a.err=a.decompressor.Close();  <return a.err;    };H.prototype.Close=function(){return this.$val.Close();};compress/zlib.readercompress/zlib.reader (*compress/zlib.reader).Reset�H.ptr.prototype.Reset=function(a,b){var a,b,c,d,e,f,g,h,i,j,k,l,m;  Rc=this;  �  �d=$assertType(a,B.Reader,true);e=d[0];f=d[1];    if(f){  �c.r=e;    }else{  �c.r=A.NewReader(a);    }  �g=F.ReadFull(c.r,$subslice(new P(c.scratch),0,2));h=g[1];  
    if(!($interfaceIsEqual(h,$ifaceNil))){  return h;    }  +i=(((c.scratch[0]>>>0)<<8>>>0)|(c.scratch[1]>>>0))>>>0;  \    if((!((((c.scratch[0]&15)>>>0)===8)))||(!(((j=i%31,j===j?j:$throwRuntimeError("integer divide by zero"))===0)))){  �return $pkg.ErrHeader;    }  �k=!((((c.scratch[1]&32)>>>0)===0));  �    if(k){  �l=F.ReadFull(c.r,$subslice(new P(c.scratch),0,4));h=l[1];  
    if(!($interfaceIsEqual(h,$ifaceNil))){  return h;    }  .m=(((((((c.scratch[0]>>>0)<<24>>>0)|((c.scratch[1]>>>0)<<16>>>0))>>>0)|((c.scratch[2]>>>0)<<8>>>0))>>>0)|(c.scratch[3]>>>0))>>>0;  �    if(!((m===E.Checksum(b)))){  �return $pkg.ErrDictionary;    }    }  �    if($interfaceIsEqual(c.decompressor,$ifaceNil)){      if(k){  c.decompressor=B.NewReaderDict(c.r,b);    }else{  Uc.decompressor=B.NewReader(c.r);    }    }else{  �$assertType(c.decompressor,B.Resetter).Reset(c.r,b);    }  �c.digest=E.New();  �return $ifaceNil;    };H.prototype.Reset=function(a,b){return this.$val.Reset(a,b);};compress/zlib.readerbufio.NewReadercompress/flate.NewReadercompress/flate.NewReaderDictcompress/flate.Readercompress/flate.Resettercompress/zlib.ErrDictionarycompress/zlib.ErrHeadercompress/zlib.readercompress/zlib:[]bytehash/adler32.Checksumhash/adler32.Newio.ReadFull compress/zlib.NewWriterMXM=$pkg.NewWriter=function(a){var a,b,c;  wb=O(a,-1,P.nil);c=b[0];  �return c;    };compress/zlib.NewWritercompress/zlib.NewWriter compress/zlib.NewWriterLevelDictcompress/zlib:[]byte compress/zlib.NewWriterLevelNLN=$pkg.NewWriterLevel=function(a,b){var a,b;  6return O(a,b,P.nil);    };compress/zlib.NewWriterLevelcompress/zlib.NewWriterLevel compress/zlib.NewWriterLevelDictcompress/zlib:[]byte  compress/zlib.NewWriterLevelDictO�O=$pkg.NewWriterLevelDict=function(a,b,c){var a,b,c;  |    if(b<-1||b>9){  �return[Q.nil,G.Errorf("zlib: invalid compression level: %d",new R([new $Int(b)]))];    }  return[new L.ptr(a,b,c,S.nil,$ifaceNil,$ifaceNil,T.zero(),false),$ifaceNil];    }; compress/zlib.NewWriterLevelDict	compress/flate.Writer compress/zlib.NewWriterLevelDictcompress/zlib.Writer$compress/zlib:*compress/flate.Writer#compress/zlib:*compress/zlib.Writercompress/zlib:[4]bytecompress/zlib:[]bytecompress/zlib:[]interface{}
fmt.Errorf (*compress/zlib.Writer).Reset�kL.ptr.prototype.Reset=function(a){var a,b;  �b=this;  b.w=a;  D    if(!(b.compressor===S.nil)){  _b.compressor.Reset(a);    }  y    if(!($interfaceIsEqual(b.digest,$ifaceNil))){  �b.digest.Reset();    }  �b.err=$ifaceNil;  �$copy(b.scratch,T.zero(),T);  �b.wroteHeader=false;    };L.prototype.Reset=function(a){return this.$val.Reset(a);};compress/zlib.Writercompress/zlib.Writer$compress/zlib:*compress/flate.Writercompress/zlib:[4]byte #(*compress/zlib.Writer).writeHeader�L.ptr.prototype.writeHeader=function(){var a=$ifaceNil,b,c,d,e,f,g,h;  b=this;  7b.wroteHeader=true;  Ab.scratch[0]=120;  ?c=b.level;  Qif(c===0||c===1){  ^b.scratch[1]=0;      u}else if(c===2||c===3||c===4||c===5){  �b.scratch[1]=64;      �}else if(c===6||c===-1){  �b.scratch[1]=128;      �}else if(c===7||c===8||c===9){  �b.scratch[1]=192;    }else{  �$panic(new $String("unreachable"));    }      if(!(b.dict===P.nil)){  $  $b.scratch[1]=(b.scratch[1]|(32))>>>0;        }  ?  ?b.scratch[1]=b.scratch[1]+(((31-(d=((((b.scratch[0]<<16>>>16)<<8<<16>>>16)+(b.scratch[1]<<16>>>16)<<16>>>16))%31,d===d?d:$throwRuntimeError("integer divide by zero"))<<16>>>16)<<24>>>24))<<24>>>24;      �  �e=b.w.Write($subslice(new P(b.scratch),0,2));a=e[1];    if(!($interfaceIsEqual(a,$ifaceNil))){  �    a=a;return a;    }  �    if(!(b.dict===P.nil)){  .f=E.Checksum(b.dict);  Ub.scratch[0]=((f>>>24>>>0)<<24>>>24);  |b.scratch[1]=((f>>>16>>>0)<<24>>>24);  �b.scratch[2]=((f>>>8>>>0)<<24>>>24);  �b.scratch[3]=((f>>>0>>>0)<<24>>>24);  �  �g=b.w.Write($subslice(new P(b.scratch),0,4));a=g[1];    if(!($interfaceIsEqual(a,$ifaceNil))){   &    a=a;return a;    }    }   9    if(b.compressor===S.nil){   �h=B.NewWriterDict(b.w,b.level,b.dict);b.compressor=h[0];a=h[1];   �    if(!($interfaceIsEqual(a,$ifaceNil))){   �    a=a;return a;    }  !b.digest=E.New();    }  !)    a=$ifaceNil;return a;    };L.prototype.writeHeader=function(){return this.$val.writeHeader();};compress/zlib.Writercompress/zlib.writeHeader~compress/flate.NewWriterDictcompress/zlib.Writer$compress/zlib:*compress/flate.Writercompress/zlib:[]bytehash/adler32.Checksumhash/adler32.New (*compress/zlib.Writer).Write�*L.ptr.prototype.Write=function(a){var a,b=0,c=$ifaceNil,d,e,f,g,h,i;  !�d=this;  "    if(!d.wroteHeader){  "1d.err=d.writeHeader();    }  "M    if(!($interfaceIsEqual(d.err,$ifaceNil))){  "a    e=0;f=d.err;b=e;c=f;return[b,c];    }  "u    if(a.$length===0){  "�    g=0;h=$ifaceNil;b=g;c=h;return[b,c];    }  "�i=d.compressor.Write(a);b=i[0];c=i[1];  "�    if(!($interfaceIsEqual(c,$ifaceNil))){  "�d.err=c;  "�return[b,c];    }  "�d.digest.Write(a);  "�return[b,c];    };L.prototype.Write=function(a){return this.$val.Write(a);};compress/zlib.Writercompress/zlib.Writercompress/zlib.writeHeader~ (*compress/zlib.Writer).Flush�.L.ptr.prototype.Flush=function(){var a;  #Aa=this;  #]    if(!a.wroteHeader){  #sa.err=a.writeHeader();    }  #�    if(!($interfaceIsEqual(a.err,$ifaceNil))){  #�return a.err;    }  #�a.err=a.compressor.Flush();  #�return a.err;    };L.prototype.Flush=function(){return this.$val.Flush();};compress/zlib.Writercompress/zlib.Writercompress/zlib.writeHeader~ (*compress/zlib.Writer).Close�yL.ptr.prototype.Close=function(){var a,b,c;  $ma=this;  $�    if(!a.wroteHeader){  $�a.err=a.writeHeader();    }  $�    if(!($interfaceIsEqual(a.err,$ifaceNil))){  $�return a.err;    }  $�a.err=a.compressor.Close();  $�    if(!($interfaceIsEqual(a.err,$ifaceNil))){  %return a.err;    }  %#b=a.digest.Sum32();  %|a.scratch[0]=((b>>>24>>>0)<<24>>>24);  %�a.scratch[1]=((b>>>16>>>0)<<24>>>24);  %�a.scratch[2]=((b>>>8>>>0)<<24>>>24);  %�a.scratch[3]=((b>>>0>>>0)<<24>>>24);  &c=a.w.Write($subslice(new P(a.scratch),0,4));a.err=c[1];  &8return a.err;    };L.prototype.Close=function(){return this.$val.Close();};compress/zlib.Writercompress/zlib.Writercompress/zlib.writeHeader~compress/zlib:[]byte ��{"Base":9800,"Files":[{"Name":"/usr/local/go/src/compress/zlib/reader.go","Base":1,"Size":4326,"Lines":[0,55,109,159,160,163,239,265,266,333,401,414,415,435,460,495,506,507,535,536,566,589,600,603,616,617,626,635,653,663,671,687,693,695,696,718,719,725,806,858,943,999,1076,1124,1126,1127,1148,1175,1203,1229,1249,1271,1273,1274,1348,1423,1459,1485,1559,1604,1643,1645,1646,1685,1756,1838,1918,1921,1987,2040,2070,2072,2073,2138,2223,2320,2323,2393,2463,2481,2506,2523,2541,2544,2559,2561,2562,2615,2634,2652,2655,2673,2689,2692,2693,2726,2750,2780,2794,2803,2806,2807,2842,2903,2917,2933,2936,2995,3109,3144,3166,3184,3187,3195,3197,3198,3284,3317,3336,3351,3354,3386,3400,3402,3403,3460,3497,3508,3518,3545,3548,3592,3609,3622,3625,3674,3730,3749,3752,3788,3803,3847,3865,3879,3883,3998,4040,4064,4068,4071,4099,4115,4166,4177,4218,4222,4232,4283,4286,4312,4324],"Infos":null},{"Name":"/usr/local/go/src/compress/zlib/writer.go","Base":4328,"Size":5471,"Lines":[0,55,109,159,160,173,174,183,201,208,216,232,238,240,241,321,387,395,437,475,519,566,568,569,632,694,715,738,755,775,802,827,846,867,885,887,888,923,989,992,1073,1128,1166,1222,1232,1234,1235,1315,1350,1353,1427,1503,1550,1613,1655,1657,1658,1733,1751,1754,1834,1859,1939,1999,2070,2073,2090,2102,2118,2133,2141,2143,2144,2220,2300,2309,2347,2356,2395,2421,2445,2448,2470,2489,2492,2505,2528,2551,2553,2554,2593,2638,2660,2720,2825,2904,2925,3003,3045,3103,3158,3176,3188,3212,3230,3254,3267,3291,3306,3330,3340,3363,3366,3386,3411,3414,3493,3546,3559,3562,3582,3652,3691,3730,3769,3807,3845,3899,3913,3917,3920,3946,4005,4030,4094,4112,4126,4130,4157,4160,4172,4174,4175,4247,4325,4348,4402,4423,4449,4452,4471,4489,4492,4510,4526,4529,4561,4578,4592,4601,4604,4623,4631,4633,4634,4691,4724,4745,4771,4774,4793,4808,4811,4841,4855,4857,4858,4932,4991,5024,5045,5071,5074,5093,5108,5111,5141,5160,5175,5178,5208,5267,5305,5343,5380,5417,5455,5469],"Infos":null}]}
 