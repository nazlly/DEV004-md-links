const colors = require("colors");
const api = require("./api.js");

const mdLinks = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    if (!api.existFile(path)) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(colors.bgBrightRed("No se encontro la ruta indicada.Por favor revisar"));
    } else {
      if (!options.validate) {
        if (
          api.getMdFiles(path) !==
          "No se encontro la ruta indicada.Por favor revisar"
        ) {
          api
            .getPropertiesFiles(path)
            .then((res) => {
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        }
      } else {
        if (
          api.getMdFiles(path) !==
          "No se encontro la ruta indicada.Por favor revisar"
        ) {
          api
            .getPropertiesFiles(path)
            .then((res) => {
              console.log(colors.bgBrightMagenta("Cargando links"));
              api.validater(res).then((val) => {
                resolve(val);
              });
            })
            .catch((err) => {
              reject(err);
            });
        }
      }
    }
  });
};

// --------------STATS---------------//
// Cantidad de links//
const statsTotal = (links) => {
  const linksTotal = links.length;
  return linksTotal;
};
// Cantidad de links rotos //
const bronkenStats = (links) => {
  const brokenLinks = links.filter((link) => link.message === "FAIL");
  return brokenLinks.length;
};
// Cantidad de links unicos
// Set no permite valores repetidos
// usaremos "..." para descomponer los elementos del set
const uniqueStats = (links) => {
  const uniqueLinks = [...new Set(links.map((link) => link.href))];
  return uniqueLinks.length;
};
// PROBAREMOS SI FUNCIONA MD LINKS, TRUE PARA QUE HAGA LA PETICION HTTP Y FALSE PARA QUE SOLO DEVUELVA LOS LINKS
// const result = mdLinks("./src/example.md", { validate: true });
// result
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = {
  mdLinks,
  statsTotal,
  uniqueStats,
  bronkenStats,
  colors,
};
