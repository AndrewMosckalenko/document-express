export function errorHandler(res, error) {
  console.log(error);
  res.status(error.status).send(error);
}
