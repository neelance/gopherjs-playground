p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �=���github.com/gopherjs/gopherjs/jsjs�xpackage js
func @"".Debugger() ()
type @"".Error struct { ? *@"".Object }
func (? *@"".Error) @"".Error() (? string)
func (? *@"".Error) @"".Stack() (? string)
var @"".Global *@"".Object
func @"".InternalObject(@"".i interface {  }) (? *@"".Object)
func @"".Keys(@"".o *@"".Object) (? []string)
type @"".M map[string]interface {  }
func @"".MakeFunc(? func (@"".this *@"".Object, @"".arguments []*@"".Object) (? interface {  })) (? *@"".Object)
func @"".MakeWrapper(@"".i interface {  }) (? *@"".Object)
var @"".Module *@"".Object
func @"".NewArrayBuffer(@"".b []byte) (? *@"".Object)
type @"".Object struct { @"".object *@"".Object }
func (? *@"".Object) @"".Bool() (? bool)
func (? *@"".Object) @"".Call(@"".name string, @"".args ...interface {  }) (? *@"".Object)
func (? *@"".Object) @"".Delete(@"".key string) ()
func (? *@"".Object) @"".Float() (? float64)
func (? *@"".Object) @"".Get(@"".key string) (? *@"".Object)
func (? *@"".Object) @"".Index(@"".i int) (? *@"".Object)
func (? *@"".Object) @"".Int() (? int)
func (? *@"".Object) @"".Int64() (? int64)
func (? *@"".Object) @"".Interface() (? interface {  })
func (? *@"".Object) @"".Invoke(@"".args ...interface {  }) (? *@"".Object)
func (? *@"".Object) @"".Length() (? int)
func (? *@"".Object) @"".New(@"".args ...interface {  }) (? *@"".Object)
func (? *@"".Object) @"".Set(@"".key string, @"".value interface {  }) ()
func (? *@"".Object) @"".SetIndex(@"".i int, @"".value interface {  }) ()
func (? *@"".Object) @"".String() (? string)
func (? *@"".Object) @"".Uint64() (? uint64)
func (? *@"".Object) @"".Unsafe() (? uintptr)
type @"".S []interface {  }
var @"".Undefined *@"".Object
$$
'Object��	Object = $pkg.Object = $newType(0, $kindStruct, "js.Object", "Object", "github.com/gopherjs/gopherjs/js", function(object_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.object = null;
			return;
		}
		this.object = object_;
	});
��	ptrType.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([$String], [ptrType], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([$String, $emptyInterface], [], false)}, {prop: "Delete", name: "Delete", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Length", name: "Length", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Index", name: "Index", pkg: "", typ: $funcType([$Int], [ptrType], false)}, {prop: "SetIndex", name: "SetIndex", pkg: "", typ: $funcType([$Int, $emptyInterface], [], false)}, {prop: "Call", name: "Call", pkg: "", typ: $funcType([$String, sliceType], [ptrType], true)}, {prop: "Invoke", name: "Invoke", pkg: "", typ: $funcType([sliceType], [ptrType], true)}, {prop: "New", name: "New", pkg: "", typ: $funcType([sliceType], [ptrType], true)}, {prop: "Bool", name: "Bool", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Int", name: "Int", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Int64", name: "Int64", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "Uint64", name: "Uint64", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "Float", name: "Float", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Interface", name: "Interface", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Unsafe", name: "Unsafe", pkg: "", typ: $funcType([], [$Uintptr], false)}];
q	Object.init([{prop: "object", name: "object", pkg: "github.com/gopherjs/gopherjs/js", typ: ptrType, tag: ""}]);
Object&github.com/gopherjs/gopherjs/js.Object'github.com/gopherjs/gopherjs/js.ptrType)github.com/gopherjs/gopherjs/js.sliceType Error��	Error = $pkg.Error = $newType(0, $kindStruct, "js.Error", "Error", "github.com/gopherjs/gopherjs/js", function(Object_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Object = null;
			return;
		}
		this.Object = Object_;
	});
��	ptrType$1.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Stack", name: "Stack", pkg: "", typ: $funcType([], [$String], false)}];
K	Error.init([{prop: "Object", name: "", pkg: "", typ: ptrType, tag: ""}]);
Error%github.com/gopherjs/gopherjs/js.Error'github.com/gopherjs/gopherjs/js.ptrType)github.com/gopherjs/gopherjs/js.ptrType$1 M[	M = $pkg.M = $newType(4, $kindMap, "js.M", "M", "github.com/gopherjs/gopherjs/js", null);
#	M.init($String, $emptyInterface);
M!github.com/gopherjs/gopherjs/js.M S^	S = $pkg.S = $newType(12, $kindSlice, "js.S", "S", "github.com/gopherjs/gopherjs/js", null);
	S.init($emptyInterface);
S!github.com/gopherjs/gopherjs/js.S 	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType sliceType$1$	sliceType$1 = $sliceType($String);
sliceType$1 ptrType	ptrType = $ptrType(Object);
ptrType&github.com/gopherjs/gopherjs/js.Object sliceType$2$	sliceType$2 = $sliceType(ptrType);
sliceType$2'github.com/gopherjs/gopherjs/js.ptrType funcType7	funcType = $funcType([sliceType$2], [ptrType], true);
funcType'github.com/gopherjs/gopherjs/js.ptrType+github.com/gopherjs/gopherjs/js.sliceType$2 	ptrType$1	ptrType$1 = $ptrType(Error);
	ptrType$1%github.com/gopherjs/gopherjs/js.Error 		$pkg.Global = null;
Global&github.com/gopherjs/gopherjs/js.Global 		$pkg.Module = null;
Module&github.com/gopherjs/gopherjs/js.Module 		$pkg.Undefined = null;
	Undefined)github.com/gopherjs/gopherjs/js.Undefined -(*github.com/gopherjs/gopherjs/js.Object).Get��	Object.ptr.prototype.Get = function(key) {
		var $ptr, key, o;
  	�		o = this;
      	�		return o.object[$externalize(key, $String)];
    	};
	Object.prototype.Get = function(key) { return this.$val.Get(key); };
Object&github.com/gopherjs/gopherjs/js.Object -(*github.com/gopherjs/gopherjs/js.Object).Set�	Object.ptr.prototype.Set = function(key, value) {
		var $ptr, key, o, value;
  
e		o = this;
      
�		o.object[$externalize(key, $String)] = $externalize(value, $emptyInterface);
    	};
	Object.prototype.Set = function(key, value) { return this.$val.Set(key, value); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Delete��	Object.ptr.prototype.Delete = function(key) {
		var $ptr, key, o;
  
�		o = this;
      		delete o.object[$externalize(key, $String)];
    	};
	Object.prototype.Delete = function(key) { return this.$val.Delete(key); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Length��	Object.ptr.prototype.Length = function() {
		var $ptr, o;
  u		o = this;
      �		return $parseInt(o.object.length);
    	};
	Object.prototype.Length = function() { return this.$val.Length(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Index��	Object.ptr.prototype.Index = function(i) {
		var $ptr, i, o;
  �		o = this;
      		return o.object[i];
    	};
	Object.prototype.Index = function(i) { return this.$val.Index(i); };
Object&github.com/gopherjs/gopherjs/js.Object 2(*github.com/gopherjs/gopherjs/js.Object).SetIndex�	Object.ptr.prototype.SetIndex = function(i, value) {
		var $ptr, i, o, value;
  S		o = this;
      �		o.object[i] = $externalize(value, $emptyInterface);
    	};
	Object.prototype.SetIndex = function(i, value) { return this.$val.SetIndex(i, value); };
Object&github.com/gopherjs/gopherjs/js.Object .(*github.com/gopherjs/gopherjs/js.Object).Call�5	Object.ptr.prototype.Call = function(name, args) {
		var $ptr, args, name, o, obj;
  �		o = this;
      		return (obj = o.object, obj[$externalize(name, $String)].apply(obj, $externalize(args, sliceType)));
    	};
	Object.prototype.Call = function(name, args) { return this.$val.Call(name, args); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType 0(*github.com/gopherjs/gopherjs/js.Object).Invoke��	Object.ptr.prototype.Invoke = function(args) {
		var $ptr, args, o;
  �		o = this;
      �		return o.object.apply(undefined, $externalize(args, sliceType));
    	};
	Object.prototype.Invoke = function(args) { return this.$val.Invoke(args); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType -(*github.com/gopherjs/gopherjs/js.Object).New�!	Object.ptr.prototype.New = function(args) {
		var $ptr, args, o;
  S		o = this;
      �		return new ($global.Function.prototype.bind.apply(o.object, [undefined].concat($externalize(args, sliceType))));
    	};
	Object.prototype.New = function(args) { return this.$val.New(args); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType .(*github.com/gopherjs/gopherjs/js.Object).Bool��	Object.ptr.prototype.Bool = function() {
		var $ptr, o;
  �		o = this;
      		return !!(o.object);
    	};
	Object.prototype.Bool = function() { return this.$val.Bool(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).String��	Object.ptr.prototype.String = function() {
		var $ptr, o;
  �		o = this;
      �		return $internalize(o.object, $String);
    	};
	Object.prototype.String = function() { return this.$val.String(); };
Object&github.com/gopherjs/gopherjs/js.Object -(*github.com/gopherjs/gopherjs/js.Object).Int��	Object.ptr.prototype.Int = function() {
		var $ptr, o;
  1		o = this;
      H		return $parseInt(o.object) >> 0;
    	};
	Object.prototype.Int = function() { return this.$val.Int(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Int64��	Object.ptr.prototype.Int64 = function() {
		var $ptr, o;
  �		o = this;
      �		return $internalize(o.object, $Int64);
    	};
	Object.prototype.Int64 = function() { return this.$val.Int64(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Uint64��	Object.ptr.prototype.Uint64 = function() {
		var $ptr, o;
  m		o = this;
      �		return $internalize(o.object, $Uint64);
    	};
	Object.prototype.Uint64 = function() { return this.$val.Uint64(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Float��	Object.ptr.prototype.Float = function() {
		var $ptr, o;
  		o = this;
      1		return $parseFloat(o.object);
    	};
	Object.prototype.Float = function() { return this.$val.Float(); };
Object&github.com/gopherjs/gopherjs/js.Object 3(*github.com/gopherjs/gopherjs/js.Object).Interface��	Object.ptr.prototype.Interface = function() {
		var $ptr, o;
  �		o = this;
      �		return $internalize(o.object, $emptyInterface);
    	};
	Object.prototype.Interface = function() { return this.$val.Interface(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Unsafe��	Object.ptr.prototype.Unsafe = function() {
		var $ptr, o;
  l		o = this;
      �		return o.object;
    	};
	Object.prototype.Unsafe = function() { return this.$val.Unsafe(); };
Object&github.com/gopherjs/gopherjs/js.Object .(*github.com/gopherjs/gopherjs/js.Error).Error��	Error.ptr.prototype.Error = function() {
		var $ptr, err;
  �		err = this;
      �		return "JavaScript error: " + $internalize(err.Object.message, $String);
    	};
	Error.prototype.Error = function() { return this.$val.Error(); };
Error%github.com/gopherjs/gopherjs/js.Error .(*github.com/gopherjs/gopherjs/js.Error).Stack��	Error.ptr.prototype.Stack = function() {
		var $ptr, err;
  _		err = this;
      }		return $internalize(err.Object.stack, $String);
    	};
	Error.prototype.Stack = function() { return this.$val.Stack(); };
Error%github.com/gopherjs/gopherjs/js.Error (github.com/gopherjs/gopherjs/js.DebuggerDebuggerC	Debugger = $pkg.Debugger = function() {
		var $ptr;
        	};
Debugger(github.com/gopherjs/gopherjs/js.Debugger .github.com/gopherjs/gopherjs/js.InternalObjectInternalObjectg	InternalObject = $pkg.InternalObject = function(i) {
		var $ptr, i;
      �		return null;
    	};
InternalObject.github.com/gopherjs/gopherjs/js.InternalObject (github.com/gopherjs/gopherjs/js.MakeFuncMakeFuncc	MakeFunc = $pkg.MakeFunc = function(param) {
		var $ptr, param;
      �		return null;
    	};
MakeFunc(github.com/gopherjs/gopherjs/js.MakeFunc $github.com/gopherjs/gopherjs/js.KeysKeys�	Keys = $pkg.Keys = function(o) {
		var $ptr, a, i, o, s;
      $    		if (o === null || o === undefined) {
  F			return sliceType$1.nil;
    		}
  U		a = $global.Object.keys(o);
  �		s = $makeSlice(sliceType$1, $parseInt(a.length));
  �  �		i = 0;
		while (true) {
			if (!(i < $parseInt(a.length))) { break; }
  �			((i < 0 || i >= s.$length) ? $throwRuntimeError("index out of range") : s.$array[s.$offset + i] = $internalize(a[i], $String));
      �  �			i = i + (1) >> 0;
    		}
  �		return s;
    	};
Keys$github.com/gopherjs/gopherjs/js.Keys+github.com/gopherjs/gopherjs/js.sliceType$1 +github.com/gopherjs/gopherjs/js.MakeWrapperMakeWrapper�E	MakeWrapper = $pkg.MakeWrapper = function(i) {
		var $ptr, i, i$1, m, methods, o, v;
      �		v = i;
  �		o = new ($global.Object)();
  �		methods = v.constructor.methods;
  /  3		i$1 = 0;
		while (true) {
			if (!(i$1 < $parseInt(methods.length))) { break; }
			m = [m];
  Y			m[0] = methods[i$1];
  q    			if (!($internalize(m[0].pkg, $String) === "")) {
  �  Q  Q				i$1 = i$1 + (1) >> 0;
    				continue;
    			}
  �			o[$externalize($internalize(m[0].name, $String), $String)] = $externalize((function(m) { return function(args) {
				var $ptr, args;
      �				return $externalize(v[$externalize($internalize(m[0].prop, $String), $String)], m[0].typ).apply(v, $externalize(args, sliceType$2));
    			}; })(m), funcType);
      Q  Q			i$1 = i$1 + (1) >> 0;
    		}
  e		return o;
    	};
MakeWrapper+github.com/gopherjs/gopherjs/js.MakeWrapper&github.com/gopherjs/gopherjs/js.Object(github.com/gopherjs/gopherjs/js.funcType'github.com/gopherjs/gopherjs/js.ptrType+github.com/gopherjs/gopherjs/js.sliceType$2 .github.com/gopherjs/gopherjs/js.NewArrayBufferNewArrayBuffer�!	NewArrayBuffer = $pkg.NewArrayBuffer = function(b) {
		var $ptr, b, length, offset, slice;
      �		slice = b;
  �		offset = $parseInt(slice.$offset) >> 0;
  "		length = $parseInt(slice.$length) >> 0;
  H		return slice.$array.buffer.slice(offset, offset + length >> 0);
    	};
NewArrayBuffer.github.com/gopherjs/gopherjs/js.NewArrayBuffer $github.com/gopherjs/gopherjs/js.initinitW	init = function() {
		var $ptr, e;
      �		e = new Error.ptr(null);
  �    	};
    		init();
%github.com/gopherjs/gopherjs/js.Error$github.com/gopherjs/gopherjs/js.init ��{"Base":7903,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/js/js.go","Base":1,"Size":7901,"Lines":[0,203,206,334,337,425,513,601,689,777,865,953,1041,1129,1217,1305,1393,1481,1569,1657,1745,1833,1921,2009,2012,2148,2159,2160,2418,2455,2456,2513,2583,2584,2654,2735,2736,2796,2857,2858,2926,2985,2986,3033,3100,3101,3148,3232,3233,3288,3392,3393,3468,3557,3558,3660,3743,3744,3831,3887,3888,3979,4041,4042,4138,4191,4192,4292,4351,4352,4454,4516,4517,4621,4682,4683,4775,4848,4849,4965,5028,5029,5180,5200,5209,5211,5212,5286,5321,5380,5382,5383,5464,5499,5533,5535,5536,5629,5648,5649,5798,5817,5818,5871,5893,5894,5959,5978,5979,6084,6129,6141,6143,6144,6253,6330,6342,6344,6345,6402,6434,6467,6480,6483,6526,6559,6594,6623,6626,6636,6638,6639,6810,6852,6876,6909,6957,6998,7022,7073,7085,7089,7153,7259,7264,7267,7277,7279,7280,7350,7390,7418,7456,7494,7573,7575,7576,7677,7707,7708,7810,7831,7832,7846,7878,7892,7899],"Infos":null}]}
 