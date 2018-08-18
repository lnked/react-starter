test('test', () => {});

// const once = (fn) => {
//     let returnValue
//     let called = false

//     return () => {
//         if (!called) {
//             called = true
//             returnValue = fn.apply(this, arguments)
//         }

//         return returnValue
//     }
// }
// function debounce(callback) {
//     var timer;
//     return function () {
//         clearTimeout(timer);
//         var args = [].slice.call(arguments);
//         timer = setTimeout(function () {
//             callback.apply(this, args);
//         }, 100);
//     };
// }

// var clock;

// before(function () { clock = sinon.useFakeTimers(); });
// after(function () { clock.restore(); });

// it('calls callback after 100ms', function () {
//     var callback = sinon.fake();
//     var throttled = debounce(callback);

//     throttled();

//     clock.tick(99);
//     assert(callback.notCalled);

//     clock.tick(1);
//     assert(callback.calledOnce);

//     // Also:
//     // assert.equals(new Date().getTime(), 100);
// });

// it('calls the original function', () => {
//     const callback = sinon.fake()
//     const proxy = once(callback)

//     proxy()

//     assert(callback.called)
// })

// it('calls original function with right this and args', function () {
//     var callback = sinon.fake();
//     var proxy = once(callback);
//     var obj = {};

//     proxy.call(obj, 1, 2, 3);

//     assert(callback.calledOn(obj));
//     assert(callback.calledWith(1, 2, 3));
// });

// it("returns the return value from the original function", function () {
//     var callback = sinon.fake.returns(42);
//     var proxy = once(callback);

//     assert.equals(proxy(), 42);
// });

// function getTodos(listId, callback) {
//     jQuery.ajax({
//         url: '/todo/' + listId + '/items',
//         success: function (data) {
//             // Node-style CPS: callback(err, data)
//             callback(null, data);
//         }
//     });
// }
// after(function () {
//     // When the test either fails or passes, restore the original
//     // jQuery ajax function (Sinon.JS also provides tools to help
//     // test frameworks automate clean-up like this)
//     jQuery.ajax.restore();
// });

// it('makes a GET request for todo items', function () {
//     sinon.replace(jQuery, 'ajax', sinon.fake());
//     getTodos(42, sinon.fake());

//     assert(jQuery.ajax.calledWithMatch({ url: '/todo/42/items' }));
// });

// var xhr, requests;

// before(function () {
//     xhr = sinon.useFakeXMLHttpRequest();
//     requests = [];
//     xhr.onCreate = function (req) { requests.push(req); };
// });

// after(function () {
//     // Like before we must clean up when tampering with globals.
//     xhr.restore();
// });

// it("makes a GET request for todo items", function () {
//     getTodos(42, sinon.fake());

//     assert.equals(requests.length, 1);
//     assert.match(requests[0].url, "/todo/42/items");
// });
