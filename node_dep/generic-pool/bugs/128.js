var Pool = require('../').Pool;

var resourceIdx = 1

var pool = new Pool(
    {
        name: 'test-resource-pool',
        create: function (callback) {
         var id = resourceIdx++
         console.log('### creating resource %d', id);
         callback({testResource: 'test', id: id});
        },

        destroy: function (resource) {
            console.log('### destroying resource ', resource);
        },
        // USING validate rather than validateAsync seems to work OK
//        validate: function (resource) {
//            console.log('synchronous validation', resource);
//            return true;
//        },
        validateAsync: function (resource, callback) {
            console.log('### asynchronous validation:', resource);
            function _validate(){callback(true)}
            // Simulate this taking some time/event-loops
            setTimeout(_validate, 10);
            //setImmediate(_validate);
        },
        max: 2,
        min: 0,
        reapIntervalMillis: 5000,
        idleTimeoutMillis: 5000,
        log: true
    });


function executeUnitOfWork(someWork, duration, callback) {
    pool.acquire(function (error, resource) {
        if(error) {
            return callback(error);
        }
        console.log('### performing work: "%s" with resource %d', someWork, resource.id);

        function _work(){
            pool.release(resource);
            callback(null, {testData: resource.id}) 
        }

        if(duration == false) {
            return _work()
        } else {
            setTimeout(_work, duration)
        }


    });
}

/**
 * 
 * @param  {string} work     message to print when doing the work
 * @param  {integer|boolean} duration length of time the task should take to execute, or boolean for synchronous completion
 * @return {function}          [description]
 */
function createUnitOfWorkExecutor(work, duration){
    return function(cb){
        executeUnitOfWork(work, duration, function (error, results) {
           if (error) {
             console.error('### Could not acquire resource from the pool', error);
           } else {
             console.log('### results: ', results);
           }
           if(cb){cb()}
        });    
    }
}

var unit1 = createUnitOfWorkExecutor("should create a new resource", 500)
var unit2 = createUnitOfWorkExecutor("should re-use an existing resource", 500)
var unit3 = createUnitOfWorkExecutor("should re-use an existing resource again", 500)

// Should probably use async for this....
setTimeout(unit1, 1000)
setTimeout(unit2, 2500)
setTimeout(unit3, 4000)

/**
 * Potentially a bug where pool state changes  between starting and ending async validation

INFO pool test-resource-pool - dispense() clients=1 available=0
VERBOSE pool test-resource-pool - createResource() - creating obj - count=1 min=0 max=2
### creating resource 1
### performing work: "should create a new resource" with resource 1
INFO pool test-resource-pool - dispense() clients=1 available=0
VERBOSE pool test-resource-pool - createResource() - creating obj - count=2 min=0 max=2
### creating resource 2
### performing work: "should re-use an existing resource" with resource 2
INFO pool test-resource-pool - dispense() clients=1 available=0
VERBOSE pool test-resource-pool - timeout: 1455983427789
INFO pool test-resource-pool - dispense() clients=1 available=1
VERBOSE pool test-resource-pool - dispense() - reusing obj
### asynchronous validation: { testResource: 'test', id: 1 }
### results:  { testData: 1 }
VERBOSE pool test-resource-pool - timeout: 1455983428790
INFO pool test-resource-pool - dispense() clients=1 available=2
VERBOSE pool test-resource-pool - dispense() - reusing obj
### asynchronous validation: { testResource: 'test', id: 1 }
### results:  { testData: 2 }
### performing work: "should re-use an existing resource again" with resource 1
/Users/sandfox/code/coopernurse/node-pool/lib/generic-pool.js:287
            clientCb(err, objWithTimeout.obj)
 */