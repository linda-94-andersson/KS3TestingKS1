import { rest } from "msw";

export const buildHandlers = (config) => {
  const {
    baseUrl,
    idUser,
    idProject,
    idTask,
    idTimelog,
    nameUser,
    nameProject,
    nameTask,
    userId,
    projectId,
    startTime,
    endTime,
    taskId,
  } = config;
  return [
    rest.get(baseUrl + "/users", (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: idUser,
            name: nameUser,
          },
        ])
      );
    }),
    rest.post(baseUrl + "/users", (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: idUser,
            name: nameUser,
          },
        ])
      );
    }),
    rest.get(baseUrl + "/projects", (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: idProject,
            name: nameProject,
            userId: userId,
          },
        ])
      );
    }),
    rest.get(baseUrl + "/tasks", (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: idTask,
            name: nameTask,
            projectId: projectId,
          },
        ])
      );
    }),
    rest.get(baseUrl + "/timelogs", (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: idTimelog,
            startTime: startTime,
            endTime: endTime,
            taskId: taskId,
          },
        ])
      );
    }),
  ];
};
