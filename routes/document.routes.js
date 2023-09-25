import { Router } from "express";
import { documentService, paragraphService, tagService } from "../services";
import { errorHandler } from "../utils";

const documentRouter = Router();

// #################################################################
// post - handlers
// #################################################################

documentRouter.post("", (req, res) => {
  documentService
    .createDocument(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(errorHandler);
});

documentRouter.post("/:id", (req, res) => {
  paragraphService
    .createParagraph({ ...req.body, document: { id: req.params["id"] } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(errorHandler);
});

documentRouter.post("/:id/tag", (req, res) => {
  tagService
    .createTag({ ...req.body, paragraph: { id: req.params["id"] } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(errorHandler);
});

// #################################################################
// get handlers
// #################################################################

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

// #################################################################
// patch handlers
// #################################################################

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
    })
    .catch(errorHandler);
});

// #################################################################
// delete handlers
// #################################################################

documentRouter.delete("/:id", (req, res) => {
  documentService
    .deleteDocument(req.params["id"])
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(errorHandler);
});

documentRouter.delete("/paragraph/:id", (req, res) => {
  paragraphService
    .deleteParagraph(req.params["id"])
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(errorHandler);
});

documentRouter.delete("/:id/tag", (req, res) => {
  tagService
    .deleteTag(req.params["id"])
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(errorHandler);
});

export { documentRouter };
