"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeoPointQuery = exports.GeoWithinQuery = exports.WithinQuery = exports.NearQuery = exports.GeoPointInput = exports.GeoPoint = void 0;

var _graphql = require("graphql");

var _BaseQuery = require("./BaseQuery");

const geoPointFields = {
  latitude: {
    type: _graphql.GraphQLFloat,
    description: 'laititude of the point, in degrees'
  },
  longitude: {
    type: _graphql.GraphQLFloat,
    description: 'latitude of the point, in degrees'
  }
};
const GeoPoint = new _graphql.GraphQLObjectType({
  name: 'GeoPoint',
  fields: geoPointFields
});
exports.GeoPoint = GeoPoint;
const GeoPointInput = new _graphql.GraphQLInputObjectType({
  name: 'GeoPointInput',
  fields: geoPointFields
});
exports.GeoPointInput = GeoPointInput;
const NearQuery = new _graphql.GraphQLInputObjectType({
  name: 'NearQuery',
  fields: {
    point: {
      type: new _graphql.GraphQLNonNull(GeoPointInput)
    },
    maxDistanceInMiles: {
      type: _graphql.GraphQLFloat
    },
    maxDistanceInKilometers: {
      type: _graphql.GraphQLFloat
    },
    maxDistanceInRadians: {
      type: _graphql.GraphQLFloat
    }
  }
});
exports.NearQuery = NearQuery;
const WithinQuery = new _graphql.GraphQLInputObjectType({
  name: 'WithinQuery',
  fields: {
    box: {
      type: new _graphql.GraphQLList(GeoPointInput)
    }
  }
});
exports.WithinQuery = WithinQuery;
const GeoWithinQuery = new _graphql.GraphQLInputObjectType({
  name: 'GeoWithinQuery',
  fields: {
    polygon: {
      type: new _graphql.GraphQLList(GeoPointInput)
    }
  }
});
exports.GeoWithinQuery = GeoWithinQuery;
const GeoPointQuery = new _graphql.GraphQLInputObjectType({
  name: 'GeoQuery',
  fields: Object.assign({}, (0, _BaseQuery.BaseQuery)(GeoPointInput), {
    nearSphere: {
      type: NearQuery
    },
    within: {
      type: WithinQuery
    },
    geoWithin: {
      type: GeoWithinQuery
    }
  })
});
exports.GeoPointQuery = GeoPointQuery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3R5cGVzL0dlb1BvaW50LmpzIl0sIm5hbWVzIjpbImdlb1BvaW50RmllbGRzIiwibGF0aXR1ZGUiLCJ0eXBlIiwiR3JhcGhRTEZsb2F0IiwiZGVzY3JpcHRpb24iLCJsb25naXR1ZGUiLCJHZW9Qb2ludCIsIkdyYXBoUUxPYmplY3RUeXBlIiwibmFtZSIsImZpZWxkcyIsIkdlb1BvaW50SW5wdXQiLCJHcmFwaFFMSW5wdXRPYmplY3RUeXBlIiwiTmVhclF1ZXJ5IiwicG9pbnQiLCJHcmFwaFFMTm9uTnVsbCIsIm1heERpc3RhbmNlSW5NaWxlcyIsIm1heERpc3RhbmNlSW5LaWxvbWV0ZXJzIiwibWF4RGlzdGFuY2VJblJhZGlhbnMiLCJXaXRoaW5RdWVyeSIsImJveCIsIkdyYXBoUUxMaXN0IiwiR2VvV2l0aGluUXVlcnkiLCJwb2x5Z29uIiwiR2VvUG9pbnRRdWVyeSIsIk9iamVjdCIsImFzc2lnbiIsIm5lYXJTcGhlcmUiLCJ3aXRoaW4iLCJnZW9XaXRoaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFRQTs7QUFDQSxNQUFNQSxjQUFjLEdBQUc7QUFDckJDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVDLHFCQURFO0FBRVJDLElBQUFBLFdBQVcsRUFBRTtBQUZMLEdBRFc7QUFLckJDLEVBQUFBLFNBQVMsRUFBRTtBQUNUSCxJQUFBQSxJQUFJLEVBQUVDLHFCQURHO0FBRVRDLElBQUFBLFdBQVcsRUFBRTtBQUZKO0FBTFUsQ0FBdkI7QUFXTyxNQUFNRSxRQUFRLEdBQUcsSUFBSUMsMEJBQUosQ0FBc0I7QUFDNUNDLEVBQUFBLElBQUksRUFBRSxVQURzQztBQUU1Q0MsRUFBQUEsTUFBTSxFQUFFVDtBQUZvQyxDQUF0QixDQUFqQjs7QUFLQSxNQUFNVSxhQUFhLEdBQUcsSUFBSUMsK0JBQUosQ0FBMkI7QUFDdERILEVBQUFBLElBQUksRUFBRSxlQURnRDtBQUV0REMsRUFBQUEsTUFBTSxFQUFFVDtBQUY4QyxDQUEzQixDQUF0Qjs7QUFLQSxNQUFNWSxTQUFTLEdBQUcsSUFBSUQsK0JBQUosQ0FBMkI7QUFDbERILEVBQUFBLElBQUksRUFBRSxXQUQ0QztBQUVsREMsRUFBQUEsTUFBTSxFQUFFO0FBQ05JLElBQUFBLEtBQUssRUFBRTtBQUNMWCxNQUFBQSxJQUFJLEVBQUUsSUFBSVksdUJBQUosQ0FBbUJKLGFBQW5CO0FBREQsS0FERDtBQUlOSyxJQUFBQSxrQkFBa0IsRUFBRTtBQUNsQmIsTUFBQUEsSUFBSSxFQUFFQztBQURZLEtBSmQ7QUFPTmEsSUFBQUEsdUJBQXVCLEVBQUU7QUFDdkJkLE1BQUFBLElBQUksRUFBRUM7QUFEaUIsS0FQbkI7QUFVTmMsSUFBQUEsb0JBQW9CLEVBQUU7QUFDcEJmLE1BQUFBLElBQUksRUFBRUM7QUFEYztBQVZoQjtBQUYwQyxDQUEzQixDQUFsQjs7QUFrQkEsTUFBTWUsV0FBVyxHQUFHLElBQUlQLCtCQUFKLENBQTJCO0FBQ3BESCxFQUFBQSxJQUFJLEVBQUUsYUFEOEM7QUFFcERDLEVBQUFBLE1BQU0sRUFBRTtBQUNOVSxJQUFBQSxHQUFHLEVBQUU7QUFDSGpCLE1BQUFBLElBQUksRUFBRSxJQUFJa0Isb0JBQUosQ0FBZ0JWLGFBQWhCO0FBREg7QUFEQztBQUY0QyxDQUEzQixDQUFwQjs7QUFTQSxNQUFNVyxjQUFjLEdBQUcsSUFBSVYsK0JBQUosQ0FBMkI7QUFDdkRILEVBQUFBLElBQUksRUFBRSxnQkFEaUQ7QUFFdkRDLEVBQUFBLE1BQU0sRUFBRTtBQUNOYSxJQUFBQSxPQUFPLEVBQUU7QUFDUHBCLE1BQUFBLElBQUksRUFBRSxJQUFJa0Isb0JBQUosQ0FBZ0JWLGFBQWhCO0FBREM7QUFESDtBQUYrQyxDQUEzQixDQUF2Qjs7QUFTQSxNQUFNYSxhQUFhLEdBQUcsSUFBSVosK0JBQUosQ0FBMkI7QUFDdERILEVBQUFBLElBQUksRUFBRSxVQURnRDtBQUV0REMsRUFBQUEsTUFBTSxFQUFFZSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLDBCQUFVZixhQUFWLENBQWxCLEVBQTRDO0FBQ2xEZ0IsSUFBQUEsVUFBVSxFQUFFO0FBQ1Z4QixNQUFBQSxJQUFJLEVBQUVVO0FBREksS0FEc0M7QUFJbERlLElBQUFBLE1BQU0sRUFBRTtBQUNOekIsTUFBQUEsSUFBSSxFQUFFZ0I7QUFEQSxLQUowQztBQU9sRFUsSUFBQUEsU0FBUyxFQUFFO0FBQ1QxQixNQUFBQSxJQUFJLEVBQUVtQjtBQURHO0FBUHVDLEdBQTVDO0FBRjhDLENBQTNCLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgR3JhcGhRTEZsb2F0LFxuICBHcmFwaFFMT2JqZWN0VHlwZSxcbiAgR3JhcGhRTElucHV0T2JqZWN0VHlwZSxcbiAgR3JhcGhRTE5vbk51bGwsXG4gIEdyYXBoUUxMaXN0LFxufSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IHsgQmFzZVF1ZXJ5IH0gZnJvbSAnLi9CYXNlUXVlcnknO1xuY29uc3QgZ2VvUG9pbnRGaWVsZHMgPSB7XG4gIGxhdGl0dWRlOiB7XG4gICAgdHlwZTogR3JhcGhRTEZsb2F0LFxuICAgIGRlc2NyaXB0aW9uOiAnbGFpdGl0dWRlIG9mIHRoZSBwb2ludCwgaW4gZGVncmVlcycsXG4gIH0sXG4gIGxvbmdpdHVkZToge1xuICAgIHR5cGU6IEdyYXBoUUxGbG9hdCxcbiAgICBkZXNjcmlwdGlvbjogJ2xhdGl0dWRlIG9mIHRoZSBwb2ludCwgaW4gZGVncmVlcycsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgR2VvUG9pbnQgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiAnR2VvUG9pbnQnLFxuICBmaWVsZHM6IGdlb1BvaW50RmllbGRzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBHZW9Qb2ludElucHV0ID0gbmV3IEdyYXBoUUxJbnB1dE9iamVjdFR5cGUoe1xuICBuYW1lOiAnR2VvUG9pbnRJbnB1dCcsXG4gIGZpZWxkczogZ2VvUG9pbnRGaWVsZHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IE5lYXJRdWVyeSA9IG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgbmFtZTogJ05lYXJRdWVyeScsXG4gIGZpZWxkczoge1xuICAgIHBvaW50OiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR2VvUG9pbnRJbnB1dCksXG4gICAgfSxcbiAgICBtYXhEaXN0YW5jZUluTWlsZXM6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxGbG9hdCxcbiAgICB9LFxuICAgIG1heERpc3RhbmNlSW5LaWxvbWV0ZXJzOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMRmxvYXQsXG4gICAgfSxcbiAgICBtYXhEaXN0YW5jZUluUmFkaWFuczoge1xuICAgICAgdHlwZTogR3JhcGhRTEZsb2F0LFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IFdpdGhpblF1ZXJ5ID0gbmV3IEdyYXBoUUxJbnB1dE9iamVjdFR5cGUoe1xuICBuYW1lOiAnV2l0aGluUXVlcnknLFxuICBmaWVsZHM6IHtcbiAgICBib3g6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTGlzdChHZW9Qb2ludElucHV0KSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBHZW9XaXRoaW5RdWVyeSA9IG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgbmFtZTogJ0dlb1dpdGhpblF1ZXJ5JyxcbiAgZmllbGRzOiB7XG4gICAgcG9seWdvbjoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxMaXN0KEdlb1BvaW50SW5wdXQpLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IEdlb1BvaW50UXVlcnkgPSBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gIG5hbWU6ICdHZW9RdWVyeScsXG4gIGZpZWxkczogT2JqZWN0LmFzc2lnbih7fSwgQmFzZVF1ZXJ5KEdlb1BvaW50SW5wdXQpLCB7XG4gICAgbmVhclNwaGVyZToge1xuICAgICAgdHlwZTogTmVhclF1ZXJ5LFxuICAgIH0sXG4gICAgd2l0aGluOiB7XG4gICAgICB0eXBlOiBXaXRoaW5RdWVyeSxcbiAgICB9LFxuICAgIGdlb1dpdGhpbjoge1xuICAgICAgdHlwZTogR2VvV2l0aGluUXVlcnksXG4gICAgfSxcbiAgfSksXG59KTtcbiJdfQ==