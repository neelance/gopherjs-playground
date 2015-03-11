p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �����crypto/randrand
bufio
crypto/aescrypto/ciphererrors#github.com/gopherjs/gopherjs/nosynciomath/bigosruntimetime�>�package rand
import io "io"
import bufio "bufio"
import aes "crypto/aes"
import cipher "crypto/cipher"
import os "os"
import runtime "runtime"
import nosync "github.com/gopherjs/gopherjs/nosync"
import time "time"
import errors "errors"
import big "math/big"
func @"".Int(@"".rand @"io".Reader, @"".max *@"math/big".Int) (@"".n *@"math/big".Int, @"".err error)
func @"".Prime(@"".rand @"io".Reader, @"".bits int) (@"".p *@"math/big".Int, @"".err error)
func @"".Read(@"".b []byte) (@"".n int, @"".err error)
var @"".Reader @"io".Reader
type @"".devReader struct { @"".name string; @"".f @"io".Reader; @"".mu @"github.com/gopherjs/gopherjs/nosync".Mutex }
func (? *@"".devReader) @"".Read(@"".b []byte) (@"".n int, @"".err error)
type @"".reader struct { @"".mu @"github.com/gopherjs/gopherjs/nosync".Mutex; @"".budget int; @"".cipher @"crypto/cipher".Block; @"".entropy @"io".Reader; @"".time [16]byte; @"".seed [16]byte; @"".dst [16]byte; @"".key [16]byte }
func (? *@"".reader) @"".Read(@"".b []byte) (@"".n int, @"".err error)
type @"io".Reader interface { @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"".n int64, @"".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"".y *@"math/big".Int) (@"".r int)
func (? *@"math/big".Int) @"math/big".Div(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".m *@"math/big".Int) (? *@"math/big".Int)
import fmt "fmt"
func (? *@"math/big".Int) @"math/big".Format(@"".s @"fmt".State, @"".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".a *@"math/big".Int, @"".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"".x *@"math/big".Int, @"".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"".text []byte, @"".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"".g *@"math/big".Int, @"".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"".a int64, @"".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"".rnd *@"math/rand".Rand, @"".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"".x *@"math/big".Int, @"".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"".s @"fmt".ScanState, @"".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"".x *@"math/big".Int, @"".i int, @"".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"".s string, @"".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"".a *@"math/big".Int, @"".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? *@"math/big".Int, ? int, ? error)
type @"github.com/gopherjs/gopherjs/nosync".Mutex struct { @"github.com/gopherjs/gopherjs/nosync".locked bool }
func (? *@"github.com/gopherjs/gopherjs/nosync".Mutex) @"github.com/gopherjs/gopherjs/nosync".Lock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".Mutex) @"github.com/gopherjs/gopherjs/nosync".Unlock() ()
type @"crypto/cipher".Block interface { @"crypto/cipher".BlockSize() (? int); @"crypto/cipher".Decrypt(@"crypto/cipher".dst []byte, @"crypto/cipher".src []byte) (); @"crypto/cipher".Encrypt(@"crypto/cipher".dst []byte, @"crypto/cipher".src []byte) () }
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"".buf []byte) (@"".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"".y @"math/big".nat) (@"".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"".s []byte, @"".charset string, @"".b @"math/big".Word, @"".ndigits int, @"".bb @"math/big".Word, @"".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"".z2 @"math/big".nat, @"".u @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"".u @"math/big".nat, @"".uIn @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"".x @"math/big".nat, @"".y @"math/big".Word) (@"".q @"math/big".nat, @"".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"".x @"math/big".Word, @"".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"".d @"math/big".Word) (@"".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"".x @"math/big".nat, @"".y @"math/big".Word, @"".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"".a uint64, @"".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"".rand *@"math/rand".Rand, @"".limit @"math/big".nat, @"".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"".x @"math/big".nat, @"".i uint, @"".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"".buf []byte) (@"".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"".y @"math/big".nat) (@"".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"".s []byte, @"".charset string, @"".b @"math/big".Word, @"".ndigits int, @"".bb @"math/big".Word, @"".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"".z2 @"math/big".nat, @"".u @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"".u @"math/big".nat, @"".uIn @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"".x @"math/big".nat, @"".y @"math/big".Word) (@"".q @"math/big".nat, @"".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"".x @"math/big".Word, @"".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"".d @"math/big".Word) (@"".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"".x @"math/big".nat, @"".y @"math/big".Word, @"".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"".a uint64, @"".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"".rand *@"math/rand".Rand, @"".limit @"math/big".nat, @"".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"".x @"math/big".nat, @"".i uint, @"".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"".c int) (? bool); @"fmt".Precision() (@"".prec int, @"".ok bool); @"fmt".Width() (@"".wid int, @"".ok bool); @"fmt".Write(@"".b []byte) (@"".ret int, @"".err error) }
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"fmt".ScanState interface { @"fmt".Read(@"".buf []byte) (@"".n int, @"".err error); @"fmt".ReadRune() (@"".r rune, @"".size int, @"".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"".skipSpace bool, @"".f func (? rune) (? bool)) (@"".token []byte, @"".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"".wid int, @"".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"".r rune, @"".size int, @"".err error); @"io".UnreadRune() (? error) }
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"".seed int64) () }
$$
BB=$packages["bufio"];a    $r=B.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["crypto/aes"];a    $r=C.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["crypto/cipher"];a    $r=D.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} II=$packages["errors"];a    $r=I.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} G3G=$packages["github.com/gopherjs/gopherjs/nosync"];a    $r=G.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["io"];a    $r=A.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} JJ=$packages["math/big"];a    $r=J.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["os"];a    $r=E.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["runtime"];a    $r=F.$init();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} HH=$packages["time"];c    $r=H.$init();$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} M��M=$pkg.devReader=$newType(0,$kindStruct,"rand.devReader","devReader","crypto/rand",function(name_,f_,mu_){this.$val=this;if(arguments.length===0){this.name="";this.f=$ifaceNil;this.mu=new G.Mutex.ptr();return;}this.name=name_;this.f=f_;this.mu=mu_;});TY.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([U],[$Int,$error],false)}];��M.init([{prop:"name",name:"name",pkg:"crypto/rand",typ:$String,tag:""},{prop:"f",name:"f",pkg:"crypto/rand",typ:A.Reader,tag:""},{prop:"mu",name:"mu",pkg:"crypto/rand",typ:G.Mutex,tag:""}]);	devReadercrypto/rand.Ucrypto/rand.Ycrypto/rand.devReader)github.com/gopherjs/gopherjs/nosync.Mutex	io.Reader P��P=$pkg.reader=$newType(0,$kindStruct,"rand.reader","reader","crypto/rand",function(mu_,budget_,cipher_,entropy_,time_,seed_,dst_,key_){this.$val=this;if(arguments.length===0){this.mu=new G.Mutex.ptr();this.budget=0;this.cipher=$ifaceNil;this.entropy=$ifaceNil;this.time=W.zero();this.seed=W.zero();this.dst=W.zero();this.key=W.zero();return;}this.mu=mu_;this.budget=budget_;this.cipher=cipher_;this.entropy=entropy_;this.time=time_;this.seed=seed_;this.dst=dst_;this.key=key_;});TZ.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([U],[$Int,$error],false)}];��P.init([{prop:"mu",name:"mu",pkg:"crypto/rand",typ:G.Mutex,tag:""},{prop:"budget",name:"budget",pkg:"crypto/rand",typ:$Int,tag:""},{prop:"cipher",name:"cipher",pkg:"crypto/rand",typ:D.Block,tag:""},{prop:"entropy",name:"entropy",pkg:"crypto/rand",typ:A.Reader,tag:""},{prop:"time",name:"time",pkg:"crypto/rand",typ:W,tag:""},{prop:"seed",name:"seed",pkg:"crypto/rand",typ:W,tag:""},{prop:"dst",name:"dst",pkg:"crypto/rand",typ:W,tag:""},{prop:"key",name:"key",pkg:"crypto/rand",typ:W,tag:""}]);readercrypto/cipher.Blockcrypto/rand.Ucrypto/rand.Wcrypto/rand.Zcrypto/rand.reader)github.com/gopherjs/gopherjs/nosync.Mutex	io.Reader UU=$sliceType($Uint8);U VV=$ptrType(E.File);Vos.File WW=$arrayType($Uint8,16);W XX=$ptrType(J.Int);Xmath/big.Int YY=$ptrType(M);Ycrypto/rand.devReader ZZ=$ptrType(P);Zcrypto/rand.reader $pkg.Reader=$ifaceNil;Readercrypto/rand.Reader NN=$throwNilPointerError;altGetRandomcrypto/rand.altGetRandom QsmallPrimes RsmallPrimesProduct :    Q=new U([3,5,7,11,13,17,19,23,29,31,37,41,43,47,53]);smallPrimescrypto/rand.Ucrypto/rand.smallPrimes D    R=new J.Int.ptr().SetUint64(new $Uint64(3793877372,820596253));crypto/rand.smallPrimesProductmath/big.Int crypto/rand.ReadK�K=$pkg.Read=function $b(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;      �    e=A.ReadFull($pkg.Reader,a);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;b=d[0];c=d[1];return[b,c];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};Readcrypto/rand.Readcrypto/rand.Readerio.ReadFull crypto/rand.initLsL=function(){var $ptr;      �  =$pkg.Reader=new M.ptr("/dev/urandom",$ifaceNil,new G.Mutex.ptr());        };	    L();crypto/rand.Readercrypto/rand.devReadercrypto/rand.init)github.com/gopherjs/gopherjs/nosync.Mutex (*crypto/rand.devReader).Read�VM.ptr.prototype.Read=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=0;c=$ifaceNil;  �d=this;      �if(!(!(N===$throwNilPointerError)&&d.name==="/dev/urandom")){e=false;$s=3;continue s;}f=N(a);$s=4;case 4:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;case 3:if(e){$s=1;continue;}$s=2;continue;    case 1:       g=a.$length;h=$ifaceNil;b=g;c=h;return[b,c];    case 2:  d.mu.Lock();  $$deferred.push([$methodVal(d.mu,"Unlock"),[]]);  9    if($interfaceIsEqual(d.f,$ifaceNil)){  Ki=E.Open(d.name);j=i[0];k=i[1];  g    if(j===V.nil){  x    l=0;m=k;b=l;c=m;return[b,c];    }  �  �d.f=B.NewReader(j);        }  �    o=d.f.Read(a);$s=5;case 5:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}n=o;b=n[0];c=n[1];return[b,c];    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return[b,c];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};M.prototype.Read=function(a){return this.$val.Read(a);};	devReaderbufio.NewReadercrypto/rand.Vcrypto/rand.altGetRandomcrypto/rand.devReaderos.Fileos.Open crypto/rand.newReaderO��O=function(a){var $ptr,a;      
L    if($interfaceIsEqual(a,$ifaceNil)){  
ba=new M.ptr("/dev/random",$ifaceNil,new G.Mutex.ptr());    }  
�return new P.ptr(new G.Mutex.ptr(),0,$ifaceNil,a,W.zero(),W.zero(),W.zero(),W.zero());    };	newReadercrypto/rand.Wcrypto/rand.devReadercrypto/rand.newReadercrypto/rand.reader)github.com/gopherjs/gopherjs/nosync.Mutex (*crypto/rand.reader).Read��P.ptr.prototype.Read=function $b(a){var $ptr,a,aa,ab,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=0;c=$ifaceNil;  �d=this;      �d.mu.Lock();  �$deferred.push([$methodVal(d.mu,"Unlock"),[]]);  �b=a.$length;  case 1:if(!(a.$length>0)){$s=2;continue;}  if(d.budget===0){$s=3;continue;}$s=4;continue;    case 3:  +f=A.ReadFull(d.entropy,$subslice(new U(d.seed),0));$s=5;case 5:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[1];  [    if(!($interfaceIsEqual(g,$ifaceNil))){  o    h=b-a.$length>>0;i=g;b=h;c=i;return[b,c];    }  �k=A.ReadFull(d.entropy,$subslice(new U(d.key),0));$s=6;case 6:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;g=j[1];  �    if(!($interfaceIsEqual(g,$ifaceNil))){  �    l=b-a.$length>>0;m=g;b=l;c=m;return[b,c];    }  �n=C.NewCipher($subslice(new U(d.key),0));d.cipher=n[0];g=n[1];      if(!($interfaceIsEqual(g,$ifaceNil))){  /    o=b-a.$length>>0;p=g;b=o;c=p;return[b,c];    }  Nd.budget=1048576;    case 4:  �  �d.budget=d.budget-(16)>>0;      Nq=H.Now().UnixNano();  ld.time[0]=($shiftRightInt64(q,56).$low<<24>>>24);  �d.time[1]=($shiftRightInt64(q,48).$low<<24>>>24);  �d.time[2]=($shiftRightInt64(q,40).$low<<24>>>24);  �d.time[3]=($shiftRightInt64(q,32).$low<<24>>>24);  �d.time[4]=($shiftRightInt64(q,24).$low<<24>>>24);  �d.time[5]=($shiftRightInt64(q,16).$low<<24>>>24);  d.time[6]=($shiftRightInt64(q,8).$low<<24>>>24);  6d.time[7]=(q.$low<<24>>>24);  M$r=d.cipher.Encrypt($subslice(new U(d.time),0),$subslice(new U(d.time),0));$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  x  |r=0;while(true){if(!(r<16)){break;}  �(u=d.dst,((r<0||r>=u.length)?$throwRuntimeError("index out of range"):u[r]=((s=d.time,((r<0||r>=s.length)?$throwRuntimeError("index out of range"):s[r]))^(t=d.seed,((r<0||r>=t.length)?$throwRuntimeError("index out of range"):t[r])))<<24>>>24));      �  �r=r+(1)>>0;    }  �$r=d.cipher.Encrypt($subslice(new U(d.dst),0),$subslice(new U(d.dst),0));$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �  �v=0;while(true){if(!(v<16)){break;}  (y=d.seed,((v<0||v>=y.length)?$throwRuntimeError("index out of range"):y[v]=((w=d.time,((v<0||v>=w.length)?$throwRuntimeError("index out of range"):w[v]))^(x=d.dst,((v<0||v>=x.length)?$throwRuntimeError("index out of range"):x[v])))<<24>>>24));        v=v+(1)>>0;    }  ?$r=d.cipher.Encrypt($subslice(new U(d.seed),0),$subslice(new U(d.seed),0));$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  kz=$copySlice(a,$subslice(new U(d.dst),0));  �a=$subslice(a,z);    $s=1;continue;case 2:  �    aa=b;ab=$ifaceNil;b=aa;c=ab;return[b,c];    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return[b,c];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};P.prototype.Read=function(a){return this.$val.Read(a);};readercrypto/aes.NewCiphercrypto/rand.Ucrypto/rand.readerio.ReadFulltime.Now crypto/rand.PrimeS�(S=$pkg.Prime=function $b(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=X.nil;d=$ifaceNil;      K    if(b<2){  [d=I.New("crypto/rand: prime size must be at least 2-bit");  �return[c,d];    }  �f=((e=b%8,e===e?e:$throwRuntimeError("integer divide by zero"))>>>0);  �    if(f===0){  �f=8;    }  �h=$makeSlice(U,(g=((b+7>>0))/8,(g===g&&g!==1/0&&g!==-1/0)?g>>0:$throwRuntimeError("integer divide by zero")));  �c=new J.Int.ptr();  i=new J.Int.ptr();  )case 1:  1k=A.ReadFull(a,h);$s=3;case 3:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;d=j[1];  U    if(!($interfaceIsEqual(d,$ifaceNil))){  h    l=X.nil;m=d;c=l;d=m;return[c,d];    }  �  �(0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0]=((0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0])&(((((n=f,n<32?(1<<n):0)>>0)-1>>0)<<24>>>24)))>>>0);      �    if(f>=2){  �  �(0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0]=((0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0])|(((o=((f-2>>>0)),o<32?(3<<o):0)<<24>>>24)))>>>0);        }else{  L  L(0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0]=((0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0])|(1))>>>0);      ]    if(h.$length>1){  u  u(1>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+1]=((1>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+1])|(128))>>>0);        }    }  �    p=h.$length-1>>0;  �((p<0||p>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+p]=(((p<0||p>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+p])|(1))>>>0);      �c.SetBytes(h);  i.Mod(c,R);  ;q=i.Uint64();  T  a  er=new $Uint64(0,0);NextDelta:while(true){if(!((r.$high<0||(r.$high===0&&r.$low<1048576)))){break;}  �s=new $Uint64(q.$high+r.$high,q.$low+r.$low);  �t=Q;u=0;while(true){if(!(u<t.$length)){break;}v=((u<0||u>=t.$length)?$throwRuntimeError("index out of range"):t.$array[t.$offset+u]);  �    if((w=$div64(s,new $Uint64(0,v),true),(w.$high===0&&w.$low===0))&&(b>6||!((x=new $Uint64(0,v),(s.$high===x.$high&&s.$low===x.$low))))){    �  �r=(y=new $Uint64(0,2),new $Uint64(r.$high+y.$high,r.$low+y.$low));    continue NextDelta;    }    u++;}  9    if((r.$high>0||(r.$high===0&&r.$low>0))){  Li.SetUint64(r);  hc.Add(c,i);    }  �break;    }  z=c.ProbablyPrime(20);$s=6;case 6:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}if(z&&(c.BitLen()===b)){$s=4;continue;}$s=5;continue;    case 4:  Jreturn[c,d];    case 5:    $s=1;continue;case 2:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};Primecrypto/rand.Primecrypto/rand.Ucrypto/rand.Xcrypto/rand.smallPrimescrypto/rand.smallPrimesProduct
errors.Newio.ReadFullmath/big.Int crypto/rand.IntT��T=$pkg.Int=function $b(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=X.nil;d=$ifaceNil;      �    if(b.Sign()<=0){  �$panic(new $String("crypto/rand: argument to Int is <= 0"));    }  0f=(e=((b.BitLen()+7>>0))/8,(e===e&&e!==1/0&&e!==-1/0)?e>>0:$throwRuntimeError("integer divide by zero"));  �h=((g=b.BitLen()%8,g===g?g:$throwRuntimeError("integer divide by zero"))>>>0);  �    if(h===0){  �h=8;    }  �i=$makeSlice(U,f);  �c=new J.Int.ptr();  �case 1:  �k=A.ReadFull(a,i);$s=3;case 3:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;d=j[1];      if(!($interfaceIsEqual(d,$ifaceNil))){  1    l=X.nil;m=d;c=l;d=m;return[c,d];    }  �  �(0>=i.$length?$throwRuntimeError("index out of range"):i.$array[i.$offset+0]=((0>=i.$length?$throwRuntimeError("index out of range"):i.$array[i.$offset+0])&(((((n=h,n<32?(1<<n):0)>>0)-1>>0)<<24>>>24)))>>>0);      �c.SetBytes(i);  �    if(c.Cmp(b)<0){  �return[c,d];    }    $s=1;continue;case 2:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.$s=$s;$f.$r=$r;return $f;};Intcrypto/rand.Intcrypto/rand.Ucrypto/rand.Xio.ReadFullmath/big.Int ��{"Base":7944,"Files":[{"Name":"/usr/local/go/src/crypto/rand/rand.go","Base":1,"Size":709,"Lines":[0,56,110,160,161,215,249,262,263,275,276,338,373,430,489,510,511,582,635,676,707],"Infos":null},{"Name":"/usr/local/go/src/crypto/rand/rand_unix.go","Base":711,"Size":3549,"Lines":[0,56,110,160,161,236,237,290,304,305,318,319,328,337,351,368,374,380,391,399,407,409,410,447,448,496,547,548,562,592,618,628,671,674,676,677,740,764,777,793,810,812,813,881,910,950,951,1007,1079,1100,1103,1116,1137,1154,1182,1198,1215,1219,1250,1261,1272,1300,1304,1307,1327,1329,1330,1383,1427,1428,1483,1544,1603,1654,1711,1770,1773,1829,1878,1924,1945,1989,1992,2026,2028,2029,2050,2083,2150,2185,2217,2259,2261,2262,2315,2328,2349,2361,2362,2380,2401,2449,2468,2495,2500,2546,2565,2592,2597,2641,2660,2687,2692,2745,2749,2777,2778,2848,2853,2872,2895,2922,2949,2979,3008,3037,3066,3095,3124,3153,3181,3204,3247,3286,3322,3326,3367,3406,3442,3446,3489,3490,3516,3528,3531,3532,3547],"Infos":null},{"Name":"/usr/local/go/src/crypto/rand/util.go","Base":4261,"Size":3682,"Lines":[0,56,110,160,161,174,175,184,194,200,212,214,215,290,367,446,525,549,576,634,636,637,717,795,865,880,950,951,1021,1047,1126,1189,1204,1273,1282,1285,1286,1307,1320,1328,1331,1332,1367,1385,1386,1410,1411,1418,1454,1472,1491,1495,1496,1577,1612,1691,1752,1818,1860,1874,1902,1913,1956,1973,1996,2017,2022,2026,2105,2132,2133,2153,2154,2220,2286,2352,2416,2452,2477,2478,2490,2544,2564,2603,2669,2693,2699,2704,2705,2723,2751,2772,2777,2786,2790,2791,2857,2918,2929,2978,2988,2992,2995,2997,2998,3072,3137,3159,3207,3210,3239,3240,3305,3334,3347,3355,3358,3359,3385,3403,3404,3411,3447,3465,3484,3488,3489,3551,3585,3620,3621,3641,3663,3673,3677,3680],"Infos":null}]}
 