import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as admin_pb from './admin_pb'; // proto import: "admin.proto"
import * as communities_pb from './communities_pb'; // proto import: "communities.proto"
import * as api_pb from './api_pb'; // proto import: "api.proto"


export class AdminClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getUserDetails(
    request: admin_pb.GetUserDetailsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  getUser(
    request: admin_pb.GetUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_pb.User) => void
  ): grpcWeb.ClientReadableStream<api_pb.User>;

  changeUserGender(
    request: admin_pb.ChangeUserGenderReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  changeUserBirthdate(
    request: admin_pb.ChangeUserBirthdateReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  addBadge(
    request: admin_pb.AddBadgeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  removeBadge(
    request: admin_pb.RemoveBadgeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  setPassportSexGenderException(
    request: admin_pb.SetPassportSexGenderExceptionReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  banUser(
    request: admin_pb.BanUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  unbanUser(
    request: admin_pb.UnbanUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  addAdminNote(
    request: admin_pb.AddAdminNoteReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  getContentReport(
    request: admin_pb.GetContentReportReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.GetContentReportRes) => void
  ): grpcWeb.ClientReadableStream<admin_pb.GetContentReportRes>;

  getContentReportsForAuthor(
    request: admin_pb.GetContentReportsForAuthorReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.GetContentReportsForAuthorRes) => void
  ): grpcWeb.ClientReadableStream<admin_pb.GetContentReportsForAuthorRes>;

  sendModNote(
    request: admin_pb.SendModNoteReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  deleteUser(
    request: admin_pb.DeleteUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  recoverDeletedUser(
    request: admin_pb.RecoverDeletedUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.UserDetails) => void
  ): grpcWeb.ClientReadableStream<admin_pb.UserDetails>;

  createApiKey(
    request: admin_pb.CreateApiKeyReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.CreateApiKeyRes) => void
  ): grpcWeb.ClientReadableStream<admin_pb.CreateApiKeyRes>;

  createCommunity(
    request: admin_pb.CreateCommunityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: communities_pb.Community) => void
  ): grpcWeb.ClientReadableStream<communities_pb.Community>;

  getChats(
    request: admin_pb.GetChatsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.GetChatsRes) => void
  ): grpcWeb.ClientReadableStream<admin_pb.GetChatsRes>;

  listEventCommunityInviteRequests(
    request: admin_pb.ListEventCommunityInviteRequestsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.ListEventCommunityInviteRequestsRes) => void
  ): grpcWeb.ClientReadableStream<admin_pb.ListEventCommunityInviteRequestsRes>;

  decideEventCommunityInviteRequest(
    request: admin_pb.DecideEventCommunityInviteRequestReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.DecideEventCommunityInviteRequestRes) => void
  ): grpcWeb.ClientReadableStream<admin_pb.DecideEventCommunityInviteRequestRes>;

  deleteEvent(
    request: admin_pb.DeleteEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class AdminPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getUserDetails(
    request: admin_pb.GetUserDetailsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  getUser(
    request: admin_pb.GetUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<api_pb.User>;

  changeUserGender(
    request: admin_pb.ChangeUserGenderReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  changeUserBirthdate(
    request: admin_pb.ChangeUserBirthdateReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  addBadge(
    request: admin_pb.AddBadgeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  removeBadge(
    request: admin_pb.RemoveBadgeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  setPassportSexGenderException(
    request: admin_pb.SetPassportSexGenderExceptionReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  banUser(
    request: admin_pb.BanUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  unbanUser(
    request: admin_pb.UnbanUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  addAdminNote(
    request: admin_pb.AddAdminNoteReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  getContentReport(
    request: admin_pb.GetContentReportReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.GetContentReportRes>;

  getContentReportsForAuthor(
    request: admin_pb.GetContentReportsForAuthorReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.GetContentReportsForAuthorRes>;

  sendModNote(
    request: admin_pb.SendModNoteReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  deleteUser(
    request: admin_pb.DeleteUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  recoverDeletedUser(
    request: admin_pb.RecoverDeletedUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.UserDetails>;

  createApiKey(
    request: admin_pb.CreateApiKeyReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.CreateApiKeyRes>;

  createCommunity(
    request: admin_pb.CreateCommunityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<communities_pb.Community>;

  getChats(
    request: admin_pb.GetChatsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.GetChatsRes>;

  listEventCommunityInviteRequests(
    request: admin_pb.ListEventCommunityInviteRequestsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.ListEventCommunityInviteRequestsRes>;

  decideEventCommunityInviteRequest(
    request: admin_pb.DecideEventCommunityInviteRequestReq,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_pb.DecideEventCommunityInviteRequestRes>;

  deleteEvent(
    request: admin_pb.DeleteEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

