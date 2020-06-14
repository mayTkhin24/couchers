# Borrows form OpenTracing's python gRPC interceptors, under Apache 2


from typing import List

import grpc

from . import grpcext
from .grpcext import intercept_server


# pylint:disable=abstract-method
class _AuthInterceptorServicerContext(grpc.ServicerContext):
    def __init__(self, servicer_context, user_id):
        self._servicer_context = servicer_context
        self.user_id = user_id
        self.code = grpc.StatusCode.OK
        self.details = None
        super().__init__()

    def is_active(self, *args, **kwargs):
        return self._servicer_context.is_active(*args, **kwargs)

    def time_remaining(self, *args, **kwargs):
        return self._servicer_context.time_remaining(*args, **kwargs)

    def cancel(self, *args, **kwargs):
        return self._servicer_context.cancel(*args, **kwargs)

    def add_callback(self, *args, **kwargs):
        return self._servicer_context.add_callback(*args, **kwargs)

    def invocation_metadata(self, *args, **kwargs):
        return self._servicer_context.invocation_metadata(*args, **kwargs)

    def peer(self, *args, **kwargs):
        return self._servicer_context.peer(*args, **kwargs)

    def peer_identities(self, *args, **kwargs):
        return self._servicer_context.peer_identities(*args, **kwargs)

    def peer_identity_key(self, *args, **kwargs):
        return self._servicer_context.peer_identity_key(*args, **kwargs)

    def auth_context(self, *args, **kwargs):
        return self._servicer_context.auth_context(*args, **kwargs)

    def send_initial_metadata(self, *args, **kwargs):
        return self._servicer_context.send_initial_metadata(*args, **kwargs)

    def set_trailing_metadata(self, *args, **kwargs):
        return self._servicer_context.set_trailing_metadata(*args, **kwargs)

    def abort(self, *args, **kwargs):
        return self._servicer_context.abort(*args, **kwargs)

    def abort_with_status(self, *args, **kwargs):
        return self._servicer_context.abort_with_status(*args, **kwargs)

    def set_code(self, code):
        self.code = code
        return self._servicer_context.set_code(code)

    def set_details(self, details):
        self.details = details
        return self._servicer_context.set_details(details)


class _AuthValidatorInterceptor(grpcext.UnaryServerInterceptor, grpcext.StreamServerInterceptor):
    def __init__(self, get_user_for_session_token):
        self._get_user_for_session_token = get_user_for_session_token

    def _abort(self, ctx):
        return ctx.abort(grpc.StatusCode.UNAUTHENTICATED, "Unauthorized")

    def intercept_unary(self, request, servicer_context, server_info, handler):
        metadata = {key: value for (key, value) in servicer_context.invocation_metadata()}

        # abort also if no bearer token is present
        if not "authorization" in metadata:
            return self._abort(servicer_context)

        authorization = metadata["authorization"]
        if not authorization.startswith("Bearer "):
            return self._abort(servicer_context)

        user_id = self._get_user_for_session_token(token=authorization[7:])

        if not user_id:
            return self._abort(servicer_context)

        return handler(request, _AuthInterceptorServicerContext(servicer_context, user_id))

    def intercept_stream(self, request_or_iterator, servicer_context, server_info, handler):
        raise NotImplementedError()
