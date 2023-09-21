/**
 * se instancia https para hacer la petición a una api
 * se instancia fs para cargar archivos
 * se instancia crypto para cifrar valores
 */
const https = require('https');
const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();
const readline = require("readline")
/**
 * se crea function doRequest que permite consultar la api de google y cuando termina se devuelve un console log
 * con la fecha actual menos la fecha en que se ejecuto
 */
const doRequest = async () => {
 https.request('https://www.google.com',res=>{
  res.on('data',()=>{});
  res.on('end',()=>{
   let response = `HTTPS: ${Date.now() - start}`
   return response
  })
}).end()
}
/**
 * se crea function getHash que encripta valores con algoritmo sha512
 * y devuelve un console log con la fecha actual menos la fecha en que se ejecuto
 */
const getHash = async () => {
 crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
  let response = `Hash getHashTwo:: ${Date.now() - start}`
  return response
})
}
/**
 * se ejecuta la function doRequest
 */
doRequest()
/**
 * se lee por medio de file system un archivo decodificado con utf-8 para poder entenderlo
 * devuelve un consolo.log  con la fecha actual menos la fecha en que se ejecuto
 */
fs.readFile('multitask.js','utf8',()=>{
    console.log("FS: ",Date.now() - start)
})
/**
 * se ejecuta la function getHash
 */

getHash()
getHash()
getHash()
getHash()

getHashTwo()

/**
 * se crea function getHashTwo que encripta valores con algoritmo sha512 y recibe dos parametros
 * y devuelve un console log con la fecha actual menos la fecha en que se ejecuto
 */
function getHashTwo(){
  crypto.pbkdf2('b','c',100000,512,'sha512',()=>{
    let response = `Hash getHashTwo:: ${Date.now() - start}`
    return response
    } )
}




function readHello() {
  // fs.readFile('archivo.txt', 'utf8', (error, data) => {
  //   if (error) {
  //     console.error(`Error al leer el archivo: ${error}`);
  //     return;
  //   }

  //   console.log(`Contenido del archivo:\n${data}`);
  // });
  return new Promise((resolve, reject) => {
    fs.readFile('archivo.txt', 'utf8', (error, data) => {
      if (error) {
        return reject(`Error al leer el archivo: ${error}`);
      } else {
       return resolve(data);
      }
    });
  });
}

readHello().then((values)=> console.log(values))

module.exports = {
  doRequest,
  getHash,
  getHashTwo,
  readHello,
}
/**
 * 3 test unitarios
 * en base a un request vamos a validar que la function devuelve data no importa si es null o string
 * crear una segunda function getHashTwo() vamos crear un con protocolo 512 apartir del string b y c
 * y lo vamos a comparar con la salidad de la funcion getHash()
 * crear un archivo que tenga en el archivo un hola
 */
