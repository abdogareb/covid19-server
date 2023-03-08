const typify = (object) =>
  Object.keys(object).reduce((obj, key) => {
    if (Object.prototype.toString.call(object[key]) === '[object String]') {
      const lowerCase = object[key].toLowerCase();
      const int = parseInt(`${lowerCase.match(/^-?\d+$/)}`, 10);
      const float = parseFloat(`${lowerCase.match(/^\d+\.\d+$/)}`);
      if (
        lowerCase === '' ||
        lowerCase === ' ' ||
        lowerCase === 'null' ||
        lowerCase === 'undefined'
      )
        obj[key] = null;
      else if (int || float) obj[key] = Number(object[key]);
      else if (lowerCase === 'true' || lowerCase === 'false')
        obj[key] = JSON.parse(lowerCase);
      else obj[key] = object[key];
    } else if (Array.isArray(object[key])) {
      if (object[key].length) obj[key] = object[key];
    } else if (typeof object[key] === 'object') obj[key] = typify(object[key]);
    else obj[key] = object[key];
    return obj;
  }, {});

export default typify;
