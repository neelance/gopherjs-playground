p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ��(��os/execexec
byteserrorsioospath/filepathruntimestrconvstringssyncsyscall�AApackage exec
import bytes "bytes"
import errors "errors"
import io "io"
import os "os"
import filepath "path/filepath"
import runtime "runtime"
import strconv "strconv"
import strings "strings"
import sync "sync"
import syscall "syscall"
type @"".Cmd struct { @"".Path string; @"".Args []string; @"".Env []string; @"".Dir string; @"".Stdin @"io".Reader; @"".Stdout @"io".Writer; @"".Stderr @"io".Writer; @"".ExtraFiles []*@"os".File; @"".SysProcAttr *@"syscall".SysProcAttr; @"".Process *@"os".Process; @"".ProcessState *@"os".ProcessState; @"".lookPathErr error; @"".finished bool; @"".childFiles []*@"os".File; @"".closeAfterStart []@"io".Closer; @"".closeAfterWait []@"io".Closer; @"".goroutine []func () (? error); @"".errch chan error }
func (? *@"".Cmd) @"".CombinedOutput() (? []byte, ? error)
func (? *@"".Cmd) @"".Output() (? []byte, ? error)
func (? *@"".Cmd) @"".Run() (? error)
func (? *@"".Cmd) @"".Start() (? error)
func (? *@"".Cmd) @"".StderrPipe() (? @"io".ReadCloser, ? error)
func (? *@"".Cmd) @"".StdinPipe() (? @"io".WriteCloser, ? error)
func (? *@"".Cmd) @"".StdoutPipe() (? @"io".ReadCloser, ? error)
func (? *@"".Cmd) @"".Wait() (? error)
func (? *@"".Cmd) @"".argv() (? []string)
func (? *@"".Cmd) @"".closeDescriptors(@"".closers []@"io".Closer) ()
func (? *@"".Cmd) @"".envv() (? []string)
func (? *@"".Cmd) @"".stderr() (@"".f *@"os".File, @"".err error)
func (? *@"".Cmd) @"".stdin() (@"".f *@"os".File, @"".err error)
func (? *@"".Cmd) @"".stdout() (@"".f *@"os".File, @"".err error)
func (? *@"".Cmd) @"".writerDescriptor(@"".w @"io".Writer) (@"".f *@"os".File, @"".err error)
func @"".Command(@"".name string, @"".arg ...string) (? *@"".Cmd)
var @"".ErrNotFound error
type @"".Error struct { @"".Name string; @"".Err error }
func (? *@"".Error) @"".Error() (? string)
type @"".ExitError struct { ? *@"os".ProcessState }
func (? *@"".ExitError) @"".Error() (? string)
func @"".LookPath(@"".file string) (? string, ? error)
type @"".closeOnce struct { ? *@"os".File; @"".once @"sync".Once; @"".err error }
func (? *@"".closeOnce) @"".Close() (? error)
func (? *@"".closeOnce) @"".close() ()
type @"io".Reader interface { @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"io".Writer interface { @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"os".File struct { ? *@"os".file }
func (? *@"os".File) @"os".Chdir() (? error)
func (? *@"os".File) @"os".Chmod(@"".mode @"os".FileMode) (? error)
func (? *@"os".File) @"os".Chown(@"".uid int, @"".gid int) (? error)
func (? *@"os".File) @"os".Close() (? error)
func (? *@"os".File) @"os".Fd() (? uintptr)
func (? *@"os".File) @"os".Name() (? string)
func (? *@"os".File) @"os".Read(@"".b []byte) (@"".n int, @"".err error)
func (? *@"os".File) @"os".ReadAt(@"".b []byte, @"".off int64) (@"".n int, @"".err error)
func (? *@"os".File) @"os".Readdir(@"".n int) (@"".fi []@"os".FileInfo, @"".err error)
func (? *@"os".File) @"os".Readdirnames(@"".n int) (@"".names []string, @"".err error)
func (? *@"os".File) @"os".Seek(@"".offset int64, @"".whence int) (@"".ret int64, @"".err error)
func (? *@"os".File) @"os".Stat() (@"".fi @"os".FileInfo, @"".err error)
func (? *@"os".File) @"os".Sync() (@"".err error)
func (? *@"os".File) @"os".Truncate(@"".size int64) (? error)
func (? *@"os".File) @"os".Write(@"".b []byte) (@"".n int, @"".err error)
func (? *@"os".File) @"os".WriteAt(@"".b []byte, @"".off int64) (@"".n int, @"".err error)
func (? *@"os".File) @"os".WriteString(@"".s string) (@"".ret int, @"".err error)
func (? *@"os".File) @"os".pread(@"".b []byte, @"".off int64) (@"".n int, @"".err error)
func (? *@"os".File) @"os".pwrite(@"".b []byte, @"".off int64) (@"".n int, @"".err error)
func (? *@"os".File) @"os".read(@"".b []byte) (@"".n int, @"".err error)
func (? *@"os".File) @"os".readdir(@"".n int) (@"".fi []@"os".FileInfo, @"".err error)
func (? *@"os".File) @"os".readdirnames(@"".n int) (@"".names []string, @"".err error)
func (? *@"os".File) @"os".seek(@"".offset int64, @"".whence int) (@"".ret int64, @"".err error)
func (? *@"os".File) @"os".write(@"".b []byte) (@"".n int, @"".err error)
type @"syscall".SysProcAttr struct { @"syscall".Chroot string; @"syscall".Credential *@"syscall".Credential; @"syscall".Ptrace bool; @"syscall".Setsid bool; @"syscall".Setpgid bool; @"syscall".Setctty bool; @"syscall".Noctty bool }
type @"os".Process struct { @"os".Pid int; @"os".handle uintptr; @"os".isdone uint32 }
func (? *@"os".Process) @"os".Kill() (? error)
func (? *@"os".Process) @"os".Release() (? error)
func (? *@"os".Process) @"os".Signal(@"".sig @"os".Signal) (? error)
func (? *@"os".Process) @"os".Wait() (? *@"os".ProcessState, ? error)
func (? *@"os".Process) @"os".done() (? bool)
func (? *@"os".Process) @"os".kill() (? error)
func (? *@"os".Process) @"os".release() (? error)
func (? *@"os".Process) @"os".setDone() ()
func (? *@"os".Process) @"os".signal(@"".sig @"os".Signal) (? error)
func (? *@"os".Process) @"os".wait() (@"".ps *@"os".ProcessState, @"".err error)
type @"os".ProcessState struct { @"os".pid int; @"os".status @"syscall".WaitStatus; @"os".rusage *@"syscall".Rusage }
func (? *@"os".ProcessState) @"os".Exited() (? bool)
func (? *@"os".ProcessState) @"os".Pid() (? int)
func (? *@"os".ProcessState) @"os".String() (? string)
func (? *@"os".ProcessState) @"os".Success() (? bool)
func (? *@"os".ProcessState) @"os".Sys() (? interface {  })
func (? *@"os".ProcessState) @"os".SysUsage() (? interface {  })
import time "time"
func (? *@"os".ProcessState) @"os".SystemTime() (? @"time".Duration)
func (? *@"os".ProcessState) @"os".UserTime() (? @"time".Duration)
func (? *@"os".ProcessState) @"os".exited() (? bool)
func (? *@"os".ProcessState) @"os".success() (? bool)
func (? *@"os".ProcessState) @"os".sys() (? interface {  })
func (? *@"os".ProcessState) @"os".sysUsage() (? interface {  })
func (? *@"os".ProcessState) @"os".systemTime() (? @"time".Duration)
func (? *@"os".ProcessState) @"os".userTime() (? @"time".Duration)
type @"io".Closer interface { @"io".Close() (? error) }
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"sync".Once struct { @"sync".m @"sync".Mutex; @"sync".done uint32 }
func (? *@"sync".Once) @"sync".Do(@"".f func () ()) ()
type @"os".file struct { @"os".fd int; @"os".name string; @"os".dirinfo *@"os".dirInfo; @"os".nepipe int32 }
func (? *@"os".file) @"os".close() (? error)
type @"os".FileMode uint32
func (? @"os".FileMode) @"os".IsDir() (? bool)
func (? @"os".FileMode) @"os".IsRegular() (? bool)
func (? @"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? @"os".FileMode) @"os".String() (? string)
func (? *@"os".FileMode) @"os".IsDir() (? bool)
func (? *@"os".FileMode) @"os".IsRegular() (? bool)
func (? *@"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? *@"os".FileMode) @"os".String() (? string)
type @"os".FileInfo interface { @"os".IsDir() (? bool); @"os".ModTime() (? @"time".Time); @"os".Mode() (? @"os".FileMode); @"os".Name() (? string); @"os".Size() (? int64); @"os".Sys() (? interface {  }) }
type @"syscall".Credential struct { @"syscall".Uid uint32; @"syscall".Gid uint32; @"syscall".Groups []uint32 }
type @"os".Signal interface { @"os".Signal() (); @"os".String() (? string) }
type @"syscall".WaitStatus uint32
func (? @"syscall".WaitStatus) @"syscall".Continued() (? bool)
func (? @"syscall".WaitStatus) @"syscall".CoreDump() (? bool)
func (? @"syscall".WaitStatus) @"syscall".ExitStatus() (? int)
func (? @"syscall".WaitStatus) @"syscall".Exited() (? bool)
func (? @"syscall".WaitStatus) @"syscall".Signal() (? @"syscall".Signal)
func (? @"syscall".WaitStatus) @"syscall".Signaled() (? bool)
func (? @"syscall".WaitStatus) @"syscall".StopSignal() (? @"syscall".Signal)
func (? @"syscall".WaitStatus) @"syscall".Stopped() (? bool)
func (? @"syscall".WaitStatus) @"syscall".TrapCause() (? int)
func (? *@"syscall".WaitStatus) @"syscall".Continued() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".CoreDump() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".ExitStatus() (? int)
func (? *@"syscall".WaitStatus) @"syscall".Exited() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".Signal() (? @"syscall".Signal)
func (? *@"syscall".WaitStatus) @"syscall".Signaled() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".StopSignal() (? @"syscall".Signal)
func (? *@"syscall".WaitStatus) @"syscall".Stopped() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".TrapCause() (? int)
type @"syscall".Rusage struct { @"syscall".Utime @"syscall".Timeval; @"syscall".Stime @"syscall".Timeval; @"syscall".Maxrss int64; @"syscall".Ixrss int64; @"syscall".Idrss int64; @"syscall".Isrss int64; @"syscall".Minflt int64; @"syscall".Majflt int64; @"syscall".Nswap int64; @"syscall".Inblock int64; @"syscall".Oublock int64; @"syscall".Msgsnd int64; @"syscall".Msgrcv int64; @"syscall".Nsignals int64; @"syscall".Nvcsw int64; @"syscall".Nivcsw int64 }
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
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"os".dirInfo struct { @"os".buf []byte; @"os".nbuf int; @"os".bufp int }
type @"time".Time struct { @"time".sec int64; @"time".nsec int32; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"".years int, @"".months int, @"".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"".hour int, @"".min int, @"".sec int)
func (? @"time".Time) @"time".Date() (@"".year int, @"".month @"time".Month, @"".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"".year int, @"".week int)
func (? @"time".Time) @"time".In(@"".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"".name string, @"".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"".full bool) (@"".year int, @"".month @"time".Month, @"".day int, @"".yday int)
func (? @"time".Time) @"time".locabs() (@"".name string, @"".offset int, @"".abs uint64)
func (? *@"time".Time) @"time".Add(@"".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"".years int, @"".months int, @"".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"".hour int, @"".min int, @"".sec int)
func (? *@"time".Time) @"time".Date() (@"".year int, @"".month @"time".Month, @"".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"".year int, @"".week int)
func (? *@"time".Time) @"time".In(@"".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"".data []byte) (@"".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"".data []byte) (@"".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"".name string, @"".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"".full bool) (@"".year int, @"".month @"time".Month, @"".day int, @"".yday int)
func (? *@"time".Time) @"time".locabs() (@"".name string, @"".offset int, @"".abs uint64)
type @"syscall".Signal int
func (? @"syscall".Signal) @"syscall".Signal() ()
func (? @"syscall".Signal) @"syscall".String() (? string)
func (? *@"syscall".Signal) @"syscall".Signal() ()
func (? *@"syscall".Signal) @"syscall".String() (? string)
type @"syscall".Timeval struct { @"syscall".Sec int64; @"syscall".Usec int32; @"syscall".Pad_cgo_0 [4]byte }
func (? *@"syscall".Timeval) @"syscall".Nano() (? int64)
func (? *@"syscall".Timeval) @"syscall".Unix() (@"".sec int64, @"".nsec int64)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"".sec int64) (@"".name string, @"".offset int, @"".isDST bool, @"".start int64, @"".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"".name string, @"".unix int64) (@"".offset int, @"".isDST bool, @"".ok bool)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
9AA=$packages["bytes"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["errors"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["io"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["os"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["path/filepath"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["runtime"];a    $r=F.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["strconv"];a    $r=G.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} HH=$packages["strings"];a    $r=H.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} II=$packages["sync"];a    $r=I.$init();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} JJ=$packages["syscall"];c    $r=J.$init();$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} K��K=$pkg.Error=$newType(0,$kindStruct,"exec.Error","Error","os/exec",function(Name_,Err_){this.$val=this;if(arguments.length===0){this.Name="";this.Err=$ifaceNil;return;}this.Name=Name_;this.Err=Err_;});RAH.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];oK.init([{prop:"Name",name:"Name",pkg:"",typ:$String,tag:""},{prop:"Err",name:"Err",pkg:"",typ:$error,tag:""}]);Error
os/exec.AHos/exec.Error L�NL=$pkg.Cmd=$newType(0,$kindStruct,"exec.Cmd","Cmd","os/exec",function(Path_,Args_,Env_,Dir_,Stdin_,Stdout_,Stderr_,ExtraFiles_,SysProcAttr_,Process_,ProcessState_,lookPathErr_,finished_,childFiles_,closeAfterStart_,closeAfterWait_,goroutine_,errch_){this.$val=this;if(arguments.length===0){this.Path="";this.Args=T.nil;this.Env=T.nil;this.Dir="";this.Stdin=$ifaceNil;this.Stdout=$ifaceNil;this.Stderr=$ifaceNil;this.ExtraFiles=V.nil;this.SysProcAttr=W.nil;this.Process=X.nil;this.ProcessState=Y.nil;this.lookPathErr=$ifaceNil;this.finished=false;this.childFiles=V.nil;this.closeAfterStart=Z.nil;this.closeAfterWait=Z.nil;this.goroutine=AB.nil;this.errch=AC.nil;return;}this.Path=Path_;this.Args=Args_;this.Env=Env_;this.Dir=Dir_;this.Stdin=Stdin_;this.Stdout=Stdout_;this.Stderr=Stderr_;this.ExtraFiles=ExtraFiles_;this.SysProcAttr=SysProcAttr_;this.Process=Process_;this.ProcessState=ProcessState_;this.lookPathErr=lookPathErr_;this.finished=finished_;this.childFiles=childFiles_;this.closeAfterStart=closeAfterStart_;this.closeAfterWait=closeAfterWait_;this.goroutine=goroutine_;this.errch=errch_;});��AF.methods=[{prop:"envv",name:"envv",pkg:"os/exec",typ:$funcType([],[T],false)},{prop:"argv",name:"argv",pkg:"os/exec",typ:$funcType([],[T],false)},{prop:"stdin",name:"stdin",pkg:"os/exec",typ:$funcType([],[U,$error],false)},{prop:"stdout",name:"stdout",pkg:"os/exec",typ:$funcType([],[U,$error],false)},{prop:"stderr",name:"stderr",pkg:"os/exec",typ:$funcType([],[U,$error],false)},{prop:"writerDescriptor",name:"writerDescriptor",pkg:"os/exec",typ:$funcType([C.Writer],[U,$error],false)},{prop:"closeDescriptors",name:"closeDescriptors",pkg:"os/exec",typ:$funcType([Z],[],false)},{prop:"Run",name:"Run",pkg:"",typ:$funcType([],[$error],false)},{prop:"Start",name:"Start",pkg:"",typ:$funcType([],[$error],false)},{prop:"Wait",name:"Wait",pkg:"",typ:$funcType([],[$error],false)},{prop:"Output",name:"Output",pkg:"",typ:$funcType([],[AG,$error],false)},{prop:"CombinedOutput",name:"CombinedOutput",pkg:"",typ:$funcType([],[AG,$error],false)},{prop:"StdinPipe",name:"StdinPipe",pkg:"",typ:$funcType([],[C.WriteCloser,$error],false)},{prop:"StdoutPipe",name:"StdoutPipe",pkg:"",typ:$funcType([],[C.ReadCloser,$error],false)},{prop:"StderrPipe",name:"StderrPipe",pkg:"",typ:$funcType([],[C.ReadCloser,$error],false)}];�1L.init([{prop:"Path",name:"Path",pkg:"",typ:$String,tag:""},{prop:"Args",name:"Args",pkg:"",typ:T,tag:""},{prop:"Env",name:"Env",pkg:"",typ:T,tag:""},{prop:"Dir",name:"Dir",pkg:"",typ:$String,tag:""},{prop:"Stdin",name:"Stdin",pkg:"",typ:C.Reader,tag:""},{prop:"Stdout",name:"Stdout",pkg:"",typ:C.Writer,tag:""},{prop:"Stderr",name:"Stderr",pkg:"",typ:C.Writer,tag:""},{prop:"ExtraFiles",name:"ExtraFiles",pkg:"",typ:V,tag:""},{prop:"SysProcAttr",name:"SysProcAttr",pkg:"",typ:W,tag:""},{prop:"Process",name:"Process",pkg:"",typ:X,tag:""},{prop:"ProcessState",name:"ProcessState",pkg:"",typ:Y,tag:""},{prop:"lookPathErr",name:"lookPathErr",pkg:"os/exec",typ:$error,tag:""},{prop:"finished",name:"finished",pkg:"os/exec",typ:$Bool,tag:""},{prop:"childFiles",name:"childFiles",pkg:"os/exec",typ:V,tag:""},{prop:"closeAfterStart",name:"closeAfterStart",pkg:"os/exec",typ:Z,tag:""},{prop:"closeAfterWait",name:"closeAfterWait",pkg:"os/exec",typ:Z,tag:""},{prop:"goroutine",name:"goroutine",pkg:"os/exec",typ:AB,tag:""},{prop:"errch",name:"errch",pkg:"os/exec",typ:AC,tag:""}]);Cmdio.ReadCloser	io.Readerio.WriteCloser	io.Writer
os/exec.AB
os/exec.AC
os/exec.AF
os/exec.AGos/exec.Cmd	os/exec.T	os/exec.U	os/exec.V	os/exec.W	os/exec.X	os/exec.Y	os/exec.Z P��P=$pkg.ExitError=$newType(0,$kindStruct,"exec.ExitError","ExitError","os/exec",function(ProcessState_){this.$val=this;if(arguments.length===0){this.ProcessState=Y.nil;return;}this.ProcessState=ProcessState_;});RAI.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];<P.init([{prop:"ProcessState",name:"",pkg:"",typ:Y,tag:""}]);	ExitError
os/exec.AIos/exec.ExitError	os/exec.Y Q�	Q=$pkg.closeOnce=$newType(0,$kindStruct,"exec.closeOnce","closeOnce","os/exec",function(File_,once_,err_){this.$val=this;if(arguments.length===0){this.File=U.nil;this.once=new I.Once.ptr();this.err=$ifaceNil;return;}this.File=File_;this.once=once_;this.err=err_;});��AJ.methods=[{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"close",name:"close",pkg:"os/exec",typ:$funcType([],[],false)}];��Q.init([{prop:"File",name:"",pkg:"",typ:U,tag:""},{prop:"once",name:"once",pkg:"os/exec",typ:I.Once,tag:""},{prop:"err",name:"err",pkg:"os/exec",typ:$error,tag:""}]);	closeOnce
os/exec.AJ	os/exec.Uos/exec.closeOnce	sync.Once AD5AD=$newType(4,$kindFunc,"exec.F","F","os/exec",null);AD.init([AF],[U,$error],false);F
os/exec.AF	os/exec.U TT=$sliceType($String);T UU=$ptrType(D.File);Uos.File VV=$sliceType(U);V	os/exec.U WW=$ptrType(J.SysProcAttr);Wsyscall.SysProcAttr XX=$ptrType(D.Process);X
os.Process YY=$ptrType(D.ProcessState);Yos.ProcessState ZZ=$sliceType(C.Closer);Z	io.Closer AA AA=$funcType([],[$error],false);AA ABAB=$sliceType(AA);AB
os/exec.AA AC!AC=$chanType($error,false,false);AC AEAE=$sliceType(AD);AE AFAF=$ptrType(L);AFos/exec.Cmd AGAG=$sliceType($Uint8);AG AHAH=$ptrType(K);AHos/exec.Error AIAI=$ptrType(P);AIos/exec.ExitError AJAJ=$ptrType(Q);AJos/exec.closeOnce ErrNotFound B    $pkg.ErrNotFound=B.New("executable file not found in $PATH");
errors.Newos/exec.ErrNotFound (*os/exec.Error).Error�K.ptr.prototype.Error=function $b(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Ya=this;      ub=a.Err.Error();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return"exec: "+G.Quote(a.Name)+": "+b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.Error=function(){return this.$val.Error();};Erroros/exec.Errorstrconv.Quote os/exec.CommandM��M=$pkg.Command=function $b(a,b){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      rc=new L.ptr(a,$appendSlice(new T([a]),b),T.nil,"",$ifaceNil,$ifaceNil,$ifaceNil,V.nil,W.nil,X.nil,Y.nil,$ifaceNil,false,V.nil,Z.nil,Z.nil,AB.nil,AC.nil);  �if(E.Base(a)===a){$s=1;continue;}$s=2;continue;    case 1:  �  �e=S(a);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];if(!($interfaceIsEqual(g,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  
c.lookPathErr=g;    $s=6;continue;case 5:  .c.Path=f;    case 6:    case 2:  Dreturn c;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};Command	io.Closeros.File
os.Processos.ProcessState
os/exec.AA
os/exec.AB
os/exec.ACos/exec.Cmdos/exec.Commandos/exec.LookPath	os/exec.T	os/exec.U	os/exec.V	os/exec.W	os/exec.X	os/exec.Y	os/exec.Zpath/filepath.Basesyscall.SysProcAttr os/exec.interfaceEqualN�dN=function(a,b){var $ptr,a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);      �$deferred.push([(function(){var $ptr;      $recover();    }),[]]);   return $interfaceIsEqual(a,b);    }catch(err){$err=err;return false;}finally{$callDeferred($deferred,$err);}};interfaceEqualos/exec.interfaceEqual (*os/exec.Cmd).envv�/L.ptr.prototype.envv=function $b(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  7a=this;      R    if(!(a.Env===T.nil)){  freturn a.Env;    }  wb=D.Environ();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.envv=function(){return this.$val.envv();};Cmdenvv~
os.Environos/exec.Cmd	os/exec.T (*os/exec.Cmd).argv��L.ptr.prototype.argv=function(){var $ptr,a;  �a=this;      �    if(a.Args.$length>0){  �return a.Args;    }  �return new T([a.Path]);    };L.prototype.argv=function(){return this.$val.argv();};Cmdargv~os/exec.Cmd	os/exec.T (*os/exec.Cmd).stdin��L.ptr.prototype.stdin=function $b(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=[a];b=[b];c=U.nil;d=$ifaceNil;  �b[0]=this;      $    if($interfaceIsEqual(b[0].Stdin,$ifaceNil)){  :e=D.Open("/dev/null");c=e[0];d=e[1];  Y    if(!($interfaceIsEqual(d,$ifaceNil))){  lreturn[c,d];    }  yb[0].closeAfterStart=$append(b[0].closeAfterStart,c);  �return[c,d];    }  �  �f=$assertType(b[0].Stdin,U,true);g=f[0];h=f[1];    if(h){  �    i=g;j=$ifaceNil;c=i;d=j;return[c,d];    }  �l=D.Pipe();$s=1;case 1:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;m=k[0];a[0]=k[1];d=k[2];      if(!($interfaceIsEqual(d,$ifaceNil))){  return[c,d];    }  *b[0].closeAfterStart=$append(b[0].closeAfterStart,m);  ]b[0].closeAfterWait=$append(b[0].closeAfterWait,a[0]);  �b[0].goroutine=$append(b[0].goroutine,(function(a,b){return function $b(){var $ptr,n,o,p,q,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;n=$f.n;o=$f.o;p=$f.p;q=$f.q;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      �o=C.Copy(a[0],b[0].Stdin);$s=1;case 1:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}n=o;p=n[1];  �  �q=a[0].Close();    if($interfaceIsEqual(p,$ifaceNil)){  	p=q;    }  return p;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.$s=$s;$f.$r=$r;return $f;};})(a,b));  *    n=m;o=$ifaceNil;c=n;d=o;return[c,d];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.stdin=function(){return this.$val.stdin();};Cmdstdin~io.Copyos.Openos.Pipeos/exec.Cmd	os/exec.U (*os/exec.Cmd).stdout�mL.ptr.prototype.stdout=function $b(){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=U.nil;b=$ifaceNil;  Bc=this;      n    e=c.writerDescriptor(c.Stdout);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;a=d[0];b=d[1];return[a,b];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.stdout=function(){return this.$val.stdout();};Cmdstdout~os/exec.Cmd	os/exec.Uos/exec.writerDescriptor~ (*os/exec.Cmd).stderr�{L.ptr.prototype.stderr=function $b(){var $ptr,a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=U.nil;b=$ifaceNil;  �c=this;      �    if(!($interfaceIsEqual(c.Stderr,$ifaceNil))&&N(c.Stderr,c.Stdout)){      d=(e=c.childFiles,(1>=e.$length?$throwRuntimeError("index out of range"):e.$array[e.$offset+1]));f=$ifaceNil;a=d;b=f;return[a,b];    }  $    h=c.writerDescriptor(c.Stderr);$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;a=g[0];b=g[1];return[a,b];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.stderr=function(){return this.$val.stderr();};Cmdstderr~os/exec.Cmd	os/exec.Uos/exec.interfaceEqualos/exec.writerDescriptor~ (*os/exec.Cmd).writerDescriptor�}L.ptr.prototype.writerDescriptor=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=[a];b=[b];c=U.nil;d=$ifaceNil;  Qe=this;      �    if($interfaceIsEqual(a[0],$ifaceNil)){  �f=D.OpenFile("/dev/null",1,0);c=f[0];d=f[1];  �    if(!($interfaceIsEqual(d,$ifaceNil))){  �return[c,d];    }  �e.closeAfterStart=$append(e.closeAfterStart,c);  (return[c,d];    }  4  7g=$assertType(a[0],U,true);h=g[0];i=g[1];    if(i){  U    j=h;k=$ifaceNil;c=j;d=k;return[c,d];    }  hm=D.Pipe();$s=1;case 1:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}l=m;b[0]=l[0];n=l[1];d=l[2];  �    if(!($interfaceIsEqual(d,$ifaceNil))){  �return[c,d];    }  �e.closeAfterStart=$append(e.closeAfterStart,n);  �e.closeAfterWait=$append(e.closeAfterWait,b[0]);  e.goroutine=$append(e.goroutine,(function(a,b){return function $b(){var $ptr,o,p,q,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;o=$f.o;p=$f.p;q=$f.q;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      7p=C.Copy(a[0],b[0]);$s=1;case 1:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}o=p;q=o[1];  Rreturn q;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.o=o;$f.p=p;$f.q=q;$f.$s=$s;$f.$r=$r;return $f;};})(a,b));  b    o=n;p=$ifaceNil;c=o;d=p;return[c,d];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.writerDescriptor=function(a){return this.$val.writerDescriptor(a);};CmdwriterDescriptor~io.Copyos.OpenFileos.Pipeos/exec.Cmd	os/exec.U (*os/exec.Cmd).closeDescriptors�L.ptr.prototype.closeDescriptors=function $b(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  zb=this;      �c=a;d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  �f=e.Close();$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;    d++;$s=1;continue;case 2:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.closeDescriptors=function(a){return this.$val.closeDescriptors(a);};CmdcloseDescriptors~os/exec.Cmd (*os/exec.Cmd).Run��L.ptr.prototype.Run=function $b(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Sa=this;      j  mb=a.Start();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  �return c;    case 3:  �d=a.Wait();$s=4;case 4:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}return d;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Run=function(){return this.$val.Run();};Cmdos/exec.Cmd os/exec.lookExtensionsO�:O=function $b(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      �    if(E.Base(a)===a){  �a=E.Join(new T([".",a]));    }  �if(b===""){$s=1;continue;}$s=2;continue;    case 1:  c=S(a);$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}return c;    case 2:   if(!(E.VolumeName(a)==="")){$s=4;continue;}$s=5;continue;    case 4:  Gd=S(a);$s=6;case 6:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}return d;    case 5:  aif(a.length>1&&D.IsPathSeparator(a.charCodeAt(0))){$s=7;continue;}$s=8;continue;    case 7:  �e=S(a);$s=9;case 9:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}return e;    case 8:  �f=E.Join(new T([b,a]));  h=S(f);$s=10;case 10:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;i=g[0];j=g[1];  2    if(!($interfaceIsEqual(j,$ifaceNil))){  Dreturn["",j];    }  Wk=H.TrimPrefix(i,f);  �return[a+k,$ifaceNil];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};lookExtensionsos.IsPathSeparatoros/exec.LookPath	os/exec.Tos/exec.lookExtensionspath/filepath.Basepath/filepath.Joinpath/filepath.VolumeNamestrings.TrimPrefix (*os/exec.Cmd).Start��L.ptr.prototype.Start=function $b(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=[a];  Za[0]=this;      sif(!($interfaceIsEqual(a[0].lookPathErr,$ifaceNil))){$s=1;continue;}$s=2;continue;    case 1:  �$r=a[0].closeDescriptors(a[0].closeAfterStart);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �$r=a[0].closeDescriptors(a[0].closeAfterWait);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �return a[0].lookPathErr;    case 2:  �  �    if(!(a[0].Process===X.nil)){  �return B.New("exec: already started");    }    5b=new AE([$methodExpr(AF.prototype.stdin),$methodExpr(AF.prototype.stdout),$methodExpr(AF.prototype.stderr)]);c=0;case 5:if(!(c<b.$length)){$s=6;continue;}d=((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]);  �f=d(a[0]);$s=7;case 7:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];h=e[1];  �if(!($interfaceIsEqual(h,$ifaceNil))){$s=8;continue;}$s=9;continue;    case 8:  �$r=a[0].closeDescriptors(a[0].closeAfterStart);$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �$r=a[0].closeDescriptors(a[0].closeAfterWait);$s=11;case 11:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �return h;    case 9:   a[0].childFiles=$append(a[0].childFiles,g);    c++;$s=5;continue;case 6:   :a[0].childFiles=$appendSlice(a[0].childFiles,a[0].ExtraFiles);   q   ui=$ifaceNil;   �k=a[0].Path;l=a[0].argv();m=a[0].envv();$s=12;case 12:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=new D.ProcAttr.ptr(a[0].Dir,m,a[0].childFiles,a[0].SysProcAttr);o=D.StartProcess(k,l,n);$s=13;case 13:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}j=o;a[0].Process=j[0];i=j[1];  !if(!($interfaceIsEqual(i,$ifaceNil))){$s=14;continue;}$s=15;continue;    case 14:  !*$r=a[0].closeDescriptors(a[0].closeAfterStart);$s=16;case 16:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  !R$r=a[0].closeDescriptors(a[0].closeAfterWait);$s=17;case 17:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  !yreturn i;    case 15:  !�$r=a[0].closeDescriptors(a[0].closeAfterStart);$s=18;case 18:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  !�a[0].errch=new AC(a[0].goroutine.$length);  !�p=a[0].goroutine;q=0;while(true){if(!(q<p.$length)){break;}r=((q<0||q>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+q]);  "$go((function(a){return function $b(s){var $ptr,s,t,u,v,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;s=$f.s;t=$f.t;u=$f.u;v=$f.v;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      "     t=a[0].errch;u=s();$s=1;case 1:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}v=u;$r=$send(t,v);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.$s=$s;$f.$r=$r;return $f;};})(a),[r]);    q++;}  "=return $ifaceNil;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Start=function(){return this.$val.Start();};Cmd
errors.Newos.ProcAttros.StartProcess
os/exec.AC
os/exec.AE
os/exec.AFos/exec.Cmd	os/exec.F	os/exec.T	os/exec.V	os/exec.W	os/exec.Xos/exec.argv~os/exec.closeDescriptors~os/exec.envv~os/exec.stderr~os/exec.stdin~os/exec.stdout~ (*os/exec.ExitError).Error��P.ptr.prototype.Error=function(){var $ptr,a;  "�a=this;      "�return a.ProcessState.String();    };P.prototype.Error=function(){return this.$val.Error();};	ExitErroros/exec.ExitError (*os/exec.Cmd).Wait�^L.ptr.prototype.Wait=function $b(){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  $�a=this;      $�    if(a.Process===X.nil){  $�return B.New("exec: not started");    }  %    if(a.finished){  %'return B.New("exec: Wait was already called");    }  %^a.finished=true;  %qb=a.Process.Wait();c=b[0];d=b[1];  %�a.ProcessState=c;  %�  %�e=$ifaceNil;  %�f=a.goroutine;g=0;case 1:if(!(g<f.$length)){$s=2;continue;}  %�  %�h=$recv(a.errch);$s=3;case 3:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}i=h[0];if(!($interfaceIsEqual(i,$ifaceNil))&&$interfaceIsEqual(e,$ifaceNil)){$s=4;continue;}$s=5;continue;    case 4:  &e=i;    case 5:    g++;$s=1;continue;case 2:  &+$r=a.closeDescriptors(a.closeAfterWait);$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  &R    if(!($interfaceIsEqual(d,$ifaceNil))){  &dreturn d;        }else if(!c.Success()){  &�return new P.ptr(c);    }  &�return e;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Wait=function(){return this.$val.Wait();};Cmd
errors.Newos/exec.Cmdos/exec.ExitError	os/exec.Xos/exec.closeDescriptors~ (*os/exec.Cmd).Output��L.ptr.prototype.Output=function $b(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  'a=this;      ''    if(!($interfaceIsEqual(a.Stdout,$ifaceNil))){  '>return[AG.nil,B.New("exec: Stdout already set")];    }  'u  'yb=$clone(new A.Buffer.ptr(),A.Buffer);  '�a.Stdout=b;  '�c=a.Run();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  '�return[b.Bytes(),d];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Output=function(){return this.$val.Output();};Cmdbytes.Buffer
errors.New
os/exec.AGos/exec.Cmd (*os/exec.Cmd).CombinedOutput�|L.ptr.prototype.CombinedOutput=function $b(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  (*a=this;      (V    if(!($interfaceIsEqual(a.Stdout,$ifaceNil))){  (mreturn[AG.nil,B.New("exec: Stdout already set")];    }  (�    if(!($interfaceIsEqual(a.Stderr,$ifaceNil))){  (�return[AG.nil,B.New("exec: Stderr already set")];    }  (�  (�b=$clone(new A.Buffer.ptr(),A.Buffer);  )a.Stdout=b;  )a.Stderr=b;  )$c=a.Run();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  )4return[b.Bytes(),d];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.CombinedOutput=function(){return this.$val.CombinedOutput();};Cmdbytes.Buffer
errors.New
os/exec.AGos/exec.Cmd (*os/exec.Cmd).StdinPipe�SL.ptr.prototype.StdinPipe=function $b(){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  *�a=this;      *�    if(!($interfaceIsEqual(a.Stdin,$ifaceNil))){  +return[$ifaceNil,B.New("exec: Stdin already set")];    }  +F    if(!(a.Process===X.nil)){  +^return[$ifaceNil,B.New("exec: StdinPipe after process started")];    }  +�c=D.Pipe();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];f=b[2];  +�    if(!($interfaceIsEqual(f,$ifaceNil))){  +�return[$ifaceNil,f];    }  +�a.Stdin=d;  +�a.closeAfterStart=$append(a.closeAfterStart,d);  ,#g=new Q.ptr(e,new I.Once.ptr(),$ifaceNil);  ,?a.closeAfterWait=$append(a.closeAfterWait,g);  ,preturn[g,$ifaceNil];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.StdinPipe=function(){return this.$val.StdinPipe();};Cmd
errors.Newos.Pipeos/exec.Cmd	os/exec.U	os/exec.Xos/exec.closeOnce	sync.Once (*os/exec.closeOnce).Close�Q.ptr.prototype.Close=function $b(){var $ptr,a,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  ,�a=this;      ,�$r=a.once.Do($methodVal(a,"close"));$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  ,�return a.err;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Close=function(){return this.$val.Close();};	closeOnceos/exec.closeOnceos/exec.close~ (*os/exec.closeOnce).close��Q.ptr.prototype.close=function(){var $ptr,a;  -a=this;      -,a.err=a.File.Close();    };Q.prototype.close=function(){return this.$val.close();};	closeOnceclose~os/exec.closeOnce (*os/exec.Cmd).StdoutPipe�L.ptr.prototype.StdoutPipe=function $b(){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  /a=this;      /C    if(!($interfaceIsEqual(a.Stdout,$ifaceNil))){  /Zreturn[$ifaceNil,B.New("exec: Stdout already set")];    }  /�    if(!(a.Process===X.nil)){  /�return[$ifaceNil,B.New("exec: StdoutPipe after process started")];    }  /�c=D.Pipe();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];f=b[2];  0    if(!($interfaceIsEqual(f,$ifaceNil))){  0return[$ifaceNil,f];    }  0.a.Stdout=e;  0=a.closeAfterStart=$append(a.closeAfterStart,e);  0pa.closeAfterWait=$append(a.closeAfterWait,d);  0�return[d,$ifaceNil];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.StdoutPipe=function(){return this.$val.StdoutPipe();};Cmd
errors.Newos.Pipeos/exec.Cmd	os/exec.X (*os/exec.Cmd).StderrPipe�L.ptr.prototype.StderrPipe=function $b(){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  2�a=this;      2�    if(!($interfaceIsEqual(a.Stderr,$ifaceNil))){  2�return[$ifaceNil,B.New("exec: Stderr already set")];    }  3    if(!(a.Process===X.nil)){  3return[$ifaceNil,B.New("exec: StderrPipe after process started")];    }  3dc=D.Pipe();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];f=b[2];  3~    if(!($interfaceIsEqual(f,$ifaceNil))){  3�return[$ifaceNil,f];    }  3�a.Stderr=e;  3�a.closeAfterStart=$append(a.closeAfterStart,e);  3�a.closeAfterWait=$append(a.closeAfterWait,d);  4return[d,$ifaceNil];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.StderrPipe=function(){return this.$val.StderrPipe();};Cmd
errors.Newos.Pipeos/exec.Cmd	os/exec.X os/exec.findExecutableR��R=function $b(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      6b=D.Stat(a);c=b[0];d=b[1];  6&    if(!($interfaceIsEqual(d,$ifaceNil))){  68return d;    }  6G  6Je=c.Mode();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;if(!new D.FileMode(f).IsDir()&&!((((f&73)>>>0)===0))){$s=2;continue;}$s=3;continue;    case 2:  6wreturn $ifaceNil;    case 3:  6�return D.ErrPermission;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};findExecutableos.ErrPermissionos.FileModeos.Statos/exec.findExecutable os/exec.LookPathS��S=$pkg.LookPath=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      8�if(H.Contains(a,"/")){$s=1;continue;}$s=2;continue;    case 1:  8�b=R(a);$s=3;case 3:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  8�    if($interfaceIsEqual(c,$ifaceNil)){  8�return[a,$ifaceNil];    }  9return["",new K.ptr(a,c)];    case 2:  9#d=D.Getenv("PATH");$s=4;case 4:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;  9A    if(e===""){  9Vreturn["",new K.ptr(a,$pkg.ErrNotFound)];    }  9f=H.Split(e,":");g=0;case 5:if(!(g<f.$length)){$s=6;continue;}h=((g<0||g>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+g]);  9�    if(h===""){  9�h=".";    }  :i=h+"/"+a;  :&  :)j=R(i);$s=7;case 7:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=j;if($interfaceIsEqual(k,$ifaceNil)){$s=8;continue;}$s=9;continue;    case 8:  :Vreturn[i,$ifaceNil];    case 9:    g++;$s=5;continue;case 6:  :oreturn["",new K.ptr(a,$pkg.ErrNotFound)];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};LookPath	os.Getenvos/exec.ErrNotFoundos/exec.Erroros/exec.LookPathos/exec.findExecutablestrings.Containsstrings.Split ��{"Base":14999,"Files":[{"Name":"/usr/local/go/src/os/exec/exec.go","Base":1,"Size":13351,"Lines":[0,55,109,159,160,236,310,326,339,340,349,358,368,374,380,397,408,419,430,438,449,451,452,517,546,566,579,591,593,594,627,691,693,694,755,773,817,821,879,936,948,961,962,1035,1091,1095,1162,1177,1178,1228,1291,1305,1306,1362,1422,1463,1475,1476,1526,1600,1671,1698,1760,1829,1903,1969,2045,2062,2063,2134,2138,2207,2244,2248,2306,2347,2365,2383,2384,2454,2527,2596,2600,2675,2708,2731,2732,2802,2871,2905,2906,2959,2980,2981,3044,3087,3118,3119,3169,3216,3244,3273,3302,3334,3388,3390,3391,3459,3483,3486,3547,3550,3615,3685,3703,3706,3776,3842,3904,3952,3966,3980,4020,4023,4057,4102,4127,4138,4155,4159,4162,4174,4176,4177,4248,4304,4349,4365,4377,4382,4397,4399,4400,4432,4451,4466,4469,4490,4492,4493,4525,4547,4563,4566,4591,4593,4594,4642,4663,4694,4712,4722,4726,4777,4786,4789,4790,4828,4844,4847,4848,4874,4891,4900,4903,4904,4955,5004,5054,5087,5125,5139,5143,5156,5160,5176,5178,5179,5228,5265,5267,5268,5317,5377,5407,5410,5447,5449,5450,5520,5535,5586,5604,5614,5618,5669,5678,5681,5682,5714,5730,5733,5734,5760,5777,5786,5789,5790,5841,5890,5940,5967,5980,5984,6000,6002,6003,6057,6087,6100,6103,6105,6106,6172,6175,6241,6306,6317,6320,6389,6446,6476,6504,6539,6552,6555,6572,6574,6575,6639,6690,6772,6828,6862,6896,6899,6915,6939,6942,6980,7004,7007,7058,7082,7085,7125,7183,7216,7233,7250,7253,7296,7320,7322,7323,7399,7402,7480,7507,7537,7564,7604,7643,7666,7669,7701,7744,7762,7803,7843,7857,7861,7875,7878,7901,7946,7949,7950,7987,8062,8086,8104,8145,8185,8199,8203,8245,8248,8302,8303,8318,8384,8400,8423,8442,8466,8470,8487,8527,8566,8579,8582,8583,8622,8623,8669,8703,8732,8751,8759,8762,8763,8775,8777,8778,8837,8861,8879,8881,8882,8919,8951,8953,8954,8993,9032,9035,9101,9166,9177,9180,9249,9306,9336,9339,9395,9424,9447,9488,9491,9508,9561,9564,9583,9615,9639,9640,9661,9686,9742,9761,9765,9768,9769,9807,9808,9825,9838,9868,9895,9898,9899,9917,9919,9920,9980,10021,10043,10096,10099,10119,10134,10150,10173,10175,10176,10245,10275,10324,10346,10399,10402,10424,10477,10480,10500,10515,10530,10546,10569,10571,10572,10640,10683,10758,10826,10902,10948,11000,11021,11073,11076,11099,11165,11168,11194,11211,11229,11232,11246,11297,11325,11374,11390,11392,11393,11417,11427,11428,11444,11456,11458,11459,11495,11515,11529,11531,11532,11562,11586,11588,11589,11658,11702,11705,11780,11851,11930,12005,12045,12097,12119,12172,12175,12198,12265,12268,12294,12311,12329,12332,12347,12398,12447,12463,12465,12466,12535,12578,12581,12656,12727,12806,12880,12931,12983,13005,13058,13061,13084,13151,13154,13180,13197,13215,13218,13233,13284,13333,13349],"Infos":null},{"Name":"/usr/local/go/src/os/exec/lp_unix.go","Base":13353,"Size":1645,"Lines":[0,56,110,160,161,230,231,244,245,254,264,270,281,283,284,374,441,442,483,508,525,538,541,588,601,604,629,631,632,689,751,832,915,960,1020,1082,1132,1133,1167,1197,1215,1235,1239,1270,1273,1303,1323,1362,1365,1416,1433,1487,1500,1504,1531,1578,1598,1602,1605,1643],"Infos":null}]}
 