p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �I&��github.com/gopherjs/gopherjs/jsjs�@package js
var @"".Arguments []*@"".Object
func @"".Debugger() ()
type @"".Error struct { ? *@"".Object }
func (? *@"".Error) @"".Error() (? string)
func (? *@"".Error) @"".Stack() (? string)
var @"".Global *@"".Object
func @"".InternalObject(@"".i interface {  }) (? *@"".Object)
func @"".Keys(@"".o *@"".Object) (? []string)
type @"".M map[string]interface {  }
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
var @"".This *@"".Object
var @"".Undefined *@"".Object
$$
(Object��	Object = $pkg.Object = $newType(0, $kindStruct, "js.Object", "Object", "github.com/gopherjs/gopherjs/js", function(object_) {
		this.$val = this;
		this.object = object_ !== undefined ? object_ : null;
	});
��	ptrType.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([$String], [ptrType], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([$String, $emptyInterface], [], false)}, {prop: "Delete", name: "Delete", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Length", name: "Length", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Index", name: "Index", pkg: "", typ: $funcType([$Int], [ptrType], false)}, {prop: "SetIndex", name: "SetIndex", pkg: "", typ: $funcType([$Int, $emptyInterface], [], false)}, {prop: "Call", name: "Call", pkg: "", typ: $funcType([$String, sliceType$1], [ptrType], true)}, {prop: "Invoke", name: "Invoke", pkg: "", typ: $funcType([sliceType$1], [ptrType], true)}, {prop: "New", name: "New", pkg: "", typ: $funcType([sliceType$1], [ptrType], true)}, {prop: "Bool", name: "Bool", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Int", name: "Int", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Int64", name: "Int64", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "Uint64", name: "Uint64", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "Float", name: "Float", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Interface", name: "Interface", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Unsafe", name: "Unsafe", pkg: "", typ: $funcType([], [$Uintptr], false)}];
q	Object.init([{prop: "object", name: "object", pkg: "github.com/gopherjs/gopherjs/js", typ: ptrType, tag: ""}]);
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.ObjectGgithub.com/gopherjs/gopherjs/js:*github.com/gopherjs/gopherjs/js.Object-github.com/gopherjs/gopherjs/js:[]interface{} Error��	Error = $pkg.Error = $newType(0, $kindStruct, "js.Error", "Error", "github.com/gopherjs/gopherjs/js", function(Object_) {
		this.$val = this;
		this.Object = Object_ !== undefined ? Object_ : null;
	});
��	ptrType$1.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Stack", name: "Stack", pkg: "", typ: $funcType([], [$String], false)}];
K	Error.init([{prop: "Object", name: "", pkg: "", typ: ptrType, tag: ""}]);
%github.com/gopherjs/gopherjs/js.Error%github.com/gopherjs/gopherjs/js.ErrorFgithub.com/gopherjs/gopherjs/js:*github.com/gopherjs/gopherjs/js.ErrorGgithub.com/gopherjs/gopherjs/js:*github.com/gopherjs/gopherjs/js.Object M[	M = $pkg.M = $newType(4, $kindMap, "js.M", "M", "github.com/gopherjs/gopherjs/js", null);
#	M.init($String, $emptyInterface);
!github.com/gopherjs/gopherjs/js.M!github.com/gopherjs/gopherjs/js.M S^	S = $pkg.S = $newType(12, $kindSlice, "js.S", "S", "github.com/gopherjs/gopherjs/js", null);
	S.init($emptyInterface);
!github.com/gopherjs/gopherjs/js.S!github.com/gopherjs/gopherjs/js.S ptrType	ptrType = $ptrType(Object);
Ggithub.com/gopherjs/gopherjs/js:*github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object 	sliceType"	sliceType = $sliceType(ptrType);
Igithub.com/gopherjs/gopherjs/js:[]*github.com/gopherjs/gopherjs/js.ObjectGgithub.com/gopherjs/gopherjs/js:*github.com/gopherjs/gopherjs/js.Object sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
-github.com/gopherjs/gopherjs/js:[]interface{} sliceType$2$	sliceType$2 = $sliceType($String);
(github.com/gopherjs/gopherjs/js:[]string funcType5	funcType = $funcType([sliceType], [ptrType], true);
}github.com/gopherjs/gopherjs/js:func(args ...*github.com/gopherjs/gopherjs/js.Object) *github.com/gopherjs/gopherjs/js.ObjectGgithub.com/gopherjs/gopherjs/js:*github.com/gopherjs/gopherjs/js.ObjectIgithub.com/gopherjs/gopherjs/js:[]*github.com/gopherjs/gopherjs/js.Object 	ptrType$1	ptrType$1 = $ptrType(Error);
Fgithub.com/gopherjs/gopherjs/js:*github.com/gopherjs/gopherjs/js.Error%github.com/gopherjs/gopherjs/js.Error 		$pkg.Global = null;
&github.com/gopherjs/gopherjs/js.Global&github.com/gopherjs/gopherjs/js.Global 		$pkg.This = null;
$github.com/gopherjs/gopherjs/js.This$github.com/gopherjs/gopherjs/js.This "		$pkg.Arguments = sliceType.nil;
)github.com/gopherjs/gopherjs/js.Arguments)github.com/gopherjs/gopherjs/js.Arguments&github.com/gopherjs/gopherjs/js.ObjectGgithub.com/gopherjs/gopherjs/js:*github.com/gopherjs/gopherjs/js.ObjectIgithub.com/gopherjs/gopherjs/js:[]*github.com/gopherjs/gopherjs/js.Object 		$pkg.Module = null;
&github.com/gopherjs/gopherjs/js.Module&github.com/gopherjs/gopherjs/js.Module 		$pkg.Undefined = null;
)github.com/gopherjs/gopherjs/js.Undefined)github.com/gopherjs/gopherjs/js.Undefined -(*github.com/gopherjs/gopherjs/js.Object).Get��	Object.ptr.prototype.Get = function(key) {
		var key, o;
  	�		o = this;
  	�		return o.object[$externalize(key, $String)];
    	};
	Object.prototype.Get = function(key) { return this.$val.Get(key); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object -(*github.com/gopherjs/gopherjs/js.Object).Set�
	Object.ptr.prototype.Set = function(key, value) {
		var key, o, value;
  
]		o = this;
  
�		o.object[$externalize(key, $String)] = $externalize(value, $emptyInterface);
    	};
	Object.prototype.Set = function(key, value) { return this.$val.Set(key, value); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Delete��	Object.ptr.prototype.Delete = function(key) {
		var key, o;
  
�		o = this;
  		delete o.object[$externalize(key, $String)];
    	};
	Object.prototype.Delete = function(key) { return this.$val.Delete(key); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Length��	Object.ptr.prototype.Length = function() {
		var o;
  m		o = this;
  �		return $parseInt(o.object.length);
    	};
	Object.prototype.Length = function() { return this.$val.Length(); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Index��	Object.ptr.prototype.Index = function(i) {
		var i, o;
  �		o = this;
  �		return o.object[i];
    	};
	Object.prototype.Index = function(i) { return this.$val.Index(i); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object 2(*github.com/gopherjs/gopherjs/js.Object).SetIndex��	Object.ptr.prototype.SetIndex = function(i, value) {
		var i, o, value;
  K		o = this;
  {		o.object[i] = $externalize(value, $emptyInterface);
    	};
	Object.prototype.SetIndex = function(i, value) { return this.$val.SetIndex(i, value); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object .(*github.com/gopherjs/gopherjs/js.Object).Call�,	Object.ptr.prototype.Call = function(name, args) {
		var args, name, o, obj;
  �		o = this;
  		return (obj = o.object, obj[$externalize(name, $String)].apply(obj, $externalize(args, sliceType$1)));
    	};
	Object.prototype.Call = function(name, args) { return this.$val.Call(name, args); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object-github.com/gopherjs/gopherjs/js:[]interface{} 0(*github.com/gopherjs/gopherjs/js.Object).Invoke��	Object.ptr.prototype.Invoke = function(args) {
		var args, o;
  �		o = this;
  �		return o.object.apply(undefined, $externalize(args, sliceType$1));
    	};
	Object.prototype.Invoke = function(args) { return this.$val.Invoke(args); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object-github.com/gopherjs/gopherjs/js:[]interface{} -(*github.com/gopherjs/gopherjs/js.Object).New�	Object.ptr.prototype.New = function(args) {
		var args, o;
  K		o = this;
  y		return new ($global.Function.prototype.bind.apply(o.object, [undefined].concat($externalize(args, sliceType$1))));
    	};
	Object.prototype.New = function(args) { return this.$val.New(args); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object-github.com/gopherjs/gopherjs/js:[]interface{} .(*github.com/gopherjs/gopherjs/js.Object).Bool��	Object.ptr.prototype.Bool = function() {
		var o;
  �		o = this;
  		return !!(o.object);
    	};
	Object.prototype.Bool = function() { return this.$val.Bool(); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).String��	Object.ptr.prototype.String = function() {
		var o;
  �		o = this;
  �		return $internalize(o.object, $String);
    	};
	Object.prototype.String = function() { return this.$val.String(); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object -(*github.com/gopherjs/gopherjs/js.Object).Int��	Object.ptr.prototype.Int = function() {
		var o;
  )		o = this;
  @		return $parseInt(o.object) >> 0;
    	};
	Object.prototype.Int = function() { return this.$val.Int(); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Int64��	Object.ptr.prototype.Int64 = function() {
		var o;
  �		o = this;
  �		return $internalize(o.object, $Int64);
    	};
	Object.prototype.Int64 = function() { return this.$val.Int64(); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Uint64��	Object.ptr.prototype.Uint64 = function() {
		var o;
  e		o = this;
  �		return $internalize(o.object, $Uint64);
    	};
	Object.prototype.Uint64 = function() { return this.$val.Uint64(); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Float��	Object.ptr.prototype.Float = function() {
		var o;
  		o = this;
  )		return $parseFloat(o.object);
    	};
	Object.prototype.Float = function() { return this.$val.Float(); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object 3(*github.com/gopherjs/gopherjs/js.Object).Interface��	Object.ptr.prototype.Interface = function() {
		var o;
  �		o = this;
  �		return $internalize(o.object, $emptyInterface);
    	};
	Object.prototype.Interface = function() { return this.$val.Interface(); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Unsafe��	Object.ptr.prototype.Unsafe = function() {
		var o;
  d		o = this;
  �		return o.object;
    	};
	Object.prototype.Unsafe = function() { return this.$val.Unsafe(); };
&github.com/gopherjs/gopherjs/js.Object&github.com/gopherjs/gopherjs/js.Object .(*github.com/gopherjs/gopherjs/js.Error).Error��	Error.ptr.prototype.Error = function() {
		var err;
  �		err = this;
  �		return "JavaScript error: " + $internalize(err.Object.message, $String);
    	};
	Error.prototype.Error = function() { return this.$val.Error(); };
%github.com/gopherjs/gopherjs/js.Error%github.com/gopherjs/gopherjs/js.Error .(*github.com/gopherjs/gopherjs/js.Error).Stack��	Error.ptr.prototype.Stack = function() {
		var err;
  W		err = this;
  u		return $internalize(err.Object.stack, $String);
    	};
	Error.prototype.Stack = function() { return this.$val.Stack(); };
%github.com/gopherjs/gopherjs/js.Error%github.com/gopherjs/gopherjs/js.Error (github.com/gopherjs/gopherjs/js.DebuggerDebugger2	Debugger = $pkg.Debugger = function() {
    	};
(github.com/gopherjs/gopherjs/js.Debugger(github.com/gopherjs/gopherjs/js.Debugger .github.com/gopherjs/gopherjs/js.InternalObjectInternalObject\	InternalObject = $pkg.InternalObject = function(i) {
		var i;
  		return null;
    	};
.github.com/gopherjs/gopherjs/js.InternalObject.github.com/gopherjs/gopherjs/js.InternalObject $github.com/gopherjs/gopherjs/js.KeysKeys�		Keys = $pkg.Keys = function(o) {
		var a, i, o, s;
  �    		if (o === undefined || o === null) {
  �			return sliceType$2.nil;
    		}
  �		a = $global.Object.keys(o);
  �		s = $makeSlice(sliceType$2, $parseInt(a.length));
  �  		i = 0;
		while (true) {
			if (!(i < $parseInt(a.length))) { break; }
  #			(i < 0 || i >= s.$length) ? $throwRuntimeError("index out of range") : s.$array[s.$offset + i] = $internalize(a[i], $String);
        			i = i + (1) >> 0;
    		}
  B		return s;
    	};
$github.com/gopherjs/gopherjs/js.Keys$github.com/gopherjs/gopherjs/js.Keys(github.com/gopherjs/gopherjs/js:[]string +github.com/gopherjs/gopherjs/js.MakeWrapperMakeWrapper�	MakeWrapper = $pkg.MakeWrapper = function(i) {
		var i, i$1, m, methods, o, v;
  )		v = i;
  A		o = new ($global.Object)();
  b		methods = v.constructor.methods;
  �  �		i$1 = 0;
		while (true) {
			if (!(i$1 < $parseInt(methods.length))) { break; }
			m = [undefined];
  �			m[0] = methods[i$1];
  �    			if (!($internalize(m[0].pkg, $String) === "")) {
    �  �				i$1 = i$1 + (1) >> 0;
    				continue;
    			}
  			o[$externalize($internalize(m[0].name, $String), $String)] = $externalize((function(m) { return function(args) {
				var _i, _ref, _ref$1, a, args, i$2, i$3, internalizedArgs, obj, paramTypes, result, resultTypes;
  X				paramTypes = m[0].typ.params;
  �				internalizedArgs = $makeSlice(sliceType$1, $parseInt(paramTypes.length));
  �				_ref = internalizedArgs;
				_i = 0;
				while (true) {
					if (!(_i < _ref.$length)) { break; }
					i$2 = _i;
  �					(i$2 < 0 || i$2 >= internalizedArgs.$length) ? $throwRuntimeError("index out of range") : internalizedArgs.$array[internalizedArgs.$offset + i$2] = new $jsObjectPtr($internalize(((i$2 < 0 || i$2 >= args.$length) ? $throwRuntimeError("index out of range") : args.$array[args.$offset + i$2]), paramTypes[i$2]));
    					_i++;
				}
  B				result = (obj = v, obj[$externalize($internalize(m[0].prop, $String), $String)].apply(obj, $externalize(internalizedArgs, sliceType$1)));
  �				resultTypes = m[0].typ.results;
  �				_ref$1 = $parseInt(resultTypes.length);
  �				if (_ref$1 === 0) {
  �					return null;
      �				} else if (_ref$1 === 1) {
  �					return $externalize(result, resultTypes[0]);
    				} else {
  I					a = new ($global.Array)($parseInt(resultTypes.length));
  �  �					i$3 = 0;
					while (true) {
						if (!(i$3 < $parseInt(resultTypes.length))) { break; }
  �						a[i$3] = $externalize(result[i$3], resultTypes[i$3]);
      �  �						i$3 = i$3 + (1) >> 0;
    					}
  					return a;
    				}
    			}; })(m), funcType);
      �  �			i$1 = i$1 + (1) >> 0;
    		}
  $		return o;
    	};
+github.com/gopherjs/gopherjs/js.MakeWrapper+github.com/gopherjs/gopherjs/js.MakeWrapperGgithub.com/gopherjs/gopherjs/js:*github.com/gopherjs/gopherjs/js.ObjectIgithub.com/gopherjs/gopherjs/js:[]*github.com/gopherjs/gopherjs/js.Object-github.com/gopherjs/gopherjs/js:[]interface{}}github.com/gopherjs/gopherjs/js:func(args ...*github.com/gopherjs/gopherjs/js.Object) *github.com/gopherjs/gopherjs/js.Object .github.com/gopherjs/gopherjs/js.NewArrayBufferNewArrayBuffer�	NewArrayBuffer = $pkg.NewArrayBuffer = function(b) {
		var b, length, offset, slice;
  �		slice = b;
  �		offset = $parseInt(slice.$offset) >> 0;
  �		length = $parseInt(slice.$length) >> 0;
   		return slice.$array.buffer.slice(offset, offset + length >> 0);
    	};
.github.com/gopherjs/gopherjs/js.NewArrayBuffer.github.com/gopherjs/gopherjs/js.NewArrayBuffer $github.com/gopherjs/gopherjs/js.initinitL	init = function() {
		var e;
  !�		e = new Error.ptr(null);
  !�    	};
    		init();
%github.com/gopherjs/gopherjs/js.Error$github.com/gopherjs/gopherjs/js.init �{"Base":8606,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/js/js.go","Base":1,"Size":8604,"Lines":[0,203,206,326,329,417,505,593,681,769,857,945,1033,1121,1209,1297,1385,1473,1561,1649,1737,1825,1913,2001,2004,2140,2151,2152,2410,2447,2448,2505,2575,2576,2646,2727,2728,2788,2849,2850,2918,2977,2978,3025,3092,3093,3140,3224,3225,3280,3384,3385,3460,3549,3550,3652,3735,3736,3823,3879,3880,3971,4033,4034,4130,4183,4184,4284,4343,4344,4446,4508,4509,4613,4674,4675,4767,4840,4841,4957,5020,5021,5172,5192,5201,5203,5204,5278,5313,5372,5374,5375,5456,5491,5525,5527,5528,5621,5640,5641,5766,5783,5784,5919,5943,5944,6093,6112,6113,6166,6188,6189,6254,6273,6274,6379,6424,6436,6438,6439,6496,6528,6561,6574,6577,6620,6653,6688,6717,6720,6730,6732,6733,6909,6951,6975,7008,7056,7097,7121,7172,7184,7188,7252,7296,7360,7397,7481,7486,7551,7597,7630,7641,7656,7667,7736,7748,7803,7851,7938,7944,7957,7962,7967,7970,7980,7982,7983,8053,8093,8121,8159,8197,8276,8278,8279,8380,8410,8411,8513,8534,8535,8549,8581,8595,8602],"Infos":null}]}
 