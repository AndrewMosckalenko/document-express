import { Router } from "express";
import { documentService, paragraphService, tagService } from "../../services";
import { errorHandler } from "../../utils";
import { txtFileCheckerMiddleware } from "../../middlewares";

const documentRouter = Router();

// #################################################################
// post - handlers
// #################################################################

documentRouter.post("", txtFileCheckerMiddleware, (req, res) => {
  documentService.createDocument(req.body, req.files.file).then((result) => {
    res.status(200).send(result);
  });
});

documentRouter.post("/:id", (req, res) => {
  paragraphService
    .createParagraph({ ...req.body, document: { id: req.params["id"] } })
    .then((result) => {
      res.status(200).send(result);
    });
});

documentRouter.post("/:id/tag", (req, res) => {
  tagService
    .createTag({ ...req.body, paragraph: { id: req.params["id"] } })
    .then((result) => {
      res.status(200).send(result);
    });
});

documentRouter.post("/:id/copy", (req, res) => {
  documentService.copyDocument(req.params["id"]).then((result) => {
    res.status(200).send(result);
  });
});

// #################################################################
// get handlers
// #################################################################

documentRouter.get("", (_, res) => {
  documentService.getDocuments().then((result) => {
    res.status(200).send(result);
  });
});

documentRouter.get("/:id", (req, res) => {
  documentService.getDocumentById(req.params["id"]).then((result) => {
    res.status(200).send(result);
  });
});

documentRouter.get("/:id/paragraphs", (req, res) => {
  documentService
    .getDocumentWithParagraphsById(req.params["id"])
    .then((result) => {
      res.status(200).send(result);
    });
});

// #################################################################
// patch handlers
// #################################################################

documentRouter.patch("/:id", (req, res) => {
  documentService
    .updateDocument({ ...req.body, id: req.params["id"] })
    .then((result) => {
      res.status(200).send(result);
    });
});

documentRouter.patch("/paragraph/:id", (req, res) => {
  paragraphService
    .updateParagraph({ ...req.body, id: req.params["id"] })
    .then((result) => {
      res.status(200).send(result);
    });
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
    .catch((error) => errorHandler(res, error));
});

documentRouter.delete("/paragraph/:id", (req, res) => {
  paragraphService.deleteParagraph(req.params["id"]).then((result) => {
    res.status(200).send(result);
  });
});

documentRouter.delete("/:id/tag", (req, res) => {
  tagService.deleteTag(req.params["id"]).then((result) => {
    res.status(200).send(result);
  });
});

export { documentRouter };
