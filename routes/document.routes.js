import { Router } from "express";

const documentRouter = Router();

documentRouter.post("", () => {});
documentRouter.post("/:id", () => {});
documentRouter.post("/:id/tag", () => {});

documentRouter.get("", () => {});
documentRouter.get("/:id", () => {});
documentRouter.get("/:id/paragraphs", () => {});

documentRouter.patch("/:id", () => {});
documentRouter.patch("/paragraph/:id", () => {});

documentRouter.delete("/:id", () => {});
documentRouter.delete("/paragraph/:id", () => {});
documentRouter.delete("/:id/tag", () => {});

export { documentRouter };
