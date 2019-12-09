"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserAuthMutationFields = getUserAuthMutationFields;
exports.getUserAuthQueryFields = getUserAuthQueryFields;
exports.default = void 0;

var _graphql = require("graphql");

var _http = require("http");

var _execute = require("../execute");

var _UserAuthentication = require("../../Controllers/UserAuthentication");

var _ParseClass = require("./ParseClass");

var _Config = require("../../Config");

var _Auth = require("../../Auth");

const getLoginCompletePayload = schema => (0, _ParseClass.loadClass)('_User', schema).objectType;

const LoginInput = new _graphql.GraphQLInputObjectType({
  name: 'LoginInput',
  fields: {
    email: {
      type: _graphql.GraphQLString,
      description: 'the email of the user. Either email or username should be provided'
    },
    username: {
      type: _graphql.GraphQLString,
      description: 'the username of the user. Either email or username should be provided'
    },
    password: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
    }
  }
});

const login = schema => ({
  type: getLoginCompletePayload(schema),
  args: {
    input: {
      type: LoginInput
    }
  },
  resolve: async (root, args, req) => {
    const user = await (0, _UserAuthentication.logIn)(args.input, req.config, req.auth, req.info && req.info.installationId);
    return (0, _execute.transformResult)('_User', user);
  }
});

const logout = {
  type: _graphql.GraphQLBoolean,
  resolve: async (root, args, req) => {
    await (0, _UserAuthentication.logOut)(req.info.sessionToken, req.config, req.info.clientSDK);
    return true;
  }
};
const requestPasswordReset = {
  type: _graphql.GraphQLBoolean,
  args: {
    input: {
      type: new _graphql.GraphQLInputObjectType({
        name: 'RequestPasswordResetInput',
        fields: {
          email: {
            type: _graphql.GraphQLString,
            description: 'the email address to send the password reset mail.'
          }
        }
      })
    }
  },
  resolve: async (root, args, req) => {
    const config = req.config;
    await config.userController.sendPasswordResetEmail(args.input.email);
    return true;
  }
};

function getUserAuthMutationFields(schema) {
  return {
    login: login(schema),
    logout,
    requestPasswordReset
  };
}

function getUserAuthQueryFields(schema) {
  return {
    currentUser: {
      type: getLoginCompletePayload(schema),
      resolve: async (root, args, req, info) => {
        if (!req.auth.user) {
          throw new Error('You need to be logged in.');
        }

        const object = await (0, _execute.runGet)(req, info, '_User', req.auth.user.id);
        return (0, _execute.transformResult)('_User', object);
      }
    }
  };
}

var _default = {
  Query: getUserAuthQueryFields,
  Mutation: getUserAuthMutationFields
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYXMvVXNlckF1dGguanMiXSwibmFtZXMiOlsiZ2V0TG9naW5Db21wbGV0ZVBheWxvYWQiLCJzY2hlbWEiLCJvYmplY3RUeXBlIiwiTG9naW5JbnB1dCIsIkdyYXBoUUxJbnB1dE9iamVjdFR5cGUiLCJuYW1lIiwiZmllbGRzIiwiZW1haWwiLCJ0eXBlIiwiR3JhcGhRTFN0cmluZyIsImRlc2NyaXB0aW9uIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxvZ2luIiwiYXJncyIsImlucHV0IiwicmVzb2x2ZSIsInJvb3QiLCJyZXEiLCJ1c2VyIiwiY29uZmlnIiwiYXV0aCIsImluZm8iLCJpbnN0YWxsYXRpb25JZCIsImxvZ291dCIsIkdyYXBoUUxCb29sZWFuIiwic2Vzc2lvblRva2VuIiwiY2xpZW50U0RLIiwicmVxdWVzdFBhc3N3b3JkUmVzZXQiLCJ1c2VyQ29udHJvbGxlciIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJnZXRVc2VyQXV0aE11dGF0aW9uRmllbGRzIiwiZ2V0VXNlckF1dGhRdWVyeUZpZWxkcyIsImN1cnJlbnRVc2VyIiwiRXJyb3IiLCJvYmplY3QiLCJpZCIsIlF1ZXJ5IiwiTXV0YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQVFBOztBQU9BOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLE1BQU1BLHVCQUF1QixHQUFHQyxNQUFNLElBQUksMkJBQVUsT0FBVixFQUFtQkEsTUFBbkIsRUFBMkJDLFVBQXJFOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxJQUFJQywrQkFBSixDQUEyQjtBQUM1Q0MsRUFBQUEsSUFBSSxFQUFFLFlBRHNDO0FBRTVDQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRUMsc0JBREQ7QUFFTEMsTUFBQUEsV0FBVyxFQUNUO0FBSEcsS0FERDtBQU1OQyxJQUFBQSxRQUFRLEVBQUU7QUFD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O0FBQ0QsY0FBTUMsTUFBTSxHQUFHLE1BQU0scUJBQU9qQixHQUFQLEVBQVlJLElBQVosRUFBa0IsT0FBbEIsRUFBMkJKLEdBQUcsQ0FBQ0csSUFBSixDQUFTRixJQUFULENBQWNpQixFQUF6QyxDQUFyQjtBQUNBLGVBQU8sOEJBQWdCLE9BQWhCLEVBQXlCRCxNQUF6QixDQUFQO0FBQ0Q7QUFiVTtBQURSLEdBQVA7QUFpQkQ7O2VBRWM7QUFDYkUsRUFBQUEsS0FBSyxFQUFFTCxzQkFETTtBQUViTSxFQUFBQSxRQUFRLEVBQUVQO0FBRkcsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQge1xuICBHcmFwaFFMSW5wdXRPYmplY3RUeXBlLFxuICBHcmFwaFFMTm9uTnVsbCxcbiAgR3JhcGhRTFN0cmluZyxcbiAgR3JhcGhRTEJvb2xlYW4sXG4gIC8vIEBmbG93LWRpc2FibGUtbmV4dFxufSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IHsgQ2xpZW50UmVxdWVzdCB9IGZyb20gJ2h0dHAnO1xuaW50ZXJmYWNlIFBhcnNlQ2xpZW50UmVxdWVzdCBleHRlbmRzIENsaWVudFJlcXVlc3Qge1xuICBjb25maWc6IENvbmZpZztcbiAgYXV0aDogQXV0aDtcbiAgaW5mbzogeyBpbnN0YWxsYXRpb25JZDogP3N0cmluZywgY2xpZW50U0RLOiA/c3RyaW5nLCBzZXNzaW9uVG9rZW46ID9zdHJpbmcgfTtcbn1cblxuaW1wb3J0IHsgdHJhbnNmb3JtUmVzdWx0LCBydW5HZXQgfSBmcm9tICcuLi9leGVjdXRlJztcblxuaW1wb3J0IHsgbG9nSW4sIGxvZ091dCB9IGZyb20gJy4uLy4uL0NvbnRyb2xsZXJzL1VzZXJBdXRoZW50aWNhdGlvbic7XG5pbXBvcnQgeyBsb2FkQ2xhc3MgfSBmcm9tICcuL1BhcnNlQ2xhc3MnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vQ29uZmlnJztcbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi8uLi9BdXRoJztcblxuY29uc3QgZ2V0TG9naW5Db21wbGV0ZVBheWxvYWQgPSBzY2hlbWEgPT4gbG9hZENsYXNzKCdfVXNlcicsIHNjaGVtYSkub2JqZWN0VHlwZTtcblxuY29uc3QgTG9naW5JbnB1dCA9IG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgbmFtZTogJ0xvZ2luSW5wdXQnLFxuICBmaWVsZHM6IHtcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAndGhlIGVtYWlsIG9mIHRoZSB1c2VyLiBFaXRoZXIgZW1haWwgb3IgdXNlcm5hbWUgc2hvdWxkIGJlIHByb3ZpZGVkJyxcbiAgICB9LFxuICAgIHVzZXJuYW1lOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICd0aGUgdXNlcm5hbWUgb2YgdGhlIHVzZXIuIEVpdGhlciBlbWFpbCBvciB1c2VybmFtZSBzaG91bGQgYmUgcHJvdmlkZWQnLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZykgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBsb2dpbiA9IChzY2hlbWE6IGFueSkgPT4gKHtcbiAgdHlwZTogZ2V0TG9naW5Db21wbGV0ZVBheWxvYWQoc2NoZW1hKSxcbiAgYXJnczoge1xuICAgIGlucHV0OiB7IHR5cGU6IExvZ2luSW5wdXQgfSxcbiAgfSxcbiAgcmVzb2x2ZTogYXN5bmMgKHJvb3Q6IGFueSwgYXJnczogeyBpbnB1dDogYW55IH0sIHJlcTogUGFyc2VDbGllbnRSZXF1ZXN0KSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ0luKFxuICAgICAgYXJncy5pbnB1dCxcbiAgICAgIHJlcS5jb25maWcsXG4gICAgICByZXEuYXV0aCxcbiAgICAgIHJlcS5pbmZvICYmIHJlcS5pbmZvLmluc3RhbGxhdGlvbklkXG4gICAgKTtcbiAgICByZXR1cm4gdHJhbnNmb3JtUmVzdWx0KCdfVXNlcicsIHVzZXIpO1xuICB9LFxufSk7XG5cbmNvbnN0IGxvZ291dCA9IHtcbiAgdHlwZTogR3JhcGhRTEJvb2xlYW4sXG4gIHJlc29sdmU6IGFzeW5jIChyb290OiBhbnksIGFyZ3M6IHZvaWQsIHJlcTogUGFyc2VDbGllbnRSZXF1ZXN0KSA9PiB7XG4gICAgYXdhaXQgbG9nT3V0KHJlcS5pbmZvLnNlc3Npb25Ub2tlbiwgcmVxLmNvbmZpZywgcmVxLmluZm8uY2xpZW50U0RLKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn07XG5cbmNvbnN0IHJlcXVlc3RQYXNzd29yZFJlc2V0ID0ge1xuICB0eXBlOiBHcmFwaFFMQm9vbGVhbixcbiAgYXJnczoge1xuICAgIGlucHV0OiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gICAgICAgIG5hbWU6ICdSZXF1ZXN0UGFzc3dvcmRSZXNldElucHV0JyxcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3RoZSBlbWFpbCBhZGRyZXNzIHRvIHNlbmQgdGhlIHBhc3N3b3JkIHJlc2V0IG1haWwuJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZTogYXN5bmMgKFxuICAgIHJvb3Q6IGFueSxcbiAgICBhcmdzOiB7IGlucHV0OiB7IGVtYWlsOiBzdHJpbmcgfSB9LFxuICAgIHJlcTogUGFyc2VDbGllbnRSZXF1ZXN0XG4gICkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZzogQ29uZmlnID0gcmVxLmNvbmZpZztcbiAgICBhd2FpdCBjb25maWcudXNlckNvbnRyb2xsZXIuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChhcmdzLmlucHV0LmVtYWlsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyQXV0aE11dGF0aW9uRmllbGRzKHNjaGVtYTogYW55KSB7XG4gIHJldHVybiB7XG4gICAgbG9naW46IGxvZ2luKHNjaGVtYSksXG4gICAgbG9nb3V0LFxuICAgIHJlcXVlc3RQYXNzd29yZFJlc2V0LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckF1dGhRdWVyeUZpZWxkcyhzY2hlbWE6IGFueSkge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiB7XG4gICAgICB0eXBlOiBnZXRMb2dpbkNvbXBsZXRlUGF5bG9hZChzY2hlbWEpLFxuICAgICAgcmVzb2x2ZTogYXN5bmMgKFxuICAgICAgICByb290OiBhbnksXG4gICAgICAgIGFyZ3M6IHZvaWQsXG4gICAgICAgIHJlcTogUGFyc2VDbGllbnRSZXF1ZXN0LFxuICAgICAgICBpbmZvOiBhbnlcbiAgICAgICkgPT4ge1xuICAgICAgICBpZiAoIXJlcS5hdXRoLnVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbi4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvYmplY3QgPSBhd2FpdCBydW5HZXQocmVxLCBpbmZvLCAnX1VzZXInLCByZXEuYXV0aC51c2VyLmlkKTtcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybVJlc3VsdCgnX1VzZXInLCBvYmplY3QpO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFF1ZXJ5OiBnZXRVc2VyQXV0aFF1ZXJ5RmllbGRzLFxuICBNdXRhdGlvbjogZ2V0VXNlckF1dGhNdXRhdGlvbkZpZWxkcyxcbn07XG4iXX0=