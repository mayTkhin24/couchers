import * as grpcWeb from 'grpc-web';

import * as donations_pb from './donations_pb'; // proto import: "donations.proto"


export class DonationsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  initiateDonation(
    request: donations_pb.InitiateDonationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: donations_pb.InitiateDonationRes) => void
  ): grpcWeb.ClientReadableStream<donations_pb.InitiateDonationRes>;

}

export class DonationsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  initiateDonation(
    request: donations_pb.InitiateDonationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<donations_pb.InitiateDonationRes>;

}

