import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as annotations_pb from './annotations_pb'; // proto import: "annotations.proto"
import * as account_pb from './account_pb'; // proto import: "account.proto"


export class JailInfoRes extends jspb.Message {
  getJailed(): boolean;
  setJailed(value: boolean): JailInfoRes;

  getHasNotAcceptedTos(): boolean;
  setHasNotAcceptedTos(value: boolean): JailInfoRes;

  getHasNotAddedLocation(): boolean;
  setHasNotAddedLocation(value: boolean): JailInfoRes;

  getHasNotAcceptedCommunityGuidelines(): boolean;
  setHasNotAcceptedCommunityGuidelines(value: boolean): JailInfoRes;

  getHasPendingModNotes(): boolean;
  setHasPendingModNotes(value: boolean): JailInfoRes;

  getPendingModNotesList(): Array<account_pb.ModNote>;
  setPendingModNotesList(value: Array<account_pb.ModNote>): JailInfoRes;
  clearPendingModNotesList(): JailInfoRes;
  addPendingModNotes(value?: account_pb.ModNote, index?: number): account_pb.ModNote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JailInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: JailInfoRes): JailInfoRes.AsObject;
  static serializeBinaryToWriter(message: JailInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JailInfoRes;
  static deserializeBinaryFromReader(message: JailInfoRes, reader: jspb.BinaryReader): JailInfoRes;
}

export namespace JailInfoRes {
  export type AsObject = {
    jailed: boolean,
    hasNotAcceptedTos: boolean,
    hasNotAddedLocation: boolean,
    hasNotAcceptedCommunityGuidelines: boolean,
    hasPendingModNotes: boolean,
    pendingModNotesList: Array<account_pb.ModNote.AsObject>,
  }
}

export class AcceptTOSReq extends jspb.Message {
  getAccept(): boolean;
  setAccept(value: boolean): AcceptTOSReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptTOSReq.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptTOSReq): AcceptTOSReq.AsObject;
  static serializeBinaryToWriter(message: AcceptTOSReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptTOSReq;
  static deserializeBinaryFromReader(message: AcceptTOSReq, reader: jspb.BinaryReader): AcceptTOSReq;
}

export namespace AcceptTOSReq {
  export type AsObject = {
    accept: boolean,
  }
}

export class SetLocationReq extends jspb.Message {
  getCity(): string;
  setCity(value: string): SetLocationReq;

  getLat(): number;
  setLat(value: number): SetLocationReq;

  getLng(): number;
  setLng(value: number): SetLocationReq;

  getRadius(): number;
  setRadius(value: number): SetLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetLocationReq): SetLocationReq.AsObject;
  static serializeBinaryToWriter(message: SetLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLocationReq;
  static deserializeBinaryFromReader(message: SetLocationReq, reader: jspb.BinaryReader): SetLocationReq;
}

export namespace SetLocationReq {
  export type AsObject = {
    city: string,
    lat: number,
    lng: number,
    radius: number,
  }
}

export class AcceptCommunityGuidelinesReq extends jspb.Message {
  getAccept(): boolean;
  setAccept(value: boolean): AcceptCommunityGuidelinesReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptCommunityGuidelinesReq.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptCommunityGuidelinesReq): AcceptCommunityGuidelinesReq.AsObject;
  static serializeBinaryToWriter(message: AcceptCommunityGuidelinesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptCommunityGuidelinesReq;
  static deserializeBinaryFromReader(message: AcceptCommunityGuidelinesReq, reader: jspb.BinaryReader): AcceptCommunityGuidelinesReq;
}

export namespace AcceptCommunityGuidelinesReq {
  export type AsObject = {
    accept: boolean,
  }
}

export class AcknowledgePendingModNoteReq extends jspb.Message {
  getNoteId(): number;
  setNoteId(value: number): AcknowledgePendingModNoteReq;

  getAcknowledge(): boolean;
  setAcknowledge(value: boolean): AcknowledgePendingModNoteReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcknowledgePendingModNoteReq.AsObject;
  static toObject(includeInstance: boolean, msg: AcknowledgePendingModNoteReq): AcknowledgePendingModNoteReq.AsObject;
  static serializeBinaryToWriter(message: AcknowledgePendingModNoteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcknowledgePendingModNoteReq;
  static deserializeBinaryFromReader(message: AcknowledgePendingModNoteReq, reader: jspb.BinaryReader): AcknowledgePendingModNoteReq;
}

export namespace AcknowledgePendingModNoteReq {
  export type AsObject = {
    noteId: number,
    acknowledge: boolean,
  }
}

