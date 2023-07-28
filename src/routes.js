const apiPath = 'https://bandaumnikov.ru/api/test/site/get-index';
const apiCafe = 'https://bandaumnikov.ru/api/test/site/get-view?';

export default {
  dataPath: () => [apiPath].join('/'),
  dataCafe: () => [apiCafe].join('/'),
};
