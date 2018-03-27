'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _expressLogging = require('./express-logging');

var _middleware = require('./middleware');

var _static = require('./static');

var _crash = require('./crash');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function server(configureRoutes, port) {
  var hostname = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
  var app, httpServer, close;
  return _regeneratorRuntime.async(function server$(context$1$0) {
    var _this = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        app = (0, _express2['default'])();
        httpServer = _http2['default'].createServer(app);
        close = httpServer.close.bind(httpServer);

        httpServer.close = function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(new _bluebird2['default'](function (resolve, reject) {
                  httpServer.on('close', resolve);
                  close(function (err) {
                    if (err) reject(err); // eslint-disable-line curly
                  });
                }));

              case 2:
                return context$2$0.abrupt('return', context$2$0.sent);

              case 3:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this);
        };

        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(new _bluebird2['default'](function (resolve, reject) {
          httpServer.on('error', function (err) {
            if (err.code === 'EADDRNOTAVAIL') {
              _logger2['default'].error('Could not start REST http interface listener. ' + 'Requested address is not available.');
            } else {
              _logger2['default'].error('Could not start REST http interface listener. The requested ' + 'port may already be in use. Please make sure there is no ' + 'other instance of this server running already.');
            }
            reject(err);
          });
          httpServer.on('connection', function (socket) {
            socket.setTimeout(600 * 1000); // 10 minute timeout
            socket.on('error', reject);
          });
          configureServer(app, configureRoutes);

          var serverArgs = [port];
          if (hostname) {
            // If the hostname is omitted, the server will accept
            // connections on any IP address
            serverArgs.push(hostname);
          }
          httpServer.listen.apply(httpServer, serverArgs.concat([function (err) {
            if (err) {
              reject(err);
            }
            resolve(httpServer);
          }]));
        }));

      case 6:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 7:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function configureServer(app, configureRoutes) {
  app.use(_expressLogging.endLogFormatter);

  // set up static assets
  app.use((0, _serveFavicon2['default'])(_path2['default'].resolve(_static.STATIC_DIR, 'favicon.ico')));
  app.use(_express2['default']['static'](_static.STATIC_DIR));

  // crash routes, for testing
  app.use('/wd/hub/produce_error', _crash.produceError);
  app.use('/wd/hub/crash', _crash.produceCrash);

  // add middlewares
  app.use(_middleware.allowCrossDomain);
  app.use(_middleware.fixPythonContentType);
  app.use(_middleware.defaultToJSONContentType);
  app.use(_bodyParser2['default'].urlencoded({ extended: true }));
  app.use((0, _methodOverride2['default'])());
  app.use(_middleware.catch4XXHandler);
  app.use(_middleware.catchAllHandler);

  // make sure appium never fails because of a file size upload limit
  app.use(_bodyParser2['default'].json({ limit: '1gb' }));

  // set up start logging (which depends on bodyParser doing its thing)
  app.use(_expressLogging.startLogFormatter);

  configureRoutes(app);

  // dynamic routes for testing, etc.
  app.all('/welcome', _static.welcome);
  app.all('/test/guinea-pig', _static.guineaPig);
  app.all('/test/guinea-pig-scrollable', _static.guineaPigScrollable);
  app.all('/test/guinea-pig-app-banner', _static.guineaPigAppBanner);

  // catch this last, so anything that falls through is 404ed
  app.use(_middleware.catch404Handler);
}

exports.server = server;
exports.configureServer = configureServer;

// create the actual http server

// http.Server.close() only stops new connections, but we need to wait until
// all connections are closed and the `close` event is emitted
//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEdBQUcsQ0FBQyxlQUFlLHNCQUFlLENBQUM7OztBQUd2QyxLQUFHLENBQUMsR0FBRyw4QkFBa0IsQ0FBQztBQUMxQixLQUFHLENBQUMsR0FBRyxrQ0FBc0IsQ0FBQztBQUM5QixLQUFHLENBQUMsR0FBRyxzQ0FBMEIsQ0FBQztBQUNsQyxLQUFHLENBQUMsR0FBRyxDQUFDLHdCQUFXLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakQsS0FBRyxDQUFDLEdBQUcsQ0FBQyxrQ0FBZ0IsQ0FBQyxDQUFDO0FBQzFCLEtBQUcsQ0FBQyxHQUFHLDZCQUFpQixDQUFDO0FBQ3pCLEtBQUcsQ0FBQyxHQUFHLDZCQUFpQixDQUFDOzs7QUFHekIsS0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBVyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDOzs7QUFHekMsS0FBRyxDQUFDLEdBQUcsbUNBQW1CLENBQUM7O0FBRTNCLGlCQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7OztBQUdyQixLQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsa0JBQVUsQ0FBQztBQUM3QixLQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFrQixvQkFBWSxDQUFDO0FBQ3ZDLEtBQUcsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLDhCQUFzQixDQUFDO0FBQzVELEtBQUcsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLDZCQUFxQixDQUFDOzs7QUFHM0QsS0FBRyxDQUFDLEdBQUcsNkJBQWlCLENBQUM7Q0FDMUI7O1FBRVEsTUFBTSxHQUFOLE1BQU07UUFBRSxlQUFlLEdBQWYsZUFBZSIsImZpbGUiOiJsaWIvZXhwcmVzcy9zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgZmF2aWNvbiBmcm9tICdzZXJ2ZS1mYXZpY29uJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBtZXRob2RPdmVycmlkZSBmcm9tICdtZXRob2Qtb3ZlcnJpZGUnO1xuaW1wb3J0IGxvZyBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBzdGFydExvZ0Zvcm1hdHRlciwgZW5kTG9nRm9ybWF0dGVyIH0gZnJvbSAnLi9leHByZXNzLWxvZ2dpbmcnO1xuaW1wb3J0IHsgYWxsb3dDcm9zc0RvbWFpbiwgZml4UHl0aG9uQ29udGVudFR5cGUsIGRlZmF1bHRUb0pTT05Db250ZW50VHlwZSxcbiAgICAgICAgIGNhdGNoQWxsSGFuZGxlciwgY2F0Y2g0MDRIYW5kbGVyLCBjYXRjaDRYWEhhbmRsZXIgfSBmcm9tICcuL21pZGRsZXdhcmUnO1xuaW1wb3J0IHsgZ3VpbmVhUGlnLCBndWluZWFQaWdTY3JvbGxhYmxlLCBndWluZWFQaWdBcHBCYW5uZXIsIHdlbGNvbWUsIFNUQVRJQ19ESVIgfSBmcm9tICcuL3N0YXRpYyc7XG5pbXBvcnQgeyBwcm9kdWNlRXJyb3IsIHByb2R1Y2VDcmFzaCB9IGZyb20gJy4vY3Jhc2gnO1xuaW1wb3J0IEIgZnJvbSAnYmx1ZWJpcmQnO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHNlcnZlciAoY29uZmlndXJlUm91dGVzLCBwb3J0LCBob3N0bmFtZSA9IG51bGwpIHtcbiAgLy8gY3JlYXRlIHRoZSBhY3R1YWwgaHR0cCBzZXJ2ZXJcbiAgbGV0IGFwcCA9IGV4cHJlc3MoKTtcbiAgbGV0IGh0dHBTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuXG4gIC8vIGh0dHAuU2VydmVyLmNsb3NlKCkgb25seSBzdG9wcyBuZXcgY29ubmVjdGlvbnMsIGJ1dCB3ZSBuZWVkIHRvIHdhaXQgdW50aWxcbiAgLy8gYWxsIGNvbm5lY3Rpb25zIGFyZSBjbG9zZWQgYW5kIHRoZSBgY2xvc2VgIGV2ZW50IGlzIGVtaXR0ZWRcbiAgbGV0IGNsb3NlID0gaHR0cFNlcnZlci5jbG9zZS5iaW5kKGh0dHBTZXJ2ZXIpO1xuICBodHRwU2VydmVyLmNsb3NlID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBuZXcgQigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBodHRwU2VydmVyLm9uKCdjbG9zZScsIHJlc29sdmUpO1xuICAgICAgY2xvc2UoKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjdXJseVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGF3YWl0IG5ldyBCKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBodHRwU2VydmVyLm9uKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VBRERSTk9UQVZBSUwnKSB7XG4gICAgICAgIGxvZy5lcnJvcignQ291bGQgbm90IHN0YXJ0IFJFU1QgaHR0cCBpbnRlcmZhY2UgbGlzdGVuZXIuICcgK1xuICAgICAgICAgICAgICAgICAgJ1JlcXVlc3RlZCBhZGRyZXNzIGlzIG5vdCBhdmFpbGFibGUuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2cuZXJyb3IoJ0NvdWxkIG5vdCBzdGFydCBSRVNUIGh0dHAgaW50ZXJmYWNlIGxpc3RlbmVyLiBUaGUgcmVxdWVzdGVkICcgK1xuICAgICAgICAgICAgICAgICAgJ3BvcnQgbWF5IGFscmVhZHkgYmUgaW4gdXNlLiBQbGVhc2UgbWFrZSBzdXJlIHRoZXJlIGlzIG5vICcgK1xuICAgICAgICAgICAgICAgICAgJ290aGVyIGluc3RhbmNlIG9mIHRoaXMgc2VydmVyIHJ1bm5pbmcgYWxyZWFkeS4nKTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH0pO1xuICAgIGh0dHBTZXJ2ZXIub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0KSA9PiB7XG4gICAgICBzb2NrZXQuc2V0VGltZW91dCg2MDAgKiAxMDAwKTsgLy8gMTAgbWludXRlIHRpbWVvdXRcbiAgICAgIHNvY2tldC5vbignZXJyb3InLCByZWplY3QpO1xuICAgIH0pO1xuICAgIGNvbmZpZ3VyZVNlcnZlcihhcHAsIGNvbmZpZ3VyZVJvdXRlcyk7XG5cbiAgICBsZXQgc2VydmVyQXJncyA9IFtwb3J0XTtcbiAgICBpZiAoaG9zdG5hbWUpIHtcbiAgICAgIC8vIElmIHRoZSBob3N0bmFtZSBpcyBvbWl0dGVkLCB0aGUgc2VydmVyIHdpbGwgYWNjZXB0XG4gICAgICAvLyBjb25uZWN0aW9ucyBvbiBhbnkgSVAgYWRkcmVzc1xuICAgICAgc2VydmVyQXJncy5wdXNoKGhvc3RuYW1lKTtcbiAgICB9XG4gICAgaHR0cFNlcnZlci5saXN0ZW4oLi4uc2VydmVyQXJncywgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoaHR0cFNlcnZlcik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb25maWd1cmVTZXJ2ZXIgKGFwcCwgY29uZmlndXJlUm91dGVzKSB7XG4gIGFwcC51c2UoZW5kTG9nRm9ybWF0dGVyKTtcblxuICAvLyBzZXQgdXAgc3RhdGljIGFzc2V0c1xuICBhcHAudXNlKGZhdmljb24ocGF0aC5yZXNvbHZlKFNUQVRJQ19ESVIsICdmYXZpY29uLmljbycpKSk7XG4gIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoU1RBVElDX0RJUikpO1xuXG4gIC8vIGNyYXNoIHJvdXRlcywgZm9yIHRlc3RpbmdcbiAgYXBwLnVzZSgnL3dkL2h1Yi9wcm9kdWNlX2Vycm9yJywgcHJvZHVjZUVycm9yKTtcbiAgYXBwLnVzZSgnL3dkL2h1Yi9jcmFzaCcsIHByb2R1Y2VDcmFzaCk7XG5cbiAgLy8gYWRkIG1pZGRsZXdhcmVzXG4gIGFwcC51c2UoYWxsb3dDcm9zc0RvbWFpbik7XG4gIGFwcC51c2UoZml4UHl0aG9uQ29udGVudFR5cGUpO1xuICBhcHAudXNlKGRlZmF1bHRUb0pTT05Db250ZW50VHlwZSk7XG4gIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pKTtcbiAgYXBwLnVzZShtZXRob2RPdmVycmlkZSgpKTtcbiAgYXBwLnVzZShjYXRjaDRYWEhhbmRsZXIpO1xuICBhcHAudXNlKGNhdGNoQWxsSGFuZGxlcik7XG5cbiAgLy8gbWFrZSBzdXJlIGFwcGl1bSBuZXZlciBmYWlscyBiZWNhdXNlIG9mIGEgZmlsZSBzaXplIHVwbG9hZCBsaW1pdFxuICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbih7bGltaXQ6ICcxZ2InfSkpO1xuXG4gIC8vIHNldCB1cCBzdGFydCBsb2dnaW5nICh3aGljaCBkZXBlbmRzIG9uIGJvZHlQYXJzZXIgZG9pbmcgaXRzIHRoaW5nKVxuICBhcHAudXNlKHN0YXJ0TG9nRm9ybWF0dGVyKTtcblxuICBjb25maWd1cmVSb3V0ZXMoYXBwKTtcblxuICAvLyBkeW5hbWljIHJvdXRlcyBmb3IgdGVzdGluZywgZXRjLlxuICBhcHAuYWxsKCcvd2VsY29tZScsIHdlbGNvbWUpO1xuICBhcHAuYWxsKCcvdGVzdC9ndWluZWEtcGlnJywgZ3VpbmVhUGlnKTtcbiAgYXBwLmFsbCgnL3Rlc3QvZ3VpbmVhLXBpZy1zY3JvbGxhYmxlJywgZ3VpbmVhUGlnU2Nyb2xsYWJsZSk7XG4gIGFwcC5hbGwoJy90ZXN0L2d1aW5lYS1waWctYXBwLWJhbm5lcicsIGd1aW5lYVBpZ0FwcEJhbm5lcik7XG5cbiAgLy8gY2F0Y2ggdGhpcyBsYXN0LCBzbyBhbnl0aGluZyB0aGF0IGZhbGxzIHRocm91Z2ggaXMgNDA0ZWRcbiAgYXBwLnVzZShjYXRjaDQwNEhhbmRsZXIpO1xufVxuXG5leHBvcnQgeyBzZXJ2ZXIsIGNvbmZpZ3VyZVNlcnZlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIuLi8uLi8uLiJ9
