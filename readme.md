
[![Author](https://img.shields.io/badge/author-9r3i-lightgrey.svg)](https://github.com/9r3i)
[![License](https://img.shields.io/github/license/9r3i/wilayah.svg)](https://github.com/9r3i/wilayah/blob/master/LICENSE)
[![Forks](https://img.shields.io/github/forks/9r3i/wilayah.svg)](https://github.com/9r3i/wilayah/network)
[![Stars](https://img.shields.io/github/stars/9r3i/wilayah.svg)](https://github.com/9r3i/wilayah/stargazers)
[![Issues](https://img.shields.io/github/issues/9r3i/wilayah.svg)](https://github.com/9r3i/wilayah/issues)
[![Release](https://img.shields.io/github/release/9r3i/wilayah.svg)](https://github.com/9r3i/wilayah/releases)
[![Package](https://img.shields.io/npm/v/wilayah.svg?label=npm)](https://www.npmjs.com/package/wilayah)
[![Donate](https://img.shields.io/badge/donate-paypal-orange.svg)](https://paypal.me/9r3i)


# wilayah
Database wilayah non-SQL, parsed as JSON

### Idea
Inspired by [@cahyadsn/wilayah](https://github.com/cahyadsn/wilayah) working as SQL and PHP app, then I've got an idea to build my own wilayah repo but parsed as JSON, base on his repo with his permission.

## Sample
Sample website page, as demo or testing. in [https://9r3i.github.io/force-sample/wilayah.html](https://9r3i.github.io/force-sample/wilayah.html?p=test-wilayah)

The sample is plugged in [ForceWebsite](https://github.com/9r3i/force-website) app.



# Usage (Server - NodeJS)

### Install
```
$ npm i wilayah
```

### Usage as Server
Create file ```start.js``` with content ```require('wilayah/start')```
```
$ echo "require('wilayah/start')">start.js
```
Then start the server
```
$ node start
```
Or with specific port, default: 3000
```
$ node start 4000
```
Output:
```
WilayahServer on http://localhost:4000
```
Then wilayah server is ready.


# Usage (Client - NodeJS)

### Install
```
$ npm i wilayah
```

### Usage as Client
Create file ```client.js``` with content ```require('wilayah/client')```
```
$ echo "require('wilayah/client')">client.js
```
Then put some command with ```path``` like:
```
$ node client <path>
```
Read more about leveling path [here](#path) below, and also learn how to show ```index```.

Example:
- Level 1 is province code, sample JAWA BARAT is 32
- Level 2 is kabupaten or kota, sample KAB. BANDUNG is 04
- Level 3 is kecamatan, sample Banjaran is 13

So the path will be ```32/04/13```
```
$ node client 32/04/13
```
Output:
```json
{
  "2001": "Kamasan",
  "2002": "Banjaran Wetan",
  "2003": "Banjaran Kulon",
  "2005": "Ciapus",
  "2006": "Sindangpanon",
  "2007": "Kiangroke",
  "2008": "Tarajusari",
  "2012": "Mekarjaya",
  "2013": "Margahurip",
  "2016": "Neglasari",
  "2018": "Pasirmulya"
}
```
This client method assumes the host is ```https://9r3i.github.io/wilayah/api/2022/```

If you wish to use your own host, you might customize like the [Usage as Client](#usage-as-client-1) below.

Or use another argument in client CLI, like:
```
$ node client 32/04/13 http://localhost:4000/
```
The output will be the same as well as the database is.


# Usage (NodeJS)

### Install
```
$ npm i wilayah
```

### Usage as Client
```js
const { WilayahClient } = require('wilayah');

(async function(){
  const host='https://9r3i.github.io/wilayah/api/2022/',
  wilayah=new WilayahClient(host),
  result=await wilayah.fetch('index');
  console.log(result);
})();
```

### Result
```json
{
  "11": "ACEH",
  "12": "SUMATERA UTARA",
  "13": "SUMATERA BARAT",
  "14": "RIAU",
  "15": "JAMBI",
  "16": "SUMATERA SELATAN",
  "17": "BENGKULU",
  "18": "LAMPUNG",
  "19": "KEPULAUAN BANGKA BELITUNG",
  "21": "KEPULAUAN RIAU",
  "31": "DKI JAKARTA",
  "32": "JAWA BARAT",
  "33": "JAWA TENGAH",
  "34": "DAERAH ISTIMEWA YOGYAKARTA",
  "35": "JAWA TIMUR",
  "36": "BANTEN",
  "51": "BALI",
  "52": "NUSA TENGGARA BARAT",
  "53": "NUSA TENGGARA TIMUR",
  "61": "KALIMANTAN BARAT",
  "62": "KALIMANTAN TENGAH",
  "63": "KALIMANTAN SELATAN",
  "64": "KALIMANTAN TIMUR",
  "65": "KALIMANTAN UTARA",
  "71": "SULAWESI UTARA",
  "72": "SULAWESI TENGAH",
  "73": "SULAWESI SELATAN",
  "74": "SULAWESI TENGGARA",
  "75": "GORONTALO",
  "76": "SULAWESI BARAT",
  "81": "MALUKU",
  "82": "MALUKU UTARA",
  "91": "PAPUA",
  "92": "PAPUA BARAT"
}

```


# Usage (ForceWebsite)

### Install
```json
{
  "plugins": [
    ["wilayah",{
        "host": "https://9r3i.github.io/wilayah/api/2022/"
      },
      "https://9r3i.github.com/wilayah/fw-plugin"
    ]
  ]
}
```

### Usage
Just put ```:wilayah:``` in one of data content.

to get result
```js
const result=(new wilayah).getResult();
console.log(result);
```

### Result (sample)
```
Desa Baros, Arjasari, KAB. BANDUNG, JAWA BARAT
```


# Usage (Browser)

### Install
```html
<script src="https://9r3i.github.io/wilayah/wilayah.client.js"></script>
```

### Usage
```js
(async function(){
  const host='https://9r3i.github.io/wilayah/api/2022/',
  wilayah=new WilayahClient(host),
  result=await wilayah.fetch('index');
  console.log(result);
})();
```

### Result
```json
{
  "11": "ACEH",
  "12": "SUMATERA UTARA",
  "13": "SUMATERA BARAT",
  "14": "RIAU",
  "15": "JAMBI",
  "16": "SUMATERA SELATAN",
  "17": "BENGKULU",
  "18": "LAMPUNG",
  "19": "KEPULAUAN BANGKA BELITUNG",
  "21": "KEPULAUAN RIAU",
  "31": "DKI JAKARTA",
  "32": "JAWA BARAT",
  "33": "JAWA TENGAH",
  "34": "DAERAH ISTIMEWA YOGYAKARTA",
  "35": "JAWA TIMUR",
  "36": "BANTEN",
  "51": "BALI",
  "52": "NUSA TENGGARA BARAT",
  "53": "NUSA TENGGARA TIMUR",
  "61": "KALIMANTAN BARAT",
  "62": "KALIMANTAN TENGAH",
  "63": "KALIMANTAN SELATAN",
  "64": "KALIMANTAN TIMUR",
  "65": "KALIMANTAN UTARA",
  "71": "SULAWESI UTARA",
  "72": "SULAWESI TENGAH",
  "73": "SULAWESI SELATAN",
  "74": "SULAWESI TENGGARA",
  "75": "GORONTALO",
  "76": "SULAWESI BARAT",
  "81": "MALUKU",
  "82": "MALUKU UTARA",
  "91": "PAPUA",
  "92": "PAPUA BARAT"
}

```


# Methods

### fetch
Promise method, parameters:
- ```path``` string of path

Result will be an ```object``` on success or ```false``` on failed


### fetchCB
Callback method, parameters:
- ```path``` string of path
- ```callback``` function of callback
  - callback argument will be an ```object``` on success or ```false``` on failed


# Path

### Level 1 index
First path is level 1 wilayah or province, fetch index using path index, sample: 
```js
await wilayah.fetch('index');
```
or number of level 1 index, sample of level 2 index of JAWA BARAT:
```js
await wilayah.fetch('32/index');
```

### Level 2 index
Second level is for level 2 as Kabupaten or Kota, sample of level 2 index of JAWA BARAT:
```js
await wilayah.fetch('32/index');
```
or number of level 2 index, sample of level 3 index of KAB. BANDUNG:
```js
await wilayah.fetch('32/04/index');
```

### Level 3 index
Third level is for kecamatan, sample of level 4 index of Banjaran:
```js
await wilayah.fetch('32/04/13');
```



# Closing
That's all there is to it. Alhamdulillaah...


### Visitors
[![9r3i/wilayah Visitors](https://sabunjelly.com/api/views/?user=9r3i-wilayah&color=51,119,187)](https://github.com/9r3i/wilayah)
|---|
| Since January 14th 2023 or when this repo was created and first commit |
