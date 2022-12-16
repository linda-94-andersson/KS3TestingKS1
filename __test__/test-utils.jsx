import React from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "../src/context/UserContext";
import { TaskProvider } from "../src/context/TaskContext";
import { ProjectProvider } from "../src/context/ProjectContext";
import { TimeLogProvider } from "../src/context/TimeLogContext";

const AllTheProviders = ({ children }) => {
  return (
    <ChakraProvider>
      <TaskProvider>
        <ProjectProvider>
          <TimeLogProvider>
            <UserProvider>{children}</UserProvider>
          </TimeLogProvider>
        </ProjectProvider>
      </TaskProvider>
    </ChakraProvider>
  );
};

export const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
// export { customRender as render };
