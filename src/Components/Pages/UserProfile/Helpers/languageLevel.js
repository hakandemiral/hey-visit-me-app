export default (level) => {
  switch (level) {
    case 'A1':
      return 1;
    case 'A2':
      return 2;
    case 'B1':
      return 3;
    case 'B2':
      return 4;
    case 'C1':
      return 5;
    case 'C2':
      return 6;
    case 'Native':
      return 7;
    default:
      return 0;
  }
};
