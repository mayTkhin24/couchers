import json

import pytest
from google.protobuf import empty_pb2

from tests.test_communities import testing_communities  # noqa
from tests.test_fixtures import generate_user, gis_session, testconfig  # noqa


@pytest.fixture(autouse=True)
def _(testconfig):
    pass


class TestGetUsers:
    @staticmethod
    def test_GetUsers(testing_communities):
        _, token = generate_user()

        with gis_session(token) as gis:
            http_body = gis.GetUsers(empty_pb2.Empty())
            assert http_body.content_type == "application/json"
            data = json.loads(http_body.data)
            assert data["type"] == "FeatureCollection"
            assert len(data["features"]) > 1
