import yaml from 'js-yaml';

const parce = (filedata, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(filedata);
    case '.yml':
    case '.yaml':
      return yaml.load(filedata);
    default:
      return '';
  }
};

export default parce;
