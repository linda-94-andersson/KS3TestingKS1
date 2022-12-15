import { vi } from "vitest";

const mockResponse = {
  data: {
    users: [
      {
        id: "A1",
        name: "Linda",
      },
    ],
    projects: [
      {
        id: "B1",
        name: "Project 1",
        color: "#d61c25ff",
        userId: "A1",
      },
    ],
    tasks: [
      {
        id: "C1",
        name: "Task 1",
        createdDate: 1665093600000,
        projectId: "B1",
      },
    ],
  },
};

export default {
  get: vi.fn().mockResolvedValue(mockResponse),
};
