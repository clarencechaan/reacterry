const camelise = (obj) => {
  if (typeof obj !== "object") return obj;
  let result = {};

  for (const key in obj) {
    let value;
    if (Array.isArray(obj[key])) value = obj[key].map((elem) => camelise(elem));
    else if (typeof obj[key] === "object" && !!obj[key])
      value = camelise(obj[key]);
    else value = obj[key];

    let newKey = "";
    for (let i = 0; i < key.length; i++) {
      if (key[i] === "_") {
        newKey += key[i + 1].toUpperCase();
        i++;
      } else newKey += key[i];
    }
    result[newKey] = value;
  }

  return result;
};

const obj = {
  fooBar: null,
};

const camelObj = camelise(obj);

console.log(JSON.stringify(camelObj));
