p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �q��net/http/httptesthttptestbytes
crypto/tlsflagfmtnetnet/httpossync��package httptest
import bytes "bytes"
import http "net/http"
import tls "crypto/tls"
import flag "flag"
import fmt "fmt"
import net "net"
import os "os"
import sync "sync"
const @"".DefaultRemoteAddr = "1.2.3.4"
func @"".NewRecorder() (? *@"".ResponseRecorder)
func @"".NewServer(@"".handler @"net/http".Handler) (? *@"".Server)
func @"".NewTLSServer(@"".handler @"net/http".Handler) (? *@"".Server)
func @"".NewUnstartedServer(@"".handler @"net/http".Handler) (? *@"".Server)
type @"".ResponseRecorder struct { @"".Code int; @"".HeaderMap @"net/http".Header; @"".Body *@"bytes".Buffer; @"".Flushed bool; @"".wroteHeader bool }
func (? *@"".ResponseRecorder) @"".Flush() ()
func (? *@"".ResponseRecorder) @"".Header() (? @"net/http".Header)
func (? *@"".ResponseRecorder) @"".Write(@"".buf []byte) (? int, ? error)
func (? *@"".ResponseRecorder) @"".WriteHeader(@"".code int) ()
type @"".Server struct { @"".URL string; @"".Listener @"net".Listener; @"".TLS *@"crypto/tls".Config; @"".Config *@"net/http".Server; @"".wg @"sync".WaitGroup }
func (? *@"".Server) @"".Close() ()
func (? *@"".Server) @"".CloseClientConnections() ()
func (? *@"".Server) @"".Start() ()
func (? *@"".Server) @"".StartTLS() ()
func (? *@"".Server) @"".wrapHandler() ()
type @"".historyListener struct { ? @"net".Listener; ? @"sync".Mutex; @"".history []@"net".Conn }
func (? *@"".historyListener) @"".Accept() (@"".c @"net".Conn, @"".err error)
type @"".waitGroupHandler struct { @"".s *@"".Server; @"".h @"net/http".Handler }
func (? *@"".waitGroupHandler) @"".ServeHTTP(@"".w @"net/http".ResponseWriter, @"".r *@"net/http".Request) ()
type @"net/http".Handler interface { @"net/http".ServeHTTP(? @"net/http".ResponseWriter, ? *@"net/http".Request) () }
type @"net/http".Header map[string][]string
func (? @"net/http".Header) @"net/http".Add(@"net/http".key string, @"net/http".value string) ()
func (? @"net/http".Header) @"net/http".Del(@"net/http".key string) ()
func (? @"net/http".Header) @"net/http".Get(@"net/http".key string) (? string)
func (? @"net/http".Header) @"net/http".Set(@"net/http".key string, @"net/http".value string) ()
import io "io"
func (? @"net/http".Header) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? @"net/http".Header) @"net/http".WriteSubset(@"net/http".w @"io".Writer, @"net/http".exclude map[string]bool) (? error)
func (? @"net/http".Header) @"net/http".clone() (? @"net/http".Header)
func (? @"net/http".Header) @"net/http".get(@"net/http".key string) (? string)
func (? @"net/http".Header) @"net/http".sortedKeyValues(@"net/http".exclude map[string]bool) (@"net/http".kvs []@"net/http".keyValues, @"net/http".hs *@"net/http".headerSorter)
func (? *@"net/http".Header) @"net/http".Add(@"net/http".key string, @"net/http".value string) ()
func (? *@"net/http".Header) @"net/http".Del(@"net/http".key string) ()
func (? *@"net/http".Header) @"net/http".Get(@"net/http".key string) (? string)
func (? *@"net/http".Header) @"net/http".Set(@"net/http".key string, @"net/http".value string) ()
func (? *@"net/http".Header) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Header) @"net/http".WriteSubset(@"net/http".w @"io".Writer, @"net/http".exclude map[string]bool) (? error)
func (? *@"net/http".Header) @"net/http".clone() (? @"net/http".Header)
func (? *@"net/http".Header) @"net/http".get(@"net/http".key string) (? string)
func (? *@"net/http".Header) @"net/http".sortedKeyValues(@"net/http".exclude map[string]bool) (@"net/http".kvs []@"net/http".keyValues, @"net/http".hs *@"net/http".headerSorter)
type @"bytes".Buffer struct { @"bytes".buf []byte; @"bytes".off int; @"bytes".runeBytes [4]byte; @"bytes".bootstrap [64]byte; @"bytes".lastRead @"bytes".readOp }
func (? *@"bytes".Buffer) @"bytes".Bytes() (? []byte)
func (? *@"bytes".Buffer) @"bytes".Grow(@"".n int) ()
func (? *@"bytes".Buffer) @"bytes".Len() (? int)
func (? *@"bytes".Buffer) @"bytes".Next(@"".n int) (? []byte)
func (? *@"bytes".Buffer) @"bytes".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"bytes".Buffer) @"bytes".ReadByte() (@"".c byte, @"".err error)
func (? *@"bytes".Buffer) @"bytes".ReadBytes(@"".delim byte) (@"".line []byte, @"".err error)
func (? *@"bytes".Buffer) @"bytes".ReadFrom(@"".r @"io".Reader) (@"".n int64, @"".err error)
func (? *@"bytes".Buffer) @"bytes".ReadRune() (@"".r rune, @"".size int, @"".err error)
func (? *@"bytes".Buffer) @"bytes".ReadString(@"".delim byte) (@"".line string, @"".err error)
func (? *@"bytes".Buffer) @"bytes".Reset() ()
func (? *@"bytes".Buffer) @"bytes".String() (? string)
func (? *@"bytes".Buffer) @"bytes".Truncate(@"".n int) ()
func (? *@"bytes".Buffer) @"bytes".UnreadByte() (? error)
func (? *@"bytes".Buffer) @"bytes".UnreadRune() (? error)
func (? *@"bytes".Buffer) @"bytes".Write(@"".p []byte) (@"".n int, @"".err error)
func (? *@"bytes".Buffer) @"bytes".WriteByte(@"".c byte) (? error)
func (? *@"bytes".Buffer) @"bytes".WriteRune(@"".r rune) (@"".n int, @"".err error)
func (? *@"bytes".Buffer) @"bytes".WriteString(@"".s string) (@"".n int, @"".err error)
func (? *@"bytes".Buffer) @"bytes".WriteTo(@"".w @"io".Writer) (@"".n int64, @"".err error)
func (? *@"bytes".Buffer) @"bytes".grow(@"".n int) (? int)
func (? *@"bytes".Buffer) @"bytes".readSlice(@"".delim byte) (@"".line []byte, @"".err error)
type @"net".Listener interface { @"net".Accept() (@"net".c @"net".Conn, @"net".err error); @"net".Addr() (? @"net".Addr); @"net".Close() (? error) }
import time "time"
import x509 "crypto/x509"
type @"crypto/tls".Config struct { @"crypto/tls".Rand @"io".Reader; @"crypto/tls".Time func () (? @"time".Time); @"crypto/tls".Certificates []@"crypto/tls".Certificate; @"crypto/tls".NameToCertificate map[string]*@"crypto/tls".Certificate; @"crypto/tls".GetCertificate func (@"crypto/tls".clientHello *@"crypto/tls".ClientHelloInfo) (? *@"crypto/tls".Certificate, ? error); @"crypto/tls".RootCAs *@"crypto/x509".CertPool; @"crypto/tls".NextProtos []string; @"crypto/tls".ServerName string; @"crypto/tls".ClientAuth @"crypto/tls".ClientAuthType; @"crypto/tls".ClientCAs *@"crypto/x509".CertPool; @"crypto/tls".InsecureSkipVerify bool; @"crypto/tls".CipherSuites []uint16; @"crypto/tls".PreferServerCipherSuites bool; @"crypto/tls".SessionTicketsDisabled bool; @"crypto/tls".SessionTicketKey [32]byte; @"crypto/tls".ClientSessionCache @"crypto/tls".ClientSessionCache; @"crypto/tls".MinVersion uint16; @"crypto/tls".MaxVersion uint16; @"crypto/tls".CurvePreferences []@"crypto/tls".CurveID; @"crypto/tls".serverInitOnce @"sync".Once }
func (? *@"crypto/tls".Config) @"crypto/tls".BuildNameToCertificate() ()
func (? *@"crypto/tls".Config) @"crypto/tls".cipherSuites() (? []uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".curvePreferences() (? []@"crypto/tls".CurveID)
func (? *@"crypto/tls".Config) @"crypto/tls".getCertificate(@"crypto/tls".clientHello *@"crypto/tls".ClientHelloInfo) (? *@"crypto/tls".Certificate, ? error)
func (? *@"crypto/tls".Config) @"crypto/tls".maxVersion() (? uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".minVersion() (? uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".mutualVersion(@"crypto/tls".vers uint16) (? uint16, ? bool)
func (? *@"crypto/tls".Config) @"crypto/tls".rand() (? @"io".Reader)
func (? *@"crypto/tls".Config) @"crypto/tls".serverInit() ()
func (? *@"crypto/tls".Config) @"crypto/tls".time() (? @"time".Time)
import log "log"
type @"net/http".Server struct { @"net/http".Addr string; @"net/http".Handler @"net/http".Handler; @"net/http".ReadTimeout @"time".Duration; @"net/http".WriteTimeout @"time".Duration; @"net/http".MaxHeaderBytes int; @"net/http".TLSConfig *@"crypto/tls".Config; @"net/http".TLSNextProto map[string]func (? *@"net/http".Server, ? *@"crypto/tls".Conn, ? @"net/http".Handler) (); @"net/http".ConnState func (? @"net".Conn, ? @"net/http".ConnState) (); @"net/http".ErrorLog *@"log".Logger; @"net/http".disableKeepAlives int32 }
func (? *@"net/http".Server) @"net/http".ListenAndServe() (? error)
func (? *@"net/http".Server) @"net/http".ListenAndServeTLS(@"net/http".certFile string, @"net/http".keyFile string) (? error)
func (? *@"net/http".Server) @"net/http".Serve(@"net/http".l @"net".Listener) (? error)
func (? *@"net/http".Server) @"net/http".SetKeepAlivesEnabled(@"net/http".v bool) ()
func (? *@"net/http".Server) @"net/http".doKeepAlives() (? bool)
func (? *@"net/http".Server) @"net/http".initialLimitedReaderSize() (? int64)
func (? *@"net/http".Server) @"net/http".logf(@"net/http".format string, @"net/http".args ...interface {  }) ()
func (? *@"net/http".Server) @"net/http".maxHeaderBytes() (? int)
func (? *@"net/http".Server) @"net/http".newConn(@"net/http".rwc @"net".Conn) (@"net/http".c *@"net/http".conn, @"net/http".err error)
type @"sync".WaitGroup struct { @"sync".m @"sync".Mutex; @"sync".counter int32; @"sync".waiters int32; @"sync".sema *uint32 }
func (? *@"sync".WaitGroup) @"sync".Add(@"".delta int) ()
func (? *@"sync".WaitGroup) @"sync".Done() ()
func (? *@"sync".WaitGroup) @"sync".Wait() ()
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"net".Conn interface { @"net".Close() (? error); @"net".LocalAddr() (? @"net".Addr); @"net".Read(@"net".b []byte) (@"net".n int, @"net".err error); @"net".RemoteAddr() (? @"net".Addr); @"net".SetDeadline(@"net".t @"time".Time) (? error); @"net".SetReadDeadline(@"net".t @"time".Time) (? error); @"net".SetWriteDeadline(@"net".t @"time".Time) (? error); @"net".Write(@"net".b []byte) (@"net".n int, @"net".err error) }
type @"net/http".ResponseWriter interface { @"net/http".Header() (? @"net/http".Header); @"net/http".Write(? []byte) (? int, ? error); @"net/http".WriteHeader(? int) () }
import url "net/url"
import multipart "mime/multipart"
type @"net/http".Request struct { @"net/http".Method string; @"net/http".URL *@"net/url".URL; @"net/http".Proto string; @"net/http".ProtoMajor int; @"net/http".ProtoMinor int; @"net/http".Header @"net/http".Header; @"net/http".Body @"io".ReadCloser; @"net/http".ContentLength int64; @"net/http".TransferEncoding []string; @"net/http".Close bool; @"net/http".Host string; @"net/http".Form @"net/url".Values; @"net/http".PostForm @"net/url".Values; @"net/http".MultipartForm *@"mime/multipart".Form; @"net/http".Trailer @"net/http".Header; @"net/http".RemoteAddr string; @"net/http".RequestURI string; @"net/http".TLS *@"crypto/tls".ConnectionState }
func (? *@"net/http".Request) @"net/http".AddCookie(@"net/http".c *@"net/http".Cookie) ()
func (? *@"net/http".Request) @"net/http".BasicAuth() (@"net/http".username string, @"net/http".password string, @"net/http".ok bool)
func (? *@"net/http".Request) @"net/http".Cookie(@"net/http".name string) (? *@"net/http".Cookie, ? error)
func (? *@"net/http".Request) @"net/http".Cookies() (? []*@"net/http".Cookie)
func (? *@"net/http".Request) @"net/http".FormFile(@"net/http".key string) (? @"mime/multipart".File, ? *@"mime/multipart".FileHeader, ? error)
func (? *@"net/http".Request) @"net/http".FormValue(@"net/http".key string) (? string)
func (? *@"net/http".Request) @"net/http".MultipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"net/http".Request) @"net/http".ParseForm() (? error)
func (? *@"net/http".Request) @"net/http".ParseMultipartForm(@"net/http".maxMemory int64) (? error)
func (? *@"net/http".Request) @"net/http".PostFormValue(@"net/http".key string) (? string)
func (? *@"net/http".Request) @"net/http".ProtoAtLeast(@"net/http".major int, @"net/http".minor int) (? bool)
func (? *@"net/http".Request) @"net/http".Referer() (? string)
func (? *@"net/http".Request) @"net/http".SetBasicAuth(@"net/http".username string, @"net/http".password string) ()
func (? *@"net/http".Request) @"net/http".UserAgent() (? string)
func (? *@"net/http".Request) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Request) @"net/http".WriteProxy(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Request) @"net/http".closeBody() ()
func (? *@"net/http".Request) @"net/http".expectsContinue() (? bool)
func (? *@"net/http".Request) @"net/http".multipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"net/http".Request) @"net/http".wantsClose() (? bool)
func (? *@"net/http".Request) @"net/http".wantsHttp10KeepAlive() (? bool)
func (? *@"net/http".Request) @"net/http".write(@"net/http".w @"io".Writer, @"net/http".usingProxy bool, @"net/http".extraHeaders @"net/http".Header) (? error)
type @"io".Writer interface { @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"net/http".keyValues struct { @"net/http".key string; @"net/http".values []string }
type @"net/http".headerSorter struct { @"net/http".kvs []@"net/http".keyValues }
func (? *@"net/http".headerSorter) @"net/http".Len() (? int)
func (? *@"net/http".headerSorter) @"net/http".Less(@"net/http".i int, @"net/http".j int) (? bool)
func (? *@"net/http".headerSorter) @"net/http".Swap(@"net/http".i int, @"net/http".j int) ()
type @"bytes".readOp int
type @"io".Reader interface { @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"net".Addr interface { @"net".Network() (? string); @"net".String() (? string) }
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
import crypto "crypto"
type @"crypto/tls".Certificate struct { @"crypto/tls".Certificate [][]byte; @"crypto/tls".PrivateKey @"crypto".PrivateKey; @"crypto/tls".OCSPStaple []byte; @"crypto/tls".Leaf *@"crypto/x509".Certificate }
type @"crypto/tls".ClientHelloInfo struct { @"crypto/tls".CipherSuites []uint16; @"crypto/tls".ServerName string; @"crypto/tls".SupportedCurves []@"crypto/tls".CurveID; @"crypto/tls".SupportedPoints []uint8 }
type @"crypto/x509".CertPool struct { @"crypto/x509".bySubjectKeyId map[string][]int; @"crypto/x509".byName map[string][]int; @"crypto/x509".certs []*@"crypto/x509".Certificate }
func (? *@"crypto/x509".CertPool) @"crypto/x509".AddCert(@"crypto/x509".cert *@"crypto/x509".Certificate) ()
func (? *@"crypto/x509".CertPool) @"crypto/x509".AppendCertsFromPEM(@"crypto/x509".pemCerts []byte) (@"crypto/x509".ok bool)
func (? *@"crypto/x509".CertPool) @"crypto/x509".Subjects() (@"crypto/x509".res [][]byte)
func (? *@"crypto/x509".CertPool) @"crypto/x509".findVerifiedParents(@"crypto/x509".cert *@"crypto/x509".Certificate) (@"crypto/x509".parents []int, @"crypto/x509".errCert *@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"crypto/tls".ClientAuthType int
type @"crypto/tls".ClientSessionCache interface { @"crypto/tls".Get(@"crypto/tls".sessionKey string) (@"crypto/tls".session *@"crypto/tls".ClientSessionState, @"crypto/tls".ok bool); @"crypto/tls".Put(@"crypto/tls".sessionKey string, @"crypto/tls".cs *@"crypto/tls".ClientSessionState) () }
type @"crypto/tls".CurveID uint16
type @"sync".Once struct { @"sync".m @"sync".Mutex; @"sync".done uint32 }
func (? *@"sync".Once) @"sync".Do(@"".f func () ()) ()
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
type @"crypto/tls".Conn struct { @"crypto/tls".conn @"net".Conn; @"crypto/tls".isClient bool; @"crypto/tls".handshakeMutex @"sync".Mutex; @"crypto/tls".handshakeErr error; @"crypto/tls".vers uint16; @"crypto/tls".haveVers bool; @"crypto/tls".config *@"crypto/tls".Config; @"crypto/tls".handshakeComplete bool; @"crypto/tls".didResume bool; @"crypto/tls".cipherSuite uint16; @"crypto/tls".ocspResponse []byte; @"crypto/tls".peerCertificates []*@"crypto/x509".Certificate; @"crypto/tls".verifiedChains [][]*@"crypto/x509".Certificate; @"crypto/tls".serverName string; @"crypto/tls".firstFinished [12]byte; @"crypto/tls".clientProtocol string; @"crypto/tls".clientProtocolFallback bool; @"crypto/tls".in @"crypto/tls".halfConn; @"crypto/tls".out @"crypto/tls".halfConn; @"crypto/tls".rawInput *@"crypto/tls".block; @"crypto/tls".input *@"crypto/tls".block; @"crypto/tls".hand @"bytes".Buffer; @"crypto/tls".tmp [16]byte }
func (? *@"crypto/tls".Conn) @"crypto/tls".Close() (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".ConnectionState() (? @"crypto/tls".ConnectionState)
func (? *@"crypto/tls".Conn) @"crypto/tls".Handshake() (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".LocalAddr() (? @"net".Addr)
func (? *@"crypto/tls".Conn) @"crypto/tls".OCSPResponse() (? []byte)
func (? *@"crypto/tls".Conn) @"crypto/tls".Read(@"crypto/tls".b []byte) (@"crypto/tls".n int, @"crypto/tls".err error)
func (? *@"crypto/tls".Conn) @"crypto/tls".RemoteAddr() (? @"net".Addr)
func (? *@"crypto/tls".Conn) @"crypto/tls".SetDeadline(@"crypto/tls".t @"time".Time) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".SetReadDeadline(@"crypto/tls".t @"time".Time) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".SetWriteDeadline(@"crypto/tls".t @"time".Time) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".VerifyHostname(@"crypto/tls".host string) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".Write(@"crypto/tls".b []byte) (? int, ? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".clientHandshake() (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".decryptTicket(@"crypto/tls".encrypted []byte) (? *@"crypto/tls".sessionState, ? bool)
func (? *@"crypto/tls".Conn) @"crypto/tls".encryptTicket(@"crypto/tls".state *@"crypto/tls".sessionState) (? []byte, ? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".readHandshake() (? interface {  }, ? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".readRecord(@"crypto/tls".want @"crypto/tls".recordType) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".sendAlert(@"crypto/tls".err @"crypto/tls".alert) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".sendAlertLocked(@"crypto/tls".err @"crypto/tls".alert) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".serverHandshake() (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".tryCipherSuite(@"crypto/tls".id uint16, @"crypto/tls".supportedCipherSuites []uint16, @"crypto/tls".version uint16, @"crypto/tls".ellipticOk bool, @"crypto/tls".ecdsaOk bool) (? *@"crypto/tls".cipherSuite)
func (? *@"crypto/tls".Conn) @"crypto/tls".writeRecord(@"crypto/tls".typ @"crypto/tls".recordType, @"crypto/tls".data []byte) (@"crypto/tls".n int, @"crypto/tls".err error)
type @"net/http".ConnState int
func (? @"net/http".ConnState) @"net/http".String() (? string)
func (? *@"net/http".ConnState) @"net/http".String() (? string)
import nosync "github.com/gopherjs/gopherjs/nosync"
type @"log".Logger struct { @"log".mu @"github.com/gopherjs/gopherjs/nosync".Mutex; @"log".prefix string; @"log".flag int; @"log".out @"io".Writer; @"log".buf []byte }
func (? *@"log".Logger) @"log".Fatal(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Fatalf(@"".format string, @"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Fatalln(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Flags() (? int)
func (? *@"log".Logger) @"log".Output(@"".calldepth int, @"".s string) (? error)
func (? *@"log".Logger) @"log".Panic(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Panicf(@"".format string, @"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Panicln(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Prefix() (? string)
func (? *@"log".Logger) @"log".Print(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Printf(@"".format string, @"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Println(@"".v ...interface {  }) ()
func (? *@"log".Logger) @"log".SetFlags(@"".flag int) ()
func (? *@"log".Logger) @"log".SetPrefix(@"".prefix string) ()
func (? *@"log".Logger) @"log".formatHeader(@"".buf *[]byte, @"".t @"time".Time, @"".file string, @"".line int) ()
import bufio "bufio"
type @"net/http".conn struct { @"net/http".remoteAddr string; @"net/http".server *@"net/http".Server; @"net/http".rwc @"net".Conn; @"net/http".w @"io".Writer; @"net/http".werr error; @"net/http".sr @"net/http".liveSwitchReader; @"net/http".lr *@"io".LimitedReader; @"net/http".buf *@"bufio".ReadWriter; @"net/http".tlsState *@"crypto/tls".ConnectionState; @"net/http".mu @"sync".Mutex; @"net/http".clientGone bool; @"net/http".closeNotifyc chan bool; @"net/http".hijackedv bool }
func (? *@"net/http".conn) @"net/http".close() ()
func (? *@"net/http".conn) @"net/http".closeNotify() (? <-chan bool)
func (? *@"net/http".conn) @"net/http".closeWriteAndWait() ()
func (? *@"net/http".conn) @"net/http".finalFlush() ()
func (? *@"net/http".conn) @"net/http".hijack() (@"net/http".rwc @"net".Conn, @"net/http".buf *@"bufio".ReadWriter, @"net/http".err error)
func (? *@"net/http".conn) @"net/http".hijacked() (? bool)
func (? *@"net/http".conn) @"net/http".noteClientGone() ()
func (? *@"net/http".conn) @"net/http".readRequest() (@"net/http".w *@"net/http".response, @"net/http".err error)
func (? *@"net/http".conn) @"net/http".serve() ()
func (? *@"net/http".conn) @"net/http".setState(@"net/http".nc @"net".Conn, @"net/http".state @"net/http".ConnState) ()
type @"net/url".URL struct { @"net/url".Scheme string; @"net/url".Opaque string; @"net/url".User *@"net/url".Userinfo; @"net/url".Host string; @"net/url".Path string; @"net/url".RawQuery string; @"net/url".Fragment string }
func (? *@"net/url".URL) @"net/url".IsAbs() (? bool)
func (? *@"net/url".URL) @"net/url".Parse(@"".ref string) (? *@"net/url".URL, ? error)
func (? *@"net/url".URL) @"net/url".Query() (? @"net/url".Values)
func (? *@"net/url".URL) @"net/url".RequestURI() (? string)
func (? *@"net/url".URL) @"net/url".ResolveReference(@"".ref *@"net/url".URL) (? *@"net/url".URL)
func (? *@"net/url".URL) @"net/url".String() (? string)
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"net/url".Values map[string][]string
func (? @"net/url".Values) @"net/url".Add(@"".key string, @"".value string) ()
func (? @"net/url".Values) @"net/url".Del(@"".key string) ()
func (? @"net/url".Values) @"net/url".Encode() (? string)
func (? @"net/url".Values) @"net/url".Get(@"".key string) (? string)
func (? @"net/url".Values) @"net/url".Set(@"".key string, @"".value string) ()
func (? *@"net/url".Values) @"net/url".Add(@"".key string, @"".value string) ()
func (? *@"net/url".Values) @"net/url".Del(@"".key string) ()
func (? *@"net/url".Values) @"net/url".Encode() (? string)
func (? *@"net/url".Values) @"net/url".Get(@"".key string) (? string)
func (? *@"net/url".Values) @"net/url".Set(@"".key string, @"".value string) ()
type @"mime/multipart".Form struct { @"mime/multipart".Value map[string][]string; @"mime/multipart".File map[string][]*@"mime/multipart".FileHeader }
func (? *@"mime/multipart".Form) @"mime/multipart".RemoveAll() (? error)
type @"crypto/tls".ConnectionState struct { @"crypto/tls".Version uint16; @"crypto/tls".HandshakeComplete bool; @"crypto/tls".DidResume bool; @"crypto/tls".CipherSuite uint16; @"crypto/tls".NegotiatedProtocol string; @"crypto/tls".NegotiatedProtocolIsMutual bool; @"crypto/tls".ServerName string; @"crypto/tls".PeerCertificates []*@"crypto/x509".Certificate; @"crypto/tls".VerifiedChains [][]*@"crypto/x509".Certificate; @"crypto/tls".TLSUnique []byte }
type @"net/http".Cookie struct { @"net/http".Name string; @"net/http".Value string; @"net/http".Path string; @"net/http".Domain string; @"net/http".Expires @"time".Time; @"net/http".RawExpires string; @"net/http".MaxAge int; @"net/http".Secure bool; @"net/http".HttpOnly bool; @"net/http".Raw string; @"net/http".Unparsed []string }
func (? *@"net/http".Cookie) @"net/http".String() (? string)
type @"mime/multipart".File interface { @"io".Close() (? error); @"io".Read(@"".p []byte) (@"".n int, @"".err error); @"io".ReadAt(@"".p []byte, @"".off int64) (@"".n int, @"".err error); @"io".Seek(@"".offset int64, @"".whence int) (? int64, ? error) }
import textproto "net/textproto"
type @"mime/multipart".FileHeader struct { @"mime/multipart".Filename string; @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".content []byte; @"mime/multipart".tmpfile string }
func (? *@"mime/multipart".FileHeader) @"mime/multipart".Open() (? @"mime/multipart".File, ? error)
type @"mime/multipart".Reader struct { @"mime/multipart".bufReader *@"bufio".Reader; @"mime/multipart".currentPart *@"mime/multipart".Part; @"mime/multipart".partsRead int; @"mime/multipart".nl []byte; @"mime/multipart".nlDashBoundary []byte; @"mime/multipart".dashBoundaryDash []byte; @"mime/multipart".dashBoundary []byte }
func (? *@"mime/multipart".Reader) @"mime/multipart".NextPart() (? *@"mime/multipart".Part, ? error)
func (? *@"mime/multipart".Reader) @"mime/multipart".ReadForm(@"mime/multipart".maxMemory int64) (@"mime/multipart".f *@"mime/multipart".Form, @"mime/multipart".err error)
func (? *@"mime/multipart".Reader) @"mime/multipart".isBoundaryDelimiterLine(@"mime/multipart".line []byte) (@"mime/multipart".ret bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".isFinalBoundary(@"mime/multipart".line []byte) (? bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".peekBufferIsEmptyPart(@"mime/multipart".peek []byte) (? bool)
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
type @"crypto".PrivateKey interface {  }
import big "math/big"
import pkix "crypto/x509/pkix"
import asn1 "encoding/asn1"
type @"crypto/x509".Certificate struct { @"crypto/x509".Raw []byte; @"crypto/x509".RawTBSCertificate []byte; @"crypto/x509".RawSubjectPublicKeyInfo []byte; @"crypto/x509".RawSubject []byte; @"crypto/x509".RawIssuer []byte; @"crypto/x509".Signature []byte; @"crypto/x509".SignatureAlgorithm @"crypto/x509".SignatureAlgorithm; @"crypto/x509".PublicKeyAlgorithm @"crypto/x509".PublicKeyAlgorithm; @"crypto/x509".PublicKey interface {  }; @"crypto/x509".Version int; @"crypto/x509".SerialNumber *@"math/big".Int; @"crypto/x509".Issuer @"crypto/x509/pkix".Name; @"crypto/x509".Subject @"crypto/x509/pkix".Name; @"crypto/x509".NotBefore @"time".Time; @"crypto/x509".NotAfter @"time".Time; @"crypto/x509".KeyUsage @"crypto/x509".KeyUsage; @"crypto/x509".Extensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtraExtensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtKeyUsage []@"crypto/x509".ExtKeyUsage; @"crypto/x509".UnknownExtKeyUsage []@"encoding/asn1".ObjectIdentifier; @"crypto/x509".BasicConstraintsValid bool; @"crypto/x509".IsCA bool; @"crypto/x509".MaxPathLen int; @"crypto/x509".MaxPathLenZero bool; @"crypto/x509".SubjectKeyId []byte; @"crypto/x509".AuthorityKeyId []byte; @"crypto/x509".OCSPServer []string; @"crypto/x509".IssuingCertificateURL []string; @"crypto/x509".DNSNames []string; @"crypto/x509".EmailAddresses []string; @"crypto/x509".IPAddresses []@"net".IP; @"crypto/x509".PermittedDNSDomainsCritical bool; @"crypto/x509".PermittedDNSDomains []string; @"crypto/x509".CRLDistributionPoints []string; @"crypto/x509".PolicyIdentifiers []@"encoding/asn1".ObjectIdentifier }
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckCRLSignature(@"crypto/x509".crl *@"crypto/x509/pkix".CertificateList) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignature(@"crypto/x509".algo @"crypto/x509".SignatureAlgorithm, @"crypto/x509".signed []byte, @"crypto/x509".signature []byte) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignatureFrom(@"crypto/x509".parent *@"crypto/x509".Certificate) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CreateCRL(@"crypto/x509".rand @"io".Reader, @"crypto/x509".priv interface {  }, @"crypto/x509".revokedCerts []@"crypto/x509/pkix".RevokedCertificate, @"crypto/x509".now @"time".Time, @"crypto/x509".expiry @"time".Time) (@"crypto/x509".crlBytes []byte, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Equal(@"crypto/x509".other *@"crypto/x509".Certificate) (? bool)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Verify(@"crypto/x509".opts @"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".VerifyHostname(@"crypto/x509".h string) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".buildChains(@"crypto/x509".cache map[int][][]*@"crypto/x509".Certificate, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".isValid(@"crypto/x509".certType int, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".systemVerify(@"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"crypto/tls".ClientSessionState struct { @"crypto/tls".sessionTicket []uint8; @"crypto/tls".vers uint16; @"crypto/tls".cipherSuite uint16; @"crypto/tls".masterSecret []byte; @"crypto/tls".serverCertificates []*@"crypto/x509".Certificate }
type @"crypto/tls".halfConn struct { ? @"sync".Mutex; @"crypto/tls".err error; @"crypto/tls".version uint16; @"crypto/tls".cipher interface {  }; @"crypto/tls".mac @"crypto/tls".macFunction; @"crypto/tls".seq [8]byte; @"crypto/tls".bfree *@"crypto/tls".block; @"crypto/tls".nextCipher interface {  }; @"crypto/tls".nextMac @"crypto/tls".macFunction; @"crypto/tls".inDigestBuf []byte; @"crypto/tls".outDigestBuf []byte }
func (? *@"crypto/tls".halfConn) @"crypto/tls".changeCipherSpec() (? error)
func (? *@"crypto/tls".halfConn) @"crypto/tls".decrypt(@"crypto/tls".b *@"crypto/tls".block) (@"crypto/tls".ok bool, @"crypto/tls".prefixLen int, @"crypto/tls".alertValue @"crypto/tls".alert)
func (? *@"crypto/tls".halfConn) @"crypto/tls".encrypt(@"crypto/tls".b *@"crypto/tls".block, @"crypto/tls".explicitIVLen int) (? bool, ? @"crypto/tls".alert)
func (? *@"crypto/tls".halfConn) @"crypto/tls".error() (? error)
func (? *@"crypto/tls".halfConn) @"crypto/tls".freeBlock(@"crypto/tls".b *@"crypto/tls".block) ()
func (? *@"crypto/tls".halfConn) @"crypto/tls".incSeq() ()
func (? *@"crypto/tls".halfConn) @"crypto/tls".newBlock() (? *@"crypto/tls".block)
func (? *@"crypto/tls".halfConn) @"crypto/tls".prepareCipherSpec(@"crypto/tls".version uint16, @"crypto/tls".cipher interface {  }, @"crypto/tls".mac @"crypto/tls".macFunction) ()
func (? *@"crypto/tls".halfConn) @"crypto/tls".resetSeq() ()
func (? *@"crypto/tls".halfConn) @"crypto/tls".setErrorLocked(@"crypto/tls".err error) (? error)
func (? *@"crypto/tls".halfConn) @"crypto/tls".splitBlock(@"crypto/tls".b *@"crypto/tls".block, @"crypto/tls".n int) (? *@"crypto/tls".block, ? *@"crypto/tls".block)
type @"crypto/tls".block struct { @"crypto/tls".data []byte; @"crypto/tls".off int; @"crypto/tls".link *@"crypto/tls".block }
func (? *@"crypto/tls".block) @"crypto/tls".Read(@"crypto/tls".p []byte) (@"crypto/tls".n int, @"crypto/tls".err error)
func (? *@"crypto/tls".block) @"crypto/tls".readFromUntil(@"crypto/tls".r @"io".Reader, @"crypto/tls".n int) (? error)
func (? *@"crypto/tls".block) @"crypto/tls".reserve(@"crypto/tls".n int) ()
func (? *@"crypto/tls".block) @"crypto/tls".resize(@"crypto/tls".n int) ()
type @"crypto/tls".sessionState struct { @"crypto/tls".vers uint16; @"crypto/tls".cipherSuite uint16; @"crypto/tls".masterSecret []byte; @"crypto/tls".certificates [][]byte }
func (? *@"crypto/tls".sessionState) @"crypto/tls".equal(@"crypto/tls".i interface {  }) (? bool)
func (? *@"crypto/tls".sessionState) @"crypto/tls".marshal() (? []byte)
func (? *@"crypto/tls".sessionState) @"crypto/tls".unmarshal(@"crypto/tls".data []byte) (? bool)
type @"crypto/tls".recordType uint8
type @"crypto/tls".alert uint8
func (? @"crypto/tls".alert) @"crypto/tls".Error() (? string)
func (? @"crypto/tls".alert) @"crypto/tls".String() (? string)
func (? *@"crypto/tls".alert) @"crypto/tls".Error() (? string)
func (? *@"crypto/tls".alert) @"crypto/tls".String() (? string)
import cipher "crypto/cipher"
type @"crypto/tls".cipherSuite struct { @"crypto/tls".id uint16; @"crypto/tls".keyLen int; @"crypto/tls".macLen int; @"crypto/tls".ivLen int; @"crypto/tls".ka func (@"crypto/tls".version uint16) (? @"crypto/tls".keyAgreement); @"crypto/tls".flags int; @"crypto/tls".cipher func (@"crypto/tls".key []byte, @"crypto/tls".iv []byte, @"crypto/tls".isRead bool) (? interface {  }); @"crypto/tls".mac func (@"crypto/tls".version uint16, @"crypto/tls".macKey []byte) (? @"crypto/tls".macFunction); @"crypto/tls".aead func (@"crypto/tls".key []byte, @"crypto/tls".fixedNonce []byte) (? @"crypto/cipher".AEAD) }
type @"github.com/gopherjs/gopherjs/nosync".Mutex struct { @"github.com/gopherjs/gopherjs/nosync".locked bool }
func (? *@"github.com/gopherjs/gopherjs/nosync".Mutex) @"github.com/gopherjs/gopherjs/nosync".Lock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".Mutex) @"github.com/gopherjs/gopherjs/nosync".Unlock() ()
type @"net/http".liveSwitchReader struct { ? @"sync".Mutex; @"net/http".r @"io".Reader }
func (? *@"net/http".liveSwitchReader) @"net/http".Read(@"net/http".p []byte) (@"net/http".n int, @"net/http".err error)
type @"io".LimitedReader struct { @"io".R @"io".Reader; @"io".N int64 }
func (? *@"io".LimitedReader) @"io".Read(@"".p []byte) (@"".n int, @"".err error)
type @"bufio".ReadWriter struct { ? *@"bufio".Reader; ? *@"bufio".Writer }
type @"net/http".response struct { @"net/http".conn *@"net/http".conn; @"net/http".req *@"net/http".Request; @"net/http".wroteHeader bool; @"net/http".wroteContinue bool; @"net/http".w *@"bufio".Writer; @"net/http".cw @"net/http".chunkWriter; @"net/http".sw *@"net/http".switchWriter; @"net/http".handlerHeader @"net/http".Header; @"net/http".calledHeader bool; @"net/http".written int64; @"net/http".contentLength int64; @"net/http".status int; @"net/http".closeAfterReply bool; @"net/http".requestBodyLimitHit bool; @"net/http".handlerDone bool; @"net/http".dateBuf [29]byte; @"net/http".clenBuf [10]byte }
func (? *@"net/http".response) @"net/http".CloseNotify() (? <-chan bool)
func (? *@"net/http".response) @"net/http".Flush() ()
func (? *@"net/http".response) @"net/http".Header() (? @"net/http".Header)
func (? *@"net/http".response) @"net/http".Hijack() (@"net/http".rwc @"net".Conn, @"net/http".buf *@"bufio".ReadWriter, @"net/http".err error)
func (? *@"net/http".response) @"net/http".ReadFrom(@"net/http".src @"io".Reader) (@"net/http".n int64, @"net/http".err error)
func (? *@"net/http".response) @"net/http".Write(@"net/http".data []byte) (@"net/http".n int, @"net/http".err error)
func (? *@"net/http".response) @"net/http".WriteHeader(@"net/http".code int) ()
func (? *@"net/http".response) @"net/http".WriteString(@"net/http".data string) (@"net/http".n int, @"net/http".err error)
func (? *@"net/http".response) @"net/http".bodyAllowed() (? bool)
func (? *@"net/http".response) @"net/http".finishRequest() ()
func (? *@"net/http".response) @"net/http".needsSniff() (? bool)
func (? *@"net/http".response) @"net/http".requestTooLarge() ()
func (? *@"net/http".response) @"net/http".sendExpectationFailed() ()
func (? *@"net/http".response) @"net/http".write(@"net/http".lenData int, @"net/http".dataB []byte, @"net/http".dataS string) (@"net/http".n int, @"net/http".err error)
type @"net/url".Userinfo struct { @"net/url".username string; @"net/url".password string; @"net/url".passwordSet bool }
func (? *@"net/url".Userinfo) @"net/url".Password() (? string, ? bool)
func (? *@"net/url".Userinfo) @"net/url".String() (? string)
func (? *@"net/url".Userinfo) @"net/url".Username() (? string)
type @"net/textproto".MIMEHeader map[string][]string
func (? @"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? @"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
type @"bufio".Reader struct { @"bufio".buf []byte; @"bufio".rd @"io".Reader; @"bufio".r int; @"bufio".w int; @"bufio".err error; @"bufio".lastByte int; @"bufio".lastRuneSize int }
func (? *@"bufio".Reader) @"bufio".Buffered() (? int)
func (? *@"bufio".Reader) @"bufio".Peek(@"".n int) (? []byte, ? error)
func (? *@"bufio".Reader) @"bufio".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadByte() (@"".c byte, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadBytes(@"".delim byte) (@"".line []byte, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadLine() (@"".line []byte, @"".isPrefix bool, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadRune() (@"".r rune, @"".size int, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadSlice(@"".delim byte) (@"".line []byte, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadString(@"".delim byte) (@"".line string, @"".err error)
func (? *@"bufio".Reader) @"bufio".Reset(@"".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".UnreadByte() (? error)
func (? *@"bufio".Reader) @"bufio".UnreadRune() (? error)
func (? *@"bufio".Reader) @"bufio".WriteTo(@"".w @"io".Writer) (@"".n int64, @"".err error)
func (? *@"bufio".Reader) @"bufio".fill() ()
func (? *@"bufio".Reader) @"bufio".readErr() (? error)
func (? *@"bufio".Reader) @"bufio".reset(@"".buf []byte, @"".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".writeBuf(@"".w @"io".Writer) (? int64, ? error)
type @"mime/multipart".Part struct { @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".buffer *@"bytes".Buffer; @"mime/multipart".mr *@"mime/multipart".Reader; @"mime/multipart".bytesRead int; @"mime/multipart".disposition string; @"mime/multipart".dispositionParams map[string]string; @"mime/multipart".r @"io".Reader }
func (? *@"mime/multipart".Part) @"mime/multipart".Close() (? error)
func (? *@"mime/multipart".Part) @"mime/multipart".FileName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".FormName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".Read(@"mime/multipart".d []byte) (@"mime/multipart".n int, @"mime/multipart".err error)
func (? *@"mime/multipart".Part) @"mime/multipart".parseContentDisposition() ()
func (? *@"mime/multipart".Part) @"mime/multipart".populateHeaders() (? error)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
type @"crypto/x509".SignatureAlgorithm int
type @"crypto/x509".PublicKeyAlgorithm int
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
type @"crypto/x509/pkix".Name struct { @"crypto/x509/pkix".Country []string; @"crypto/x509/pkix".Organization []string; @"crypto/x509/pkix".OrganizationalUnit []string; @"crypto/x509/pkix".Locality []string; @"crypto/x509/pkix".Province []string; @"crypto/x509/pkix".StreetAddress []string; @"crypto/x509/pkix".PostalCode []string; @"crypto/x509/pkix".SerialNumber string; @"crypto/x509/pkix".CommonName string; @"crypto/x509/pkix".Names []@"crypto/x509/pkix".AttributeTypeAndValue }
func (? @"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".FillFromRDNSequence(@"crypto/x509/pkix".rdns *@"crypto/x509/pkix".RDNSequence) ()
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
type @"crypto/x509".KeyUsage int
type @"crypto/x509/pkix".Extension struct { @"crypto/x509/pkix".Id @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Critical bool "asn1:\"optional\""; @"crypto/x509/pkix".Value []byte }
type @"crypto/x509".ExtKeyUsage int
type @"encoding/asn1".ObjectIdentifier []int
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
type @"net".IP []byte
func (? @"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? @"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? @"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? @"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? @"net".IP) @"net".IsLoopback() (? bool)
func (? @"net".IP) @"net".IsMulticast() (? bool)
func (? @"net".IP) @"net".IsUnspecified() (? bool)
func (? @"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? @"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? @"net".IP) @"net".String() (? string)
func (? @"net".IP) @"net".To16() (? @"net".IP)
func (? @"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? *@"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? *@"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? *@"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? *@"net".IP) @"net".IsLoopback() (? bool)
func (? *@"net".IP) @"net".IsMulticast() (? bool)
func (? *@"net".IP) @"net".IsUnspecified() (? bool)
func (? *@"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? *@"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? *@"net".IP) @"net".String() (? string)
func (? *@"net".IP) @"net".To16() (? @"net".IP)
func (? *@"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".UnmarshalText(@"net".text []byte) (? error)
type @"crypto/x509/pkix".CertificateList struct { @"crypto/x509/pkix".TBSCertList @"crypto/x509/pkix".TBSCertificateList; @"crypto/x509/pkix".SignatureAlgorithm @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".SignatureValue @"encoding/asn1".BitString }
func (? *@"crypto/x509/pkix".CertificateList) @"crypto/x509/pkix".HasExpired(@"crypto/x509/pkix".now @"time".Time) (? bool)
type @"crypto/x509/pkix".RevokedCertificate struct { @"crypto/x509/pkix".SerialNumber *@"math/big".Int; @"crypto/x509/pkix".RevocationTime @"time".Time; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"optional\"" }
type @"crypto/x509".VerifyOptions struct { @"crypto/x509".DNSName string; @"crypto/x509".Intermediates *@"crypto/x509".CertPool; @"crypto/x509".Roots *@"crypto/x509".CertPool; @"crypto/x509".CurrentTime @"time".Time; @"crypto/x509".KeyUsages []@"crypto/x509".ExtKeyUsage }
type @"crypto/tls".macFunction interface { @"crypto/tls".MAC(@"crypto/tls".digestBuf []byte, @"crypto/tls".seq []byte, @"crypto/tls".header []byte, @"crypto/tls".data []byte) (? []byte); @"crypto/tls".Size() (? int) }
type @"crypto/tls".keyAgreement interface { @"crypto/tls".generateClientKeyExchange(? *@"crypto/tls".Config, ? *@"crypto/tls".clientHelloMsg, ? *@"crypto/x509".Certificate) (? []byte, ? *@"crypto/tls".clientKeyExchangeMsg, ? error); @"crypto/tls".generateServerKeyExchange(? *@"crypto/tls".Config, ? *@"crypto/tls".Certificate, ? *@"crypto/tls".clientHelloMsg, ? *@"crypto/tls".serverHelloMsg) (? *@"crypto/tls".serverKeyExchangeMsg, ? error); @"crypto/tls".processClientKeyExchange(? *@"crypto/tls".Config, ? *@"crypto/tls".Certificate, ? *@"crypto/tls".clientKeyExchangeMsg, ? uint16) (? []byte, ? error); @"crypto/tls".processServerKeyExchange(? *@"crypto/tls".Config, ? *@"crypto/tls".clientHelloMsg, ? *@"crypto/tls".serverHelloMsg, ? *@"crypto/x509".Certificate, ? *@"crypto/tls".serverKeyExchangeMsg) (? error) }
type @"crypto/cipher".AEAD interface { @"crypto/cipher".NonceSize() (? int); @"crypto/cipher".Open(@"crypto/cipher".dst []byte, @"crypto/cipher".nonce []byte, @"crypto/cipher".ciphertext []byte, @"crypto/cipher".data []byte) (? []byte, ? error); @"crypto/cipher".Overhead() (? int); @"crypto/cipher".Seal(@"crypto/cipher".dst []byte, @"crypto/cipher".nonce []byte, @"crypto/cipher".plaintext []byte, @"crypto/cipher".data []byte) (? []byte) }
type @"bufio".Writer struct { @"bufio".err error; @"bufio".buf []byte; @"bufio".n int; @"bufio".wr @"io".Writer }
func (? *@"bufio".Writer) @"bufio".Available() (? int)
func (? *@"bufio".Writer) @"bufio".Buffered() (? int)
func (? *@"bufio".Writer) @"bufio".Flush() (? error)
func (? *@"bufio".Writer) @"bufio".ReadFrom(@"".r @"io".Reader) (@"".n int64, @"".err error)
func (? *@"bufio".Writer) @"bufio".Reset(@"".w @"io".Writer) ()
func (? *@"bufio".Writer) @"bufio".Write(@"".p []byte) (@"".nn int, @"".err error)
func (? *@"bufio".Writer) @"bufio".WriteByte(@"".c byte) (? error)
func (? *@"bufio".Writer) @"bufio".WriteRune(@"".r rune) (@"".size int, @"".err error)
func (? *@"bufio".Writer) @"bufio".WriteString(@"".s string) (? int, ? error)
func (? *@"bufio".Writer) @"bufio".flush() (? error)
type @"net/http".chunkWriter struct { @"net/http".res *@"net/http".response; @"net/http".header @"net/http".Header; @"net/http".wroteHeader bool; @"net/http".chunking bool }
func (? *@"net/http".chunkWriter) @"net/http".Write(@"net/http".p []byte) (@"net/http".n int, @"net/http".err error)
func (? *@"net/http".chunkWriter) @"net/http".close() ()
func (? *@"net/http".chunkWriter) @"net/http".flush() ()
func (? *@"net/http".chunkWriter) @"net/http".writeHeader(@"net/http".p []byte) ()
type @"net/http".switchWriter struct { ? @"io".Writer }
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
type @"crypto/x509/pkix".AttributeTypeAndValue struct { @"crypto/x509/pkix".Type @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Value interface {  } }
type @"crypto/x509/pkix".RDNSequence []@"crypto/x509/pkix".RelativeDistinguishedNameSET
type @"net".IPMask []byte
func (? @"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? @"net".IPMask) @"net".String() (? string)
func (? *@"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? *@"net".IPMask) @"net".String() (? string)
type @"crypto/x509/pkix".TBSCertificateList struct { @"crypto/x509/pkix".Raw @"encoding/asn1".RawContent; @"crypto/x509/pkix".Version int "asn1:\"optional,default:2\""; @"crypto/x509/pkix".Signature @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".Issuer @"crypto/x509/pkix".RDNSequence; @"crypto/x509/pkix".ThisUpdate @"time".Time; @"crypto/x509/pkix".NextUpdate @"time".Time "asn1:\"optional\""; @"crypto/x509/pkix".RevokedCertificates []@"crypto/x509/pkix".RevokedCertificate "asn1:\"optional\""; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"tag:0,optional,explicit\"" }
type @"crypto/x509/pkix".AlgorithmIdentifier struct { @"crypto/x509/pkix".Algorithm @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Parameters @"encoding/asn1".RawValue "asn1:\"optional\"" }
type @"encoding/asn1".BitString struct { @"encoding/asn1".Bytes []byte; @"encoding/asn1".BitLength int }
func (? @"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? @"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
type @"crypto/tls".clientHelloMsg struct { @"crypto/tls".raw []byte; @"crypto/tls".vers uint16; @"crypto/tls".random []byte; @"crypto/tls".sessionId []byte; @"crypto/tls".cipherSuites []uint16; @"crypto/tls".compressionMethods []uint8; @"crypto/tls".nextProtoNeg bool; @"crypto/tls".serverName string; @"crypto/tls".ocspStapling bool; @"crypto/tls".supportedCurves []@"crypto/tls".CurveID; @"crypto/tls".supportedPoints []uint8; @"crypto/tls".ticketSupported bool; @"crypto/tls".sessionTicket []uint8; @"crypto/tls".signatureAndHashes []@"crypto/tls".signatureAndHash; @"crypto/tls".secureRenegotiation bool; @"crypto/tls".alpnProtocols []string }
func (? *@"crypto/tls".clientHelloMsg) @"crypto/tls".equal(@"crypto/tls".i interface {  }) (? bool)
func (? *@"crypto/tls".clientHelloMsg) @"crypto/tls".marshal() (? []byte)
func (? *@"crypto/tls".clientHelloMsg) @"crypto/tls".unmarshal(@"crypto/tls".data []byte) (? bool)
type @"crypto/tls".clientKeyExchangeMsg struct { @"crypto/tls".raw []byte; @"crypto/tls".ciphertext []byte }
func (? *@"crypto/tls".clientKeyExchangeMsg) @"crypto/tls".equal(@"crypto/tls".i interface {  }) (? bool)
func (? *@"crypto/tls".clientKeyExchangeMsg) @"crypto/tls".marshal() (? []byte)
func (? *@"crypto/tls".clientKeyExchangeMsg) @"crypto/tls".unmarshal(@"crypto/tls".data []byte) (? bool)
type @"crypto/tls".serverHelloMsg struct { @"crypto/tls".raw []byte; @"crypto/tls".vers uint16; @"crypto/tls".random []byte; @"crypto/tls".sessionId []byte; @"crypto/tls".cipherSuite uint16; @"crypto/tls".compressionMethod uint8; @"crypto/tls".nextProtoNeg bool; @"crypto/tls".nextProtos []string; @"crypto/tls".ocspStapling bool; @"crypto/tls".ticketSupported bool; @"crypto/tls".secureRenegotiation bool; @"crypto/tls".alpnProtocol string }
func (? *@"crypto/tls".serverHelloMsg) @"crypto/tls".equal(@"crypto/tls".i interface {  }) (? bool)
func (? *@"crypto/tls".serverHelloMsg) @"crypto/tls".marshal() (? []byte)
func (? *@"crypto/tls".serverHelloMsg) @"crypto/tls".unmarshal(@"crypto/tls".data []byte) (? bool)
type @"crypto/tls".serverKeyExchangeMsg struct { @"crypto/tls".raw []byte; @"crypto/tls".key []byte }
func (? *@"crypto/tls".serverKeyExchangeMsg) @"crypto/tls".equal(@"crypto/tls".i interface {  }) (? bool)
func (? *@"crypto/tls".serverKeyExchangeMsg) @"crypto/tls".marshal() (? []byte)
func (? *@"crypto/tls".serverKeyExchangeMsg) @"crypto/tls".unmarshal(@"crypto/tls".data []byte) (? bool)
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"".seed int64) () }
type @"crypto/x509/pkix".RelativeDistinguishedNameSET []@"crypto/x509/pkix".AttributeTypeAndValue
type @"encoding/asn1".RawContent []byte
type @"encoding/asn1".RawValue struct { @"encoding/asn1".Class int; @"encoding/asn1".Tag int; @"encoding/asn1".IsCompound bool; @"encoding/asn1".Bytes []byte; @"encoding/asn1".FullBytes []byte }
type @"crypto/tls".signatureAndHash struct { @"crypto/tls".hash uint8; @"crypto/tls".signature uint8 }
$$
1AA=$packages["bytes"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["crypto/tls"];a    $r=C.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["flag"];a    $r=D.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["fmt"];a    $r=E.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["net"];a    $r=F.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["net/http"];a    $r=B.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["os"];a    $r=G.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} HH=$packages["sync"];a    $r=H.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} I��I=$pkg.ResponseRecorder=$newType(0,$kindStruct,"httptest.ResponseRecorder","ResponseRecorder","net/http/httptest",function(Code_,HeaderMap_,Body_,Flushed_,wroteHeader_){this.$val=this;if(arguments.length===0){this.Code=0;this.HeaderMap=false;this.Body=V.nil;this.Flushed=false;this.wroteHeader=false;return;}this.Code=Code_;this.HeaderMap=HeaderMap_;this.Body=Body_;this.Flushed=Flushed_;this.wroteHeader=wroteHeader_;});�+AG.methods=[{prop:"Header",name:"Header",pkg:"",typ:$funcType([],[B.Header],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([U],[$Int,$error],false)},{prop:"WriteHeader",name:"WriteHeader",pkg:"",typ:$funcType([$Int],[],false)},{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[],false)}];�1I.init([{prop:"Code",name:"Code",pkg:"",typ:$Int,tag:""},{prop:"HeaderMap",name:"HeaderMap",pkg:"",typ:B.Header,tag:""},{prop:"Body",name:"Body",pkg:"",typ:V,tag:""},{prop:"Flushed",name:"Flushed",pkg:"",typ:$Bool,tag:""},{prop:"wroteHeader",name:"wroteHeader",pkg:"net/http/httptest",typ:$Bool,tag:""}]);ResponseRecordernet/http.Headernet/http/httptest.AG"net/http/httptest.ResponseRecordernet/http/httptest.Unet/http/httptest.V K�hK=$pkg.Server=$newType(0,$kindStruct,"httptest.Server","Server","net/http/httptest",function(URL_,Listener_,TLS_,Config_,wg_){this.$val=this;if(arguments.length===0){this.URL="";this.Listener=$ifaceNil;this.TLS=X.nil;this.Config=Y.nil;this.wg=new H.WaitGroup.ptr();return;}this.URL=URL_;this.Listener=Listener_;this.TLS=TLS_;this.Config=Config_;this.wg=wg_;});��AD.methods=[{prop:"Start",name:"Start",pkg:"",typ:$funcType([],[],false)},{prop:"StartTLS",name:"StartTLS",pkg:"",typ:$funcType([],[],false)},{prop:"wrapHandler",name:"wrapHandler",pkg:"net/http/httptest",typ:$funcType([],[],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[],false)},{prop:"CloseClientConnections",name:"CloseClientConnections",pkg:"",typ:$funcType([],[],false)}];�K.init([{prop:"URL",name:"URL",pkg:"",typ:$String,tag:""},{prop:"Listener",name:"Listener",pkg:"",typ:F.Listener,tag:""},{prop:"TLS",name:"TLS",pkg:"",typ:X,tag:""},{prop:"Config",name:"Config",pkg:"",typ:Y,tag:""},{prop:"wg",name:"wg",pkg:"net/http/httptest",typ:H.WaitGroup,tag:""}]);Servernet.Listenernet/http/httptest.ADnet/http/httptest.Servernet/http/httptest.Xnet/http/httptest.Ysync.WaitGroup L�OL=$pkg.historyListener=$newType(0,$kindStruct,"httptest.historyListener","historyListener","net/http/httptest",function(Listener_,Mutex_,history_){this.$val=this;if(arguments.length===0){this.Listener=$ifaceNil;this.Mutex=new H.Mutex.ptr();this.history=AA.nil;return;}this.Listener=Listener_;this.Mutex=Mutex_;this.history=history_;});ZAF.methods=[{prop:"Accept",name:"Accept",pkg:"",typ:$funcType([],[F.Conn,$error],false)}];��L.init([{prop:"Listener",name:"",pkg:"",typ:F.Listener,tag:""},{prop:"Mutex",name:"",pkg:"",typ:H.Mutex,tag:""},{prop:"history",name:"history",pkg:"net/http/httptest",typ:AA,tag:""}]);historyListenernet.Connnet.Listenernet/http/httptest.AAnet/http/httptest.AF!net/http/httptest.historyListener
sync.Mutex R��R=$pkg.waitGroupHandler=$newType(0,$kindStruct,"httptest.waitGroupHandler","waitGroupHandler","net/http/httptest",function(s_,h_){this.$val=this;if(arguments.length===0){this.s=AD.nil;this.h=$ifaceNil;return;}this.s=s_;this.h=h_;});fAI.methods=[{prop:"ServeHTTP",name:"ServeHTTP",pkg:"",typ:$funcType([B.ResponseWriter,AH],[],false)}];��R.init([{prop:"s",name:"s",pkg:"net/http/httptest",typ:AD,tag:""},{prop:"h",name:"h",pkg:"net/http/httptest",typ:B.Handler,tag:""}]);waitGroupHandlernet/http.Handlernet/http.Requestnet/http.ResponseWriternet/http/httptest.ADnet/http/httptest.AHnet/http/httptest.AI"net/http/httptest.waitGroupHandler UU=$sliceType($Uint8);U VV=$ptrType(A.Buffer);Vbytes.Buffer WW=$sliceType($emptyInterface);W XX=$ptrType(C.Config);Xcrypto/tls.Config YY=$ptrType(B.Server);Ynet/http.Server Z$Z=$ptrType($packages["log"].Logger);Z
log.Logger AAAA=$sliceType(F.Conn);AAnet.Conn ABAB=$sliceType($String);AB ACAC=$sliceType(C.Certificate);ACcrypto/tls.Certificate ADAD=$ptrType(K);ADnet/http/httptest.Server AEAE=$ptrType(B.Transport);AEnet/http.Transport AFAF=$ptrType(L);AF!net/http/httptest.historyListener AGAG=$ptrType(I);AG"net/http/httptest.ResponseRecorder AHAH=$ptrType(B.Request);AHnet/http.Request AIAI=$ptrType(R);AI"net/http/httptest.waitGroupHandler Nserve SlocalhostCert TlocalhostKey a��    a=D.String("httptest.serve","","if non-empty, httptest.NewServer serves on this address and blocks");$s=9;case 9:if($c){$c=false;a=a.$blk();}if(a&&a.$blk!==undefined){break s;}N=a;flag.Stringnet/http/httptest.serve �c    S=new U($stringToBytes("-----BEGIN CERTIFICATE-----\nMIIBdzCCASOgAwIBAgIBADALBgkqhkiG9w0BAQUwEjEQMA4GA1UEChMHQWNtZSBD\nbzAeFw03MDAxMDEwMDAwMDBaFw00OTEyMzEyMzU5NTlaMBIxEDAOBgNVBAoTB0Fj\nbWUgQ28wWjALBgkqhkiG9w0BAQEDSwAwSAJBAN55NcYKZeInyTuhcCwFMhDHCmwa\nIUSdtXdcbItRB/yfXGBhiex00IaLXQnSU+QZPRZWYqeTEbFSgihqi1PUDy8CAwEA\nAaNoMGYwDgYDVR0PAQH/BAQDAgCkMBMGA1UdJQQMMAoGCCsGAQUFBwMBMA8GA1Ud\nEwEB/wQFMAMBAf8wLgYDVR0RBCcwJYILZXhhbXBsZS5jb22HBH8AAAGHEAAAAAAA\nAAAAAAAAAAAAAAEwCwYJKoZIhvcNAQEFA0EAAoQn/ytgqpiLcZu9XKbCJsJcvkgk\nSe6AbGXgSlq+ZCEVo0qIwSgeBqmsJxUu7NCSOwVJLYNEBO2DtIxoYVk+MA==\n-----END CERTIFICATE-----"));localhostCertnet/http/httptest.Unet/http/httptest.localhostCert �    T=new U($stringToBytes("-----BEGIN RSA PRIVATE KEY-----\nMIIBPAIBAAJBAN55NcYKZeInyTuhcCwFMhDHCmwaIUSdtXdcbItRB/yfXGBhiex0\n0IaLXQnSU+QZPRZWYqeTEbFSgihqi1PUDy8CAwEAAQJBAQdUx66rfh8sYsgfdcvV\nNoafYpnEcB5s4m/vSVe6SU7dCK6eYec9f9wpT353ljhDUHq3EbmE4foNzJngh35d\nAekCIQDhRQG5Li0Wj8TM4obOnnXUXf1jRv0UkzE9AHWLG5q3AwIhAPzSjpYUDjVW\nMCUXgckTpKCuGwbJk7424Nb8bLzf3kllAiA5mUBgjfr/WtFSJdWcPQ4Zt9KTMNKD\nEUO0ukpTwEIl6wIhAMbGqZK3zAAFdq8DD2jPx+UJXnh0rnOkZBzDtJ6/iN69AiEA\n1Aq8MJgTaYsDQWyU/hDq5YkDJc9e9DSCvUIzqxQWMQE=\n-----END RSA PRIVATE KEY-----"));localhostKeynet/http/httptest.Unet/http/httptest.localhostKey net/http/httptest.NewRecorderJxJ=$pkg.NewRecorder=function(){var $ptr;      �return new I.ptr(200,new $Map(),new A.Buffer.ptr(),false,false);    };NewRecorderbytes.Buffernet/http/httptest.NewRecorder"net/http/httptest.ResponseRecordernet/http/httptest.V ,(*net/http/httptest.ResponseRecorder).Header��I.ptr.prototype.Header=function(){var $ptr,b,c;  Ob=this;      }c=b.HeaderMap;  �    if(c===false){  �c=new $Map();  �b.HeaderMap=c;    }  �return c;    };I.prototype.Header=function(){return this.$val.Header();};ResponseRecorder"net/http/httptest.ResponseRecorder +(*net/http/httptest.ResponseRecorder).Write�I.ptr.prototype.Write=function(b){var $ptr,b,c;  c=this;      S    if(!c.wroteHeader){  jc.WriteHeader(200);    }  �    if(!(c.Body===V.nil)){  �c.Body.Write(b);    }  �return[b.$length,$ifaceNil];    };I.prototype.Write=function(b){return this.$val.Write(b);};ResponseRecorder"net/http/httptest.ResponseRecordernet/http/httptest.V 1(*net/http/httptest.ResponseRecorder).WriteHeader��I.ptr.prototype.WriteHeader=function(b){var $ptr,b,c;  �c=this;          if(!c.wroteHeader){  0c.Code=b;    }  Cc.wroteHeader=true;    };I.prototype.WriteHeader=function(b){return this.$val.WriteHeader(b);};ResponseRecorder"net/http/httptest.ResponseRecorder +(*net/http/httptest.ResponseRecorder).Flush��I.ptr.prototype.Flush=function(){var $ptr,b;  �b=this;      �    if(!b.wroteHeader){  �b.WriteHeader(200);    }  �b.Flushed=true;    };I.prototype.Flush=function(){return this.$val.Flush();};ResponseRecorder"net/http/httptest.ResponseRecorder +(*net/http/httptest.historyListener).Accept��L.ptr.prototype.Accept=function $b(){var $ptr,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=$ifaceNil;c=$ifaceNil;  �d=this;      �f=d.Listener.Accept();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;b=e[0];c=e[1];  �if($interfaceIsEqual(c,$ifaceNil)){$s=2;continue;}$s=3;continue;    case 2:  	$r=d.Mutex.Lock();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  d.history=$append(d.history,b);  :$r=d.Mutex.Unlock();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 3:  Jreturn[b,c];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Accept=function(){return this.$val.Accept();};historyListener!net/http/httptest.historyListener "net/http/httptest.newLocalListenerM�0M=function $b(){var $ptr,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      |if(!(N.$get()==="")){$s=1;continue;}$s=2;continue;    case 1:  �b=F.Listen("tcp",N.$get());c=b[0];d=b[1];  �if(!($interfaceIsEqual(d,$ifaceNil))){$s=3;continue;}$s=4;continue;    case 3:  �e=E.Sprintf("httptest: failed to listen on %v: %v",new W([new $String(N.$get()),d]));$s=5;case 5:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$panic(new $String(e));    case 4:  return c;    case 2:  $f=F.Listen("tcp","127.0.0.1:0");g=f[0];h=f[1];  Pif(!($interfaceIsEqual(h,$ifaceNil))){$s=6;continue;}$s=7;continue;    case 6:  b  ei=F.Listen("tcp6","[::1]:0");g=i[0];h=i[1];if(!($interfaceIsEqual(h,$ifaceNil))){$s=8;continue;}$s=9;continue;    case 8:  �j=E.Sprintf("httptest: failed to listen on a port: %v",new W([h]));$s=10;case 10:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}$panic(new $String(j));    case 9:    case 7:  �return g;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};newLocalListenerfmt.Sprintf
net.Listennet/http/httptest.W"net/http/httptest.newLocalListenernet/http/httptest.serve net/http/httptest.NewServerO�&O=$pkg.NewServer=function $b(b){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      �c=P(b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  �$r=d.Start();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  return d;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};	NewServernet/http/httptest.NewServer$net/http/httptest.NewUnstartedServer $net/http/httptest.NewUnstartedServerP�iP=$pkg.NewUnstartedServer=function $b(b){var $ptr,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      %c=M();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}return new K.ptr("",c,X.nil,new B.Server.ptr("",b,new $packages["time"].Duration(0,0),new $packages["time"].Duration(0,0),0,X.nil,false,$throwNilPointerError,Z.nil,0),new H.WaitGroup.ptr());    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};NewUnstartedServercrypto/tls.Config
log.Loggernet/http.Server$net/http/httptest.NewUnstartedServernet/http/httptest.Servernet/http/httptest.Xnet/http/httptest.Ynet/http/httptest.Z"net/http/httptest.newLocalListenersync.WaitGrouptime.Duration !(*net/http/httptest.Server).Start��K.ptr.prototype.Start=function $b(){var $ptr,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;      �    if(!(b.URL==="")){  �$panic(new $String("Server already started"));    }  b.Listener=new L.ptr(b.Listener,new H.Mutex.ptr(),AA.nil);  Ac=b.Listener.Addr();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c.String();$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}b.URL="http://"+d;  qb.wrapHandler();  �$go($methodVal(b.Config,"Serve"),[b.Listener]);  �if(!(N.$get()==="")){$s=3;continue;}$s=4;continue;    case 3:  �e=E.Fprintln(G.Stderr,new W([new $String("httptest: serving on"),new $String(b.URL)]));$s=5;case 5:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  �g=$select([]);$s=6;case 6:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;    case 4:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.Start=function(){return this.$val.Start();};Server
fmt.Fprintlnnet.Connnet/http/httptest.AAnet/http/httptest.Servernet/http/httptest.W!net/http/httptest.historyListenernet/http/httptest.servenet/http/httptest.wrapHandler~	os.Stderr
sync.Mutex $(*net/http/httptest.Server).StartTLS��K.ptr.prototype.StartTLS=function $b(){var $ptr,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  @b=this;      Y    if(!(b.URL==="")){  l$panic(new $String("Server already started"));    }  �d=C.X509KeyPair(S,T);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=$clone(c[0],C.Certificate);f=c[1];  �if(!($interfaceIsEqual(f,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  �g=E.Sprintf("httptest: NewTLSServer: %v",new W([f]));$s=4;case 4:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}$panic(new $String(g));    case 3:  h=b.TLS;  1b.TLS=new C.Config.ptr();  J    if(!(h===X.nil)){  g$copy(b.TLS,h,C.Config);    }  �    if(b.TLS.NextProtos===AB.nil){  �b.TLS.NextProtos=new AB(["http/1.1"]);    }  �    if(b.TLS.Certificates.$length===0){  �b.TLS.Certificates=new AC([$clone(e,C.Certificate)]);    }  $i=C.NewListener(b.Listener,b.TLS);  Xb.Listener=new L.ptr(i,new H.Mutex.ptr(),AA.nil);  �j=b.Listener.Addr();$s=5;case 5:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=j.String();$s=6;case 6:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}b.URL="https://"+k;  �b.wrapHandler();  �$go($methodVal(b.Config,"Serve"),[b.Listener]);    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.StartTLS=function(){return this.$val.StartTLS();};Servercrypto/tls.Certificatecrypto/tls.Configcrypto/tls.NewListenercrypto/tls.X509KeyPairfmt.Sprintfnet/http/httptest.AAnet/http/httptest.ABnet/http/httptest.ACnet/http/httptest.Servernet/http/httptest.Wnet/http/httptest.X!net/http/httptest.historyListenernet/http/httptest.localhostCertnet/http/httptest.localhostKeynet/http/httptest.wrapHandler~
sync.Mutex '(*net/http/httptest.Server).wrapHandler�K.ptr.prototype.wrapHandler=function(){var $ptr,b,c;  �b=this;      c=b.Config.Handler;  *    if($interfaceIsEqual(c,$ifaceNil)){  :c=B.DefaultServeMux;    }  Wb.Config.Handler=new R.ptr(b,c);    };K.prototype.wrapHandler=function(){return this.$val.wrapHandler();};ServerwrapHandler~net/http.DefaultServeMuxnet/http/httptest.ADnet/http/httptest.Server"net/http/httptest.waitGroupHandler net/http/httptest.NewTLSServerQ�,Q=$pkg.NewTLSServer=function $b(b){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:      Ac=P(b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  d$r=d.StartTLS();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  sreturn d;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};NewTLSServernet/http/httptest.NewTLSServer$net/http/httptest.NewUnstartedServer !(*net/http/httptest.Server).Close��K.ptr.prototype.Close=function $b(){var $ptr,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;      c=b.Listener.Close();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}c;  $r=b.wg.Wait();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  ($r=b.CloseClientConnections();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  D  Gd=$assertType(B.DefaultTransport,AE,true);e=d[0];f=d[1];if(f){$s=4;continue;}$s=5;continue;    case 4:  �$r=e.CloseIdleConnections();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 5:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.Close=function(){return this.$val.Close();};Servernet/http.DefaultTransportnet/http.Transportnet/http/httptest.AEnet/http/httptest.Server 2(*net/http/httptest.Server).CloseClientConnections�^K.ptr.prototype.CloseClientConnections=function $b(){var $ptr,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  b=this;      (c=$assertType(b.Listener,AF,true);d=c[0];e=c[1];  Q    if(!e){  \return;    }  g$r=d.Mutex.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  rf=d.history;g=0;case 2:if(!(g<f.$length)){$s=3;continue;}h=((g<0||g>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+g]);  �i=h.Close();$s=4;case 4:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}i;    g++;$s=2;continue;case 3:  �$r=d.Mutex.Unlock();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.CloseClientConnections=function(){return this.$val.CloseClientConnections();};Servernet/http/httptest.AFnet/http/httptest.Server!net/http/httptest.historyListener /(*net/http/httptest.waitGroupHandler).ServeHTTP��R.ptr.prototype.ServeHTTP=function $b(b,c){var $ptr,b,c,d,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  �d=this;      $r=d.s.wg.Add(1);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  $deferred.push([$methodVal(d.s.wg,"Done"),[]]);  Q$r=d.h.ServeHTTP(b,c);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};R.prototype.ServeHTTP=function(b,c){return this.$val.ServeHTTP(b,c);};waitGroupHandler"net/http/httptest.waitGroupHandler �w{"Base":8516,"Files":[{"Name":"/usr/local/go/src/net/http/httptest/recorder.go","Base":1,"Size":1767,"Lines":[0,55,109,159,160,217,234,235,244,253,265,267,268,337,393,424,492,546,629,645,646,664,666,667,723,762,789,821,853,871,874,876,877,955,1019,1055,1056,1096,1147,1166,1181,1205,1224,1227,1237,1239,1240,1300,1361,1383,1405,1408,1429,1450,1453,1475,1477,1478,1507,1559,1581,1598,1601,1624,1626,1627,1661,1699,1721,1743,1746,1765],"Infos":null},{"Name":"/usr/local/go/src/net/http/httptest/server.go","Base":1769,"Size":6746,"Lines":[0,55,109,159,160,188,189,206,207,216,230,238,245,252,264,270,278,280,281,352,415,436,515,538,539,610,682,745,762,763,826,856,877,878,948,998,1017,1019,1020,1085,1098,1128,1142,1174,1197,1199,1200,1262,1293,1310,1322,1359,1373,1376,1384,1386,1387,1426,1445,1483,1501,1576,1580,1591,1594,1638,1655,1713,1784,1788,1791,1801,1803,1804,1859,1885,1943,2011,2127,2128,2174,2238,2285,2320,2332,2343,2345,2346,2411,2414,2483,2496,2499,2563,2619,2636,2668,2712,2715,2717,2718,2768,2795,2813,2847,2850,2903,2951,2968,2999,3018,3075,3087,3090,3092,3093,3153,3183,3201,3235,3238,3297,3314,3370,3373,3374,3399,3424,3452,3479,3482,3512,3554,3557,3592,3639,3642,3693,3694,3748,3797,3814,3845,3847,3848,3881,3904,3919,3946,3949,3988,3996,4004,4007,4009,4010,4069,4133,4183,4218,4233,4244,4246,4247,4311,4354,4381,4401,4414,4442,4501,4528,4531,4533,4534,4603,4626,4670,4711,4721,4730,4733,4744,4779,4794,4797,4810,4812,4813,4882,4949,4993,5024,5035,5062,5064,5065,5144,5159,5223,5244,5246,5247,5303,5376,5395,5429,5565,5621,5686,5751,5816,5881,5946,6011,6076,6137,6165,6166,6220,6279,6344,6409,6474,6539,6604,6669,6714],"Infos":null}]}
 