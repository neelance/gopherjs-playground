p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �4��#github.com/gopherjs/gopherjs/nosyncnosync�0package nosync
type @"".Mutex struct { @"".locked bool }
func (? *@"".Mutex) @"".Lock() ()
func (? *@"".Mutex) @"".Unlock() ()
type @"".Once struct { @"".doing bool; @"".done bool }
func (? *@"".Once) @"".Do(@"".f func () ()) ()
type @"".Pool struct { @"".store []interface {  }; @"".New func () (? interface {  }) }
func (? *@"".Pool) @"".Get() (? interface {  })
func (? *@"".Pool) @"".Put(@"".x interface {  }) ()
type @"".RWMutex struct { @"".writeLocked bool; @"".readLockCounter int }
func (? *@"".RWMutex) @"".Lock() ()
func (? *@"".RWMutex) @"".RLock() ()
func (? *@"".RWMutex) @"".RUnlock() ()
func (? *@"".RWMutex) @"".Unlock() ()
type @"".WaitGroup struct { @"".counter int }
func (? *@"".WaitGroup) @"".Add(@"".delta int) ()
func (? *@"".WaitGroup) @"".Done() ()
func (? *@"".WaitGroup) @"".Wait() ()
$$
Mutex��	Mutex = $pkg.Mutex = $newType(0, $kindStruct, "nosync.Mutex", "Mutex", "github.com/gopherjs/gopherjs/nosync", function(locked_) {
		this.$val = this;
		this.locked = locked_ !== undefined ? locked_ : false;
	});
��	ptrType.methods = [{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}];
r	Mutex.init([{prop: "locked", name: "locked", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}]);
)github.com/gopherjs/gopherjs/nosync.Mutex)github.com/gopherjs/gopherjs/nosync.MutexNgithub.com/gopherjs/gopherjs/nosync:*github.com/gopherjs/gopherjs/nosync.Mutex RWMutex�S	RWMutex = $pkg.RWMutex = $newType(0, $kindStruct, "nosync.RWMutex", "RWMutex", "github.com/gopherjs/gopherjs/nosync", function(writeLocked_, readLockCounter_) {
		this.$val = this;
		this.writeLocked = writeLocked_ !== undefined ? writeLocked_ : false;
		this.readLockCounter = readLockCounter_ !== undefined ? readLockCounter_ : 0;
	});
�;	ptrType$1.methods = [{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}, {prop: "RLock", name: "RLock", pkg: "", typ: $funcType([], [], false)}, {prop: "RUnlock", name: "RUnlock", pkg: "", typ: $funcType([], [], false)}];
��	RWMutex.init([{prop: "writeLocked", name: "writeLocked", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}, {prop: "readLockCounter", name: "readLockCounter", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Int, tag: ""}]);
+github.com/gopherjs/gopherjs/nosync.RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutexPgithub.com/gopherjs/gopherjs/nosync:*github.com/gopherjs/gopherjs/nosync.RWMutex 	WaitGroup��	WaitGroup = $pkg.WaitGroup = $newType(0, $kindStruct, "nosync.WaitGroup", "WaitGroup", "github.com/gopherjs/gopherjs/nosync", function(counter_) {
		this.$val = this;
		this.counter = counter_ !== undefined ? counter_ : 0;
	});
��	ptrType$2.methods = [{prop: "Add", name: "Add", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Done", name: "Done", pkg: "", typ: $funcType([], [], false)}, {prop: "Wait", name: "Wait", pkg: "", typ: $funcType([], [], false)}];
w	WaitGroup.init([{prop: "counter", name: "counter", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Int, tag: ""}]);
-github.com/gopherjs/gopherjs/nosync.WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroupRgithub.com/gopherjs/gopherjs/nosync:*github.com/gopherjs/gopherjs/nosync.WaitGroup Once�	Once = $pkg.Once = $newType(0, $kindStruct, "nosync.Once", "Once", "github.com/gopherjs/gopherjs/nosync", function(doing_, done_) {
		this.$val = this;
		this.doing = doing_ !== undefined ? doing_ : false;
		this.done = done_ !== undefined ? done_ : false;
	});
a	ptrType$3.methods = [{prop: "Do", name: "Do", pkg: "", typ: $funcType([funcType], [], false)}];
��	Once.init([{prop: "doing", name: "doing", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}, {prop: "done", name: "done", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}]);
(github.com/gopherjs/gopherjs/nosync.Once(github.com/gopherjs/gopherjs/nosync.OnceMgithub.com/gopherjs/gopherjs/nosync:*github.com/gopherjs/gopherjs/nosync.Once*github.com/gopherjs/gopherjs/nosync:func() Pool�	Pool = $pkg.Pool = $newType(0, $kindStruct, "nosync.Pool", "Pool", "github.com/gopherjs/gopherjs/nosync", function(store_, New_) {
		this.$val = this;
		this.store = store_ !== undefined ? store_ : sliceType.nil;
		this.New = New_ !== undefined ? New_ : $throwNilPointerError;
	});
��	ptrType$4.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Put", name: "Put", pkg: "", typ: $funcType([$emptyInterface], [], false)}];
��	Pool.init([{prop: "store", name: "store", pkg: "github.com/gopherjs/gopherjs/nosync", typ: sliceType, tag: ""}, {prop: "New", name: "New", pkg: "", typ: funcType$1, tag: ""}]);
(github.com/gopherjs/gopherjs/nosync.Pool(github.com/gopherjs/gopherjs/nosync.PoolMgithub.com/gopherjs/gopherjs/nosync:*github.com/gopherjs/gopherjs/nosync.Pool1github.com/gopherjs/gopherjs/nosync:[]interface{}6github.com/gopherjs/gopherjs/nosync:func() interface{} ptrType	ptrType = $ptrType(Mutex);
Ngithub.com/gopherjs/gopherjs/nosync:*github.com/gopherjs/gopherjs/nosync.Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 	ptrType$1 	ptrType$1 = $ptrType(RWMutex);
Pgithub.com/gopherjs/gopherjs/nosync:*github.com/gopherjs/gopherjs/nosync.RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 	ptrType$2"	ptrType$2 = $ptrType(WaitGroup);
Rgithub.com/gopherjs/gopherjs/nosync:*github.com/gopherjs/gopherjs/nosync.WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup funcType&	funcType = $funcType([], [], false);
*github.com/gopherjs/gopherjs/nosync:func() 	ptrType$3	ptrType$3 = $ptrType(Once);
Mgithub.com/gopherjs/gopherjs/nosync:*github.com/gopherjs/gopherjs/nosync.Once(github.com/gopherjs/gopherjs/nosync.Once 	sliceType*	sliceType = $sliceType($emptyInterface);
1github.com/gopherjs/gopherjs/nosync:[]interface{} 	ptrType$4	ptrType$4 = $ptrType(Pool);
Mgithub.com/gopherjs/gopherjs/nosync:*github.com/gopherjs/gopherjs/nosync.Pool(github.com/gopherjs/gopherjs/nosync.Pool 
funcType$17	funcType$1 = $funcType([], [$emptyInterface], false);
6github.com/gopherjs/gopherjs/nosync:func() interface{} 1(*github.com/gopherjs/gopherjs/nosync.Mutex).Lock�
	Mutex.ptr.prototype.Lock = function() {
		var m;
   �		m = this;
   �    		if (m.locked) {
   �			$panic(new $String("nosync: mutex is already locked"));
    		}
   �		m.locked = true;
    	};
	Mutex.prototype.Lock = function() { return this.$val.Lock(); };
)github.com/gopherjs/gopherjs/nosync.Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.Mutex).Unlock�	Mutex.ptr.prototype.Unlock = function() {
		var m;
  P		m = this;
  f    		if (!m.locked) {
  w			$panic(new $String("nosync: unlock of unlocked mutex"));
    		}
  �		m.locked = false;
    	};
	Mutex.prototype.Unlock = function() { return this.$val.Unlock(); };
)github.com/gopherjs/gopherjs/nosync.Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.RWMutex).Lock�=	RWMutex.ptr.prototype.Lock = function() {
		var rw;
  �		rw = this;
  �    		if (!((rw.readLockCounter === 0)) || rw.writeLocked) {
  �			$panic(new $String("nosync: mutex is already locked"));
    		}
  			rw.writeLocked = true;
    	};
	RWMutex.prototype.Lock = function() { return this.$val.Lock(); };
+github.com/gopherjs/gopherjs/nosync.RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 5(*github.com/gopherjs/gopherjs/nosync.RWMutex).Unlock�%	RWMutex.ptr.prototype.Unlock = function() {
		var rw;
  �		rw = this;
  �    		if (!rw.writeLocked) {
  �			$panic(new $String("nosync: unlock of unlocked mutex"));
    		}
  �		rw.writeLocked = false;
    	};
	RWMutex.prototype.Unlock = function() { return this.$val.Unlock(); };
+github.com/gopherjs/gopherjs/nosync.RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.RWMutex).RLock�F	RWMutex.ptr.prototype.RLock = function() {
		var rw;
  e		rw = this;
  }    		if (rw.writeLocked) {
  �			$panic(new $String("nosync: mutex is already locked"));
    		}
  �  �		rw.readLockCounter = rw.readLockCounter + (1) >> 0;
        	};
	RWMutex.prototype.RLock = function() { return this.$val.RLock(); };
+github.com/gopherjs/gopherjs/nosync.RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 6(*github.com/gopherjs/gopherjs/nosync.RWMutex).RUnlock�W	RWMutex.ptr.prototype.RUnlock = function() {
		var rw;
  l		rw = this;
  �    		if (rw.readLockCounter === 0) {
  �			$panic(new $String("nosync: unlock of unlocked mutex"));
    		}
  �  �		rw.readLockCounter = rw.readLockCounter - (1) >> 0;
        	};
	RWMutex.prototype.RUnlock = function() { return this.$val.RUnlock(); };
+github.com/gopherjs/gopherjs/nosync.RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Add�O	WaitGroup.ptr.prototype.Add = function(delta) {
		var delta, wg;
  �		wg = this;
  �  �		wg.counter = wg.counter + (delta) >> 0;
      �    		if (wg.counter < 0) {
  �			$panic(new $String("sync: negative WaitGroup counter"));
    		}
    	};
	WaitGroup.prototype.Add = function(delta) { return this.$val.Add(delta); };
-github.com/gopherjs/gopherjs/nosync.WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Done��	WaitGroup.ptr.prototype.Done = function() {
		var wg;
  Y		wg = this;
  r		wg.Add(-1);
    	};
	WaitGroup.prototype.Done = function() { return this.$val.Done(); };
-github.com/gopherjs/gopherjs/nosync.WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Wait�
	WaitGroup.ptr.prototype.Wait = function() {
		var wg;
  �		wg = this;
  �    		if (!((wg.counter === 0))) {
  �			$panic(new $String("sync: WaitGroup counter not zero"));
    		}
    	};
	WaitGroup.prototype.Wait = function() { return this.$val.Wait(); };
-github.com/gopherjs/gopherjs/nosync.WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup .(*github.com/gopherjs/gopherjs/nosync.Once).Do�T	Once.ptr.prototype.Do = function(f) {
		var $deferred = [], $err = null, f, o;
		/* */ try { $deferFrames.push($deferred);
  �		o = this;
  �    		if (o.done) {
  �			return;
    		}
  �    		if (o.doing) {
  �			$panic(new $String("nosync: Do called within f"));
    		}
  �		o.doing = true;
  		$deferred.push([(function() {
  			o.doing = false;
  1			o.done = true;
    		}), []]);
  E		f();
    		/* */ } catch(err) { $err = err; } finally { $deferFrames.pop(); $callDeferred($deferred, $err); }
	};
	Once.prototype.Do = function(f) { return this.$val.Do(f); };
(github.com/gopherjs/gopherjs/nosync.Once(github.com/gopherjs/gopherjs/nosync.Once /(*github.com/gopherjs/gopherjs/nosync.Pool).Get�6	Pool.ptr.prototype.Get = function() {
		var p, x, x$1, x$2;
  f		p = this;
  �    		if (p.store.$length === 0) {
  �    			if (!(p.New === $throwNilPointerError)) {
  �				return p.New();
    			}
  �			return $ifaceNil;
    		}
  �		x$2 = (x = p.store, x$1 = p.store.$length - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? $throwRuntimeError("index out of range") : x.$array[x.$offset + x$1]));
  �		p.store = $subslice(p.store, 0, (p.store.$length - 1 >> 0));
  		return x$2;
    	};
	Pool.prototype.Get = function() { return this.$val.Get(); };
(github.com/gopherjs/gopherjs/nosync.Pool(github.com/gopherjs/gopherjs/nosync.Pool /(*github.com/gopherjs/gopherjs/nosync.Pool).Put� 	Pool.ptr.prototype.Put = function(x) {
		var p, x;
  E		p = this;
  d    		if ($interfaceIsEqual(x, $ifaceNil)) {
  t			return;
    		}
  		p.store = $append(p.store, x);
    	};
	Pool.prototype.Put = function(x) { return this.$val.Put(x); };
(github.com/gopherjs/gopherjs/nosync.Pool(github.com/gopherjs/gopherjs/nosync.Pool ��{"Base":5279,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/mutex.go","Base":1,"Size":2073,"Lines":[0,15,16,59,79,92,94,95,159,184,199,242,245,262,264,265,329,356,372,416,419,437,439,440,485,507,529,550,552,553,653,681,729,772,775,798,800,801,891,921,943,987,990,1014,1016,1017,1118,1147,1168,1211,1214,1236,1238,1239,1381,1412,1442,1486,1489,1511,1513,1514,1561,1585,1598,1600,1601,1702,1740,1761,1782,1826,1829,1831,1832,1874,1904,1916,1918,1919,1972,2002,2024,2068,2071],"Infos":null},{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/once.go","Base":2075,"Size":1072,"Lines":[0,15,16,75,94,106,118,120,121,190,253,271,349,423,473,476,553,629,677,730,733,780,783,859,881,884,914,927,936,939,953,991,994,1010,1026,1044,1060,1065,1070],"Infos":null},{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/pool.go","Base":3148,"Size":2130,"Lines":[0,15,16,91,105,108,188,265,295,298,363,366,440,517,597,612,615,687,761,838,862,865,942,1021,1091,1105,1108,1188,1267,1347,1361,1364,1383,1404,1430,1432,1433,1501,1540,1600,1675,1706,1709,1780,1812,1847,1871,1891,1909,1913,1926,1929,1959,1995,2005,2007,2008,2035,2071,2086,2095,2098,2128],"Infos":null}]}
 