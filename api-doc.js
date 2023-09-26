import { userRouterDescriptor, documentRouterDescriptor } from "./routes";

export const swaggerDocs = {
  openapi: "3.0.0",
  info: {
    title: "Documents API",
    version: "1.0.0",
    description: "Api for Document backend app",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Development server",
    },
  ],
  paths: {
    ...userRouterDescriptor,
    ...documentRouterDescriptor,
  },
};
