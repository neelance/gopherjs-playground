p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �1���	go/formatformatbytesfmtgo/ast	go/parser
go/printergo/tokeniostrings��package format
import bytes "bytes"
import fmt "fmt"
import ast "go/ast"
import parser "go/parser"
import printer "go/printer"
import token "go/token"
import io "io"
import strings "strings"
func @"".Node(@"".dst @"io".Writer, @"".fset *@"go/token".FileSet, @"".node interface {  }) (? error)
func @"".Source(@"".src []byte) (? []byte, ? error)
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
import nosync "github.com/gopherjs/gopherjs/nosync"
type @"go/token".FileSet struct { @"go/token".mutex @"github.com/gopherjs/gopherjs/nosync".RWMutex; @"go/token".base int; @"go/token".files []*@"go/token".File; @"go/token".last *@"go/token".File }
func (? *@"go/token".FileSet) @"go/token".AddFile(@"go/token".filename string, @"go/token".base int, @"go/token".size int) (? *@"go/token".File)
func (? *@"go/token".FileSet) @"go/token".Base() (? int)
func (? *@"go/token".FileSet) @"go/token".File(@"go/token".p @"go/token".Pos) (@"go/token".f *@"go/token".File)
func (? *@"go/token".FileSet) @"go/token".Iterate(@"go/token".f func (? *@"go/token".File) (? bool)) ()
func (? *@"go/token".FileSet) @"go/token".Position(@"go/token".p @"go/token".Pos) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".FileSet) @"go/token".PositionFor(@"go/token".p @"go/token".Pos, @"go/token".adjusted bool) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".FileSet) @"go/token".Read(@"go/token".decode func (? interface {  }) (? error)) (? error)
func (? *@"go/token".FileSet) @"go/token".Write(@"go/token".encode func (? interface {  }) (? error)) (? error)
func (? *@"go/token".FileSet) @"go/token".file(@"go/token".p @"go/token".Pos) (? *@"go/token".File)
type @"github.com/gopherjs/gopherjs/nosync".RWMutex struct { @"github.com/gopherjs/gopherjs/nosync".writeLocked bool; @"github.com/gopherjs/gopherjs/nosync".readLockCounter int }
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".Lock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".RLock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".RUnlock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".Unlock() ()
type @"go/token".File struct { @"go/token".set *@"go/token".FileSet; @"go/token".name string; @"go/token".base int; @"go/token".size int; @"go/token".lines []int; @"go/token".infos []@"go/token".lineInfo }
func (? *@"go/token".File) @"go/token".AddLine(@"go/token".offset int) ()
func (? *@"go/token".File) @"go/token".AddLineInfo(@"go/token".offset int, @"go/token".filename string, @"go/token".line int) ()
func (? *@"go/token".File) @"go/token".Base() (? int)
func (? *@"go/token".File) @"go/token".Line(@"go/token".p @"go/token".Pos) (? int)
func (? *@"go/token".File) @"go/token".LineCount() (? int)
func (? *@"go/token".File) @"go/token".MergeLine(@"go/token".line int) ()
func (? *@"go/token".File) @"go/token".Name() (? string)
func (? *@"go/token".File) @"go/token".Offset(@"go/token".p @"go/token".Pos) (? int)
func (? *@"go/token".File) @"go/token".Pos(@"go/token".offset int) (? @"go/token".Pos)
func (? *@"go/token".File) @"go/token".Position(@"go/token".p @"go/token".Pos) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".File) @"go/token".PositionFor(@"go/token".p @"go/token".Pos, @"go/token".adjusted bool) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".File) @"go/token".SetLines(@"go/token".lines []int) (? bool)
func (? *@"go/token".File) @"go/token".SetLinesForContent(@"go/token".content []byte) ()
func (? *@"go/token".File) @"go/token".Size() (? int)
func (? *@"go/token".File) @"go/token".position(@"go/token".p @"go/token".Pos, @"go/token".adjusted bool) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".File) @"go/token".unpack(@"go/token".offset int, @"go/token".adjusted bool) (@"go/token".filename string, @"go/token".line int, @"go/token".column int)
type @"go/token".Pos int
func (? @"go/token".Pos) @"go/token".IsValid() (? bool)
func (? *@"go/token".Pos) @"go/token".IsValid() (? bool)
type @"go/token".Position struct { @"go/token".Filename string; @"go/token".Offset int; @"go/token".Line int; @"go/token".Column int }
func (? @"go/token".Position) @"go/token".String() (? string)
func (? *@"go/token".Position) @"go/token".IsValid() (? bool)
func (? *@"go/token".Position) @"go/token".String() (? string)
type @"go/token".lineInfo struct { @"go/token".Offset int; @"go/token".Filename string; @"go/token".Line int }
$$
AA=$packages["bytes"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["fmt"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["go/ast"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} DD=$packages["go/parser"];E    $r=D.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} EE=$packages["go/printer"];E    $r=E.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} FF=$packages["go/token"];E    $r=F.$init($BLOCKING);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} GG=$packages["io"];E    $r=G.$init($BLOCKING);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} HH=$packages["strings"];E    $r=H.$init($BLOCKING);$s=8;case 8:if($r&&$r.$blocking){$r=$r();} PP=$ptrType(C.File);go/format:*go/ast.Filego/ast.File QQ=$ptrType(E.CommentedNode);#go/format:*go/printer.CommentedNodego/printer.CommentedNode RR=$sliceType($emptyInterface);go/format:[]interface{} SS=$ptrType(C.CommentGroup);go/format:*go/ast.CommentGroupgo/ast.CommentGroup TT=$sliceType(S); go/format:[]*go/ast.CommentGroupgo/format:*go/ast.CommentGroup UU=$sliceType($Uint8);go/format:[]byte VV=$ptrType(C.GenDecl);go/format:*go/ast.GenDeclgo/ast.GenDecl Igo/format.config     I=new E.Config.ptr(6,8,0);go/format.configgo/format.configgo/printer.Config go/format.NodeJ�J=$pkg.Node=function(a,b,c){var a,b,c,d,e,f,g,h,i,j,k,l,m;  �  �d=P.nil;  �  �e=Q.nil;  �g=c;  �if($assertType(g,P,true)[1]){f=g.$val;  d=f;      }else if($assertType(g,Q,true)[1]){f=g.$val;  *  -h=$assertType(f.Node,P,true);i=h[0];j=h[1];    if(j){  Rd=i;  ^e=f;    }    }  �    if(!(d===P.nil)&&L(d)){  ,  0k=$clone(new A.Buffer.ptr(),A.Buffer);  Cl=I.Fprint(k,b,d);  l    if(!($interfaceIsEqual(l,$ifaceNil))){  return l;    }  �m=D.ParseFile(b,"",k.Bytes(),4);d=m[0];l=m[1];  �    if(!($interfaceIsEqual(l,$ifaceNil))){  (return B.Errorf("format.Node internal error (%s)",new R([l]));    }  hC.SortImports(b,d);  �c=d;  �    if(!(e===Q.nil)){  �c=new E.CommentedNode.ptr(d,e.Comments);    }    }  return I.Fprint(a,b,c);    };go/format.Nodebytes.Buffer
fmt.Errorfgo/ast.CommentGroupgo/ast.Filego/ast.SortImportsgo/format.Nodego/format.configgo/format.hasUnsortedImportsgo/format:*go/ast.CommentGroupgo/format:*go/ast.File#go/format:*go/printer.CommentedNode go/format:[]*go/ast.CommentGroupgo/format:[]interface{}go/parser.ParseFilego/printer.CommentedNode go/format.SourceK�'K=$pkg.Source=function(a){var a,b,c,d,e,f,g;  
b=F.NewFileSet();  
�c=M(b,"",a,true);d=c[0];e=c[1];f=c[2];g=c[3];  
�    if(!($interfaceIsEqual(g,$ifaceNil))){  
�return[U.nil,g];    }      if(e===$throwNilPointerError){  _C.SortImports(b,d);    }  �return N(b,d,e,f,a,I);    };go/format.Sourcego/ast.SortImportsgo/format.Sourcego/format.configgo/format.formatgo/format.parsego/format:[]bytego/token.NewFileSet go/format.hasUnsortedImportsL�{L=function(a){var a,b,c,d,e,f,g;  �b=a.Decls;c=0;while(true){if(!(c<b.$length)){break;}d=((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]);  e=$assertType(d,V,true);f=e[0];g=e[1];  -    if(!g||!((f.Tok===75))){  �return false;    }  �    if(new F.Pos(f.Lparen).IsValid()){  @return true;    }    c++;}  �return false;    };go/format.hasUnsortedImportsgo/ast.GenDeclgo/format.hasUnsortedImportsgo/format:*go/ast.GenDeclgo/token.Pos go/format.parseM��M=function(a,b,c,d){var a,b,c,d,e=P.nil,f=$throwNilPointerError,g=0,h=$ifaceNil,i,j,k,l,m;  i=D.ParseFile(a,b,c,4);e=i[0];h=i[1];      if($interfaceIsEqual(h,$ifaceNil)||!d||!H.Contains(h.Error(),"expected 'package'")){  ureturn[e,f,g,h];    }  >j=$appendSlice(new U($stringToBytes("package p;")),c);  lk=D.ParseFile(a,b,j,4);e=k[0];h=k[1];  �    if($interfaceIsEqual(h,$ifaceNil)){  �f=(function(l,m){var l,m;  <l=$subslice(l,(m+10>>0));  ereturn A.TrimSpace(l);    });  �return[e,f,g,h];    }  1    if(!H.Contains(h.Error(),"expected declaration")){  oreturn[e,f,g,h];    }  �l=$append($appendSlice(new U($stringToBytes("package p; func _() {")),c),10,125);  �m=D.ParseFile(a,b,l,4);e=m[0];h=m[1];      if($interfaceIsEqual(h,$ifaceNil)){  !f=(function(n,o){var n,o;  y    if(o<0){  �o=0;    }  *n=$subslice(n,((2*o>>0)+21>>0));  an=$subslice(n,0,(n.$length-((o+3>>0))>>0));  �return A.TrimSpace(n);    });  g=-1;    }  Breturn[e,f,g,h];    };go/format.parsebytes.TrimSpacego/format.parsego/format:*go/ast.Filego/format:[]bytego/parser.ParseFilestrings.Contains go/format.formatN�N=function(a,b,c,d,e,f){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;  kf=$clone(f,E.Config);  �    if(c===$throwNilPointerError){  �  �g=$clone(new A.Buffer.ptr(),A.Buffer);  �h=f.Fprint(g,a,b);      if(!($interfaceIsEqual(h,$ifaceNil))){  return[U.nil,h];    }  -return[g.Bytes(),$ifaceNil];    }  �i=0;j=0;k=i;l=j;  �while(true){if(!(l<e.$length&&O(((l<0||l>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+l])))){break;}  �    if(((l<0||l>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+l])===10){  �k=l+1>>0;    }    l=l+(1)>>0;        }    "m=U.nil;  .m=$appendSlice(m,$subslice(e,0,k));  �n=0;  �o=false;  p=$subslice(e,k,l);q=0;while(true){if(!(q<p.$length)){break;}r=((q<0||q>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+q]);  #s=r;  0if(s===32){  =o=true;      O}else if(s===9){  ]  ]n=n+(1)>>0;        }    q++;}  n    if((n===0)&&o){  �n=1;    }  �  �t=0;while(true){if(!(t<n)){break;}  �m=$append(m,9);      �  �t=t+(1)>>0;    }  %f.Indent=n+d>>0;  F  Ju=$clone(new A.Buffer.ptr(),A.Buffer);  \v=f.Fprint(u,a,b);  �    if(!($interfaceIsEqual(v,$ifaceNil))){  �return[U.nil,v];    }  �m=$appendSlice(m,c(u.Bytes(),f.Indent));  k=e.$length;  while(true){if(!(k>0&&O((w=k-1>>0,((w<0||w>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+w]))))){break;}  <  <k=k-(1)>>0;        }  Dreturn[$appendSlice(m,$subslice(e,k)),$ifaceNil];    };go/format.formatbytes.Buffergo/format.formatgo/format.isSpacego/format:[]bytego/printer.Config go/format.isSpaceOLO=function(a){var a;  �return(a===32)||(a===9)||(a===10)||(a===13);    };go/format.isSpacego/format.isSpace ��{"Base":7874,"Files":[{"Name":"/usr/local/go/src/go/format/format.go","Base":1,"Size":7872,"Lines":[0,55,109,159,160,223,238,239,248,257,264,274,287,301,313,319,330,332,333,419,420,460,461,537,540,612,685,755,827,896,899,970,1042,1045,1117,1180,1200,1234,1261,1278,1289,1319,1358,1370,1383,1387,1390,1391,1422,1468,1536,1577,1600,1641,1659,1673,1677,1743,1761,1828,1889,1893,1923,1924,1963,1977,1997,2068,2072,2075,2076,2115,2117,2118,2188,2258,2329,2332,2406,2482,2559,2640,2643,2685,2713,2776,2793,2811,2814,2815,2838,2865,2908,2938,2941,2942,3004,3006,3007,3054,3086,3114,3150,3198,3230,3246,3250,3276,3331,3388,3403,3407,3453,3456,3470,3472,3473,3553,3574,3577,3648,3715,3718,3774,3775,3832,3888,3968,3985,4033,4049,4061,4065,4095,4158,4249,4311,4378,4466,4475,4478,4479,4536,4571,4633,4668,4714,4778,4795,4847,4880,4920,4961,4992,4996,5005,5008,5069,5127,5167,5228,5237,5240,5241,5296,5351,5408,5470,5505,5581,5645,5662,5714,5749,5768,5783,5788,5815,5857,5926,5981,6027,6058,6062,6120,6153,6170,6173,6174,6208,6216,6218,6219,6289,6358,6376,6389,6411,6428,6476,6492,6505,6526,6546,6569,6596,6619,6657,6675,6694,6698,6724,6727,6728,6753,6794,6808,6847,6869,6927,6931,6937,6940,6956,6987,6988,7046,7095,7138,7151,7170,7200,7213,7225,7244,7257,7269,7273,7276,7306,7319,7322,7353,7379,7382,7383,7406,7459,7492,7514,7551,7568,7586,7589,7647,7648,7689,7703,7737,7743,7746,7783,7785,7786,7814,7870],"Infos":null}]}
 