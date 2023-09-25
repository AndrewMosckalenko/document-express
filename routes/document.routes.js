import { Router } from "express";
import { documentService, paragraphService } from "../services";
import { errorHandler } from "../utils";

const documentRouter = Router();

documentRouter.post("", (req, res) => {
  documentService
    .createDocument(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(errorHandler);
});
documentRouter.post("/:id", (req, res) => {
  paragraphService.createParagraph(req.body).then((result) => {
    res.status(200).send(result);
  });
});
documentRouter.post("/:id/tag", (req, res) => {});

documentRouter.get("", (_, res) => {
  documentService
    .getDocuments()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(errorHandler);
});
documentRouter.get("/:id", (req, res) => {
  documentService
    .getDocumentById(req.params["id"])
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(errorHandler);
});
documentRouter.get("/:id/paragraphs", (req, res) => {});

documentRouter.patch("/:id", (req, res) => {
  documentService
    .updateDocument({ ...req.body, id: req.params["id"] })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(errorHandler);
});
documentRouter.patch("/paragraph/:id", (req, res) => {
  paragraphService
    .updateParagraph({ ...req.body, id: req.params["id"] })
    .then((result) => {
      res.status(200).send(result);
    });
});

documentRouter.delete("/:id", (req, res) => {
  documentService
    .deleteDocument(req.params["id"])
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(errorHandler);
});
documentRouter.delete("/paragraph/:id", (req, res) => {
  paragraphService.deleteParagraph(req.params["id"]).then((result) => {
    res.status(200).send(result);
  });
});
documentRouter.delete("/:id/tag", (req, res) => {});

export { documentRouter };
