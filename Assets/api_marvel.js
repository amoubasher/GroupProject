// PUBLIC
var pu_Key = '908be84bdd5d62e47e3efabe9d44b7f5';

// PRIVATE
var pi_Key = 'e78900f8d1e853b15a5a4d76a0508de813d3b6d3';
// e78900f8d1e853b15a5a4d76a0508de813d3b6d3
// scGnK1N7Ut3CEC22itt70

// TIME STAMP
var ts = Math.floor(Date.now() / 1000)

// var CryptoJS = require('crypto-js')
var hash = CryptoJS.MD5(ts + pi_Key + pu_Key).toString();

var charID = 1009189

// //var myHeaders = new Headers();
// //myHeaders.append("", "");

// //var formdata = new FormData();

var charName

var charResults
// var requestOptions = {
//   method: 'GET',
//   //headers: myHeaders,
//   //body: formdata, //Is not used for GET calls
//   //redirect: 'follow'
// };

function getCharData(QcharID, Qpu_Key, Qhash, Qts){
    return fetch("https://gateway.marvel.com:443/v1/public/characters/" + QcharID + "?apikey="+ Qpu_Key + "&hash=" + Qhash + "&ts=" + Qts)
  .then(response => response.json())
  .then(result => {
console.log(result.data.results[0].name);
charResults = result.data.results[0].name;
  })
//   .then(result => (charName = result.results))
   .catch(error => console.log('error', error));
}

var charData = getCharData(charID,pu_Key,hash,ts)




