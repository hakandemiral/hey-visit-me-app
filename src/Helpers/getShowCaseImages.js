export default (showCaseId) => {
  let reqPngs;

  switch (showCaseId) {
    case 1:
      reqPngs = require.context('../Images/Showcase/1', true, /\.png$/);
      break;
    case 2:
      reqPngs = require.context('../Images/Showcase/2', true, /\.png$/);
      break;
    case 3:
      reqPngs = require.context('../Images/Showcase/3', true, /\.png$/);
      break;
    default:
      reqPngs = require.context('../Images/Showcase/1', true, /\.png$/);
  }

  const paths = reqPngs.keys();
  return [...reqPngs.keys().map((path) => reqPngs(path))];
};
