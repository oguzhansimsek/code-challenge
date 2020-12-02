export const getPageNumber = (page) => {
  const p = parseInt(page, 10);
  return !p || p === 0 ? 1 : p;
};

export const getUrlParams = (query) => {
  const genreId = query.get('genreId');
  const segmentId = query.get('segmentId');
  const subGenreId = query.get('subGenreId');
  const typeId = query.get('typeId');
  const subTypeId = query.get('subTypeId');
  return { segmentId, genreId, subGenreId, typeId, subTypeId };
};

export default {};
