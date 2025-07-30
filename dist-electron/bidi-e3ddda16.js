"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _emitter, _logger, _processor, _queue, _isProcessing, _processIfNeeded, processIfNeeded_fn, _browserCdpClient, _browsingContextStorage, _cdpConnection, _browserCdpClient2, _properties, _id, _logger2, _createChannelProxyEvalStr, createChannelProxyEvalStr_fn, _createAndGetHandleInRealm, createAndGetHandleInRealm_fn, _createSendMessageHandle, createSendMessageHandle_fn, _startListener, startListener_fn, _getHandleFromWindow, getHandleFromWindow_fn, _cdpClient, _eventManager, _executionContextId, _logger3, _origin, _realmId, _realmStorage, _cdpRemoteObjectToCallArgument, _a, cdpRemoteObjectToCallArgument_fn, _flattenKeyValuePairs, flattenKeyValuePairs_fn, _flattenValueList, flattenValueList_fn, _serializeCdpExceptionDetails, serializeCdpExceptionDetails_fn, _getExceptionResult, getExceptionResult_fn, _getSerializationOptions, getSerializationOptions_fn, _getAdditionalSerializationParameters, getAdditionalSerializationParameters_fn, _getMaxObjectDepth, getMaxObjectDepth_fn, _releaseObject, releaseObject_fn, _ownerRealm, _b, _isFinished, _promise, _resolve, _reject, _c, _browsingContextId, _browsingContextStorage2, _sharedIdWithFrame, _getBrowsingContextId, getBrowsingContextId_fn, _d, _id2, _parentId, _children, _browsingContextStorage3, _lifecycle, _navigation, _url, _eventManager2, _realmStorage2, _loaderId, _cdpTarget, _maybeDefaultRealm, _sharedIdWithFrame2, _logger4, _deleteAllChildren, deleteAllChildren_fn, _defaultRealm, defaultRealm_get, _initListeners, initListeners_fn, _documentChanged, documentChanged_fn, _resetLifecycleIfFinished, resetLifecycleIfFinished_fn, _failLifecycleIfNotFinished, failLifecycleIfNotFinished_fn, _parseRect, parseRect_fn, _eventManager3, _realmStorage3, _cdpTarget2, _logger5, _initializeEntryAddedEventListener, initializeEntryAddedEventListener_fn, _getExceptionText, getExceptionText_fn, _unknown, _requestId, _interceptPhase, _servedFromCache, _redirectCount, _eventManager4, _networkStorage, _request, _response, _beforeRequestSentDeferred, _responseStartedDeferred, _responseCompletedDeferred, _cdpTarget3, _emitEventsIfReady, emitEventsIfReady_fn, _context, context_get, _getBaseEventParams, getBaseEventParams_fn, _getNavigationId, getNavigationId_fn, _getRequestData, getRequestData_fn, _getTimings, getTimings_fn, _queueBeforeRequestSentEvent, queueBeforeRequestSentEvent_fn, _getBeforeRequestEvent, getBeforeRequestEvent_fn, _queueResponseStartedEvent, queueResponseStartedEvent_fn, _getResponseStartedEvent, getResponseStartedEvent_fn, _queueResponseCompletedEvent, queueResponseCompletedEvent_fn, _getResponseReceivedEvent, getResponseReceivedEvent_fn, _isIgnoredEvent, isIgnoredEvent_fn, _getInitiatorType, getInitiatorType_fn, _getCookies, getCookies_fn, _cdpTarget4, _eventManager5, _networkStorage2, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn, _id3, _cdpClient2, _browserCdpClient3, _eventManager6, _preloadScriptStorage, _networkStorage3, _targetUnblocked, _acceptInsecureCerts, _unblock, unblock_fn, _setEventListeners, setEventListeners_fn, _initAndEvaluatePreloadScripts, initAndEvaluatePreloadScripts_fn, _browserCdpClient4, _cdpConnection2, _selfTargetId, _eventManager7, _browsingContextStorage4, _networkStorage4, _acceptInsecureCerts2, _sharedIdWithFrame3, _preloadScriptStorage2, _realmStorage4, _defaultUserContextId, _logger6, _setEventListeners2, setEventListeners_fn2, _handleFrameAttachedEvent, handleFrameAttachedEvent_fn, _handleFrameDetachedEvent, handleFrameDetachedEvent_fn, _handleAttachedToTargetEvent, handleAttachedToTargetEvent_fn, _createCdpTarget, createCdpTarget_fn, _workers, _handleWorkerTarget, handleWorkerTarget_fn, _handleDetachedFromTargetEvent, handleDetachedFromTargetEvent_fn, _handleTargetInfoChangedEvent, handleTargetInfoChangedEvent_fn, _modifiers, _setModifier, setModifier_fn, _e, _DOUBLE_CLICK_TIME_MS, _MAX_DOUBLE_CLICK_RADIUS, _x, _y, _time, _clickContexts, _tickStart, _tickDuration, _inputState, _context2, _isMacOS, _dispatchAction, dispatchAction_fn, _dispatchPointerDownAction, dispatchPointerDownAction_fn, _dispatchPointerUpAction, dispatchPointerUpAction_fn, _dispatchPointerMoveAction, dispatchPointerMoveAction_fn, _getCoordinateFromOrigin, getCoordinateFromOrigin_fn, _dispatchScrollAction, dispatchScrollAction_fn, _dispatchKeyDownAction, dispatchKeyDownAction_fn, _dispatchKeyUpAction, dispatchKeyUpAction_fn, _locked, _acquirers, _release, release_fn, _sources, _mutex, _browsingContextStorage5, _realmStorage5, _inputStateManager, _getActionsByTick, getActionsByTick_fn, _i2, _n, _t, _e2, _s, _l, _o, _d2, _p, _g, _r, r_fn, _R, R_fn, _b2, b_fn, _u, u_fn, _m, m_fn, _a2, a_fn, _P, P_fn, _E, E_fn, _S, S_fn, _O, O_fn, _k, k_fn, _x2, x_fn, _h2, h_fn, _f, f_fn, _T, T_fn, _A, A_fn, _y2, y_fn, _w, w_fn, _c2, c_fn, _C, C_fn, _f2, _i3, _n2, _t2, _e3, _s2, _l2, _g2, _requestMap, _interceptMap, _blockedRequestMap, _browsingContextStorage6, _networkStorage5, _fetchEnable, fetchEnable_fn, _fetchDisable, fetchDisable_fn, _fetchApply, fetchApply_fn, _getBlockedRequest, getBlockedRequest_fn, _getRequestOrFail, getRequestOrFail_fn, _browserCdpClient5, _scripts, _id4, _cdpPreloadScripts, _functionDeclaration, _targetIds, _channels, _sandbox, _contexts, _getEvaluateString, getEvaluateString_fn, _browsingContextStorage7, _realmStorage6, _preloadScriptStorage3, _logger7, _getRealm, getRealm_fn, _eventManager8, _browserCdpClient6, _browsingContextStorage8, _logger8, _expandStoragePartitionSpecByBrowsingContext, expandStoragePartitionSpecByBrowsingContext_fn, _expandStoragePartitionSpecByStorageKey, expandStoragePartitionSpecByStorageKey_fn, _expandStoragePartitionSpec, expandStoragePartitionSpec_fn, _matchCookie, matchCookie_fn, _message, _channel, _browserProcessor, _browsingContextProcessor, _cdpProcessor, _inputProcessor, _networkProcessor, _permissionsProcessor, _scriptProcessor, _sessionProcessor, _storageProcessor, _parser, _logger9, _processCommand, processCommand_fn, _contexts2, _knownHandlesToRealmMap, _realmMap, _capacity, _entries, _onItemRemoved, _h, _getDefaultValue, _counter, _id5, _subscriptionPriority, _channelToContextToEventMap, _browsingContextStorage9, _getEventSubscriptionPriorityForChannel, getEventSubscriptionPriorityForChannel_fn, _checkUnsubscribe, checkUnsubscribe_fn, _idWrapper, _contextId, _event, _eventToContextsMap, _eventBuffers, _lastMessageSent, _subscriptionManager, _browsingContextStorage10, _getMapKey, getMapKey_fn, _bufferEvent, bufferEvent_fn, _markEventSent, markEventSent_fn, _getBufferedEvents, getBufferedEvents_fn, _messageQueue, _transport, _commandProcessor, _eventManager9, _browsingContextStorage11, _logger10, _handleIncomingMessage, _processOutgoingMessage, _topLevelContextsLoaded, topLevelContextsLoaded_fn, _disposed, _sandbox2, _remoteValue, _id6, _sandbox3, _evaluate, evaluate_fn, _context3, _sessionId, _detached, _id7, _url2, _cdpSession, _parent, _browserName, _updateUrl, updateUrl_fn, _i, _url3, _transport2, _delay, _timeout, _closed, _callbacks, _browsingContexts, _emitters, _maybeEmitOnContext, maybeEmitOnContext_fn, _cdp, _adapters, _browserCdpConnection, _closed2, _client, _browserClient, _forwardMessage, _onMessage, _workers2, _workers3, _browser, _connection, _defaultViewport, _userContext, _context4, _browsingContext, _frame, _apply, _channels2, _callerInfos, _preloadScriptId, _handleArgumentsMessage, _connection2, connection_get, _channelArguments, channelArguments_get, _handleResolveMessage, _handleRejectMessage, _getCallbacksAndRemoteValue, getCallbacksAndRemoteValue_fn, _frame2, _page, _context5, _lastMovePoint, _context6, _url4, _resourceType, _method, _postData, _headers, _initiator, _frame3, _request2, _remoteAddress, _status, _statusText, _url5, _fromCache, _headers2, _timings, _connection3, _page2, _subscriptions, _requestMap2, _navigationMap, _onBeforeRequestSent, onBeforeRequestSent_fn, _onResponseStarted, onResponseStarted_fn, _onResponseCompleted, onResponseCompleted_fn, _onFetchError, onFetchError_fn, _accessibility, _connection4, _frameTree, _networkManager, _viewport, _closedDeferred, _subscribedEvents, _networkManagerEvents, _browsingContextEvents, _tracing, _coverage, _cdpEmulationManager, _emulationManager, _mouse, _touchscreen, _keyboard, _browsingContext2, _browserContext, _target, _onFrameLoaded, onFrameLoaded_fn, _onFrameFragmentNavigated, onFrameFragmentNavigated_fn, _onFrameDOMContentLoaded, onFrameDOMContentLoaded_fn, _onContextCreated, onContextCreated_fn, _onContextDestroyed, onContextDestroyed_fn, _removeFramesRecursively, removeFramesRecursively_fn, _onLogEntryAdded, onLogEntryAdded_fn, _onDialog, onDialog_fn, _go, go_fn, _browser2, _page3, _process, _closeCallback, _browserCore, _defaultViewport2, _targets, _browserContexts, _browserTarget, _connectionEventHandlers, _initialize, initialize_fn, _browserName2, browserName_get, _browserVersion, browserVersion_get, _createBrowserContext, createBrowserContext_fn, _onContextDomLoaded, onContextDomLoaded_fn, _onContextNavigation, onContextNavigation_fn, _onContextCreated2, onContextCreated_fn2, _getTree, getTree_fn, _onContextDestroyed2, onContextDestroyed_fn2;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _commonjsDynamicModules = require("./_commonjs-dynamic-modules-b157458e.js");
const require$$2 = require("crypto");
const crawler = require("./crawler-919c9710.js");
require("fs/promises");
require("os");
require("path");
require("child_process");
require("fs");
require("readline");
require("http");
require("https");
require("url");
require("net");
require("tty");
require("util");
require("tls");
require("events");
require("stream");
require("dns");
require("buffer");
require("assert");
require("zlib");
require("process");
require("module");
require("inspector");
var BidiMapper = {};
var BidiServer$1 = {};
var EventEmitter$1 = {};
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
const mitt$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mitt
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ _commonjsDynamicModules.getAugmentedNamespace(mitt$1);
var __importDefault = _commonjsDynamicModules.commonjsGlobal && _commonjsDynamicModules.commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(EventEmitter$1, "__esModule", { value: true });
EventEmitter$1.EventEmitter = void 0;
const mitt_1 = __importDefault(require$$0);
class EventEmitter {
  constructor() {
    __privateAdd(this, _emitter, (0, mitt_1.default)());
  }
  on(type, handler) {
    __privateGet(this, _emitter).on(type, handler);
    return this;
  }
  /**
   * Like `on` but the listener will only be fired once and then it will be removed.
   * @param event The event you'd like to listen to
   * @param handler The handler function to run when the event occurs
   * @return `this` to enable chaining method calls.
   */
  once(event, handler) {
    const onceHandler = (eventData) => {
      handler(eventData);
      this.off(event, onceHandler);
    };
    return this.on(event, onceHandler);
  }
  off(type, handler) {
    __privateGet(this, _emitter).off(type, handler);
    return this;
  }
  /**
   * Emits an event and call any associated listeners.
   *
   * @param event The event to emit.
   * @param eventData Any data to emit with the event.
   * @return `true` if there are any listeners, `false` otherwise.
   */
  emit(event, eventData) {
    __privateGet(this, _emitter).emit(event, eventData);
  }
  /**
   * Removes all listeners. If given an event argument, it will remove only
   * listeners for that event.
   * @param event - the event to remove listeners for.
   * @returns `this` to enable you to chain method calls.
   */
  removeAllListeners(event) {
    if (event) {
      __privateGet(this, _emitter).all.delete(event);
    } else {
      __privateGet(this, _emitter).all.clear();
    }
    return this;
  }
}
_emitter = new WeakMap();
EventEmitter$1.EventEmitter = EventEmitter;
var log = {};
Object.defineProperty(log, "__esModule", { value: true });
log.LogType = void 0;
var LogType;
(function(LogType2) {
  LogType2["bidi"] = "bidi";
  LogType2["cdp"] = "cdp";
  LogType2["debug"] = "debug";
  LogType2["debugError"] = "debug:error";
  LogType2["debugInfo"] = "debug:info";
})(LogType || (log.LogType = LogType = {}));
var ProcessingQueue$1 = {};
Object.defineProperty(ProcessingQueue$1, "__esModule", { value: true });
ProcessingQueue$1.ProcessingQueue = void 0;
const log_js_1$8 = log;
const _ProcessingQueue = class _ProcessingQueue {
  constructor(processor, logger) {
    __privateAdd(this, _processIfNeeded);
    __privateAdd(this, _logger, void 0);
    __privateAdd(this, _processor, void 0);
    __privateAdd(this, _queue, []);
    // Flag to keep only 1 active processor.
    __privateAdd(this, _isProcessing, false);
    __privateSet(this, _processor, processor);
    __privateSet(this, _logger, logger);
  }
  add(entry, name) {
    __privateGet(this, _queue).push([entry, name]);
    void __privateMethod(this, _processIfNeeded, processIfNeeded_fn).call(this);
  }
};
_logger = new WeakMap();
_processor = new WeakMap();
_queue = new WeakMap();
_isProcessing = new WeakMap();
_processIfNeeded = new WeakSet();
processIfNeeded_fn = async function() {
  var _a3;
  if (__privateGet(this, _isProcessing)) {
    return;
  }
  __privateSet(this, _isProcessing, true);
  while (__privateGet(this, _queue).length > 0) {
    const arrayEntry = __privateGet(this, _queue).shift();
    if (!arrayEntry) {
      continue;
    }
    const [entryPromise, name] = arrayEntry;
    (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, _ProcessingQueue.LOGGER_PREFIX, "Processing event:", name);
    await entryPromise.then((entry) => {
      var _a4;
      if (entry.kind === "error") {
        (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, log_js_1$8.LogType.debugError, "Event threw before sending:", entry.error.message, entry.error.stack);
        return;
      }
      return __privateGet(this, _processor).call(this, entry.value);
    }).catch((error) => {
      var _a4;
      (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, log_js_1$8.LogType.debugError, "Event was not processed:", error == null ? void 0 : error.message);
    });
  }
  __privateSet(this, _isProcessing, false);
};
__publicField(_ProcessingQueue, "LOGGER_PREFIX", `${log_js_1$8.LogType.debug}:queue`);
let ProcessingQueue = _ProcessingQueue;
ProcessingQueue$1.ProcessingQueue = ProcessingQueue;
var CommandProcessor$1 = {};
var protocol = {};
var cdp = {};
Object.defineProperty(cdp, "__esModule", { value: true });
var chromiumBidi = {};
Object.defineProperty(chromiumBidi, "__esModule", { value: true });
chromiumBidi.EVENT_NAMES = chromiumBidi.Network = chromiumBidi.BrowsingContext = chromiumBidi.Log = chromiumBidi.Script = chromiumBidi.BiDiModule = void 0;
var BiDiModule;
(function(BiDiModule2) {
  BiDiModule2["Browser"] = "browser";
  BiDiModule2["BrowsingContext"] = "browsingContext";
  BiDiModule2["Cdp"] = "cdp";
  BiDiModule2["Input"] = "input";
  BiDiModule2["Log"] = "log";
  BiDiModule2["Network"] = "network";
  BiDiModule2["Script"] = "script";
  BiDiModule2["Session"] = "session";
})(BiDiModule || (chromiumBidi.BiDiModule = BiDiModule = {}));
var Script;
(function(Script2) {
  (function(EventNames) {
    EventNames["Message"] = "script.message";
    EventNames["RealmCreated"] = "script.realmCreated";
    EventNames["RealmDestroyed"] = "script.realmDestroyed";
  })(Script2.EventNames || (Script2.EventNames = {}));
})(Script || (chromiumBidi.Script = Script = {}));
var Log;
(function(Log2) {
  (function(EventNames) {
    EventNames["LogEntryAdded"] = "log.entryAdded";
  })(Log2.EventNames || (Log2.EventNames = {}));
})(Log || (chromiumBidi.Log = Log = {}));
var BrowsingContext$2;
(function(BrowsingContext2) {
  (function(EventNames) {
    EventNames["ContextCreated"] = "browsingContext.contextCreated";
    EventNames["ContextDestroyed"] = "browsingContext.contextDestroyed";
    EventNames["DomContentLoaded"] = "browsingContext.domContentLoaded";
    EventNames["DownloadWillBegin"] = "browsingContext.downloadWillBegin";
    EventNames["FragmentNavigated"] = "browsingContext.fragmentNavigated";
    EventNames["Load"] = "browsingContext.load";
    EventNames["NavigationAborted"] = "browsingContext.navigationAborted";
    EventNames["NavigationFailed"] = "browsingContext.navigationFailed";
    EventNames["NavigationStarted"] = "browsingContext.navigationStarted";
    EventNames["UserPromptClosed"] = "browsingContext.userPromptClosed";
    EventNames["UserPromptOpened"] = "browsingContext.userPromptOpened";
  })(BrowsingContext2.EventNames || (BrowsingContext2.EventNames = {}));
})(BrowsingContext$2 || (chromiumBidi.BrowsingContext = BrowsingContext$2 = {}));
var Network;
(function(Network2) {
  (function(EventNames) {
    EventNames["AuthRequired"] = "network.authRequired";
    EventNames["BeforeRequestSent"] = "network.beforeRequestSent";
    EventNames["FetchError"] = "network.fetchError";
    EventNames["ResponseCompleted"] = "network.responseCompleted";
    EventNames["ResponseStarted"] = "network.responseStarted";
  })(Network2.EventNames || (Network2.EventNames = {}));
})(Network || (chromiumBidi.Network = Network = {}));
chromiumBidi.EVENT_NAMES = /* @__PURE__ */ new Set([
  // keep-sorted start
  ...Object.values(BiDiModule),
  ...Object.values(BrowsingContext$2.EventNames),
  ...Object.values(Log.EventNames),
  ...Object.values(Network.EventNames),
  ...Object.values(Script.EventNames)
  // keep-sorted end
]);
var webdriverBidi = {};
Object.defineProperty(webdriverBidi, "__esModule", { value: true });
var ErrorResponse = {};
Object.defineProperty(ErrorResponse, "__esModule", { value: true });
ErrorResponse.UnderspecifiedStoragePartitionException = ErrorResponse.UnableToSetFileInputException = ErrorResponse.UnableToSetCookieException = ErrorResponse.NoSuchStoragePartitionException = ErrorResponse.UnsupportedOperationException = ErrorResponse.UnableToCloseBrowserException = ErrorResponse.UnableToCaptureScreenException = ErrorResponse.UnknownErrorException = ErrorResponse.UnknownCommandException = ErrorResponse.SessionNotCreatedException = ErrorResponse.NoSuchUserContextException = ErrorResponse.NoSuchScriptException = ErrorResponse.NoSuchRequestException = ErrorResponse.NoSuchNodeException = ErrorResponse.NoSuchInterceptException = ErrorResponse.NoSuchHistoryEntryException = ErrorResponse.NoSuchHandleException = ErrorResponse.NoSuchFrameException = ErrorResponse.NoSuchElementException = ErrorResponse.NoSuchAlertException = ErrorResponse.MoveTargetOutOfBoundsException = ErrorResponse.InvalidSessionIdException = ErrorResponse.InvalidArgumentException = ErrorResponse.Exception = void 0;
class Exception {
  constructor(error, message, stacktrace) {
    __publicField(this, "error");
    __publicField(this, "message");
    __publicField(this, "stacktrace");
    this.error = error;
    this.message = message;
    this.stacktrace = stacktrace;
  }
  toErrorResponse(commandId) {
    return {
      type: "error",
      id: commandId,
      error: this.error,
      message: this.message,
      stacktrace: this.stacktrace
    };
  }
}
ErrorResponse.Exception = Exception;
class InvalidArgumentException extends Exception {
  constructor(message, stacktrace) {
    super("invalid argument", message, stacktrace);
  }
}
ErrorResponse.InvalidArgumentException = InvalidArgumentException;
class InvalidSessionIdException extends Exception {
  constructor(message, stacktrace) {
    super("invalid session id", message, stacktrace);
  }
}
ErrorResponse.InvalidSessionIdException = InvalidSessionIdException;
class MoveTargetOutOfBoundsException extends Exception {
  constructor(message, stacktrace) {
    super("move target out of bounds", message, stacktrace);
  }
}
ErrorResponse.MoveTargetOutOfBoundsException = MoveTargetOutOfBoundsException;
class NoSuchAlertException extends Exception {
  constructor(message, stacktrace) {
    super("no such alert", message, stacktrace);
  }
}
ErrorResponse.NoSuchAlertException = NoSuchAlertException;
class NoSuchElementException extends Exception {
  constructor(message, stacktrace) {
    super("no such element", message, stacktrace);
  }
}
ErrorResponse.NoSuchElementException = NoSuchElementException;
class NoSuchFrameException extends Exception {
  constructor(message, stacktrace) {
    super("no such frame", message, stacktrace);
  }
}
ErrorResponse.NoSuchFrameException = NoSuchFrameException;
class NoSuchHandleException extends Exception {
  constructor(message, stacktrace) {
    super("no such handle", message, stacktrace);
  }
}
ErrorResponse.NoSuchHandleException = NoSuchHandleException;
class NoSuchHistoryEntryException extends Exception {
  constructor(message, stacktrace) {
    super("no such history entry", message, stacktrace);
  }
}
ErrorResponse.NoSuchHistoryEntryException = NoSuchHistoryEntryException;
class NoSuchInterceptException extends Exception {
  constructor(message, stacktrace) {
    super("no such intercept", message, stacktrace);
  }
}
ErrorResponse.NoSuchInterceptException = NoSuchInterceptException;
class NoSuchNodeException extends Exception {
  constructor(message, stacktrace) {
    super("no such node", message, stacktrace);
  }
}
ErrorResponse.NoSuchNodeException = NoSuchNodeException;
class NoSuchRequestException extends Exception {
  constructor(message, stacktrace) {
    super("no such request", message, stacktrace);
  }
}
ErrorResponse.NoSuchRequestException = NoSuchRequestException;
class NoSuchScriptException extends Exception {
  constructor(message, stacktrace) {
    super("no such script", message, stacktrace);
  }
}
ErrorResponse.NoSuchScriptException = NoSuchScriptException;
class NoSuchUserContextException extends Exception {
  constructor(message, stacktrace) {
    super("no such user context", message, stacktrace);
  }
}
ErrorResponse.NoSuchUserContextException = NoSuchUserContextException;
class SessionNotCreatedException extends Exception {
  constructor(message, stacktrace) {
    super("session not created", message, stacktrace);
  }
}
ErrorResponse.SessionNotCreatedException = SessionNotCreatedException;
class UnknownCommandException extends Exception {
  constructor(message, stacktrace) {
    super("unknown command", message, stacktrace);
  }
}
ErrorResponse.UnknownCommandException = UnknownCommandException;
class UnknownErrorException extends Exception {
  constructor(message, stacktrace = new Error().stack) {
    super("unknown error", message, stacktrace);
  }
}
ErrorResponse.UnknownErrorException = UnknownErrorException;
class UnableToCaptureScreenException extends Exception {
  constructor(message, stacktrace) {
    super("unable to capture screen", message, stacktrace);
  }
}
ErrorResponse.UnableToCaptureScreenException = UnableToCaptureScreenException;
class UnableToCloseBrowserException extends Exception {
  constructor(message, stacktrace) {
    super("unable to close browser", message, stacktrace);
  }
}
ErrorResponse.UnableToCloseBrowserException = UnableToCloseBrowserException;
class UnsupportedOperationException extends Exception {
  constructor(message, stacktrace) {
    super("unsupported operation", message, stacktrace);
  }
}
ErrorResponse.UnsupportedOperationException = UnsupportedOperationException;
class NoSuchStoragePartitionException extends Exception {
  constructor(message, stacktrace) {
    super("no such storage partition", message, stacktrace);
  }
}
ErrorResponse.NoSuchStoragePartitionException = NoSuchStoragePartitionException;
class UnableToSetCookieException extends Exception {
  constructor(message, stacktrace) {
    super("unable to set cookie", message, stacktrace);
  }
}
ErrorResponse.UnableToSetCookieException = UnableToSetCookieException;
class UnableToSetFileInputException extends Exception {
  constructor(message, stacktrace) {
    super("unable to set file input", message, stacktrace);
  }
}
ErrorResponse.UnableToSetFileInputException = UnableToSetFileInputException;
class UnderspecifiedStoragePartitionException extends Exception {
  constructor(message, stacktrace) {
    super("underspecified storage partition", message, stacktrace);
  }
}
ErrorResponse.UnderspecifiedStoragePartitionException = UnderspecifiedStoragePartitionException;
var webdriverBidiPermissions = {};
Object.defineProperty(webdriverBidiPermissions, "__esModule", { value: true });
(function(exports2) {
  var __createBinding = _commonjsDynamicModules.commonjsGlobal && _commonjsDynamicModules.commonjsGlobal.__createBinding || (Object.create ? function(o, m, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    var desc = Object.getOwnPropertyDescriptor(m, k2);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k2];
      } };
    }
    Object.defineProperty(o, k22, desc);
  } : function(o, m, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o[k22] = m[k2];
  });
  var __setModuleDefault = _commonjsDynamicModules.commonjsGlobal && _commonjsDynamicModules.commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v2) {
    Object.defineProperty(o, "default", { enumerable: true, value: v2 });
  } : function(o, v2) {
    o["default"] = v2;
  });
  var __importStar = _commonjsDynamicModules.commonjsGlobal && _commonjsDynamicModules.commonjsGlobal.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k2 in mod)
        if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
          __createBinding(result, mod, k2);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  var __exportStar = _commonjsDynamicModules.commonjsGlobal && _commonjsDynamicModules.commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ChromiumBidi = exports2.Cdp = void 0;
  exports2.Cdp = __importStar(cdp);
  exports2.ChromiumBidi = __importStar(chromiumBidi);
  __exportStar(webdriverBidi, exports2);
  __exportStar(ErrorResponse, exports2);
  __exportStar(webdriverBidiPermissions, exports2);
})(protocol);
var BidiNoOpParser$1 = {};
Object.defineProperty(BidiNoOpParser$1, "__esModule", { value: true });
BidiNoOpParser$1.BidiNoOpParser = void 0;
class BidiNoOpParser {
  // Browsing Context domain
  // keep-sorted start block=yes
  parseActivateParams(params) {
    return params;
  }
  parseCaptureScreenshotParams(params) {
    return params;
  }
  parseCloseParams(params) {
    return params;
  }
  parseCreateParams(params) {
    return params;
  }
  parseGetTreeParams(params) {
    return params;
  }
  parseHandleUserPromptParams(params) {
    return params;
  }
  parseNavigateParams(params) {
    return params;
  }
  parsePrintParams(params) {
    return params;
  }
  parseReloadParams(params) {
    return params;
  }
  parseSetViewportParams(params) {
    return params;
  }
  parseTraverseHistoryParams(params) {
    return params;
  }
  // keep-sorted end
  // CDP domain
  // keep-sorted start block=yes
  parseGetSessionParams(params) {
    return params;
  }
  parseSendCommandParams(params) {
    return params;
  }
  // keep-sorted end
  // Script domain
  // keep-sorted start block=yes
  parseAddPreloadScriptParams(params) {
    return params;
  }
  parseCallFunctionParams(params) {
    return params;
  }
  parseDisownParams(params) {
    return params;
  }
  parseEvaluateParams(params) {
    return params;
  }
  parseGetRealmsParams(params) {
    return params;
  }
  parseRemovePreloadScriptParams(params) {
    return params;
  }
  // keep-sorted end
  // Input domain
  // keep-sorted start block=yes
  parsePerformActionsParams(params) {
    return params;
  }
  parseReleaseActionsParams(params) {
    return params;
  }
  parseSetFilesParams(params) {
    return params;
  }
  // keep-sorted end
  // Network domain
  // keep-sorted start block=yes
  parseAddInterceptParams(params) {
    return params;
  }
  parseContinueRequestParams(params) {
    return params;
  }
  parseContinueResponseParams(params) {
    return params;
  }
  parseContinueWithAuthParams(params) {
    return params;
  }
  parseFailRequestParams(params) {
    return params;
  }
  parseProvideResponseParams(params) {
    return params;
  }
  parseRemoveInterceptParams(params) {
    return params;
  }
  // keep-sorted end
  // Permissions domain
  // keep-sorted start block=yes
  parseSetPermissionsParams(params) {
    return params;
  }
  // keep-sorted end
  // Session domain
  // keep-sorted start block=yes
  parseSubscribeParams(params) {
    return params;
  }
  // keep-sorted end
  // Storage domain
  // keep-sorted start block=yes
  parseDeleteCookiesParams(params) {
    return params;
  }
  parseGetCookiesParams(params) {
    return params;
  }
  parseSetCookieParams(params) {
    return params;
  }
}
BidiNoOpParser$1.BidiNoOpParser = BidiNoOpParser;
var BrowserProcessor$1 = {};
Object.defineProperty(BrowserProcessor$1, "__esModule", { value: true });
BrowserProcessor$1.BrowserProcessor = void 0;
const protocol_js_1$k = protocol;
class BrowserProcessor {
  constructor(browserCdpClient) {
    __privateAdd(this, _browserCdpClient, void 0);
    __privateSet(this, _browserCdpClient, browserCdpClient);
  }
  close() {
    setTimeout(() => __privateGet(this, _browserCdpClient).sendCommand("Browser.close"), 0);
    return {};
  }
  async createUserContext() {
    const context = await __privateGet(this, _browserCdpClient).sendCommand("Target.createBrowserContext");
    return {
      userContext: context.browserContextId
    };
  }
  async removeUserContext(userContext) {
    if (userContext === "default") {
      throw new protocol_js_1$k.InvalidArgumentException("`default` user context cannot be removed");
    }
    try {
      await __privateGet(this, _browserCdpClient).sendCommand("Target.disposeBrowserContext", {
        browserContextId: userContext
      });
    } catch (err) {
      if (err.message.startsWith("Failed to find context with id")) {
        throw new protocol_js_1$k.NoSuchUserContextException(err.message);
      }
      throw err;
    }
    return {};
  }
  async getUserContexts() {
    const result = await __privateGet(this, _browserCdpClient).sendCommand("Target.getBrowserContexts");
    return {
      userContexts: [
        {
          userContext: "default"
        },
        ...result.browserContextIds.map((id) => {
          return {
            userContext: id
          };
        })
      ]
    };
  }
}
_browserCdpClient = new WeakMap();
BrowserProcessor$1.BrowserProcessor = BrowserProcessor;
var CdpProcessor$1 = {};
Object.defineProperty(CdpProcessor$1, "__esModule", { value: true });
CdpProcessor$1.CdpProcessor = void 0;
class CdpProcessor {
  constructor(browsingContextStorage, cdpConnection, browserCdpClient) {
    __privateAdd(this, _browsingContextStorage, void 0);
    __privateAdd(this, _cdpConnection, void 0);
    __privateAdd(this, _browserCdpClient2, void 0);
    __privateSet(this, _browsingContextStorage, browsingContextStorage);
    __privateSet(this, _cdpConnection, cdpConnection);
    __privateSet(this, _browserCdpClient2, browserCdpClient);
  }
  getSession(params) {
    const context = params.context;
    const sessionId = __privateGet(this, _browsingContextStorage).getContext(context).cdpTarget.cdpSessionId;
    if (sessionId === void 0) {
      return {};
    }
    return { session: sessionId };
  }
  async sendCommand(params) {
    const client = params.session ? __privateGet(this, _cdpConnection).getCdpClient(params.session) : __privateGet(this, _browserCdpClient2);
    const result = await client.sendCommand(params.method, params.params);
    return {
      result,
      session: params.session
    };
  }
}
_browsingContextStorage = new WeakMap();
_cdpConnection = new WeakMap();
_browserCdpClient2 = new WeakMap();
CdpProcessor$1.CdpProcessor = CdpProcessor;
var BrowsingContextProcessor$1 = {};
var DedicatedWorkerRealm$2 = {};
var Realm$2 = {};
var uuid = {};
Object.defineProperty(uuid, "__esModule", { value: true });
uuid.uuidv4 = void 0;
function uuidv4() {
  if ("crypto" in globalThis && "randomUUID" in globalThis.crypto) {
    return globalThis.crypto.randomUUID();
  }
  const randomValues = new Uint8Array(16);
  if ("crypto" in globalThis && "getRandomValues" in globalThis.crypto) {
    globalThis.crypto.getRandomValues(randomValues);
  } else {
    require$$2.webcrypto.getRandomValues(randomValues);
  }
  randomValues[6] = randomValues[6] & 15 | 64;
  randomValues[8] = randomValues[8] & 63 | 128;
  const bytesToHex = (bytes) => bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
  return [
    bytesToHex(randomValues.subarray(0, 4)),
    bytesToHex(randomValues.subarray(4, 6)),
    bytesToHex(randomValues.subarray(6, 8)),
    bytesToHex(randomValues.subarray(8, 10)),
    bytesToHex(randomValues.subarray(10, 16))
  ].join("-");
}
uuid.uuidv4 = uuidv4;
var ChannelProxy$1 = {};
Object.defineProperty(ChannelProxy$1, "__esModule", { value: true });
ChannelProxy$1.ChannelProxy = void 0;
const protocol_js_1$j = protocol;
const log_js_1$7 = log;
const uuid_js_1$3 = uuid;
const _ChannelProxy = class _ChannelProxy {
  constructor(channel, logger) {
    /** Starts listening for the channel events of the provided ChannelProxy. */
    __privateAdd(this, _startListener);
    /**
     * Returns a handle of ChannelProxy from window's property which was set there
     * by `getEvalInWindowStr`. If window property is not set yet, sets a promise
     * resolver to the window property, so that `getEvalInWindowStr` can resolve
     * the promise later on with the channel.
     * This is needed because `getEvalInWindowStr` can be called before or
     * after this method.
     */
    __privateAdd(this, _getHandleFromWindow);
    __privateAdd(this, _properties, void 0);
    __privateAdd(this, _id, (0, uuid_js_1$3.uuidv4)());
    __privateAdd(this, _logger2, void 0);
    __privateSet(this, _properties, channel);
    __privateSet(this, _logger2, logger);
  }
  /**
   * Creates a channel proxy in the given realm, initialises listener and
   * returns a handle to `sendMessage` delegate.
   */
  async init(realm, eventManager) {
    var _a3, _b3;
    const channelHandle = await __privateMethod(_a3 = _ChannelProxy, _createAndGetHandleInRealm, createAndGetHandleInRealm_fn).call(_a3, realm);
    const sendMessageHandle = await __privateMethod(_b3 = _ChannelProxy, _createSendMessageHandle, createSendMessageHandle_fn).call(_b3, realm, channelHandle);
    void __privateMethod(this, _startListener, startListener_fn).call(this, realm, channelHandle, eventManager);
    return sendMessageHandle;
  }
  /** Gets a ChannelProxy from window and returns its handle. */
  async startListenerFromWindow(realm, eventManager) {
    var _a3;
    try {
      const channelHandle = await __privateMethod(this, _getHandleFromWindow, getHandleFromWindow_fn).call(this, realm);
      void __privateMethod(this, _startListener, startListener_fn).call(this, realm, channelHandle, eventManager);
    } catch (error) {
      (_a3 = __privateGet(this, _logger2)) == null ? void 0 : _a3.call(this, log_js_1$7.LogType.debugError, error);
    }
  }
  /**
   * String to be evaluated to create a ProxyChannel and put it to window.
   * Returns the delegate `sendMessage`. Used to provide an argument for preload
   * script. Does the following:
   * 1. Creates a ChannelProxy.
   * 2. Puts the ChannelProxy to window['${this.#id}'] or resolves the promise
   *    by calling delegate stored in window['${this.#id}'].
   *    This is needed because `#getHandleFromWindow` can be called before or
   *    after this method.
   * 3. Returns the delegate `sendMessage` of the created ChannelProxy.
   */
  getEvalInWindowStr() {
    var _a3;
    const delegate = String((id, channelProxy) => {
      const w2 = window;
      if (w2[id] === void 0) {
        w2[id] = channelProxy;
      } else {
        w2[id](channelProxy);
        delete w2[id];
      }
      return channelProxy.sendMessage;
    });
    const channelProxyEval = __privateMethod(_a3 = _ChannelProxy, _createChannelProxyEvalStr, createChannelProxyEvalStr_fn).call(_a3);
    return `(${delegate})('${__privateGet(this, _id)}',${channelProxyEval})`;
  }
};
_properties = new WeakMap();
_id = new WeakMap();
_logger2 = new WeakMap();
_createChannelProxyEvalStr = new WeakSet();
createChannelProxyEvalStr_fn = function() {
  const functionStr = String(() => {
    const queue = [];
    let queueNonEmptyResolver = null;
    return {
      /**
       * Gets a promise, which is resolved as soon as a message occurs
       * in the queue.
       */
      async getMessage() {
        const onMessage = queue.length > 0 ? Promise.resolve() : new Promise((resolve) => {
          queueNonEmptyResolver = resolve;
        });
        await onMessage;
        return queue.shift();
      },
      /**
       * Adds a message to the queue.
       * Resolves the pending promise if needed.
       */
      sendMessage(message) {
        queue.push(message);
        if (queueNonEmptyResolver !== null) {
          queueNonEmptyResolver();
          queueNonEmptyResolver = null;
        }
      }
    };
  });
  return `(${functionStr})()`;
};
_createAndGetHandleInRealm = new WeakSet();
createAndGetHandleInRealm_fn = async function(realm) {
  const createChannelHandleResult = await realm.cdpClient.sendCommand("Runtime.evaluate", {
    expression: __privateMethod(this, _createChannelProxyEvalStr, createChannelProxyEvalStr_fn).call(this),
    contextId: realm.executionContextId,
    serializationOptions: {
      serialization: "idOnly"
    }
  });
  if (createChannelHandleResult.exceptionDetails || createChannelHandleResult.result.objectId === void 0) {
    throw new Error(`Cannot create channel`);
  }
  return createChannelHandleResult.result.objectId;
};
_createSendMessageHandle = new WeakSet();
createSendMessageHandle_fn = async function(realm, channelHandle) {
  const sendMessageArgResult = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
    functionDeclaration: String((channelHandle2) => {
      return channelHandle2.sendMessage;
    }),
    arguments: [{ objectId: channelHandle }],
    executionContextId: realm.executionContextId,
    serializationOptions: {
      serialization: "idOnly"
    }
  });
  return sendMessageArgResult.result.objectId;
};
_startListener = new WeakSet();
startListener_fn = async function(realm, channelHandle, eventManager) {
  var _a3, _b3;
  for (; ; ) {
    try {
      const message = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: String(async (channelHandle2) => await channelHandle2.getMessage()),
        arguments: [
          {
            objectId: channelHandle
          }
        ],
        awaitPromise: true,
        executionContextId: realm.executionContextId,
        serializationOptions: {
          serialization: "deep",
          maxDepth: ((_a3 = __privateGet(this, _properties).serializationOptions) == null ? void 0 : _a3.maxObjectDepth) ?? void 0
        }
      });
      if (message.exceptionDetails) {
        throw message.exceptionDetails;
      }
      for (const browsingContext of realm.associatedBrowsingContexts) {
        eventManager.registerEvent({
          type: "event",
          method: protocol_js_1$j.ChromiumBidi.Script.EventNames.Message,
          params: {
            channel: __privateGet(this, _properties).channel,
            data: realm.cdpToBidiValue(
              message,
              __privateGet(this, _properties).ownership ?? "none"
              /* Script.ResultOwnership.None */
            ),
            source: realm.source
          }
        }, browsingContext.id);
      }
    } catch (error) {
      (_b3 = __privateGet(this, _logger2)) == null ? void 0 : _b3.call(this, log_js_1$7.LogType.debugError, error);
      break;
    }
  }
};
_getHandleFromWindow = new WeakSet();
getHandleFromWindow_fn = async function(realm) {
  const channelHandleResult = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
    functionDeclaration: String((id) => {
      const w2 = window;
      if (w2[id] === void 0) {
        return new Promise((resolve) => w2[id] = resolve);
      }
      const channelProxy = w2[id];
      delete w2[id];
      return channelProxy;
    }),
    arguments: [{ value: __privateGet(this, _id) }],
    executionContextId: realm.executionContextId,
    awaitPromise: true,
    serializationOptions: {
      serialization: "idOnly"
    }
  });
  if (channelHandleResult.exceptionDetails !== void 0 || channelHandleResult.result.objectId === void 0) {
    throw new Error(`ChannelHandle not found in window["${__privateGet(this, _id)}"]`);
  }
  return channelHandleResult.result.objectId;
};
/**
 * Evaluation string which creates a ChannelProxy object on the client side.
 */
__privateAdd(_ChannelProxy, _createChannelProxyEvalStr);
/** Creates a ChannelProxy in the given realm. */
__privateAdd(_ChannelProxy, _createAndGetHandleInRealm);
/** Gets a handle to `sendMessage` delegate from the ChannelProxy handle. */
__privateAdd(_ChannelProxy, _createSendMessageHandle);
let ChannelProxy = _ChannelProxy;
ChannelProxy$1.ChannelProxy = ChannelProxy;
Object.defineProperty(Realm$2, "__esModule", { value: true });
Realm$2.Realm = void 0;
const protocol_js_1$i = protocol;
const log_js_1$6 = log;
const uuid_js_1$2 = uuid;
const ChannelProxy_js_1$1 = ChannelProxy$1;
let Realm$1 = (_a = class {
  constructor(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage) {
    __privateAdd(this, _flattenKeyValuePairs);
    __privateAdd(this, _flattenValueList);
    __privateAdd(this, _serializeCdpExceptionDetails);
    __privateAdd(this, _getExceptionResult);
    __privateAdd(this, _releaseObject);
    __privateAdd(this, _cdpClient, void 0);
    __privateAdd(this, _eventManager, void 0);
    __privateAdd(this, _executionContextId, void 0);
    __privateAdd(this, _logger3, void 0);
    __privateAdd(this, _origin, void 0);
    __privateAdd(this, _realmId, void 0);
    __privateAdd(this, _realmStorage, void 0);
    __privateSet(this, _cdpClient, cdpClient);
    __privateSet(this, _eventManager, eventManager);
    __privateSet(this, _executionContextId, executionContextId);
    __privateSet(this, _logger3, logger);
    __privateSet(this, _origin, origin);
    __privateSet(this, _realmId, realmId);
    __privateSet(this, _realmStorage, realmStorage);
    __privateGet(this, _realmStorage).addRealm(this);
  }
  cdpToBidiValue(cdpValue, resultOwnership) {
    const bidiValue = this.serializeForBiDi(cdpValue.result.deepSerializedValue, /* @__PURE__ */ new Map());
    if (cdpValue.result.objectId) {
      const objectId = cdpValue.result.objectId;
      if (resultOwnership === "root") {
        bidiValue.handle = objectId;
        __privateGet(this, _realmStorage).knownHandlesToRealmMap.set(objectId, this.realmId);
      } else {
        void __privateMethod(this, _releaseObject, releaseObject_fn).call(this, objectId).catch((error) => {
          var _a3;
          return (_a3 = __privateGet(this, _logger3)) == null ? void 0 : _a3.call(this, log_js_1$6.LogType.debugError, error);
        });
      }
    }
    if (cdpValue.result.type === "object") {
      switch (cdpValue.result.subtype) {
        case "generator":
        case "iterator":
          bidiValue.type = cdpValue.result.subtype;
          delete bidiValue["value"];
          break;
      }
    }
    return bidiValue;
  }
  /**
   * Relies on the CDP to implement proper BiDi serialization, except:
   * * CDP integer property `backendNodeId` is replaced with `sharedId` of
   * `{documentId}_element_{backendNodeId}`;
   * * CDP integer property `weakLocalObjectReference` is replaced with UUID `internalId`
   * using unique-per serialization `internalIdMap`.
   * * CDP type `platformobject` is replaced with `object`.
   * @param deepSerializedValue - CDP value to be converted to BiDi.
   * @param internalIdMap - Map from CDP integer `weakLocalObjectReference` to BiDi UUID
   * `internalId`.
   */
  serializeForBiDi(deepSerializedValue, internalIdMap) {
    if (Object.hasOwn(deepSerializedValue, "weakLocalObjectReference")) {
      const weakLocalObjectReference = deepSerializedValue.weakLocalObjectReference;
      if (!internalIdMap.has(weakLocalObjectReference)) {
        internalIdMap.set(weakLocalObjectReference, (0, uuid_js_1$2.uuidv4)());
      }
      deepSerializedValue.internalId = internalIdMap.get(weakLocalObjectReference);
      delete deepSerializedValue["weakLocalObjectReference"];
    }
    if (deepSerializedValue.type === "platformobject") {
      return { type: "object" };
    }
    const bidiValue = deepSerializedValue.value;
    if (bidiValue === void 0) {
      return deepSerializedValue;
    }
    if (["array", "set", "htmlcollection", "nodelist"].includes(deepSerializedValue.type)) {
      for (const i in bidiValue) {
        bidiValue[i] = this.serializeForBiDi(bidiValue[i], internalIdMap);
      }
    }
    if (["object", "map"].includes(deepSerializedValue.type)) {
      for (const i in bidiValue) {
        bidiValue[i] = [
          this.serializeForBiDi(bidiValue[i][0], internalIdMap),
          this.serializeForBiDi(bidiValue[i][1], internalIdMap)
        ];
      }
    }
    return deepSerializedValue;
  }
  get realmId() {
    return __privateGet(this, _realmId);
  }
  get executionContextId() {
    return __privateGet(this, _executionContextId);
  }
  get origin() {
    return __privateGet(this, _origin);
  }
  get source() {
    return {
      realm: this.realmId
    };
  }
  get cdpClient() {
    return __privateGet(this, _cdpClient);
  }
  get baseInfo() {
    return {
      realm: this.realmId,
      origin: this.origin
    };
  }
  async evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation = false) {
    var _a3;
    const cdpEvaluateResult = await this.cdpClient.sendCommand("Runtime.evaluate", {
      contextId: this.executionContextId,
      expression,
      awaitPromise,
      serializationOptions: __privateMethod(_a3 = _a, _getSerializationOptions, getSerializationOptions_fn).call(_a3, "deep", serializationOptions),
      userGesture: userActivation
    });
    if (cdpEvaluateResult.exceptionDetails) {
      return await __privateMethod(this, _getExceptionResult, getExceptionResult_fn).call(this, cdpEvaluateResult.exceptionDetails, 0, resultOwnership);
    }
    return {
      realm: this.realmId,
      result: this.cdpToBidiValue(cdpEvaluateResult, resultOwnership),
      type: "success"
    };
  }
  initialize() {
    for (const browsingContext of this.associatedBrowsingContexts) {
      __privateGet(this, _eventManager).registerEvent({
        type: "event",
        method: protocol_js_1$i.ChromiumBidi.Script.EventNames.RealmCreated,
        params: this.realmInfo
      }, browsingContext.id);
    }
  }
  /**
   * Serializes a given CDP object into BiDi, keeping references in the
   * target's `globalThis`.
   */
  async serializeCdpObject(cdpRemoteObject, resultOwnership) {
    var _a3;
    const argument = __privateMethod(_a3 = _a, _cdpRemoteObjectToCallArgument, cdpRemoteObjectToCallArgument_fn).call(_a3, cdpRemoteObject);
    const cdpValue = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
      functionDeclaration: String((remoteObject) => remoteObject),
      awaitPromise: false,
      arguments: [argument],
      serializationOptions: {
        serialization: "deep"
      },
      executionContextId: this.executionContextId
    });
    return this.cdpToBidiValue(cdpValue, resultOwnership);
  }
  /**
   * Gets the string representation of an object. This is equivalent to
   * calling `toString()` on the object value.
   */
  async stringifyObject(cdpRemoteObject) {
    const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
      functionDeclaration: String((remoteObject) => String(remoteObject)),
      awaitPromise: false,
      arguments: [cdpRemoteObject],
      returnByValue: true,
      executionContextId: this.executionContextId
    });
    return result.value;
  }
  async callFunction(functionDeclaration, thisLocalValue, argumentsLocalValues, awaitPromise, resultOwnership, serializationOptions, userActivation = false) {
    var _a3;
    const callFunctionAndSerializeScript = `(...args) => {
      function callFunction(f, args) {
        const deserializedThis = args.shift();
        const deserializedArgs = args;
        return f.apply(deserializedThis, deserializedArgs);
      }
      return callFunction((
        ${functionDeclaration}
      ), args);
    }`;
    const thisAndArgumentsList = [
      await this.deserializeForCdp(thisLocalValue),
      ...await Promise.all(argumentsLocalValues.map(async (argumentLocalValue) => await this.deserializeForCdp(argumentLocalValue)))
    ];
    let cdpCallFunctionResult;
    try {
      cdpCallFunctionResult = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: callFunctionAndSerializeScript,
        awaitPromise,
        arguments: thisAndArgumentsList,
        serializationOptions: __privateMethod(_a3 = _a, _getSerializationOptions, getSerializationOptions_fn).call(_a3, "deep", serializationOptions),
        executionContextId: this.executionContextId,
        userGesture: userActivation
      });
    } catch (error) {
      if (error.code === -32e3 && [
        "Could not find object with given id",
        "Argument should belong to the same JavaScript world as target object",
        "Invalid remote object id"
      ].includes(error.message)) {
        throw new protocol_js_1$i.NoSuchHandleException("Handle was not found.");
      }
      throw error;
    }
    if (cdpCallFunctionResult.exceptionDetails) {
      return await __privateMethod(this, _getExceptionResult, getExceptionResult_fn).call(this, cdpCallFunctionResult.exceptionDetails, 1, resultOwnership);
    }
    return {
      type: "success",
      result: this.cdpToBidiValue(cdpCallFunctionResult, resultOwnership),
      realm: this.realmId
    };
  }
  async deserializeForCdp(localValue) {
    if ("handle" in localValue && localValue.handle) {
      return { objectId: localValue.handle };
    } else if ("handle" in localValue || "sharedId" in localValue) {
      throw new protocol_js_1$i.NoSuchHandleException("Handle was not found.");
    }
    switch (localValue.type) {
      case "undefined":
        return { unserializableValue: "undefined" };
      case "null":
        return { unserializableValue: "null" };
      case "string":
        return { value: localValue.value };
      case "number":
        if (localValue.value === "NaN") {
          return { unserializableValue: "NaN" };
        } else if (localValue.value === "-0") {
          return { unserializableValue: "-0" };
        } else if (localValue.value === "Infinity") {
          return { unserializableValue: "Infinity" };
        } else if (localValue.value === "-Infinity") {
          return { unserializableValue: "-Infinity" };
        }
        return {
          value: localValue.value
        };
      case "boolean":
        return { value: Boolean(localValue.value) };
      case "bigint":
        return {
          unserializableValue: `BigInt(${JSON.stringify(localValue.value)})`
        };
      case "date":
        return {
          unserializableValue: `new Date(Date.parse(${JSON.stringify(localValue.value)}))`
        };
      case "regexp":
        return {
          unserializableValue: `new RegExp(${JSON.stringify(localValue.value.pattern)}, ${JSON.stringify(localValue.value.flags)})`
        };
      case "map": {
        const keyValueArray = await __privateMethod(this, _flattenKeyValuePairs, flattenKeyValuePairs_fn).call(this, localValue.value);
        const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String((...args) => {
            const result2 = /* @__PURE__ */ new Map();
            for (let i = 0; i < args.length; i += 2) {
              result2.set(args[i], args[i + 1]);
            }
            return result2;
          }),
          awaitPromise: false,
          arguments: keyValueArray,
          returnByValue: false,
          executionContextId: this.executionContextId
        });
        return { objectId: result.objectId };
      }
      case "object": {
        const keyValueArray = await __privateMethod(this, _flattenKeyValuePairs, flattenKeyValuePairs_fn).call(this, localValue.value);
        const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String((...args) => {
            const result2 = {};
            for (let i = 0; i < args.length; i += 2) {
              const key = args[i];
              result2[key] = args[i + 1];
            }
            return result2;
          }),
          awaitPromise: false,
          arguments: keyValueArray,
          returnByValue: false,
          executionContextId: this.executionContextId
        });
        return { objectId: result.objectId };
      }
      case "array": {
        const args = await __privateMethod(this, _flattenValueList, flattenValueList_fn).call(this, localValue.value);
        const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String((...args2) => args2),
          awaitPromise: false,
          arguments: args,
          returnByValue: false,
          executionContextId: this.executionContextId
        });
        return { objectId: result.objectId };
      }
      case "set": {
        const args = await __privateMethod(this, _flattenValueList, flattenValueList_fn).call(this, localValue.value);
        const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String((...args2) => new Set(args2)),
          awaitPromise: false,
          arguments: args,
          returnByValue: false,
          executionContextId: this.executionContextId
        });
        return { objectId: result.objectId };
      }
      case "channel": {
        const channelProxy = new ChannelProxy_js_1$1.ChannelProxy(localValue.value, __privateGet(this, _logger3));
        const channelProxySendMessageHandle = await channelProxy.init(this, __privateGet(this, _eventManager));
        return { objectId: channelProxySendMessageHandle };
      }
    }
    throw new Error(`Value ${JSON.stringify(localValue)} is not deserializable.`);
  }
  async disown(handle) {
    if (__privateGet(this, _realmStorage).knownHandlesToRealmMap.get(handle) !== this.realmId) {
      return;
    }
    await __privateMethod(this, _releaseObject, releaseObject_fn).call(this, handle);
    __privateGet(this, _realmStorage).knownHandlesToRealmMap.delete(handle);
  }
  dispose() {
    for (const browsingContext of this.associatedBrowsingContexts) {
      __privateGet(this, _eventManager).registerEvent({
        type: "event",
        method: protocol_js_1$i.ChromiumBidi.Script.EventNames.RealmDestroyed,
        params: {
          realm: this.realmId
        }
      }, browsingContext.id);
    }
  }
}, _cdpClient = new WeakMap(), _eventManager = new WeakMap(), _executionContextId = new WeakMap(), _logger3 = new WeakMap(), _origin = new WeakMap(), _realmId = new WeakMap(), _realmStorage = new WeakMap(), _cdpRemoteObjectToCallArgument = new WeakSet(), cdpRemoteObjectToCallArgument_fn = function(cdpRemoteObject) {
  if (cdpRemoteObject.objectId !== void 0) {
    return { objectId: cdpRemoteObject.objectId };
  }
  if (cdpRemoteObject.unserializableValue !== void 0) {
    return { unserializableValue: cdpRemoteObject.unserializableValue };
  }
  return { value: cdpRemoteObject.value };
}, _flattenKeyValuePairs = new WeakSet(), flattenKeyValuePairs_fn = async function(mappingLocalValue) {
  const keyValueArray = [];
  for (const [key, value] of mappingLocalValue) {
    let keyArg;
    if (typeof key === "string") {
      keyArg = { value: key };
    } else {
      keyArg = await this.deserializeForCdp(key);
    }
    const valueArg = await this.deserializeForCdp(value);
    keyValueArray.push(keyArg);
    keyValueArray.push(valueArg);
  }
  return keyValueArray;
}, _flattenValueList = new WeakSet(), flattenValueList_fn = async function(listLocalValue) {
  return await Promise.all(listLocalValue.map((localValue) => this.deserializeForCdp(localValue)));
}, _serializeCdpExceptionDetails = new WeakSet(), serializeCdpExceptionDetails_fn = async function(cdpExceptionDetails, lineOffset, resultOwnership) {
  var _a3;
  const callFrames = ((_a3 = cdpExceptionDetails.stackTrace) == null ? void 0 : _a3.callFrames.map((frame) => ({
    url: frame.url,
    functionName: frame.functionName,
    lineNumber: frame.lineNumber - lineOffset,
    columnNumber: frame.columnNumber
  }))) ?? [];
  const exception = cdpExceptionDetails.exception;
  return {
    exception: await this.serializeCdpObject(exception, resultOwnership),
    columnNumber: cdpExceptionDetails.columnNumber,
    lineNumber: cdpExceptionDetails.lineNumber - lineOffset,
    stackTrace: {
      callFrames
    },
    text: await this.stringifyObject(exception) || cdpExceptionDetails.text
  };
}, _getExceptionResult = new WeakSet(), getExceptionResult_fn = async function(exceptionDetails, lineOffset, resultOwnership) {
  return {
    exceptionDetails: await __privateMethod(this, _serializeCdpExceptionDetails, serializeCdpExceptionDetails_fn).call(this, exceptionDetails, lineOffset, resultOwnership),
    realm: this.realmId,
    type: "exception"
  };
}, _getSerializationOptions = new WeakSet(), getSerializationOptions_fn = function(serialization, serializationOptions) {
  var _a3, _b3;
  return {
    serialization,
    additionalParameters: __privateMethod(_a3 = _a, _getAdditionalSerializationParameters, getAdditionalSerializationParameters_fn).call(_a3, serializationOptions),
    ...__privateMethod(_b3 = _a, _getMaxObjectDepth, getMaxObjectDepth_fn).call(_b3, serializationOptions)
  };
}, _getAdditionalSerializationParameters = new WeakSet(), getAdditionalSerializationParameters_fn = function(serializationOptions) {
  const additionalParameters = {};
  if (serializationOptions.maxDomDepth !== void 0) {
    additionalParameters["maxNodeDepth"] = serializationOptions.maxDomDepth === null ? 1e3 : serializationOptions.maxDomDepth;
  }
  if (serializationOptions.includeShadowTree !== void 0) {
    additionalParameters["includeShadowTree"] = serializationOptions.includeShadowTree;
  }
  return additionalParameters;
}, _getMaxObjectDepth = new WeakSet(), getMaxObjectDepth_fn = function(serializationOptions) {
  return serializationOptions.maxObjectDepth === void 0 || serializationOptions.maxObjectDepth === null ? {} : { maxDepth: serializationOptions.maxObjectDepth };
}, _releaseObject = new WeakSet(), releaseObject_fn = async function(handle) {
  try {
    await this.cdpClient.sendCommand("Runtime.releaseObject", {
      objectId: handle
    });
  } catch (error) {
    if (!(error.code === -32e3 && error.message === "Invalid remote object id")) {
      throw error;
    }
  }
}, __privateAdd(_a, _cdpRemoteObjectToCallArgument), __privateAdd(_a, _getSerializationOptions), __privateAdd(_a, _getAdditionalSerializationParameters), __privateAdd(_a, _getMaxObjectDepth), _a);
Realm$2.Realm = Realm$1;
Object.defineProperty(DedicatedWorkerRealm$2, "__esModule", { value: true });
DedicatedWorkerRealm$2.DedicatedWorkerRealm = void 0;
const Realm_js_1$1 = Realm$2;
let DedicatedWorkerRealm$1 = (_b = class extends Realm_js_1$1.Realm {
  constructor(cdpClient, eventManager, executionContextId, logger, origin, ownerRealm, realmId, realmStorage) {
    super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
    __privateAdd(this, _ownerRealm, void 0);
    __privateSet(this, _ownerRealm, ownerRealm);
    this.initialize();
  }
  get associatedBrowsingContexts() {
    return __privateGet(this, _ownerRealm).associatedBrowsingContexts;
  }
  get realmType() {
    return "dedicated-worker";
  }
  get source() {
    var _a3;
    return {
      realm: this.realmId,
      // This is a hack to make Puppeteer able to track workers.
      // TODO: remove after Puppeteer tracks workers by owners and use the base version.
      context: (_a3 = this.associatedBrowsingContexts[0]) == null ? void 0 : _a3.id
    };
  }
  get realmInfo() {
    return {
      ...this.baseInfo,
      type: this.realmType,
      owners: [__privateGet(this, _ownerRealm).realmId]
    };
  }
}, _ownerRealm = new WeakMap(), _b);
DedicatedWorkerRealm$2.DedicatedWorkerRealm = DedicatedWorkerRealm$1;
var BrowsingContextImpl$1 = {};
var assert$1 = {};
Object.defineProperty(assert$1, "__esModule", { value: true });
assert$1.assert = void 0;
function assert(predicate, message) {
  if (!predicate) {
    throw new Error(message ?? "Internal assertion failed.");
  }
}
assert$1.assert = assert;
var Deferred$1 = {};
Object.defineProperty(Deferred$1, "__esModule", { value: true });
Deferred$1.Deferred = void 0;
class Deferred {
  constructor() {
    __privateAdd(this, _isFinished, false);
    __privateAdd(this, _promise, void 0);
    __privateAdd(this, _resolve, void 0);
    __privateAdd(this, _reject, void 0);
    __publicField(this, _c, "Promise");
    __privateSet(this, _promise, new Promise((resolve, reject) => {
      __privateSet(this, _resolve, resolve);
      __privateSet(this, _reject, reject);
    }));
    __privateGet(this, _promise).catch((_error) => {
    });
  }
  get isFinished() {
    return __privateGet(this, _isFinished);
  }
  then(onFulfilled, onRejected) {
    return __privateGet(this, _promise).then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return __privateGet(this, _promise).catch(onRejected);
  }
  resolve(value) {
    if (!__privateGet(this, _isFinished)) {
      __privateSet(this, _isFinished, true);
      __privateGet(this, _resolve).call(this, value);
    }
  }
  reject(reason) {
    if (!__privateGet(this, _isFinished)) {
      __privateSet(this, _isFinished, true);
      __privateGet(this, _reject).call(this, reason);
    }
  }
  finally(onFinally) {
    return __privateGet(this, _promise).finally(onFinally);
  }
}
_c = Symbol.toStringTag;
_isFinished = new WeakMap();
_promise = new WeakMap();
_resolve = new WeakMap();
_reject = new WeakMap();
Deferred$1.Deferred = Deferred;
var unitConversions = {};
Object.defineProperty(unitConversions, "__esModule", { value: true });
unitConversions.inchesFromCm = void 0;
function inchesFromCm(cm) {
  return cm / 2.54;
}
unitConversions.inchesFromCm = inchesFromCm;
var WindowRealm$2 = {};
var SharedId = {};
Object.defineProperty(SharedId, "__esModule", { value: true });
SharedId.parseSharedId = SharedId.getSharedId = void 0;
const SHARED_ID_DIVIDER = "_element_";
function getSharedId(frameId, documentId, backendNodeId, sharedIdWithFrame) {
  if (sharedIdWithFrame) {
    return `f.${frameId}.d.${documentId}.e.${backendNodeId}`;
  }
  return `${documentId}${SHARED_ID_DIVIDER}${backendNodeId}`;
}
SharedId.getSharedId = getSharedId;
function parseLegacySharedId(sharedId) {
  const match = sharedId.match(new RegExp(`(.*)${SHARED_ID_DIVIDER}(.*)`));
  if (!match) {
    return null;
  }
  const documentId = match[1];
  const elementId = match[2];
  if (documentId === void 0 || elementId === void 0) {
    return null;
  }
  const backendNodeId = parseInt(elementId ?? "");
  if (isNaN(backendNodeId)) {
    return null;
  }
  return {
    documentId,
    backendNodeId
  };
}
function parseSharedId(sharedId) {
  const legacyFormattedSharedId = parseLegacySharedId(sharedId);
  if (legacyFormattedSharedId !== null) {
    return { ...legacyFormattedSharedId, frameId: void 0 };
  }
  const match = sharedId.match(/f\.(.*)\.d\.(.*)\.e\.([0-9]*)/);
  if (!match) {
    return null;
  }
  const frameId = match[1];
  const documentId = match[2];
  const elementId = match[3];
  if (frameId === void 0 || documentId === void 0 || elementId === void 0) {
    return null;
  }
  const backendNodeId = parseInt(elementId ?? "");
  if (isNaN(backendNodeId)) {
    return null;
  }
  return {
    frameId,
    documentId,
    backendNodeId
  };
}
SharedId.parseSharedId = parseSharedId;
Object.defineProperty(WindowRealm$2, "__esModule", { value: true });
WindowRealm$2.WindowRealm = void 0;
const protocol_js_1$h = protocol;
const Realm_js_1 = Realm$2;
const SharedId_js_1 = SharedId;
let WindowRealm$1 = (_d = class extends Realm_js_1.Realm {
  constructor(browsingContextId, browsingContextStorage, cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage, sandbox, sharedIdWithFrame) {
    super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
    __privateAdd(this, _getBrowsingContextId);
    __privateAdd(this, _browsingContextId, void 0);
    __privateAdd(this, _browsingContextStorage2, void 0);
    __privateAdd(this, _sharedIdWithFrame, void 0);
    __publicField(this, "sandbox");
    __privateSet(this, _browsingContextId, browsingContextId);
    __privateSet(this, _browsingContextStorage2, browsingContextStorage);
    __privateSet(this, _sharedIdWithFrame, sharedIdWithFrame);
    this.sandbox = sandbox;
    this.initialize();
  }
  get browsingContext() {
    return __privateGet(this, _browsingContextStorage2).getContext(__privateGet(this, _browsingContextId));
  }
  get associatedBrowsingContexts() {
    return [this.browsingContext];
  }
  get realmType() {
    return "window";
  }
  get realmInfo() {
    return {
      ...this.baseInfo,
      type: this.realmType,
      context: __privateGet(this, _browsingContextId),
      sandbox: this.sandbox
    };
  }
  get source() {
    return {
      realm: this.realmId,
      context: this.browsingContext.id
    };
  }
  serializeForBiDi(deepSerializedValue, internalIdMap) {
    const bidiValue = deepSerializedValue.value;
    if (deepSerializedValue.type === "node") {
      if (Object.hasOwn(bidiValue, "backendNodeId")) {
        let navigableId = this.browsingContext.navigableId ?? "UNKNOWN";
        if (Object.hasOwn(bidiValue, "loaderId")) {
          navigableId = bidiValue.loaderId;
          delete bidiValue["loaderId"];
        }
        deepSerializedValue.sharedId = (0, SharedId_js_1.getSharedId)(__privateMethod(this, _getBrowsingContextId, getBrowsingContextId_fn).call(this, navigableId), navigableId, bidiValue.backendNodeId, __privateGet(this, _sharedIdWithFrame));
        delete bidiValue["backendNodeId"];
      }
      if (Object.hasOwn(bidiValue, "children")) {
        for (const i in bidiValue.children) {
          bidiValue.children[i] = this.serializeForBiDi(bidiValue.children[i], internalIdMap);
        }
      }
      if (Object.hasOwn(bidiValue, "shadowRoot") && bidiValue.shadowRoot !== null) {
        bidiValue.shadowRoot = this.serializeForBiDi(bidiValue.shadowRoot, internalIdMap);
      }
      if (bidiValue.namespaceURI === "") {
        bidiValue.namespaceURI = null;
      }
    }
    return super.serializeForBiDi(deepSerializedValue, internalIdMap);
  }
  async deserializeForCdp(localValue) {
    if ("sharedId" in localValue && localValue.sharedId) {
      const parsedSharedId = (0, SharedId_js_1.parseSharedId)(localValue.sharedId);
      if (parsedSharedId === null) {
        throw new protocol_js_1$h.NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
      }
      const { documentId, backendNodeId } = parsedSharedId;
      if (this.browsingContext.navigableId !== documentId) {
        throw new protocol_js_1$h.NoSuchNodeException(`SharedId "${localValue.sharedId}" belongs to different document. Current document is ${this.browsingContext.navigableId}.`);
      }
      try {
        const { object } = await this.cdpClient.sendCommand("DOM.resolveNode", {
          backendNodeId,
          executionContextId: this.executionContextId
        });
        return { objectId: object.objectId };
      } catch (error) {
        if (error.code === -32e3 && error.message === "No node with given id found") {
          throw new protocol_js_1$h.NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
        }
        throw new protocol_js_1$h.UnknownErrorException(error.message, error.stack);
      }
    }
    return await super.deserializeForCdp(localValue);
  }
  async evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation) {
    await __privateGet(this, _browsingContextStorage2).getContext(__privateGet(this, _browsingContextId)).targetUnblockedOrThrow();
    return await super.evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation);
  }
  async callFunction(functionDeclaration, thisLocalValue, argumentsLocalValues, awaitPromise, resultOwnership, serializationOptions, userActivation) {
    await __privateGet(this, _browsingContextStorage2).getContext(__privateGet(this, _browsingContextId)).targetUnblockedOrThrow();
    return await super.callFunction(functionDeclaration, thisLocalValue, argumentsLocalValues, awaitPromise, resultOwnership, serializationOptions, userActivation);
  }
}, _browsingContextId = new WeakMap(), _browsingContextStorage2 = new WeakMap(), _sharedIdWithFrame = new WeakMap(), _getBrowsingContextId = new WeakSet(), getBrowsingContextId_fn = function(navigableId) {
  const maybeBrowsingContext = __privateGet(this, _browsingContextStorage2).getAllContexts().find((context) => context.navigableId === navigableId);
  return (maybeBrowsingContext == null ? void 0 : maybeBrowsingContext.id) ?? "UNKNOWN";
}, _d);
WindowRealm$2.WindowRealm = WindowRealm$1;
Object.defineProperty(BrowsingContextImpl$1, "__esModule", { value: true });
BrowsingContextImpl$1.serializeOrigin = BrowsingContextImpl$1.BrowsingContextImpl = void 0;
const protocol_js_1$g = protocol;
const assert_js_1$7 = assert$1;
const Deferred_js_1$2 = Deferred$1;
const log_js_1$5 = log;
const unitConversions_js_1 = unitConversions;
const WindowRealm_js_1$1 = WindowRealm$2;
const _BrowsingContextImpl = class _BrowsingContextImpl {
  constructor(cdpTarget, realmStorage, id, parentId, userContext, eventManager, browsingContextStorage, sharedIdWithFrame, logger) {
    __privateAdd(this, _deleteAllChildren);
    __privateAdd(this, _defaultRealm);
    __privateAdd(this, _initListeners);
    __privateAdd(this, _documentChanged);
    __privateAdd(this, _resetLifecycleIfFinished);
    __privateAdd(this, _failLifecycleIfNotFinished);
    /**
     * See
     * https://w3c.github.io/webdriver-bidi/#:~:text=If%20command%20parameters%20contains%20%22clip%22%3A
     */
    __privateAdd(this, _parseRect);
    /** The ID of this browsing context. */
    __privateAdd(this, _id2, void 0);
    __publicField(this, "userContext");
    /**
     * The ID of the parent browsing context.
     * If null, this is a top-level context.
     */
    __privateAdd(this, _parentId, void 0);
    /** Direct children browsing contexts. */
    __privateAdd(this, _children, /* @__PURE__ */ new Set());
    __privateAdd(this, _browsingContextStorage3, void 0);
    __privateAdd(this, _lifecycle, {
      DOMContentLoaded: new Deferred_js_1$2.Deferred(),
      load: new Deferred_js_1$2.Deferred()
    });
    __privateAdd(this, _navigation, {
      withinDocument: new Deferred_js_1$2.Deferred()
    });
    __privateAdd(this, _url, "about:blank");
    __privateAdd(this, _eventManager2, void 0);
    __privateAdd(this, _realmStorage2, void 0);
    __privateAdd(this, _loaderId, void 0);
    __privateAdd(this, _cdpTarget, void 0);
    __privateAdd(this, _maybeDefaultRealm, void 0);
    __privateAdd(this, _sharedIdWithFrame2, void 0);
    __privateAdd(this, _logger4, void 0);
    __privateSet(this, _cdpTarget, cdpTarget);
    __privateSet(this, _realmStorage2, realmStorage);
    __privateSet(this, _id2, id);
    __privateSet(this, _parentId, parentId);
    this.userContext = userContext;
    __privateSet(this, _eventManager2, eventManager);
    __privateSet(this, _browsingContextStorage3, browsingContextStorage);
    __privateSet(this, _sharedIdWithFrame2, sharedIdWithFrame);
    __privateSet(this, _logger4, logger);
  }
  static create(cdpTarget, realmStorage, id, parentId, userContext, eventManager, browsingContextStorage, sharedIdWithFrame, logger) {
    var _a3;
    const context = new _BrowsingContextImpl(cdpTarget, realmStorage, id, parentId, userContext, eventManager, browsingContextStorage, sharedIdWithFrame, logger);
    __privateMethod(_a3 = context, _initListeners, initListeners_fn).call(_a3);
    browsingContextStorage.addContext(context);
    if (!context.isTopLevelContext()) {
      context.parent.addChild(context.id);
    }
    eventManager.registerEvent({
      type: "event",
      method: protocol_js_1$g.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
      params: context.serializeToBidiValue()
    }, context.id);
    return context;
  }
  static getTimestamp() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * @see https://html.spec.whatwg.org/multipage/document-sequences.html#navigable
   */
  get navigableId() {
    return __privateGet(this, _loaderId);
  }
  dispose() {
    __privateMethod(this, _deleteAllChildren, deleteAllChildren_fn).call(this);
    __privateGet(this, _realmStorage2).deleteRealms({
      browsingContextId: this.id
    });
    if (!this.isTopLevelContext()) {
      __privateGet(this.parent, _children).delete(this.id);
    }
    __privateMethod(this, _failLifecycleIfNotFinished, failLifecycleIfNotFinished_fn).call(this);
    __privateGet(this, _eventManager2).registerEvent({
      type: "event",
      method: protocol_js_1$g.ChromiumBidi.BrowsingContext.EventNames.ContextDestroyed,
      params: this.serializeToBidiValue()
    }, this.id);
    __privateGet(this, _browsingContextStorage3).deleteContextById(this.id);
  }
  /** Returns the ID of this context. */
  get id() {
    return __privateGet(this, _id2);
  }
  /** Returns the parent context ID. */
  get parentId() {
    return __privateGet(this, _parentId);
  }
  /** Returns the parent context. */
  get parent() {
    if (this.parentId === null) {
      return null;
    }
    return __privateGet(this, _browsingContextStorage3).getContext(this.parentId);
  }
  /** Returns all direct children contexts. */
  get directChildren() {
    return [...__privateGet(this, _children)].map((id) => __privateGet(this, _browsingContextStorage3).getContext(id));
  }
  /** Returns all children contexts, flattened. */
  get allChildren() {
    const children = this.directChildren;
    return children.concat(...children.map((child) => child.allChildren));
  }
  /**
   * Returns true if this is a top-level context.
   * This is the case whenever the parent context ID is null.
   */
  isTopLevelContext() {
    return __privateGet(this, _parentId) === null;
  }
  get top() {
    let topContext = this;
    let parent = topContext.parent;
    while (parent) {
      topContext = parent;
      parent = topContext.parent;
    }
    return topContext;
  }
  addChild(childId) {
    __privateGet(this, _children).add(childId);
  }
  get cdpTarget() {
    return __privateGet(this, _cdpTarget);
  }
  updateCdpTarget(cdpTarget) {
    __privateSet(this, _cdpTarget, cdpTarget);
    __privateMethod(this, _initListeners, initListeners_fn).call(this);
  }
  get url() {
    return __privateGet(this, _url);
  }
  async lifecycleLoaded() {
    await __privateGet(this, _lifecycle).load;
  }
  async targetUnblockedOrThrow() {
    const result = await __privateGet(this, _cdpTarget).unblocked;
    if (result.kind === "error") {
      throw result.error;
    }
  }
  async getOrCreateSandbox(sandbox) {
    if (sandbox === void 0 || sandbox === "") {
      return __privateGet(this, _defaultRealm, defaultRealm_get);
    }
    let maybeSandboxes = __privateGet(this, _realmStorage2).findRealms({
      browsingContextId: this.id,
      sandbox
    });
    if (maybeSandboxes.length === 0) {
      await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.createIsolatedWorld", {
        frameId: this.id,
        worldName: sandbox
      });
      maybeSandboxes = __privateGet(this, _realmStorage2).findRealms({
        browsingContextId: this.id,
        sandbox
      });
      (0, assert_js_1$7.assert)(maybeSandboxes.length !== 0);
    }
    return maybeSandboxes[0];
  }
  serializeToBidiValue(maxDepth = 0, addParentField = true) {
    return {
      context: __privateGet(this, _id2),
      url: this.url,
      userContext: this.userContext,
      children: maxDepth > 0 ? this.directChildren.map((c) => c.serializeToBidiValue(maxDepth - 1, false)) : null,
      ...addParentField ? { parent: __privateGet(this, _parentId) } : {}
    };
  }
  onTargetInfoChanged(params) {
    __privateSet(this, _url, params.targetInfo.url);
  }
  async navigate(url, wait) {
    try {
      new URL(url);
    } catch {
      throw new protocol_js_1$g.InvalidArgumentException(`Invalid URL: ${url}`);
    }
    await this.targetUnblockedOrThrow();
    const cdpNavigateResult = await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.navigate", {
      url,
      frameId: this.id
    });
    if (cdpNavigateResult.errorText) {
      throw new protocol_js_1$g.UnknownErrorException(cdpNavigateResult.errorText);
    }
    __privateMethod(this, _documentChanged, documentChanged_fn).call(this, cdpNavigateResult.loaderId);
    switch (wait) {
      case "none":
        break;
      case "interactive":
        if (cdpNavigateResult.loaderId === void 0) {
          await __privateGet(this, _navigation).withinDocument;
        } else {
          await __privateGet(this, _lifecycle).DOMContentLoaded;
        }
        break;
      case "complete":
        if (cdpNavigateResult.loaderId === void 0) {
          await __privateGet(this, _navigation).withinDocument;
        } else {
          await __privateGet(this, _lifecycle).load;
        }
        break;
    }
    return {
      navigation: cdpNavigateResult.loaderId ?? null,
      // Url can change due to redirect get the latest one.
      url: wait === "none" ? url : __privateGet(this, _url)
    };
  }
  async reload(ignoreCache, wait) {
    await this.targetUnblockedOrThrow();
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.reload", {
      ignoreCache
    });
    __privateMethod(this, _resetLifecycleIfFinished, resetLifecycleIfFinished_fn).call(this);
    switch (wait) {
      case "none":
        break;
      case "interactive":
        await __privateGet(this, _lifecycle).DOMContentLoaded;
        break;
      case "complete":
        await __privateGet(this, _lifecycle).load;
        break;
    }
    return {
      navigation: wait === "none" ? null : this.navigableId ?? null,
      url: this.url
    };
  }
  async setViewport(viewport, devicePixelRatio) {
    if (viewport === null && devicePixelRatio === null) {
      await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Emulation.clearDeviceMetricsOverride");
    } else {
      try {
        await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Emulation.setDeviceMetricsOverride", {
          width: viewport ? viewport.width : 0,
          height: viewport ? viewport.height : 0,
          deviceScaleFactor: devicePixelRatio ? devicePixelRatio : 0,
          mobile: false,
          dontSetVisibleSize: true
        });
      } catch (err) {
        if (err.message.startsWith(
          // https://crsrc.org/c/content/browser/devtools/protocol/emulation_handler.cc;l=257;drc=2f6eee84cf98d4227e7c41718dd71b82f26d90ff
          "Width and height values must be positive"
        )) {
          throw new protocol_js_1$g.UnsupportedOperationException("Provided viewport dimensions are not supported");
        }
        throw err;
      }
    }
  }
  async handleUserPrompt(params) {
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.handleJavaScriptDialog", {
      accept: params.accept ?? true,
      promptText: params.userText
    });
  }
  async activate() {
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.bringToFront");
  }
  async captureScreenshot(params) {
    if (!this.isTopLevelContext()) {
      throw new protocol_js_1$g.UnsupportedOperationException(`Non-top-level 'context' (${params.context}) is currently not supported`);
    }
    const formatParameters = getImageFormatParameters(params);
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.bringToFront");
    let captureBeyondViewport = false;
    let script;
    params.origin ?? (params.origin = "viewport");
    switch (params.origin) {
      case "document": {
        script = String(() => {
          const element = document.documentElement;
          return {
            x: 0,
            y: 0,
            width: element.scrollWidth,
            height: element.scrollHeight
          };
        });
        captureBeyondViewport = true;
        break;
      }
      case "viewport": {
        script = String(() => {
          const viewport = window.visualViewport;
          return {
            x: viewport.pageLeft,
            y: viewport.pageTop,
            width: viewport.width,
            height: viewport.height
          };
        });
        break;
      }
    }
    const realm = await this.getOrCreateSandbox(void 0);
    const originResult = await realm.callFunction(script, { type: "undefined" }, [], false, "none", {}, false);
    (0, assert_js_1$7.assert)(originResult.type === "success");
    const origin = deserializeDOMRect(originResult.result);
    (0, assert_js_1$7.assert)(origin);
    const rect = params.clip ? getIntersectionRect(await __privateMethod(this, _parseRect, parseRect_fn).call(this, params.clip), origin) : origin;
    if (rect.width === 0 || rect.height === 0) {
      throw new protocol_js_1$g.UnableToCaptureScreenException(`Unable to capture screenshot with zero dimensions: width=${rect.width}, height=${rect.height}`);
    }
    return await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.captureScreenshot", {
      clip: { ...rect, scale: 1 },
      ...formatParameters,
      captureBeyondViewport
    });
  }
  async print(params) {
    var _a3, _b3, _c3, _d3, _e4, _f3;
    const cdpParams = {};
    if (params.background !== void 0) {
      cdpParams.printBackground = params.background;
    }
    if (((_a3 = params.margin) == null ? void 0 : _a3.bottom) !== void 0) {
      cdpParams.marginBottom = (0, unitConversions_js_1.inchesFromCm)(params.margin.bottom);
    }
    if (((_b3 = params.margin) == null ? void 0 : _b3.left) !== void 0) {
      cdpParams.marginLeft = (0, unitConversions_js_1.inchesFromCm)(params.margin.left);
    }
    if (((_c3 = params.margin) == null ? void 0 : _c3.right) !== void 0) {
      cdpParams.marginRight = (0, unitConversions_js_1.inchesFromCm)(params.margin.right);
    }
    if (((_d3 = params.margin) == null ? void 0 : _d3.top) !== void 0) {
      cdpParams.marginTop = (0, unitConversions_js_1.inchesFromCm)(params.margin.top);
    }
    if (params.orientation !== void 0) {
      cdpParams.landscape = params.orientation === "landscape";
    }
    if (((_e4 = params.page) == null ? void 0 : _e4.height) !== void 0) {
      cdpParams.paperHeight = (0, unitConversions_js_1.inchesFromCm)(params.page.height);
    }
    if (((_f3 = params.page) == null ? void 0 : _f3.width) !== void 0) {
      cdpParams.paperWidth = (0, unitConversions_js_1.inchesFromCm)(params.page.width);
    }
    if (params.pageRanges !== void 0) {
      for (const range of params.pageRanges) {
        if (typeof range === "number") {
          continue;
        }
        const rangeParts = range.split("-");
        if (rangeParts.length < 1 || rangeParts.length > 2) {
          throw new protocol_js_1$g.InvalidArgumentException(`Invalid page range: ${range} is not a valid integer range.`);
        }
        if (rangeParts.length === 1) {
          void parseInteger(rangeParts[0] ?? "");
          continue;
        }
        let lowerBound;
        let upperBound;
        const [rangeLowerPart = "", rangeUpperPart = ""] = rangeParts;
        if (rangeLowerPart === "") {
          lowerBound = 1;
        } else {
          lowerBound = parseInteger(rangeLowerPart);
        }
        if (rangeUpperPart === "") {
          upperBound = Number.MAX_SAFE_INTEGER;
        } else {
          upperBound = parseInteger(rangeUpperPart);
        }
        if (lowerBound > upperBound) {
          throw new protocol_js_1$g.InvalidArgumentException(`Invalid page range: ${rangeLowerPart} > ${rangeUpperPart}`);
        }
      }
      cdpParams.pageRanges = params.pageRanges.join(",");
    }
    if (params.scale !== void 0) {
      cdpParams.scale = params.scale;
    }
    if (params.shrinkToFit !== void 0) {
      cdpParams.preferCSSPageSize = !params.shrinkToFit;
    }
    try {
      const result = await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.printToPDF", cdpParams);
      return {
        data: result.data
      };
    } catch (error) {
      if (error.message === "invalid print parameters: content area is empty") {
        throw new protocol_js_1$g.UnsupportedOperationException(error.message);
      }
      throw error;
    }
  }
  async close() {
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.close");
  }
  async traverseHistory(delta) {
    if (delta === 0) {
      return;
    }
    const history = await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.getNavigationHistory");
    const entry = history.entries[history.currentIndex + delta];
    if (!entry) {
      throw new protocol_js_1$g.NoSuchHistoryEntryException(`No history entry at delta ${delta}`);
    }
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.navigateToHistoryEntry", {
      entryId: entry.id
    });
  }
};
_id2 = new WeakMap();
_parentId = new WeakMap();
_children = new WeakMap();
_browsingContextStorage3 = new WeakMap();
_lifecycle = new WeakMap();
_navigation = new WeakMap();
_url = new WeakMap();
_eventManager2 = new WeakMap();
_realmStorage2 = new WeakMap();
_loaderId = new WeakMap();
_cdpTarget = new WeakMap();
_maybeDefaultRealm = new WeakMap();
_sharedIdWithFrame2 = new WeakMap();
_logger4 = new WeakMap();
_deleteAllChildren = new WeakSet();
deleteAllChildren_fn = function() {
  this.directChildren.map((child) => child.dispose());
};
_defaultRealm = new WeakSet();
defaultRealm_get = function() {
  (0, assert_js_1$7.assert)(__privateGet(this, _maybeDefaultRealm), `No default realm for browsing context ${__privateGet(this, _id2)}`);
  return __privateGet(this, _maybeDefaultRealm);
};
_initListeners = new WeakSet();
initListeners_fn = function() {
  __privateGet(this, _cdpTarget).cdpClient.on("Page.frameNavigated", (params) => {
    if (this.id !== params.frame.id) {
      return;
    }
    __privateSet(this, _url, params.frame.url + (params.frame.urlFragment ?? ""));
    __privateMethod(this, _deleteAllChildren, deleteAllChildren_fn).call(this);
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Page.navigatedWithinDocument", (params) => {
    if (this.id !== params.frameId) {
      return;
    }
    const timestamp = _BrowsingContextImpl.getTimestamp();
    __privateSet(this, _url, params.url);
    __privateGet(this, _navigation).withinDocument.resolve(params);
    __privateGet(this, _eventManager2).registerEvent({
      type: "event",
      method: protocol_js_1$g.ChromiumBidi.BrowsingContext.EventNames.FragmentNavigated,
      params: {
        context: this.id,
        navigation: null,
        timestamp,
        url: __privateGet(this, _url)
      }
    }, this.id);
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Page.frameStartedLoading", (params) => {
    if (this.id !== params.frameId) {
      return;
    }
    __privateGet(this, _eventManager2).registerEvent({
      type: "event",
      method: protocol_js_1$g.ChromiumBidi.BrowsingContext.EventNames.NavigationStarted,
      params: {
        context: this.id,
        navigation: null,
        timestamp: _BrowsingContextImpl.getTimestamp(),
        url: ""
      }
    }, this.id);
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Page.lifecycleEvent", (params) => {
    if (this.id !== params.frameId) {
      return;
    }
    if (params.name === "init") {
      __privateMethod(this, _documentChanged, documentChanged_fn).call(this, params.loaderId);
      return;
    }
    if (params.name === "commit") {
      __privateSet(this, _loaderId, params.loaderId);
      return;
    }
    if (params.loaderId !== __privateGet(this, _loaderId)) {
      return;
    }
    const timestamp = _BrowsingContextImpl.getTimestamp();
    switch (params.name) {
      case "DOMContentLoaded":
        __privateGet(this, _eventManager2).registerEvent({
          type: "event",
          method: protocol_js_1$g.ChromiumBidi.BrowsingContext.EventNames.DomContentLoaded,
          params: {
            context: this.id,
            navigation: __privateGet(this, _loaderId) ?? null,
            timestamp,
            url: __privateGet(this, _url)
          }
        }, this.id);
        __privateGet(this, _lifecycle).DOMContentLoaded.resolve(params);
        break;
      case "load":
        __privateGet(this, _eventManager2).registerEvent({
          type: "event",
          method: protocol_js_1$g.ChromiumBidi.BrowsingContext.EventNames.Load,
          params: {
            context: this.id,
            navigation: __privateGet(this, _loaderId) ?? null,
            timestamp,
            url: __privateGet(this, _url)
          }
        }, this.id);
        __privateGet(this, _lifecycle).load.resolve(params);
        break;
    }
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Runtime.executionContextCreated", (params) => {
    const { auxData, name, uniqueId, id } = params.context;
    if (!auxData || auxData.frameId !== this.id) {
      return;
    }
    let origin;
    let sandbox;
    switch (auxData.type) {
      case "isolated":
        sandbox = name;
        origin = __privateGet(this, _defaultRealm, defaultRealm_get).origin;
        break;
      case "default":
        origin = serializeOrigin(params.context.origin);
        break;
      default:
        return;
    }
    const realm = new WindowRealm_js_1$1.WindowRealm(this.id, __privateGet(this, _browsingContextStorage3), __privateGet(this, _cdpTarget).cdpClient, __privateGet(this, _eventManager2), id, __privateGet(this, _logger4), origin, uniqueId, __privateGet(this, _realmStorage2), sandbox, __privateGet(this, _sharedIdWithFrame2));
    if (auxData.isDefault) {
      __privateSet(this, _maybeDefaultRealm, realm);
      void Promise.all(__privateGet(this, _cdpTarget).getChannels().map((channel) => channel.startListenerFromWindow(realm, __privateGet(this, _eventManager2))));
    }
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Runtime.executionContextDestroyed", (params) => {
    __privateGet(this, _realmStorage2).deleteRealms({
      cdpSessionId: __privateGet(this, _cdpTarget).cdpSessionId,
      executionContextId: params.executionContextId
    });
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Runtime.executionContextsCleared", () => {
    __privateGet(this, _realmStorage2).deleteRealms({
      cdpSessionId: __privateGet(this, _cdpTarget).cdpSessionId
    });
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Page.javascriptDialogClosed", (params) => {
    const accepted = params.result;
    __privateGet(this, _eventManager2).registerEvent({
      type: "event",
      method: protocol_js_1$g.ChromiumBidi.BrowsingContext.EventNames.UserPromptClosed,
      params: {
        context: this.id,
        accepted,
        userText: accepted && params.userInput ? params.userInput : void 0
      }
    }, this.id);
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Page.javascriptDialogOpening", (params) => {
    __privateGet(this, _eventManager2).registerEvent({
      type: "event",
      method: protocol_js_1$g.ChromiumBidi.BrowsingContext.EventNames.UserPromptOpened,
      params: {
        context: this.id,
        type: params.type,
        message: params.message,
        // Don't set the value if empty string
        defaultValue: params.defaultPrompt || void 0
      }
    }, this.id);
  });
};
_documentChanged = new WeakSet();
documentChanged_fn = function(loaderId) {
  var _a3;
  if (loaderId === void 0 || __privateGet(this, _loaderId) === loaderId) {
    if (__privateGet(this, _navigation).withinDocument.isFinished) {
      __privateGet(this, _navigation).withinDocument = new Deferred_js_1$2.Deferred();
    } else {
      (_a3 = __privateGet(this, _logger4)) == null ? void 0 : _a3.call(this, _BrowsingContextImpl.LOGGER_PREFIX, "Document changed (navigatedWithinDocument)");
    }
    return;
  }
  __privateMethod(this, _resetLifecycleIfFinished, resetLifecycleIfFinished_fn).call(this);
  __privateSet(this, _loaderId, loaderId);
};
_resetLifecycleIfFinished = new WeakSet();
resetLifecycleIfFinished_fn = function() {
  var _a3, _b3;
  if (__privateGet(this, _lifecycle).DOMContentLoaded.isFinished) {
    __privateGet(this, _lifecycle).DOMContentLoaded = new Deferred_js_1$2.Deferred();
  } else {
    (_a3 = __privateGet(this, _logger4)) == null ? void 0 : _a3.call(this, _BrowsingContextImpl.LOGGER_PREFIX, "Document changed (DOMContentLoaded)");
  }
  if (__privateGet(this, _lifecycle).load.isFinished) {
    __privateGet(this, _lifecycle).load = new Deferred_js_1$2.Deferred();
  } else {
    (_b3 = __privateGet(this, _logger4)) == null ? void 0 : _b3.call(this, _BrowsingContextImpl.LOGGER_PREFIX, "Document changed (load)");
  }
};
_failLifecycleIfNotFinished = new WeakSet();
failLifecycleIfNotFinished_fn = function() {
  if (!__privateGet(this, _lifecycle).DOMContentLoaded.isFinished) {
    __privateGet(this, _lifecycle).DOMContentLoaded.reject(new protocol_js_1$g.UnknownErrorException("navigation canceled"));
  }
  if (!__privateGet(this, _lifecycle).load.isFinished) {
    __privateGet(this, _lifecycle).load.reject(new protocol_js_1$g.UnknownErrorException("navigation canceled"));
  }
};
_parseRect = new WeakSet();
parseRect_fn = async function(clip) {
  switch (clip.type) {
    case "box":
      return { x: clip.x, y: clip.y, width: clip.width, height: clip.height };
    case "element": {
      const sandbox = await this.getOrCreateSandbox(void 0);
      const result = await sandbox.callFunction(String((element) => {
        return element instanceof Element;
      }), { type: "undefined" }, [clip.element], false, "none", {});
      if (result.type === "exception") {
        throw new protocol_js_1$g.NoSuchElementException(`Element '${clip.element.sharedId}' was not found`);
      }
      (0, assert_js_1$7.assert)(result.result.type === "boolean");
      if (!result.result.value) {
        throw new protocol_js_1$g.NoSuchElementException(`Node '${clip.element.sharedId}' is not an Element`);
      }
      {
        const result2 = await sandbox.callFunction(String((element) => {
          const rect2 = element.getBoundingClientRect();
          return {
            x: rect2.x,
            y: rect2.y,
            height: rect2.height,
            width: rect2.width
          };
        }), { type: "undefined" }, [clip.element], false, "none", {});
        (0, assert_js_1$7.assert)(result2.type === "success");
        const rect = deserializeDOMRect(result2.result);
        if (!rect) {
          throw new protocol_js_1$g.UnableToCaptureScreenException(`Could not get bounding box for Element '${clip.element.sharedId}'`);
        }
        return rect;
      }
    }
  }
};
__publicField(_BrowsingContextImpl, "LOGGER_PREFIX", `${log_js_1$5.LogType.debug}:browsingContext`);
let BrowsingContextImpl = _BrowsingContextImpl;
BrowsingContextImpl$1.BrowsingContextImpl = BrowsingContextImpl;
function serializeOrigin(origin) {
  if (["://", ""].includes(origin)) {
    origin = "null";
  }
  return origin;
}
BrowsingContextImpl$1.serializeOrigin = serializeOrigin;
function getImageFormatParameters(params) {
  const { quality, type } = params.format ?? {
    type: "image/png"
  };
  switch (type) {
    case "image/png": {
      return { format: "png" };
    }
    case "image/jpeg": {
      return {
        format: "jpeg",
        ...quality === void 0 ? {} : { quality: Math.round(quality * 100) }
      };
    }
    case "image/webp": {
      return {
        format: "webp",
        ...quality === void 0 ? {} : { quality: Math.round(quality * 100) }
      };
    }
  }
  throw new protocol_js_1$g.InvalidArgumentException(`Image format '${type}' is not a supported format`);
}
function deserializeDOMRect(result) {
  var _a3, _b3, _c3, _d3;
  if (result.type !== "object" || result.value === void 0) {
    return;
  }
  const x2 = (_a3 = result.value.find(([key]) => {
    return key === "x";
  })) == null ? void 0 : _a3[1];
  const y2 = (_b3 = result.value.find(([key]) => {
    return key === "y";
  })) == null ? void 0 : _b3[1];
  const height = (_c3 = result.value.find(([key]) => {
    return key === "height";
  })) == null ? void 0 : _c3[1];
  const width = (_d3 = result.value.find(([key]) => {
    return key === "width";
  })) == null ? void 0 : _d3[1];
  if ((x2 == null ? void 0 : x2.type) !== "number" || (y2 == null ? void 0 : y2.type) !== "number" || (height == null ? void 0 : height.type) !== "number" || (width == null ? void 0 : width.type) !== "number") {
    return;
  }
  return {
    x: x2.value,
    y: y2.value,
    width: width.value,
    height: height.value
  };
}
function normalizeRect(box) {
  return {
    ...box.width < 0 ? {
      x: box.x + box.width,
      width: -box.width
    } : {
      x: box.x,
      width: box.width
    },
    ...box.height < 0 ? {
      y: box.y + box.height,
      height: -box.height
    } : {
      y: box.y,
      height: box.height
    }
  };
}
function getIntersectionRect(first, second) {
  first = normalizeRect(first);
  second = normalizeRect(second);
  const x2 = Math.max(first.x, second.x);
  const y2 = Math.max(first.y, second.y);
  return {
    x: x2,
    y: y2,
    width: Math.max(Math.min(first.x + first.width, second.x + second.width) - x2, 0),
    height: Math.max(Math.min(first.y + first.height, second.y + second.height) - y2, 0)
  };
}
function parseInteger(value) {
  value = value.trim();
  if (!/^[0-9]+$/.test(value)) {
    throw new protocol_js_1$g.InvalidArgumentException(`Invalid integer: ${value}`);
  }
  return parseInt(value);
}
var CdpTarget$1 = {};
var LogManager$1 = {};
var logHelper = {};
Object.defineProperty(logHelper, "__esModule", { value: true });
logHelper.getRemoteValuesText = logHelper.logMessageFormatter = void 0;
const assert_js_1$6 = assert$1;
const specifiers = ["%s", "%d", "%i", "%f", "%o", "%O", "%c"];
function isFormatSpecifier(str) {
  return specifiers.some((spec) => str.includes(spec));
}
function logMessageFormatter(args) {
  let output = "";
  const argFormat = args[0].value.toString();
  const argValues = args.slice(1, void 0);
  const tokens = argFormat.split(new RegExp(specifiers.map((spec) => `(${spec})`).join("|"), "g"));
  for (const token of tokens) {
    if (token === void 0 || token === "") {
      continue;
    }
    if (isFormatSpecifier(token)) {
      const arg = argValues.shift();
      (0, assert_js_1$6.assert)(arg, `Less value is provided: "${getRemoteValuesText(args, false)}"`);
      if (token === "%s") {
        output += stringFromArg(arg);
      } else if (token === "%d" || token === "%i") {
        if (arg.type === "bigint" || arg.type === "number" || arg.type === "string") {
          output += parseInt(arg.value.toString(), 10);
        } else {
          output += "NaN";
        }
      } else if (token === "%f") {
        if (arg.type === "bigint" || arg.type === "number" || arg.type === "string") {
          output += parseFloat(arg.value.toString());
        } else {
          output += "NaN";
        }
      } else {
        output += toJson(arg);
      }
    } else {
      output += token;
    }
  }
  if (argValues.length > 0) {
    throw new Error(`More value is provided: "${getRemoteValuesText(args, false)}"`);
  }
  return output;
}
logHelper.logMessageFormatter = logMessageFormatter;
function toJson(arg) {
  var _a3;
  if (arg.type !== "array" && arg.type !== "bigint" && arg.type !== "date" && arg.type !== "number" && arg.type !== "object" && arg.type !== "string") {
    return stringFromArg(arg);
  }
  if (arg.type === "bigint") {
    return `${arg.value.toString()}n`;
  }
  if (arg.type === "number") {
    return arg.value.toString();
  }
  if (["date", "string"].includes(arg.type)) {
    return JSON.stringify(arg.value);
  }
  if (arg.type === "object") {
    return `{${arg.value.map((pair) => {
      return `${JSON.stringify(pair[0])}:${toJson(pair[1])}`;
    }).join(",")}}`;
  }
  if (arg.type === "array") {
    return `[${((_a3 = arg.value) == null ? void 0 : _a3.map((val) => toJson(val)).join(",")) ?? ""}]`;
  }
  throw Error(`Invalid value type: ${arg}`);
}
function stringFromArg(arg) {
  var _a3, _b3, _c3, _d3;
  if (!Object.hasOwn(arg, "value")) {
    return arg.type;
  }
  switch (arg.type) {
    case "string":
    case "number":
    case "boolean":
    case "bigint":
      return String(arg.value);
    case "regexp":
      return `/${arg.value.pattern}/${arg.value.flags ?? ""}`;
    case "date":
      return new Date(arg.value).toString();
    case "object":
      return `Object(${((_a3 = arg.value) == null ? void 0 : _a3.length) ?? ""})`;
    case "array":
      return `Array(${((_b3 = arg.value) == null ? void 0 : _b3.length) ?? ""})`;
    case "map":
      return `Map(${(_c3 = arg.value) == null ? void 0 : _c3.length})`;
    case "set":
      return `Set(${(_d3 = arg.value) == null ? void 0 : _d3.length})`;
    default:
      return arg.type;
  }
}
function getRemoteValuesText(args, formatText) {
  const arg = args[0];
  if (!arg) {
    return "";
  }
  if (arg.type === "string" && isFormatSpecifier(arg.value.toString()) && formatText) {
    return logMessageFormatter(args);
  }
  return args.map((arg2) => {
    return stringFromArg(arg2);
  }).join(" ");
}
logHelper.getRemoteValuesText = getRemoteValuesText;
Object.defineProperty(LogManager$1, "__esModule", { value: true });
LogManager$1.LogManager = void 0;
const protocol_js_1$f = protocol;
const log_js_1$4 = log;
const logHelper_js_1 = logHelper;
function getBidiStackTrace(cdpStackTrace) {
  const stackFrames = cdpStackTrace == null ? void 0 : cdpStackTrace.callFrames.map((callFrame) => {
    return {
      columnNumber: callFrame.columnNumber,
      functionName: callFrame.functionName,
      lineNumber: callFrame.lineNumber,
      url: callFrame.url
    };
  });
  return stackFrames ? { callFrames: stackFrames } : void 0;
}
function getLogLevel(consoleApiType) {
  if (["error", "assert"].includes(consoleApiType)) {
    return "error";
  }
  if (["debug", "trace"].includes(consoleApiType)) {
    return "debug";
  }
  if (["warn", "warning"].includes(consoleApiType)) {
    return "warn";
  }
  return "info";
}
const _LogManager = class _LogManager {
  constructor(cdpTarget, realmStorage, eventManager, logger) {
    __privateAdd(this, _initializeEntryAddedEventListener);
    __privateAdd(this, _eventManager3, void 0);
    __privateAdd(this, _realmStorage3, void 0);
    __privateAdd(this, _cdpTarget2, void 0);
    __privateAdd(this, _logger5, void 0);
    __privateSet(this, _cdpTarget2, cdpTarget);
    __privateSet(this, _realmStorage3, realmStorage);
    __privateSet(this, _eventManager3, eventManager);
    __privateSet(this, _logger5, logger);
  }
  static create(cdpTarget, realmStorage, eventManager, logger) {
    var _a3;
    const logManager = new _LogManager(cdpTarget, realmStorage, eventManager, logger);
    __privateMethod(_a3 = logManager, _initializeEntryAddedEventListener, initializeEntryAddedEventListener_fn).call(_a3);
    return logManager;
  }
};
_eventManager3 = new WeakMap();
_realmStorage3 = new WeakMap();
_cdpTarget2 = new WeakMap();
_logger5 = new WeakMap();
_initializeEntryAddedEventListener = new WeakSet();
initializeEntryAddedEventListener_fn = function() {
  __privateGet(this, _cdpTarget2).cdpClient.on("Runtime.consoleAPICalled", (params) => {
    var _a3;
    const realm = __privateGet(this, _realmStorage3).findRealm({
      cdpSessionId: __privateGet(this, _cdpTarget2).cdpSessionId,
      executionContextId: params.executionContextId
    });
    if (realm === void 0) {
      (_a3 = __privateGet(this, _logger5)) == null ? void 0 : _a3.call(this, log_js_1$4.LogType.cdp, params);
      return;
    }
    const argsPromise = realm === void 0 ? Promise.resolve(params.args) : (
      // Properly serialize arguments if possible.
      Promise.all(params.args.map((arg) => {
        return realm.serializeCdpObject(
          arg,
          "none"
          /* Script.ResultOwnership.None */
        );
      }))
    );
    for (const browsingContext of realm.associatedBrowsingContexts) {
      __privateGet(this, _eventManager3).registerPromiseEvent(argsPromise.then((args) => ({
        kind: "success",
        value: {
          type: "event",
          method: protocol_js_1$f.ChromiumBidi.Log.EventNames.LogEntryAdded,
          params: {
            level: getLogLevel(params.type),
            source: realm.source,
            text: (0, logHelper_js_1.getRemoteValuesText)(args, true),
            timestamp: Math.round(params.timestamp),
            stackTrace: getBidiStackTrace(params.stackTrace),
            type: "console",
            // Console method is `warn`, not `warning`.
            method: params.type === "warning" ? "warn" : params.type,
            args
          }
        }
      })), browsingContext.id, protocol_js_1$f.ChromiumBidi.Log.EventNames.LogEntryAdded);
    }
  });
  __privateGet(this, _cdpTarget2).cdpClient.on("Runtime.exceptionThrown", (params) => {
    var _a3, _b3;
    const realm = __privateGet(this, _realmStorage3).findRealm({
      cdpSessionId: __privateGet(this, _cdpTarget2).cdpSessionId,
      executionContextId: params.exceptionDetails.executionContextId
    });
    if (realm === void 0) {
      (_a3 = __privateGet(this, _logger5)) == null ? void 0 : _a3.call(this, log_js_1$4.LogType.cdp, params);
      return;
    }
    for (const browsingContext of realm.associatedBrowsingContexts) {
      __privateGet(this, _eventManager3).registerPromiseEvent(__privateMethod(_b3 = _LogManager, _getExceptionText, getExceptionText_fn).call(_b3, params, realm).then((text) => ({
        kind: "success",
        value: {
          type: "event",
          method: protocol_js_1$f.ChromiumBidi.Log.EventNames.LogEntryAdded,
          params: {
            level: "error",
            source: realm.source,
            text,
            timestamp: Math.round(params.timestamp),
            stackTrace: getBidiStackTrace(params.exceptionDetails.stackTrace),
            type: "javascript"
          }
        }
      })), browsingContext.id, protocol_js_1$f.ChromiumBidi.Log.EventNames.LogEntryAdded);
    }
  });
};
_getExceptionText = new WeakSet();
getExceptionText_fn = async function(params, realm) {
  if (!params.exceptionDetails.exception) {
    return params.exceptionDetails.text;
  }
  if (realm === void 0) {
    return JSON.stringify(params.exceptionDetails.exception);
  }
  return await realm.stringifyObject(params.exceptionDetails.exception);
};
/**
 * Try the best to get the exception text.
 */
__privateAdd(_LogManager, _getExceptionText);
let LogManager = _LogManager;
LogManager$1.LogManager = LogManager;
var NetworkManager$1 = {};
var NetworkRequest$1 = {};
var NetworkUtils = {};
Object.defineProperty(NetworkUtils, "__esModule", { value: true });
NetworkUtils.bidiToCdpCookie = NetworkUtils.cdpToBiDiCookie = NetworkUtils.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction = NetworkUtils.cdpFetchHeadersFromBidiNetworkHeaders = NetworkUtils.bidiNetworkHeadersFromCdpFetchHeaders = NetworkUtils.cdpNetworkHeadersFromBidiNetworkHeaders = NetworkUtils.bidiNetworkHeadersFromCdpNetworkHeaders = NetworkUtils.computeHeadersSize = void 0;
const ErrorResponse_1 = ErrorResponse;
function computeHeadersSize(headers) {
  const requestHeaders = headers.reduce((acc, header) => {
    return `${acc}${header.name}: ${header.value.value}\r
`;
  }, "");
  return new TextEncoder().encode(requestHeaders).length;
}
NetworkUtils.computeHeadersSize = computeHeadersSize;
function bidiNetworkHeadersFromCdpNetworkHeaders(headers) {
  if (!headers) {
    return [];
  }
  return Object.entries(headers).map(([name, value]) => ({
    name,
    value: {
      type: "string",
      value
    }
  }));
}
NetworkUtils.bidiNetworkHeadersFromCdpNetworkHeaders = bidiNetworkHeadersFromCdpNetworkHeaders;
function cdpNetworkHeadersFromBidiNetworkHeaders(headers) {
  if (headers === void 0) {
    return void 0;
  }
  return headers.reduce((result, header) => {
    result[header.name] = header.value.value;
    return result;
  }, {});
}
NetworkUtils.cdpNetworkHeadersFromBidiNetworkHeaders = cdpNetworkHeadersFromBidiNetworkHeaders;
function bidiNetworkHeadersFromCdpFetchHeaders(headers) {
  if (!headers) {
    return [];
  }
  return headers.map(({ name, value }) => ({
    name,
    value: {
      type: "string",
      value
    }
  }));
}
NetworkUtils.bidiNetworkHeadersFromCdpFetchHeaders = bidiNetworkHeadersFromCdpFetchHeaders;
function cdpFetchHeadersFromBidiNetworkHeaders(headers) {
  if (headers === void 0) {
    return void 0;
  }
  return headers.map(({ name, value }) => ({
    name,
    value: value.value
  }));
}
NetworkUtils.cdpFetchHeadersFromBidiNetworkHeaders = cdpFetchHeadersFromBidiNetworkHeaders;
function cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction(action) {
  switch (action) {
    case "default":
      return "Default";
    case "cancel":
      return "CancelAuth";
    case "provideCredentials":
      return "ProvideCredentials";
  }
}
NetworkUtils.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction = cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction;
function cdpToBiDiCookie(cookie) {
  const result = {
    name: cookie.name,
    value: { type: "string", value: cookie.value },
    domain: cookie.domain,
    path: cookie.path,
    size: cookie.size,
    httpOnly: cookie.httpOnly,
    secure: cookie.secure,
    sameSite: cookie.sameSite === void 0 ? "none" : sameSiteCdpToBiDi(cookie.sameSite),
    ...cookie.expires >= 0 ? { expiry: cookie.expires } : void 0
  };
  result[`goog:session`] = cookie.session;
  result[`goog:priority`] = cookie.priority;
  result[`goog:sameParty`] = cookie.sameParty;
  result[`goog:sourceScheme`] = cookie.sourceScheme;
  result[`goog:sourcePort`] = cookie.sourcePort;
  if (cookie.partitionKey !== void 0) {
    result[`goog:partitionKey`] = cookie.partitionKey;
  }
  if (cookie.partitionKeyOpaque !== void 0) {
    result[`goog:partitionKeyOpaque`] = cookie.partitionKeyOpaque;
  }
  return result;
}
NetworkUtils.cdpToBiDiCookie = cdpToBiDiCookie;
function bidiToCdpCookie(params, partitionKey) {
  if (params.cookie.value.type !== "string") {
    throw new ErrorResponse_1.UnsupportedOperationException("Only string cookie values are supported");
  }
  const deserializedValue = params.cookie.value.value;
  const result = {
    name: params.cookie.name,
    value: deserializedValue,
    domain: params.cookie.domain,
    path: params.cookie.path ?? "/",
    secure: params.cookie.secure ?? false,
    httpOnly: params.cookie.httpOnly ?? false,
    // CDP's `partitionKey` is the BiDi's `partition.sourceOrigin`.
    ...partitionKey.sourceOrigin !== void 0 && {
      partitionKey: partitionKey.sourceOrigin
    },
    ...params.cookie.expiry !== void 0 && {
      expires: params.cookie.expiry
    },
    ...params.cookie.sameSite !== void 0 && {
      sameSite: sameSiteBiDiToCdp(params.cookie.sameSite)
    }
  };
  if (params.cookie[`goog:url`] !== void 0) {
    result.url = params.cookie[`goog:url`];
  }
  if (params.cookie[`goog:priority`] !== void 0) {
    result.priority = params.cookie[`goog:priority`];
  }
  if (params.cookie[`goog:sameParty`] !== void 0) {
    result.sameParty = params.cookie[`goog:sameParty`];
  }
  if (params.cookie[`goog:sourceScheme`] !== void 0) {
    result.sourceScheme = params.cookie[`goog:sourceScheme`];
  }
  if (params.cookie[`goog:sourcePort`] !== void 0) {
    result.sourcePort = params.cookie[`goog:sourcePort`];
  }
  return result;
}
NetworkUtils.bidiToCdpCookie = bidiToCdpCookie;
function sameSiteCdpToBiDi(sameSite) {
  switch (sameSite) {
    case "Strict":
      return "strict";
    case "None":
      return "none";
    case "Lax":
      return "lax";
    default:
      return "lax";
  }
}
function sameSiteBiDiToCdp(sameSite) {
  switch (sameSite) {
    case "strict":
      return "Strict";
    case "lax":
      return "Lax";
    case "none":
      return "None";
  }
  throw new ErrorResponse_1.InvalidArgumentException(`Unknown 'sameSite' value ${sameSite}`);
}
Object.defineProperty(NetworkRequest$1, "__esModule", { value: true });
NetworkRequest$1.NetworkRequest = void 0;
const protocol_js_1$e = protocol;
const assert_js_1$5 = assert$1;
const Deferred_js_1$1 = Deferred$1;
const NetworkUtils_js_1$2 = NetworkUtils;
const _NetworkRequest = class _NetworkRequest {
  constructor(requestId, eventManager, networkStorage, cdpTarget, redirectCount = 0) {
    __privateAdd(this, _emitEventsIfReady);
    __privateAdd(this, _context);
    __privateAdd(this, _getBaseEventParams);
    __privateAdd(this, _getNavigationId);
    __privateAdd(this, _getRequestData);
    // TODO: implement.
    __privateAdd(this, _getTimings);
    __privateAdd(this, _queueBeforeRequestSentEvent);
    __privateAdd(this, _getBeforeRequestEvent);
    __privateAdd(this, _queueResponseStartedEvent);
    __privateAdd(this, _getResponseStartedEvent);
    __privateAdd(this, _queueResponseCompletedEvent);
    __privateAdd(this, _getResponseReceivedEvent);
    __privateAdd(this, _isIgnoredEvent);
    /**
     * Each network request has an associated request id, which is a string
     * uniquely identifying that request.
     *
     * The identifier for a request resulting from a redirect matches that of the
     * request that initiated it.
     */
    __privateAdd(this, _requestId, void 0);
    // TODO: Handle auth required?
    /**
     * Indicates the network intercept phase, if the request is currently blocked.
     * Undefined necessarily implies that the request is not blocked.
     */
    __privateAdd(this, _interceptPhase, void 0);
    __privateAdd(this, _servedFromCache, false);
    __privateAdd(this, _redirectCount, void 0);
    __privateAdd(this, _eventManager4, void 0);
    __privateAdd(this, _networkStorage, void 0);
    __privateAdd(this, _request, {});
    __privateAdd(this, _response, {});
    __privateAdd(this, _beforeRequestSentDeferred, new Deferred_js_1$1.Deferred());
    __privateAdd(this, _responseStartedDeferred, new Deferred_js_1$1.Deferred());
    __privateAdd(this, _responseCompletedDeferred, new Deferred_js_1$1.Deferred());
    __privateAdd(this, _cdpTarget3, void 0);
    __privateSet(this, _requestId, requestId);
    __privateSet(this, _eventManager4, eventManager);
    __privateSet(this, _networkStorage, networkStorage);
    __privateSet(this, _cdpTarget3, cdpTarget);
    __privateSet(this, _redirectCount, redirectCount);
  }
  get requestId() {
    return __privateGet(this, _requestId);
  }
  get url() {
    var _a3, _b3;
    return ((_a3 = __privateGet(this, _response).info) == null ? void 0 : _a3.url) ?? ((_b3 = __privateGet(this, _request).info) == null ? void 0 : _b3.request.url);
  }
  get redirectCount() {
    return __privateGet(this, _redirectCount);
  }
  get cdpTarget() {
    return __privateGet(this, _cdpTarget3);
  }
  isRedirecting() {
    return Boolean(__privateGet(this, _request).info);
  }
  handleRedirect(event) {
    __privateMethod(this, _queueResponseStartedEvent, queueResponseStartedEvent_fn).call(this);
    __privateMethod(this, _queueResponseCompletedEvent, queueResponseCompletedEvent_fn).call(this);
    __privateGet(this, _response).hasExtraInfo = event.redirectHasExtraInfo;
    __privateGet(this, _response).info = event.redirectResponse;
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this, true);
  }
  onRequestWillBeSentEvent(event) {
    __privateGet(this, _request).info = event;
    __privateMethod(this, _queueBeforeRequestSentEvent, queueBeforeRequestSentEvent_fn).call(this);
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  onRequestWillBeSentExtraInfoEvent(event) {
    __privateGet(this, _request).extraInfo = event;
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  onResponseReceivedExtraInfoEvent(event) {
    __privateGet(this, _response).extraInfo = event;
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  onResponseReceivedEvent(event) {
    __privateGet(this, _response).hasExtraInfo = event.hasExtraInfo;
    __privateGet(this, _response).info = event.response;
    __privateMethod(this, _queueResponseStartedEvent, queueResponseStartedEvent_fn).call(this);
    __privateMethod(this, _queueResponseCompletedEvent, queueResponseCompletedEvent_fn).call(this);
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  onServedFromCache() {
    __privateSet(this, _servedFromCache, true);
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  onLoadingFailedEvent(event) {
    __privateGet(this, _beforeRequestSentDeferred).resolve({
      kind: "success",
      value: void 0
    });
    __privateGet(this, _responseStartedDeferred).resolve({
      kind: "error",
      error: new Error("Network event loading failed")
    });
    __privateGet(this, _responseCompletedDeferred).resolve({
      kind: "error",
      error: new Error("Network event loading failed")
    });
    __privateGet(this, _eventManager4).registerEvent({
      type: "event",
      method: protocol_js_1$e.ChromiumBidi.Network.EventNames.FetchError,
      params: {
        ...__privateMethod(this, _getBaseEventParams, getBaseEventParams_fn).call(this),
        errorText: event.errorText
      }
    }, __privateGet(this, _context, context_get));
  }
  /** Fired whenever a network request interception is hit. */
  onRequestPaused(params) {
    if (__privateMethod(this, _isIgnoredEvent, isIgnoredEvent_fn).call(this)) {
      void this.continueRequest(params.requestId).catch(() => {
      });
      return;
    }
    let phase;
    if (params.responseErrorReason === void 0 && params.responseStatusCode === void 0) {
      phase = "beforeRequestSent";
    } else if (params.responseStatusCode === 401 && params.responseStatusText === "Unauthorized") {
      phase = "authRequired";
    } else {
      phase = "responseStarted";
    }
    const headers = (0, NetworkUtils_js_1$2.bidiNetworkHeadersFromCdpFetchHeaders)(
      // TODO: Use params.request.headers if request?
      params.responseHeaders
    );
    __privateGet(this, _networkStorage).addBlockedRequest(this.requestId, {
      request: params.requestId,
      // intercept request id
      phase,
      // TODO: Finish populating response / ResponseData.
      response: {
        url: params.request.url,
        // TODO: populate.
        protocol: "",
        status: params.responseStatusCode ?? 0,
        statusText: params.responseStatusText ?? "",
        // TODO: populate.
        fromCache: false,
        headers,
        // TODO: populate.
        mimeType: "",
        // TODO: populate.
        bytesReceived: 0,
        headersSize: (0, NetworkUtils_js_1$2.computeHeadersSize)(headers),
        // TODO: consider removing from spec.
        bodySize: 0,
        // TODO: consider removing from spec.
        content: {
          size: 0
        },
        // TODO: populate.
        authChallenge: void 0
      }
    });
    __privateSet(this, _interceptPhase, phase);
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-failRequest */
  async failRequest(networkId, errorReason) {
    await __privateGet(this, _cdpTarget3).cdpClient.sendCommand("Fetch.failRequest", {
      requestId: networkId,
      errorReason
    });
    __privateSet(this, _interceptPhase, void 0);
  }
  /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueRequest */
  async continueRequest(cdpFetchRequestId, url, method, headers) {
    await __privateGet(this, _cdpTarget3).cdpClient.sendCommand("Fetch.continueRequest", {
      requestId: cdpFetchRequestId,
      url,
      method,
      headers
      // TODO: Set?
      // postData:,
      // interceptResponse:,
    });
    __privateSet(this, _interceptPhase, void 0);
  }
  /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueResponse */
  async continueResponse(cdpFetchRequestId, responseCode, responsePhrase, responseHeaders) {
    await __privateGet(this, _cdpTarget3).cdpClient.sendCommand("Fetch.continueResponse", {
      requestId: cdpFetchRequestId,
      responseCode,
      responsePhrase,
      responseHeaders
    });
    __privateSet(this, _interceptPhase, void 0);
  }
  /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueWithAuth */
  async continueWithAuth(cdpFetchRequestId, response, username, password) {
    await __privateGet(this, _cdpTarget3).cdpClient.sendCommand("Fetch.continueWithAuth", {
      requestId: cdpFetchRequestId,
      authChallengeResponse: {
        response,
        username,
        password
      }
    });
    __privateSet(this, _interceptPhase, void 0);
  }
  /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-provideResponse */
  async provideResponse(cdpFetchRequestId, responseCode, responsePhrase, responseHeaders, body) {
    await __privateGet(this, _cdpTarget3).cdpClient.sendCommand("Fetch.fulfillRequest", {
      requestId: cdpFetchRequestId,
      responseCode,
      responsePhrase,
      responseHeaders,
      ...body ? { body: btoa(body) } : {}
      // TODO: Double-check if btoa usage is correct.
    });
    __privateSet(this, _interceptPhase, void 0);
  }
  dispose() {
    const result = {
      kind: "error",
      error: new Error("Network processor detached")
    };
    __privateGet(this, _beforeRequestSentDeferred).resolve(result);
    __privateGet(this, _responseStartedDeferred).resolve(result);
    __privateGet(this, _responseCompletedDeferred).resolve(result);
  }
  /** Returns the HTTP status code associated with this request if any. */
  get statusCode() {
    var _a3, _b3;
    return ((_a3 = __privateGet(this, _response).info) == null ? void 0 : _a3.status) ?? ((_b3 = __privateGet(this, _response).extraInfo) == null ? void 0 : _b3.statusCode) ?? -1;
  }
};
_unknown = new WeakMap();
_requestId = new WeakMap();
_interceptPhase = new WeakMap();
_servedFromCache = new WeakMap();
_redirectCount = new WeakMap();
_eventManager4 = new WeakMap();
_networkStorage = new WeakMap();
_request = new WeakMap();
_response = new WeakMap();
_beforeRequestSentDeferred = new WeakMap();
_responseStartedDeferred = new WeakMap();
_responseCompletedDeferred = new WeakMap();
_cdpTarget3 = new WeakMap();
_emitEventsIfReady = new WeakSet();
emitEventsIfReady_fn = function(wasRedirected = false) {
  const requestExtraInfoCompleted = (
    // Flush redirects
    wasRedirected || Boolean(__privateGet(this, _request).extraInfo) || // Requests from cache don't have extra info
    __privateGet(this, _servedFromCache) || // Sometimes there is no extra info and the response
    // is the only place we can find out
    Boolean(__privateGet(this, _response).info && !__privateGet(this, _response).hasExtraInfo) || __privateGet(this, _interceptPhase) === "beforeRequestSent"
  );
  if (__privateGet(this, _request).info && requestExtraInfoCompleted) {
    __privateGet(this, _beforeRequestSentDeferred).resolve({
      kind: "success",
      value: void 0
    });
  }
  const responseExtraInfoCompleted = Boolean(__privateGet(this, _response).extraInfo) || // Response from cache don't have extra info
  __privateGet(this, _servedFromCache) || // Don't expect extra info if the flag is false
  Boolean(__privateGet(this, _response).info && !__privateGet(this, _response).hasExtraInfo) || __privateGet(this, _interceptPhase) === "responseStarted";
  if (__privateGet(this, _response).info && responseExtraInfoCompleted) {
    __privateGet(this, _responseStartedDeferred).resolve({
      kind: "success",
      value: void 0
    });
    __privateGet(this, _responseCompletedDeferred).resolve({
      kind: "success",
      value: void 0
    });
  }
};
_context = new WeakSet();
context_get = function() {
  var _a3;
  return ((_a3 = __privateGet(this, _request).info) == null ? void 0 : _a3.frameId) ?? null;
};
_getBaseEventParams = new WeakSet();
getBaseEventParams_fn = function(phase) {
  var _a3;
  const isBlocked = phase !== void 0 && phase === __privateGet(this, _interceptPhase);
  const intercepts = __privateGet(this, _networkStorage).getNetworkIntercepts(__privateGet(this, _requestId), phase);
  return {
    isBlocked,
    context: __privateGet(this, _context, context_get),
    navigation: __privateMethod(this, _getNavigationId, getNavigationId_fn).call(this),
    redirectCount: __privateGet(this, _redirectCount),
    request: __privateMethod(this, _getRequestData, getRequestData_fn).call(this),
    // Timestamp should be in milliseconds, while CDP provides it in seconds.
    timestamp: Math.round((((_a3 = __privateGet(this, _request).info) == null ? void 0 : _a3.wallTime) ?? 0) * 1e3),
    // XXX: we should return correct types from the function.
    intercepts: isBlocked ? intercepts : void 0
  };
};
_getNavigationId = new WeakSet();
getNavigationId_fn = function() {
  if (!__privateGet(this, _request).info || !__privateGet(this, _request).info.loaderId || // When we navigate all CDP network events have `loaderId`
  // CDP's `loaderId` and `requestId` match when
  // that request triggered the loading
  __privateGet(this, _request).info.loaderId !== __privateGet(this, _request).info.requestId) {
    return null;
  }
  return __privateGet(this, _request).info.loaderId;
};
_getRequestData = new WeakSet();
getRequestData_fn = function() {
  var _a3, _b3, _c3, _d3, _e4;
  const cookies = __privateGet(this, _request).extraInfo ? __privateMethod(_a3 = _NetworkRequest, _getCookies, getCookies_fn).call(_a3, __privateGet(this, _request).extraInfo.associatedCookies) : [];
  const headers = (0, NetworkUtils_js_1$2.bidiNetworkHeadersFromCdpNetworkHeaders)((_b3 = __privateGet(this, _request).info) == null ? void 0 : _b3.request.headers);
  return {
    request: ((_c3 = __privateGet(this, _request).info) == null ? void 0 : _c3.requestId) ?? __privateGet(_NetworkRequest, _unknown),
    url: ((_d3 = __privateGet(this, _request).info) == null ? void 0 : _d3.request.url) ?? __privateGet(_NetworkRequest, _unknown),
    method: ((_e4 = __privateGet(this, _request).info) == null ? void 0 : _e4.request.method) ?? __privateGet(_NetworkRequest, _unknown),
    headers,
    cookies,
    headersSize: (0, NetworkUtils_js_1$2.computeHeadersSize)(headers),
    // TODO: implement.
    bodySize: 0,
    timings: __privateMethod(this, _getTimings, getTimings_fn).call(this)
  };
};
_getTimings = new WeakSet();
getTimings_fn = function() {
  return {
    timeOrigin: 0,
    requestTime: 0,
    redirectStart: 0,
    redirectEnd: 0,
    fetchStart: 0,
    dnsStart: 0,
    dnsEnd: 0,
    connectStart: 0,
    connectEnd: 0,
    tlsStart: 0,
    requestStart: 0,
    responseStart: 0,
    responseEnd: 0
  };
};
_queueBeforeRequestSentEvent = new WeakSet();
queueBeforeRequestSentEvent_fn = function() {
  if (__privateMethod(this, _isIgnoredEvent, isIgnoredEvent_fn).call(this)) {
    return;
  }
  __privateGet(this, _eventManager4).registerPromiseEvent(__privateGet(this, _beforeRequestSentDeferred).then((result) => {
    if (result.kind === "success") {
      try {
        return {
          kind: "success",
          value: Object.assign(__privateMethod(this, _getBeforeRequestEvent, getBeforeRequestEvent_fn).call(this), {
            type: "event"
          })
        };
      } catch (error) {
        return {
          kind: "error",
          error: error instanceof Error ? error : new Error("Unknown")
        };
      }
    }
    return result;
  }), __privateGet(this, _context, context_get), protocol_js_1$e.ChromiumBidi.Network.EventNames.BeforeRequestSent);
};
_getBeforeRequestEvent = new WeakSet();
getBeforeRequestEvent_fn = function() {
  var _a3;
  (0, assert_js_1$5.assert)(__privateGet(this, _request).info, "RequestWillBeSentEvent is not set");
  return {
    method: protocol_js_1$e.ChromiumBidi.Network.EventNames.BeforeRequestSent,
    params: {
      ...__privateMethod(this, _getBaseEventParams, getBaseEventParams_fn).call(this, "beforeRequestSent"),
      initiator: {
        type: __privateMethod(_a3 = _NetworkRequest, _getInitiatorType, getInitiatorType_fn).call(_a3, __privateGet(this, _request).info.initiator.type)
      }
    }
  };
};
_queueResponseStartedEvent = new WeakSet();
queueResponseStartedEvent_fn = function() {
  if (__privateMethod(this, _isIgnoredEvent, isIgnoredEvent_fn).call(this)) {
    return;
  }
  __privateGet(this, _eventManager4).registerPromiseEvent(__privateGet(this, _responseStartedDeferred).then((result) => {
    if (result.kind === "success") {
      try {
        return {
          kind: "success",
          value: Object.assign(__privateMethod(this, _getResponseStartedEvent, getResponseStartedEvent_fn).call(this), {
            type: "event"
          })
        };
      } catch (error) {
        return {
          kind: "error",
          error: error instanceof Error ? error : new Error("Unknown")
        };
      }
    }
    return result;
  }), __privateGet(this, _context, context_get), protocol_js_1$e.ChromiumBidi.Network.EventNames.ResponseStarted);
};
_getResponseStartedEvent = new WeakSet();
getResponseStartedEvent_fn = function() {
  (0, assert_js_1$5.assert)(__privateGet(this, _request).info, "RequestWillBeSentEvent is not set");
  (0, assert_js_1$5.assert)(__privateGet(this, _response).info, "ResponseReceivedEvent is not set");
  if (__privateGet(this, _response).info.fromDiskCache) {
    __privateGet(this, _response).extraInfo = void 0;
  }
  const headers = (0, NetworkUtils_js_1$2.bidiNetworkHeadersFromCdpNetworkHeaders)(__privateGet(this, _response).info.headers);
  return {
    method: protocol_js_1$e.ChromiumBidi.Network.EventNames.ResponseStarted,
    params: {
      ...__privateMethod(this, _getBaseEventParams, getBaseEventParams_fn).call(this),
      response: {
        url: __privateGet(this, _response).info.url ?? __privateGet(_NetworkRequest, _unknown),
        protocol: __privateGet(this, _response).info.protocol ?? "",
        status: this.statusCode,
        statusText: __privateGet(this, _response).info.statusText,
        fromCache: __privateGet(this, _response).info.fromDiskCache || __privateGet(this, _response).info.fromPrefetchCache || __privateGet(this, _servedFromCache),
        headers,
        mimeType: __privateGet(this, _response).info.mimeType,
        bytesReceived: __privateGet(this, _response).info.encodedDataLength,
        headersSize: (0, NetworkUtils_js_1$2.computeHeadersSize)(headers),
        // TODO: consider removing from spec.
        bodySize: 0,
        content: {
          // TODO: consider removing from spec.
          size: 0
        }
      }
    }
  };
};
_queueResponseCompletedEvent = new WeakSet();
queueResponseCompletedEvent_fn = function() {
  if (__privateMethod(this, _isIgnoredEvent, isIgnoredEvent_fn).call(this)) {
    return;
  }
  __privateGet(this, _eventManager4).registerPromiseEvent(__privateGet(this, _responseCompletedDeferred).then((result) => {
    if (result.kind === "success") {
      try {
        return {
          kind: "success",
          value: Object.assign(__privateMethod(this, _getResponseReceivedEvent, getResponseReceivedEvent_fn).call(this), {
            type: "event"
          })
        };
      } catch (error) {
        return {
          kind: "error",
          error: error instanceof Error ? error : new Error("Unknown")
        };
      }
    }
    return result;
  }), __privateGet(this, _context, context_get), protocol_js_1$e.ChromiumBidi.Network.EventNames.ResponseCompleted);
};
_getResponseReceivedEvent = new WeakSet();
getResponseReceivedEvent_fn = function() {
  (0, assert_js_1$5.assert)(__privateGet(this, _request).info, "RequestWillBeSentEvent is not set");
  (0, assert_js_1$5.assert)(__privateGet(this, _response).info, "ResponseReceivedEvent is not set");
  if (__privateGet(this, _response).info.fromDiskCache) {
    __privateGet(this, _response).extraInfo = void 0;
  }
  const headers = (0, NetworkUtils_js_1$2.bidiNetworkHeadersFromCdpNetworkHeaders)(__privateGet(this, _response).info.headers);
  return {
    method: protocol_js_1$e.ChromiumBidi.Network.EventNames.ResponseCompleted,
    params: {
      ...__privateMethod(this, _getBaseEventParams, getBaseEventParams_fn).call(this),
      response: {
        url: __privateGet(this, _response).info.url ?? __privateGet(_NetworkRequest, _unknown),
        protocol: __privateGet(this, _response).info.protocol ?? "",
        status: this.statusCode,
        statusText: __privateGet(this, _response).info.statusText,
        fromCache: __privateGet(this, _response).info.fromDiskCache || __privateGet(this, _response).info.fromPrefetchCache || __privateGet(this, _servedFromCache),
        headers,
        mimeType: __privateGet(this, _response).info.mimeType,
        bytesReceived: __privateGet(this, _response).info.encodedDataLength,
        headersSize: (0, NetworkUtils_js_1$2.computeHeadersSize)(headers),
        // TODO: consider removing from spec.
        bodySize: 0,
        content: {
          // TODO: consider removing from spec.
          size: 0
        }
      }
    }
  };
};
_isIgnoredEvent = new WeakSet();
isIgnoredEvent_fn = function() {
  var _a3;
  return ((_a3 = __privateGet(this, _request).info) == null ? void 0 : _a3.request.url.endsWith("/favicon.ico")) ?? false;
};
_getInitiatorType = new WeakSet();
getInitiatorType_fn = function(initiatorType) {
  switch (initiatorType) {
    case "parser":
    case "script":
    case "preflight":
      return initiatorType;
    default:
      return "other";
  }
};
_getCookies = new WeakSet();
getCookies_fn = function(associatedCookies) {
  return associatedCookies.filter(({ blockedReasons }) => {
    return !Array.isArray(blockedReasons) || blockedReasons.length === 0;
  }).map(({ cookie }) => (0, NetworkUtils_js_1$2.cdpToBiDiCookie)(cookie));
};
__privateAdd(_NetworkRequest, _getInitiatorType);
__privateAdd(_NetworkRequest, _getCookies);
__privateAdd(_NetworkRequest, _unknown, "UNKNOWN");
let NetworkRequest = _NetworkRequest;
NetworkRequest$1.NetworkRequest = NetworkRequest;
Object.defineProperty(NetworkManager$1, "__esModule", { value: true });
NetworkManager$1.NetworkManager = void 0;
const NetworkRequest_js_1 = NetworkRequest$1;
const _NetworkManager = class _NetworkManager {
  constructor(cdpTarget, eventManager, networkStorage) {
    /**
     * Gets the network request with the given ID, if any.
     * Otherwise, creates a new network request with the given ID and cdp target.
     */
    __privateAdd(this, _getOrCreateNetworkRequest);
    __privateAdd(this, _cdpTarget4, void 0);
    __privateAdd(this, _eventManager5, void 0);
    __privateAdd(this, _networkStorage2, void 0);
    __privateSet(this, _cdpTarget4, cdpTarget);
    __privateSet(this, _eventManager5, eventManager);
    __privateSet(this, _networkStorage2, networkStorage);
  }
  /** Returns the CDP Target associated with this NetworkManager instance. */
  get cdpTarget() {
    return __privateGet(this, _cdpTarget4);
  }
  static create(cdpTarget, eventManager, networkStorage) {
    const networkManager = new _NetworkManager(cdpTarget, eventManager, networkStorage);
    cdpTarget.browserCdpClient.on("Target.detachedFromTarget", (params) => {
      if (cdpTarget.cdpClient.sessionId === params.sessionId) {
        __privateGet(networkManager, _networkStorage2).disposeRequestMap();
      }
    });
    cdpTarget.cdpClient.on("Network.requestWillBeSent", (params) => {
      var _a3, _b3;
      const request = __privateGet(networkManager, _networkStorage2).getRequest(params.requestId);
      if (request && request.isRedirecting()) {
        request.handleRedirect(params);
        __privateGet(networkManager, _networkStorage2).deleteRequest(params.requestId);
        __privateMethod(_a3 = networkManager, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(_a3, params.requestId, request.redirectCount + 1).onRequestWillBeSentEvent(params);
      } else if (request) {
        request.onRequestWillBeSentEvent(params);
      } else {
        __privateMethod(_b3 = networkManager, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(_b3, params.requestId).onRequestWillBeSentEvent(params);
      }
    });
    cdpTarget.cdpClient.on("Network.requestWillBeSentExtraInfo", (params) => {
      var _a3;
      __privateMethod(_a3 = networkManager, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(_a3, params.requestId).onRequestWillBeSentExtraInfoEvent(params);
    });
    cdpTarget.cdpClient.on("Network.responseReceived", (params) => {
      var _a3;
      __privateMethod(_a3 = networkManager, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(_a3, params.requestId).onResponseReceivedEvent(params);
    });
    cdpTarget.cdpClient.on("Network.responseReceivedExtraInfo", (params) => {
      var _a3;
      __privateMethod(_a3 = networkManager, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(_a3, params.requestId).onResponseReceivedExtraInfoEvent(params);
    });
    cdpTarget.cdpClient.on("Network.requestServedFromCache", (params) => {
      var _a3;
      __privateMethod(_a3 = networkManager, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(_a3, params.requestId).onServedFromCache();
    });
    cdpTarget.cdpClient.on("Network.loadingFailed", (params) => {
      var _a3;
      __privateMethod(_a3 = networkManager, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(_a3, params.requestId).onLoadingFailedEvent(params);
    });
    cdpTarget.cdpClient.on("Fetch.requestPaused", (params) => {
      var _a3;
      if (params.networkId) {
        __privateMethod(_a3 = networkManager, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(_a3, params.networkId).onRequestPaused(params);
      }
    });
    return networkManager;
  }
};
_cdpTarget4 = new WeakMap();
_eventManager5 = new WeakMap();
_networkStorage2 = new WeakMap();
_getOrCreateNetworkRequest = new WeakSet();
getOrCreateNetworkRequest_fn = function(id, redirectCount) {
  let request = __privateGet(this, _networkStorage2).getRequest(id);
  if (request) {
    return request;
  }
  request = new NetworkRequest_js_1.NetworkRequest(id, __privateGet(this, _eventManager5), __privateGet(this, _networkStorage2), __privateGet(this, _cdpTarget4), redirectCount);
  __privateGet(this, _networkStorage2).addRequest(request);
  return request;
};
let NetworkManager = _NetworkManager;
NetworkManager$1.NetworkManager = NetworkManager;
Object.defineProperty(CdpTarget$1, "__esModule", { value: true });
CdpTarget$1.CdpTarget = void 0;
const Deferred_js_1 = Deferred$1;
const LogManager_js_1 = LogManager$1;
const NetworkManager_js_1 = NetworkManager$1;
const _CdpTarget = class _CdpTarget {
  constructor(targetId, cdpClient, browserCdpClient, eventManager, preloadScriptStorage, networkStorage, acceptInsecureCerts) {
    /**
     * Enables all the required CDP domains and unblocks the target.
     */
    __privateAdd(this, _unblock);
    __privateAdd(this, _setEventListeners);
    /** Loads all top-level preload scripts. */
    __privateAdd(this, _initAndEvaluatePreloadScripts);
    __privateAdd(this, _id3, void 0);
    __privateAdd(this, _cdpClient2, void 0);
    __privateAdd(this, _browserCdpClient3, void 0);
    __privateAdd(this, _eventManager6, void 0);
    __privateAdd(this, _preloadScriptStorage, void 0);
    __privateAdd(this, _networkStorage3, void 0);
    __privateAdd(this, _targetUnblocked, new Deferred_js_1.Deferred());
    __privateAdd(this, _acceptInsecureCerts, void 0);
    __privateSet(this, _id3, targetId);
    __privateSet(this, _cdpClient2, cdpClient);
    __privateSet(this, _eventManager6, eventManager);
    __privateSet(this, _preloadScriptStorage, preloadScriptStorage);
    __privateSet(this, _networkStorage3, networkStorage);
    __privateSet(this, _browserCdpClient3, browserCdpClient);
    __privateSet(this, _acceptInsecureCerts, acceptInsecureCerts);
  }
  static create(targetId, cdpClient, browserCdpClient, realmStorage, eventManager, preloadScriptStorage, networkStorage, acceptInsecureCerts, logger) {
    var _a3, _b3;
    const cdpTarget = new _CdpTarget(targetId, cdpClient, browserCdpClient, eventManager, preloadScriptStorage, networkStorage, acceptInsecureCerts);
    LogManager_js_1.LogManager.create(cdpTarget, realmStorage, eventManager, logger);
    NetworkManager_js_1.NetworkManager.create(cdpTarget, eventManager, networkStorage);
    __privateMethod(_a3 = cdpTarget, _setEventListeners, setEventListeners_fn).call(_a3);
    void __privateMethod(_b3 = cdpTarget, _unblock, unblock_fn).call(_b3);
    return cdpTarget;
  }
  /** Returns a deferred that resolves when the target is unblocked. */
  get unblocked() {
    return __privateGet(this, _targetUnblocked);
  }
  get id() {
    return __privateGet(this, _id3);
  }
  get cdpClient() {
    return __privateGet(this, _cdpClient2);
  }
  get browserCdpClient() {
    return __privateGet(this, _browserCdpClient3);
  }
  /** Needed for CDP escape path. */
  get cdpSessionId() {
    return __privateGet(this, _cdpClient2).sessionId;
  }
  /** Calls `Fetch.enable` with the added network intercepts. */
  async fetchEnable() {
    await __privateGet(this, _cdpClient2).sendCommand("Fetch.enable", __privateGet(this, _networkStorage3).getFetchEnableParams());
  }
  /** Calls `Fetch.disable`. */
  async fetchDisable() {
    await __privateGet(this, _cdpClient2).sendCommand("Fetch.disable");
  }
  /**
   * All the ProxyChannels from all the preload scripts of the given
   * BrowsingContext.
   */
  getChannels() {
    return __privateGet(this, _preloadScriptStorage).find().flatMap((script) => script.channels);
  }
};
_id3 = new WeakMap();
_cdpClient2 = new WeakMap();
_browserCdpClient3 = new WeakMap();
_eventManager6 = new WeakMap();
_preloadScriptStorage = new WeakMap();
_networkStorage3 = new WeakMap();
_targetUnblocked = new WeakMap();
_acceptInsecureCerts = new WeakMap();
_unblock = new WeakSet();
unblock_fn = async function() {
  try {
    await Promise.all([
      __privateGet(this, _cdpClient2).sendCommand("Runtime.enable"),
      __privateGet(this, _cdpClient2).sendCommand("Page.enable"),
      __privateGet(this, _cdpClient2).sendCommand("Page.setLifecycleEventsEnabled", {
        enabled: true
      }),
      // Set ignore certificate errors for each target.
      __privateGet(this, _cdpClient2).sendCommand("Security.setIgnoreCertificateErrors", {
        ignore: __privateGet(this, _acceptInsecureCerts)
      }),
      // XXX: #1080: Do not always enable the network domain globally.
      // TODO: enable Network domain for OOPiF targets.
      __privateGet(this, _cdpClient2).sendCommand("Network.enable"),
      // XXX: #1080: Do not always enable the fetch domain globally.
      this.fetchEnable(),
      __privateGet(this, _cdpClient2).sendCommand("Target.setAutoAttach", {
        autoAttach: true,
        waitForDebuggerOnStart: true,
        flatten: true
      }),
      __privateMethod(this, _initAndEvaluatePreloadScripts, initAndEvaluatePreloadScripts_fn).call(this),
      __privateGet(this, _cdpClient2).sendCommand("Runtime.runIfWaitingForDebugger")
    ]);
  } catch (error) {
    if (!__privateGet(this, _cdpClient2).isCloseError(error)) {
      __privateGet(this, _targetUnblocked).resolve({
        kind: "error",
        error
      });
      return;
    }
  }
  __privateGet(this, _targetUnblocked).resolve({
    kind: "success",
    value: void 0
  });
};
_setEventListeners = new WeakSet();
setEventListeners_fn = function() {
  __privateGet(this, _cdpClient2).on("*", (event, params) => {
    if (typeof event !== "string") {
      return;
    }
    __privateGet(this, _eventManager6).registerEvent({
      type: "event",
      method: `cdp.${event}`,
      params: {
        event,
        params,
        session: this.cdpSessionId
      }
    }, null);
  });
};
_initAndEvaluatePreloadScripts = new WeakSet();
initAndEvaluatePreloadScripts_fn = async function() {
  for (const script of __privateGet(this, _preloadScriptStorage).find({
    global: true
  })) {
    await script.initInTarget(this, true);
  }
};
let CdpTarget = _CdpTarget;
CdpTarget$1.CdpTarget = CdpTarget;
Object.defineProperty(BrowsingContextProcessor$1, "__esModule", { value: true });
BrowsingContextProcessor$1.BrowsingContextProcessor = void 0;
const protocol_js_1$d = protocol;
const log_js_1$3 = log;
const DedicatedWorkerRealm_js_1 = DedicatedWorkerRealm$2;
const BrowsingContextImpl_js_1 = BrowsingContextImpl$1;
const CdpTarget_js_1 = CdpTarget$1;
class BrowsingContextProcessor {
  constructor(cdpConnection, browserCdpClient, selfTargetId, eventManager, browsingContextStorage, realmStorage, networkStorage, preloadScriptStorage, acceptInsecureCerts, sharedIdWithFrame, defaultUserContextId, logger) {
    /**
     * This method is called for each CDP session, since this class is responsible
     * for creating and destroying all targets and browsing contexts.
     */
    __privateAdd(this, _setEventListeners2);
    __privateAdd(this, _handleFrameAttachedEvent);
    __privateAdd(this, _handleFrameDetachedEvent);
    __privateAdd(this, _handleAttachedToTargetEvent);
    __privateAdd(this, _createCdpTarget);
    __privateAdd(this, _handleWorkerTarget);
    __privateAdd(this, _handleDetachedFromTargetEvent);
    __privateAdd(this, _handleTargetInfoChangedEvent);
    __privateAdd(this, _browserCdpClient4, void 0);
    __privateAdd(this, _cdpConnection2, void 0);
    __privateAdd(this, _selfTargetId, void 0);
    __privateAdd(this, _eventManager7, void 0);
    __privateAdd(this, _browsingContextStorage4, void 0);
    __privateAdd(this, _networkStorage4, void 0);
    __privateAdd(this, _acceptInsecureCerts2, void 0);
    __privateAdd(this, _sharedIdWithFrame3, void 0);
    __privateAdd(this, _preloadScriptStorage2, void 0);
    __privateAdd(this, _realmStorage4, void 0);
    __privateAdd(this, _defaultUserContextId, void 0);
    __privateAdd(this, _logger6, void 0);
    __privateAdd(this, _workers, /* @__PURE__ */ new Map());
    __privateSet(this, _acceptInsecureCerts2, acceptInsecureCerts);
    __privateSet(this, _cdpConnection2, cdpConnection);
    __privateSet(this, _browserCdpClient4, browserCdpClient);
    __privateSet(this, _selfTargetId, selfTargetId);
    __privateSet(this, _eventManager7, eventManager);
    __privateSet(this, _browsingContextStorage4, browsingContextStorage);
    __privateSet(this, _preloadScriptStorage2, preloadScriptStorage);
    __privateSet(this, _networkStorage4, networkStorage);
    __privateSet(this, _realmStorage4, realmStorage);
    __privateSet(this, _sharedIdWithFrame3, sharedIdWithFrame);
    __privateSet(this, _defaultUserContextId, defaultUserContextId);
    __privateSet(this, _logger6, logger);
    __privateMethod(this, _setEventListeners2, setEventListeners_fn2).call(this, browserCdpClient);
  }
  getTree(params) {
    const resultContexts = params.root === void 0 ? __privateGet(this, _browsingContextStorage4).getTopLevelContexts() : [__privateGet(this, _browsingContextStorage4).getContext(params.root)];
    return {
      contexts: resultContexts.map((c) => c.serializeToBidiValue(params.maxDepth ?? Number.MAX_VALUE))
    };
  }
  async create(params) {
    let referenceContext;
    let userContext = params.userContext ?? "default";
    if (params.referenceContext !== void 0) {
      referenceContext = __privateGet(this, _browsingContextStorage4).getContext(params.referenceContext);
      if (!referenceContext.isTopLevelContext()) {
        throw new protocol_js_1$d.InvalidArgumentException(`referenceContext should be a top-level context`);
      }
      userContext = referenceContext.userContext;
    }
    let newWindow = false;
    switch (params.type) {
      case "tab":
        newWindow = false;
        break;
      case "window":
        newWindow = true;
        break;
    }
    if (userContext !== "default") {
      const existingContexts = __privateGet(this, _browsingContextStorage4).getAllContexts().filter((context2) => context2.userContext === userContext);
      if (!existingContexts.length) {
        newWindow = true;
      }
    }
    let result;
    try {
      result = await __privateGet(this, _browserCdpClient4).sendCommand("Target.createTarget", {
        url: "about:blank",
        newWindow,
        browserContextId: userContext === "default" ? void 0 : userContext
      });
    } catch (err) {
      if (
        // See https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/devtools/protocol/target_handler.cc;l=90;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
        err.message.startsWith("Failed to find browser context with id") || // See https://source.chromium.org/chromium/chromium/src/+/main:headless/lib/browser/protocol/target_handler.cc;l=49;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
        err.message === "browserContextId"
      ) {
        throw new protocol_js_1$d.NoSuchUserContextException(`The context ${userContext} was not found`);
      }
      throw err;
    }
    const contextId = result.targetId;
    const context = __privateGet(this, _browsingContextStorage4).getContext(contextId);
    await context.lifecycleLoaded();
    return { context: context.id };
  }
  navigate(params) {
    const context = __privateGet(this, _browsingContextStorage4).getContext(params.context);
    return context.navigate(
      params.url,
      params.wait ?? "none"
      /* BrowsingContext.ReadinessState.None */
    );
  }
  reload(params) {
    const context = __privateGet(this, _browsingContextStorage4).getContext(params.context);
    return context.reload(
      params.ignoreCache ?? false,
      params.wait ?? "none"
      /* BrowsingContext.ReadinessState.None */
    );
  }
  async activate(params) {
    const context = __privateGet(this, _browsingContextStorage4).getContext(params.context);
    if (!context.isTopLevelContext()) {
      throw new protocol_js_1$d.InvalidArgumentException("Activation is only supported on the top-level context");
    }
    await context.activate();
    return {};
  }
  async captureScreenshot(params) {
    const context = __privateGet(this, _browsingContextStorage4).getContext(params.context);
    return await context.captureScreenshot(params);
  }
  async print(params) {
    const context = __privateGet(this, _browsingContextStorage4).getContext(params.context);
    return await context.print(params);
  }
  async setViewport(params) {
    const context = __privateGet(this, _browsingContextStorage4).getContext(params.context);
    if (!context.isTopLevelContext()) {
      throw new protocol_js_1$d.InvalidArgumentException("Emulating viewport is only supported on the top-level context");
    }
    await context.setViewport(params.viewport, params.devicePixelRatio);
    return {};
  }
  async traverseHistory(params) {
    const context = __privateGet(this, _browsingContextStorage4).getContext(params.context);
    if (!context) {
      throw new protocol_js_1$d.InvalidArgumentException(`No browsing context with id ${params.context}`);
    }
    await context.traverseHistory(params.delta);
    return {};
  }
  async handleUserPrompt(params) {
    const context = __privateGet(this, _browsingContextStorage4).getContext(params.context);
    await context.handleUserPrompt(params);
    return {};
  }
  async close(params) {
    const context = __privateGet(this, _browsingContextStorage4).getContext(params.context);
    if (!context.isTopLevelContext()) {
      throw new protocol_js_1$d.InvalidArgumentException(`Non top-level browsing context ${context.id} cannot be closed.`);
    }
    try {
      const detachedFromTargetPromise = new Promise((resolve) => {
        const onContextDestroyed = (event) => {
          if (event.targetId === params.context) {
            __privateGet(this, _browserCdpClient4).off("Target.detachedFromTarget", onContextDestroyed);
            resolve();
          }
        };
        __privateGet(this, _browserCdpClient4).on("Target.detachedFromTarget", onContextDestroyed);
      });
      if (params.promptUnload) {
        await context.close();
      } else {
        await __privateGet(this, _browserCdpClient4).sendCommand("Target.closeTarget", {
          targetId: params.context
        });
      }
      await detachedFromTargetPromise;
    } catch (error) {
      if (!(error.code === -32e3 && error.message === "Not attached to an active page")) {
        throw error;
      }
    }
    return {};
  }
}
_browserCdpClient4 = new WeakMap();
_cdpConnection2 = new WeakMap();
_selfTargetId = new WeakMap();
_eventManager7 = new WeakMap();
_browsingContextStorage4 = new WeakMap();
_networkStorage4 = new WeakMap();
_acceptInsecureCerts2 = new WeakMap();
_sharedIdWithFrame3 = new WeakMap();
_preloadScriptStorage2 = new WeakMap();
_realmStorage4 = new WeakMap();
_defaultUserContextId = new WeakMap();
_logger6 = new WeakMap();
_setEventListeners2 = new WeakSet();
setEventListeners_fn2 = function(cdpClient) {
  cdpClient.on("Target.attachedToTarget", (params) => {
    __privateMethod(this, _handleAttachedToTargetEvent, handleAttachedToTargetEvent_fn).call(this, params, cdpClient);
  });
  cdpClient.on("Target.detachedFromTarget", (params) => {
    __privateMethod(this, _handleDetachedFromTargetEvent, handleDetachedFromTargetEvent_fn).call(this, params);
  });
  cdpClient.on("Target.targetInfoChanged", (params) => {
    __privateMethod(this, _handleTargetInfoChangedEvent, handleTargetInfoChangedEvent_fn).call(this, params);
  });
  cdpClient.on("Page.frameAttached", (params) => {
    __privateMethod(this, _handleFrameAttachedEvent, handleFrameAttachedEvent_fn).call(this, params);
  });
  cdpClient.on("Page.frameDetached", (params) => {
    __privateMethod(this, _handleFrameDetachedEvent, handleFrameDetachedEvent_fn).call(this, params);
  });
};
_handleFrameAttachedEvent = new WeakSet();
handleFrameAttachedEvent_fn = function(params) {
  const parentBrowsingContext = __privateGet(this, _browsingContextStorage4).findContext(params.parentFrameId);
  if (parentBrowsingContext !== void 0) {
    BrowsingContextImpl_js_1.BrowsingContextImpl.create(parentBrowsingContext.cdpTarget, __privateGet(this, _realmStorage4), params.frameId, params.parentFrameId, parentBrowsingContext.userContext, __privateGet(this, _eventManager7), __privateGet(this, _browsingContextStorage4), __privateGet(this, _sharedIdWithFrame3), __privateGet(this, _logger6));
  }
};
_handleFrameDetachedEvent = new WeakSet();
handleFrameDetachedEvent_fn = function(params) {
  var _a3;
  if (params.reason === "swap") {
    return;
  }
  (_a3 = __privateGet(this, _browsingContextStorage4).findContext(params.frameId)) == null ? void 0 : _a3.dispose();
};
_handleAttachedToTargetEvent = new WeakSet();
handleAttachedToTargetEvent_fn = function(params, parentSessionCdpClient) {
  var _a3;
  const { sessionId, targetInfo } = params;
  const targetCdpClient = __privateGet(this, _cdpConnection2).getCdpClient(sessionId);
  (_a3 = __privateGet(this, _logger6)) == null ? void 0 : _a3.call(this, log_js_1$3.LogType.debugInfo, "AttachedToTarget event received:", params);
  switch (targetInfo.type) {
    case "page":
    case "iframe": {
      if (targetInfo.targetId === __privateGet(this, _selfTargetId)) {
        break;
      }
      const cdpTarget = __privateMethod(this, _createCdpTarget, createCdpTarget_fn).call(this, targetCdpClient, targetInfo);
      const maybeContext = __privateGet(this, _browsingContextStorage4).findContext(targetInfo.targetId);
      if (maybeContext) {
        maybeContext.updateCdpTarget(cdpTarget);
      } else {
        BrowsingContextImpl_js_1.BrowsingContextImpl.create(cdpTarget, __privateGet(this, _realmStorage4), targetInfo.targetId, null, targetInfo.browserContextId && targetInfo.browserContextId !== __privateGet(this, _defaultUserContextId) ? targetInfo.browserContextId : "default", __privateGet(this, _eventManager7), __privateGet(this, _browsingContextStorage4), __privateGet(this, _sharedIdWithFrame3), __privateGet(this, _logger6));
      }
      return;
    }
    case "worker": {
      const browsingContext = parentSessionCdpClient.sessionId && __privateGet(this, _browsingContextStorage4).findContextBySession(parentSessionCdpClient.sessionId);
      if (!browsingContext) {
        break;
      }
      const cdpTarget = __privateMethod(this, _createCdpTarget, createCdpTarget_fn).call(this, targetCdpClient, targetInfo);
      __privateMethod(this, _handleWorkerTarget, handleWorkerTarget_fn).call(this, cdpTarget, __privateGet(this, _realmStorage4).getRealm({
        browsingContextId: browsingContext.id,
        type: "window",
        sandbox: void 0
      }));
      return;
    }
  }
  targetCdpClient.sendCommand("Runtime.runIfWaitingForDebugger").then(() => parentSessionCdpClient.sendCommand("Target.detachFromTarget", params)).catch((error) => {
    var _a4;
    return (_a4 = __privateGet(this, _logger6)) == null ? void 0 : _a4.call(this, log_js_1$3.LogType.debugError, error);
  });
};
_createCdpTarget = new WeakSet();
createCdpTarget_fn = function(targetCdpClient, targetInfo) {
  __privateMethod(this, _setEventListeners2, setEventListeners_fn2).call(this, targetCdpClient);
  return CdpTarget_js_1.CdpTarget.create(targetInfo.targetId, targetCdpClient, __privateGet(this, _browserCdpClient4), __privateGet(this, _realmStorage4), __privateGet(this, _eventManager7), __privateGet(this, _preloadScriptStorage2), __privateGet(this, _networkStorage4), __privateGet(this, _acceptInsecureCerts2), __privateGet(this, _logger6));
};
_workers = new WeakMap();
_handleWorkerTarget = new WeakSet();
handleWorkerTarget_fn = function(cdpTarget, ownerRealm) {
  cdpTarget.cdpClient.on("Runtime.executionContextCreated", (params) => {
    const { uniqueId, id, origin } = params.context;
    const workerRealm = new DedicatedWorkerRealm_js_1.DedicatedWorkerRealm(cdpTarget.cdpClient, __privateGet(this, _eventManager7), id, __privateGet(this, _logger6), (0, BrowsingContextImpl_js_1.serializeOrigin)(origin), ownerRealm, uniqueId, __privateGet(this, _realmStorage4));
    __privateGet(this, _workers).set(cdpTarget.cdpSessionId, workerRealm);
  });
};
_handleDetachedFromTargetEvent = new WeakSet();
handleDetachedFromTargetEvent_fn = function(params) {
  const context = __privateGet(this, _browsingContextStorage4).findContextBySession(params.sessionId);
  if (context) {
    context.dispose();
    __privateGet(this, _preloadScriptStorage2).find({ targetId: context.id }).map((preloadScript) => preloadScript.dispose(context.id));
    return;
  }
  const worker = __privateGet(this, _workers).get(params.sessionId);
  if (worker) {
    __privateGet(this, _realmStorage4).deleteRealms({
      cdpSessionId: worker.cdpClient.sessionId
    });
  }
};
_handleTargetInfoChangedEvent = new WeakSet();
handleTargetInfoChangedEvent_fn = function(params) {
  const context = __privateGet(this, _browsingContextStorage4).findContext(params.targetInfo.targetId);
  if (context) {
    context.onTargetInfoChanged(params);
  }
};
BrowsingContextProcessor$1.BrowsingContextProcessor = BrowsingContextProcessor;
var InputProcessor$1 = {};
var ActionDispatcher$1 = {};
var InputSource = {};
Object.defineProperty(InputSource, "__esModule", { value: true });
InputSource.WheelSource = InputSource.PointerSource = InputSource.KeySource = InputSource.NoneSource = void 0;
class NoneSource {
  constructor() {
    __publicField(this, "type", "none");
  }
}
InputSource.NoneSource = NoneSource;
class KeySource {
  constructor() {
    __privateAdd(this, _setModifier);
    __publicField(this, "type", "key");
    __publicField(this, "pressed", /* @__PURE__ */ new Set());
    // This is a bitfield that matches the modifiers parameter of
    // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchKeyEvent
    __privateAdd(this, _modifiers, 0);
  }
  get modifiers() {
    return __privateGet(this, _modifiers);
  }
  get alt() {
    return (__privateGet(this, _modifiers) & 1) === 1;
  }
  set alt(value) {
    __privateMethod(this, _setModifier, setModifier_fn).call(this, value, 1);
  }
  get ctrl() {
    return (__privateGet(this, _modifiers) & 2) === 2;
  }
  set ctrl(value) {
    __privateMethod(this, _setModifier, setModifier_fn).call(this, value, 2);
  }
  get meta() {
    return (__privateGet(this, _modifiers) & 4) === 4;
  }
  set meta(value) {
    __privateMethod(this, _setModifier, setModifier_fn).call(this, value, 4);
  }
  get shift() {
    return (__privateGet(this, _modifiers) & 8) === 8;
  }
  set shift(value) {
    __privateMethod(this, _setModifier, setModifier_fn).call(this, value, 8);
  }
}
_modifiers = new WeakMap();
_setModifier = new WeakSet();
setModifier_fn = function(value, bit) {
  if (value) {
    __privateSet(this, _modifiers, __privateGet(this, _modifiers) | bit);
  } else {
    __privateSet(this, _modifiers, __privateGet(this, _modifiers) & ~bit);
  }
};
InputSource.KeySource = KeySource;
class PointerSource {
  constructor(id, subtype) {
    __publicField(this, "type", "pointer");
    __publicField(this, "subtype");
    __publicField(this, "pointerId");
    __publicField(this, "pressed", /* @__PURE__ */ new Set());
    __publicField(this, "x", 0);
    __publicField(this, "y", 0);
    __privateAdd(this, _clickContexts, /* @__PURE__ */ new Map());
    this.pointerId = id;
    this.subtype = subtype;
  }
  // This is a bitfield that matches the buttons parameter of
  // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent
  get buttons() {
    let buttons = 0;
    for (const button of this.pressed) {
      switch (button) {
        case 0:
          buttons |= 1;
          break;
        case 1:
          buttons |= 4;
          break;
        case 2:
          buttons |= 2;
          break;
        case 3:
          buttons |= 8;
          break;
        case 4:
          buttons |= 16;
          break;
      }
    }
    return buttons;
  }
  setClickCount(button, context) {
    let storedContext = __privateGet(this, _clickContexts).get(button);
    if (!storedContext || storedContext.compare(context)) {
      storedContext = context;
    }
    ++storedContext.count;
    __privateGet(this, _clickContexts).set(button, storedContext);
    return storedContext.count;
  }
  getClickCount(button) {
    var _a3;
    return ((_a3 = __privateGet(this, _clickContexts).get(button)) == null ? void 0 : _a3.count) ?? 0;
  }
}
_clickContexts = new WeakMap();
// --- Platform-specific code starts here ---
// Input.dispatchMouseEvent doesn't know the concept of double click, so we
// need to create the logic, similar to how it's done for OSes:
// https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:ui/events/event.cc;l=479
__publicField(PointerSource, "ClickContext", (_e = class {
  constructor(x2, y2, time) {
    __publicField(this, "count", 0);
    __privateAdd(this, _x, void 0);
    __privateAdd(this, _y, void 0);
    __privateAdd(this, _time, void 0);
    __privateSet(this, _x, x2);
    __privateSet(this, _y, y2);
    __privateSet(this, _time, time);
  }
  compare(context) {
    return (
      // The click needs to be within a certain amount of ms.
      __privateGet(context, _time) - __privateGet(this, _time) > __privateGet(_e, _DOUBLE_CLICK_TIME_MS) || // The click needs to be within a certain square radius.
      Math.abs(__privateGet(context, _x) - __privateGet(this, _x)) > __privateGet(_e, _MAX_DOUBLE_CLICK_RADIUS) || Math.abs(__privateGet(context, _y) - __privateGet(this, _y)) > __privateGet(_e, _MAX_DOUBLE_CLICK_RADIUS)
    );
  }
}, _DOUBLE_CLICK_TIME_MS = new WeakMap(), _MAX_DOUBLE_CLICK_RADIUS = new WeakMap(), _x = new WeakMap(), _y = new WeakMap(), _time = new WeakMap(), __privateAdd(_e, _DOUBLE_CLICK_TIME_MS, 500), __privateAdd(_e, _MAX_DOUBLE_CLICK_RADIUS, 2), _e));
InputSource.PointerSource = PointerSource;
class WheelSource {
  constructor() {
    __publicField(this, "type", "wheel");
  }
}
InputSource.WheelSource = WheelSource;
var keyUtils = {};
Object.defineProperty(keyUtils, "__esModule", { value: true });
keyUtils.getKeyLocation = keyUtils.getKeyCode = keyUtils.getNormalizedKey = void 0;
function getNormalizedKey(value) {
  switch (value) {
    case "":
      return "Unidentified";
    case "":
      return "Cancel";
    case "":
      return "Help";
    case "":
      return "Backspace";
    case "":
      return "Tab";
    case "":
      return "Clear";
    case "":
      return "Return";
    case "":
      return "Enter";
    case "":
      return "Shift";
    case "":
      return "Control";
    case "":
      return "Alt";
    case "":
      return "Pause";
    case "":
      return "Escape";
    case "":
      return " ";
    case "":
      return "PageUp";
    case "":
      return "PageDown";
    case "":
      return "End";
    case "":
      return "Home";
    case "":
      return "ArrowLeft";
    case "":
      return "ArrowUp";
    case "":
      return "ArrowRight";
    case "":
      return "ArrowDown";
    case "":
      return "Insert";
    case "":
      return "Delete";
    case "":
      return ";";
    case "":
      return "=";
    case "":
      return "0";
    case "":
      return "1";
    case "":
      return "2";
    case "":
      return "3";
    case "":
      return "4";
    case "":
      return "5";
    case "":
      return "6";
    case "":
      return "7";
    case "":
      return "8";
    case "":
      return "9";
    case "":
      return "*";
    case "":
      return "+";
    case "":
      return ",";
    case "":
      return "-";
    case "":
      return ".";
    case "":
      return "/";
    case "":
      return "F1";
    case "":
      return "F2";
    case "":
      return "F3";
    case "":
      return "F4";
    case "":
      return "F5";
    case "":
      return "F6";
    case "":
      return "F7";
    case "":
      return "F8";
    case "":
      return "F9";
    case "":
      return "F10";
    case "":
      return "F11";
    case "":
      return "F12";
    case "":
      return "Meta";
    case "":
      return "ZenkakuHankaku";
    case "":
      return "Shift";
    case "":
      return "Control";
    case "":
      return "Alt";
    case "":
      return "Meta";
    case "":
      return "PageUp";
    case "":
      return "PageDown";
    case "":
      return "End";
    case "":
      return "Home";
    case "":
      return "ArrowLeft";
    case "":
      return "ArrowUp";
    case "":
      return "ArrowRight";
    case "":
      return "ArrowDown";
    case "":
      return "Insert";
    case "":
      return "Delete";
    default:
      return value;
  }
}
keyUtils.getNormalizedKey = getNormalizedKey;
function getKeyCode(key) {
  switch (key) {
    case "`":
    case "~":
      return "Backquote";
    case "\\":
    case "|":
      return "Backslash";
    case "":
      return "Backspace";
    case "[":
    case "{":
      return "BracketLeft";
    case "]":
    case "}":
      return "BracketRight";
    case ",":
    case "<":
      return "Comma";
    case "0":
    case ")":
      return "Digit0";
    case "1":
    case "!":
      return "Digit1";
    case "2":
    case "@":
      return "Digit2";
    case "3":
    case "#":
      return "Digit3";
    case "4":
    case "$":
      return "Digit4";
    case "5":
    case "%":
      return "Digit5";
    case "6":
    case "^":
      return "Digit6";
    case "7":
    case "&":
      return "Digit7";
    case "8":
    case "*":
      return "Digit8";
    case "9":
    case "(":
      return "Digit9";
    case "=":
    case "+":
      return "Equal";
    case "a":
    case "A":
      return "KeyA";
    case "b":
    case "B":
      return "KeyB";
    case "c":
    case "C":
      return "KeyC";
    case "d":
    case "D":
      return "KeyD";
    case "e":
    case "E":
      return "KeyE";
    case "f":
    case "F":
      return "KeyF";
    case "g":
    case "G":
      return "KeyG";
    case "h":
    case "H":
      return "KeyH";
    case "i":
    case "I":
      return "KeyI";
    case "j":
    case "J":
      return "KeyJ";
    case "k":
    case "K":
      return "KeyK";
    case "l":
    case "L":
      return "KeyL";
    case "m":
    case "M":
      return "KeyM";
    case "n":
    case "N":
      return "KeyN";
    case "o":
    case "O":
      return "KeyO";
    case "p":
    case "P":
      return "KeyP";
    case "q":
    case "Q":
      return "KeyQ";
    case "r":
    case "R":
      return "KeyR";
    case "s":
    case "S":
      return "KeyS";
    case "t":
    case "T":
      return "KeyT";
    case "u":
    case "U":
      return "KeyU";
    case "v":
    case "V":
      return "KeyV";
    case "w":
    case "W":
      return "KeyW";
    case "x":
    case "X":
      return "KeyX";
    case "y":
    case "Y":
      return "KeyY";
    case "z":
    case "Z":
      return "KeyZ";
    case "-":
    case "_":
      return "Minus";
    case ".":
      return "Period";
    case "'":
    case '"':
      return "Quote";
    case ";":
    case ":":
      return "Semicolon";
    case "/":
    case "?":
      return "Slash";
    case "":
      return "AltLeft";
    case "":
      return "AltRight";
    case "":
      return "ControlLeft";
    case "":
      return "ControlRight";
    case "":
      return "Enter";
    case "":
      return "MetaLeft";
    case "":
      return "MetaRight";
    case "":
      return "ShiftLeft";
    case "":
      return "ShiftRight";
    case " ":
    case "":
      return "Space";
    case "":
      return "Tab";
    case "":
      return "Delete";
    case "":
      return "End";
    case "":
      return "Help";
    case "":
      return "Home";
    case "":
      return "Insert";
    case "":
      return "PageDown";
    case "":
      return "PageUp";
    case "":
      return "ArrowDown";
    case "":
      return "ArrowLeft";
    case "":
      return "ArrowRight";
    case "":
      return "ArrowUp";
    case "":
      return "Escape";
    case "":
      return "F1";
    case "":
      return "F2";
    case "":
      return "F3";
    case "":
      return "F4";
    case "":
      return "F5";
    case "":
      return "F6";
    case "":
      return "F7";
    case "":
      return "F8";
    case "":
      return "F9";
    case "":
      return "F10";
    case "":
      return "F11";
    case "":
      return "F12";
    case "":
    case "":
      return "Numpad0";
    case "":
    case "":
      return "Numpad1";
    case "":
    case "":
      return "Numpad2";
    case "":
    case "":
      return "Numpad3";
    case "":
    case "":
      return "Numpad4";
    case "":
      return "Numpad5";
    case "":
    case "":
      return "Numpad6";
    case "":
    case "":
      return "Numpad7";
    case "":
    case "":
      return "Numpad8";
    case "":
    case "":
      return "Numpad9";
    case "":
      return "NumpadAdd";
    case "":
      return "NumpadComma";
    case "":
    case "":
      return "NumpadDecimal";
    case "":
      return "NumpadDivide";
    case "":
      return "NumpadEnter";
    case "":
      return "NumpadMultiply";
    case "":
      return "NumpadSubtract";
    default:
      return;
  }
}
keyUtils.getKeyCode = getKeyCode;
function getKeyLocation(key) {
  switch (key) {
    case "":
    case "":
    case "":
    case "":
    case "":
      return 1;
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
      return 3;
    case "":
    case "":
    case "":
    case "":
      return 2;
    default:
      return 0;
  }
}
keyUtils.getKeyLocation = getKeyLocation;
var USKeyboardLayout = {};
Object.defineProperty(USKeyboardLayout, "__esModule", { value: true });
USKeyboardLayout.KeyToKeyCode = void 0;
USKeyboardLayout.KeyToKeyCode = {
  "0": 48,
  "1": 49,
  "2": 50,
  "3": 51,
  "4": 52,
  "5": 53,
  "6": 54,
  "7": 55,
  "8": 56,
  "9": 57,
  Abort: 3,
  Help: 6,
  Backspace: 8,
  Tab: 9,
  Numpad5: 12,
  NumpadEnter: 13,
  Enter: 13,
  "\\r": 13,
  "\\n": 13,
  ShiftLeft: 16,
  ShiftRight: 16,
  ControlLeft: 17,
  ControlRight: 17,
  AltLeft: 18,
  AltRight: 18,
  Pause: 19,
  CapsLock: 20,
  Escape: 27,
  Convert: 28,
  NonConvert: 29,
  Space: 32,
  Numpad9: 33,
  PageUp: 33,
  Numpad3: 34,
  PageDown: 34,
  End: 35,
  Numpad1: 35,
  Home: 36,
  Numpad7: 36,
  ArrowLeft: 37,
  Numpad4: 37,
  Numpad8: 38,
  ArrowUp: 38,
  ArrowRight: 39,
  Numpad6: 39,
  Numpad2: 40,
  ArrowDown: 40,
  Select: 41,
  Open: 43,
  PrintScreen: 44,
  Insert: 45,
  Numpad0: 45,
  Delete: 46,
  NumpadDecimal: 46,
  Digit0: 48,
  Digit1: 49,
  Digit2: 50,
  Digit3: 51,
  Digit4: 52,
  Digit5: 53,
  Digit6: 54,
  Digit7: 55,
  Digit8: 56,
  Digit9: 57,
  KeyA: 65,
  KeyB: 66,
  KeyC: 67,
  KeyD: 68,
  KeyE: 69,
  KeyF: 70,
  KeyG: 71,
  KeyH: 72,
  KeyI: 73,
  KeyJ: 74,
  KeyK: 75,
  KeyL: 76,
  KeyM: 77,
  KeyN: 78,
  KeyO: 79,
  KeyP: 80,
  KeyQ: 81,
  KeyR: 82,
  KeyS: 83,
  KeyT: 84,
  KeyU: 85,
  KeyV: 86,
  KeyW: 87,
  KeyX: 88,
  KeyY: 89,
  KeyZ: 90,
  MetaLeft: 91,
  MetaRight: 92,
  ContextMenu: 93,
  NumpadMultiply: 106,
  NumpadAdd: 107,
  NumpadSubtract: 109,
  NumpadDivide: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  F13: 124,
  F14: 125,
  F15: 126,
  F16: 127,
  F17: 128,
  F18: 129,
  F19: 130,
  F20: 131,
  F21: 132,
  F22: 133,
  F23: 134,
  F24: 135,
  NumLock: 144,
  ScrollLock: 145,
  AudioVolumeMute: 173,
  AudioVolumeDown: 174,
  AudioVolumeUp: 175,
  MediaTrackNext: 176,
  MediaTrackPrevious: 177,
  MediaStop: 178,
  MediaPlayPause: 179,
  Semicolon: 186,
  Equal: 187,
  NumpadEqual: 187,
  Comma: 188,
  Minus: 189,
  Period: 190,
  Slash: 191,
  Backquote: 192,
  BracketLeft: 219,
  Backslash: 220,
  BracketRight: 221,
  Quote: 222,
  AltGraph: 225,
  Props: 247,
  Cancel: 3,
  Clear: 12,
  Shift: 16,
  Control: 17,
  Alt: 18,
  Accept: 30,
  ModeChange: 31,
  " ": 32,
  Print: 42,
  Execute: 43,
  "\\u0000": 46,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,
  Meta: 91,
  "*": 106,
  "+": 107,
  "-": 109,
  "/": 111,
  ";": 186,
  "=": 187,
  ",": 188,
  ".": 190,
  "`": 192,
  "[": 219,
  "\\\\": 220,
  "]": 221,
  "'": 222,
  Attn: 246,
  CrSel: 247,
  ExSel: 248,
  EraseEof: 249,
  Play: 250,
  ZoomOut: 251,
  ")": 48,
  "!": 49,
  "@": 50,
  "#": 51,
  $: 52,
  "%": 53,
  "^": 54,
  "&": 55,
  "(": 57,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  ":": 186,
  "<": 188,
  _: 189,
  ">": 190,
  "?": 191,
  "~": 192,
  "{": 219,
  "|": 220,
  "}": 221,
  '"': 222,
  Camera: 44,
  EndCall: 95,
  VolumeDown: 182,
  VolumeUp: 183
};
Object.defineProperty(ActionDispatcher$1, "__esModule", { value: true });
ActionDispatcher$1.ActionDispatcher = void 0;
const protocol_js_1$c = protocol;
const assert_js_1$4 = assert$1;
const InputSource_js_1$1 = InputSource;
const keyUtils_js_1 = keyUtils;
const USKeyboardLayout_js_1 = USKeyboardLayout;
const CALCULATE_IN_VIEW_CENTER_PT_DECL = ((i) => {
  const t = i.getClientRects()[0], e = Math.max(0, Math.min(t.x, t.x + t.width)), n = Math.min(window.innerWidth, Math.max(t.x, t.x + t.width)), h = Math.max(0, Math.min(t.y, t.y + t.height)), m = Math.min(window.innerHeight, Math.max(t.y, t.y + t.height));
  return [e + (n - e >> 1), h + (m - h >> 1)];
}).toString();
const IS_MAC_DECL = (() => {
  return navigator.platform.toLowerCase().includes("mac");
}).toString();
async function getElementCenter(context, element) {
  var _a3, _b3, _c3, _d3;
  const sandbox = await context.getOrCreateSandbox(void 0);
  const result = await sandbox.callFunction(CALCULATE_IN_VIEW_CENTER_PT_DECL, { type: "undefined" }, [element], false, "none", {});
  if (result.type === "exception") {
    throw new protocol_js_1$c.NoSuchElementException(`Origin element ${element.sharedId} was not found`);
  }
  (0, assert_js_1$4.assert)(result.result.type === "array");
  (0, assert_js_1$4.assert)(((_b3 = (_a3 = result.result.value) == null ? void 0 : _a3[0]) == null ? void 0 : _b3.type) === "number");
  (0, assert_js_1$4.assert)(((_d3 = (_c3 = result.result.value) == null ? void 0 : _c3[1]) == null ? void 0 : _d3.type) === "number");
  const { result: { value: [{ value: x2 }, { value: y2 }] } } = result;
  return { x: x2, y: y2 };
}
class ActionDispatcher {
  constructor(inputState, context, isMacOS) {
    __privateAdd(this, _dispatchAction);
    __privateAdd(this, _dispatchPointerDownAction);
    __privateAdd(this, _dispatchPointerUpAction);
    __privateAdd(this, _dispatchPointerMoveAction);
    __privateAdd(this, _getCoordinateFromOrigin);
    __privateAdd(this, _dispatchScrollAction);
    __privateAdd(this, _dispatchKeyDownAction);
    __privateAdd(this, _dispatchKeyUpAction);
    __privateAdd(this, _tickStart, 0);
    __privateAdd(this, _tickDuration, 0);
    __privateAdd(this, _inputState, void 0);
    __privateAdd(this, _context2, void 0);
    __privateAdd(this, _isMacOS, void 0);
    __privateSet(this, _inputState, inputState);
    __privateSet(this, _context2, context);
    __privateSet(this, _isMacOS, isMacOS);
  }
  async dispatchActions(optionsByTick) {
    await __privateGet(this, _inputState).queue.run(async () => {
      for (const options of optionsByTick) {
        await this.dispatchTickActions(options);
      }
    });
  }
  async dispatchTickActions(options) {
    __privateSet(this, _tickStart, performance.now());
    __privateSet(this, _tickDuration, 0);
    for (const { action } of options) {
      if ("duration" in action && action.duration !== void 0) {
        __privateSet(this, _tickDuration, Math.max(__privateGet(this, _tickDuration), action.duration));
      }
    }
    const promises = [
      new Promise((resolve) => setTimeout(resolve, __privateGet(this, _tickDuration)))
    ];
    for (const option of options) {
      promises.push(__privateMethod(this, _dispatchAction, dispatchAction_fn).call(this, option));
    }
    await Promise.all(promises);
  }
}
_tickStart = new WeakMap();
_tickDuration = new WeakMap();
_inputState = new WeakMap();
_context2 = new WeakMap();
_isMacOS = new WeakMap();
_dispatchAction = new WeakSet();
dispatchAction_fn = async function({ id, action }) {
  const source = __privateGet(this, _inputState).get(id);
  const keyState = __privateGet(this, _inputState).getGlobalKeyState();
  switch (action.type) {
    case "keyDown": {
      await __privateMethod(this, _dispatchKeyDownAction, dispatchKeyDownAction_fn).call(this, source, action);
      __privateGet(this, _inputState).cancelList.push({
        id,
        action: {
          ...action,
          type: "keyUp"
        }
      });
      break;
    }
    case "keyUp": {
      await __privateMethod(this, _dispatchKeyUpAction, dispatchKeyUpAction_fn).call(this, source, action);
      break;
    }
    case "pause": {
      break;
    }
    case "pointerDown": {
      await __privateMethod(this, _dispatchPointerDownAction, dispatchPointerDownAction_fn).call(this, source, keyState, action);
      __privateGet(this, _inputState).cancelList.push({
        id,
        action: {
          ...action,
          type: "pointerUp"
        }
      });
      break;
    }
    case "pointerMove": {
      await __privateMethod(this, _dispatchPointerMoveAction, dispatchPointerMoveAction_fn).call(this, source, keyState, action);
      break;
    }
    case "pointerUp": {
      await __privateMethod(this, _dispatchPointerUpAction, dispatchPointerUpAction_fn).call(this, source, keyState, action);
      break;
    }
    case "scroll": {
      await __privateMethod(this, _dispatchScrollAction, dispatchScrollAction_fn).call(this, source, keyState, action);
      break;
    }
  }
};
_dispatchPointerDownAction = new WeakSet();
dispatchPointerDownAction_fn = function(source, keyState, action) {
  const { button } = action;
  if (source.pressed.has(button)) {
    return;
  }
  source.pressed.add(button);
  const { x: x2, y: y2, subtype: pointerType } = source;
  const { width, height, pressure, twist, tangentialPressure } = action;
  const { tiltX, tiltY } = getTilt(action);
  const { modifiers } = keyState;
  switch (pointerType) {
    case "mouse":
    case "pen":
      return __privateGet(this, _context2).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
        type: "mousePressed",
        x: x2,
        y: y2,
        modifiers,
        button: getCdpButton(button),
        buttons: source.buttons,
        clickCount: source.setClickCount(button, new InputSource_js_1$1.PointerSource.ClickContext(x2, y2, performance.now())),
        pointerType,
        tangentialPressure,
        tiltX,
        tiltY,
        twist,
        force: pressure
      });
    case "touch":
      return __privateGet(this, _context2).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [
          {
            x: x2,
            y: y2,
            ...getRadii(width ?? 1, height ?? 1),
            tangentialPressure,
            tiltX,
            tiltY,
            twist,
            force: pressure,
            id: source.pointerId
          }
        ],
        modifiers
      });
  }
};
_dispatchPointerUpAction = new WeakSet();
dispatchPointerUpAction_fn = function(source, keyState, action) {
  const { button } = action;
  if (!source.pressed.has(button)) {
    return;
  }
  source.pressed.delete(button);
  const { x: x2, y: y2, subtype: pointerType } = source;
  const { modifiers } = keyState;
  switch (pointerType) {
    case "mouse":
    case "pen":
      return __privateGet(this, _context2).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
        type: "mouseReleased",
        x: x2,
        y: y2,
        modifiers,
        button: getCdpButton(button),
        buttons: source.buttons,
        clickCount: source.getClickCount(button),
        pointerType
      });
    case "touch":
      return __privateGet(this, _context2).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [
          {
            x: x2,
            y: y2,
            id: source.pointerId
          }
        ],
        modifiers
      });
  }
};
_dispatchPointerMoveAction = new WeakSet();
dispatchPointerMoveAction_fn = async function(source, keyState, action) {
  const { x: startX, y: startY, subtype: pointerType } = source;
  const { width, height, pressure, twist, tangentialPressure, x: offsetX, y: offsetY, origin = "viewport", duration = __privateGet(this, _tickDuration) } = action;
  const { tiltX, tiltY } = getTilt(action);
  const { targetX, targetY } = await __privateMethod(this, _getCoordinateFromOrigin, getCoordinateFromOrigin_fn).call(this, origin, offsetX, offsetY, startX, startY);
  if (targetX < 0 || targetY < 0) {
    throw new protocol_js_1$c.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
  }
  let last;
  do {
    const ratio = duration > 0 ? (performance.now() - __privateGet(this, _tickStart)) / duration : 1;
    last = ratio >= 1;
    let x2;
    let y2;
    if (last) {
      x2 = targetX;
      y2 = targetY;
    } else {
      x2 = Math.round(ratio * (targetX - startX) + startX);
      y2 = Math.round(ratio * (targetY - startY) + startY);
    }
    if (source.x !== x2 || source.y !== y2) {
      const { modifiers } = keyState;
      switch (pointerType) {
        case "mouse":
          await __privateGet(this, _context2).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
            type: "mouseMoved",
            x: x2,
            y: y2,
            modifiers,
            clickCount: 0,
            button: getCdpButton(source.pressed.values().next().value ?? 5),
            buttons: source.buttons,
            pointerType,
            tangentialPressure,
            tiltX,
            tiltY,
            twist,
            force: pressure
          });
          break;
        case "pen":
          if (source.pressed.size !== 0) {
            await __privateGet(this, _context2).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
              type: "mouseMoved",
              x: x2,
              y: y2,
              modifiers,
              clickCount: 0,
              button: getCdpButton(source.pressed.values().next().value ?? 5),
              buttons: source.buttons,
              pointerType,
              tangentialPressure,
              tiltX,
              tiltY,
              twist,
              force: pressure
            });
          }
          break;
        case "touch":
          if (source.pressed.size !== 0) {
            await __privateGet(this, _context2).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
              type: "touchMove",
              touchPoints: [
                {
                  x: x2,
                  y: y2,
                  ...getRadii(width ?? 1, height ?? 1),
                  tangentialPressure,
                  tiltX,
                  tiltY,
                  twist,
                  force: pressure,
                  id: source.pointerId
                }
              ],
              modifiers
            });
          }
          break;
      }
      source.x = x2;
      source.y = y2;
    }
  } while (!last);
};
_getCoordinateFromOrigin = new WeakSet();
getCoordinateFromOrigin_fn = async function(origin, offsetX, offsetY, startX, startY) {
  let targetX;
  let targetY;
  switch (origin) {
    case "viewport":
      targetX = offsetX;
      targetY = offsetY;
      break;
    case "pointer":
      targetX = startX + offsetX;
      targetY = startY + offsetY;
      break;
    default: {
      const { x: posX, y: posY } = await getElementCenter(__privateGet(this, _context2), origin.element);
      targetX = posX + offsetX;
      targetY = posY + offsetY;
      break;
    }
  }
  return { targetX, targetY };
};
_dispatchScrollAction = new WeakSet();
dispatchScrollAction_fn = async function(_source, keyState, action) {
  const { deltaX: targetDeltaX, deltaY: targetDeltaY, x: offsetX, y: offsetY, origin = "viewport", duration = __privateGet(this, _tickDuration) } = action;
  if (origin === "pointer") {
    throw new protocol_js_1$c.InvalidArgumentException('"pointer" origin is invalid for scrolling.');
  }
  const { targetX, targetY } = await __privateMethod(this, _getCoordinateFromOrigin, getCoordinateFromOrigin_fn).call(this, origin, offsetX, offsetY, 0, 0);
  if (targetX < 0 || targetY < 0) {
    throw new protocol_js_1$c.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
  }
  let currentDeltaX = 0;
  let currentDeltaY = 0;
  let last;
  do {
    const ratio = duration > 0 ? (performance.now() - __privateGet(this, _tickStart)) / duration : 1;
    last = ratio >= 1;
    let deltaX;
    let deltaY;
    if (last) {
      deltaX = targetDeltaX - currentDeltaX;
      deltaY = targetDeltaY - currentDeltaY;
    } else {
      deltaX = Math.round(ratio * targetDeltaX - currentDeltaX);
      deltaY = Math.round(ratio * targetDeltaY - currentDeltaY);
    }
    if (deltaX !== 0 || deltaY !== 0) {
      const { modifiers } = keyState;
      await __privateGet(this, _context2).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
        type: "mouseWheel",
        deltaX,
        deltaY,
        x: targetX,
        y: targetY,
        modifiers
      });
      currentDeltaX += deltaX;
      currentDeltaY += deltaY;
    }
  } while (!last);
};
_dispatchKeyDownAction = new WeakSet();
dispatchKeyDownAction_fn = async function(source, action) {
  if ([...action.value].length > 1) {
    throw new protocol_js_1$c.InvalidArgumentException(`Invalid key value: ${action.value}`);
  }
  const rawKey = action.value;
  const key = (0, keyUtils_js_1.getNormalizedKey)(rawKey);
  const repeat = source.pressed.has(key);
  const code = (0, keyUtils_js_1.getKeyCode)(rawKey);
  const location = (0, keyUtils_js_1.getKeyLocation)(rawKey);
  switch (key) {
    case "Alt":
      source.alt = true;
      break;
    case "Shift":
      source.shift = true;
      break;
    case "Control":
      source.ctrl = true;
      break;
    case "Meta":
      source.meta = true;
      break;
  }
  source.pressed.add(key);
  const { modifiers } = source;
  const unmodifiedText = getKeyEventUnmodifiedText(key, source);
  const text = getKeyEventText(code ?? "", source) ?? unmodifiedText;
  let command;
  if (__privateGet(this, _isMacOS) && source.meta) {
    switch (code) {
      case "KeyA":
        command = "SelectAll";
        break;
      case "KeyC":
        command = "Copy";
        break;
      case "KeyV":
        command = source.shift ? "PasteAndMatchStyle" : "Paste";
        break;
      case "KeyX":
        command = "Cut";
        break;
      case "KeyZ":
        command = source.shift ? "Redo" : "Undo";
        break;
    }
  }
  const promises = [
    __privateGet(this, _context2).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
      type: text ? "keyDown" : "rawKeyDown",
      windowsVirtualKeyCode: USKeyboardLayout_js_1.KeyToKeyCode[key],
      key,
      code,
      text,
      unmodifiedText,
      autoRepeat: repeat,
      isSystemKey: source.alt || void 0,
      location: location < 3 ? location : void 0,
      isKeypad: location === 3,
      modifiers,
      commands: command ? [command] : void 0
    })
  ];
  if (key === "Escape") {
    if (!source.alt && (__privateGet(this, _isMacOS) && !source.ctrl && !source.meta || !__privateGet(this, _isMacOS))) {
      promises.push(__privateGet(this, _context2).cdpTarget.cdpClient.sendCommand("Input.cancelDragging"));
    }
  }
  await Promise.all(promises);
};
_dispatchKeyUpAction = new WeakSet();
dispatchKeyUpAction_fn = function(source, action) {
  if ([...action.value].length > 1) {
    throw new protocol_js_1$c.InvalidArgumentException(`Invalid key value: ${action.value}`);
  }
  const rawKey = action.value;
  const key = (0, keyUtils_js_1.getNormalizedKey)(rawKey);
  if (!source.pressed.has(key)) {
    return;
  }
  const code = (0, keyUtils_js_1.getKeyCode)(rawKey);
  const location = (0, keyUtils_js_1.getKeyLocation)(rawKey);
  switch (key) {
    case "Alt":
      source.alt = false;
      break;
    case "Shift":
      source.shift = false;
      break;
    case "Control":
      source.ctrl = false;
      break;
    case "Meta":
      source.meta = false;
      break;
  }
  source.pressed.delete(key);
  const { modifiers } = source;
  const unmodifiedText = getKeyEventUnmodifiedText(key, source);
  const text = getKeyEventText(code ?? "", source) ?? unmodifiedText;
  return __privateGet(this, _context2).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
    type: "keyUp",
    windowsVirtualKeyCode: USKeyboardLayout_js_1.KeyToKeyCode[key],
    key,
    code,
    text,
    unmodifiedText,
    location: location < 3 ? location : void 0,
    isSystemKey: source.alt || void 0,
    isKeypad: location === 3,
    modifiers
  });
};
__publicField(ActionDispatcher, "isMacOS", async (context) => {
  const result = await (await context.getOrCreateSandbox(void 0)).callFunction(IS_MAC_DECL, { type: "undefined" }, [], false, "none", {});
  (0, assert_js_1$4.assert)(result.type !== "exception");
  (0, assert_js_1$4.assert)(result.result.type === "boolean");
  return result.result.value;
});
ActionDispatcher$1.ActionDispatcher = ActionDispatcher;
const getKeyEventUnmodifiedText = (key, source) => {
  if (key === "Enter") {
    return "\r";
  }
  return [...key].length === 1 ? source.shift ? key.toLocaleUpperCase("en-US") : key : void 0;
};
const getKeyEventText = (code, source) => {
  if (source.ctrl) {
    switch (code) {
      case "Digit2":
        if (source.shift) {
          return "\0";
        }
        break;
      case "KeyA":
        return "";
      case "KeyB":
        return "";
      case "KeyC":
        return "";
      case "KeyD":
        return "";
      case "KeyE":
        return "";
      case "KeyF":
        return "";
      case "KeyG":
        return "\x07";
      case "KeyH":
        return "\b";
      case "KeyI":
        return "	";
      case "KeyJ":
        return "\n";
      case "KeyK":
        return "\v";
      case "KeyL":
        return "\f";
      case "KeyM":
        return "\r";
      case "KeyN":
        return "";
      case "KeyO":
        return "";
      case "KeyP":
        return "";
      case "KeyQ":
        return "";
      case "KeyR":
        return "";
      case "KeyS":
        return "";
      case "KeyT":
        return "";
      case "KeyU":
        return "";
      case "KeyV":
        return "";
      case "KeyW":
        return "";
      case "KeyX":
        return "";
      case "KeyY":
        return "";
      case "KeyZ":
        return "";
      case "BracketLeft":
        return "\x1B";
      case "Backslash":
        return "";
      case "BracketRight":
        return "";
      case "Digit6":
        if (source.shift) {
          return "";
        }
        break;
      case "Minus":
        return "";
    }
    return "";
  }
  if (source.alt) {
    return "";
  }
  return;
};
function getCdpButton(button) {
  switch (button) {
    case 0:
      return "left";
    case 1:
      return "middle";
    case 2:
      return "right";
    case 3:
      return "back";
    case 4:
      return "forward";
    default:
      return "none";
  }
}
function getTilt(action) {
  const altitudeAngle = action.altitudeAngle ?? 0;
  const azimuthAngle = action.azimuthAngle ?? 0;
  let tiltXRadians = 0;
  let tiltYRadians = 0;
  if (altitudeAngle === 0) {
    if (azimuthAngle === 0 || azimuthAngle === 2 * Math.PI) {
      tiltXRadians = Math.PI / 2;
    }
    if (azimuthAngle === Math.PI / 2) {
      tiltYRadians = Math.PI / 2;
    }
    if (azimuthAngle === Math.PI) {
      tiltXRadians = -Math.PI / 2;
    }
    if (azimuthAngle === 3 * Math.PI / 2) {
      tiltYRadians = -Math.PI / 2;
    }
    if (azimuthAngle > 0 && azimuthAngle < Math.PI / 2) {
      tiltXRadians = Math.PI / 2;
      tiltYRadians = Math.PI / 2;
    }
    if (azimuthAngle > Math.PI / 2 && azimuthAngle < Math.PI) {
      tiltXRadians = -Math.PI / 2;
      tiltYRadians = Math.PI / 2;
    }
    if (azimuthAngle > Math.PI && azimuthAngle < 3 * Math.PI / 2) {
      tiltXRadians = -Math.PI / 2;
      tiltYRadians = -Math.PI / 2;
    }
    if (azimuthAngle > 3 * Math.PI / 2 && azimuthAngle < 2 * Math.PI) {
      tiltXRadians = Math.PI / 2;
      tiltYRadians = -Math.PI / 2;
    }
  }
  if (altitudeAngle !== 0) {
    const tanAlt = Math.tan(altitudeAngle);
    tiltXRadians = Math.atan(Math.cos(azimuthAngle) / tanAlt);
    tiltYRadians = Math.atan(Math.sin(azimuthAngle) / tanAlt);
  }
  const factor = 180 / Math.PI;
  return {
    tiltX: Math.round(tiltXRadians * factor),
    tiltY: Math.round(tiltYRadians * factor)
  };
}
function getRadii(width, height) {
  return {
    radiusX: width ? width / 2 : 0.5,
    radiusY: height ? height / 2 : 0.5
  };
}
var InputStateManager$1 = {};
var InputState$1 = {};
var Mutex$1 = {};
Object.defineProperty(Mutex$1, "__esModule", { value: true });
Mutex$1.Mutex = void 0;
class Mutex {
  constructor() {
    __privateAdd(this, _release);
    __privateAdd(this, _locked, false);
    __privateAdd(this, _acquirers, []);
  }
  // This is FIFO.
  acquire() {
    const state = { resolved: false };
    if (__privateGet(this, _locked)) {
      return new Promise((resolve) => {
        __privateGet(this, _acquirers).push(() => resolve(__privateMethod(this, _release, release_fn).bind(this, state)));
      });
    }
    __privateSet(this, _locked, true);
    return Promise.resolve(__privateMethod(this, _release, release_fn).bind(this, state));
  }
  async run(action) {
    const release = await this.acquire();
    try {
      const result = await action();
      return result;
    } finally {
      release();
    }
  }
}
_locked = new WeakMap();
_acquirers = new WeakMap();
_release = new WeakSet();
release_fn = function(state) {
  if (state.resolved) {
    throw new Error("Cannot release more than once.");
  }
  state.resolved = true;
  const resolve = __privateGet(this, _acquirers).shift();
  if (!resolve) {
    __privateSet(this, _locked, false);
    return;
  }
  resolve();
};
Mutex$1.Mutex = Mutex;
Object.defineProperty(InputState$1, "__esModule", { value: true });
InputState$1.InputState = void 0;
const protocol_js_1$b = protocol;
const Mutex_js_1 = Mutex$1;
const InputSource_js_1 = InputSource;
class InputState {
  constructor() {
    __publicField(this, "cancelList", []);
    __privateAdd(this, _sources, /* @__PURE__ */ new Map());
    __privateAdd(this, _mutex, new Mutex_js_1.Mutex());
  }
  getOrCreate(id, type, subtype) {
    let source = __privateGet(this, _sources).get(id);
    if (!source) {
      switch (type) {
        case "none":
          source = new InputSource_js_1.NoneSource();
          break;
        case "key":
          source = new InputSource_js_1.KeySource();
          break;
        case "pointer": {
          let pointerId = subtype === "mouse" ? 0 : 2;
          const pointerIds = /* @__PURE__ */ new Set();
          for (const [, source2] of __privateGet(this, _sources)) {
            if (source2.type === "pointer") {
              pointerIds.add(source2.pointerId);
            }
          }
          while (pointerIds.has(pointerId)) {
            ++pointerId;
          }
          source = new InputSource_js_1.PointerSource(pointerId, subtype);
          break;
        }
        case "wheel":
          source = new InputSource_js_1.WheelSource();
          break;
        default:
          throw new protocol_js_1$b.InvalidArgumentException(`Expected "${"none"}", "${"key"}", "${"pointer"}", or "${"wheel"}". Found unknown source type ${type}.`);
      }
      __privateGet(this, _sources).set(id, source);
      return source;
    }
    if (source.type !== type) {
      throw new protocol_js_1$b.InvalidArgumentException(`Input source type of ${id} is ${source.type}, but received ${type}.`);
    }
    return source;
  }
  get(id) {
    const source = __privateGet(this, _sources).get(id);
    if (!source) {
      throw new protocol_js_1$b.UnknownErrorException(`Internal error.`);
    }
    return source;
  }
  getGlobalKeyState() {
    const state = new InputSource_js_1.KeySource();
    for (const [, source] of __privateGet(this, _sources)) {
      if (source.type !== "key") {
        continue;
      }
      for (const pressed of source.pressed) {
        state.pressed.add(pressed);
      }
      state.alt || (state.alt = source.alt);
      state.ctrl || (state.ctrl = source.ctrl);
      state.meta || (state.meta = source.meta);
      state.shift || (state.shift = source.shift);
    }
    return state;
  }
  get queue() {
    return __privateGet(this, _mutex);
  }
}
_sources = new WeakMap();
_mutex = new WeakMap();
InputState$1.InputState = InputState;
Object.defineProperty(InputStateManager$1, "__esModule", { value: true });
InputStateManager$1.InputStateManager = void 0;
const assert_js_1$3 = assert$1;
const InputState_js_1 = InputState$1;
class InputStateManager extends WeakMap {
  get(context) {
    (0, assert_js_1$3.assert)(context.isTopLevelContext());
    if (!this.has(context)) {
      this.set(context, new InputState_js_1.InputState());
    }
    return super.get(context);
  }
}
InputStateManager$1.InputStateManager = InputStateManager;
Object.defineProperty(InputProcessor$1, "__esModule", { value: true });
InputProcessor$1.InputProcessor = void 0;
const protocol_js_1$a = protocol;
const assert_js_1$2 = assert$1;
const ActionDispatcher_js_1 = ActionDispatcher$1;
const InputStateManager_js_1 = InputStateManager$1;
class InputProcessor {
  constructor(browsingContextStorage, realmStorage) {
    __privateAdd(this, _getActionsByTick);
    __privateAdd(this, _browsingContextStorage5, void 0);
    __privateAdd(this, _realmStorage5, void 0);
    __privateAdd(this, _inputStateManager, new InputStateManager_js_1.InputStateManager());
    __privateSet(this, _browsingContextStorage5, browsingContextStorage);
    __privateSet(this, _realmStorage5, realmStorage);
  }
  async performActions(params) {
    const context = __privateGet(this, _browsingContextStorage5).getContext(params.context);
    const inputState = __privateGet(this, _inputStateManager).get(context.top);
    const actionsByTick = __privateMethod(this, _getActionsByTick, getActionsByTick_fn).call(this, params, inputState);
    const dispatcher = new ActionDispatcher_js_1.ActionDispatcher(inputState, context, await ActionDispatcher_js_1.ActionDispatcher.isMacOS(context).catch(() => false));
    await dispatcher.dispatchActions(actionsByTick);
    return {};
  }
  async releaseActions(params) {
    const context = __privateGet(this, _browsingContextStorage5).getContext(params.context);
    const topContext = context.top;
    const inputState = __privateGet(this, _inputStateManager).get(topContext);
    const dispatcher = new ActionDispatcher_js_1.ActionDispatcher(inputState, context, await ActionDispatcher_js_1.ActionDispatcher.isMacOS(context).catch(() => false));
    await dispatcher.dispatchTickActions(inputState.cancelList.reverse());
    __privateGet(this, _inputStateManager).delete(topContext);
    return {};
  }
  async setFiles(params) {
    const realm = __privateGet(this, _realmStorage5).findRealm({
      browsingContextId: params.context
    });
    if (realm === void 0) {
      throw new protocol_js_1$a.NoSuchFrameException(`Could not find browsingContext ${params.context}`);
    }
    let isFileInput;
    try {
      const result = await realm.callFunction(String(function getFiles() {
        return this instanceof HTMLInputElement && this.type === "file" && !this.disabled;
      }), params.element, [], false, "none", {}, false);
      (0, assert_js_1$2.assert)(result.type === "success");
      (0, assert_js_1$2.assert)(result.result.type === "boolean");
      isFileInput = result.result.value;
    } catch {
      throw new protocol_js_1$a.NoSuchElementException(`Could not find element ${params.element.sharedId}`);
    }
    if (!isFileInput) {
      throw new protocol_js_1$a.UnableToSetFileInputException(`Element ${params.element.sharedId} is not a mutable file input.`);
    }
    const paths = [];
    for (let i = 0; i < params.files.length; ++i) {
      const result = await realm.callFunction(String(function getFiles(index) {
        if (!this.files) {
          return null;
        }
        return this.files.item(index);
      }), params.element, [{ type: "number", value: 0 }], false, "root", {}, false);
      (0, assert_js_1$2.assert)(result.type === "success");
      if (result.result.type !== "object") {
        break;
      }
      const { handle } = result.result;
      (0, assert_js_1$2.assert)(handle !== void 0);
      const { path } = await realm.cdpClient.sendCommand("DOM.getFileInfo", {
        objectId: handle
      });
      paths.push(path);
      void realm.disown(handle).catch(void 0);
    }
    paths.sort();
    const sortedFiles = [...params.files].sort();
    if (paths.length !== params.files.length || sortedFiles.some((path, index) => {
      return paths[index] !== path;
    })) {
      const { objectId } = await realm.deserializeForCdp(params.element);
      (0, assert_js_1$2.assert)(objectId !== void 0);
      await realm.cdpClient.sendCommand("DOM.setFileInputFiles", {
        files: params.files,
        objectId
      });
    } else {
      await realm.callFunction(String(function dispatchEvent() {
        this.dispatchEvent(new Event("cancel", {
          bubbles: true
        }));
      }), params.element, [], false, "none", {}, false);
    }
    return {};
  }
}
_browsingContextStorage5 = new WeakMap();
_realmStorage5 = new WeakMap();
_inputStateManager = new WeakMap();
_getActionsByTick = new WeakSet();
getActionsByTick_fn = function(params, inputState) {
  var _a3;
  const actionsByTick = [];
  for (const action of params.actions) {
    switch (action.type) {
      case "pointer": {
        action.parameters ?? (action.parameters = {
          pointerType: "mouse"
          /* Input.PointerType.Mouse */
        });
        (_a3 = action.parameters).pointerType ?? (_a3.pointerType = "mouse");
        const source = inputState.getOrCreate(action.id, "pointer", action.parameters.pointerType);
        if (source.subtype !== action.parameters.pointerType) {
          throw new protocol_js_1$a.InvalidArgumentException(`Expected input source ${action.id} to be ${source.subtype}; got ${action.parameters.pointerType}.`);
        }
        break;
      }
      default:
        inputState.getOrCreate(action.id, action.type);
    }
    const actions = action.actions.map((item) => ({
      id: action.id,
      action: item
    }));
    for (let i = 0; i < actions.length; i++) {
      if (actionsByTick.length === i) {
        actionsByTick.push([]);
      }
      actionsByTick[i].push(actions[i]);
    }
  }
  return actionsByTick;
};
InputProcessor$1.InputProcessor = InputProcessor;
var NetworkProcessor$1 = {};
var NetworkStorage$1 = {};
var UrlPattern = {};
var M = Object.defineProperty;
var Pe = Object.getOwnPropertyDescriptor;
var Re = Object.getOwnPropertyNames;
var Ee = Object.prototype.hasOwnProperty;
var Oe = (e, t) => {
  for (var r in t)
    M(e, r, { get: t[r], enumerable: true });
}, ke = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of Re(t))
      !Ee.call(e, a) && a !== r && M(e, a, { get: () => t[a], enumerable: !(n = Pe(t, a)) || n.enumerable });
  return e;
};
var Te = (e) => ke(M({}, "__esModule", { value: true }), e);
var Ne = {};
Oe(Ne, { URLPattern: () => Y });
var urlpattern = Te(Ne);
var R = class {
  constructor(t, r, n, a, c, l) {
    __publicField(this, "type", 3);
    __publicField(this, "name", "");
    __publicField(this, "prefix", "");
    __publicField(this, "value", "");
    __publicField(this, "suffix", "");
    __publicField(this, "modifier", 3);
    this.type = t, this.name = r, this.prefix = n, this.value = a, this.suffix = c, this.modifier = l;
  }
  hasCustomName() {
    return this.name !== "" && typeof this.name != "number";
  }
}, Ae = /[$_\p{ID_Start}]/u, ye = /[$_\u200C\u200D\p{ID_Continue}]/u, v = ".*";
function we(e, t) {
  return (t ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(e);
}
function D(e, t = false) {
  let r = [], n = 0;
  for (; n < e.length; ) {
    let a = e[n], c = function(l) {
      if (!t)
        throw new TypeError(l);
      r.push({ type: "INVALID_CHAR", index: n, value: e[n++] });
    };
    if (a === "*") {
      r.push({ type: "ASTERISK", index: n, value: e[n++] });
      continue;
    }
    if (a === "+" || a === "?") {
      r.push({ type: "OTHER_MODIFIER", index: n, value: e[n++] });
      continue;
    }
    if (a === "\\") {
      r.push({ type: "ESCAPED_CHAR", index: n++, value: e[n++] });
      continue;
    }
    if (a === "{") {
      r.push({ type: "OPEN", index: n, value: e[n++] });
      continue;
    }
    if (a === "}") {
      r.push({ type: "CLOSE", index: n, value: e[n++] });
      continue;
    }
    if (a === ":") {
      let l = "", s = n + 1;
      for (; s < e.length; ) {
        let i = e.substr(s, 1);
        if (s === n + 1 && Ae.test(i) || s !== n + 1 && ye.test(i)) {
          l += e[s++];
          continue;
        }
        break;
      }
      if (!l) {
        c(`Missing parameter name at ${n}`);
        continue;
      }
      r.push({ type: "NAME", index: n, value: l }), n = s;
      continue;
    }
    if (a === "(") {
      let l = 1, s = "", i = n + 1, o = false;
      if (e[i] === "?") {
        c(`Pattern cannot start with "?" at ${i}`);
        continue;
      }
      for (; i < e.length; ) {
        if (!we(e[i], false)) {
          c(`Invalid character '${e[i]}' at ${i}.`), o = true;
          break;
        }
        if (e[i] === "\\") {
          s += e[i++] + e[i++];
          continue;
        }
        if (e[i] === ")") {
          if (l--, l === 0) {
            i++;
            break;
          }
        } else if (e[i] === "(" && (l++, e[i + 1] !== "?")) {
          c(`Capturing groups are not allowed at ${i}`), o = true;
          break;
        }
        s += e[i++];
      }
      if (o)
        continue;
      if (l) {
        c(`Unbalanced pattern at ${n}`);
        continue;
      }
      if (!s) {
        c(`Missing pattern at ${n}`);
        continue;
      }
      r.push({ type: "REGEX", index: n, value: s }), n = i;
      continue;
    }
    r.push({ type: "CHAR", index: n, value: e[n++] });
  }
  return r.push({ type: "END", index: n, value: "" }), r;
}
function F(e, t = {}) {
  let r = D(e);
  t.delimiter ?? (t.delimiter = "/#?"), t.prefixes ?? (t.prefixes = "./");
  let n = `[^${S(t.delimiter)}]+?`, a = [], c = 0, l = 0, i = /* @__PURE__ */ new Set(), o = (h) => {
    if (l < r.length && r[l].type === h)
      return r[l++].value;
  }, f = () => o("OTHER_MODIFIER") ?? o("ASTERISK"), d = (h) => {
    let u = o(h);
    if (u !== void 0)
      return u;
    let { type: p, index: A } = r[l];
    throw new TypeError(`Unexpected ${p} at ${A}, expected ${h}`);
  }, T = () => {
    let h = "", u;
    for (; u = o("CHAR") ?? o("ESCAPED_CHAR"); )
      h += u;
    return h;
  }, xe = (h) => h, L = t.encodePart || xe, I = "", U = (h) => {
    I += h;
  }, $ = () => {
    I.length && (a.push(new R(3, "", "", L(I), "", 3)), I = "");
  }, X = (h, u, p, A, Z) => {
    let g = 3;
    switch (Z) {
      case "?":
        g = 1;
        break;
      case "*":
        g = 0;
        break;
      case "+":
        g = 2;
        break;
    }
    if (!u && !p && g === 3) {
      U(h);
      return;
    }
    if ($(), !u && !p) {
      if (!h)
        return;
      a.push(new R(3, "", "", L(h), "", g));
      return;
    }
    let m;
    p ? p === "*" ? m = v : m = p : m = n;
    let O = 2;
    m === n ? (O = 1, m = "") : m === v && (O = 0, m = "");
    let P;
    if (u ? P = u : p && (P = c++), i.has(P))
      throw new TypeError(`Duplicate name '${P}'.`);
    i.add(P), a.push(new R(O, P, L(h), m, L(A), g));
  };
  for (; l < r.length; ) {
    let h = o("CHAR"), u = o("NAME"), p = o("REGEX");
    if (!u && !p && (p = o("ASTERISK")), u || p) {
      let g = h ?? "";
      t.prefixes.indexOf(g) === -1 && (U(g), g = ""), $();
      let m = f();
      X(g, u, p, "", m);
      continue;
    }
    let A = h ?? o("ESCAPED_CHAR");
    if (A) {
      U(A);
      continue;
    }
    if (o("OPEN")) {
      let g = T(), m = o("NAME"), O = o("REGEX");
      !m && !O && (O = o("ASTERISK"));
      let P = T();
      d("CLOSE");
      let be = f();
      X(g, m, O, P, be);
      continue;
    }
    $(), d("END");
  }
  return a;
}
function S(e) {
  return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
function B(e) {
  return e && e.ignoreCase ? "ui" : "u";
}
function q(e, t, r) {
  return W(F(e, r), t, r);
}
function k(e) {
  switch (e) {
    case 0:
      return "*";
    case 1:
      return "?";
    case 2:
      return "+";
    case 3:
      return "";
  }
}
function W(e, t, r = {}) {
  r.delimiter ?? (r.delimiter = "/#?"), r.prefixes ?? (r.prefixes = "./"), r.sensitive ?? (r.sensitive = false), r.strict ?? (r.strict = false), r.end ?? (r.end = true), r.start ?? (r.start = true), r.endsWith = "";
  let n = r.start ? "^" : "";
  for (let s of e) {
    if (s.type === 3) {
      s.modifier === 3 ? n += S(s.value) : n += `(?:${S(s.value)})${k(s.modifier)}`;
      continue;
    }
    t && t.push(s.name);
    let i = `[^${S(r.delimiter)}]+?`, o = s.value;
    if (s.type === 1 ? o = i : s.type === 0 && (o = v), !s.prefix.length && !s.suffix.length) {
      s.modifier === 3 || s.modifier === 1 ? n += `(${o})${k(s.modifier)}` : n += `((?:${o})${k(s.modifier)})`;
      continue;
    }
    if (s.modifier === 3 || s.modifier === 1) {
      n += `(?:${S(s.prefix)}(${o})${S(s.suffix)})`, n += k(s.modifier);
      continue;
    }
    n += `(?:${S(s.prefix)}`, n += `((?:${o})(?:`, n += S(s.suffix), n += S(s.prefix), n += `(?:${o}))*)${S(s.suffix)})`, s.modifier === 0 && (n += "?");
  }
  let a = `[${S(r.endsWith)}]|$`, c = `[${S(r.delimiter)}]`;
  if (r.end)
    return r.strict || (n += `${c}?`), r.endsWith.length ? n += `(?=${a})` : n += "$", new RegExp(n, B(r));
  r.strict || (n += `(?:${c}(?=${a}))?`);
  let l = false;
  if (e.length) {
    let s = e[e.length - 1];
    s.type === 3 && s.modifier === 3 && (l = r.delimiter.indexOf(s) > -1);
  }
  return l || (n += `(?=${c}|${a})`), new RegExp(n, B(r));
}
var x = { delimiter: "", prefixes: "", sensitive: true, strict: true }, J = { delimiter: ".", prefixes: "", sensitive: true, strict: true }, Q = { delimiter: "/", prefixes: "/", sensitive: true, strict: true };
function ee(e, t) {
  return e.length ? e[0] === "/" ? true : !t || e.length < 2 ? false : (e[0] == "\\" || e[0] == "{") && e[1] == "/" : false;
}
function te(e, t) {
  return e.startsWith(t) ? e.substring(t.length, e.length) : e;
}
function Ce(e, t) {
  return e.endsWith(t) ? e.substr(0, e.length - t.length) : e;
}
function _(e) {
  return !e || e.length < 2 ? false : e[0] === "[" || (e[0] === "\\" || e[0] === "{") && e[1] === "[";
}
var re = ["ftp", "file", "http", "https", "ws", "wss"];
function N(e) {
  if (!e)
    return true;
  for (let t of re)
    if (e.test(t))
      return true;
  return false;
}
function ne(e, t) {
  if (e = te(e, "#"), t || e === "")
    return e;
  let r = new URL("https://example.com");
  return r.hash = e, r.hash ? r.hash.substring(1, r.hash.length) : "";
}
function se(e, t) {
  if (e = te(e, "?"), t || e === "")
    return e;
  let r = new URL("https://example.com");
  return r.search = e, r.search ? r.search.substring(1, r.search.length) : "";
}
function ie(e, t) {
  return t || e === "" ? e : _(e) ? K(e) : j(e);
}
function ae(e, t) {
  if (t || e === "")
    return e;
  let r = new URL("https://example.com");
  return r.password = e, r.password;
}
function oe(e, t) {
  if (t || e === "")
    return e;
  let r = new URL("https://example.com");
  return r.username = e, r.username;
}
function ce(e, t, r) {
  if (r || e === "")
    return e;
  if (t && !re.includes(t))
    return new URL(`${t}:${e}`).pathname;
  let n = e[0] == "/";
  return e = new URL(n ? e : "/-" + e, "https://example.com").pathname, n || (e = e.substring(2, e.length)), e;
}
function le(e, t, r) {
  return z(t) === e && (e = ""), r || e === "" ? e : G(e);
}
function fe(e, t) {
  return e = Ce(e, ":"), t || e === "" ? e : y(e);
}
function z(e) {
  switch (e) {
    case "ws":
    case "http":
      return "80";
    case "wws":
    case "https":
      return "443";
    case "ftp":
      return "21";
    default:
      return "";
  }
}
function y(e) {
  if (e === "")
    return e;
  if (/^[-+.A-Za-z0-9]*$/.test(e))
    return e.toLowerCase();
  throw new TypeError(`Invalid protocol '${e}'.`);
}
function he(e) {
  if (e === "")
    return e;
  let t = new URL("https://example.com");
  return t.username = e, t.username;
}
function ue(e) {
  if (e === "")
    return e;
  let t = new URL("https://example.com");
  return t.password = e, t.password;
}
function j(e) {
  if (e === "")
    return e;
  if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e))
    throw new TypeError(`Invalid hostname '${e}'`);
  let t = new URL("https://example.com");
  return t.hostname = e, t.hostname;
}
function K(e) {
  if (e === "")
    return e;
  if (/[^0-9a-fA-F[\]:]/g.test(e))
    throw new TypeError(`Invalid IPv6 hostname '${e}'`);
  return e.toLowerCase();
}
function G(e) {
  if (e === "" || /^[0-9]*$/.test(e) && parseInt(e) <= 65535)
    return e;
  throw new TypeError(`Invalid port '${e}'.`);
}
function de(e) {
  if (e === "")
    return e;
  let t = new URL("https://example.com");
  return t.pathname = e[0] !== "/" ? "/-" + e : e, e[0] !== "/" ? t.pathname.substring(2, t.pathname.length) : t.pathname;
}
function pe(e) {
  return e === "" ? e : new URL(`data:${e}`).pathname;
}
function ge(e) {
  if (e === "")
    return e;
  let t = new URL("https://example.com");
  return t.search = e, t.search.substring(1, t.search.length);
}
function me(e) {
  if (e === "")
    return e;
  let t = new URL("https://example.com");
  return t.hash = e, t.hash.substring(1, t.hash.length);
}
var H = (_f2 = class {
  constructor(t) {
    __privateAdd(this, _r);
    __privateAdd(this, _R);
    __privateAdd(this, _b2);
    __privateAdd(this, _u);
    __privateAdd(this, _m);
    __privateAdd(this, _a2);
    __privateAdd(this, _P);
    __privateAdd(this, _E);
    __privateAdd(this, _S);
    __privateAdd(this, _O);
    __privateAdd(this, _k);
    __privateAdd(this, _x2);
    __privateAdd(this, _h2);
    __privateAdd(this, _f);
    __privateAdd(this, _T);
    __privateAdd(this, _A);
    __privateAdd(this, _y2);
    __privateAdd(this, _w);
    __privateAdd(this, _c2);
    __privateAdd(this, _C);
    __privateAdd(this, _i2, void 0);
    __privateAdd(this, _n, []);
    __privateAdd(this, _t, {});
    __privateAdd(this, _e2, 0);
    __privateAdd(this, _s, 1);
    __privateAdd(this, _l, 0);
    __privateAdd(this, _o, 0);
    __privateAdd(this, _d2, 0);
    __privateAdd(this, _p, 0);
    __privateAdd(this, _g, false);
    __privateSet(this, _i2, t);
  }
  get result() {
    return __privateGet(this, _t);
  }
  parse() {
    for (__privateSet(this, _n, D(__privateGet(this, _i2), true)); __privateGet(this, _e2) < __privateGet(this, _n).length; __privateSet(this, _e2, __privateGet(this, _e2) + __privateGet(this, _s))) {
      if (__privateSet(this, _s, 1), __privateGet(this, _n)[__privateGet(this, _e2)].type === "END") {
        if (__privateGet(this, _o) === 0) {
          __privateMethod(this, _b2, b_fn).call(this), __privateMethod(this, _f, f_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 9, 1) : __privateMethod(this, _h2, h_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 8, 1) : __privateMethod(this, _r, r_fn).call(this, 7, 0);
          continue;
        } else if (__privateGet(this, _o) === 2) {
          __privateMethod(this, _u, u_fn).call(this, 5);
          continue;
        }
        __privateMethod(this, _r, r_fn).call(this, 10, 0);
        break;
      }
      if (__privateGet(this, _d2) > 0)
        if (__privateMethod(this, _A, A_fn).call(this))
          __privateSet(this, _d2, __privateGet(this, _d2) - 1);
        else
          continue;
      if (__privateMethod(this, _T, T_fn).call(this)) {
        __privateSet(this, _d2, __privateGet(this, _d2) + 1);
        continue;
      }
      switch (__privateGet(this, _o)) {
        case 0:
          __privateMethod(this, _P, P_fn).call(this) && __privateMethod(this, _u, u_fn).call(this, 1);
          break;
        case 1:
          if (__privateMethod(this, _P, P_fn).call(this)) {
            __privateMethod(this, _C, C_fn).call(this);
            let t = 7, r = 1;
            __privateMethod(this, _E, E_fn).call(this) ? (t = 2, r = 3) : __privateGet(this, _g) && (t = 2), __privateMethod(this, _r, r_fn).call(this, t, r);
          }
          break;
        case 2:
          __privateMethod(this, _S, S_fn).call(this) ? __privateMethod(this, _u, u_fn).call(this, 3) : (__privateMethod(this, _x2, x_fn).call(this) || __privateMethod(this, _h2, h_fn).call(this) || __privateMethod(this, _f, f_fn).call(this)) && __privateMethod(this, _u, u_fn).call(this, 5);
          break;
        case 3:
          __privateMethod(this, _O, O_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 4, 1) : __privateMethod(this, _S, S_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 5, 1);
          break;
        case 4:
          __privateMethod(this, _S, S_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 5, 1);
          break;
        case 5:
          __privateMethod(this, _y2, y_fn).call(this) ? __privateSet(this, _p, __privateGet(this, _p) + 1) : __privateMethod(this, _w, w_fn).call(this) && __privateSet(this, _p, __privateGet(this, _p) - 1), __privateMethod(this, _k, k_fn).call(this) && !__privateGet(this, _p) ? __privateMethod(this, _r, r_fn).call(this, 6, 1) : __privateMethod(this, _x2, x_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 7, 0) : __privateMethod(this, _h2, h_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 8, 1) : __privateMethod(this, _f, f_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 9, 1);
          break;
        case 6:
          __privateMethod(this, _x2, x_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 7, 0) : __privateMethod(this, _h2, h_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 8, 1) : __privateMethod(this, _f, f_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 9, 1);
          break;
        case 7:
          __privateMethod(this, _h2, h_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 8, 1) : __privateMethod(this, _f, f_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 9, 1);
          break;
        case 8:
          __privateMethod(this, _f, f_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 9, 1);
          break;
      }
    }
    __privateGet(this, _t).hostname !== void 0 && __privateGet(this, _t).port === void 0 && (__privateGet(this, _t).port = "");
  }
}, _i2 = new WeakMap(), _n = new WeakMap(), _t = new WeakMap(), _e2 = new WeakMap(), _s = new WeakMap(), _l = new WeakMap(), _o = new WeakMap(), _d2 = new WeakMap(), _p = new WeakMap(), _g = new WeakMap(), _r = new WeakSet(), r_fn = function(t, r) {
  var _a3, _b3, _c3;
  switch (__privateGet(this, _o)) {
    case 0:
      break;
    case 1:
      __privateGet(this, _t).protocol = __privateMethod(this, _c2, c_fn).call(this);
      break;
    case 2:
      break;
    case 3:
      __privateGet(this, _t).username = __privateMethod(this, _c2, c_fn).call(this);
      break;
    case 4:
      __privateGet(this, _t).password = __privateMethod(this, _c2, c_fn).call(this);
      break;
    case 5:
      __privateGet(this, _t).hostname = __privateMethod(this, _c2, c_fn).call(this);
      break;
    case 6:
      __privateGet(this, _t).port = __privateMethod(this, _c2, c_fn).call(this);
      break;
    case 7:
      __privateGet(this, _t).pathname = __privateMethod(this, _c2, c_fn).call(this);
      break;
    case 8:
      __privateGet(this, _t).search = __privateMethod(this, _c2, c_fn).call(this);
      break;
    case 9:
      __privateGet(this, _t).hash = __privateMethod(this, _c2, c_fn).call(this);
      break;
  }
  __privateGet(this, _o) !== 0 && t !== 10 && ([1, 2, 3, 4].includes(__privateGet(this, _o)) && [6, 7, 8, 9].includes(t) && ((_a3 = __privateGet(this, _t)).hostname ?? (_a3.hostname = "")), [1, 2, 3, 4, 5, 6].includes(__privateGet(this, _o)) && [8, 9].includes(t) && ((_b3 = __privateGet(this, _t)).pathname ?? (_b3.pathname = __privateGet(this, _g) ? "/" : "")), [1, 2, 3, 4, 5, 6, 7].includes(__privateGet(this, _o)) && t === 9 && ((_c3 = __privateGet(this, _t)).search ?? (_c3.search = ""))), __privateMethod(this, _R, R_fn).call(this, t, r);
}, _R = new WeakSet(), R_fn = function(t, r) {
  __privateSet(this, _o, t), __privateSet(this, _l, __privateGet(this, _e2) + r), __privateSet(this, _e2, __privateGet(this, _e2) + r), __privateSet(this, _s, 0);
}, _b2 = new WeakSet(), b_fn = function() {
  __privateSet(this, _e2, __privateGet(this, _l)), __privateSet(this, _s, 0);
}, _u = new WeakSet(), u_fn = function(t) {
  __privateMethod(this, _b2, b_fn).call(this), __privateSet(this, _o, t);
}, _m = new WeakSet(), m_fn = function(t) {
  return t < 0 && (t = __privateGet(this, _n).length - t), t < __privateGet(this, _n).length ? __privateGet(this, _n)[t] : __privateGet(this, _n)[__privateGet(this, _n).length - 1];
}, _a2 = new WeakSet(), a_fn = function(t, r) {
  let n = __privateMethod(this, _m, m_fn).call(this, t);
  return n.value === r && (n.type === "CHAR" || n.type === "ESCAPED_CHAR" || n.type === "INVALID_CHAR");
}, _P = new WeakSet(), P_fn = function() {
  return __privateMethod(this, _a2, a_fn).call(this, __privateGet(this, _e2), ":");
}, _E = new WeakSet(), E_fn = function() {
  return __privateMethod(this, _a2, a_fn).call(this, __privateGet(this, _e2) + 1, "/") && __privateMethod(this, _a2, a_fn).call(this, __privateGet(this, _e2) + 2, "/");
}, _S = new WeakSet(), S_fn = function() {
  return __privateMethod(this, _a2, a_fn).call(this, __privateGet(this, _e2), "@");
}, _O = new WeakSet(), O_fn = function() {
  return __privateMethod(this, _a2, a_fn).call(this, __privateGet(this, _e2), ":");
}, _k = new WeakSet(), k_fn = function() {
  return __privateMethod(this, _a2, a_fn).call(this, __privateGet(this, _e2), ":");
}, _x2 = new WeakSet(), x_fn = function() {
  return __privateMethod(this, _a2, a_fn).call(this, __privateGet(this, _e2), "/");
}, _h2 = new WeakSet(), h_fn = function() {
  if (__privateMethod(this, _a2, a_fn).call(this, __privateGet(this, _e2), "?"))
    return true;
  if (__privateGet(this, _n)[__privateGet(this, _e2)].value !== "?")
    return false;
  let t = __privateMethod(this, _m, m_fn).call(this, __privateGet(this, _e2) - 1);
  return t.type !== "NAME" && t.type !== "REGEX" && t.type !== "CLOSE" && t.type !== "ASTERISK";
}, _f = new WeakSet(), f_fn = function() {
  return __privateMethod(this, _a2, a_fn).call(this, __privateGet(this, _e2), "#");
}, _T = new WeakSet(), T_fn = function() {
  return __privateGet(this, _n)[__privateGet(this, _e2)].type == "OPEN";
}, _A = new WeakSet(), A_fn = function() {
  return __privateGet(this, _n)[__privateGet(this, _e2)].type == "CLOSE";
}, _y2 = new WeakSet(), y_fn = function() {
  return __privateMethod(this, _a2, a_fn).call(this, __privateGet(this, _e2), "[");
}, _w = new WeakSet(), w_fn = function() {
  return __privateMethod(this, _a2, a_fn).call(this, __privateGet(this, _e2), "]");
}, _c2 = new WeakSet(), c_fn = function() {
  let t = __privateGet(this, _n)[__privateGet(this, _e2)], r = __privateMethod(this, _m, m_fn).call(this, __privateGet(this, _l)).index;
  return __privateGet(this, _i2).substring(r, t.index);
}, _C = new WeakSet(), C_fn = function() {
  let t = {};
  Object.assign(t, x), t.encodePart = y;
  let r = q(__privateMethod(this, _c2, c_fn).call(this), void 0, t);
  __privateSet(this, _g, N(r));
}, _f2);
var V = ["protocol", "username", "password", "hostname", "port", "pathname", "search", "hash"], E = "*";
function Se(e, t) {
  if (typeof e != "string")
    throw new TypeError("parameter 1 is not of type 'string'.");
  let r = new URL(e, t);
  return { protocol: r.protocol.substring(0, r.protocol.length - 1), username: r.username, password: r.password, hostname: r.hostname, port: r.port, pathname: r.pathname, search: r.search !== "" ? r.search.substring(1, r.search.length) : void 0, hash: r.hash !== "" ? r.hash.substring(1, r.hash.length) : void 0 };
}
function b(e, t) {
  return t ? C(e) : e;
}
function w(e, t, r) {
  let n;
  if (typeof t.baseURL == "string")
    try {
      n = new URL(t.baseURL), t.protocol === void 0 && (e.protocol = b(n.protocol.substring(0, n.protocol.length - 1), r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && (e.username = b(n.username, r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && t.password === void 0 && (e.password = b(n.password, r)), t.protocol === void 0 && t.hostname === void 0 && (e.hostname = b(n.hostname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && (e.port = b(n.port, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && (e.pathname = b(n.pathname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && (e.search = b(n.search.substring(1, n.search.length), r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && t.hash === void 0 && (e.hash = b(n.hash.substring(1, n.hash.length), r));
    } catch {
      throw new TypeError(`invalid baseURL '${t.baseURL}'.`);
    }
  if (typeof t.protocol == "string" && (e.protocol = fe(t.protocol, r)), typeof t.username == "string" && (e.username = oe(t.username, r)), typeof t.password == "string" && (e.password = ae(t.password, r)), typeof t.hostname == "string" && (e.hostname = ie(t.hostname, r)), typeof t.port == "string" && (e.port = le(t.port, e.protocol, r)), typeof t.pathname == "string") {
    if (e.pathname = t.pathname, n && !ee(e.pathname, r)) {
      let a = n.pathname.lastIndexOf("/");
      a >= 0 && (e.pathname = b(n.pathname.substring(0, a + 1), r) + e.pathname);
    }
    e.pathname = ce(e.pathname, e.protocol, r);
  }
  return typeof t.search == "string" && (e.search = se(t.search, r)), typeof t.hash == "string" && (e.hash = ne(t.hash, r)), e;
}
function C(e) {
  return e.replace(/([+*?:{}()\\])/g, "\\$1");
}
function Le(e) {
  return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
function Ie(e, t) {
  t.delimiter ?? (t.delimiter = "/#?"), t.prefixes ?? (t.prefixes = "./"), t.sensitive ?? (t.sensitive = false), t.strict ?? (t.strict = false), t.end ?? (t.end = true), t.start ?? (t.start = true), t.endsWith = "";
  let r = ".*", n = `[^${Le(t.delimiter)}]+?`, a = /[$_\u200C\u200D\p{ID_Continue}]/u, c = "";
  for (let l = 0; l < e.length; ++l) {
    let s = e[l];
    if (s.type === 3) {
      if (s.modifier === 3) {
        c += C(s.value);
        continue;
      }
      c += `{${C(s.value)}}${k(s.modifier)}`;
      continue;
    }
    let i = s.hasCustomName(), o = !!s.suffix.length || !!s.prefix.length && (s.prefix.length !== 1 || !t.prefixes.includes(s.prefix)), f = l > 0 ? e[l - 1] : null, d = l < e.length - 1 ? e[l + 1] : null;
    if (!o && i && s.type === 1 && s.modifier === 3 && d && !d.prefix.length && !d.suffix.length)
      if (d.type === 3) {
        let T = d.value.length > 0 ? d.value[0] : "";
        o = a.test(T);
      } else
        o = !d.hasCustomName();
    if (!o && !s.prefix.length && f && f.type === 3) {
      let T = f.value[f.value.length - 1];
      o = t.prefixes.includes(T);
    }
    o && (c += "{"), c += C(s.prefix), i && (c += `:${s.name}`), s.type === 2 ? c += `(${s.value})` : s.type === 1 ? i || (c += `(${n})`) : s.type === 0 && (!i && (!f || f.type === 3 || f.modifier !== 3 || o || s.prefix !== "") ? c += "*" : c += `(${r})`), s.type === 1 && i && s.suffix.length && a.test(s.suffix[0]) && (c += "\\"), c += C(s.suffix), o && (c += "}"), s.modifier !== 3 && (c += k(s.modifier));
  }
  return c;
}
var Y = (_g2 = class {
  constructor(t = {}, r, n) {
    __privateAdd(this, _i3, void 0);
    __privateAdd(this, _n2, {});
    __privateAdd(this, _t2, {});
    __privateAdd(this, _e3, {});
    __privateAdd(this, _s2, {});
    __privateAdd(this, _l2, false);
    try {
      let a;
      if (typeof r == "string" ? a = r : n = r, typeof t == "string") {
        let i = new H(t);
        if (i.parse(), t = i.result, a === void 0 && typeof t.protocol != "string")
          throw new TypeError("A base URL must be provided for a relative constructor string.");
        t.baseURL = a;
      } else {
        if (!t || typeof t != "object")
          throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");
        if (a)
          throw new TypeError("parameter 1 is not of type 'string'.");
      }
      typeof n > "u" && (n = { ignoreCase: false });
      let c = { ignoreCase: n.ignoreCase === true }, l = { pathname: E, protocol: E, username: E, password: E, hostname: E, port: E, search: E, hash: E };
      __privateSet(this, _i3, w(l, t, true)), z(__privateGet(this, _i3).protocol) === __privateGet(this, _i3).port && (__privateGet(this, _i3).port = "");
      let s;
      for (s of V) {
        if (!(s in __privateGet(this, _i3)))
          continue;
        let i = {}, o = __privateGet(this, _i3)[s];
        switch (__privateGet(this, _t2)[s] = [], s) {
          case "protocol":
            Object.assign(i, x), i.encodePart = y;
            break;
          case "username":
            Object.assign(i, x), i.encodePart = he;
            break;
          case "password":
            Object.assign(i, x), i.encodePart = ue;
            break;
          case "hostname":
            Object.assign(i, J), _(o) ? i.encodePart = K : i.encodePart = j;
            break;
          case "port":
            Object.assign(i, x), i.encodePart = G;
            break;
          case "pathname":
            N(__privateGet(this, _n2).protocol) ? (Object.assign(i, Q, c), i.encodePart = de) : (Object.assign(i, x, c), i.encodePart = pe);
            break;
          case "search":
            Object.assign(i, x, c), i.encodePart = ge;
            break;
          case "hash":
            Object.assign(i, x, c), i.encodePart = me;
            break;
        }
        try {
          __privateGet(this, _s2)[s] = F(o, i), __privateGet(this, _n2)[s] = W(__privateGet(this, _s2)[s], __privateGet(this, _t2)[s], i), __privateGet(this, _e3)[s] = Ie(__privateGet(this, _s2)[s], i), __privateSet(this, _l2, __privateGet(this, _l2) || __privateGet(this, _s2)[s].some((f) => f.type === 2));
        } catch {
          throw new TypeError(`invalid ${s} pattern '${__privateGet(this, _i3)[s]}'.`);
        }
      }
    } catch (a) {
      throw new TypeError(`Failed to construct 'URLPattern': ${a.message}`);
    }
  }
  test(t = {}, r) {
    let n = { pathname: "", protocol: "", username: "", password: "", hostname: "", port: "", search: "", hash: "" };
    if (typeof t != "string" && r)
      throw new TypeError("parameter 1 is not of type 'string'.");
    if (typeof t > "u")
      return false;
    try {
      typeof t == "object" ? n = w(n, t, false) : n = w(n, Se(t, r), false);
    } catch {
      return false;
    }
    let a;
    for (a of V)
      if (!__privateGet(this, _n2)[a].exec(n[a]))
        return false;
    return true;
  }
  exec(t = {}, r) {
    let n = { pathname: "", protocol: "", username: "", password: "", hostname: "", port: "", search: "", hash: "" };
    if (typeof t != "string" && r)
      throw new TypeError("parameter 1 is not of type 'string'.");
    if (typeof t > "u")
      return;
    try {
      typeof t == "object" ? n = w(n, t, false) : n = w(n, Se(t, r), false);
    } catch {
      return null;
    }
    let a = {};
    r ? a.inputs = [t, r] : a.inputs = [t];
    let c;
    for (c of V) {
      let l = __privateGet(this, _n2)[c].exec(n[c]);
      if (!l)
        return null;
      let s = {};
      for (let [i, o] of __privateGet(this, _t2)[c].entries())
        if (typeof o == "string" || typeof o == "number") {
          let f = l[i + 1];
          s[o] = f;
        }
      a[c] = { input: n[c] ?? "", groups: s };
    }
    return a;
  }
  static compareComponent(t, r, n) {
    let a = (i, o) => {
      for (let f of ["type", "modifier", "prefix", "value", "suffix"]) {
        if (i[f] < o[f])
          return -1;
        if (i[f] === o[f])
          continue;
        return 1;
      }
      return 0;
    }, c = new R(3, "", "", "", "", 3), l = new R(0, "", "", "", "", 3), s = (i, o) => {
      let f = 0;
      for (; f < Math.min(i.length, o.length); ++f) {
        let d = a(i[f], o[f]);
        if (d)
          return d;
      }
      return i.length === o.length ? 0 : a(i[f] ?? c, o[f] ?? c);
    };
    return !__privateGet(r, _e3)[t] && !__privateGet(n, _e3)[t] ? 0 : __privateGet(r, _e3)[t] && !__privateGet(n, _e3)[t] ? s(__privateGet(r, _s2)[t], [l]) : !__privateGet(r, _e3)[t] && __privateGet(n, _e3)[t] ? s([l], __privateGet(n, _s2)[t]) : s(__privateGet(r, _s2)[t], __privateGet(n, _s2)[t]);
  }
  get protocol() {
    return __privateGet(this, _e3).protocol;
  }
  get username() {
    return __privateGet(this, _e3).username;
  }
  get password() {
    return __privateGet(this, _e3).password;
  }
  get hostname() {
    return __privateGet(this, _e3).hostname;
  }
  get port() {
    return __privateGet(this, _e3).port;
  }
  get pathname() {
    return __privateGet(this, _e3).pathname;
  }
  get search() {
    return __privateGet(this, _e3).search;
  }
  get hash() {
    return __privateGet(this, _e3).hash;
  }
  get hasRegExpGroups() {
    return __privateGet(this, _l2);
  }
}, _i3 = new WeakMap(), _n2 = new WeakMap(), _t2 = new WeakMap(), _e3 = new WeakMap(), _s2 = new WeakMap(), _l2 = new WeakMap(), _g2);
const { URLPattern } = urlpattern;
var urlpatternPolyfill = { URLPattern };
if (!globalThis.URLPattern) {
  globalThis.URLPattern = URLPattern;
}
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.URLPattern = void 0;
  const urlpattern_polyfill_1 = urlpatternPolyfill;
  Object.defineProperty(exports2, "URLPattern", { enumerable: true, get: function() {
    return urlpattern_polyfill_1.URLPattern;
  } });
  if ("URLPattern" in globalThis) {
    urlpattern_polyfill_1.URLPattern = globalThis.URLPattern;
  }
})(UrlPattern);
Object.defineProperty(NetworkStorage$1, "__esModule", { value: true });
NetworkStorage$1.NetworkStorage = void 0;
const protocol_js_1$9 = protocol;
const UrlPattern_js_1 = UrlPattern;
const uuid_js_1$1 = uuid;
const _NetworkStorage = class _NetworkStorage {
  constructor() {
    /**
     * A map from network request ID to Network Request objects.
     * Needed as long as information about requests comes from different events.
     */
    __privateAdd(this, _requestMap, /* @__PURE__ */ new Map());
    /** A map from intercept ID to track active network intercepts. */
    __privateAdd(this, _interceptMap, /* @__PURE__ */ new Map());
    /** A map from network request ID to track actively blocked requests. */
    __privateAdd(this, _blockedRequestMap, /* @__PURE__ */ new Map());
  }
  disposeRequestMap() {
    for (const request of __privateGet(this, _requestMap).values()) {
      request.dispose();
    }
    __privateGet(this, _requestMap).clear();
  }
  /**
   * Adds the given entry to the intercept map.
   * URL patterns are assumed to be parsed.
   *
   * @return The intercept ID.
   */
  addIntercept(value) {
    const interceptId = (0, uuid_js_1$1.uuidv4)();
    __privateGet(this, _interceptMap).set(interceptId, value);
    return interceptId;
  }
  /**
   * Removes the given intercept from the intercept map.
   * Throws NoSuchInterceptException if the intercept does not exist.
   */
  removeIntercept(intercept) {
    if (!__privateGet(this, _interceptMap).has(intercept)) {
      throw new protocol_js_1$9.NoSuchInterceptException(`Intercept '${intercept}' does not exist.`);
    }
    __privateGet(this, _interceptMap).delete(intercept);
  }
  /** Returns true if there's at least one added intercept. */
  hasIntercepts() {
    return __privateGet(this, _interceptMap).size > 0;
  }
  /** Gets parameters for CDP 'Fetch.enable' command from the intercept map. */
  getFetchEnableParams() {
    const patterns = [];
    for (const value of __privateGet(this, _interceptMap).values()) {
      for (const phase of value.phases) {
        const requestStage = _NetworkStorage.requestStageFromPhase(phase);
        if (value.urlPatterns.length === 0) {
          patterns.push({
            urlPattern: "*",
            requestStage
          });
          continue;
        }
        for (const urlPatternSpec of value.urlPatterns) {
          const urlPattern = _NetworkStorage.cdpFromSpecUrlPattern(urlPatternSpec);
          patterns.push({
            urlPattern,
            requestStage
          });
        }
      }
    }
    return {
      patterns,
      // If there's at least one intercept that requires auth, enable the
      // 'Fetch.authRequired' event.
      handleAuthRequests: [...__privateGet(this, _interceptMap).values()].some((param) => {
        return param.phases.includes(
          "authRequired"
          /* Network.InterceptPhase.AuthRequired */
        );
      })
    };
  }
  getRequest(id) {
    return __privateGet(this, _requestMap).get(id);
  }
  addRequest(request) {
    __privateGet(this, _requestMap).set(request.requestId, request);
  }
  deleteRequest(id) {
    const request = __privateGet(this, _requestMap).get(id);
    if (request) {
      request.dispose();
      __privateGet(this, _requestMap).delete(id);
    }
  }
  /** Returns true if there's at least one network request. */
  hasNetworkRequests() {
    return __privateGet(this, _requestMap).size > 0;
  }
  /** Returns true if there's at least one blocked network request. */
  hasBlockedRequests() {
    return __privateGet(this, _blockedRequestMap).size > 0;
  }
  /** Converts a URL pattern from the spec to a CDP URL pattern. */
  static cdpFromSpecUrlPattern(urlPattern) {
    switch (urlPattern.type) {
      case "string":
        return urlPattern.pattern;
      case "pattern":
        return _NetworkStorage.buildUrlPatternString(urlPattern);
    }
  }
  static buildUrlPatternString({ protocol: protocol2, hostname, port, pathname, search }) {
    if (!protocol2 && !hostname && !port && !pathname && !search) {
      return "*";
    }
    let url = "";
    if (protocol2) {
      url += protocol2;
      if (!protocol2.endsWith(":")) {
        url += ":";
      }
      if (_NetworkStorage.isSpecialScheme(protocol2)) {
        url += "//";
      }
    }
    if (hostname) {
      url += hostname;
    }
    if (port) {
      url += `:${port}`;
    }
    if (pathname) {
      if (!pathname.startsWith("/")) {
        url += "/";
      }
      url += pathname;
    }
    if (search) {
      if (!search.startsWith("?")) {
        url += "?";
      }
      url += search;
    }
    return url;
  }
  /**
   * Maps spec Network.InterceptPhase to CDP Fetch.RequestStage.
   * AuthRequired has no CDP equivalent..
   */
  static requestStageFromPhase(phase) {
    switch (phase) {
      case "beforeRequestSent":
        return "Request";
      case "responseStarted":
      case "authRequired":
        return "Response";
    }
  }
  /**
   * Returns true if the given protocol is special.
   * Special protocols are those that have a default port.
   *
   * Example inputs: 'http', 'http:'
   *
   * @see https://url.spec.whatwg.org/#special-scheme
   */
  static isSpecialScheme(protocol2) {
    return ["ftp", "file", "http", "https", "ws", "wss"].includes(protocol2.replace(/:$/, ""));
  }
  addBlockedRequest(requestId, value) {
    __privateGet(this, _blockedRequestMap).set(requestId, value);
  }
  removeBlockedRequest(requestId) {
    __privateGet(this, _blockedRequestMap).delete(requestId);
  }
  /**
   * Returns the blocked request associated with the given network ID, if any.
   */
  getBlockedRequest(networkId) {
    return __privateGet(this, _blockedRequestMap).get(networkId);
  }
  /** #@see https://w3c.github.io/webdriver-bidi/#get-the-network-intercepts */
  getNetworkIntercepts(requestId, phase) {
    const request = __privateGet(this, _requestMap).get(requestId);
    if (!request) {
      return [];
    }
    const interceptIds = [];
    for (const [interceptId, { phases, urlPatterns }] of __privateGet(this, _interceptMap).entries()) {
      if (phase && phases.includes(phase)) {
        if (urlPatterns.length === 0) {
          interceptIds.push(interceptId);
        } else if (urlPatterns.some((urlPattern) => _NetworkStorage.matchUrlPattern(urlPattern, request.url))) {
          interceptIds.push(interceptId);
        }
      }
    }
    return interceptIds;
  }
  /** Matches the given URLPattern against the given URL. */
  static matchUrlPattern(urlPattern, url) {
    switch (urlPattern.type) {
      case "string":
        return urlPattern.pattern === url;
      case "pattern": {
        return new UrlPattern_js_1.URLPattern({
          protocol: urlPattern.protocol,
          hostname: urlPattern.hostname,
          port: urlPattern.port,
          pathname: urlPattern.pathname,
          search: urlPattern.search
        }).exec(url) !== null;
      }
    }
  }
};
_requestMap = new WeakMap();
_interceptMap = new WeakMap();
_blockedRequestMap = new WeakMap();
let NetworkStorage = _NetworkStorage;
NetworkStorage$1.NetworkStorage = NetworkStorage;
Object.defineProperty(NetworkProcessor$1, "__esModule", { value: true });
NetworkProcessor$1.NetworkProcessor = void 0;
const protocol_js_1$8 = protocol;
const assert_js_1$1 = assert$1;
const NetworkStorage_js_1$1 = NetworkStorage$1;
const NetworkUtils_js_1$1 = NetworkUtils;
const _NetworkProcessor = class _NetworkProcessor {
  constructor(browsingContextStorage, networkStorage) {
    /** Applies all existing network intercepts to all CDP targets concurrently. */
    __privateAdd(this, _fetchEnable);
    /** Removes all existing network intercepts from all CDP targets concurrently. */
    __privateAdd(this, _fetchDisable);
    /**
     * Either enables or disables the Fetch domain.
     *
     * If enabling, applies all existing network intercepts to all CDP targets.
     * If disabling, removes all existing network intercepts from all CDP targets.
     *
     * Disabling is only performed when there are no remaining intercepts or
     * // blocked requests.
     */
    __privateAdd(this, _fetchApply);
    /**
     * Returns the blocked request associated with the given network ID.
     * If none, throws a NoSuchRequestException.
     */
    __privateAdd(this, _getBlockedRequest);
    __privateAdd(this, _getRequestOrFail);
    __privateAdd(this, _browsingContextStorage6, void 0);
    __privateAdd(this, _networkStorage5, void 0);
    __privateSet(this, _browsingContextStorage6, browsingContextStorage);
    __privateSet(this, _networkStorage5, networkStorage);
  }
  async addIntercept(params) {
    if (params.phases.includes(
      "authRequired"
      /* Network.InterceptPhase.AuthRequired */
    ) && !params.phases.includes(
      "beforeRequestSent"
      /* Network.InterceptPhase.BeforeRequestSent */
    )) {
      params.phases.unshift(
        "beforeRequestSent"
        /* Network.InterceptPhase.BeforeRequestSent */
      );
    }
    const urlPatterns = params.urlPatterns ?? [];
    const parsedUrlPatterns = _NetworkProcessor.parseUrlPatterns(urlPatterns);
    const intercept = __privateGet(this, _networkStorage5).addIntercept({
      urlPatterns: parsedUrlPatterns,
      phases: params.phases
    });
    await __privateMethod(this, _fetchApply, fetchApply_fn).call(this);
    return {
      intercept
    };
  }
  async continueRequest(params) {
    const networkId = params.request;
    const { request: fetchId, phase } = __privateMethod(this, _getBlockedRequest, getBlockedRequest_fn).call(this, networkId);
    if (phase !== "beforeRequestSent") {
      throw new protocol_js_1$8.InvalidArgumentException(`Blocked request for network id '${networkId}' is not in 'BeforeRequestSent' phase`);
    }
    if (params.url !== void 0) {
      _NetworkProcessor.parseUrlString(params.url);
    }
    const { url, method, headers } = params;
    const requestHeaders = (0, NetworkUtils_js_1$1.cdpFetchHeadersFromBidiNetworkHeaders)(headers);
    const request = __privateMethod(this, _getRequestOrFail, getRequestOrFail_fn).call(this, networkId);
    await request.continueRequest(fetchId, url, method, requestHeaders);
    __privateGet(this, _networkStorage5).removeBlockedRequest(networkId);
    return {};
  }
  async continueResponse(params) {
    const networkId = params.request;
    const { request: fetchId, phase } = __privateMethod(this, _getBlockedRequest, getBlockedRequest_fn).call(this, networkId);
    if (phase === "beforeRequestSent") {
      throw new protocol_js_1$8.InvalidArgumentException(`Blocked request for network id '${networkId}' is in 'BeforeRequestSent' phase`);
    }
    const { statusCode, reasonPhrase, headers } = params;
    const responseHeaders = (0, NetworkUtils_js_1$1.cdpFetchHeadersFromBidiNetworkHeaders)(headers);
    const request = __privateMethod(this, _getRequestOrFail, getRequestOrFail_fn).call(this, networkId);
    await request.continueResponse(fetchId, statusCode, reasonPhrase, responseHeaders);
    __privateGet(this, _networkStorage5).removeBlockedRequest(networkId);
    return {};
  }
  async continueWithAuth(params) {
    const networkId = params.request;
    const { request: fetchId, phase } = __privateMethod(this, _getBlockedRequest, getBlockedRequest_fn).call(this, networkId);
    if (phase !== "authRequired") {
      throw new protocol_js_1$8.InvalidArgumentException(`Blocked request for network id '${networkId}' is not in 'AuthRequired' phase`);
    }
    const request = __privateMethod(this, _getRequestOrFail, getRequestOrFail_fn).call(this, networkId);
    let username;
    let password;
    if (params.action === "provideCredentials") {
      const { credentials } = params;
      username = credentials.username;
      password = credentials.password;
      (0, assert_js_1$1.assert)(credentials.type === "password", `Credentials type ${credentials.type} must be 'password'`);
    }
    const response = (0, NetworkUtils_js_1$1.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction)(params.action);
    await request.continueWithAuth(fetchId, response, username, password);
    return {};
  }
  async failRequest({ request: networkId }) {
    const { request: fetchId, phase } = __privateMethod(this, _getBlockedRequest, getBlockedRequest_fn).call(this, networkId);
    if (phase === "authRequired") {
      throw new protocol_js_1$8.InvalidArgumentException(`Blocked request for network id '${networkId}' is in 'AuthRequired' phase`);
    }
    const request = __privateMethod(this, _getRequestOrFail, getRequestOrFail_fn).call(this, networkId);
    await request.failRequest(fetchId, "Failed");
    __privateGet(this, _networkStorage5).removeBlockedRequest(networkId);
    return {};
  }
  async provideResponse(params) {
    const { statusCode, reasonPhrase, headers, body, request: networkId } = params;
    const { request: fetchId } = __privateMethod(this, _getBlockedRequest, getBlockedRequest_fn).call(this, networkId);
    const responseHeaders = (0, NetworkUtils_js_1$1.cdpFetchHeadersFromBidiNetworkHeaders)(headers);
    const request = __privateMethod(this, _getRequestOrFail, getRequestOrFail_fn).call(this, networkId);
    await request.provideResponse(
      fetchId,
      statusCode ?? request.statusCode,
      reasonPhrase,
      responseHeaders,
      body == null ? void 0 : body.value
      // TODO: Differ base64 / string
    );
    __privateGet(this, _networkStorage5).removeBlockedRequest(networkId);
    return {};
  }
  async removeIntercept(params) {
    __privateGet(this, _networkStorage5).removeIntercept(params.intercept);
    await __privateMethod(this, _fetchApply, fetchApply_fn).call(this);
    return {};
  }
  /**
   * Attempts to parse the given url.
   * Throws an InvalidArgumentException if the url is invalid.
   */
  static parseUrlString(url) {
    try {
      return new URL(url);
    } catch (error) {
      throw new protocol_js_1$8.InvalidArgumentException(`Invalid URL '${url}': ${error}`);
    }
  }
  static parseUrlPatterns(urlPatterns) {
    return urlPatterns.map((urlPattern) => {
      var _a3, _b3, _c3;
      switch (urlPattern.type) {
        case "string": {
          _NetworkProcessor.parseUrlString(urlPattern.pattern);
          return urlPattern;
        }
        case "pattern":
          if (urlPattern.protocol === void 0 && urlPattern.hostname === void 0 && urlPattern.port === void 0 && urlPattern.pathname === void 0 && urlPattern.search === void 0) {
            return urlPattern;
          }
          if (urlPattern.protocol === "") {
            throw new protocol_js_1$8.InvalidArgumentException(`URL pattern must specify a protocol`);
          }
          if (urlPattern.hostname === "") {
            throw new protocol_js_1$8.InvalidArgumentException(`URL pattern must specify a hostname`);
          }
          if ((((_a3 = urlPattern.hostname) == null ? void 0 : _a3.length) ?? 0) > 0) {
            if ((_b3 = urlPattern.protocol) == null ? void 0 : _b3.match(/^file/i)) {
              throw new protocol_js_1$8.InvalidArgumentException(`URL pattern protocol cannot be 'file'`);
            }
            if ((_c3 = urlPattern.hostname) == null ? void 0 : _c3.includes(":")) {
              throw new protocol_js_1$8.InvalidArgumentException(`URL pattern hostname must not contain a colon`);
            }
          }
          if (urlPattern.port === "") {
            throw new protocol_js_1$8.InvalidArgumentException(`URL pattern must specify a port`);
          }
          try {
            new URL(NetworkStorage_js_1$1.NetworkStorage.buildUrlPatternString(urlPattern));
          } catch (error) {
            throw new protocol_js_1$8.InvalidArgumentException(`${error}`);
          }
          return urlPattern;
      }
    });
  }
};
_browsingContextStorage6 = new WeakMap();
_networkStorage5 = new WeakMap();
_fetchEnable = new WeakSet();
fetchEnable_fn = async function() {
  await Promise.all(__privateGet(this, _browsingContextStorage6).getAllContexts().map(async (context) => {
    await context.cdpTarget.fetchEnable();
  }));
};
_fetchDisable = new WeakSet();
fetchDisable_fn = async function() {
  await Promise.all(__privateGet(this, _browsingContextStorage6).getAllContexts().map(async (context) => {
    await context.cdpTarget.fetchDisable();
  }));
};
_fetchApply = new WeakSet();
fetchApply_fn = async function() {
  if (__privateGet(this, _networkStorage5).hasIntercepts() || __privateGet(this, _networkStorage5).hasBlockedRequests() || __privateGet(this, _networkStorage5).hasNetworkRequests()) {
    await __privateMethod(this, _fetchEnable, fetchEnable_fn).call(this);
  } else {
    await __privateMethod(this, _fetchDisable, fetchDisable_fn).call(this);
  }
};
_getBlockedRequest = new WeakSet();
getBlockedRequest_fn = function(networkId) {
  const blockedRequest = __privateGet(this, _networkStorage5).getBlockedRequest(networkId);
  if (!blockedRequest) {
    throw new protocol_js_1$8.NoSuchRequestException(`No blocked request found for network id '${networkId}'`);
  }
  return blockedRequest;
};
_getRequestOrFail = new WeakSet();
getRequestOrFail_fn = function(id) {
  const request = __privateGet(this, _networkStorage5).getRequest(id);
  if (!request) {
    throw new protocol_js_1$8.NoSuchRequestException(`Network request with ID ${id} doesn't exist`);
  }
  return request;
};
let NetworkProcessor = _NetworkProcessor;
NetworkProcessor$1.NetworkProcessor = NetworkProcessor;
var PermissionsProcessor$1 = {};
Object.defineProperty(PermissionsProcessor$1, "__esModule", { value: true });
PermissionsProcessor$1.PermissionsProcessor = void 0;
const protocol_js_1$7 = protocol;
class PermissionsProcessor {
  constructor(browserCdpClient) {
    __privateAdd(this, _browserCdpClient5, void 0);
    __privateSet(this, _browserCdpClient5, browserCdpClient);
  }
  async setPermissions(params) {
    try {
      await __privateGet(this, _browserCdpClient5).sendCommand("Browser.setPermission", {
        origin: params.origin,
        permission: {
          name: params.descriptor.name
        },
        setting: params.state
      });
    } catch (err) {
      if (err.message === `Permission can't be granted to opaque origins.`) {
        return {};
      }
      throw new protocol_js_1$7.InvalidArgumentException(err.message);
    }
    return {};
  }
}
_browserCdpClient5 = new WeakMap();
PermissionsProcessor$1.PermissionsProcessor = PermissionsProcessor;
var PreloadScriptStorage$1 = {};
Object.defineProperty(PreloadScriptStorage$1, "__esModule", { value: true });
PreloadScriptStorage$1.PreloadScriptStorage = void 0;
class PreloadScriptStorage {
  constructor() {
    /** Tracks all BiDi preload scripts.  */
    __privateAdd(this, _scripts, /* @__PURE__ */ new Set());
  }
  /** Finds all entries that match the given filter. */
  find(filter) {
    if (!filter) {
      return [...__privateGet(this, _scripts)];
    }
    return [...__privateGet(this, _scripts)].filter((script) => {
      if (filter.id !== void 0 && filter.id !== script.id) {
        return false;
      }
      if (filter.targetId !== void 0 && !script.targetIds.has(filter.targetId)) {
        return false;
      }
      if (filter.global !== void 0 && // Global scripts have no contexts
      (filter.global && script.contexts !== void 0 || // Non global scripts always have contexts
      !filter.global && script.contexts === void 0)) {
        return false;
      }
      return true;
    });
  }
  add(preloadScript) {
    __privateGet(this, _scripts).add(preloadScript);
  }
  /** Deletes all BiDi preload script entries that match the given filter. */
  remove(filter) {
    for (const preloadScript of this.find(filter)) {
      __privateGet(this, _scripts).delete(preloadScript);
    }
  }
}
_scripts = new WeakMap();
PreloadScriptStorage$1.PreloadScriptStorage = PreloadScriptStorage;
var ScriptProcessor$1 = {};
var PreloadScript$1 = {};
Object.defineProperty(PreloadScript$1, "__esModule", { value: true });
PreloadScript$1.PreloadScript = void 0;
const uuid_js_1 = uuid;
const ChannelProxy_js_1 = ChannelProxy$1;
class PreloadScript {
  constructor(params, logger) {
    /**
     * String to be evaluated. Wraps user-provided function so that the following
     * steps are run:
     * 1. Create channels.
     * 2. Store the created channels in window.
     * 3. Call the user-provided function with channels as arguments.
     */
    __privateAdd(this, _getEvaluateString);
    /** BiDi ID, an automatically generated UUID. */
    __privateAdd(this, _id4, (0, uuid_js_1.uuidv4)());
    /** CDP preload scripts. */
    __privateAdd(this, _cdpPreloadScripts, []);
    /** The script itself, in a format expected by the spec i.e. a function. */
    __privateAdd(this, _functionDeclaration, void 0);
    /** Targets, in which the preload script is initialized. */
    __privateAdd(this, _targetIds, /* @__PURE__ */ new Set());
    /** Channels to be added as arguments to functionDeclaration. */
    __privateAdd(this, _channels, void 0);
    /** The script sandbox / world name. */
    __privateAdd(this, _sandbox, void 0);
    /** The browsing contexts to execute the preload scripts in, if any. */
    __privateAdd(this, _contexts, void 0);
    var _a3;
    __privateSet(this, _channels, ((_a3 = params.arguments) == null ? void 0 : _a3.map((a) => new ChannelProxy_js_1.ChannelProxy(a.value, logger))) ?? []);
    __privateSet(this, _functionDeclaration, params.functionDeclaration);
    __privateSet(this, _sandbox, params.sandbox);
    __privateSet(this, _contexts, params.contexts);
  }
  get id() {
    return __privateGet(this, _id4);
  }
  get targetIds() {
    return __privateGet(this, _targetIds);
  }
  /** Channels of the preload script. */
  get channels() {
    return __privateGet(this, _channels);
  }
  /** Contexts of the preload script, if any */
  get contexts() {
    return __privateGet(this, _contexts);
  }
  /**
   * Adds the script to the given CDP targets by calling the
   * `Page.addScriptToEvaluateOnNewDocument` command.
   */
  async initInTargets(cdpTargets, runImmediately) {
    await Promise.all(Array.from(cdpTargets).map((cdpTarget) => this.initInTarget(cdpTarget, runImmediately)));
  }
  /**
   * Adds the script to the given CDP target by calling the
   * `Page.addScriptToEvaluateOnNewDocument` command.
   */
  async initInTarget(cdpTarget, runImmediately) {
    const addCdpPreloadScriptResult = await cdpTarget.cdpClient.sendCommand("Page.addScriptToEvaluateOnNewDocument", {
      source: __privateMethod(this, _getEvaluateString, getEvaluateString_fn).call(this),
      worldName: __privateGet(this, _sandbox),
      runImmediately
    });
    __privateGet(this, _cdpPreloadScripts).push({
      target: cdpTarget,
      preloadScriptId: addCdpPreloadScriptResult.identifier
    });
    __privateGet(this, _targetIds).add(cdpTarget.id);
  }
  /**
   * Removes this script from all CDP targets.
   */
  async remove() {
    for (const cdpPreloadScript of __privateGet(this, _cdpPreloadScripts)) {
      const cdpTarget = cdpPreloadScript.target;
      const cdpPreloadScriptId = cdpPreloadScript.preloadScriptId;
      await cdpTarget.cdpClient.sendCommand("Page.removeScriptToEvaluateOnNewDocument", {
        identifier: cdpPreloadScriptId
      });
    }
  }
  /** Removes the provided cdp target from the list of cdp preload scripts. */
  dispose(cdpTargetId) {
    __privateSet(this, _cdpPreloadScripts, __privateGet(this, _cdpPreloadScripts).filter((cdpPreloadScript) => {
      var _a3;
      return ((_a3 = cdpPreloadScript.target) == null ? void 0 : _a3.id) !== cdpTargetId;
    }));
    __privateGet(this, _targetIds).delete(cdpTargetId);
  }
}
_id4 = new WeakMap();
_cdpPreloadScripts = new WeakMap();
_functionDeclaration = new WeakMap();
_targetIds = new WeakMap();
_channels = new WeakMap();
_sandbox = new WeakMap();
_contexts = new WeakMap();
_getEvaluateString = new WeakSet();
getEvaluateString_fn = function() {
  const channelsArgStr = `[${this.channels.map((c) => c.getEvalInWindowStr()).join(", ")}]`;
  return `(()=>{(${__privateGet(this, _functionDeclaration)})(...${channelsArgStr})})()`;
};
PreloadScript$1.PreloadScript = PreloadScript;
Object.defineProperty(ScriptProcessor$1, "__esModule", { value: true });
ScriptProcessor$1.ScriptProcessor = void 0;
const protocol_1 = protocol;
const PreloadScript_1 = PreloadScript$1;
class ScriptProcessor {
  constructor(browsingContextStorage, realmStorage, preloadScriptStorage, logger) {
    __privateAdd(this, _getRealm);
    __privateAdd(this, _browsingContextStorage7, void 0);
    __privateAdd(this, _realmStorage6, void 0);
    __privateAdd(this, _preloadScriptStorage3, void 0);
    __privateAdd(this, _logger7, void 0);
    __privateSet(this, _browsingContextStorage7, browsingContextStorage);
    __privateSet(this, _realmStorage6, realmStorage);
    __privateSet(this, _preloadScriptStorage3, preloadScriptStorage);
    __privateSet(this, _logger7, logger);
  }
  async addPreloadScript(params) {
    const contexts = /* @__PURE__ */ new Set();
    if (params.contexts) {
      if (params.contexts.length === 0) {
        throw new protocol_1.InvalidArgumentException("Contexts list is empty.");
      }
      for (const contextId of params.contexts) {
        const context = __privateGet(this, _browsingContextStorage7).getContext(contextId);
        if (context.isTopLevelContext()) {
          contexts.add(context);
        } else {
          throw new protocol_1.InvalidArgumentException(`Non top-level context '${contextId}' given.`);
        }
      }
    }
    const preloadScript = new PreloadScript_1.PreloadScript(params, __privateGet(this, _logger7));
    __privateGet(this, _preloadScriptStorage3).add(preloadScript);
    const cdpTargets = contexts.size === 0 ? new Set(__privateGet(this, _browsingContextStorage7).getTopLevelContexts().map((context) => context.cdpTarget)) : new Set([...contexts.values()].map((context) => context.cdpTarget));
    await preloadScript.initInTargets(cdpTargets, false);
    return {
      script: preloadScript.id
    };
  }
  async removePreloadScript(params) {
    const bidiId = params.script;
    const scripts = __privateGet(this, _preloadScriptStorage3).find({
      id: bidiId
    });
    if (scripts.length === 0) {
      throw new protocol_1.NoSuchScriptException(`No preload script with BiDi ID '${bidiId}'`);
    }
    await Promise.all(scripts.map((script) => script.remove()));
    __privateGet(this, _preloadScriptStorage3).remove({
      id: bidiId
    });
    return {};
  }
  async callFunction(params) {
    const realm = await __privateMethod(this, _getRealm, getRealm_fn).call(this, params.target);
    return await realm.callFunction(
      params.functionDeclaration,
      params.this ?? {
        type: "undefined"
      },
      // `this` is `undefined` by default.
      params.arguments ?? [],
      // `arguments` is `[]` by default.
      params.awaitPromise,
      params.resultOwnership ?? "none",
      params.serializationOptions ?? {},
      params.userActivation ?? false
    );
  }
  async evaluate(params) {
    const realm = await __privateMethod(this, _getRealm, getRealm_fn).call(this, params.target);
    return await realm.evaluate(params.expression, params.awaitPromise, params.resultOwnership ?? "none", params.serializationOptions ?? {}, params.userActivation ?? false);
  }
  async disown(params) {
    const realm = await __privateMethod(this, _getRealm, getRealm_fn).call(this, params.target);
    await Promise.all(params.handles.map(async (handle) => await realm.disown(handle)));
    return {};
  }
  getRealms(params) {
    if (params.context !== void 0) {
      __privateGet(this, _browsingContextStorage7).getContext(params.context);
    }
    const realms = __privateGet(this, _realmStorage6).findRealms({
      browsingContextId: params.context,
      type: params.type
    }).map((realm) => realm.realmInfo);
    return { realms };
  }
}
_browsingContextStorage7 = new WeakMap();
_realmStorage6 = new WeakMap();
_preloadScriptStorage3 = new WeakMap();
_logger7 = new WeakMap();
_getRealm = new WeakSet();
getRealm_fn = async function(target) {
  if ("realm" in target) {
    return __privateGet(this, _realmStorage6).getRealm({
      realmId: target.realm
    });
  }
  const context = __privateGet(this, _browsingContextStorage7).getContext(target.context);
  return await context.getOrCreateSandbox(target.sandbox);
};
ScriptProcessor$1.ScriptProcessor = ScriptProcessor;
var SessionProcessor$1 = {};
Object.defineProperty(SessionProcessor$1, "__esModule", { value: true });
SessionProcessor$1.SessionProcessor = void 0;
class SessionProcessor {
  constructor(eventManager) {
    __privateAdd(this, _eventManager8, void 0);
    __privateSet(this, _eventManager8, eventManager);
  }
  status() {
    return { ready: false, message: "already connected" };
  }
  subscribe(params, channel = null) {
    __privateGet(this, _eventManager8).subscribe(params.events, params.contexts ?? [null], channel);
    return {};
  }
  unsubscribe(params, channel = null) {
    __privateGet(this, _eventManager8).unsubscribe(params.events, params.contexts ?? [null], channel);
    return {};
  }
}
_eventManager8 = new WeakMap();
SessionProcessor$1.SessionProcessor = SessionProcessor;
var StorageProcessor$1 = {};
Object.defineProperty(StorageProcessor$1, "__esModule", { value: true });
StorageProcessor$1.StorageProcessor = void 0;
const protocol_js_1$6 = protocol;
const assert_js_1 = assert$1;
const log_js_1$2 = log;
const NetworkProcessor_js_1$1 = NetworkProcessor$1;
const NetworkUtils_js_1 = NetworkUtils;
class StorageProcessor {
  constructor(browserCdpClient, browsingContextStorage, logger) {
    __privateAdd(this, _expandStoragePartitionSpecByBrowsingContext);
    __privateAdd(this, _expandStoragePartitionSpecByStorageKey);
    __privateAdd(this, _expandStoragePartitionSpec);
    __privateAdd(this, _matchCookie);
    __privateAdd(this, _browserCdpClient6, void 0);
    __privateAdd(this, _browsingContextStorage8, void 0);
    __privateAdd(this, _logger8, void 0);
    __privateSet(this, _browsingContextStorage8, browsingContextStorage);
    __privateSet(this, _browserCdpClient6, browserCdpClient);
    __privateSet(this, _logger8, logger);
  }
  async getCookies(params) {
    const partitionKey = __privateMethod(this, _expandStoragePartitionSpec, expandStoragePartitionSpec_fn).call(this, params.partition);
    const cdpResponse = await __privateGet(this, _browserCdpClient6).sendCommand("Storage.getCookies", {
      browserContextId: partitionKey.userContext
    });
    const filteredBiDiCookies = cdpResponse.cookies.filter(
      // CDP's partition key is the source origin. If the request specifies the
      // `sourceOrigin` partition key, only cookies with the requested source origin
      // are returned.
      (c) => partitionKey.sourceOrigin === void 0 || c.partitionKey === partitionKey.sourceOrigin
    ).map((c) => (0, NetworkUtils_js_1.cdpToBiDiCookie)(c)).filter((c) => __privateMethod(this, _matchCookie, matchCookie_fn).call(this, c, params.filter));
    return {
      cookies: filteredBiDiCookies,
      partitionKey
    };
  }
  async setCookie(params) {
    var _a3;
    const partitionKey = __privateMethod(this, _expandStoragePartitionSpec, expandStoragePartitionSpec_fn).call(this, params.partition);
    const cdpCookie = (0, NetworkUtils_js_1.bidiToCdpCookie)(params, partitionKey);
    try {
      await __privateGet(this, _browserCdpClient6).sendCommand("Storage.setCookies", {
        cookies: [cdpCookie],
        browserContextId: partitionKey.userContext
      });
    } catch (e) {
      (_a3 = __privateGet(this, _logger8)) == null ? void 0 : _a3.call(this, log_js_1$2.LogType.debugError, e);
      throw new protocol_js_1$6.UnableToSetCookieException(e.toString());
    }
    return {
      partitionKey
    };
  }
}
_browserCdpClient6 = new WeakMap();
_browsingContextStorage8 = new WeakMap();
_logger8 = new WeakMap();
_expandStoragePartitionSpecByBrowsingContext = new WeakSet();
expandStoragePartitionSpecByBrowsingContext_fn = function(descriptor) {
  const browsingContextId = descriptor.context;
  const browsingContext = __privateGet(this, _browsingContextStorage8).getContext(browsingContextId);
  return {
    userContext: browsingContext.userContext === "default" ? void 0 : browsingContext.userContext
  };
};
_expandStoragePartitionSpecByStorageKey = new WeakSet();
expandStoragePartitionSpecByStorageKey_fn = function(descriptor) {
  var _a3;
  const unsupportedPartitionKeys = /* @__PURE__ */ new Map();
  let sourceOrigin = descriptor.sourceOrigin;
  if (sourceOrigin !== void 0) {
    const url = NetworkProcessor_js_1$1.NetworkProcessor.parseUrlString(sourceOrigin);
    if (url.origin === "null") {
      sourceOrigin = url.origin;
    } else {
      sourceOrigin = `${url.protocol}//${url.hostname}`;
    }
  }
  const userContext = descriptor.userContext === "default" ? void 0 : descriptor.userContext;
  for (const [key, value] of Object.entries(descriptor)) {
    if (key !== void 0 && value !== void 0 && !["type", "sourceOrigin", "userContext"].includes(key)) {
      unsupportedPartitionKeys.set(key, value);
    }
  }
  if (unsupportedPartitionKeys.size > 0) {
    (_a3 = __privateGet(this, _logger8)) == null ? void 0 : _a3.call(this, log_js_1$2.LogType.debugInfo, `Unsupported partition keys: ${JSON.stringify(Object.fromEntries(unsupportedPartitionKeys))}`);
  }
  return {
    ...sourceOrigin === void 0 ? {} : { sourceOrigin },
    ...userContext === void 0 ? {} : { userContext }
  };
};
_expandStoragePartitionSpec = new WeakSet();
expandStoragePartitionSpec_fn = function(partitionSpec) {
  if (partitionSpec === void 0) {
    return {};
  }
  if (partitionSpec.type === "context") {
    return __privateMethod(this, _expandStoragePartitionSpecByBrowsingContext, expandStoragePartitionSpecByBrowsingContext_fn).call(this, partitionSpec);
  }
  (0, assert_js_1.assert)(partitionSpec.type === "storageKey", "Unknown partition type");
  return __privateMethod(this, _expandStoragePartitionSpecByStorageKey, expandStoragePartitionSpecByStorageKey_fn).call(this, partitionSpec);
};
_matchCookie = new WeakSet();
matchCookie_fn = function(cookie, filter) {
  if (filter === void 0) {
    return true;
  }
  return (filter.domain === void 0 || filter.domain === cookie.domain) && (filter.name === void 0 || filter.name === cookie.name) && // `value` contains fields `type` and `value`.
  (filter.value === void 0 || filter.value.type === cookie.value.type && filter.value.value === cookie.value.value) && (filter.path === void 0 || filter.path === cookie.path) && (filter.size === void 0 || filter.size === cookie.size) && (filter.httpOnly === void 0 || filter.httpOnly === cookie.httpOnly) && (filter.secure === void 0 || filter.secure === cookie.secure) && (filter.sameSite === void 0 || filter.sameSite === cookie.sameSite) && (filter.expiry === void 0 || filter.expiry === cookie.expiry);
};
StorageProcessor$1.StorageProcessor = StorageProcessor;
var OutgoingMessage$1 = {};
Object.defineProperty(OutgoingMessage$1, "__esModule", { value: true });
OutgoingMessage$1.OutgoingMessage = void 0;
const _OutgoingMessage = class _OutgoingMessage {
  constructor(message, channel = null) {
    __privateAdd(this, _message, void 0);
    __privateAdd(this, _channel, void 0);
    __privateSet(this, _message, message);
    __privateSet(this, _channel, channel);
  }
  static createFromPromise(messagePromise, channel) {
    return messagePromise.then((message) => {
      if (message.kind === "success") {
        return {
          kind: "success",
          value: new _OutgoingMessage(message.value, channel)
        };
      }
      return message;
    });
  }
  static createResolved(message, channel) {
    return Promise.resolve({
      kind: "success",
      value: new _OutgoingMessage(message, channel)
    });
  }
  get message() {
    return __privateGet(this, _message);
  }
  get channel() {
    return __privateGet(this, _channel);
  }
};
_message = new WeakMap();
_channel = new WeakMap();
let OutgoingMessage = _OutgoingMessage;
OutgoingMessage$1.OutgoingMessage = OutgoingMessage;
Object.defineProperty(CommandProcessor$1, "__esModule", { value: true });
CommandProcessor$1.CommandProcessor = void 0;
const protocol_js_1$5 = protocol;
const EventEmitter_js_1$2 = EventEmitter$1;
const log_js_1$1 = log;
const BidiNoOpParser_js_1 = BidiNoOpParser$1;
const BrowserProcessor_js_1 = BrowserProcessor$1;
const CdpProcessor_js_1 = CdpProcessor$1;
const BrowsingContextProcessor_js_1 = BrowsingContextProcessor$1;
const InputProcessor_js_1 = InputProcessor$1;
const NetworkProcessor_js_1 = NetworkProcessor$1;
const NetworkStorage_js_1 = NetworkStorage$1;
const PermissionsProcessor_js_1 = PermissionsProcessor$1;
const PreloadScriptStorage_js_1 = PreloadScriptStorage$1;
const ScriptProcessor_js_1 = ScriptProcessor$1;
const SessionProcessor_js_1 = SessionProcessor$1;
const StorageProcessor_js_1 = StorageProcessor$1;
const OutgoingMessage_js_1$1 = OutgoingMessage$1;
class CommandProcessor extends EventEmitter_js_1$2.EventEmitter {
  constructor(cdpConnection, browserCdpClient, eventManager, selfTargetId, defaultUserContextId, browsingContextStorage, realmStorage, acceptInsecureCerts, sharedIdWithFrame, parser = new BidiNoOpParser_js_1.BidiNoOpParser(), logger) {
    super();
    __privateAdd(this, _processCommand);
    // keep-sorted start
    __privateAdd(this, _browserProcessor, void 0);
    __privateAdd(this, _browsingContextProcessor, void 0);
    __privateAdd(this, _cdpProcessor, void 0);
    __privateAdd(this, _inputProcessor, void 0);
    __privateAdd(this, _networkProcessor, void 0);
    __privateAdd(this, _permissionsProcessor, void 0);
    __privateAdd(this, _scriptProcessor, void 0);
    __privateAdd(this, _sessionProcessor, void 0);
    __privateAdd(this, _storageProcessor, void 0);
    // keep-sorted end
    __privateAdd(this, _parser, void 0);
    __privateAdd(this, _logger9, void 0);
    __privateSet(this, _parser, parser);
    __privateSet(this, _logger9, logger);
    const networkStorage = new NetworkStorage_js_1.NetworkStorage();
    const preloadScriptStorage = new PreloadScriptStorage_js_1.PreloadScriptStorage();
    __privateSet(this, _browserProcessor, new BrowserProcessor_js_1.BrowserProcessor(browserCdpClient));
    __privateSet(this, _browsingContextProcessor, new BrowsingContextProcessor_js_1.BrowsingContextProcessor(cdpConnection, browserCdpClient, selfTargetId, eventManager, browsingContextStorage, realmStorage, networkStorage, preloadScriptStorage, acceptInsecureCerts, sharedIdWithFrame, defaultUserContextId, logger));
    __privateSet(this, _cdpProcessor, new CdpProcessor_js_1.CdpProcessor(browsingContextStorage, cdpConnection, browserCdpClient));
    __privateSet(this, _inputProcessor, new InputProcessor_js_1.InputProcessor(browsingContextStorage, realmStorage));
    __privateSet(this, _networkProcessor, new NetworkProcessor_js_1.NetworkProcessor(browsingContextStorage, networkStorage));
    __privateSet(this, _permissionsProcessor, new PermissionsProcessor_js_1.PermissionsProcessor(browserCdpClient));
    __privateSet(this, _scriptProcessor, new ScriptProcessor_js_1.ScriptProcessor(browsingContextStorage, realmStorage, preloadScriptStorage, logger));
    __privateSet(this, _sessionProcessor, new SessionProcessor_js_1.SessionProcessor(eventManager));
    __privateSet(this, _storageProcessor, new StorageProcessor_js_1.StorageProcessor(browserCdpClient, browsingContextStorage, logger));
  }
  async processCommand(command) {
    var _a3;
    try {
      const result = await __privateMethod(this, _processCommand, processCommand_fn).call(this, command);
      const response = {
        type: "success",
        id: command.id,
        result
      };
      this.emit("response", {
        message: OutgoingMessage_js_1$1.OutgoingMessage.createResolved(response, command.channel),
        event: command.method
      });
    } catch (e) {
      if (e instanceof protocol_js_1$5.Exception) {
        this.emit("response", {
          message: OutgoingMessage_js_1$1.OutgoingMessage.createResolved(e.toErrorResponse(command.id), command.channel),
          event: command.method
        });
      } else {
        const error = e;
        (_a3 = __privateGet(this, _logger9)) == null ? void 0 : _a3.call(this, log_js_1$1.LogType.bidi, error);
        this.emit("response", {
          message: OutgoingMessage_js_1$1.OutgoingMessage.createResolved(new protocol_js_1$5.UnknownErrorException(error.message, error.stack).toErrorResponse(command.id), command.channel),
          event: command.method
        });
      }
    }
  }
}
_browserProcessor = new WeakMap();
_browsingContextProcessor = new WeakMap();
_cdpProcessor = new WeakMap();
_inputProcessor = new WeakMap();
_networkProcessor = new WeakMap();
_permissionsProcessor = new WeakMap();
_scriptProcessor = new WeakMap();
_sessionProcessor = new WeakMap();
_storageProcessor = new WeakMap();
_parser = new WeakMap();
_logger9 = new WeakMap();
_processCommand = new WeakSet();
processCommand_fn = async function(command) {
  switch (command.method) {
    case "session.end":
    case "session.new":
      break;
    case "browser.close":
      return __privateGet(this, _browserProcessor).close();
    case "browser.createUserContext":
      return await __privateGet(this, _browserProcessor).createUserContext();
    case "browser.getUserContexts":
      return await __privateGet(this, _browserProcessor).getUserContexts();
    case "browser.removeUserContext":
      return await __privateGet(this, _browserProcessor).removeUserContext(command.params.userContext);
    case "browsingContext.activate":
      return await __privateGet(this, _browsingContextProcessor).activate(__privateGet(this, _parser).parseActivateParams(command.params));
    case "browsingContext.captureScreenshot":
      return await __privateGet(this, _browsingContextProcessor).captureScreenshot(__privateGet(this, _parser).parseCaptureScreenshotParams(command.params));
    case "browsingContext.close":
      return await __privateGet(this, _browsingContextProcessor).close(__privateGet(this, _parser).parseCloseParams(command.params));
    case "browsingContext.create":
      return await __privateGet(this, _browsingContextProcessor).create(__privateGet(this, _parser).parseCreateParams(command.params));
    case "browsingContext.getTree":
      return __privateGet(this, _browsingContextProcessor).getTree(__privateGet(this, _parser).parseGetTreeParams(command.params));
    case "browsingContext.handleUserPrompt":
      return await __privateGet(this, _browsingContextProcessor).handleUserPrompt(__privateGet(this, _parser).parseHandleUserPromptParams(command.params));
    case "browsingContext.locateNodes":
      throw new protocol_js_1$5.UnsupportedOperationException(`Command '${command.method}' not yet implemented.`);
    case "browsingContext.navigate":
      return await __privateGet(this, _browsingContextProcessor).navigate(__privateGet(this, _parser).parseNavigateParams(command.params));
    case "browsingContext.print":
      return await __privateGet(this, _browsingContextProcessor).print(__privateGet(this, _parser).parsePrintParams(command.params));
    case "browsingContext.reload":
      return await __privateGet(this, _browsingContextProcessor).reload(__privateGet(this, _parser).parseReloadParams(command.params));
    case "browsingContext.setViewport":
      return await __privateGet(this, _browsingContextProcessor).setViewport(__privateGet(this, _parser).parseSetViewportParams(command.params));
    case "browsingContext.traverseHistory":
      return await __privateGet(this, _browsingContextProcessor).traverseHistory(__privateGet(this, _parser).parseTraverseHistoryParams(command.params));
    case "cdp.getSession":
      return __privateGet(this, _cdpProcessor).getSession(__privateGet(this, _parser).parseGetSessionParams(command.params));
    case "cdp.sendCommand":
      return await __privateGet(this, _cdpProcessor).sendCommand(__privateGet(this, _parser).parseSendCommandParams(command.params));
    case "input.performActions":
      return await __privateGet(this, _inputProcessor).performActions(__privateGet(this, _parser).parsePerformActionsParams(command.params));
    case "input.releaseActions":
      return await __privateGet(this, _inputProcessor).releaseActions(__privateGet(this, _parser).parseReleaseActionsParams(command.params));
    case "input.setFiles":
      return await __privateGet(this, _inputProcessor).setFiles(__privateGet(this, _parser).parseSetFilesParams(command.params));
    case "network.addIntercept":
      return await __privateGet(this, _networkProcessor).addIntercept(__privateGet(this, _parser).parseAddInterceptParams(command.params));
    case "network.continueRequest":
      return await __privateGet(this, _networkProcessor).continueRequest(__privateGet(this, _parser).parseContinueRequestParams(command.params));
    case "network.continueResponse":
      return await __privateGet(this, _networkProcessor).continueResponse(__privateGet(this, _parser).parseContinueResponseParams(command.params));
    case "network.continueWithAuth":
      return await __privateGet(this, _networkProcessor).continueWithAuth(__privateGet(this, _parser).parseContinueWithAuthParams(command.params));
    case "network.failRequest":
      return await __privateGet(this, _networkProcessor).failRequest(__privateGet(this, _parser).parseFailRequestParams(command.params));
    case "network.provideResponse":
      return await __privateGet(this, _networkProcessor).provideResponse(__privateGet(this, _parser).parseProvideResponseParams(command.params));
    case "network.removeIntercept":
      return await __privateGet(this, _networkProcessor).removeIntercept(__privateGet(this, _parser).parseRemoveInterceptParams(command.params));
    case "permissions.setPermission":
      return await __privateGet(this, _permissionsProcessor).setPermissions(__privateGet(this, _parser).parseSetPermissionsParams(command.params));
    case "script.addPreloadScript":
      return await __privateGet(this, _scriptProcessor).addPreloadScript(__privateGet(this, _parser).parseAddPreloadScriptParams(command.params));
    case "script.callFunction":
      return await __privateGet(this, _scriptProcessor).callFunction(__privateGet(this, _parser).parseCallFunctionParams(command.params));
    case "script.disown":
      return await __privateGet(this, _scriptProcessor).disown(__privateGet(this, _parser).parseDisownParams(command.params));
    case "script.evaluate":
      return await __privateGet(this, _scriptProcessor).evaluate(__privateGet(this, _parser).parseEvaluateParams(command.params));
    case "script.getRealms":
      return __privateGet(this, _scriptProcessor).getRealms(__privateGet(this, _parser).parseGetRealmsParams(command.params));
    case "script.removePreloadScript":
      return await __privateGet(this, _scriptProcessor).removePreloadScript(__privateGet(this, _parser).parseRemovePreloadScriptParams(command.params));
    case "session.status":
      return __privateGet(this, _sessionProcessor).status();
    case "session.subscribe":
      return __privateGet(this, _sessionProcessor).subscribe(__privateGet(this, _parser).parseSubscribeParams(command.params), command.channel);
    case "session.unsubscribe":
      return __privateGet(this, _sessionProcessor).unsubscribe(__privateGet(this, _parser).parseSubscribeParams(command.params), command.channel);
    case "storage.deleteCookies":
      throw new protocol_js_1$5.UnsupportedOperationException(`${command.method} is not supported yet`);
    case "storage.getCookies":
      return await __privateGet(this, _storageProcessor).getCookies(__privateGet(this, _parser).parseGetCookiesParams(command.params));
    case "storage.setCookie":
      return await __privateGet(this, _storageProcessor).setCookie(__privateGet(this, _parser).parseSetCookieParams(command.params));
  }
  throw new protocol_js_1$5.UnknownCommandException(`Unknown command '${command.method}'.`);
};
CommandProcessor$1.CommandProcessor = CommandProcessor;
var BrowsingContextStorage$1 = {};
Object.defineProperty(BrowsingContextStorage$1, "__esModule", { value: true });
BrowsingContextStorage$1.BrowsingContextStorage = void 0;
const protocol_js_1$4 = protocol;
class BrowsingContextStorage {
  constructor() {
    /** Map from context ID to context implementation. */
    __privateAdd(this, _contexts2, /* @__PURE__ */ new Map());
  }
  /** Gets all top-level contexts, i.e. those with no parent. */
  getTopLevelContexts() {
    return this.getAllContexts().filter((context) => context.isTopLevelContext());
  }
  /** Gets all contexts. */
  getAllContexts() {
    return Array.from(__privateGet(this, _contexts2).values());
  }
  /** Deletes the context with the given ID. */
  deleteContextById(id) {
    __privateGet(this, _contexts2).delete(id);
  }
  /** Deletes the given context. */
  deleteContext(context) {
    __privateGet(this, _contexts2).delete(context.id);
  }
  /** Tracks the given context. */
  addContext(context) {
    __privateGet(this, _contexts2).set(context.id, context);
  }
  /** Returns true whether there is an existing context with the given ID. */
  hasContext(id) {
    return __privateGet(this, _contexts2).has(id);
  }
  /** Gets the context with the given ID, if any. */
  findContext(id) {
    return __privateGet(this, _contexts2).get(id);
  }
  /** Returns the top-level context ID of the given context, if any. */
  findTopLevelContextId(id) {
    if (id === null) {
      return null;
    }
    const maybeContext = this.findContext(id);
    const parentId = (maybeContext == null ? void 0 : maybeContext.parentId) ?? null;
    if (parentId === null) {
      return id;
    }
    return this.findTopLevelContextId(parentId);
  }
  findContextBySession(sessionId) {
    for (const context of __privateGet(this, _contexts2).values()) {
      if (context.cdpTarget.cdpSessionId === sessionId) {
        return context;
      }
    }
    return;
  }
  /** Gets the context with the given ID, if any, otherwise throws. */
  getContext(id) {
    const result = this.findContext(id);
    if (result === void 0) {
      throw new protocol_js_1$4.NoSuchFrameException(`Context ${id} not found`);
    }
    return result;
  }
}
_contexts2 = new WeakMap();
BrowsingContextStorage$1.BrowsingContextStorage = BrowsingContextStorage;
var RealmStorage$1 = {};
Object.defineProperty(RealmStorage$1, "__esModule", { value: true });
RealmStorage$1.RealmStorage = void 0;
const protocol_js_1$3 = protocol;
const WindowRealm_js_1 = WindowRealm$2;
class RealmStorage {
  constructor() {
    /** Tracks handles and their realms sent to the client. */
    __privateAdd(this, _knownHandlesToRealmMap, /* @__PURE__ */ new Map());
    /** Map from realm ID to Realm. */
    __privateAdd(this, _realmMap, /* @__PURE__ */ new Map());
  }
  get knownHandlesToRealmMap() {
    return __privateGet(this, _knownHandlesToRealmMap);
  }
  addRealm(realm) {
    __privateGet(this, _realmMap).set(realm.realmId, realm);
  }
  /** Finds all realms that match the given filter. */
  findRealms(filter) {
    return Array.from(__privateGet(this, _realmMap).values()).filter((realm) => {
      if (filter.realmId !== void 0 && filter.realmId !== realm.realmId) {
        return false;
      }
      if (filter.browsingContextId !== void 0 && !realm.associatedBrowsingContexts.map((browsingContext) => browsingContext.id).includes(filter.browsingContextId)) {
        return false;
      }
      if (filter.sandbox !== void 0 && (!(realm instanceof WindowRealm_js_1.WindowRealm) || filter.sandbox !== realm.sandbox)) {
        return false;
      }
      if (filter.executionContextId !== void 0 && filter.executionContextId !== realm.executionContextId) {
        return false;
      }
      if (filter.origin !== void 0 && filter.origin !== realm.origin) {
        return false;
      }
      if (filter.type !== void 0 && filter.type !== realm.realmType) {
        return false;
      }
      if (filter.cdpSessionId !== void 0 && filter.cdpSessionId !== realm.cdpClient.sessionId) {
        return false;
      }
      return true;
    });
  }
  findRealm(filter) {
    const maybeRealms = this.findRealms(filter);
    if (maybeRealms.length !== 1) {
      return void 0;
    }
    return maybeRealms[0];
  }
  /** Gets the only realm that matches the given filter, if any, otherwise throws. */
  getRealm(filter) {
    const maybeRealm = this.findRealm(filter);
    if (maybeRealm === void 0) {
      throw new protocol_js_1$3.NoSuchFrameException(`Realm ${JSON.stringify(filter)} not found`);
    }
    return maybeRealm;
  }
  /** Deletes all realms that match the given filter. */
  deleteRealms(filter) {
    this.findRealms(filter).map((realm) => {
      realm.dispose();
      __privateGet(this, _realmMap).delete(realm.realmId);
      Array.from(this.knownHandlesToRealmMap.entries()).filter(([, r]) => r === realm.realmId).map(([handle]) => this.knownHandlesToRealmMap.delete(handle));
    });
  }
}
_knownHandlesToRealmMap = new WeakMap();
_realmMap = new WeakMap();
RealmStorage$1.RealmStorage = RealmStorage;
var EventManager$1 = {};
var Buffer$2 = {};
Object.defineProperty(Buffer$2, "__esModule", { value: true });
Buffer$2.Buffer = void 0;
let Buffer$1 = (_h = class {
  /**
   * @param capacity The buffer capacity.
   * @param onItemRemoved Delegate called for each removed element.
   */
  constructor(capacity, onItemRemoved) {
    __privateAdd(this, _capacity, void 0);
    __privateAdd(this, _entries, []);
    __privateAdd(this, _onItemRemoved, void 0);
    __privateSet(this, _capacity, capacity);
    __privateSet(this, _onItemRemoved, onItemRemoved);
  }
  get() {
    return __privateGet(this, _entries);
  }
  add(value) {
    var _a3;
    __privateGet(this, _entries).push(value);
    while (__privateGet(this, _entries).length > __privateGet(this, _capacity)) {
      const item = __privateGet(this, _entries).shift();
      if (item !== void 0) {
        (_a3 = __privateGet(this, _onItemRemoved)) == null ? void 0 : _a3.call(this, item);
      }
    }
  }
}, _capacity = new WeakMap(), _entries = new WeakMap(), _onItemRemoved = new WeakMap(), _h);
Buffer$2.Buffer = Buffer$1;
var DefaultMap$1 = {};
Object.defineProperty(DefaultMap$1, "__esModule", { value: true });
DefaultMap$1.DefaultMap = void 0;
class DefaultMap extends Map {
  constructor(getDefaultValue, entries) {
    super(entries);
    /** The default value to return whenever a key is not present in the map. */
    __privateAdd(this, _getDefaultValue, void 0);
    __privateSet(this, _getDefaultValue, getDefaultValue);
  }
  get(key) {
    if (!this.has(key)) {
      this.set(key, __privateGet(this, _getDefaultValue).call(this, key));
    }
    return super.get(key);
  }
}
_getDefaultValue = new WeakMap();
DefaultMap$1.DefaultMap = DefaultMap;
var IdWrapper$1 = {};
Object.defineProperty(IdWrapper$1, "__esModule", { value: true });
IdWrapper$1.IdWrapper = void 0;
const _IdWrapper = class _IdWrapper {
  constructor() {
    __privateAdd(this, _id5, void 0);
    __privateSet(this, _id5, ++__privateWrapper(_IdWrapper, _counter)._);
  }
  get id() {
    return __privateGet(this, _id5);
  }
};
_counter = new WeakMap();
_id5 = new WeakMap();
__privateAdd(_IdWrapper, _counter, 0);
let IdWrapper = _IdWrapper;
IdWrapper$1.IdWrapper = IdWrapper;
var events = {};
Object.defineProperty(events, "__esModule", { value: true });
events.assertSupportedEvent = events.isCdpEvent = void 0;
const protocol_js_1$2 = protocol;
function isCdpEvent$1(name) {
  var _a3;
  return ((_a3 = name.split(".").at(0)) == null ? void 0 : _a3.startsWith(protocol_js_1$2.ChromiumBidi.BiDiModule.Cdp)) ?? false;
}
events.isCdpEvent = isCdpEvent$1;
function assertSupportedEvent(name) {
  if (!protocol_js_1$2.ChromiumBidi.EVENT_NAMES.has(name) && !isCdpEvent$1(name)) {
    throw new protocol_js_1$2.InvalidArgumentException(`Unknown event: ${name}`);
  }
}
events.assertSupportedEvent = assertSupportedEvent;
var SubscriptionManager$1 = {};
Object.defineProperty(SubscriptionManager$1, "__esModule", { value: true });
SubscriptionManager$1.SubscriptionManager = SubscriptionManager$1.unrollEvents = SubscriptionManager$1.cartesianProduct = void 0;
const protocol_js_1$1 = protocol;
const events_js_1$1 = events;
function cartesianProduct(...a) {
  return a.reduce((a2, b2) => a2.flatMap((d) => b2.map((e) => [d, e].flat())));
}
SubscriptionManager$1.cartesianProduct = cartesianProduct;
function unrollEvents(events2) {
  const allEvents = /* @__PURE__ */ new Set();
  function addEvents(events3) {
    for (const event of events3) {
      allEvents.add(event);
    }
  }
  for (const event of events2) {
    switch (event) {
      case protocol_js_1$1.ChromiumBidi.BiDiModule.BrowsingContext:
        addEvents(Object.values(protocol_js_1$1.ChromiumBidi.BrowsingContext.EventNames));
        break;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Log:
        addEvents(Object.values(protocol_js_1$1.ChromiumBidi.Log.EventNames));
        break;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Network:
        addEvents(Object.values(protocol_js_1$1.ChromiumBidi.Network.EventNames));
        break;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Script:
        addEvents(Object.values(protocol_js_1$1.ChromiumBidi.Script.EventNames));
        break;
      default:
        allEvents.add(event);
    }
  }
  return [...allEvents.values()];
}
SubscriptionManager$1.unrollEvents = unrollEvents;
class SubscriptionManager {
  constructor(browsingContextStorage) {
    __privateAdd(this, _getEventSubscriptionPriorityForChannel);
    __privateAdd(this, _checkUnsubscribe);
    __privateAdd(this, _subscriptionPriority, 0);
    // BrowsingContext `null` means the event has subscription across all the
    // browsing contexts.
    // Channel `null` means no `channel` should be added.
    __privateAdd(this, _channelToContextToEventMap, /* @__PURE__ */ new Map());
    __privateAdd(this, _browsingContextStorage9, void 0);
    __privateSet(this, _browsingContextStorage9, browsingContextStorage);
  }
  getChannelsSubscribedToEvent(eventMethod, contextId) {
    const prioritiesAndChannels = Array.from(__privateGet(this, _channelToContextToEventMap).keys()).map((channel) => ({
      priority: __privateMethod(this, _getEventSubscriptionPriorityForChannel, getEventSubscriptionPriorityForChannel_fn).call(this, eventMethod, contextId, channel),
      channel
    })).filter(({ priority }) => priority !== null);
    return prioritiesAndChannels.sort((a, b2) => a.priority - b2.priority).map(({ channel }) => channel);
  }
  subscribe(event, contextId, channel) {
    contextId = __privateGet(this, _browsingContextStorage9).findTopLevelContextId(contextId);
    switch (event) {
      case protocol_js_1$1.ChromiumBidi.BiDiModule.BrowsingContext:
        Object.values(protocol_js_1$1.ChromiumBidi.BrowsingContext.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel));
        return;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Log:
        Object.values(protocol_js_1$1.ChromiumBidi.Log.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel));
        return;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Network:
        Object.values(protocol_js_1$1.ChromiumBidi.Network.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel));
        return;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Script:
        Object.values(protocol_js_1$1.ChromiumBidi.Script.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel));
        return;
    }
    if (!__privateGet(this, _channelToContextToEventMap).has(channel)) {
      __privateGet(this, _channelToContextToEventMap).set(channel, /* @__PURE__ */ new Map());
    }
    const contextToEventMap = __privateGet(this, _channelToContextToEventMap).get(channel);
    if (!contextToEventMap.has(contextId)) {
      contextToEventMap.set(contextId, /* @__PURE__ */ new Map());
    }
    const eventMap = contextToEventMap.get(contextId);
    if (eventMap.has(event)) {
      return;
    }
    eventMap.set(event, __privateWrapper(this, _subscriptionPriority)._++);
  }
  /**
   * Unsubscribes atomically from all events in the given contexts and channel.
   */
  unsubscribeAll(events2, contextIds, channel) {
    for (const contextId of contextIds) {
      if (contextId !== null) {
        __privateGet(this, _browsingContextStorage9).getContext(contextId);
      }
    }
    const eventContextPairs = cartesianProduct(unrollEvents(events2), contextIds);
    eventContextPairs.map(([event, contextId]) => __privateMethod(this, _checkUnsubscribe, checkUnsubscribe_fn).call(this, event, contextId, channel)).forEach((unsubscribe) => unsubscribe());
  }
  /**
   * Unsubscribes from the event in the given context and channel.
   * Syntactic sugar for "unsubscribeAll".
   */
  unsubscribe(eventName, contextId, channel) {
    this.unsubscribeAll([eventName], [contextId], channel);
  }
}
_subscriptionPriority = new WeakMap();
_channelToContextToEventMap = new WeakMap();
_browsingContextStorage9 = new WeakMap();
_getEventSubscriptionPriorityForChannel = new WeakSet();
getEventSubscriptionPriorityForChannel_fn = function(eventMethod, contextId, channel) {
  const contextToEventMap = __privateGet(this, _channelToContextToEventMap).get(channel);
  if (contextToEventMap === void 0) {
    return null;
  }
  const maybeTopLevelContextId = __privateGet(this, _browsingContextStorage9).findTopLevelContextId(contextId);
  const relevantContexts = [.../* @__PURE__ */ new Set([null, maybeTopLevelContextId])];
  const priorities = relevantContexts.map((context) => {
    var _a3, _b3;
    const priority = (_a3 = contextToEventMap.get(context)) == null ? void 0 : _a3.get(eventMethod);
    if ((0, events_js_1$1.isCdpEvent)(eventMethod)) {
      const cdpPriority = (_b3 = contextToEventMap.get(context)) == null ? void 0 : _b3.get(protocol_js_1$1.ChromiumBidi.BiDiModule.Cdp);
      return priority && cdpPriority ? Math.min(priority, cdpPriority) : (
        // At this point we know that we have subscribed
        // to only one of the two
        priority ?? cdpPriority
      );
    }
    return priority;
  }).filter((p) => p !== void 0);
  if (priorities.length === 0) {
    return null;
  }
  return Math.min(...priorities);
};
_checkUnsubscribe = new WeakSet();
checkUnsubscribe_fn = function(event, contextId, channel) {
  contextId = __privateGet(this, _browsingContextStorage9).findTopLevelContextId(contextId);
  if (!__privateGet(this, _channelToContextToEventMap).has(channel)) {
    throw new protocol_js_1$1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? "null" : contextId}. No subscription found.`);
  }
  const contextToEventMap = __privateGet(this, _channelToContextToEventMap).get(channel);
  if (!contextToEventMap.has(contextId)) {
    throw new protocol_js_1$1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? "null" : contextId}. No subscription found.`);
  }
  const eventMap = contextToEventMap.get(contextId);
  if (!eventMap.has(event)) {
    throw new protocol_js_1$1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? "null" : contextId}. No subscription found.`);
  }
  return () => {
    eventMap.delete(event);
    if (eventMap.size === 0) {
      contextToEventMap.delete(event);
    }
    if (contextToEventMap.size === 0) {
      __privateGet(this, _channelToContextToEventMap).delete(channel);
    }
  };
};
SubscriptionManager$1.SubscriptionManager = SubscriptionManager;
Object.defineProperty(EventManager$1, "__esModule", { value: true });
EventManager$1.EventManager = void 0;
const protocol_js_1 = protocol;
const Buffer_js_1 = Buffer$2;
const DefaultMap_js_1 = DefaultMap$1;
const EventEmitter_js_1$1 = EventEmitter$1;
const IdWrapper_js_1 = IdWrapper$1;
const OutgoingMessage_js_1 = OutgoingMessage$1;
const events_js_1 = events;
const SubscriptionManager_js_1 = SubscriptionManager$1;
class EventWrapper {
  constructor(event, contextId) {
    __privateAdd(this, _idWrapper, new IdWrapper_js_1.IdWrapper());
    __privateAdd(this, _contextId, void 0);
    __privateAdd(this, _event, void 0);
    __privateSet(this, _event, event);
    __privateSet(this, _contextId, contextId);
  }
  get id() {
    return __privateGet(this, _idWrapper).id;
  }
  get contextId() {
    return __privateGet(this, _contextId);
  }
  get event() {
    return __privateGet(this, _event);
  }
}
_idWrapper = new WeakMap();
_contextId = new WeakMap();
_event = new WeakMap();
const eventBufferLength = /* @__PURE__ */ new Map([[protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded, 100]]);
const _EventManager = class _EventManager extends EventEmitter_js_1$1.EventEmitter {
  constructor(browsingContextStorage) {
    super();
    /**
     * If the event is buffer-able, put it in the buffer.
     */
    __privateAdd(this, _bufferEvent);
    /**
     * If the event is buffer-able, mark it as sent to the given contextId and channel.
     */
    __privateAdd(this, _markEventSent);
    /**
     * Returns events which are buffered and not yet sent to the given channel events.
     */
    __privateAdd(this, _getBufferedEvents);
    /**
     * Maps event name to a set of contexts where this event already happened.
     * Needed for getting buffered events from all the contexts in case of
     * subscripting to all contexts.
     */
    __privateAdd(this, _eventToContextsMap, new DefaultMap_js_1.DefaultMap(() => /* @__PURE__ */ new Set()));
    /**
     * Maps `eventName` + `browsingContext` to buffer. Used to get buffered events
     * during subscription. Channel-agnostic.
     */
    __privateAdd(this, _eventBuffers, /* @__PURE__ */ new Map());
    /**
     * Maps `eventName` + `browsingContext` + `channel` to last sent event id.
     * Used to avoid sending duplicated events when user
     * subscribes -> unsubscribes -> subscribes.
     */
    __privateAdd(this, _lastMessageSent, /* @__PURE__ */ new Map());
    __privateAdd(this, _subscriptionManager, void 0);
    __privateAdd(this, _browsingContextStorage10, void 0);
    __privateSet(this, _browsingContextStorage10, browsingContextStorage);
    __privateSet(this, _subscriptionManager, new SubscriptionManager_js_1.SubscriptionManager(browsingContextStorage));
  }
  registerEvent(event, contextId) {
    this.registerPromiseEvent(Promise.resolve({
      kind: "success",
      value: event
    }), contextId, event.method);
  }
  registerPromiseEvent(event, contextId, eventName) {
    const eventWrapper = new EventWrapper(event, contextId);
    const sortedChannels = __privateGet(this, _subscriptionManager).getChannelsSubscribedToEvent(eventName, contextId);
    __privateMethod(this, _bufferEvent, bufferEvent_fn).call(this, eventWrapper, eventName);
    for (const channel of sortedChannels) {
      this.emit("event", {
        message: OutgoingMessage_js_1.OutgoingMessage.createFromPromise(event, channel),
        event: eventName
      });
      __privateMethod(this, _markEventSent, markEventSent_fn).call(this, eventWrapper, channel, eventName);
    }
  }
  subscribe(eventNames, contextIds, channel) {
    for (const name of eventNames) {
      (0, events_js_1.assertSupportedEvent)(name);
    }
    for (const contextId of contextIds) {
      if (contextId !== null) {
        __privateGet(this, _browsingContextStorage10).getContext(contextId);
      }
    }
    for (const eventName of eventNames) {
      for (const contextId of contextIds) {
        __privateGet(this, _subscriptionManager).subscribe(eventName, contextId, channel);
        for (const eventWrapper of __privateMethod(this, _getBufferedEvents, getBufferedEvents_fn).call(this, eventName, contextId, channel)) {
          this.emit("event", {
            message: OutgoingMessage_js_1.OutgoingMessage.createFromPromise(eventWrapper.event, channel),
            event: eventName
          });
          __privateMethod(this, _markEventSent, markEventSent_fn).call(this, eventWrapper, channel, eventName);
        }
      }
    }
  }
  unsubscribe(eventNames, contextIds, channel) {
    for (const name of eventNames) {
      (0, events_js_1.assertSupportedEvent)(name);
    }
    __privateGet(this, _subscriptionManager).unsubscribeAll(eventNames, contextIds, channel);
  }
};
_eventToContextsMap = new WeakMap();
_eventBuffers = new WeakMap();
_lastMessageSent = new WeakMap();
_subscriptionManager = new WeakMap();
_browsingContextStorage10 = new WeakMap();
_getMapKey = new WeakSet();
getMapKey_fn = function(eventName, browsingContext, channel) {
  return JSON.stringify({ eventName, browsingContext, channel });
};
_bufferEvent = new WeakSet();
bufferEvent_fn = function(eventWrapper, eventName) {
  var _a3;
  if (!eventBufferLength.has(eventName)) {
    return;
  }
  const bufferMapKey = __privateMethod(_a3 = _EventManager, _getMapKey, getMapKey_fn).call(_a3, eventName, eventWrapper.contextId);
  if (!__privateGet(this, _eventBuffers).has(bufferMapKey)) {
    __privateGet(this, _eventBuffers).set(bufferMapKey, new Buffer_js_1.Buffer(eventBufferLength.get(eventName)));
  }
  __privateGet(this, _eventBuffers).get(bufferMapKey).add(eventWrapper);
  __privateGet(this, _eventToContextsMap).get(eventName).add(eventWrapper.contextId);
};
_markEventSent = new WeakSet();
markEventSent_fn = function(eventWrapper, channel, eventName) {
  var _a3;
  if (!eventBufferLength.has(eventName)) {
    return;
  }
  const lastSentMapKey = __privateMethod(_a3 = _EventManager, _getMapKey, getMapKey_fn).call(_a3, eventName, eventWrapper.contextId, channel);
  __privateGet(this, _lastMessageSent).set(lastSentMapKey, Math.max(__privateGet(this, _lastMessageSent).get(lastSentMapKey) ?? 0, eventWrapper.id));
};
_getBufferedEvents = new WeakSet();
getBufferedEvents_fn = function(eventName, contextId, channel) {
  var _a3, _b3, _c3;
  const bufferMapKey = __privateMethod(_a3 = _EventManager, _getMapKey, getMapKey_fn).call(_a3, eventName, contextId);
  const lastSentMapKey = __privateMethod(_b3 = _EventManager, _getMapKey, getMapKey_fn).call(_b3, eventName, contextId, channel);
  const lastSentMessageId = __privateGet(this, _lastMessageSent).get(lastSentMapKey) ?? -Infinity;
  const result = ((_c3 = __privateGet(this, _eventBuffers).get(bufferMapKey)) == null ? void 0 : _c3.get().filter((wrapper) => wrapper.id > lastSentMessageId)) ?? [];
  if (contextId === null) {
    Array.from(__privateGet(this, _eventToContextsMap).get(eventName).keys()).filter((_contextId2) => (
      // Events without context are already in the result.
      _contextId2 !== null && // Events from deleted contexts should not be sent.
      __privateGet(this, _browsingContextStorage10).hasContext(_contextId2)
    )).map((_contextId2) => __privateMethod(this, _getBufferedEvents, getBufferedEvents_fn).call(this, eventName, _contextId2, channel)).forEach((events2) => result.push(...events2));
  }
  return result.sort((e1, e2) => e1.id - e2.id);
};
/**
 * Returns consistent key to be used to access value maps.
 */
__privateAdd(_EventManager, _getMapKey);
let EventManager = _EventManager;
EventManager$1.EventManager = EventManager;
Object.defineProperty(BidiServer$1, "__esModule", { value: true });
BidiServer$1.BidiServer = void 0;
const EventEmitter_js_1 = EventEmitter$1;
const log_js_1 = log;
const ProcessingQueue_js_1 = ProcessingQueue$1;
const CommandProcessor_js_1 = CommandProcessor$1;
const BrowsingContextStorage_js_1 = BrowsingContextStorage$1;
const RealmStorage_js_1 = RealmStorage$1;
const EventManager_js_1 = EventManager$1;
const _BidiServer = class _BidiServer extends EventEmitter_js_1.EventEmitter {
  constructor(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, options, parser, logger) {
    super();
    __privateAdd(this, _topLevelContextsLoaded);
    __privateAdd(this, _messageQueue, void 0);
    __privateAdd(this, _transport, void 0);
    __privateAdd(this, _commandProcessor, void 0);
    __privateAdd(this, _eventManager9, void 0);
    __privateAdd(this, _browsingContextStorage11, new BrowsingContextStorage_js_1.BrowsingContextStorage());
    __privateAdd(this, _logger10, void 0);
    __privateAdd(this, _handleIncomingMessage, (message) => {
      void __privateGet(this, _commandProcessor).processCommand(message).catch((error) => {
        var _a3;
        (_a3 = __privateGet(this, _logger10)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debugError, error);
      });
    });
    __privateAdd(this, _processOutgoingMessage, async (messageEntry) => {
      const message = messageEntry.message;
      if (messageEntry.channel !== null) {
        message["channel"] = messageEntry.channel;
      }
      await __privateGet(this, _transport).sendMessage(message);
    });
    __privateSet(this, _logger10, logger);
    __privateSet(this, _messageQueue, new ProcessingQueue_js_1.ProcessingQueue(__privateGet(this, _processOutgoingMessage), __privateGet(this, _logger10)));
    __privateSet(this, _transport, bidiTransport);
    __privateGet(this, _transport).setOnMessage(__privateGet(this, _handleIncomingMessage));
    __privateSet(this, _eventManager9, new EventManager_js_1.EventManager(__privateGet(this, _browsingContextStorage11)));
    __privateSet(this, _commandProcessor, new CommandProcessor_js_1.CommandProcessor(cdpConnection, browserCdpClient, __privateGet(this, _eventManager9), selfTargetId, defaultUserContextId, __privateGet(this, _browsingContextStorage11), new RealmStorage_js_1.RealmStorage(), (options == null ? void 0 : options.acceptInsecureCerts) ?? false, (options == null ? void 0 : options.sharedIdWithFrame) ?? false, parser, __privateGet(this, _logger10)));
    __privateGet(this, _eventManager9).on("event", ({ message, event }) => {
      this.emitOutgoingMessage(message, event);
    });
    __privateGet(this, _commandProcessor).on("response", ({ message, event }) => {
      this.emitOutgoingMessage(message, event);
    });
  }
  /**
   * Creates and starts BiDi Mapper instance.
   */
  static async createAndStart(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, options, parser, logger) {
    var _a3;
    const [{ browserContextIds }, { targetInfos }] = await Promise.all([
      browserCdpClient.sendCommand("Target.getBrowserContexts"),
      browserCdpClient.sendCommand("Target.getTargets")
    ]);
    let defaultUserContextId = "default";
    for (const info of targetInfos) {
      if (info.browserContextId && !browserContextIds.includes(info.browserContextId)) {
        defaultUserContextId = info.browserContextId;
        break;
      }
    }
    const server = new _BidiServer(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, options, parser, logger);
    await browserCdpClient.sendCommand("Target.setDiscoverTargets", {
      discover: true
    });
    await browserCdpClient.sendCommand("Target.setAutoAttach", {
      autoAttach: true,
      waitForDebuggerOnStart: true,
      flatten: true
    });
    await __privateMethod(_a3 = server, _topLevelContextsLoaded, topLevelContextsLoaded_fn).call(_a3);
    return server;
  }
  /**
   * Sends BiDi message.
   */
  emitOutgoingMessage(messageEntry, event) {
    __privateGet(this, _messageQueue).add(messageEntry, event);
  }
  close() {
    __privateGet(this, _transport).close();
  }
};
_messageQueue = new WeakMap();
_transport = new WeakMap();
_commandProcessor = new WeakMap();
_eventManager9 = new WeakMap();
_browsingContextStorage11 = new WeakMap();
_logger10 = new WeakMap();
_handleIncomingMessage = new WeakMap();
_processOutgoingMessage = new WeakMap();
_topLevelContextsLoaded = new WeakSet();
topLevelContextsLoaded_fn = async function() {
  await Promise.all(__privateGet(this, _browsingContextStorage11).getTopLevelContexts().map((c) => c.lifecycleLoaded()));
};
let BidiServer = _BidiServer;
BidiServer$1.BidiServer = BidiServer;
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.OutgoingMessage = exports2.EventEmitter = exports2.BidiServer = void 0;
  var BidiServer_js_1 = BidiServer$1;
  Object.defineProperty(exports2, "BidiServer", { enumerable: true, get: function() {
    return BidiServer_js_1.BidiServer;
  } });
  var EventEmitter_js_12 = EventEmitter$1;
  Object.defineProperty(exports2, "EventEmitter", { enumerable: true, get: function() {
    return EventEmitter_js_12.EventEmitter;
  } });
  var OutgoingMessage_js_12 = OutgoingMessage$1;
  Object.defineProperty(exports2, "OutgoingMessage", { enumerable: true, get: function() {
    return OutgoingMessage_js_12.OutgoingMessage;
  } });
})(BidiMapper);
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class BidiDeserializer {
  static deserializeNumber(value) {
    switch (value) {
      case "-0":
        return -0;
      case "NaN":
        return NaN;
      case "Infinity":
        return Infinity;
      case "-Infinity":
        return -Infinity;
      default:
        return value;
    }
  }
  static deserializeLocalValue(result) {
    var _a3, _b3, _c3, _d3;
    switch (result.type) {
      case "array":
        return (_a3 = result.value) == null ? void 0 : _a3.map((value) => {
          return BidiDeserializer.deserializeLocalValue(value);
        });
      case "set":
        return (_b3 = result.value) == null ? void 0 : _b3.reduce((acc, value) => {
          return acc.add(BidiDeserializer.deserializeLocalValue(value));
        }, /* @__PURE__ */ new Set());
      case "object":
        return (_c3 = result.value) == null ? void 0 : _c3.reduce((acc, tuple) => {
          const { key, value } = BidiDeserializer.deserializeTuple(tuple);
          acc[key] = value;
          return acc;
        }, {});
      case "map":
        return (_d3 = result.value) == null ? void 0 : _d3.reduce((acc, tuple) => {
          const { key, value } = BidiDeserializer.deserializeTuple(tuple);
          return acc.set(key, value);
        }, /* @__PURE__ */ new Map());
      case "promise":
        return {};
      case "regexp":
        return new RegExp(result.value.pattern, result.value.flags);
      case "date":
        return new Date(result.value);
      case "undefined":
        return void 0;
      case "null":
        return null;
      case "number":
        return BidiDeserializer.deserializeNumber(result.value);
      case "bigint":
        return BigInt(result.value);
      case "boolean":
        return Boolean(result.value);
      case "string":
        return result.value;
    }
    crawler.debugError(`Deserialization of type ${result.type} not supported.`);
    return void 0;
  }
  static deserializeTuple([serializedKey, serializedValue]) {
    const key = typeof serializedKey === "string" ? serializedKey : BidiDeserializer.deserializeLocalValue(serializedKey);
    const value = BidiDeserializer.deserializeLocalValue(serializedValue);
    return { key, value };
  }
  static deserialize(result) {
    if (!result) {
      crawler.debugError("Service did not produce a result.");
      return void 0;
    }
    return BidiDeserializer.deserializeLocalValue(result);
  }
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
async function releaseReference(client, remoteReference) {
  if (!remoteReference.handle) {
    return;
  }
  await client.connection.send("script.disown", {
    target: client.target,
    handles: [remoteReference.handle]
  }).catch((error) => {
    crawler.debugError(error);
  });
}
function createEvaluationError(details) {
  if (details.exception.type !== "error") {
    return BidiDeserializer.deserialize(details.exception);
  }
  const [name = "", ...parts] = details.text.split(": ");
  const message = parts.join(": ");
  const error = new Error(message);
  error.name = name;
  const stackLines = [];
  if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
    for (const frame of details.stackTrace.callFrames.reverse()) {
      if (crawler.PuppeteerURL.isPuppeteerURL(frame.url) && frame.url !== crawler.PuppeteerURL.INTERNAL_URL) {
        const url = crawler.PuppeteerURL.parse(frame.url);
        stackLines.unshift(`    at ${frame.functionName || url.functionName} (${url.functionName} at ${url.siteString}, <anonymous>:${frame.lineNumber}:${frame.columnNumber})`);
      } else {
        stackLines.push(`    at ${frame.functionName || "<anonymous>"} (${frame.url}:${frame.lineNumber}:${frame.columnNumber})`);
      }
      if (stackLines.length >= Error.stackTraceLimit) {
        break;
      }
    }
  }
  error.stack = [details.text, ...stackLines].join("\n");
  return error;
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class BidiJSHandle extends crawler.JSHandle {
  constructor(sandbox, remoteValue) {
    super();
    __privateAdd(this, _disposed, false);
    __privateAdd(this, _sandbox2, void 0);
    __privateAdd(this, _remoteValue, void 0);
    __privateSet(this, _sandbox2, sandbox);
    __privateSet(this, _remoteValue, remoteValue);
  }
  context() {
    return this.realm.environment.context();
  }
  get realm() {
    return __privateGet(this, _sandbox2);
  }
  get disposed() {
    return __privateGet(this, _disposed);
  }
  async jsonValue() {
    return await this.evaluate((value) => {
      return value;
    });
  }
  asElement() {
    return null;
  }
  async dispose() {
    if (__privateGet(this, _disposed)) {
      return;
    }
    __privateSet(this, _disposed, true);
    if ("handle" in __privateGet(this, _remoteValue)) {
      await releaseReference(this.context(), __privateGet(this, _remoteValue));
    }
  }
  get isPrimitiveValue() {
    switch (__privateGet(this, _remoteValue).type) {
      case "string":
      case "number":
      case "bigint":
      case "boolean":
      case "undefined":
      case "null":
        return true;
      default:
        return false;
    }
  }
  toString() {
    if (this.isPrimitiveValue) {
      return "JSHandle:" + BidiDeserializer.deserialize(__privateGet(this, _remoteValue));
    }
    return "JSHandle@" + __privateGet(this, _remoteValue).type;
  }
  get id() {
    return "handle" in __privateGet(this, _remoteValue) ? __privateGet(this, _remoteValue).handle : void 0;
  }
  remoteValue() {
    return __privateGet(this, _remoteValue);
  }
  remoteObject() {
    throw new crawler.UnsupportedOperation("Not available in WebDriver BiDi");
  }
}
_disposed = new WeakMap();
_sandbox2 = new WeakMap();
_remoteValue = new WeakMap();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$9 = globalThis && globalThis.__runInitializers || function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$9 = globalThis && globalThis.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource$2 = globalThis && globalThis.__addDisposableResource || function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources$2 = globalThis && globalThis.__disposeResources || function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    function next() {
      while (env.stack.length) {
        var rec = env.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env.hasError)
        throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
let BidiElementHandle = (() => {
  var _a4;
  var _a3;
  let _classSuper = crawler.ElementHandle;
  let _instanceExtraInitializers = [];
  let _autofill_decorators;
  let _contentFrame_decorators;
  return _a4 = class extends _classSuper {
    constructor(sandbox, remoteValue) {
      super(new BidiJSHandle(sandbox, remoteValue));
      __runInitializers$9(this, _instanceExtraInitializers);
    }
    get realm() {
      return this.handle.realm;
    }
    get frame() {
      return this.realm.environment;
    }
    context() {
      return this.handle.context();
    }
    get isPrimitiveValue() {
      return this.handle.isPrimitiveValue;
    }
    remoteValue() {
      return this.handle.remoteValue();
    }
    async autofill(data) {
      const client = this.frame.client;
      const nodeInfo = await client.send("DOM.describeNode", {
        objectId: this.handle.id
      });
      const fieldId = nodeInfo.node.backendNodeId;
      const frameId = this.frame._id;
      await client.send("Autofill.trigger", {
        fieldId,
        frameId,
        card: data.creditCard
      });
    }
    async contentFrame() {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource$2(env_1, await this.evaluateHandle((element) => {
          if (element instanceof HTMLIFrameElement) {
            return element.contentWindow;
          }
          return;
        }), false);
        const value = handle.remoteValue();
        if (value.type === "window") {
          return this.frame.page().frame(value.value.context);
        }
        return null;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$2(env_1);
      }
    }
    uploadFile() {
      throw new crawler.UnsupportedOperation();
    }
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _autofill_decorators = [crawler.throwIfDisposed()];
    _contentFrame_decorators = [crawler.throwIfDisposed(), (_a3 = crawler.ElementHandle).bindIsolatedHandle.bind(_a3)];
    __esDecorate$9(_a4, null, _autofill_decorators, { kind: "method", name: "autofill", static: false, private: false, access: { has: (obj) => "autofill" in obj, get: (obj) => obj.autofill }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _contentFrame_decorators, { kind: "method", name: "contentFrame", static: false, private: false, access: { has: (obj) => "contentFrame" in obj, get: (obj) => obj.contentFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class UnserializableError extends Error {
}
class BidiSerializer {
  static serializeNumber(arg) {
    let value;
    if (Object.is(arg, -0)) {
      value = "-0";
    } else if (Object.is(arg, Infinity)) {
      value = "Infinity";
    } else if (Object.is(arg, -Infinity)) {
      value = "-Infinity";
    } else if (Object.is(arg, NaN)) {
      value = "NaN";
    } else {
      value = arg;
    }
    return {
      type: "number",
      value
    };
  }
  static serializeObject(arg) {
    if (arg === null) {
      return {
        type: "null"
      };
    } else if (Array.isArray(arg)) {
      const parsedArray = arg.map((subArg) => {
        return BidiSerializer.serializeRemoteValue(subArg);
      });
      return {
        type: "array",
        value: parsedArray
      };
    } else if (crawler.isPlainObject(arg)) {
      try {
        JSON.stringify(arg);
      } catch (error) {
        if (error instanceof TypeError && error.message.startsWith("Converting circular structure to JSON")) {
          error.message += " Recursive objects are not allowed.";
        }
        throw error;
      }
      const parsedObject = [];
      for (const key in arg) {
        parsedObject.push([
          BidiSerializer.serializeRemoteValue(key),
          BidiSerializer.serializeRemoteValue(arg[key])
        ]);
      }
      return {
        type: "object",
        value: parsedObject
      };
    } else if (crawler.isRegExp(arg)) {
      return {
        type: "regexp",
        value: {
          pattern: arg.source,
          flags: arg.flags
        }
      };
    } else if (crawler.isDate(arg)) {
      return {
        type: "date",
        value: arg.toISOString()
      };
    }
    throw new UnserializableError("Custom object sterilization not possible. Use plain objects instead.");
  }
  static serializeRemoteValue(arg) {
    switch (typeof arg) {
      case "symbol":
      case "function":
        throw new UnserializableError(`Unable to serializable ${typeof arg}`);
      case "object":
        return BidiSerializer.serializeObject(arg);
      case "undefined":
        return {
          type: "undefined"
        };
      case "number":
        return BidiSerializer.serializeNumber(arg);
      case "bigint":
        return {
          type: "bigint",
          value: arg.toString()
        };
      case "string":
        return {
          type: "string",
          value: arg
        };
      case "boolean":
        return {
          type: "boolean",
          value: arg
        };
    }
  }
  static async serialize(sandbox, arg) {
    if (arg instanceof crawler.LazyArg) {
      arg = await arg.get(sandbox.realm);
    }
    const objectHandle = arg && (arg instanceof BidiJSHandle || arg instanceof BidiElementHandle) ? arg : null;
    if (objectHandle) {
      if (objectHandle.realm.environment.context() !== sandbox.environment.context()) {
        throw new Error("JSHandles can be evaluated only in the context they were created!");
      }
      if (objectHandle.disposed) {
        throw new Error("JSHandle is disposed!");
      }
      return objectHandle.remoteValue();
    }
    return BidiSerializer.serializeRemoteValue(arg);
  }
}
class BidiRealm extends crawler.EventEmitter {
  constructor(connection) {
    super();
    __privateAdd(this, _evaluate);
    __publicField(this, "connection");
    __privateAdd(this, _id6, void 0);
    __privateAdd(this, _sandbox3, void 0);
    __publicField(this, "handleRealmDestroyed", async (params) => {
      if (params.realm === __privateGet(this, _id6)) {
        this.internalPuppeteerUtil = void 0;
        __privateGet(this, _sandbox3).environment.clearDocumentHandle();
      }
    });
    __publicField(this, "handleRealmCreated", (params) => {
      if (params.type === "window" && params.context === __privateGet(this, _sandbox3).environment._id && params.sandbox === __privateGet(this, _sandbox3).name) {
        __privateSet(this, _id6, params.realm);
        void __privateGet(this, _sandbox3).taskManager.rerunAll();
      }
    });
    __publicField(this, "internalPuppeteerUtil");
    this.connection = connection;
  }
  get target() {
    return {
      context: __privateGet(this, _sandbox3).environment._id,
      sandbox: __privateGet(this, _sandbox3).name
    };
  }
  setSandbox(sandbox) {
    __privateSet(this, _sandbox3, sandbox);
    this.connection.on(protocol.ChromiumBidi.Script.EventNames.RealmCreated, this.handleRealmCreated);
    this.connection.on(protocol.ChromiumBidi.Script.EventNames.RealmDestroyed, this.handleRealmDestroyed);
  }
  get puppeteerUtil() {
    const promise = Promise.resolve();
    crawler.scriptInjector.inject((script) => {
      if (this.internalPuppeteerUtil) {
        void this.internalPuppeteerUtil.then((handle) => {
          void handle.dispose();
        });
      }
      this.internalPuppeteerUtil = promise.then(() => {
        return this.evaluateHandle(script);
      });
    }, !this.internalPuppeteerUtil);
    return this.internalPuppeteerUtil;
  }
  async evaluateHandle(pageFunction, ...args) {
    return await __privateMethod(this, _evaluate, evaluate_fn).call(this, false, pageFunction, ...args);
  }
  async evaluate(pageFunction, ...args) {
    return await __privateMethod(this, _evaluate, evaluate_fn).call(this, true, pageFunction, ...args);
  }
  [crawler.disposeSymbol]() {
    this.connection.off(protocol.ChromiumBidi.Script.EventNames.RealmCreated, this.handleRealmCreated);
    this.connection.off(protocol.ChromiumBidi.Script.EventNames.RealmDestroyed, this.handleRealmDestroyed);
  }
}
_id6 = new WeakMap();
_sandbox3 = new WeakMap();
_evaluate = new WeakSet();
evaluate_fn = async function(returnByValue, pageFunction, ...args) {
  var _a3;
  const sourceUrlComment = crawler.getSourceUrlComment(((_a3 = crawler.getSourcePuppeteerURLIfAvailable(pageFunction)) == null ? void 0 : _a3.toString()) ?? crawler.PuppeteerURL.INTERNAL_URL);
  const sandbox = __privateGet(this, _sandbox3);
  let responsePromise;
  const resultOwnership = returnByValue ? "none" : "root";
  const serializationOptions = returnByValue ? {} : {
    maxObjectDepth: 0,
    maxDomDepth: 0
  };
  if (crawler.isString(pageFunction)) {
    const expression = crawler.SOURCE_URL_REGEX.test(pageFunction) ? pageFunction : `${pageFunction}
${sourceUrlComment}
`;
    responsePromise = this.connection.send("script.evaluate", {
      expression,
      target: this.target,
      resultOwnership,
      awaitPromise: true,
      userActivation: true,
      serializationOptions
    });
  } else {
    let functionDeclaration = crawler.stringifyFunction(pageFunction);
    functionDeclaration = crawler.SOURCE_URL_REGEX.test(functionDeclaration) ? functionDeclaration : `${functionDeclaration}
${sourceUrlComment}
`;
    responsePromise = this.connection.send("script.callFunction", {
      functionDeclaration,
      arguments: args.length ? await Promise.all(args.map((arg) => {
        return BidiSerializer.serialize(sandbox, arg);
      })) : [],
      target: this.target,
      resultOwnership,
      awaitPromise: true,
      userActivation: true,
      serializationOptions
    });
  }
  const { result } = await responsePromise;
  if ("type" in result && result.type === "exception") {
    throw createEvaluationError(result.exceptionDetails);
  }
  return returnByValue ? BidiDeserializer.deserialize(result.result) : createBidiHandle(sandbox, result.result);
};
function createBidiHandle(sandbox, result) {
  if (result.type === "node" || result.type === "window") {
    return new BidiElementHandle(sandbox, result);
  }
  return new BidiJSHandle(sandbox, result);
}
const cdpSessions = /* @__PURE__ */ new Map();
class CdpSessionWrapper extends crawler.CDPSession {
  constructor(context, sessionId) {
    super();
    __privateAdd(this, _context3, void 0);
    __privateAdd(this, _sessionId, crawler.Deferred.create());
    __privateAdd(this, _detached, false);
    __privateSet(this, _context3, context);
    if (!__privateGet(this, _context3).supportsCdp()) {
      return;
    }
    if (sessionId) {
      __privateGet(this, _sessionId).resolve(sessionId);
      cdpSessions.set(sessionId, this);
    } else {
      context.connection.send("cdp.getSession", {
        context: context.id
      }).then((session) => {
        __privateGet(this, _sessionId).resolve(session.result.session);
        cdpSessions.set(session.result.session, this);
      }).catch((err) => {
        __privateGet(this, _sessionId).reject(err);
      });
    }
  }
  connection() {
    return void 0;
  }
  async send(method, ...paramArgs) {
    if (!__privateGet(this, _context3).supportsCdp()) {
      throw new crawler.UnsupportedOperation("CDP support is required for this feature. The current browser does not support CDP.");
    }
    if (__privateGet(this, _detached)) {
      throw new crawler.TargetCloseError(`Protocol error (${method}): Session closed. Most likely the page has been closed.`);
    }
    const session = await __privateGet(this, _sessionId).valueOrThrow();
    const { result } = await __privateGet(this, _context3).connection.send("cdp.sendCommand", {
      method,
      params: paramArgs[0],
      session
    });
    return result.result;
  }
  async detach() {
    cdpSessions.delete(this.id());
    if (!__privateGet(this, _detached) && __privateGet(this, _context3).supportsCdp()) {
      await __privateGet(this, _context3).cdpSession.send("Target.detachFromTarget", {
        sessionId: this.id()
      });
    }
    __privateSet(this, _detached, true);
  }
  id() {
    const val = __privateGet(this, _sessionId).value();
    return val instanceof Error || val === void 0 ? "" : val;
  }
}
_context3 = new WeakMap();
_sessionId = new WeakMap();
_detached = new WeakMap();
exports.BrowsingContextEvent = void 0;
(function(BrowsingContextEvent) {
  BrowsingContextEvent.Created = Symbol("BrowsingContext.created");
  BrowsingContextEvent.Destroyed = Symbol("BrowsingContext.destroyed");
})(exports.BrowsingContextEvent || (exports.BrowsingContextEvent = {}));
let BrowsingContext$1 = (_i = class extends BidiRealm {
  constructor(connection, info, browserName) {
    super(connection);
    __privateAdd(this, _updateUrl);
    __privateAdd(this, _id7, void 0);
    __privateAdd(this, _url2, void 0);
    __privateAdd(this, _cdpSession, void 0);
    __privateAdd(this, _parent, void 0);
    __privateAdd(this, _browserName, "");
    __privateSet(this, _id7, info.context);
    __privateSet(this, _url2, info.url);
    __privateSet(this, _parent, info.parent);
    __privateSet(this, _browserName, browserName);
    __privateSet(this, _cdpSession, new CdpSessionWrapper(this, void 0));
    this.on("browsingContext.domContentLoaded", __privateMethod(this, _updateUrl, updateUrl_fn).bind(this));
    this.on("browsingContext.fragmentNavigated", __privateMethod(this, _updateUrl, updateUrl_fn).bind(this));
    this.on("browsingContext.load", __privateMethod(this, _updateUrl, updateUrl_fn).bind(this));
  }
  supportsCdp() {
    return !__privateGet(this, _browserName).toLowerCase().includes("firefox");
  }
  createRealmForSandbox() {
    return new BidiRealm(this.connection);
  }
  get url() {
    return __privateGet(this, _url2);
  }
  get id() {
    return __privateGet(this, _id7);
  }
  get parent() {
    return __privateGet(this, _parent);
  }
  get cdpSession() {
    return __privateGet(this, _cdpSession);
  }
  async sendCdpCommand(method, ...paramArgs) {
    return await __privateGet(this, _cdpSession).send(method, ...paramArgs);
  }
  dispose() {
    this.removeAllListeners();
    this.connection.unregisterBrowsingContexts(__privateGet(this, _id7));
    void __privateGet(this, _cdpSession).detach().catch(crawler.debugError);
  }
}, _id7 = new WeakMap(), _url2 = new WeakMap(), _cdpSession = new WeakMap(), _parent = new WeakMap(), _browserName = new WeakMap(), _updateUrl = new WeakSet(), updateUrl_fn = function(info) {
  __privateSet(this, _url2, info.url);
}, _i);
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const debugProtocolSend = crawler.debug("puppeteer:webDriverBiDi:SEND ►");
const debugProtocolReceive = crawler.debug("puppeteer:webDriverBiDi:RECV ◀");
class BidiConnection extends crawler.EventEmitter {
  constructor(url, transport, delay = 0, timeout) {
    super();
    __privateAdd(this, _maybeEmitOnContext);
    __privateAdd(this, _url3, void 0);
    __privateAdd(this, _transport2, void 0);
    __privateAdd(this, _delay, void 0);
    __privateAdd(this, _timeout, 0);
    __privateAdd(this, _closed, false);
    __privateAdd(this, _callbacks, new crawler.CallbackRegistry());
    __privateAdd(this, _browsingContexts, /* @__PURE__ */ new Map());
    __privateAdd(this, _emitters, []);
    __privateSet(this, _url3, url);
    __privateSet(this, _delay, delay);
    __privateSet(this, _timeout, timeout ?? 18e4);
    __privateSet(this, _transport2, transport);
    __privateGet(this, _transport2).onmessage = this.onMessage.bind(this);
    __privateGet(this, _transport2).onclose = this.unbind.bind(this);
  }
  get closed() {
    return __privateGet(this, _closed);
  }
  get url() {
    return __privateGet(this, _url3);
  }
  pipeTo(emitter) {
    __privateGet(this, _emitters).push(emitter);
  }
  emit(type, event) {
    for (const emitter of __privateGet(this, _emitters)) {
      emitter.emit(type, event);
    }
    return super.emit(type, event);
  }
  send(method, params) {
    crawler.assert(!__privateGet(this, _closed), "Protocol error: Connection closed.");
    return __privateGet(this, _callbacks).create(method, __privateGet(this, _timeout), (id) => {
      const stringifiedMessage = JSON.stringify({
        id,
        method,
        params
      });
      debugProtocolSend(stringifiedMessage);
      __privateGet(this, _transport2).send(stringifiedMessage);
    });
  }
  /**
   * @internal
   */
  async onMessage(message) {
    var _a3;
    if (__privateGet(this, _delay)) {
      await new Promise((f) => {
        return setTimeout(f, __privateGet(this, _delay));
      });
    }
    debugProtocolReceive(message);
    const object = JSON.parse(message);
    if ("type" in object) {
      switch (object.type) {
        case "success":
          __privateGet(this, _callbacks).resolve(object.id, object);
          return;
        case "error":
          if (object.id === null) {
            break;
          }
          __privateGet(this, _callbacks).reject(object.id, createProtocolError(object), object.message);
          return;
        case "event":
          if (isCdpEvent(object)) {
            (_a3 = cdpSessions.get(object.params.session)) == null ? void 0 : _a3.emit(object.params.event, object.params.params);
            return;
          }
          __privateMethod(this, _maybeEmitOnContext, maybeEmitOnContext_fn).call(this, object);
          this.emit(object.method, object.params);
          return;
      }
    }
    if ("id" in object) {
      __privateGet(this, _callbacks).reject(object.id, `Protocol Error. Message is not in BiDi protocol format: '${message}'`, object.message);
    }
    crawler.debugError(object);
  }
  registerBrowsingContexts(context) {
    __privateGet(this, _browsingContexts).set(context.id, context);
  }
  getBrowsingContext(contextId) {
    const currentContext = __privateGet(this, _browsingContexts).get(contextId);
    if (!currentContext) {
      throw new Error(`BrowsingContext ${contextId} does not exist.`);
    }
    return currentContext;
  }
  getTopLevelContext(contextId) {
    let currentContext = __privateGet(this, _browsingContexts).get(contextId);
    if (!currentContext) {
      throw new Error(`BrowsingContext ${contextId} does not exist.`);
    }
    while (currentContext.parent) {
      contextId = currentContext.parent;
      currentContext = __privateGet(this, _browsingContexts).get(contextId);
      if (!currentContext) {
        throw new Error(`BrowsingContext ${contextId} does not exist.`);
      }
    }
    return currentContext;
  }
  unregisterBrowsingContexts(id) {
    __privateGet(this, _browsingContexts).delete(id);
  }
  /**
   * Unbinds the connection, but keeps the transport open. Useful when the transport will
   * be reused by other connection e.g. with different protocol.
   * @internal
   */
  unbind() {
    if (__privateGet(this, _closed)) {
      return;
    }
    __privateSet(this, _closed, true);
    __privateGet(this, _transport2).onmessage = () => {
    };
    __privateGet(this, _transport2).onclose = () => {
    };
    __privateGet(this, _browsingContexts).clear();
    __privateGet(this, _callbacks).clear();
  }
  /**
   * Unbinds the connection and closes the transport.
   */
  dispose() {
    this.unbind();
    __privateGet(this, _transport2).close();
  }
  getPendingProtocolErrors() {
    return __privateGet(this, _callbacks).getPendingProtocolErrors();
  }
}
_url3 = new WeakMap();
_transport2 = new WeakMap();
_delay = new WeakMap();
_timeout = new WeakMap();
_closed = new WeakMap();
_callbacks = new WeakMap();
_browsingContexts = new WeakMap();
_emitters = new WeakMap();
_maybeEmitOnContext = new WeakSet();
maybeEmitOnContext_fn = function(event) {
  let context;
  if ("context" in event.params && event.params.context !== null) {
    context = __privateGet(this, _browsingContexts).get(event.params.context);
  } else if ("source" in event.params && event.params.source.context !== void 0) {
    context = __privateGet(this, _browsingContexts).get(event.params.source.context);
  }
  context == null ? void 0 : context.emit(event.method, event.params);
};
function createProtocolError(object) {
  let message = `${object.error} ${object.message}`;
  if (object.stacktrace) {
    message += ` ${object.stacktrace}`;
  }
  return message;
}
function isCdpEvent(event) {
  return event.method.startsWith("cdp.");
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const bidiServerLogger = (prefix, ...args) => {
  crawler.debug(`bidi:${prefix}`)(args);
};
async function connectBidiOverCdp(cdp2, options) {
  const transportBiDi = new NoOpTransport();
  const cdpConnectionAdapter = new CdpConnectionAdapter(cdp2);
  const pptrTransport = {
    send(message) {
      transportBiDi.emitMessage(JSON.parse(message));
    },
    close() {
      bidiServer.close();
      cdpConnectionAdapter.close();
      cdp2.dispose();
    },
    onmessage(_message2) {
    }
  };
  transportBiDi.on("bidiResponse", (message) => {
    pptrTransport.onmessage(JSON.stringify(message));
  });
  const pptrBiDiConnection = new BidiConnection(cdp2.url(), pptrTransport);
  const bidiServer = await BidiMapper.BidiServer.createAndStart(
    transportBiDi,
    cdpConnectionAdapter,
    // TODO: most likely need a little bit of refactoring
    cdpConnectionAdapter.browserClient(),
    "",
    options,
    void 0,
    bidiServerLogger
  );
  return pptrBiDiConnection;
}
class CdpConnectionAdapter {
  constructor(cdp2) {
    __privateAdd(this, _cdp, void 0);
    __privateAdd(this, _adapters, /* @__PURE__ */ new Map());
    __privateAdd(this, _browserCdpConnection, void 0);
    __privateSet(this, _cdp, cdp2);
    __privateSet(this, _browserCdpConnection, new CDPClientAdapter(cdp2));
  }
  browserClient() {
    return __privateGet(this, _browserCdpConnection);
  }
  getCdpClient(id) {
    const session = __privateGet(this, _cdp).session(id);
    if (!session) {
      throw new Error(`Unknown CDP session with id ${id}`);
    }
    if (!__privateGet(this, _adapters).has(session)) {
      const adapter = new CDPClientAdapter(session, id, __privateGet(this, _browserCdpConnection));
      __privateGet(this, _adapters).set(session, adapter);
      return adapter;
    }
    return __privateGet(this, _adapters).get(session);
  }
  close() {
    __privateGet(this, _browserCdpConnection).close();
    for (const adapter of __privateGet(this, _adapters).values()) {
      adapter.close();
    }
  }
}
_cdp = new WeakMap();
_adapters = new WeakMap();
_browserCdpConnection = new WeakMap();
class CDPClientAdapter extends BidiMapper.EventEmitter {
  constructor(client, sessionId, browserClient) {
    super();
    __privateAdd(this, _closed2, false);
    __privateAdd(this, _client, void 0);
    __publicField(this, "sessionId");
    __privateAdd(this, _browserClient, void 0);
    __privateAdd(this, _forwardMessage, (method, event) => {
      this.emit(method, event);
    });
    __privateSet(this, _client, client);
    this.sessionId = sessionId;
    __privateSet(this, _browserClient, browserClient);
    __privateGet(this, _client).on("*", __privateGet(this, _forwardMessage));
  }
  browserClient() {
    return __privateGet(this, _browserClient);
  }
  async sendCommand(method, ...params) {
    if (__privateGet(this, _closed2)) {
      return;
    }
    try {
      return await __privateGet(this, _client).send(method, ...params);
    } catch (err) {
      if (__privateGet(this, _closed2)) {
        return;
      }
      throw err;
    }
  }
  close() {
    __privateGet(this, _client).off("*", __privateGet(this, _forwardMessage));
    __privateSet(this, _closed2, true);
  }
  isCloseError(error) {
    return error instanceof crawler.TargetCloseError;
  }
}
_closed2 = new WeakMap();
_client = new WeakMap();
_browserClient = new WeakMap();
_forwardMessage = new WeakMap();
class NoOpTransport extends BidiMapper.EventEmitter {
  constructor() {
    super(...arguments);
    __privateAdd(this, _onMessage, async (_m2) => {
      return;
    });
  }
  emitMessage(message) {
    void __privateGet(this, _onMessage).call(this, message);
  }
  setOnMessage(onMessage) {
    __privateSet(this, _onMessage, onMessage);
  }
  async sendMessage(message) {
    this.emit("bidiResponse", message);
  }
  close() {
    __privateSet(this, _onMessage, async (_m2) => {
      return;
    });
  }
}
_onMessage = new WeakMap();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$8 = globalThis && globalThis.__runInitializers || function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$8 = globalThis && globalThis.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let Navigation = (() => {
  var _request3, _browsingContext3, _disposables, _id8, _initialize2, initialize_fn2, _session, session_get, _a3;
  let _classSuper = crawler.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  return _a3 = class extends _classSuper {
    // keep-sorted end
    constructor(context) {
      super();
      __privateAdd(this, _initialize2);
      // keep-sorted start block=yes
      __privateAdd(this, _session);
      // keep-sorted start
      __privateAdd(this, _request3, (__runInitializers$8(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _browsingContext3, void 0);
      __privateAdd(this, _disposables, new crawler.DisposableStack());
      __privateAdd(this, _id8, new crawler.Deferred());
      __privateSet(this, _browsingContext3, context);
    }
    static from(context) {
      var _a4;
      const navigation = new _a3(context);
      __privateMethod(_a4 = navigation, _initialize2, initialize_fn2).call(_a4);
      return navigation;
    }
    get disposed() {
      return __privateGet(this, _disposables).disposed;
    }
    get request() {
      return __privateGet(this, _request3);
    }
    // keep-sorted end
    dispose() {
      this[crawler.disposeSymbol]();
    }
    [(_dispose_decorators = [crawler.inertIfDisposed], crawler.disposeSymbol)]() {
      __privateGet(this, _disposables).dispose();
      super[crawler.disposeSymbol]();
    }
  }, _request3 = new WeakMap(), _browsingContext3 = new WeakMap(), _disposables = new WeakMap(), _id8 = new WeakMap(), _initialize2 = new WeakSet(), initialize_fn2 = function() {
    const browsingContextEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(__privateGet(this, _browsingContext3)));
    browsingContextEmitter.once("closed", () => {
      this.emit("failed", {
        url: __privateGet(this, _browsingContext3).url,
        timestamp: /* @__PURE__ */ new Date()
      });
      this.dispose();
    });
    __privateGet(this, _browsingContext3).on("request", ({ request }) => {
      if (request.navigation === __privateGet(this, _id8).value()) {
        __privateSet(this, _request3, request);
        this.emit("request", request);
      }
    });
    const sessionEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(__privateGet(this, _session, session_get)));
    for (const eventName of [
      "browsingContext.domContentLoaded",
      "browsingContext.load"
    ]) {
      sessionEmitter.on(eventName, (info) => {
        if (info.context !== __privateGet(this, _browsingContext3).id) {
          return;
        }
        if (!info.navigation) {
          return;
        }
        if (!__privateGet(this, _id8).resolved()) {
          __privateGet(this, _id8).resolve(info.navigation);
        }
      });
    }
    for (const [eventName, event] of [
      ["browsingContext.fragmentNavigated", "fragment"],
      ["browsingContext.navigationFailed", "failed"],
      ["browsingContext.navigationAborted", "aborted"]
    ]) {
      sessionEmitter.on(eventName, (info) => {
        if (info.context !== __privateGet(this, _browsingContext3).id) {
          return;
        }
        if (!info.navigation) {
          return;
        }
        if (!__privateGet(this, _id8).resolved()) {
          __privateGet(this, _id8).resolve(info.navigation);
        }
        if (__privateGet(this, _id8).value() !== info.navigation) {
          return;
        }
        this.emit(event, {
          url: info.url,
          timestamp: new Date(info.timestamp)
        });
        this.dispose();
      });
    }
  }, _session = new WeakSet(), session_get = function() {
    return __privateGet(this, _browsingContext3).userContext.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$8(_a3, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a3;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$7 = globalThis && globalThis.__runInitializers || function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$7 = globalThis && globalThis.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let Realm = (() => {
  var _reason, _a3;
  let _classSuper = crawler.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _disown_decorators;
  let _callFunction_decorators;
  let _evaluate_decorators;
  return _a3 = class extends _classSuper {
    // keep-sorted end
    constructor(id, origin) {
      super();
      // keep-sorted start
      __privateAdd(this, _reason, (__runInitializers$7(this, _instanceExtraInitializers), void 0));
      __publicField(this, "disposables", new crawler.DisposableStack());
      __publicField(this, "id");
      __publicField(this, "origin");
      this.id = id;
      this.origin = origin;
    }
    initialize() {
      const sessionEmitter = this.disposables.use(new crawler.EventEmitter(this.session));
      sessionEmitter.on("script.realmDestroyed", (info) => {
        if (info.realm !== this.id) {
          return;
        }
        this.dispose("Realm already destroyed.");
      });
    }
    // keep-sorted start block=yes
    get disposed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get target() {
      return { realm: this.id };
    }
    // keep-sorted end
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[crawler.disposeSymbol]();
    }
    async disown(handles) {
      await this.session.send("script.disown", {
        target: this.target,
        handles
      });
    }
    async callFunction(functionDeclaration, awaitPromise, options = {}) {
      const { result } = await this.session.send("script.callFunction", {
        functionDeclaration,
        awaitPromise,
        target: this.target,
        ...options
      });
      return result;
    }
    async evaluate(expression, awaitPromise, options = {}) {
      const { result } = await this.session.send("script.evaluate", {
        expression,
        awaitPromise,
        target: this.target,
        ...options
      });
      return result;
    }
    [(_dispose_decorators = [crawler.inertIfDisposed], _disown_decorators = [crawler.throwIfDisposed((realm) => {
      return __privateGet(realm, _reason);
    })], _callFunction_decorators = [crawler.throwIfDisposed((realm) => {
      return __privateGet(realm, _reason);
    })], _evaluate_decorators = [crawler.throwIfDisposed((realm) => {
      return __privateGet(realm, _reason);
    })], crawler.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Realm already destroyed, probably because all associated browsing contexts closed.");
      this.emit("destroyed", { reason: __privateGet(this, _reason) });
      this.disposables.dispose();
      super[crawler.disposeSymbol]();
    }
  }, _reason = new WeakMap(), (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$7(_a3, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$7(_a3, null, _disown_decorators, { kind: "method", name: "disown", static: false, private: false, access: { has: (obj) => "disown" in obj, get: (obj) => obj.disown }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$7(_a3, null, _callFunction_decorators, { kind: "method", name: "callFunction", static: false, private: false, access: { has: (obj) => "callFunction" in obj, get: (obj) => obj.callFunction }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$7(_a3, null, _evaluate_decorators, { kind: "method", name: "evaluate", static: false, private: false, access: { has: (obj) => "evaluate" in obj, get: (obj) => obj.evaluate }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a3;
})();
const _WindowRealm = class _WindowRealm extends Realm {
  constructor(context, sandbox) {
    super("", "");
    // keep-sorted start
    __publicField(this, "browsingContext");
    __publicField(this, "sandbox");
    // keep-sorted end
    __privateAdd(this, _workers2, {
      dedicated: /* @__PURE__ */ new Map(),
      shared: /* @__PURE__ */ new Map()
    });
    this.browsingContext = context;
    this.sandbox = sandbox;
  }
  static from(context, sandbox) {
    const realm = new _WindowRealm(context, sandbox);
    realm.initialize();
    return realm;
  }
  initialize() {
    super.initialize();
    const sessionEmitter = this.disposables.use(new crawler.EventEmitter(this.session));
    sessionEmitter.on("script.realmCreated", (info) => {
      if (info.type !== "window") {
        return;
      }
      this.id = info.realm;
      this.origin = info.origin;
    });
    sessionEmitter.on("script.realmCreated", (info) => {
      if (info.type !== "dedicated-worker") {
        return;
      }
      if (!info.owners.includes(this.id)) {
        return;
      }
      const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
      __privateGet(this, _workers2).dedicated.set(realm.id, realm);
      const realmEmitter = this.disposables.use(new crawler.EventEmitter(realm));
      realmEmitter.once("destroyed", () => {
        realmEmitter.removeAllListeners();
        __privateGet(this, _workers2).dedicated.delete(realm.id);
      });
      this.emit("worker", realm);
    });
    this.browsingContext.userContext.browser.on("sharedworker", ({ realm }) => {
      if (!realm.owners.has(this)) {
        return;
      }
      __privateGet(this, _workers2).shared.set(realm.id, realm);
      const realmEmitter = this.disposables.use(new crawler.EventEmitter(realm));
      realmEmitter.once("destroyed", () => {
        realmEmitter.removeAllListeners();
        __privateGet(this, _workers2).shared.delete(realm.id);
      });
      this.emit("sharedworker", realm);
    });
  }
  get session() {
    return this.browsingContext.userContext.browser.session;
  }
  get target() {
    return { context: this.browsingContext.id, sandbox: this.sandbox };
  }
};
_workers2 = new WeakMap();
let WindowRealm = _WindowRealm;
const _DedicatedWorkerRealm = class _DedicatedWorkerRealm extends Realm {
  // keep-sorted end
  constructor(owner, id, origin) {
    super(id, origin);
    // keep-sorted start
    __privateAdd(this, _workers3, /* @__PURE__ */ new Map());
    __publicField(this, "owners");
    this.owners = /* @__PURE__ */ new Set([owner]);
  }
  static from(owner, id, origin) {
    const realm = new _DedicatedWorkerRealm(owner, id, origin);
    realm.initialize();
    return realm;
  }
  initialize() {
    super.initialize();
    const sessionEmitter = this.disposables.use(new crawler.EventEmitter(this.session));
    sessionEmitter.on("script.realmCreated", (info) => {
      if (info.type !== "dedicated-worker") {
        return;
      }
      if (!info.owners.includes(this.id)) {
        return;
      }
      const realm = _DedicatedWorkerRealm.from(this, info.realm, info.origin);
      __privateGet(this, _workers3).set(realm.id, realm);
      const realmEmitter = this.disposables.use(new crawler.EventEmitter(realm));
      realmEmitter.once("destroyed", () => {
        __privateGet(this, _workers3).delete(realm.id);
      });
      this.emit("worker", realm);
    });
  }
  get session() {
    return this.owners.values().next().value.session;
  }
};
_workers3 = new WeakMap();
let DedicatedWorkerRealm = _DedicatedWorkerRealm;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$6 = globalThis && globalThis.__runInitializers || function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$6 = globalThis && globalThis.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let Request = (() => {
  var _error, _redirect, _response2, _browsingContext3, _disposables, _event2, _initialize2, initialize_fn2, _session, session_get, _a3;
  let _classSuper = crawler.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  return _a3 = class extends _classSuper {
    // keep-sorted end
    constructor(browsingContext, event) {
      super();
      __privateAdd(this, _initialize2);
      // keep-sorted start block=yes
      __privateAdd(this, _session);
      // keep-sorted start
      __privateAdd(this, _error, (__runInitializers$6(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _redirect, void 0);
      __privateAdd(this, _response2, void 0);
      __privateAdd(this, _browsingContext3, void 0);
      __privateAdd(this, _disposables, new crawler.DisposableStack());
      __privateAdd(this, _event2, void 0);
      __privateSet(this, _browsingContext3, browsingContext);
      __privateSet(this, _event2, event);
    }
    static from(browsingContext, event) {
      var _a4;
      const request = new _a3(browsingContext, event);
      __privateMethod(_a4 = request, _initialize2, initialize_fn2).call(_a4);
      return request;
    }
    get disposed() {
      return __privateGet(this, _disposables).disposed;
    }
    get error() {
      return __privateGet(this, _error);
    }
    get headers() {
      return __privateGet(this, _event2).request.headers;
    }
    get id() {
      return __privateGet(this, _event2).request.request;
    }
    get initiator() {
      return __privateGet(this, _event2).initiator;
    }
    get method() {
      return __privateGet(this, _event2).request.method;
    }
    get navigation() {
      return __privateGet(this, _event2).navigation ?? void 0;
    }
    get redirect() {
      return this.redirect;
    }
    get response() {
      return __privateGet(this, _response2);
    }
    get url() {
      return __privateGet(this, _event2).request.url;
    }
    // keep-sorted end
    dispose() {
      this[crawler.disposeSymbol]();
    }
    [(_dispose_decorators = [crawler.inertIfDisposed], crawler.disposeSymbol)]() {
      __privateGet(this, _disposables).dispose();
      super[crawler.disposeSymbol]();
    }
  }, _error = new WeakMap(), _redirect = new WeakMap(), _response2 = new WeakMap(), _browsingContext3 = new WeakMap(), _disposables = new WeakMap(), _event2 = new WeakMap(), _initialize2 = new WeakSet(), initialize_fn2 = function() {
    const browsingContextEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(__privateGet(this, _browsingContext3)));
    browsingContextEmitter.once("closed", ({ reason }) => {
      __privateSet(this, _error, reason);
      this.emit("error", __privateGet(this, _error));
      this.dispose();
    });
    const sessionEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(__privateGet(this, _session, session_get)));
    sessionEmitter.on("network.beforeRequestSent", (event) => {
      if (event.context !== __privateGet(this, _browsingContext3).id) {
        return;
      }
      if (event.request.request !== this.id) {
        return;
      }
      __privateSet(this, _redirect, _a3.from(__privateGet(this, _browsingContext3), event));
      this.emit("redirect", __privateGet(this, _redirect));
      this.dispose();
    });
    sessionEmitter.on("network.fetchError", (event) => {
      if (event.context !== __privateGet(this, _browsingContext3).id) {
        return;
      }
      if (event.request.request !== this.id) {
        return;
      }
      __privateSet(this, _error, event.errorText);
      this.emit("error", __privateGet(this, _error));
      this.dispose();
    });
    sessionEmitter.on("network.responseCompleted", (event) => {
      if (event.context !== __privateGet(this, _browsingContext3).id) {
        return;
      }
      if (event.request.request !== this.id) {
        return;
      }
      __privateSet(this, _response2, event.response);
      this.emit("success", __privateGet(this, _response2));
      this.dispose();
    });
  }, _session = new WeakSet(), session_get = function() {
    return __privateGet(this, _browsingContext3).userContext.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$6(_a3, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a3;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$5 = globalThis && globalThis.__runInitializers || function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$5 = globalThis && globalThis.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let UserPrompt = (() => {
  var _reason, _result, _disposables, _initialize2, initialize_fn2, _session, session_get, _a3;
  let _classSuper = crawler.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _handle_decorators;
  return _a3 = class extends _classSuper {
    // keep-sorted end
    constructor(context, info) {
      super();
      __privateAdd(this, _initialize2);
      // keep-sorted start block=yes
      __privateAdd(this, _session);
      // keep-sorted start
      __privateAdd(this, _reason, (__runInitializers$5(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _result, void 0);
      __privateAdd(this, _disposables, new crawler.DisposableStack());
      __publicField(this, "browsingContext");
      __publicField(this, "info");
      this.browsingContext = context;
      this.info = info;
    }
    static from(browsingContext, info) {
      var _a4;
      const userPrompt = new _a3(browsingContext, info);
      __privateMethod(_a4 = userPrompt, _initialize2, initialize_fn2).call(_a4);
      return userPrompt;
    }
    get closed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get handled() {
      return __privateGet(this, _result) !== void 0;
    }
    get result() {
      return __privateGet(this, _result);
    }
    // keep-sorted end
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[crawler.disposeSymbol]();
    }
    async handle(options = {}) {
      await __privateGet(this, _session, session_get).send("browsingContext.handleUserPrompt", {
        ...options,
        context: this.info.context
      });
      return __privateGet(this, _result);
    }
    [(_dispose_decorators = [crawler.inertIfDisposed], _handle_decorators = [crawler.throwIfDisposed((prompt) => {
      return __privateGet(prompt, _reason);
    })], crawler.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "User prompt already closed, probably because the associated browsing context was destroyed.");
      this.emit("closed", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables).dispose();
      super[crawler.disposeSymbol]();
    }
  }, _reason = new WeakMap(), _result = new WeakMap(), _disposables = new WeakMap(), _initialize2 = new WeakSet(), initialize_fn2 = function() {
    const browserContextEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(this.browsingContext));
    browserContextEmitter.once("closed", ({ reason }) => {
      this.dispose(`User prompt already closed: ${reason}`);
    });
    const sessionEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(__privateGet(this, _session, session_get)));
    sessionEmitter.on("browsingContext.userPromptClosed", (parameters) => {
      if (parameters.context !== this.browsingContext.id) {
        return;
      }
      __privateSet(this, _result, parameters);
      this.emit("handled", parameters);
      this.dispose("User prompt already handled.");
    });
  }, _session = new WeakSet(), session_get = function() {
    return this.browsingContext.userContext.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$5(_a3, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a3, null, _handle_decorators, { kind: "method", name: "handle", static: false, private: false, access: { has: (obj) => "handle" in obj, get: (obj) => obj.handle }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a3;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$4 = globalThis && globalThis.__runInitializers || function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$4 = globalThis && globalThis.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let BrowsingContext = (() => {
  var _navigation2, _reason, _url6, _children2, _disposables, _realms, _requests, _initialize2, initialize_fn2, _session, session_get, _a3;
  let _classSuper = crawler.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _activate_decorators;
  let _captureScreenshot_decorators;
  let _close_decorators;
  let _traverseHistory_decorators;
  let _navigate_decorators;
  let _reload_decorators;
  let _print_decorators;
  let _handleUserPrompt_decorators;
  let _setViewport_decorators;
  let _performActions_decorators;
  let _releaseActions_decorators;
  let _createWindowRealm_decorators;
  let _addPreloadScript_decorators;
  let _removePreloadScript_decorators;
  return _a3 = class extends _classSuper {
    // keep-sorted end
    constructor(context, parent, id, url) {
      super();
      __privateAdd(this, _initialize2);
      // keep-sorted start block=yes
      __privateAdd(this, _session);
      // keep-sorted start
      __privateAdd(this, _navigation2, (__runInitializers$4(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _reason, void 0);
      __privateAdd(this, _url6, void 0);
      __privateAdd(this, _children2, /* @__PURE__ */ new Map());
      __privateAdd(this, _disposables, new crawler.DisposableStack());
      __privateAdd(this, _realms, /* @__PURE__ */ new Map());
      __privateAdd(this, _requests, /* @__PURE__ */ new Map());
      __publicField(this, "defaultRealm");
      __publicField(this, "id");
      __publicField(this, "parent");
      __publicField(this, "userContext");
      __privateSet(this, _url6, url);
      this.id = id;
      this.parent = parent;
      this.userContext = context;
      this.defaultRealm = WindowRealm.from(this);
    }
    static from(userContext, parent, id, url) {
      var _a4;
      const browsingContext = new _a3(userContext, parent, id, url);
      __privateMethod(_a4 = browsingContext, _initialize2, initialize_fn2).call(_a4);
      return browsingContext;
    }
    get children() {
      return __privateGet(this, _children2).values();
    }
    get closed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get realms() {
      return __privateGet(this, _realms).values();
    }
    get top() {
      let context = this;
      for (let { parent } = context; parent; { parent } = context) {
        context = parent;
      }
      return context;
    }
    get url() {
      return __privateGet(this, _url6);
    }
    // keep-sorted end
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[crawler.disposeSymbol]();
    }
    async activate() {
      await __privateGet(this, _session, session_get).send("browsingContext.activate", {
        context: this.id
      });
    }
    async captureScreenshot(options = {}) {
      const { result: { data } } = await __privateGet(this, _session, session_get).send("browsingContext.captureScreenshot", {
        context: this.id,
        ...options
      });
      return data;
    }
    async close(promptUnload) {
      await Promise.all([...__privateGet(this, _children2).values()].map(async (child) => {
        await child.close(promptUnload);
      }));
      await __privateGet(this, _session, session_get).send("browsingContext.close", {
        context: this.id,
        promptUnload
      });
    }
    async traverseHistory(delta) {
      await __privateGet(this, _session, session_get).send("browsingContext.traverseHistory", {
        context: this.id,
        delta
      });
    }
    async navigate(url, wait) {
      await __privateGet(this, _session, session_get).send("browsingContext.navigate", {
        context: this.id,
        url,
        wait
      });
      return await new Promise((resolve) => {
        this.once("navigation", ({ navigation }) => {
          resolve(navigation);
        });
      });
    }
    async reload(options = {}) {
      await __privateGet(this, _session, session_get).send("browsingContext.reload", {
        context: this.id,
        ...options
      });
      return await new Promise((resolve) => {
        this.once("navigation", ({ navigation }) => {
          resolve(navigation);
        });
      });
    }
    async print(options = {}) {
      const { result: { data } } = await __privateGet(this, _session, session_get).send("browsingContext.print", {
        context: this.id,
        ...options
      });
      return data;
    }
    async handleUserPrompt(options = {}) {
      await __privateGet(this, _session, session_get).send("browsingContext.handleUserPrompt", {
        context: this.id,
        ...options
      });
    }
    async setViewport(options = {}) {
      await __privateGet(this, _session, session_get).send("browsingContext.setViewport", {
        context: this.id,
        ...options
      });
    }
    async performActions(actions) {
      await __privateGet(this, _session, session_get).send("input.performActions", {
        context: this.id,
        actions
      });
    }
    async releaseActions() {
      await __privateGet(this, _session, session_get).send("input.releaseActions", {
        context: this.id
      });
    }
    createWindowRealm(sandbox) {
      return WindowRealm.from(this, sandbox);
    }
    async addPreloadScript(functionDeclaration, options = {}) {
      return await this.userContext.browser.addPreloadScript(functionDeclaration, {
        ...options,
        contexts: [this, ...options.contexts ?? []]
      });
    }
    async removePreloadScript(script) {
      await this.userContext.browser.removePreloadScript(script);
    }
    [(_dispose_decorators = [crawler.inertIfDisposed], _activate_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _captureScreenshot_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _close_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _traverseHistory_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _navigate_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _reload_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _print_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _handleUserPrompt_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setViewport_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _performActions_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _releaseActions_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _createWindowRealm_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _addPreloadScript_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _removePreloadScript_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], crawler.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Browsing context already closed, probably because the user context closed.");
      this.emit("closed", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables).dispose();
      super[crawler.disposeSymbol]();
    }
  }, _navigation2 = new WeakMap(), _reason = new WeakMap(), _url6 = new WeakMap(), _children2 = new WeakMap(), _disposables = new WeakMap(), _realms = new WeakMap(), _requests = new WeakMap(), _initialize2 = new WeakSet(), initialize_fn2 = function() {
    const userContextEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(this.userContext));
    userContextEmitter.once("closed", ({ reason }) => {
      this.dispose(`Browsing context already closed: ${reason}`);
    });
    const sessionEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(__privateGet(this, _session, session_get)));
    sessionEmitter.on("browsingContext.contextCreated", (info) => {
      if (info.parent !== this.id) {
        return;
      }
      const browsingContext = _a3.from(this.userContext, this, info.context, info.url);
      __privateGet(this, _children2).set(info.context, browsingContext);
      const browsingContextEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(browsingContext));
      browsingContextEmitter.once("closed", () => {
        browsingContextEmitter.removeAllListeners();
        __privateGet(this, _children2).delete(browsingContext.id);
      });
      this.emit("browsingcontext", { browsingContext });
    });
    sessionEmitter.on("browsingContext.contextDestroyed", (info) => {
      if (info.context !== this.id) {
        return;
      }
      this.dispose("Browsing context already closed.");
    });
    sessionEmitter.on("browsingContext.domContentLoaded", (info) => {
      if (info.context !== this.id) {
        return;
      }
      __privateSet(this, _url6, info.url);
      this.emit("DOMContentLoaded", void 0);
    });
    sessionEmitter.on("browsingContext.load", (info) => {
      if (info.context !== this.id) {
        return;
      }
      __privateSet(this, _url6, info.url);
      this.emit("load", void 0);
    });
    sessionEmitter.on("browsingContext.navigationStarted", (info) => {
      if (info.context !== this.id) {
        return;
      }
      __privateSet(this, _url6, info.url);
      __privateGet(this, _requests).clear();
      __privateSet(this, _navigation2, Navigation.from(this));
      const navigationEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(__privateGet(this, _navigation2)));
      for (const eventName of ["fragment", "failed", "aborted"]) {
        navigationEmitter.once(eventName, ({ url }) => {
          navigationEmitter[crawler.disposeSymbol]();
          __privateSet(this, _url6, url);
        });
      }
      this.emit("navigation", { navigation: __privateGet(this, _navigation2) });
    });
    sessionEmitter.on("network.beforeRequestSent", (event) => {
      if (event.context !== this.id) {
        return;
      }
      if (__privateGet(this, _requests).has(event.request.request)) {
        return;
      }
      const request = Request.from(this, event);
      __privateGet(this, _requests).set(request.id, request);
      this.emit("request", { request });
    });
    sessionEmitter.on("log.entryAdded", (entry) => {
      if (entry.source.context !== this.id) {
        return;
      }
      this.emit("log", { entry });
    });
    sessionEmitter.on("browsingContext.userPromptOpened", (info) => {
      if (info.context !== this.id) {
        return;
      }
      const userPrompt = UserPrompt.from(this, info);
      this.emit("userprompt", { userPrompt });
    });
  }, _session = new WeakSet(), session_get = function() {
    return this.userContext.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$4(_a3, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _activate_decorators, { kind: "method", name: "activate", static: false, private: false, access: { has: (obj) => "activate" in obj, get: (obj) => obj.activate }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _captureScreenshot_decorators, { kind: "method", name: "captureScreenshot", static: false, private: false, access: { has: (obj) => "captureScreenshot" in obj, get: (obj) => obj.captureScreenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: (obj) => "close" in obj, get: (obj) => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _traverseHistory_decorators, { kind: "method", name: "traverseHistory", static: false, private: false, access: { has: (obj) => "traverseHistory" in obj, get: (obj) => obj.traverseHistory }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _navigate_decorators, { kind: "method", name: "navigate", static: false, private: false, access: { has: (obj) => "navigate" in obj, get: (obj) => obj.navigate }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _reload_decorators, { kind: "method", name: "reload", static: false, private: false, access: { has: (obj) => "reload" in obj, get: (obj) => obj.reload }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _print_decorators, { kind: "method", name: "print", static: false, private: false, access: { has: (obj) => "print" in obj, get: (obj) => obj.print }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _handleUserPrompt_decorators, { kind: "method", name: "handleUserPrompt", static: false, private: false, access: { has: (obj) => "handleUserPrompt" in obj, get: (obj) => obj.handleUserPrompt }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _setViewport_decorators, { kind: "method", name: "setViewport", static: false, private: false, access: { has: (obj) => "setViewport" in obj, get: (obj) => obj.setViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _performActions_decorators, { kind: "method", name: "performActions", static: false, private: false, access: { has: (obj) => "performActions" in obj, get: (obj) => obj.performActions }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _releaseActions_decorators, { kind: "method", name: "releaseActions", static: false, private: false, access: { has: (obj) => "releaseActions" in obj, get: (obj) => obj.releaseActions }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _createWindowRealm_decorators, { kind: "method", name: "createWindowRealm", static: false, private: false, access: { has: (obj) => "createWindowRealm" in obj, get: (obj) => obj.createWindowRealm }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: (obj) => "addPreloadScript" in obj, get: (obj) => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$4(_a3, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: (obj) => "removePreloadScript" in obj, get: (obj) => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a3;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$3 = globalThis && globalThis.__runInitializers || function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$3 = globalThis && globalThis.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let UserContext = (() => {
  var _a3, _reason, _browsingContexts2, _disposables, _id8, _initialize2, initialize_fn2, _session, session_get;
  let _classSuper = crawler.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _createBrowsingContext_decorators;
  let _remove_decorators;
  return _a3 = class extends _classSuper {
    // keep-sorted end
    constructor(browser, id) {
      super();
      __privateAdd(this, _initialize2);
      // keep-sorted start block=yes
      __privateAdd(this, _session);
      // keep-sorted start
      __privateAdd(this, _reason, (__runInitializers$3(this, _instanceExtraInitializers), void 0));
      // Note these are only top-level contexts.
      __privateAdd(this, _browsingContexts2, /* @__PURE__ */ new Map());
      __privateAdd(this, _disposables, new crawler.DisposableStack());
      __privateAdd(this, _id8, void 0);
      __publicField(this, "browser");
      __privateSet(this, _id8, id);
      this.browser = browser;
    }
    static create(browser, id) {
      var _a4;
      const context = new _a3(browser, id);
      __privateMethod(_a4 = context, _initialize2, initialize_fn2).call(_a4);
      return context;
    }
    get browsingContexts() {
      return __privateGet(this, _browsingContexts2).values();
    }
    get closed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get id() {
      return __privateGet(this, _id8);
    }
    // keep-sorted end
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[crawler.disposeSymbol]();
    }
    async createBrowsingContext(type, options = {}) {
      var _a4;
      const { result: { context: contextId } } = await __privateGet(this, _session, session_get).send("browsingContext.create", {
        type,
        ...options,
        referenceContext: (_a4 = options.referenceContext) == null ? void 0 : _a4.id,
        userContext: __privateGet(this, _id8)
      });
      const browsingContext = __privateGet(this, _browsingContexts2).get(contextId);
      crawler.assert(browsingContext, "The WebDriver BiDi implementation is failing to create a browsing context correctly.");
      return browsingContext;
    }
    async remove() {
      try {
        await __privateGet(this, _session, session_get).send("browser.removeUserContext", {
          userContext: __privateGet(this, _id8)
        });
      } finally {
        this.dispose("User context already closed.");
      }
    }
    [(_dispose_decorators = [crawler.inertIfDisposed], _createBrowsingContext_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _remove_decorators = [crawler.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], crawler.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "User context already closed, probably because the browser disconnected/closed.");
      this.emit("closed", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables).dispose();
      super[crawler.disposeSymbol]();
    }
  }, _reason = new WeakMap(), _browsingContexts2 = new WeakMap(), _disposables = new WeakMap(), _id8 = new WeakMap(), _initialize2 = new WeakSet(), initialize_fn2 = function() {
    const browserEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(this.browser));
    browserEmitter.once("closed", ({ reason }) => {
      this.dispose(`User context already closed: ${reason}`);
    });
    const sessionEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(__privateGet(this, _session, session_get)));
    sessionEmitter.on("browsingContext.contextCreated", (info) => {
      if (info.parent) {
        return;
      }
      if (info.userContext !== __privateGet(this, _id8)) {
        return;
      }
      const browsingContext = BrowsingContext.from(this, void 0, info.context, info.url);
      __privateGet(this, _browsingContexts2).set(browsingContext.id, browsingContext);
      const browsingContextEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(browsingContext));
      browsingContextEmitter.on("closed", () => {
        browsingContextEmitter.removeAllListeners();
        __privateGet(this, _browsingContexts2).delete(browsingContext.id);
      });
      this.emit("browsingcontext", { browsingContext });
    });
  }, _session = new WeakSet(), session_get = function() {
    return this.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$3(_a3, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$3(_a3, null, _createBrowsingContext_decorators, { kind: "method", name: "createBrowsingContext", static: false, private: false, access: { has: (obj) => "createBrowsingContext" in obj, get: (obj) => obj.createBrowsingContext }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$3(_a3, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: (obj) => "remove" in obj, get: (obj) => obj.remove }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), __publicField(_a3, "DEFAULT", "default"), _a3;
})();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class BidiBrowserContext extends crawler.BrowserContext {
  constructor(browser, userContext, options) {
    super();
    __privateAdd(this, _browser, void 0);
    __privateAdd(this, _connection, void 0);
    __privateAdd(this, _defaultViewport, void 0);
    __privateAdd(this, _userContext, void 0);
    __privateSet(this, _browser, browser);
    __privateSet(this, _userContext, userContext);
    __privateSet(this, _connection, __privateGet(this, _browser).connection);
    __privateSet(this, _defaultViewport, options.defaultViewport);
  }
  targets() {
    return __privateGet(this, _browser).targets().filter((target) => {
      return target.browserContext() === this;
    });
  }
  waitForTarget(predicate, options = {}) {
    return __privateGet(this, _browser).waitForTarget((target) => {
      return target.browserContext() === this && predicate(target);
    }, options);
  }
  get connection() {
    return __privateGet(this, _connection);
  }
  async newPage() {
    const { result } = await __privateGet(this, _connection).send("browsingContext.create", {
      type: "tab",
      userContext: __privateGet(this, _userContext).id
    });
    const target = __privateGet(this, _browser)._getTargetById(result.context);
    target._setBrowserContext(this);
    const page = await target.page();
    if (!page) {
      throw new Error("Page is not found");
    }
    if (__privateGet(this, _defaultViewport)) {
      try {
        await page.setViewport(__privateGet(this, _defaultViewport));
      } catch {
      }
    }
    return page;
  }
  async close() {
    if (!this.isIncognito()) {
      throw new Error("Default context cannot be closed!");
    }
    try {
      await __privateGet(this, _userContext).remove();
    } catch (error) {
      crawler.debugError(error);
    }
  }
  browser() {
    return __privateGet(this, _browser);
  }
  async pages() {
    const results = await Promise.all([...this.targets()].map((t) => {
      return t.page();
    }));
    return results.filter((p) => {
      return p !== null;
    });
  }
  isIncognito() {
    return __privateGet(this, _userContext).id !== UserContext.DEFAULT;
  }
  overridePermissions() {
    throw new crawler.UnsupportedOperation();
  }
  clearPermissionOverrides() {
    throw new crawler.UnsupportedOperation();
  }
  get id() {
    if (__privateGet(this, _userContext).id === "default") {
      return void 0;
    }
    return __privateGet(this, _userContext).id;
  }
}
_browser = new WeakMap();
_connection = new WeakMap();
_defaultViewport = new WeakMap();
_userContext = new WeakMap();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$2 = globalThis && globalThis.__runInitializers || function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$2 = globalThis && globalThis.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource$1 = globalThis && globalThis.__addDisposableResource || function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources$1 = globalThis && globalThis.__disposeResources || function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    function next() {
      while (env.stack.length) {
        var rec = env.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env.hasError)
        throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
let Browser = (() => {
  var _closed3, _reason, _disposables, _userContexts, _initialize2, initialize_fn2, _syncUserContexts, syncUserContexts_fn, _syncBrowsingContexts, syncBrowsingContexts_fn, _a3;
  let _classSuper = crawler.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _close_decorators;
  let _addPreloadScript_decorators;
  let _removePreloadScript_decorators;
  let _createUserContext_decorators;
  return _a3 = class extends _classSuper {
    // keep-sorted end
    constructor(session) {
      super();
      __privateAdd(this, _initialize2);
      __privateAdd(this, _syncUserContexts);
      __privateAdd(this, _syncBrowsingContexts);
      // keep-sorted start
      __privateAdd(this, _closed3, (__runInitializers$2(this, _instanceExtraInitializers), false));
      __privateAdd(this, _reason, void 0);
      __privateAdd(this, _disposables, new crawler.DisposableStack());
      __privateAdd(this, _userContexts, /* @__PURE__ */ new Map());
      __publicField(this, "session");
      this.session = session;
      __privateGet(this, _userContexts).set(UserContext.DEFAULT, UserContext.create(this, UserContext.DEFAULT));
    }
    static async from(session) {
      var _a4;
      const browser = new _a3(session);
      await __privateMethod(_a4 = browser, _initialize2, initialize_fn2).call(_a4);
      return browser;
    }
    // keep-sorted start block=yes
    get closed() {
      return __privateGet(this, _closed3);
    }
    get defaultUserContext() {
      return __privateGet(this, _userContexts).get(UserContext.DEFAULT);
    }
    get disconnected() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.disconnected;
    }
    get userContexts() {
      return __privateGet(this, _userContexts).values();
    }
    // keep-sorted end
    dispose(reason, closed = false) {
      __privateSet(this, _closed3, closed);
      __privateSet(this, _reason, reason);
      this[crawler.disposeSymbol]();
    }
    async close() {
      try {
        await this.session.send("browser.close", {});
      } finally {
        this.dispose("Browser already closed.", true);
      }
    }
    async addPreloadScript(functionDeclaration, options = {}) {
      var _a4;
      const { result: { script } } = await this.session.send("script.addPreloadScript", {
        functionDeclaration,
        ...options,
        contexts: (_a4 = options.contexts) == null ? void 0 : _a4.map((context) => {
          return context.id;
        })
      });
      return script;
    }
    async removePreloadScript(script) {
      await this.session.send("script.removePreloadScript", {
        script
      });
    }
    async createUserContext() {
      const { result: { userContext: context } } = await this.session.send("browser.createUserContext", {});
      const userContext = UserContext.create(this, context);
      __privateGet(this, _userContexts).set(userContext.id, userContext);
      const userContextEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(userContext));
      userContextEmitter.once("closed", () => {
        userContextEmitter.removeAllListeners();
        __privateGet(this, _userContexts).delete(context);
      });
      return userContext;
    }
    [(_dispose_decorators = [crawler.inertIfDisposed], _close_decorators = [crawler.throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], _addPreloadScript_decorators = [crawler.throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], _removePreloadScript_decorators = [crawler.throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], _createUserContext_decorators = [crawler.throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], crawler.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Browser was disconnected, probably because the session ended.");
      if (this.closed) {
        this.emit("closed", { reason: __privateGet(this, _reason) });
      }
      this.emit("disconnected", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables).dispose();
      super[crawler.disposeSymbol]();
    }
  }, _closed3 = new WeakMap(), _reason = new WeakMap(), _disposables = new WeakMap(), _userContexts = new WeakMap(), _initialize2 = new WeakSet(), initialize_fn2 = async function() {
    const sessionEmitter = __privateGet(this, _disposables).use(new crawler.EventEmitter(this.session));
    sessionEmitter.once("ended", ({ reason }) => {
      this.dispose(reason);
    });
    sessionEmitter.on("script.realmCreated", (info) => {
      if (info.type === "shared-worker")
        ;
    });
    await __privateMethod(this, _syncUserContexts, syncUserContexts_fn).call(this);
    await __privateMethod(this, _syncBrowsingContexts, syncBrowsingContexts_fn).call(this);
  }, _syncUserContexts = new WeakSet(), syncUserContexts_fn = async function() {
    const { result: { userContexts } } = await this.session.send("browser.getUserContexts", {});
    for (const context of userContexts) {
      if (context.userContext === UserContext.DEFAULT) {
        continue;
      }
      __privateGet(this, _userContexts).set(context.userContext, UserContext.create(this, context.userContext));
    }
  }, _syncBrowsingContexts = new WeakSet(), syncBrowsingContexts_fn = async function() {
    const contextIds = /* @__PURE__ */ new Set();
    let contexts;
    {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const sessionEmitter = __addDisposableResource$1(env_1, new crawler.EventEmitter(this.session), false);
        sessionEmitter.on("browsingContext.contextCreated", (info) => {
          contextIds.add(info.context);
        });
        sessionEmitter.on("browsingContext.contextDestroyed", (info) => {
          contextIds.delete(info.context);
        });
        const { result } = await this.session.send("browsingContext.getTree", {});
        contexts = result.contexts;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$1(env_1);
      }
    }
    for (const info of contexts) {
      if (contextIds.has(info.context)) {
        this.session.emit("browsingContext.contextCreated", info);
      }
      if (info.children) {
        contexts.push(...info.children);
      }
    }
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$2(_a3, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a3, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: (obj) => "close" in obj, get: (obj) => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a3, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: (obj) => "addPreloadScript" in obj, get: (obj) => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a3, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: (obj) => "removePreloadScript" in obj, get: (obj) => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a3, null, _createUserContext_decorators, { kind: "method", name: "createUserContext", static: false, private: false, access: { has: (obj) => "createUserContext" in obj, get: (obj) => obj.createUserContext }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a3;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$1 = globalThis && globalThis.__runInitializers || function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$1 = globalThis && globalThis.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let Session = (() => {
  var _reason, _disposables, _info, _initialize2, initialize_fn2, _a3;
  let _classSuper = crawler.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _send_decorators;
  let _subscribe_decorators;
  let _end_decorators;
  return _a3 = class extends _classSuper {
    // keep-sorted end
    constructor(connection, info) {
      super();
      __privateAdd(this, _initialize2);
      // keep-sorted start
      __privateAdd(this, _reason, (__runInitializers$1(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _disposables, new crawler.DisposableStack());
      __privateAdd(this, _info, void 0);
      __publicField(this, "browser");
      __publicField(this, "connection");
      __privateSet(this, _info, info);
      this.connection = connection;
    }
    static async from(connection, capabilities) {
      var _a4;
      let result;
      try {
        result = (await connection.send("session.new", {
          capabilities
        })).result;
      } catch (err) {
        crawler.debugError(err);
        result = {
          sessionId: "",
          capabilities: {
            acceptInsecureCerts: false,
            browserName: "",
            browserVersion: "",
            platformName: "",
            setWindowRect: false,
            webSocketUrl: ""
          }
        };
      }
      const session = new _a3(connection, result);
      await __privateMethod(_a4 = session, _initialize2, initialize_fn2).call(_a4);
      return session;
    }
    // keep-sorted start block=yes
    get capabilities() {
      return __privateGet(this, _info).capabilities;
    }
    get disposed() {
      return this.ended;
    }
    get ended() {
      return __privateGet(this, _reason) !== void 0;
    }
    get id() {
      return __privateGet(this, _info).sessionId;
    }
    // keep-sorted end
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[crawler.disposeSymbol]();
    }
    pipeTo(emitter) {
      this.connection.pipeTo(emitter);
    }
    /**
     * Currently, there is a 1:1 relationship between the session and the
     * session. In the future, we might support multiple sessions and in that
     * case we always needs to make sure that the session for the right session
     * object is used, so we implement this method here, although it's not defined
     * in the spec.
     */
    async send(method, params) {
      return await this.connection.send(method, params);
    }
    async subscribe(events2) {
      await this.send("session.subscribe", {
        events: events2
      });
    }
    async end() {
      try {
        await this.send("session.end", {});
      } finally {
        this.dispose(`Session already ended.`);
      }
    }
    [(_dispose_decorators = [crawler.inertIfDisposed], _send_decorators = [crawler.throwIfDisposed((session) => {
      return __privateGet(session, _reason);
    })], _subscribe_decorators = [crawler.throwIfDisposed((session) => {
      return __privateGet(session, _reason);
    })], _end_decorators = [crawler.throwIfDisposed((session) => {
      return __privateGet(session, _reason);
    })], crawler.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Session already destroyed, probably because the connection broke.");
      this.emit("ended", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables).dispose();
      super[crawler.disposeSymbol]();
    }
  }, _reason = new WeakMap(), _disposables = new WeakMap(), _info = new WeakMap(), _initialize2 = new WeakSet(), initialize_fn2 = async function() {
    this.connection.pipeTo(this);
    this.browser = await Browser.from(this);
    const browserEmitter = __privateGet(this, _disposables).use(this.browser);
    browserEmitter.once("closed", ({ reason }) => {
      this.dispose(reason);
    });
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$1(_a3, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$1(_a3, null, _send_decorators, { kind: "method", name: "send", static: false, private: false, access: { has: (obj) => "send" in obj, get: (obj) => obj.send }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$1(_a3, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: (obj) => "subscribe" in obj, get: (obj) => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$1(_a3, null, _end_decorators, { kind: "method", name: "end", static: false, private: false, access: { has: (obj) => "end" in obj, get: (obj) => obj.end }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a3;
})();
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class BidiDialog extends crawler.Dialog {
  /**
   * @internal
   */
  constructor(context, type, message, defaultValue) {
    super(type, message, defaultValue);
    __privateAdd(this, _context4, void 0);
    __privateSet(this, _context4, context);
  }
  /**
   * @internal
   */
  async handle(options) {
    await __privateGet(this, _context4).connection.send("browsingContext.handleUserPrompt", {
      context: __privateGet(this, _context4).id,
      accept: options.accept,
      userText: options.text
    });
  }
}
_context4 = new WeakMap();
class EmulationManager {
  constructor(browsingContext) {
    __privateAdd(this, _browsingContext, void 0);
    __privateSet(this, _browsingContext, browsingContext);
  }
  async emulateViewport(viewport) {
    await __privateGet(this, _browsingContext).connection.send("browsingContext.setViewport", {
      context: __privateGet(this, _browsingContext).id,
      viewport: viewport.width && viewport.height ? {
        width: viewport.width,
        height: viewport.height
      } : null,
      devicePixelRatio: viewport.deviceScaleFactor ? viewport.deviceScaleFactor : null
    });
  }
}
_browsingContext = new WeakMap();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class ExposeableFunction {
  constructor(frame, name, apply) {
    __privateAdd(this, _connection2);
    __privateAdd(this, _channelArguments);
    __privateAdd(this, _getCallbacksAndRemoteValue);
    __privateAdd(this, _frame, void 0);
    __publicField(this, "name");
    __privateAdd(this, _apply, void 0);
    __privateAdd(this, _channels2, void 0);
    __privateAdd(this, _callerInfos, /* @__PURE__ */ new Map());
    __privateAdd(this, _preloadScriptId, void 0);
    __privateAdd(this, _handleArgumentsMessage, async (params) => {
      var _a3;
      if (params.channel !== __privateGet(this, _channels2).args) {
        return;
      }
      const connection = __privateGet(this, _connection2, connection_get);
      const { callbacks, remoteValue } = __privateMethod(this, _getCallbacksAndRemoteValue, getCallbacksAndRemoteValue_fn).call(this, params);
      const args = (_a3 = remoteValue.value) == null ? void 0 : _a3[1];
      crawler.assert(args);
      try {
        const result = await __privateGet(this, _apply).call(this, ...BidiDeserializer.deserialize(args));
        await connection.send("script.callFunction", {
          functionDeclaration: crawler.stringifyFunction(([_2, resolve], result2) => {
            resolve(result2);
          }),
          arguments: [
            await callbacks.resolve.valueOrThrow(),
            BidiSerializer.serializeRemoteValue(result)
          ],
          awaitPromise: false,
          target: {
            realm: params.source.realm
          }
        });
      } catch (error) {
        try {
          if (error instanceof Error) {
            await connection.send("script.callFunction", {
              functionDeclaration: crawler.stringifyFunction(([_2, reject], name, message, stack) => {
                const error2 = new Error(message);
                error2.name = name;
                if (stack) {
                  error2.stack = stack;
                }
                reject(error2);
              }),
              arguments: [
                await callbacks.reject.valueOrThrow(),
                BidiSerializer.serializeRemoteValue(error.name),
                BidiSerializer.serializeRemoteValue(error.message),
                BidiSerializer.serializeRemoteValue(error.stack)
              ],
              awaitPromise: false,
              target: {
                realm: params.source.realm
              }
            });
          } else {
            await connection.send("script.callFunction", {
              functionDeclaration: crawler.stringifyFunction(([_2, reject], error2) => {
                reject(error2);
              }),
              arguments: [
                await callbacks.reject.valueOrThrow(),
                BidiSerializer.serializeRemoteValue(error)
              ],
              awaitPromise: false,
              target: {
                realm: params.source.realm
              }
            });
          }
        } catch (error2) {
          crawler.debugError(error2);
        }
      }
    });
    __privateAdd(this, _handleResolveMessage, (params) => {
      if (params.channel !== __privateGet(this, _channels2).resolve) {
        return;
      }
      const { callbacks, remoteValue } = __privateMethod(this, _getCallbacksAndRemoteValue, getCallbacksAndRemoteValue_fn).call(this, params);
      callbacks.resolve.resolve(remoteValue);
    });
    __privateAdd(this, _handleRejectMessage, (params) => {
      if (params.channel !== __privateGet(this, _channels2).reject) {
        return;
      }
      const { callbacks, remoteValue } = __privateMethod(this, _getCallbacksAndRemoteValue, getCallbacksAndRemoteValue_fn).call(this, params);
      callbacks.reject.resolve(remoteValue);
    });
    __privateSet(this, _frame, frame);
    this.name = name;
    __privateSet(this, _apply, apply);
    __privateSet(this, _channels2, {
      args: `__puppeteer__${__privateGet(this, _frame)._id}_page_exposeFunction_${this.name}_args`,
      resolve: `__puppeteer__${__privateGet(this, _frame)._id}_page_exposeFunction_${this.name}_resolve`,
      reject: `__puppeteer__${__privateGet(this, _frame)._id}_page_exposeFunction_${this.name}_reject`
    });
  }
  async expose() {
    const connection = __privateGet(this, _connection2, connection_get);
    const channelArguments = __privateGet(this, _channelArguments, channelArguments_get);
    connection.on(protocol.ChromiumBidi.Script.EventNames.Message, __privateGet(this, _handleArgumentsMessage));
    connection.on(protocol.ChromiumBidi.Script.EventNames.Message, __privateGet(this, _handleResolveMessage));
    connection.on(protocol.ChromiumBidi.Script.EventNames.Message, __privateGet(this, _handleRejectMessage));
    const functionDeclaration = crawler.stringifyFunction(crawler.interpolateFunction((sendArgs, sendResolve, sendReject) => {
      let id = 0;
      Object.assign(globalThis, {
        [PLACEHOLDER("name")]: function(...args) {
          return new Promise((resolve, reject) => {
            sendArgs([id, args]);
            sendResolve([id, resolve]);
            sendReject([id, reject]);
            ++id;
          });
        }
      });
    }, { name: JSON.stringify(this.name) }));
    const { result } = await connection.send("script.addPreloadScript", {
      functionDeclaration,
      arguments: channelArguments,
      contexts: [__privateGet(this, _frame).page().mainFrame()._id]
    });
    __privateSet(this, _preloadScriptId, result.script);
    await Promise.all(__privateGet(this, _frame).page().frames().map(async (frame) => {
      return await connection.send("script.callFunction", {
        functionDeclaration,
        arguments: channelArguments,
        awaitPromise: false,
        target: frame.mainRealm().realm.target
      });
    }));
  }
  [Symbol.dispose]() {
    void this[Symbol.asyncDispose]().catch(crawler.debugError);
  }
  async [Symbol.asyncDispose]() {
    if (__privateGet(this, _preloadScriptId)) {
      await __privateGet(this, _connection2, connection_get).send("script.removePreloadScript", {
        script: __privateGet(this, _preloadScriptId)
      });
    }
  }
}
_frame = new WeakMap();
_apply = new WeakMap();
_channels2 = new WeakMap();
_callerInfos = new WeakMap();
_preloadScriptId = new WeakMap();
_handleArgumentsMessage = new WeakMap();
_connection2 = new WeakSet();
connection_get = function() {
  return __privateGet(this, _frame).context().connection;
};
_channelArguments = new WeakSet();
channelArguments_get = function() {
  return [
    {
      type: "channel",
      value: {
        channel: __privateGet(this, _channels2).args,
        ownership: "root"
      }
    },
    {
      type: "channel",
      value: {
        channel: __privateGet(this, _channels2).resolve,
        ownership: "root"
      }
    },
    {
      type: "channel",
      value: {
        channel: __privateGet(this, _channels2).reject,
        ownership: "root"
      }
    }
  ];
};
_handleResolveMessage = new WeakMap();
_handleRejectMessage = new WeakMap();
_getCallbacksAndRemoteValue = new WeakSet();
getCallbacksAndRemoteValue_fn = function(params) {
  const { data, source } = params;
  crawler.assert(data.type === "array");
  crawler.assert(data.value);
  const callerIdRemote = data.value[0];
  crawler.assert(callerIdRemote);
  crawler.assert(callerIdRemote.type === "number");
  crawler.assert(typeof callerIdRemote.value === "number");
  let bindingMap = __privateGet(this, _callerInfos).get(source.realm);
  if (!bindingMap) {
    bindingMap = /* @__PURE__ */ new Map();
    __privateGet(this, _callerInfos).set(source.realm, bindingMap);
  }
  const callerId = callerIdRemote.value;
  let callbacks = bindingMap.get(callerId);
  if (!callbacks) {
    callbacks = {
      resolve: new crawler.Deferred(),
      reject: new crawler.Deferred()
    };
    bindingMap.set(callerId, callbacks);
  }
  return { callbacks, remoteValue: data };
};
function getBiDiLifeCycles(event) {
  if (Array.isArray(event)) {
    const pageLifeCycle = event.some((lifeCycle) => {
      return lifeCycle !== "domcontentloaded";
    }) ? "load" : "domcontentloaded";
    const networkLifeCycle = event.reduce((acc, lifeCycle) => {
      if (lifeCycle === "networkidle0") {
        return lifeCycle;
      } else if (acc !== "networkidle0" && lifeCycle === "networkidle2") {
        return lifeCycle;
      }
      return acc;
    }, null);
    return [pageLifeCycle, networkLifeCycle];
  }
  if (event === "networkidle0" || event === "networkidle2") {
    return ["load", event];
  }
  return [event, null];
}
const lifeCycleToReadinessState = /* @__PURE__ */ new Map([
  [
    "load",
    "complete"
    /* Bidi.BrowsingContext.ReadinessState.Complete */
  ],
  [
    "domcontentloaded",
    "interactive"
    /* Bidi.BrowsingContext.ReadinessState.Interactive */
  ]
]);
function getBiDiReadinessState(event) {
  const lifeCycles = getBiDiLifeCycles(event);
  const readiness = lifeCycleToReadinessState.get(lifeCycles[0]);
  return [readiness, lifeCycles[1]];
}
const lifeCycleToSubscribedEvent = /* @__PURE__ */ new Map([
  ["load", "browsingContext.load"],
  ["domcontentloaded", "browsingContext.domContentLoaded"]
]);
function getBiDiLifecycleEvent(event) {
  const lifeCycles = getBiDiLifeCycles(event);
  const bidiEvent = lifeCycleToSubscribedEvent.get(lifeCycles[0]);
  return [bidiEvent, lifeCycles[1]];
}
function rewriteNavigationError(message, ms) {
  return crawler.Wr((error) => {
    if (error instanceof crawler.ProtocolError) {
      error.message += ` at ${message}`;
    } else if (error instanceof crawler.TimeoutError) {
      error.message = `Navigation timeout of ${ms} ms exceeded`;
    }
    throw error;
  });
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const MAIN_SANDBOX = Symbol("mainSandbox");
const PUPPETEER_SANDBOX = Symbol("puppeteerSandbox");
class Sandbox extends crawler.Realm {
  constructor(name, frame, realm, timeoutSettings) {
    super(timeoutSettings);
    __publicField(this, "name");
    __publicField(this, "realm");
    __privateAdd(this, _frame2, void 0);
    this.name = name;
    this.realm = realm;
    __privateSet(this, _frame2, frame);
    this.realm.setSandbox(this);
  }
  get environment() {
    return __privateGet(this, _frame2);
  }
  async evaluateHandle(pageFunction, ...args) {
    pageFunction = crawler.withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
    return await this.realm.evaluateHandle(pageFunction, ...args);
  }
  async evaluate(pageFunction, ...args) {
    pageFunction = crawler.withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
    return await this.realm.evaluate(pageFunction, ...args);
  }
  async adoptHandle(handle) {
    return await this.evaluateHandle((node) => {
      return node;
    }, handle);
  }
  async transferHandle(handle) {
    if (handle.realm === this) {
      return handle;
    }
    const transferredHandle = await this.evaluateHandle((node) => {
      return node;
    }, handle);
    await handle.dispose();
    return transferredHandle;
  }
  async adoptBackendNode(backendNodeId) {
    const { object } = await this.environment.client.send("DOM.resolveNode", {
      backendNodeId
    });
    return new BidiElementHandle(this, {
      handle: object.objectId,
      type: "node"
    });
  }
}
_frame2 = new WeakMap();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = globalThis && globalThis.__runInitializers || function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate = globalThis && globalThis.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let BidiFrame = (() => {
  var _page4, _context7, _timeoutSettings, _abortDeferred, _disposed2, _exposedFunctions, _a3;
  let _classSuper = crawler.Frame;
  let _instanceExtraInitializers = [];
  let _goto_decorators;
  let _setContent_decorators;
  let _waitForNavigation_decorators;
  return _a3 = class extends _classSuper {
    constructor(page, context, timeoutSettings, parentId) {
      super();
      __privateAdd(this, _page4, (__runInitializers(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _context7, void 0);
      __privateAdd(this, _timeoutSettings, void 0);
      __privateAdd(this, _abortDeferred, crawler.Deferred.create());
      __privateAdd(this, _disposed2, false);
      __publicField(this, "sandboxes");
      __publicField(this, "_id");
      __privateAdd(this, _exposedFunctions, /* @__PURE__ */ new Map());
      __privateSet(this, _page4, page);
      __privateSet(this, _context7, context);
      __privateSet(this, _timeoutSettings, timeoutSettings);
      this._id = __privateGet(this, _context7).id;
      this._parentId = parentId ?? void 0;
      this.sandboxes = {
        [MAIN_SANDBOX]: new Sandbox(void 0, this, context, timeoutSettings),
        [PUPPETEER_SANDBOX]: new Sandbox(crawler.UTILITY_WORLD_NAME, this, context.createRealmForSandbox(), timeoutSettings)
      };
    }
    get client() {
      return this.context().cdpSession;
    }
    mainRealm() {
      return this.sandboxes[MAIN_SANDBOX];
    }
    isolatedRealm() {
      return this.sandboxes[PUPPETEER_SANDBOX];
    }
    page() {
      return __privateGet(this, _page4);
    }
    isOOPFrame() {
      throw new crawler.UnsupportedOperation();
    }
    url() {
      return __privateGet(this, _context7).url;
    }
    parentFrame() {
      return __privateGet(this, _page4).frame(this._parentId ?? "");
    }
    childFrames() {
      return __privateGet(this, _page4).childFrames(__privateGet(this, _context7).id);
    }
    async goto(url, options = {}) {
      const { waitUntil = "load", timeout: ms = __privateGet(this, _timeoutSettings).navigationTimeout() } = options;
      const [readiness, networkIdle] = getBiDiReadinessState(waitUntil);
      const result$ = crawler.Ee(crawler.F(__privateGet(this, _context7).connection.send("browsingContext.navigate", {
        context: __privateGet(this, _context7).id,
        url,
        wait: readiness
      })), ...networkIdle !== null ? [
        __privateGet(this, _page4).waitForNetworkIdle$({
          timeout: ms,
          concurrency: networkIdle === "networkidle2" ? 2 : 0,
          idleTime: crawler.NETWORK_IDLE_TIME
        })
      ] : []).pipe(crawler.k(([{ result: result2 }]) => {
        return result2;
      }), crawler.Fe(crawler.timeout(ms), crawler.F(__privateGet(this, _abortDeferred).valueOrThrow())), rewriteNavigationError(url, ms));
      const result = await crawler.me(result$);
      return __privateGet(this, _page4).getNavigationResponse(result.navigation);
    }
    async setContent(html, options = {}) {
      const { waitUntil = "load", timeout: ms = __privateGet(this, _timeoutSettings).navigationTimeout() } = options;
      const [waitEvent, networkIdle] = getBiDiLifecycleEvent(waitUntil);
      const result$ = crawler.Ee(crawler.be([
        crawler.fromEmitterEvent(__privateGet(this, _context7), waitEvent).pipe(crawler.Pe()),
        crawler.F(this.setFrameContent(html))
      ]).pipe(crawler.k(() => {
        return null;
      })), ...networkIdle !== null ? [
        __privateGet(this, _page4).waitForNetworkIdle$({
          timeout: ms,
          concurrency: networkIdle === "networkidle2" ? 2 : 0,
          idleTime: crawler.NETWORK_IDLE_TIME
        })
      ] : []).pipe(crawler.Fe(crawler.timeout(ms), crawler.F(__privateGet(this, _abortDeferred).valueOrThrow())), rewriteNavigationError("setContent", ms));
      await crawler.me(result$);
    }
    context() {
      return __privateGet(this, _context7);
    }
    async waitForNavigation(options = {}) {
      const { waitUntil = "load", timeout: ms = __privateGet(this, _timeoutSettings).navigationTimeout() } = options;
      const [waitUntilEvent, networkIdle] = getBiDiLifecycleEvent(waitUntil);
      const navigation$ = crawler.we(crawler.be([
        crawler.fromEmitterEvent(__privateGet(this, _context7), protocol.ChromiumBidi.BrowsingContext.EventNames.NavigationStarted).pipe(crawler.Pe()),
        crawler.fromEmitterEvent(__privateGet(this, _context7), waitUntilEvent).pipe(crawler.Pe())
      ]), crawler.fromEmitterEvent(__privateGet(this, _context7), protocol.ChromiumBidi.BrowsingContext.EventNames.FragmentNavigated)).pipe(crawler.k((result2) => {
        if (Array.isArray(result2)) {
          return { result: result2[1] };
        }
        return { result: result2 };
      }));
      const result$ = crawler.Ee(navigation$, ...networkIdle !== null ? [
        __privateGet(this, _page4).waitForNetworkIdle$({
          timeout: ms,
          concurrency: networkIdle === "networkidle2" ? 2 : 0,
          idleTime: crawler.NETWORK_IDLE_TIME
        })
      ] : []).pipe(crawler.k(([{ result: result2 }]) => {
        return result2;
      }), crawler.Fe(crawler.timeout(ms), crawler.F(__privateGet(this, _abortDeferred).valueOrThrow())));
      const result = await crawler.me(result$);
      return __privateGet(this, _page4).getNavigationResponse(result.navigation);
    }
    waitForDevicePrompt() {
      throw new crawler.UnsupportedOperation();
    }
    get detached() {
      return __privateGet(this, _disposed2);
    }
    [(_goto_decorators = [crawler.throwIfDetached], _setContent_decorators = [crawler.throwIfDetached], _waitForNavigation_decorators = [crawler.throwIfDetached], crawler.disposeSymbol)]() {
      if (__privateGet(this, _disposed2)) {
        return;
      }
      __privateSet(this, _disposed2, true);
      __privateGet(this, _abortDeferred).reject(new Error("Frame detached"));
      __privateGet(this, _context7).dispose();
      this.sandboxes[MAIN_SANDBOX][crawler.disposeSymbol]();
      this.sandboxes[PUPPETEER_SANDBOX][crawler.disposeSymbol]();
    }
    async exposeFunction(name, apply) {
      if (__privateGet(this, _exposedFunctions).has(name)) {
        throw new Error(`Failed to add page binding with name ${name}: globalThis['${name}'] already exists!`);
      }
      const exposeable = new ExposeableFunction(this, name, apply);
      __privateGet(this, _exposedFunctions).set(name, exposeable);
      try {
        await exposeable.expose();
      } catch (error) {
        __privateGet(this, _exposedFunctions).delete(name);
        throw error;
      }
    }
    waitForSelector(selector, options) {
      if (selector.startsWith("aria")) {
        throw new crawler.UnsupportedOperation("ARIA selector is not supported for BiDi!");
      }
      return super.waitForSelector(selector, options);
    }
  }, _page4 = new WeakMap(), _context7 = new WeakMap(), _timeoutSettings = new WeakMap(), _abortDeferred = new WeakMap(), _disposed2 = new WeakMap(), _exposedFunctions = new WeakMap(), (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate(_a3, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: (obj) => "goto" in obj, get: (obj) => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate(_a3, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: (obj) => "setContent" in obj, get: (obj) => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate(_a3, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: (obj) => "waitForNavigation" in obj, get: (obj) => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a3;
})();
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var SourceActionsType;
(function(SourceActionsType2) {
  SourceActionsType2["None"] = "none";
  SourceActionsType2["Key"] = "key";
  SourceActionsType2["Pointer"] = "pointer";
  SourceActionsType2["Wheel"] = "wheel";
})(SourceActionsType || (SourceActionsType = {}));
var ActionType;
(function(ActionType2) {
  ActionType2["Pause"] = "pause";
  ActionType2["KeyDown"] = "keyDown";
  ActionType2["KeyUp"] = "keyUp";
  ActionType2["PointerUp"] = "pointerUp";
  ActionType2["PointerDown"] = "pointerDown";
  ActionType2["PointerMove"] = "pointerMove";
  ActionType2["Scroll"] = "scroll";
})(ActionType || (ActionType = {}));
const getBidiKeyValue = (key) => {
  switch (key) {
    case "\r":
    case "\n":
      key = "Enter";
      break;
  }
  if ([...key].length === 1) {
    return key;
  }
  switch (key) {
    case "Cancel":
      return "";
    case "Help":
      return "";
    case "Backspace":
      return "";
    case "Tab":
      return "";
    case "Clear":
      return "";
    case "Enter":
      return "";
    case "Shift":
    case "ShiftLeft":
      return "";
    case "Control":
    case "ControlLeft":
      return "";
    case "Alt":
    case "AltLeft":
      return "";
    case "Pause":
      return "";
    case "Escape":
      return "";
    case "PageUp":
      return "";
    case "PageDown":
      return "";
    case "End":
      return "";
    case "Home":
      return "";
    case "ArrowLeft":
      return "";
    case "ArrowUp":
      return "";
    case "ArrowRight":
      return "";
    case "ArrowDown":
      return "";
    case "Insert":
      return "";
    case "Delete":
      return "";
    case "NumpadEqual":
      return "";
    case "Numpad0":
      return "";
    case "Numpad1":
      return "";
    case "Numpad2":
      return "";
    case "Numpad3":
      return "";
    case "Numpad4":
      return "";
    case "Numpad5":
      return "";
    case "Numpad6":
      return "";
    case "Numpad7":
      return "";
    case "Numpad8":
      return "";
    case "Numpad9":
      return "";
    case "NumpadMultiply":
      return "";
    case "NumpadAdd":
      return "";
    case "NumpadSubtract":
      return "";
    case "NumpadDecimal":
      return "";
    case "NumpadDivide":
      return "";
    case "F1":
      return "";
    case "F2":
      return "";
    case "F3":
      return "";
    case "F4":
      return "";
    case "F5":
      return "";
    case "F6":
      return "";
    case "F7":
      return "";
    case "F8":
      return "";
    case "F9":
      return "";
    case "F10":
      return "";
    case "F11":
      return "";
    case "F12":
      return "";
    case "Meta":
    case "MetaLeft":
      return "";
    case "ShiftRight":
      return "";
    case "ControlRight":
      return "";
    case "AltRight":
      return "";
    case "MetaRight":
      return "";
    case "Digit0":
      return "0";
    case "Digit1":
      return "1";
    case "Digit2":
      return "2";
    case "Digit3":
      return "3";
    case "Digit4":
      return "4";
    case "Digit5":
      return "5";
    case "Digit6":
      return "6";
    case "Digit7":
      return "7";
    case "Digit8":
      return "8";
    case "Digit9":
      return "9";
    case "KeyA":
      return "a";
    case "KeyB":
      return "b";
    case "KeyC":
      return "c";
    case "KeyD":
      return "d";
    case "KeyE":
      return "e";
    case "KeyF":
      return "f";
    case "KeyG":
      return "g";
    case "KeyH":
      return "h";
    case "KeyI":
      return "i";
    case "KeyJ":
      return "j";
    case "KeyK":
      return "k";
    case "KeyL":
      return "l";
    case "KeyM":
      return "m";
    case "KeyN":
      return "n";
    case "KeyO":
      return "o";
    case "KeyP":
      return "p";
    case "KeyQ":
      return "q";
    case "KeyR":
      return "r";
    case "KeyS":
      return "s";
    case "KeyT":
      return "t";
    case "KeyU":
      return "u";
    case "KeyV":
      return "v";
    case "KeyW":
      return "w";
    case "KeyX":
      return "x";
    case "KeyY":
      return "y";
    case "KeyZ":
      return "z";
    case "Semicolon":
      return ";";
    case "Equal":
      return "=";
    case "Comma":
      return ",";
    case "Minus":
      return "-";
    case "Period":
      return ".";
    case "Slash":
      return "/";
    case "Backquote":
      return "`";
    case "BracketLeft":
      return "[";
    case "Backslash":
      return "\\";
    case "BracketRight":
      return "]";
    case "Quote":
      return '"';
    default:
      throw new Error(`Unknown key: "${key}"`);
  }
};
class BidiKeyboard extends crawler.Keyboard {
  constructor(page) {
    super();
    __privateAdd(this, _page, void 0);
    __privateSet(this, _page, page);
  }
  async down(key, _options) {
    await __privateGet(this, _page).connection.send("input.performActions", {
      context: __privateGet(this, _page).mainFrame()._id,
      actions: [
        {
          type: SourceActionsType.Key,
          id: "__puppeteer_keyboard",
          actions: [
            {
              type: ActionType.KeyDown,
              value: getBidiKeyValue(key)
            }
          ]
        }
      ]
    });
  }
  async up(key) {
    await __privateGet(this, _page).connection.send("input.performActions", {
      context: __privateGet(this, _page).mainFrame()._id,
      actions: [
        {
          type: SourceActionsType.Key,
          id: "__puppeteer_keyboard",
          actions: [
            {
              type: ActionType.KeyUp,
              value: getBidiKeyValue(key)
            }
          ]
        }
      ]
    });
  }
  async press(key, options = {}) {
    const { delay = 0 } = options;
    const actions = [
      {
        type: ActionType.KeyDown,
        value: getBidiKeyValue(key)
      }
    ];
    if (delay > 0) {
      actions.push({
        type: ActionType.Pause,
        duration: delay
      });
    }
    actions.push({
      type: ActionType.KeyUp,
      value: getBidiKeyValue(key)
    });
    await __privateGet(this, _page).connection.send("input.performActions", {
      context: __privateGet(this, _page).mainFrame()._id,
      actions: [
        {
          type: SourceActionsType.Key,
          id: "__puppeteer_keyboard",
          actions
        }
      ]
    });
  }
  async type(text, options = {}) {
    const { delay = 0 } = options;
    const values = [...text].map(getBidiKeyValue);
    const actions = [];
    if (delay <= 0) {
      for (const value of values) {
        actions.push({
          type: ActionType.KeyDown,
          value
        }, {
          type: ActionType.KeyUp,
          value
        });
      }
    } else {
      for (const value of values) {
        actions.push({
          type: ActionType.KeyDown,
          value
        }, {
          type: ActionType.Pause,
          duration: delay
        }, {
          type: ActionType.KeyUp,
          value
        });
      }
    }
    await __privateGet(this, _page).connection.send("input.performActions", {
      context: __privateGet(this, _page).mainFrame()._id,
      actions: [
        {
          type: SourceActionsType.Key,
          id: "__puppeteer_keyboard",
          actions
        }
      ]
    });
  }
  async sendCharacter(char) {
    if ([...char].length > 1) {
      throw new Error("Cannot send more than 1 character.");
    }
    const frame = await __privateGet(this, _page).focusedFrame();
    await frame.isolatedRealm().evaluate(async (char2) => {
      document.execCommand("insertText", false, char2);
    }, char);
  }
}
_page = new WeakMap();
const getBidiButton = (button) => {
  switch (button) {
    case crawler.MouseButton.Left:
      return 0;
    case crawler.MouseButton.Middle:
      return 1;
    case crawler.MouseButton.Right:
      return 2;
    case crawler.MouseButton.Back:
      return 3;
    case crawler.MouseButton.Forward:
      return 4;
  }
};
class BidiMouse extends crawler.Mouse {
  constructor(context) {
    super();
    __privateAdd(this, _context5, void 0);
    __privateAdd(this, _lastMovePoint, { x: 0, y: 0 });
    __privateSet(this, _context5, context);
  }
  async reset() {
    __privateSet(this, _lastMovePoint, { x: 0, y: 0 });
    await __privateGet(this, _context5).connection.send("input.releaseActions", {
      context: __privateGet(this, _context5).id
    });
  }
  async move(x2, y2, options = {}) {
    const from = __privateGet(this, _lastMovePoint);
    const to = {
      x: Math.round(x2),
      y: Math.round(y2)
    };
    const actions = [];
    const steps = options.steps ?? 0;
    for (let i = 0; i < steps; ++i) {
      actions.push({
        type: ActionType.PointerMove,
        x: from.x + (to.x - from.x) * (i / steps),
        y: from.y + (to.y - from.y) * (i / steps),
        origin: options.origin
      });
    }
    actions.push({
      type: ActionType.PointerMove,
      ...to,
      origin: options.origin
    });
    __privateSet(this, _lastMovePoint, to);
    await __privateGet(this, _context5).connection.send("input.performActions", {
      context: __privateGet(this, _context5).id,
      actions: [
        {
          type: SourceActionsType.Pointer,
          id: "__puppeteer_mouse",
          actions
        }
      ]
    });
  }
  async down(options = {}) {
    await __privateGet(this, _context5).connection.send("input.performActions", {
      context: __privateGet(this, _context5).id,
      actions: [
        {
          type: SourceActionsType.Pointer,
          id: "__puppeteer_mouse",
          actions: [
            {
              type: ActionType.PointerDown,
              button: getBidiButton(options.button ?? crawler.MouseButton.Left)
            }
          ]
        }
      ]
    });
  }
  async up(options = {}) {
    await __privateGet(this, _context5).connection.send("input.performActions", {
      context: __privateGet(this, _context5).id,
      actions: [
        {
          type: SourceActionsType.Pointer,
          id: "__puppeteer_mouse",
          actions: [
            {
              type: ActionType.PointerUp,
              button: getBidiButton(options.button ?? crawler.MouseButton.Left)
            }
          ]
        }
      ]
    });
  }
  async click(x2, y2, options = {}) {
    const actions = [
      {
        type: ActionType.PointerMove,
        x: Math.round(x2),
        y: Math.round(y2),
        origin: options.origin
      }
    ];
    const pointerDownAction = {
      type: ActionType.PointerDown,
      button: getBidiButton(options.button ?? crawler.MouseButton.Left)
    };
    const pointerUpAction = {
      type: ActionType.PointerUp,
      button: pointerDownAction.button
    };
    for (let i = 1; i < (options.count ?? 1); ++i) {
      actions.push(pointerDownAction, pointerUpAction);
    }
    actions.push(pointerDownAction);
    if (options.delay) {
      actions.push({
        type: ActionType.Pause,
        duration: options.delay
      });
    }
    actions.push(pointerUpAction);
    await __privateGet(this, _context5).connection.send("input.performActions", {
      context: __privateGet(this, _context5).id,
      actions: [
        {
          type: SourceActionsType.Pointer,
          id: "__puppeteer_mouse",
          actions
        }
      ]
    });
  }
  async wheel(options = {}) {
    await __privateGet(this, _context5).connection.send("input.performActions", {
      context: __privateGet(this, _context5).id,
      actions: [
        {
          type: SourceActionsType.Wheel,
          id: "__puppeteer_wheel",
          actions: [
            {
              type: ActionType.Scroll,
              ...__privateGet(this, _lastMovePoint) ?? {
                x: 0,
                y: 0
              },
              deltaX: options.deltaX ?? 0,
              deltaY: options.deltaY ?? 0
            }
          ]
        }
      ]
    });
  }
  drag() {
    throw new crawler.UnsupportedOperation();
  }
  dragOver() {
    throw new crawler.UnsupportedOperation();
  }
  dragEnter() {
    throw new crawler.UnsupportedOperation();
  }
  drop() {
    throw new crawler.UnsupportedOperation();
  }
  dragAndDrop() {
    throw new crawler.UnsupportedOperation();
  }
}
_context5 = new WeakMap();
_lastMovePoint = new WeakMap();
class BidiTouchscreen extends crawler.Touchscreen {
  constructor(context) {
    super();
    __privateAdd(this, _context6, void 0);
    __privateSet(this, _context6, context);
  }
  async touchStart(x2, y2, options = {}) {
    await __privateGet(this, _context6).connection.send("input.performActions", {
      context: __privateGet(this, _context6).id,
      actions: [
        {
          type: SourceActionsType.Pointer,
          id: "__puppeteer_finger",
          parameters: {
            pointerType: "touch"
          },
          actions: [
            {
              type: ActionType.PointerMove,
              x: Math.round(x2),
              y: Math.round(y2),
              origin: options.origin
            },
            {
              type: ActionType.PointerDown,
              button: 0
            }
          ]
        }
      ]
    });
  }
  async touchMove(x2, y2, options = {}) {
    await __privateGet(this, _context6).connection.send("input.performActions", {
      context: __privateGet(this, _context6).id,
      actions: [
        {
          type: SourceActionsType.Pointer,
          id: "__puppeteer_finger",
          parameters: {
            pointerType: "touch"
          },
          actions: [
            {
              type: ActionType.PointerMove,
              x: Math.round(x2),
              y: Math.round(y2),
              origin: options.origin
            }
          ]
        }
      ]
    });
  }
  async touchEnd() {
    await __privateGet(this, _context6).connection.send("input.performActions", {
      context: __privateGet(this, _context6).id,
      actions: [
        {
          type: SourceActionsType.Pointer,
          id: "__puppeteer_finger",
          parameters: {
            pointerType: "touch"
          },
          actions: [
            {
              type: ActionType.PointerUp,
              button: 0
            }
          ]
        }
      ]
    });
  }
}
_context6 = new WeakMap();
class BidiHTTPRequest extends crawler.HTTPRequest {
  constructor(event, frame, redirectChain = []) {
    super();
    __publicField(this, "_response", null);
    __publicField(this, "_redirectChain");
    __publicField(this, "_navigationId");
    __privateAdd(this, _url4, void 0);
    __privateAdd(this, _resourceType, void 0);
    __privateAdd(this, _method, void 0);
    __privateAdd(this, _postData, void 0);
    __privateAdd(this, _headers, {});
    __privateAdd(this, _initiator, void 0);
    __privateAdd(this, _frame3, void 0);
    __privateSet(this, _url4, event.request.url);
    __privateSet(this, _resourceType, event.initiator.type.toLowerCase());
    __privateSet(this, _method, event.request.method);
    __privateSet(this, _postData, void 0);
    __privateSet(this, _initiator, event.initiator);
    __privateSet(this, _frame3, frame);
    this._requestId = event.request.request;
    this._redirectChain = redirectChain;
    this._navigationId = event.navigation;
    for (const header of event.request.headers) {
      if (header.value.type === "string") {
        __privateGet(this, _headers)[header.name.toLowerCase()] = header.value.value;
      }
    }
  }
  get client() {
    throw new crawler.UnsupportedOperation();
  }
  url() {
    return __privateGet(this, _url4);
  }
  resourceType() {
    return __privateGet(this, _resourceType);
  }
  method() {
    return __privateGet(this, _method);
  }
  postData() {
    return __privateGet(this, _postData);
  }
  hasPostData() {
    return __privateGet(this, _postData) !== void 0;
  }
  async fetchPostData() {
    return __privateGet(this, _postData);
  }
  headers() {
    return __privateGet(this, _headers);
  }
  response() {
    return this._response;
  }
  isNavigationRequest() {
    return Boolean(this._navigationId);
  }
  initiator() {
    return __privateGet(this, _initiator);
  }
  redirectChain() {
    return this._redirectChain.slice();
  }
  enqueueInterceptAction(pendingHandler) {
    void pendingHandler();
  }
  frame() {
    return __privateGet(this, _frame3);
  }
  continueRequestOverrides() {
    throw new crawler.UnsupportedOperation();
  }
  continue(_overrides = {}) {
    throw new crawler.UnsupportedOperation();
  }
  responseForRequest() {
    throw new crawler.UnsupportedOperation();
  }
  abortErrorReason() {
    throw new crawler.UnsupportedOperation();
  }
  interceptResolutionState() {
    throw new crawler.UnsupportedOperation();
  }
  isInterceptResolutionHandled() {
    throw new crawler.UnsupportedOperation();
  }
  finalizeInterceptions() {
    throw new crawler.UnsupportedOperation();
  }
  abort() {
    throw new crawler.UnsupportedOperation();
  }
  respond(_response2, _priority) {
    throw new crawler.UnsupportedOperation();
  }
  failure() {
    throw new crawler.UnsupportedOperation();
  }
}
_url4 = new WeakMap();
_resourceType = new WeakMap();
_method = new WeakMap();
_postData = new WeakMap();
_headers = new WeakMap();
_initiator = new WeakMap();
_frame3 = new WeakMap();
class BidiHTTPResponse extends crawler.HTTPResponse {
  constructor(request, { response }) {
    super();
    __privateAdd(this, _request2, void 0);
    __privateAdd(this, _remoteAddress, void 0);
    __privateAdd(this, _status, void 0);
    __privateAdd(this, _statusText, void 0);
    __privateAdd(this, _url5, void 0);
    __privateAdd(this, _fromCache, void 0);
    __privateAdd(this, _headers2, {});
    __privateAdd(this, _timings, void 0);
    __privateSet(this, _request2, request);
    __privateSet(this, _remoteAddress, {
      ip: "",
      port: -1
    });
    __privateSet(this, _url5, response.url);
    __privateSet(this, _fromCache, response.fromCache);
    __privateSet(this, _status, response.status);
    __privateSet(this, _statusText, response.statusText);
    __privateSet(this, _timings, null);
    for (const header of response.headers || []) {
      if (header.value.type === "string") {
        __privateGet(this, _headers2)[header.name.toLowerCase()] = header.value.value;
      }
    }
  }
  remoteAddress() {
    return __privateGet(this, _remoteAddress);
  }
  url() {
    return __privateGet(this, _url5);
  }
  status() {
    return __privateGet(this, _status);
  }
  statusText() {
    return __privateGet(this, _statusText);
  }
  headers() {
    return __privateGet(this, _headers2);
  }
  request() {
    return __privateGet(this, _request2);
  }
  fromCache() {
    return __privateGet(this, _fromCache);
  }
  timing() {
    return __privateGet(this, _timings);
  }
  frame() {
    return __privateGet(this, _request2).frame();
  }
  fromServiceWorker() {
    return false;
  }
  securityDetails() {
    throw new crawler.UnsupportedOperation();
  }
  buffer() {
    throw new crawler.UnsupportedOperation();
  }
}
_request2 = new WeakMap();
_remoteAddress = new WeakMap();
_status = new WeakMap();
_statusText = new WeakMap();
_url5 = new WeakMap();
_fromCache = new WeakMap();
_headers2 = new WeakMap();
_timings = new WeakMap();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class BidiNetworkManager extends crawler.EventEmitter {
  constructor(connection, page) {
    super();
    __privateAdd(this, _onBeforeRequestSent);
    __privateAdd(this, _onResponseStarted);
    __privateAdd(this, _onResponseCompleted);
    __privateAdd(this, _onFetchError);
    __privateAdd(this, _connection3, void 0);
    __privateAdd(this, _page2, void 0);
    __privateAdd(this, _subscriptions, new crawler.DisposableStack());
    __privateAdd(this, _requestMap2, /* @__PURE__ */ new Map());
    __privateAdd(this, _navigationMap, /* @__PURE__ */ new Map());
    __privateSet(this, _connection3, connection);
    __privateSet(this, _page2, page);
    __privateGet(this, _subscriptions).use(new crawler.EventSubscription(__privateGet(this, _connection3), "network.beforeRequestSent", __privateMethod(this, _onBeforeRequestSent, onBeforeRequestSent_fn).bind(this)));
    __privateGet(this, _subscriptions).use(new crawler.EventSubscription(__privateGet(this, _connection3), "network.responseStarted", __privateMethod(this, _onResponseStarted, onResponseStarted_fn).bind(this)));
    __privateGet(this, _subscriptions).use(new crawler.EventSubscription(__privateGet(this, _connection3), "network.responseCompleted", __privateMethod(this, _onResponseCompleted, onResponseCompleted_fn).bind(this)));
    __privateGet(this, _subscriptions).use(new crawler.EventSubscription(__privateGet(this, _connection3), "network.fetchError", __privateMethod(this, _onFetchError, onFetchError_fn).bind(this)));
  }
  getNavigationResponse(navigationId) {
    if (!navigationId) {
      return null;
    }
    const response = __privateGet(this, _navigationMap).get(navigationId);
    return response ?? null;
  }
  inFlightRequestsCount() {
    let inFlightRequestCounter = 0;
    for (const request of __privateGet(this, _requestMap2).values()) {
      if (!request.response() || request._failureText) {
        inFlightRequestCounter++;
      }
    }
    return inFlightRequestCounter;
  }
  clearMapAfterFrameDispose(frame) {
    for (const [id, request] of __privateGet(this, _requestMap2).entries()) {
      if (request.frame() === frame) {
        __privateGet(this, _requestMap2).delete(id);
      }
    }
    for (const [id, response] of __privateGet(this, _navigationMap).entries()) {
      if (response.frame() === frame) {
        __privateGet(this, _navigationMap).delete(id);
      }
    }
  }
  dispose() {
    this.removeAllListeners();
    __privateGet(this, _requestMap2).clear();
    __privateGet(this, _navigationMap).clear();
    __privateGet(this, _subscriptions).dispose();
  }
}
_connection3 = new WeakMap();
_page2 = new WeakMap();
_subscriptions = new WeakMap();
_requestMap2 = new WeakMap();
_navigationMap = new WeakMap();
_onBeforeRequestSent = new WeakSet();
onBeforeRequestSent_fn = function(event) {
  const frame = __privateGet(this, _page2).frame(event.context ?? "");
  if (!frame) {
    return;
  }
  const request = __privateGet(this, _requestMap2).get(event.request.request);
  let upsertRequest;
  if (request) {
    request._redirectChain.push(request);
    upsertRequest = new BidiHTTPRequest(event, frame, request._redirectChain);
  } else {
    upsertRequest = new BidiHTTPRequest(event, frame, []);
  }
  __privateGet(this, _requestMap2).set(event.request.request, upsertRequest);
  this.emit(crawler.NetworkManagerEvent.Request, upsertRequest);
};
_onResponseStarted = new WeakSet();
onResponseStarted_fn = function(_event2) {
};
_onResponseCompleted = new WeakSet();
onResponseCompleted_fn = function(event) {
  const request = __privateGet(this, _requestMap2).get(event.request.request);
  if (!request) {
    return;
  }
  const response = new BidiHTTPResponse(request, event);
  request._response = response;
  if (event.navigation) {
    __privateGet(this, _navigationMap).set(event.navigation, response);
  }
  if (response.fromCache()) {
    this.emit(crawler.NetworkManagerEvent.RequestServedFromCache, request);
  }
  this.emit(crawler.NetworkManagerEvent.Response, response);
  this.emit(crawler.NetworkManagerEvent.RequestFinished, request);
};
_onFetchError = new WeakSet();
onFetchError_fn = function(event) {
  const request = __privateGet(this, _requestMap2).get(event.request.request);
  if (!request) {
    return;
  }
  request._failureText = event.errorText;
  this.emit(crawler.NetworkManagerEvent.RequestFailed, request);
  __privateGet(this, _requestMap2).delete(event.request.request);
};
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __addDisposableResource = globalThis && globalThis.__addDisposableResource || function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources = globalThis && globalThis.__disposeResources || function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    function next() {
      while (env.stack.length) {
        var rec = env.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env.hasError)
        throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
class BidiPage extends crawler.Page {
  constructor(browsingContext, browserContext, target) {
    super();
    __privateAdd(this, _onFrameLoaded);
    __privateAdd(this, _onFrameFragmentNavigated);
    __privateAdd(this, _onFrameDOMContentLoaded);
    __privateAdd(this, _onContextCreated);
    __privateAdd(this, _onContextDestroyed);
    __privateAdd(this, _removeFramesRecursively);
    __privateAdd(this, _onLogEntryAdded);
    __privateAdd(this, _onDialog);
    __privateAdd(this, _go);
    __privateAdd(this, _accessibility, void 0);
    __privateAdd(this, _connection4, void 0);
    __privateAdd(this, _frameTree, new crawler.FrameTree());
    __privateAdd(this, _networkManager, void 0);
    __privateAdd(this, _viewport, null);
    __privateAdd(this, _closedDeferred, crawler.Deferred.create());
    __privateAdd(this, _subscribedEvents, /* @__PURE__ */ new Map([
      ["log.entryAdded", __privateMethod(this, _onLogEntryAdded, onLogEntryAdded_fn).bind(this)],
      ["browsingContext.load", __privateMethod(this, _onFrameLoaded, onFrameLoaded_fn).bind(this)],
      [
        "browsingContext.fragmentNavigated",
        __privateMethod(this, _onFrameFragmentNavigated, onFrameFragmentNavigated_fn).bind(this)
      ],
      [
        "browsingContext.domContentLoaded",
        __privateMethod(this, _onFrameDOMContentLoaded, onFrameDOMContentLoaded_fn).bind(this)
      ],
      ["browsingContext.userPromptOpened", __privateMethod(this, _onDialog, onDialog_fn).bind(this)]
    ]));
    __privateAdd(this, _networkManagerEvents, [
      [
        crawler.NetworkManagerEvent.Request,
        (request) => {
          this.emit("request", request);
        }
      ],
      [
        crawler.NetworkManagerEvent.RequestServedFromCache,
        (request) => {
          this.emit("requestservedfromcache", request);
        }
      ],
      [
        crawler.NetworkManagerEvent.RequestFailed,
        (request) => {
          this.emit("requestfailed", request);
        }
      ],
      [
        crawler.NetworkManagerEvent.RequestFinished,
        (request) => {
          this.emit("requestfinished", request);
        }
      ],
      [
        crawler.NetworkManagerEvent.Response,
        (response) => {
          this.emit("response", response);
        }
      ]
    ]);
    __privateAdd(this, _browsingContextEvents, /* @__PURE__ */ new Map([
      [exports.BrowsingContextEvent.Created, __privateMethod(this, _onContextCreated, onContextCreated_fn).bind(this)],
      [exports.BrowsingContextEvent.Destroyed, __privateMethod(this, _onContextDestroyed, onContextDestroyed_fn).bind(this)]
    ]));
    __privateAdd(this, _tracing, void 0);
    __privateAdd(this, _coverage, void 0);
    __privateAdd(this, _cdpEmulationManager, void 0);
    __privateAdd(this, _emulationManager, void 0);
    __privateAdd(this, _mouse, void 0);
    __privateAdd(this, _touchscreen, void 0);
    __privateAdd(this, _keyboard, void 0);
    __privateAdd(this, _browsingContext2, void 0);
    __privateAdd(this, _browserContext, void 0);
    __privateAdd(this, _target, void 0);
    __privateSet(this, _browsingContext2, browsingContext);
    __privateSet(this, _browserContext, browserContext);
    __privateSet(this, _target, target);
    __privateSet(this, _connection4, browsingContext.connection);
    for (const [event, subscriber] of __privateGet(this, _browsingContextEvents)) {
      __privateGet(this, _browsingContext2).on(event, subscriber);
    }
    __privateSet(this, _networkManager, new BidiNetworkManager(__privateGet(this, _connection4), this));
    for (const [event, subscriber] of __privateGet(this, _subscribedEvents)) {
      __privateGet(this, _connection4).on(event, subscriber);
    }
    for (const [event, subscriber] of __privateGet(this, _networkManagerEvents)) {
      __privateGet(this, _networkManager).on(event, subscriber);
    }
    const frame = new BidiFrame(this, __privateGet(this, _browsingContext2), this._timeoutSettings, __privateGet(this, _browsingContext2).parent);
    __privateGet(this, _frameTree).addFrame(frame);
    this.emit("frameattached", frame);
    __privateSet(this, _accessibility, new crawler.Accessibility(this.mainFrame().context().cdpSession));
    __privateSet(this, _tracing, new crawler.Tracing(this.mainFrame().context().cdpSession));
    __privateSet(this, _coverage, new crawler.Coverage(this.mainFrame().context().cdpSession));
    __privateSet(this, _cdpEmulationManager, new crawler.EmulationManager(this.mainFrame().context().cdpSession));
    __privateSet(this, _emulationManager, new EmulationManager(browsingContext));
    __privateSet(this, _mouse, new BidiMouse(this.mainFrame().context()));
    __privateSet(this, _touchscreen, new BidiTouchscreen(this.mainFrame().context()));
    __privateSet(this, _keyboard, new BidiKeyboard(this));
  }
  _client() {
    return this.mainFrame().context().cdpSession;
  }
  /**
   * @internal
   */
  get connection() {
    return __privateGet(this, _connection4);
  }
  async setUserAgent(userAgent, userAgentMetadata) {
    await this._client().send("Network.setUserAgentOverride", {
      userAgent,
      userAgentMetadata
    });
  }
  async setBypassCSP(enabled) {
    await this._client().send("Page.setBypassCSP", { enabled });
  }
  async queryObjects(prototypeHandle) {
    crawler.assert(!prototypeHandle.disposed, "Prototype JSHandle is disposed!");
    crawler.assert(prototypeHandle.id, "Prototype JSHandle must not be referencing primitive value");
    const response = await this.mainFrame().client.send("Runtime.queryObjects", {
      prototypeObjectId: prototypeHandle.id
    });
    return createBidiHandle(this.mainFrame().mainRealm(), {
      type: "array",
      handle: response.objects.objectId
    });
  }
  _setBrowserContext(browserContext) {
    __privateSet(this, _browserContext, browserContext);
  }
  get accessibility() {
    return __privateGet(this, _accessibility);
  }
  get tracing() {
    return __privateGet(this, _tracing);
  }
  get coverage() {
    return __privateGet(this, _coverage);
  }
  get mouse() {
    return __privateGet(this, _mouse);
  }
  get touchscreen() {
    return __privateGet(this, _touchscreen);
  }
  get keyboard() {
    return __privateGet(this, _keyboard);
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return __privateGet(this, _browserContext);
  }
  mainFrame() {
    const mainFrame = __privateGet(this, _frameTree).getMainFrame();
    crawler.assert(mainFrame, "Requesting main frame too early!");
    return mainFrame;
  }
  /**
   * @internal
   */
  async focusedFrame() {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
      const frame = __addDisposableResource(env_1, await this.mainFrame().isolatedRealm().evaluateHandle(() => {
        let frame2;
        let win = window;
        while ((win == null ? void 0 : win.document.activeElement) instanceof HTMLIFrameElement) {
          frame2 = win.document.activeElement;
          win = frame2.contentWindow;
        }
        return frame2;
      }), false);
      if (!(frame instanceof BidiElementHandle)) {
        return this.mainFrame();
      }
      return await frame.contentFrame();
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources(env_1);
    }
  }
  frames() {
    return Array.from(__privateGet(this, _frameTree).frames());
  }
  frame(frameId) {
    return __privateGet(this, _frameTree).getById(frameId ?? "") || null;
  }
  childFrames(frameId) {
    return __privateGet(this, _frameTree).childFrames(frameId);
  }
  getNavigationResponse(id) {
    return __privateGet(this, _networkManager).getNavigationResponse(id);
  }
  isClosed() {
    return __privateGet(this, _closedDeferred).finished();
  }
  async close(options) {
    if (__privateGet(this, _closedDeferred).finished()) {
      return;
    }
    __privateGet(this, _closedDeferred).reject(new crawler.TargetCloseError("Page closed!"));
    __privateGet(this, _networkManager).dispose();
    await __privateGet(this, _connection4).send("browsingContext.close", {
      context: this.mainFrame()._id,
      promptUnload: (options == null ? void 0 : options.runBeforeUnload) ?? false
    });
    this.emit("close", void 0);
    this.removeAllListeners();
  }
  async reload(options = {}) {
    const { waitUntil = "load", timeout: ms = this._timeoutSettings.navigationTimeout() } = options;
    const [readiness, networkIdle] = getBiDiReadinessState(waitUntil);
    const result$ = crawler.Ee(crawler.F(__privateGet(this, _connection4).send("browsingContext.reload", {
      context: this.mainFrame()._id,
      wait: readiness
    })), ...networkIdle !== null ? [
      this.waitForNetworkIdle$({
        timeout: ms,
        concurrency: networkIdle === "networkidle2" ? 2 : 0,
        idleTime: crawler.NETWORK_IDLE_TIME
      })
    ] : []).pipe(crawler.k(([{ result: result2 }]) => {
      return result2;
    }), crawler.Fe(crawler.timeout(ms), crawler.F(__privateGet(this, _closedDeferred).valueOrThrow())), rewriteNavigationError(this.url(), ms));
    const result = await crawler.me(result$);
    return this.getNavigationResponse(result.navigation);
  }
  setDefaultNavigationTimeout(timeout) {
    this._timeoutSettings.setDefaultNavigationTimeout(timeout);
  }
  setDefaultTimeout(timeout) {
    this._timeoutSettings.setDefaultTimeout(timeout);
  }
  getDefaultTimeout() {
    return this._timeoutSettings.timeout();
  }
  isJavaScriptEnabled() {
    return __privateGet(this, _cdpEmulationManager).javascriptEnabled;
  }
  async setGeolocation(options) {
    return await __privateGet(this, _cdpEmulationManager).setGeolocation(options);
  }
  async setJavaScriptEnabled(enabled) {
    return await __privateGet(this, _cdpEmulationManager).setJavaScriptEnabled(enabled);
  }
  async emulateMediaType(type) {
    return await __privateGet(this, _cdpEmulationManager).emulateMediaType(type);
  }
  async emulateCPUThrottling(factor) {
    return await __privateGet(this, _cdpEmulationManager).emulateCPUThrottling(factor);
  }
  async emulateMediaFeatures(features) {
    return await __privateGet(this, _cdpEmulationManager).emulateMediaFeatures(features);
  }
  async emulateTimezone(timezoneId) {
    return await __privateGet(this, _cdpEmulationManager).emulateTimezone(timezoneId);
  }
  async emulateIdleState(overrides) {
    return await __privateGet(this, _cdpEmulationManager).emulateIdleState(overrides);
  }
  async emulateVisionDeficiency(type) {
    return await __privateGet(this, _cdpEmulationManager).emulateVisionDeficiency(type);
  }
  async setViewport(viewport) {
    if (!__privateGet(this, _browsingContext2).supportsCdp()) {
      await __privateGet(this, _emulationManager).emulateViewport(viewport);
      __privateSet(this, _viewport, viewport);
      return;
    }
    const needsReload = await __privateGet(this, _cdpEmulationManager).emulateViewport(viewport);
    __privateSet(this, _viewport, viewport);
    if (needsReload) {
      await this.reload();
    }
  }
  viewport() {
    return __privateGet(this, _viewport);
  }
  async pdf(options = {}) {
    const { timeout: ms = this._timeoutSettings.timeout(), path = void 0 } = options;
    const { printBackground: background, margin, landscape, width, height, pageRanges: ranges, scale, preferCSSPageSize } = crawler.parsePDFOptions(options, "cm");
    const pageRanges = ranges ? ranges.split(", ") : [];
    const { result } = await crawler.me(crawler.F(__privateGet(this, _connection4).send("browsingContext.print", {
      context: this.mainFrame()._id,
      background,
      margin,
      orientation: landscape ? "landscape" : "portrait",
      page: {
        width,
        height
      },
      pageRanges,
      scale,
      shrinkToFit: !preferCSSPageSize
    })).pipe(crawler.Fe(crawler.timeout(ms))));
    const buffer = Buffer.from(result.data, "base64");
    await this._maybeWriteBufferToFile(path, buffer);
    return buffer;
  }
  async createPDFStream(options) {
    const buffer = await this.pdf(options);
    try {
      const { Readable } = await import("stream");
      return Readable.from(buffer);
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error("Can only pass a file path in a Node-like environment.");
      }
      throw error;
    }
  }
  async _screenshot(options) {
    const { clip, type, captureBeyondViewport, quality } = options;
    if (options.omitBackground !== void 0 && options.omitBackground) {
      throw new crawler.UnsupportedOperation(`BiDi does not support 'omitBackground'.`);
    }
    if (options.optimizeForSpeed !== void 0 && options.optimizeForSpeed) {
      throw new crawler.UnsupportedOperation(`BiDi does not support 'optimizeForSpeed'.`);
    }
    if (options.fromSurface !== void 0 && !options.fromSurface) {
      throw new crawler.UnsupportedOperation(`BiDi does not support 'fromSurface'.`);
    }
    if (clip !== void 0 && clip.scale !== void 0 && clip.scale !== 1) {
      throw new crawler.UnsupportedOperation(`BiDi does not support 'scale' in 'clip'.`);
    }
    let box;
    if (clip) {
      if (captureBeyondViewport) {
        box = clip;
      } else {
        const [pageLeft, pageTop] = await this.evaluate(() => {
          if (!window.visualViewport) {
            throw new Error("window.visualViewport is not supported.");
          }
          return [
            window.visualViewport.pageLeft,
            window.visualViewport.pageTop
          ];
        });
        box = {
          ...clip,
          x: clip.x - pageLeft,
          y: clip.y - pageTop
        };
      }
    }
    const { result: { data } } = await __privateGet(this, _connection4).send("browsingContext.captureScreenshot", {
      context: this.mainFrame()._id,
      origin: captureBeyondViewport ? "document" : "viewport",
      format: {
        type: `image/${type}`,
        ...quality !== void 0 ? { quality: quality / 100 } : {}
      },
      ...box ? { clip: { type: "box", ...box } } : {}
    });
    return data;
  }
  async createCDPSession() {
    const { sessionId } = await this.mainFrame().context().cdpSession.send("Target.attachToTarget", {
      targetId: this.mainFrame()._id,
      flatten: true
    });
    return new CdpSessionWrapper(this.mainFrame().context(), sessionId);
  }
  async bringToFront() {
    await __privateGet(this, _connection4).send("browsingContext.activate", {
      context: this.mainFrame()._id
    });
  }
  async evaluateOnNewDocument(pageFunction, ...args) {
    const expression = evaluationExpression(pageFunction, ...args);
    const { result } = await __privateGet(this, _connection4).send("script.addPreloadScript", {
      functionDeclaration: expression,
      contexts: [this.mainFrame()._id]
    });
    return { identifier: result.script };
  }
  async removeScriptToEvaluateOnNewDocument(id) {
    await __privateGet(this, _connection4).send("script.removePreloadScript", {
      script: id
    });
  }
  async exposeFunction(name, pptrFunction) {
    return await this.mainFrame().exposeFunction(name, "default" in pptrFunction ? pptrFunction.default : pptrFunction);
  }
  isDragInterceptionEnabled() {
    return false;
  }
  async setCacheEnabled(enabled) {
    await this._client().send("Network.setCacheDisabled", {
      cacheDisabled: !enabled
    });
  }
  isServiceWorkerBypassed() {
    throw new crawler.UnsupportedOperation();
  }
  target() {
    return __privateGet(this, _target);
  }
  waitForFileChooser() {
    throw new crawler.UnsupportedOperation();
  }
  workers() {
    throw new crawler.UnsupportedOperation();
  }
  setRequestInterception() {
    throw new crawler.UnsupportedOperation();
  }
  setDragInterception() {
    throw new crawler.UnsupportedOperation();
  }
  setBypassServiceWorker() {
    throw new crawler.UnsupportedOperation();
  }
  setOfflineMode() {
    throw new crawler.UnsupportedOperation();
  }
  emulateNetworkConditions() {
    throw new crawler.UnsupportedOperation();
  }
  cookies() {
    throw new crawler.UnsupportedOperation();
  }
  setCookie() {
    throw new crawler.UnsupportedOperation();
  }
  deleteCookie() {
    throw new crawler.UnsupportedOperation();
  }
  removeExposedFunction() {
    throw new crawler.UnsupportedOperation();
  }
  authenticate() {
    throw new crawler.UnsupportedOperation();
  }
  setExtraHTTPHeaders() {
    throw new crawler.UnsupportedOperation();
  }
  metrics() {
    throw new crawler.UnsupportedOperation();
  }
  async goBack(options = {}) {
    return await __privateMethod(this, _go, go_fn).call(this, -1, options);
  }
  async goForward(options = {}) {
    return await __privateMethod(this, _go, go_fn).call(this, 1, options);
  }
  waitForDevicePrompt() {
    throw new crawler.UnsupportedOperation();
  }
}
_accessibility = new WeakMap();
_connection4 = new WeakMap();
_frameTree = new WeakMap();
_networkManager = new WeakMap();
_viewport = new WeakMap();
_closedDeferred = new WeakMap();
_subscribedEvents = new WeakMap();
_networkManagerEvents = new WeakMap();
_browsingContextEvents = new WeakMap();
_tracing = new WeakMap();
_coverage = new WeakMap();
_cdpEmulationManager = new WeakMap();
_emulationManager = new WeakMap();
_mouse = new WeakMap();
_touchscreen = new WeakMap();
_keyboard = new WeakMap();
_browsingContext2 = new WeakMap();
_browserContext = new WeakMap();
_target = new WeakMap();
_onFrameLoaded = new WeakSet();
onFrameLoaded_fn = function(info) {
  const frame = this.frame(info.context);
  if (frame && this.mainFrame() === frame) {
    this.emit("load", void 0);
  }
};
_onFrameFragmentNavigated = new WeakSet();
onFrameFragmentNavigated_fn = function(info) {
  const frame = this.frame(info.context);
  if (frame) {
    this.emit("framenavigated", frame);
  }
};
_onFrameDOMContentLoaded = new WeakSet();
onFrameDOMContentLoaded_fn = function(info) {
  const frame = this.frame(info.context);
  if (frame) {
    frame._hasStartedLoading = true;
    if (this.mainFrame() === frame) {
      this.emit("domcontentloaded", void 0);
    }
    this.emit("framenavigated", frame);
  }
};
_onContextCreated = new WeakSet();
onContextCreated_fn = function(context) {
  if (!this.frame(context.id) && (this.frame(context.parent ?? "") || !__privateGet(this, _frameTree).getMainFrame())) {
    const frame = new BidiFrame(this, context, this._timeoutSettings, context.parent);
    __privateGet(this, _frameTree).addFrame(frame);
    if (frame !== this.mainFrame()) {
      this.emit("frameattached", frame);
    }
  }
};
_onContextDestroyed = new WeakSet();
onContextDestroyed_fn = function(context) {
  const frame = this.frame(context.id);
  if (frame) {
    if (frame === this.mainFrame()) {
      this.emit("close", void 0);
    }
    __privateMethod(this, _removeFramesRecursively, removeFramesRecursively_fn).call(this, frame);
  }
};
_removeFramesRecursively = new WeakSet();
removeFramesRecursively_fn = function(frame) {
  for (const child of frame.childFrames()) {
    __privateMethod(this, _removeFramesRecursively, removeFramesRecursively_fn).call(this, child);
  }
  frame[crawler.disposeSymbol]();
  __privateGet(this, _networkManager).clearMapAfterFrameDispose(frame);
  __privateGet(this, _frameTree).removeFrame(frame);
  this.emit("framedetached", frame);
};
_onLogEntryAdded = new WeakSet();
onLogEntryAdded_fn = function(event) {
  const frame = this.frame(event.source.context);
  if (!frame) {
    return;
  }
  if (isConsoleLogEntry(event)) {
    const args = event.args.map((arg) => {
      return createBidiHandle(frame.mainRealm(), arg);
    });
    const text = args.reduce((value, arg) => {
      const parsedValue = arg.isPrimitiveValue ? BidiDeserializer.deserialize(arg.remoteValue()) : arg.toString();
      return `${value} ${parsedValue}`;
    }, "").slice(1);
    this.emit("console", new crawler.ConsoleMessage(event.method, text, args, getStackTraceLocations(event.stackTrace)));
  } else if (isJavaScriptLogEntry(event)) {
    const error = new Error(event.text ?? "");
    const messageHeight = error.message.split("\n").length;
    const messageLines = error.stack.split("\n").splice(0, messageHeight);
    const stackLines = [];
    if (event.stackTrace) {
      for (const frame2 of event.stackTrace.callFrames) {
        stackLines.push(`    at ${frame2.functionName || "<anonymous>"} (${frame2.url}:${frame2.lineNumber + 1}:${frame2.columnNumber + 1})`);
        if (stackLines.length >= Error.stackTraceLimit) {
          break;
        }
      }
    }
    error.stack = [...messageLines, ...stackLines].join("\n");
    this.emit("pageerror", error);
  } else {
    crawler.debugError(`Unhandled LogEntry with type "${event.type}", text "${event.text}" and level "${event.level}"`);
  }
};
_onDialog = new WeakSet();
onDialog_fn = function(event) {
  const frame = this.frame(event.context);
  if (!frame) {
    return;
  }
  const type = crawler.validateDialogType(event.type);
  const dialog = new BidiDialog(frame.context(), type, event.message, event.defaultValue);
  this.emit("dialog", dialog);
};
_go = new WeakSet();
go_fn = async function(delta, options) {
  try {
    const result = await Promise.all([
      this.waitForNavigation(options),
      __privateGet(this, _connection4).send("browsingContext.traverseHistory", {
        delta,
        context: this.mainFrame()._id
      })
    ]);
    return result[0];
  } catch (err) {
    if (crawler.isErrorLike(err)) {
      if (err.message.includes("no such history entry")) {
        return null;
      }
    }
    throw err;
  }
};
function isConsoleLogEntry(event) {
  return event.type === "console";
}
function isJavaScriptLogEntry(event) {
  return event.type === "javascript";
}
function getStackTraceLocations(stackTrace) {
  const stackTraceLocations = [];
  if (stackTrace) {
    for (const callFrame of stackTrace.callFrames) {
      stackTraceLocations.push({
        url: callFrame.url,
        lineNumber: callFrame.lineNumber,
        columnNumber: callFrame.columnNumber
      });
    }
  }
  return stackTraceLocations;
}
function evaluationExpression(fun, ...args) {
  return `() => {${crawler.evaluationString(fun, ...args)}}`;
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class BidiTarget extends crawler.Target {
  constructor(browserContext) {
    super();
    __publicField(this, "_browserContext");
    this._browserContext = browserContext;
  }
  _setBrowserContext(browserContext) {
    this._browserContext = browserContext;
  }
  asPage() {
    throw new crawler.UnsupportedOperation();
  }
  browser() {
    return this._browserContext.browser();
  }
  browserContext() {
    return this._browserContext;
  }
  opener() {
    throw new crawler.UnsupportedOperation();
  }
  createCDPSession() {
    throw new crawler.UnsupportedOperation();
  }
}
class BiDiBrowserTarget extends crawler.Target {
  constructor(browser) {
    super();
    __privateAdd(this, _browser2, void 0);
    __privateSet(this, _browser2, browser);
  }
  url() {
    return "";
  }
  type() {
    return crawler.TargetType.BROWSER;
  }
  asPage() {
    throw new crawler.UnsupportedOperation();
  }
  browser() {
    return __privateGet(this, _browser2);
  }
  browserContext() {
    return __privateGet(this, _browser2).defaultBrowserContext();
  }
  opener() {
    throw new crawler.UnsupportedOperation();
  }
  createCDPSession() {
    throw new crawler.UnsupportedOperation();
  }
}
_browser2 = new WeakMap();
class BiDiBrowsingContextTarget extends BidiTarget {
  constructor(browserContext, browsingContext) {
    super(browserContext);
    __publicField(this, "_browsingContext");
    this._browsingContext = browsingContext;
  }
  url() {
    return this._browsingContext.url;
  }
  async createCDPSession() {
    const { sessionId } = await this._browsingContext.cdpSession.send("Target.attachToTarget", {
      targetId: this._browsingContext.id,
      flatten: true
    });
    return new CdpSessionWrapper(this._browsingContext, sessionId);
  }
  type() {
    return crawler.TargetType.PAGE;
  }
}
class BiDiPageTarget extends BiDiBrowsingContextTarget {
  constructor(browserContext, browsingContext) {
    super(browserContext, browsingContext);
    __privateAdd(this, _page3, void 0);
    __privateSet(this, _page3, new BidiPage(browsingContext, browserContext, this));
  }
  async page() {
    return __privateGet(this, _page3);
  }
  _setBrowserContext(browserContext) {
    super._setBrowserContext(browserContext);
    __privateGet(this, _page3)._setBrowserContext(browserContext);
  }
}
_page3 = new WeakMap();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const _BidiBrowser = class _BidiBrowser extends crawler.Browser {
  constructor(browserCore, opts) {
    super();
    __privateAdd(this, _initialize);
    __privateAdd(this, _browserName2);
    __privateAdd(this, _browserVersion);
    __privateAdd(this, _createBrowserContext);
    __privateAdd(this, _onContextDomLoaded);
    __privateAdd(this, _onContextNavigation);
    __privateAdd(this, _onContextCreated2);
    __privateAdd(this, _getTree);
    __privateAdd(this, _onContextDestroyed2);
    __publicField(this, "protocol", "webDriverBiDi");
    __privateAdd(this, _process, void 0);
    __privateAdd(this, _closeCallback, void 0);
    __privateAdd(this, _browserCore, void 0);
    __privateAdd(this, _defaultViewport2, void 0);
    __privateAdd(this, _targets, /* @__PURE__ */ new Map());
    __privateAdd(this, _browserContexts, /* @__PURE__ */ new WeakMap());
    __privateAdd(this, _browserTarget, void 0);
    __privateAdd(this, _connectionEventHandlers, /* @__PURE__ */ new Map([
      ["browsingContext.contextCreated", __privateMethod(this, _onContextCreated2, onContextCreated_fn2).bind(this)],
      ["browsingContext.contextDestroyed", __privateMethod(this, _onContextDestroyed2, onContextDestroyed_fn2).bind(this)],
      ["browsingContext.domContentLoaded", __privateMethod(this, _onContextDomLoaded, onContextDomLoaded_fn).bind(this)],
      ["browsingContext.fragmentNavigated", __privateMethod(this, _onContextNavigation, onContextNavigation_fn).bind(this)],
      ["browsingContext.navigationStarted", __privateMethod(this, _onContextNavigation, onContextNavigation_fn).bind(this)]
    ]));
    __privateSet(this, _process, opts.process);
    __privateSet(this, _closeCallback, opts.closeCallback);
    __privateSet(this, _browserCore, browserCore);
    __privateSet(this, _defaultViewport2, opts.defaultViewport);
    __privateSet(this, _browserTarget, new BiDiBrowserTarget(this));
    for (const context of __privateGet(this, _browserCore).userContexts) {
      __privateMethod(this, _createBrowserContext, createBrowserContext_fn).call(this, context);
    }
  }
  static async create(opts) {
    var _a3, _b3;
    const session = await Session.from(opts.connection, {
      alwaysMatch: {
        acceptInsecureCerts: opts.ignoreHTTPSErrors,
        webSocketUrl: true
      }
    });
    await session.subscribe(session.capabilities.browserName.toLocaleLowerCase().includes("firefox") ? _BidiBrowser.subscribeModules : [..._BidiBrowser.subscribeModules, ..._BidiBrowser.subscribeCdpEvents]);
    const browser = new _BidiBrowser(session.browser, opts);
    __privateMethod(_a3 = browser, _initialize, initialize_fn).call(_a3);
    await __privateMethod(_b3 = browser, _getTree, getTree_fn).call(_b3);
    return browser;
  }
  userAgent() {
    throw new crawler.UnsupportedOperation();
  }
  get connection() {
    return __privateGet(this, _browserCore).session.connection;
  }
  wsEndpoint() {
    return this.connection.url;
  }
  async close() {
    var _a3;
    for (const [eventName, handler] of __privateGet(this, _connectionEventHandlers)) {
      this.connection.off(eventName, handler);
    }
    if (this.connection.closed) {
      return;
    }
    try {
      await __privateGet(this, _browserCore).close();
      await ((_a3 = __privateGet(this, _closeCallback)) == null ? void 0 : _a3.call(null));
    } catch (error) {
      crawler.debugError(error);
    } finally {
      this.connection.dispose();
    }
  }
  get connected() {
    return !__privateGet(this, _browserCore).disposed;
  }
  process() {
    return __privateGet(this, _process) ?? null;
  }
  async createIncognitoBrowserContext(_options) {
    const userContext = await __privateGet(this, _browserCore).createUserContext();
    return __privateMethod(this, _createBrowserContext, createBrowserContext_fn).call(this, userContext);
  }
  async version() {
    return `${__privateGet(this, _browserName2, browserName_get)}/${__privateGet(this, _browserVersion, browserVersion_get)}`;
  }
  browserContexts() {
    return [...__privateGet(this, _browserCore).userContexts].map((context) => {
      return __privateGet(this, _browserContexts).get(context);
    });
  }
  defaultBrowserContext() {
    return __privateGet(this, _browserContexts).get(__privateGet(this, _browserCore).defaultUserContext);
  }
  newPage() {
    return this.defaultBrowserContext().newPage();
  }
  targets() {
    return [__privateGet(this, _browserTarget), ...Array.from(__privateGet(this, _targets).values())];
  }
  _getTargetById(id) {
    const target = __privateGet(this, _targets).get(id);
    if (!target) {
      throw new Error("Target not found");
    }
    return target;
  }
  target() {
    return __privateGet(this, _browserTarget);
  }
  async disconnect() {
    try {
      await __privateGet(this, _browserCore).session.end();
    } catch (error) {
      crawler.debugError(error);
    } finally {
      this.connection.dispose();
    }
  }
  get debugInfo() {
    return {
      pendingProtocolErrors: this.connection.getPendingProtocolErrors()
    };
  }
};
_process = new WeakMap();
_closeCallback = new WeakMap();
_browserCore = new WeakMap();
_defaultViewport2 = new WeakMap();
_targets = new WeakMap();
_browserContexts = new WeakMap();
_browserTarget = new WeakMap();
_connectionEventHandlers = new WeakMap();
_initialize = new WeakSet();
initialize_fn = function() {
  var _a3;
  __privateGet(this, _browserCore).once("disconnected", () => {
    this.emit("disconnected", void 0);
  });
  (_a3 = __privateGet(this, _process)) == null ? void 0 : _a3.once("close", () => {
    __privateGet(this, _browserCore).dispose("Browser process exited.", true);
    this.connection.dispose();
  });
  for (const [eventName, handler] of __privateGet(this, _connectionEventHandlers)) {
    this.connection.on(eventName, handler);
  }
};
_browserName2 = new WeakSet();
browserName_get = function() {
  return __privateGet(this, _browserCore).session.capabilities.browserName;
};
_browserVersion = new WeakSet();
browserVersion_get = function() {
  return __privateGet(this, _browserCore).session.capabilities.browserVersion;
};
_createBrowserContext = new WeakSet();
createBrowserContext_fn = function(userContext) {
  const browserContext = new BidiBrowserContext(this, userContext, {
    defaultViewport: __privateGet(this, _defaultViewport2)
  });
  __privateGet(this, _browserContexts).set(userContext, browserContext);
  return browserContext;
};
_onContextDomLoaded = new WeakSet();
onContextDomLoaded_fn = function(event) {
  const target = __privateGet(this, _targets).get(event.context);
  if (target) {
    this.emit("targetchanged", target);
    target.browserContext().emit("targetchanged", target);
  }
};
_onContextNavigation = new WeakSet();
onContextNavigation_fn = function(event) {
  const target = __privateGet(this, _targets).get(event.context);
  if (target) {
    this.emit("targetchanged", target);
    target.browserContext().emit("targetchanged", target);
  }
};
_onContextCreated2 = new WeakSet();
onContextCreated_fn2 = function(event) {
  const context = new BrowsingContext$1(this.connection, event, __privateGet(this, _browserName2, browserName_get));
  this.connection.registerBrowsingContexts(context);
  const browserContext = event.userContext === "default" ? this.defaultBrowserContext() : this.browserContexts().find((browserContext2) => {
    return browserContext2.id === event.userContext;
  });
  if (!browserContext) {
    throw new Error("Missing browser contexts");
  }
  const target = !context.parent ? new BiDiPageTarget(browserContext, context) : new BiDiBrowsingContextTarget(browserContext, context);
  __privateGet(this, _targets).set(event.context, target);
  this.emit("targetcreated", target);
  target.browserContext().emit("targetcreated", target);
  if (context.parent) {
    const topLevel = this.connection.getTopLevelContext(context.parent);
    topLevel.emit(exports.BrowsingContextEvent.Created, context);
  }
};
_getTree = new WeakSet();
getTree_fn = async function() {
  const { result } = await this.connection.send("browsingContext.getTree", {});
  for (const context of result.contexts) {
    __privateMethod(this, _onContextCreated2, onContextCreated_fn2).call(this, context);
  }
};
_onContextDestroyed2 = new WeakSet();
onContextDestroyed_fn2 = async function(event) {
  const context = this.connection.getBrowsingContext(event.context);
  const topLevelContext = this.connection.getTopLevelContext(event.context);
  topLevelContext.emit(exports.BrowsingContextEvent.Destroyed, context);
  const target = __privateGet(this, _targets).get(event.context);
  const page = await (target == null ? void 0 : target.page());
  await (page == null ? void 0 : page.close().catch(crawler.debugError));
  __privateGet(this, _targets).delete(event.context);
  if (target) {
    this.emit("targetdestroyed", target);
    target.browserContext().emit("targetdestroyed", target);
  }
};
// TODO: Update generator to include fully module
__publicField(_BidiBrowser, "subscribeModules", [
  "browsingContext",
  "network",
  "log",
  "script"
]);
__publicField(_BidiBrowser, "subscribeCdpEvents", [
  // Coverage
  "cdp.Debugger.scriptParsed",
  "cdp.CSS.styleSheetAdded",
  "cdp.Runtime.executionContextsCleared",
  // Tracing
  "cdp.Tracing.tracingComplete",
  // TODO: subscribe to all CDP events in the future.
  "cdp.Network.requestWillBeSent",
  "cdp.Debugger.scriptParsed",
  "cdp.Page.screencastFrame"
]);
let BidiBrowser = _BidiBrowser;
exports.BiDiBrowserTarget = BiDiBrowserTarget;
exports.BiDiBrowsingContextTarget = BiDiBrowsingContextTarget;
exports.BiDiPageTarget = BiDiPageTarget;
exports.BidiBrowser = BidiBrowser;
exports.BidiBrowserContext = BidiBrowserContext;
exports.BidiConnection = BidiConnection;
exports.BidiElementHandle = BidiElementHandle;
exports.BidiFrame = BidiFrame;
exports.BidiHTTPRequest = BidiHTTPRequest;
exports.BidiHTTPResponse = BidiHTTPResponse;
exports.BidiJSHandle = BidiJSHandle;
exports.BidiKeyboard = BidiKeyboard;
exports.BidiMouse = BidiMouse;
exports.BidiNetworkManager = BidiNetworkManager;
exports.BidiPage = BidiPage;
exports.BidiRealm = BidiRealm;
exports.BidiTarget = BidiTarget;
exports.BidiTouchscreen = BidiTouchscreen;
exports.BrowsingContext = BrowsingContext$1;
exports.CdpSessionWrapper = CdpSessionWrapper;
exports.MAIN_SANDBOX = MAIN_SANDBOX;
exports.PUPPETEER_SANDBOX = PUPPETEER_SANDBOX;
exports.Sandbox = Sandbox;
exports.cdpSessions = cdpSessions;
exports.connectBidiOverCdp = connectBidiOverCdp;
exports.createBidiHandle = createBidiHandle;
