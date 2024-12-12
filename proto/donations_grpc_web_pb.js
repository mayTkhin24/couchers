/**
 * @fileoverview gRPC-Web generated client stub for org.couchers.api.donations
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: donations.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var annotations_pb = require('./annotations_pb.js')
const proto = {};
proto.org = {};
proto.org.couchers = {};
proto.org.couchers.api = {};
proto.org.couchers.api.donations = require('./donations_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.org.couchers.api.donations.DonationsClient =
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
proto.org.couchers.api.donations.DonationsPromiseClient =
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
 *   !proto.org.couchers.api.donations.InitiateDonationReq,
 *   !proto.org.couchers.api.donations.InitiateDonationRes>}
 */
const methodDescriptor_Donations_InitiateDonation = new grpc.web.MethodDescriptor(
  '/org.couchers.api.donations.Donations/InitiateDonation',
  grpc.web.MethodType.UNARY,
  proto.org.couchers.api.donations.InitiateDonationReq,
  proto.org.couchers.api.donations.InitiateDonationRes,
  /**
   * @param {!proto.org.couchers.api.donations.InitiateDonationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.couchers.api.donations.InitiateDonationRes.deserializeBinary
);


/**
 * @param {!proto.org.couchers.api.donations.InitiateDonationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.org.couchers.api.donations.InitiateDonationRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.couchers.api.donations.InitiateDonationRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.couchers.api.donations.DonationsClient.prototype.initiateDonation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.couchers.api.donations.Donations/InitiateDonation',
      request,
      metadata || {},
      methodDescriptor_Donations_InitiateDonation,
      callback);
};


/**
 * @param {!proto.org.couchers.api.donations.InitiateDonationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.couchers.api.donations.InitiateDonationRes>}
 *     Promise that resolves to the response
 */
proto.org.couchers.api.donations.DonationsPromiseClient.prototype.initiateDonation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.couchers.api.donations.Donations/InitiateDonation',
      request,
      metadata || {},
      methodDescriptor_Donations_InitiateDonation);
};


module.exports = proto.org.couchers.api.donations;
