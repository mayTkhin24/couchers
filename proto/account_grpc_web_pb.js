/**
 * @fileoverview gRPC-Web generated client stub for org.couchers.api.account
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: account.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var annotations_pb = require('./annotations_pb.js')

var api_pb = require('./api_pb.js')

var auth_pb = require('./auth_pb.js')
const proto = {};
proto.org = {};
proto.org.couchers = {};
proto.org.couchers.api = {};
proto.org.couchers.api.account = require('./account_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.org.couchers.api.account.AccountClient =
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
proto.org.couchers.api.account.AccountPromiseClient =
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
 *   !proto.org.couchers.api.account.GetAccountInfoRes>}
 */
const methodDescriptor_Account_GetAccountInfo = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/GetAccountInfo',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.org.couchers.api.account.GetAccountInfoRes,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.couchers.api.account.GetAccountInfoRes.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.org.couchers.api.account.GetAccountInfoRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.couchers.api.account.GetAccountInfoRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.getAccountInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/GetAccountInfo',
      request,
      metadata || {},
      methodDescriptor_Account_GetAccountInfo,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.couchers.api.account.GetAccountInfoRes>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.getAccountInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/GetAccountInfo',
      request,
      metadata || {},
      methodDescriptor_Account_GetAccountInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.api.account.ChangePasswordV2Req,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Account_ChangePasswordV2 = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/ChangePasswordV2',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.api.account.ChangePasswordV2Req,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.org.couchers.api.account.ChangePasswordV2Req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.org.couchers.api.account.ChangePasswordV2Req} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.changePasswordV2 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/ChangePasswordV2',
      request,
      metadata || {},
      methodDescriptor_Account_ChangePasswordV2,
      callback);
};


/**
 * @param {!proto.org.couchers.api.account.ChangePasswordV2Req} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.changePasswordV2 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/ChangePasswordV2',
      request,
      metadata || {},
      methodDescriptor_Account_ChangePasswordV2);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.api.account.ChangeEmailV2Req,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Account_ChangeEmailV2 = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/ChangeEmailV2',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.api.account.ChangeEmailV2Req,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.org.couchers.api.account.ChangeEmailV2Req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.org.couchers.api.account.ChangeEmailV2Req} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.changeEmailV2 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/ChangeEmailV2',
      request,
      metadata || {},
      methodDescriptor_Account_ChangeEmailV2,
      callback);
};


/**
 * @param {!proto.org.couchers.api.account.ChangeEmailV2Req} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.changeEmailV2 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/ChangeEmailV2',
      request,
      metadata || {},
      methodDescriptor_Account_ChangeEmailV2);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.org.couchers.api.account.GetContributorFormInfoRes>}
 */
const methodDescriptor_Account_GetContributorFormInfo = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/GetContributorFormInfo',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.org.couchers.api.account.GetContributorFormInfoRes,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.couchers.api.account.GetContributorFormInfoRes.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.org.couchers.api.account.GetContributorFormInfoRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.couchers.api.account.GetContributorFormInfoRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.getContributorFormInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/GetContributorFormInfo',
      request,
      metadata || {},
      methodDescriptor_Account_GetContributorFormInfo,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.couchers.api.account.GetContributorFormInfoRes>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.getContributorFormInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/GetContributorFormInfo',
      request,
      metadata || {},
      methodDescriptor_Account_GetContributorFormInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.api.account.FillContributorFormReq,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Account_FillContributorForm = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/FillContributorForm',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.api.account.FillContributorFormReq,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.org.couchers.api.account.FillContributorFormReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.org.couchers.api.account.FillContributorFormReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.fillContributorForm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/FillContributorForm',
      request,
      metadata || {},
      methodDescriptor_Account_FillContributorForm,
      callback);
};


/**
 * @param {!proto.org.couchers.api.account.FillContributorFormReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.fillContributorForm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/FillContributorForm',
      request,
      metadata || {},
      methodDescriptor_Account_FillContributorForm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.api.account.ChangePhoneReq,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Account_ChangePhone = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/ChangePhone',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.api.account.ChangePhoneReq,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.org.couchers.api.account.ChangePhoneReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.org.couchers.api.account.ChangePhoneReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.changePhone =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/ChangePhone',
      request,
      metadata || {},
      methodDescriptor_Account_ChangePhone,
      callback);
};


/**
 * @param {!proto.org.couchers.api.account.ChangePhoneReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.changePhone =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/ChangePhone',
      request,
      metadata || {},
      methodDescriptor_Account_ChangePhone);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.api.account.VerifyPhoneReq,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Account_VerifyPhone = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/VerifyPhone',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.api.account.VerifyPhoneReq,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.org.couchers.api.account.VerifyPhoneReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.org.couchers.api.account.VerifyPhoneReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.verifyPhone =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/VerifyPhone',
      request,
      metadata || {},
      methodDescriptor_Account_VerifyPhone,
      callback);
};


/**
 * @param {!proto.org.couchers.api.account.VerifyPhoneReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.verifyPhone =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/VerifyPhone',
      request,
      metadata || {},
      methodDescriptor_Account_VerifyPhone);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.org.couchers.api.account.InitiateStrongVerificationRes>}
 */
const methodDescriptor_Account_InitiateStrongVerification = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/InitiateStrongVerification',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.org.couchers.api.account.InitiateStrongVerificationRes,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.couchers.api.account.InitiateStrongVerificationRes.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.org.couchers.api.account.InitiateStrongVerificationRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.couchers.api.account.InitiateStrongVerificationRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.initiateStrongVerification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/InitiateStrongVerification',
      request,
      metadata || {},
      methodDescriptor_Account_InitiateStrongVerification,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.couchers.api.account.InitiateStrongVerificationRes>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.initiateStrongVerification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/InitiateStrongVerification',
      request,
      metadata || {},
      methodDescriptor_Account_InitiateStrongVerification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.api.account.GetStrongVerificationAttemptStatusReq,
 *   !proto.org.couchers.api.account.GetStrongVerificationAttemptStatusRes>}
 */
const methodDescriptor_Account_GetStrongVerificationAttemptStatus = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/GetStrongVerificationAttemptStatus',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.api.account.GetStrongVerificationAttemptStatusReq,
  proto.org.couchers.api.account.GetStrongVerificationAttemptStatusRes,
  /**
   * @param {!proto.org.couchers.api.account.GetStrongVerificationAttemptStatusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.couchers.api.account.GetStrongVerificationAttemptStatusRes.deserializeBinary
);


/**
 * @param {!proto.org.couchers.api.account.GetStrongVerificationAttemptStatusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.org.couchers.api.account.GetStrongVerificationAttemptStatusRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.couchers.api.account.GetStrongVerificationAttemptStatusRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.getStrongVerificationAttemptStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/GetStrongVerificationAttemptStatus',
      request,
      metadata || {},
      methodDescriptor_Account_GetStrongVerificationAttemptStatus,
      callback);
};


/**
 * @param {!proto.org.couchers.api.account.GetStrongVerificationAttemptStatusReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.couchers.api.account.GetStrongVerificationAttemptStatusRes>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.getStrongVerificationAttemptStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/GetStrongVerificationAttemptStatus',
      request,
      metadata || {},
      methodDescriptor_Account_GetStrongVerificationAttemptStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Account_DeleteStrongVerificationData = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/DeleteStrongVerificationData',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.deleteStrongVerificationData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/DeleteStrongVerificationData',
      request,
      metadata || {},
      methodDescriptor_Account_DeleteStrongVerificationData,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.deleteStrongVerificationData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/DeleteStrongVerificationData',
      request,
      metadata || {},
      methodDescriptor_Account_DeleteStrongVerificationData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.api.account.DeleteAccountReq,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Account_DeleteAccount = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/DeleteAccount',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.api.account.DeleteAccountReq,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.org.couchers.api.account.DeleteAccountReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.org.couchers.api.account.DeleteAccountReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.deleteAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/DeleteAccount',
      request,
      metadata || {},
      methodDescriptor_Account_DeleteAccount,
      callback);
};


/**
 * @param {!proto.org.couchers.api.account.DeleteAccountReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.deleteAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/DeleteAccount',
      request,
      metadata || {},
      methodDescriptor_Account_DeleteAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.org.couchers.api.account.ListModNotesRes>}
 */
const methodDescriptor_Account_ListModNotes = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/ListModNotes',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.org.couchers.api.account.ListModNotesRes,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.couchers.api.account.ListModNotesRes.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.org.couchers.api.account.ListModNotesRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.couchers.api.account.ListModNotesRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.listModNotes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/ListModNotes',
      request,
      metadata || {},
      methodDescriptor_Account_ListModNotes,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.couchers.api.account.ListModNotesRes>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.listModNotes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/ListModNotes',
      request,
      metadata || {},
      methodDescriptor_Account_ListModNotes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.api.account.ListActiveSessionsReq,
 *   !proto.org.couchers.api.account.ListActiveSessionsRes>}
 */
const methodDescriptor_Account_ListActiveSessions = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/ListActiveSessions',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.api.account.ListActiveSessionsReq,
  proto.org.couchers.api.account.ListActiveSessionsRes,
  /**
   * @param {!proto.org.couchers.api.account.ListActiveSessionsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.couchers.api.account.ListActiveSessionsRes.deserializeBinary
);


/**
 * @param {!proto.org.couchers.api.account.ListActiveSessionsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.org.couchers.api.account.ListActiveSessionsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.couchers.api.account.ListActiveSessionsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.listActiveSessions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/ListActiveSessions',
      request,
      metadata || {},
      methodDescriptor_Account_ListActiveSessions,
      callback);
};


/**
 * @param {!proto.org.couchers.api.account.ListActiveSessionsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.couchers.api.account.ListActiveSessionsRes>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.listActiveSessions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/ListActiveSessions',
      request,
      metadata || {},
      methodDescriptor_Account_ListActiveSessions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.api.account.LogOutSessionReq,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Account_LogOutSession = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/LogOutSession',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.api.account.LogOutSessionReq,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.org.couchers.api.account.LogOutSessionReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.org.couchers.api.account.LogOutSessionReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.logOutSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/LogOutSession',
      request,
      metadata || {},
      methodDescriptor_Account_LogOutSession,
      callback);
};


/**
 * @param {!proto.org.couchers.api.account.LogOutSessionReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.logOutSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/LogOutSession',
      request,
      metadata || {},
      methodDescriptor_Account_LogOutSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.couchers.api.account.LogOutOtherSessionsReq,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Account_LogOutOtherSessions = new grpc.web.MethodDescriptor(
  '/org.couchers.api.account.Account/LogOutOtherSessions',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.api.account.LogOutOtherSessionsReq,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.org.couchers.api.account.LogOutOtherSessionsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.org.couchers.api.account.LogOutOtherSessionsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.account.AccountClient.prototype.logOutOtherSessions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.account.Account/LogOutOtherSessions',
      request,
      metadata || {},
      methodDescriptor_Account_LogOutOtherSessions,
      callback);
};


/**
 * @param {!proto.org.couchers.api.account.LogOutOtherSessionsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.account.AccountPromiseClient.prototype.logOutOtherSessions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.account.Account/LogOutOtherSessions',
      request,
      metadata || {},
      methodDescriptor_Account_LogOutOtherSessions);
};


module.exports = proto.org.couchers.api.account;
