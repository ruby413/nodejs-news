export function removeNullFields(document: object) {
  const newDocument = {};

  for (const key in document) {
    if (document.hasOwnProperty(key) && document[key]) {
      newDocument[key] = document[key];
    }
  }

  return newDocument;
}
