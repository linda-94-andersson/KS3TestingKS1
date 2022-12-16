import { rest } from "msw";

export const buildHandlers = (config) => {
  const { baseUrl, id, name, userId, projectId, startTime, endTime, taskId } =
    config;
  return [
    rest.get(baseUrl + "/users", (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: id,
            name: name,
          },
        ])
      );
    }),
    rest.post(baseUrl + "/users", (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: id,
            name: name,
          },
        ])
      );
    }),
    rest.get(baseUrl + "/projects", (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: id,
            name: name,
            userId: userId,
          },
        ])
      );
    }),
    rest.get(baseUrl + "/tasks", (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: id,
            name: name,
            projectId: projectId,
          },
        ])
      );
    }),
    rest.get(baseUrl + "/timelogs", (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: id,
            startTime: startTime,
            endTime: endTime,
            taskId: taskId,
          },
        ])
      );
    }),
  ];
};
