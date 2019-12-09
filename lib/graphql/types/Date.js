"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateQuery = exports.Date = void 0;

var _graphql = require("graphql");

var _NumberQuery = require("./NumberQuery");

const Date = new _graphql.GraphQLScalarType({
  name: 'Date',
  serialize: obj => {
    if (typeof obj === 'object' && obj.__type === 'Date') {
      return new global.Date(obj.iso);
    } else if (typeof obj === 'string' || typeof obj === 'number') {
      return new global.Date(obj);
    }

    throw `Cannot serialize date`;
  },
  parseValue: value => {
    const date = new global.Date(value);
    return {
      iso: date.toISOString(),
      __type: 'Date'
    };
  },
  parseLiteral: node => {
    if (node.kind === _graphql.Kind.STRING) {
      const date = new global.Date(node.value);
      return {
        iso: date.toISOString(),
        __type: 'Date'
      };
    }

    throw `Cannot parse date of type ${node.kind}`;
  }
});
exports.Date = Date;
const DateQuery = (0, _NumberQuery.ComparableQuery)('DateQuery', Date);
exports.DateQuery = DateQuery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3R5cGVzL0RhdGUuanMiXSwibmFtZXMiOlsiRGF0ZSIsIkdyYXBoUUxTY2FsYXJUeXBlIiwibmFtZSIsInNlcmlhbGl6ZSIsIm9iaiIsIl9fdHlwZSIsImdsb2JhbCIsImlzbyIsInBhcnNlVmFsdWUiLCJ2YWx1ZSIsImRhdGUiLCJ0b0lTT1N0cmluZyIsInBhcnNlTGl0ZXJhbCIsIm5vZGUiLCJraW5kIiwiS2luZCIsIlNUUklORyIsIkRhdGVRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVPLE1BQU1BLElBQUksR0FBRyxJQUFJQywwQkFBSixDQUFzQjtBQUN4Q0MsRUFBQUEsSUFBSSxFQUFFLE1BRGtDO0FBRXhDQyxFQUFBQSxTQUFTLEVBQUVDLEdBQUcsSUFBSTtBQUNoQixRQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCQSxHQUFHLENBQUNDLE1BQUosS0FBZSxNQUE5QyxFQUFzRDtBQUNwRCxhQUFPLElBQUlDLE1BQU0sQ0FBQ04sSUFBWCxDQUFnQkksR0FBRyxDQUFDRyxHQUFwQixDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUksT0FBT0gsR0FBUCxLQUFlLFFBQWYsSUFBMkIsT0FBT0EsR0FBUCxLQUFlLFFBQTlDLEVBQXdEO0FBQzdELGFBQU8sSUFBSUUsTUFBTSxDQUFDTixJQUFYLENBQWdCSSxHQUFoQixDQUFQO0FBQ0Q7O0FBQ0QsVUFBTyx1QkFBUDtBQUNELEdBVHVDO0FBVXhDSSxFQUFBQSxVQUFVLEVBQUVDLEtBQUssSUFBSTtBQUNuQixVQUFNQyxJQUFJLEdBQUcsSUFBSUosTUFBTSxDQUFDTixJQUFYLENBQWdCUyxLQUFoQixDQUFiO0FBQ0EsV0FBTztBQUFFRixNQUFBQSxHQUFHLEVBQUVHLElBQUksQ0FBQ0MsV0FBTCxFQUFQO0FBQTJCTixNQUFBQSxNQUFNLEVBQUU7QUFBbkMsS0FBUDtBQUNELEdBYnVDO0FBY3hDTyxFQUFBQSxZQUFZLEVBQUVDLElBQUksSUFBSTtBQUNwQixRQUFJQSxJQUFJLENBQUNDLElBQUwsS0FBY0MsY0FBS0MsTUFBdkIsRUFBK0I7QUFDN0IsWUFBTU4sSUFBSSxHQUFHLElBQUlKLE1BQU0sQ0FBQ04sSUFBWCxDQUFnQmEsSUFBSSxDQUFDSixLQUFyQixDQUFiO0FBQ0EsYUFBTztBQUFFRixRQUFBQSxHQUFHLEVBQUVHLElBQUksQ0FBQ0MsV0FBTCxFQUFQO0FBQTJCTixRQUFBQSxNQUFNLEVBQUU7QUFBbkMsT0FBUDtBQUNEOztBQUNELFVBQU8sNkJBQTRCUSxJQUFJLENBQUNDLElBQUssRUFBN0M7QUFDRDtBQXBCdUMsQ0FBdEIsQ0FBYjs7QUF1QkEsTUFBTUcsU0FBUyxHQUFHLGtDQUFnQixXQUFoQixFQUE2QmpCLElBQTdCLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTFNjYWxhclR5cGUsIEtpbmQgfSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IHsgQ29tcGFyYWJsZVF1ZXJ5IH0gZnJvbSAnLi9OdW1iZXJRdWVyeSc7XG5cbmV4cG9ydCBjb25zdCBEYXRlID0gbmV3IEdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgbmFtZTogJ0RhdGUnLFxuICBzZXJpYWxpemU6IG9iaiA9PiB7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5fX3R5cGUgPT09ICdEYXRlJykge1xuICAgICAgcmV0dXJuIG5ldyBnbG9iYWwuRGF0ZShvYmouaXNvKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gbmV3IGdsb2JhbC5EYXRlKG9iaik7XG4gICAgfVxuICAgIHRocm93IGBDYW5ub3Qgc2VyaWFsaXplIGRhdGVgO1xuICB9LFxuICBwYXJzZVZhbHVlOiB2YWx1ZSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBnbG9iYWwuRGF0ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHsgaXNvOiBkYXRlLnRvSVNPU3RyaW5nKCksIF9fdHlwZTogJ0RhdGUnIH07XG4gIH0sXG4gIHBhcnNlTGl0ZXJhbDogbm9kZSA9PiB7XG4gICAgaWYgKG5vZGUua2luZCA9PT0gS2luZC5TVFJJTkcpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgZ2xvYmFsLkRhdGUobm9kZS52YWx1ZSk7XG4gICAgICByZXR1cm4geyBpc286IGRhdGUudG9JU09TdHJpbmcoKSwgX190eXBlOiAnRGF0ZScgfTtcbiAgICB9XG4gICAgdGhyb3cgYENhbm5vdCBwYXJzZSBkYXRlIG9mIHR5cGUgJHtub2RlLmtpbmR9YDtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgRGF0ZVF1ZXJ5ID0gQ29tcGFyYWJsZVF1ZXJ5KCdEYXRlUXVlcnknLCBEYXRlKTtcbiJdfQ==