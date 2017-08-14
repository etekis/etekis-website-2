'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = queue;

var _baseIndexOf = require('lodash/_baseIndexOf');

var _baseIndexOf2 = _interopRequireDefault(_baseIndexOf);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

<<<<<<< HEAD
=======
var _rest = require('./rest');

var _rest2 = _interopRequireDefault(_rest);

>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
var _onlyOnce = require('./onlyOnce');

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _setImmediate = require('./setImmediate');

var _setImmediate2 = _interopRequireDefault(_setImmediate);

var _DoublyLinkedList = require('./DoublyLinkedList');

var _DoublyLinkedList2 = _interopRequireDefault(_DoublyLinkedList);

<<<<<<< HEAD
var _wrapAsync = require('./wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function queue(worker, concurrency, payload) {
    if (concurrency == null) {
        concurrency = 1;
    } else if (concurrency === 0) {
        throw new Error('Concurrency must not be zero');
    }

<<<<<<< HEAD
    var _worker = (0, _wrapAsync2.default)(worker);
    var numRunning = 0;
    var workersList = [];

=======
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    function _insert(data, insertAtFront, callback) {
        if (callback != null && typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!(0, _isArray2.default)(data)) {
            data = [data];
        }
        if (data.length === 0 && q.idle()) {
            // call drain immediately if there are no tasks
            return (0, _setImmediate2.default)(function () {
                q.drain();
            });
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                callback: callback || _noop2.default
            };

            if (insertAtFront) {
                q._tasks.unshift(item);
            } else {
                q._tasks.push(item);
            }
        }
        (0, _setImmediate2.default)(q.process);
    }

    function _next(tasks) {
<<<<<<< HEAD
        return function (err) {
            numRunning -= 1;

            for (var i = 0, l = tasks.length; i < l; i++) {
                var task = tasks[i];

                var index = (0, _baseIndexOf2.default)(workersList, task, 0);
                if (index >= 0) {
                    workersList.splice(index, 1);
                }

                task.callback.apply(task, arguments);

                if (err != null) {
                    q.error(err, task.data);
                }
            }

            if (numRunning <= q.concurrency - q.buffer) {
=======
        return (0, _rest2.default)(function (args) {
            workers -= 1;

            for (var i = 0, l = tasks.length; i < l; i++) {
                var task = tasks[i];
                var index = (0, _baseIndexOf2.default)(workersList, task, 0);
                if (index >= 0) {
                    workersList.splice(index);
                }

                task.callback.apply(task, args);

                if (args[0] != null) {
                    q.error(args[0], task.data);
                }
            }

            if (workers <= q.concurrency - q.buffer) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
                q.unsaturated();
            }

            if (q.idle()) {
                q.drain();
            }
            q.process();
<<<<<<< HEAD
        };
    }

    var isProcessing = false;
=======
        });
    }

    var workers = 0;
    var workersList = [];
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
    var q = {
        _tasks: new _DoublyLinkedList2.default(),
        concurrency: concurrency,
        payload: payload,
        saturated: _noop2.default,
        unsaturated: _noop2.default,
        buffer: concurrency / 4,
        empty: _noop2.default,
        drain: _noop2.default,
        error: _noop2.default,
        started: false,
        paused: false,
        push: function (data, callback) {
            _insert(data, false, callback);
        },
        kill: function () {
            q.drain = _noop2.default;
            q._tasks.empty();
        },
        unshift: function (data, callback) {
            _insert(data, true, callback);
        },
<<<<<<< HEAD
        remove: function (testFn) {
            q._tasks.remove(testFn);
        },
        process: function () {
            // Avoid trying to start too many processing operations. This can occur
            // when callbacks resolve synchronously (#1267).
            if (isProcessing) {
                return;
            }
            isProcessing = true;
            while (!q.paused && numRunning < q.concurrency && q._tasks.length) {
=======
        process: function () {
            while (!q.paused && workers < q.concurrency && q._tasks.length) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
                var tasks = [],
                    data = [];
                var l = q._tasks.length;
                if (q.payload) l = Math.min(l, q.payload);
                for (var i = 0; i < l; i++) {
                    var node = q._tasks.shift();
                    tasks.push(node);
<<<<<<< HEAD
                    workersList.push(node);
                    data.push(node.data);
                }

                numRunning += 1;

                if (q._tasks.length === 0) {
                    q.empty();
                }

                if (numRunning === q.concurrency) {
=======
                    data.push(node.data);
                }

                if (q._tasks.length === 0) {
                    q.empty();
                }
                workers += 1;
                workersList.push(tasks[0]);

                if (workers === q.concurrency) {
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
                    q.saturated();
                }

                var cb = (0, _onlyOnce2.default)(_next(tasks));
<<<<<<< HEAD
                _worker(data, cb);
            }
            isProcessing = false;
=======
                worker(data, cb);
            }
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
        },
        length: function () {
            return q._tasks.length;
        },
        running: function () {
<<<<<<< HEAD
            return numRunning;
=======
            return workers;
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
        },
        workersList: function () {
            return workersList;
        },
        idle: function () {
<<<<<<< HEAD
            return q._tasks.length + numRunning === 0;
=======
            return q._tasks.length + workers === 0;
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
        },
        pause: function () {
            q.paused = true;
        },
        resume: function () {
            if (q.paused === false) {
                return;
            }
            q.paused = false;
<<<<<<< HEAD
            (0, _setImmediate2.default)(q.process);
=======
            var resumeCount = Math.min(q.concurrency, q._tasks.length);
            // Need to call q.process once per concurrent
            // worker to preserve full concurrency after pause
            for (var w = 1; w <= resumeCount; w++) {
                (0, _setImmediate2.default)(q.process);
            }
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
        }
    };
    return q;
}
module.exports = exports['default'];