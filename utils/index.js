export function errorHandler(res, error) {
  res.status(error.status).send(error);
}
