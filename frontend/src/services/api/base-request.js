export default async function baseRequest(path, options, dataType = 'json') {
  const response = await fetch(`/api${path}`, options);

  let responseData = null;
  if (dataType === 'json') {
    try {
      responseData = await response.json();
    } catch (error) {
      console.warn('cannot parse json response', responseData, error);
    }
    return responseData;
  }
  console.warn(`cannot parse response of dataType "${dataType}"`);
  return responseData;
}
