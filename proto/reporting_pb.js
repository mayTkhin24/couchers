// source: reporting.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var annotations_pb = require('./annotations_pb.js');
goog.object.extend(proto, annotations_pb);
goog.exportSymbol('proto.org.couchers.api.reporting.ReportReq', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.org.couchers.api.reporting.ReportReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.org.couchers.api.reporting.ReportReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.org.couchers.api.reporting.ReportReq.displayName = 'proto.org.couchers.api.reporting.ReportReq';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.org.couchers.api.reporting.ReportReq.prototype.toObject = function(opt_includeInstance) {
  return proto.org.couchers.api.reporting.ReportReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.org.couchers.api.reporting.ReportReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.api.reporting.ReportReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contentRef: jspb.Message.getFieldWithDefault(msg, 3, ""),
    authorUser: jspb.Message.getFieldWithDefault(msg, 4, ""),
    userAgent: jspb.Message.getFieldWithDefault(msg, 5, ""),
    page: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.org.couchers.api.reporting.ReportReq}
 */
proto.org.couchers.api.reporting.ReportReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.org.couchers.api.reporting.ReportReq;
  return proto.org.couchers.api.reporting.ReportReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.org.couchers.api.reporting.ReportReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.org.couchers.api.reporting.ReportReq}
 */
proto.org.couchers.api.reporting.ReportReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentRef(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorUser(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserAgent(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.org.couchers.api.reporting.ReportReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.org.couchers.api.reporting.ReportReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.org.couchers.api.reporting.ReportReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.api.reporting.ReportReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContentRef();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAuthorUser();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserAgent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string reason = 1;
 * @return {string}
 */
proto.org.couchers.api.reporting.ReportReq.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.api.reporting.ReportReq} returns this
 */
proto.org.couchers.api.reporting.ReportReq.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.org.couchers.api.reporting.ReportReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.api.reporting.ReportReq} returns this
 */
proto.org.couchers.api.reporting.ReportReq.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content_ref = 3;
 * @return {string}
 */
proto.org.couchers.api.reporting.ReportReq.prototype.getContentRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.api.reporting.ReportReq} returns this
 */
proto.org.couchers.api.reporting.ReportReq.prototype.setContentRef = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string author_user = 4;
 * @return {string}
 */
proto.org.couchers.api.reporting.ReportReq.prototype.getAuthorUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.api.reporting.ReportReq} returns this
 */
proto.org.couchers.api.reporting.ReportReq.prototype.setAuthorUser = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string user_agent = 5;
 * @return {string}
 */
proto.org.couchers.api.reporting.ReportReq.prototype.getUserAgent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.api.reporting.ReportReq} returns this
 */
proto.org.couchers.api.reporting.ReportReq.prototype.setUserAgent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string page = 6;
 * @return {string}
 */
proto.org.couchers.api.reporting.ReportReq.prototype.getPage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.api.reporting.ReportReq} returns this
 */
proto.org.couchers.api.reporting.ReportReq.prototype.setPage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.org.couchers.api.reporting);
