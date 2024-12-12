/**
 * @fileoverview gRPC-Web generated client stub for org.couchers.bugs
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: bugs.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var google_api_httpbody_pb = require('./google/api/httpbody_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var annotations_pb = require('./annotations_pb.js')
const proto = {};
proto.org = {};
proto.org.couchers = {};
proto.org.couchers.bugs = require('./bugs_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.org.couchers.bugs.BugsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.org.couchers.bugs.BugsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.org.couchers.bugs.VersionInfo>}
 */
const methodDescriptor_Bugs_Version = new grpc.web.MethodDescriptor(
  '/org.couchers.bugs.Bugs/Version',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.org.couchers.bugs.VersionInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.couchers.bugs.VersionInfo.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.org.couchers.bugs.VersionInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.couchers.bugs.VersionInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.bugs.BugsClient.prototype.version =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.bugs.Bugs/Version',
      request,
      metadata || {},
      methodDescriptor_Bugs_Version,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.couchers.bugs.VersionInfo>}
 *     Promise that resolves to the response
 */
proto.org.couchers.bugs.BugsPromiseClient.prototype.version =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.bugs.Bugs/Version',
      request,
      metadata || {},
      methodDescriptor_Bugs_Version);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.bugs.ReportBugReq,
 *   !proto.org.couchers.bugs.ReportBugRes>}
 */
const methodDescriptor_Bugs_ReportBug = new grpc.web.MethodDescriptor(
  '/org.couchers.bugs.Bugs/ReportBug',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.bugs.ReportBugReq,
  proto.org.couchers.bugs.ReportBugRes,
  /**
   * @param {!proto.org.couchers.bugs.ReportBugReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.couchers.bugs.ReportBugRes.deserializeBinary
);


/**
 * @param {!proto.org.couchers.bugs.ReportBugReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.org.couchers.bugs.ReportBugRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.couchers.bugs.ReportBugRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.bugs.BugsClient.prototype.reportBug =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.bugs.Bugs/ReportBug',
      request,
      metadata || {},
      methodDescriptor_Bugs_ReportBug,
      callback);
};


/**
 * @param {!proto.org.couchers.bugs.ReportBugReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.couchers.bugs.ReportBugRes>}
 *     Promise that resolves to the response
 */
proto.org.couchers.bugs.BugsPromiseClient.prototype.reportBug =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.bugs.Bugs/ReportBug',
      request,
      metadata || {},
      methodDescriptor_Bugs_ReportBug);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.bugs.StatusReq,
 *   !proto.org.couchers.bugs.StatusRes>}
 */
const methodDescriptor_Bugs_Status = new grpc.web.MethodDescriptor(
  '/org.couchers.bugs.Bugs/Status',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.bugs.StatusReq,
  proto.org.couchers.bugs.StatusRes,
  /**
   * @param {!proto.org.couchers.bugs.StatusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.couchers.bugs.StatusRes.deserializeBinary
);


/**
 * @param {!proto.org.couchers.bugs.StatusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.org.couchers.bugs.StatusRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.couchers.bugs.StatusRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.bugs.BugsClient.prototype.status =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.bugs.Bugs/Status',
      request,
      metadata || {},
      methodDescriptor_Bugs_Status,
      callback);
};


/**
 * @param {!proto.org.couchers.bugs.StatusReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.couchers.bugs.StatusRes>}
 *     Promise that resolves to the response
 */
proto.org.couchers.bugs.BugsPromiseClient.prototype.status =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.bugs.Bugs/Status',
      request,
      metadata || {},
      methodDescriptor_Bugs_Status);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.api.HttpBody>}
 */
const methodDescriptor_Bugs_GetDescriptors = new grpc.web.MethodDescriptor(
  '/org.couchers.bugs.Bugs/GetDescriptors',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_api_httpbody_pb.HttpBody,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_httpbody_pb.HttpBody.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.api.HttpBody)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.api.HttpBody>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.bugs.BugsClient.prototype.getDescriptors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.bugs.Bugs/GetDescriptors',
      request,
      metadata || {},
      methodDescriptor_Bugs_GetDescriptors,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.api.HttpBody>}
 *     Promise that resolves to the response
 */
proto.org.couchers.bugs.BugsPromiseClient.prototype.getDescriptors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.bugs.Bugs/GetDescriptors',
      request,
      metadata || {},
      methodDescriptor_Bugs_GetDescriptors);
};


module.exports = proto.org.couchers.bugs;
