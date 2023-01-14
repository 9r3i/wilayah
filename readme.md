
[![Author](https://img.shields.io/badge/author-9r3i-lightgrey.svg)](https://github.com/9r3i)
[![License](https://img.shields.io/github/license/9r3i/wilayah.svg)](https://github.com/9r3i/wilayah/blob/master/LICENSE)
[![Forks](https://img.shields.io/github/forks/9r3i/wilayah.svg)](https://github.com/9r3i/wilayah/network)
[![Stars](https://img.shields.io/github/stars/9r3i/wilayah.svg)](https://github.com/9r3i/wilayah/stargazers)
[![Issues](https://img.shields.io/github/issues/9r3i/wilayah.svg)](https://github.com/9r3i/wilayah/issues)
[![Release](https://img.shields.io/github/release/9r3i/wilayah.svg)](https://github.com/9r3i/wilayah/releases)
[![Package](https://img.shields.io/npm/v/wilayah.svg?label=npm)](https://www.npmjs.com/package/@9r3i/wilayah)
[![Donate](https://img.shields.io/badge/donate-paypal-orange.svg)](https://paypal.me/9r3i)


# wilayah
Database wilayah non-SQL, parsed as JSON

### Idea
Inspired by @cahyadsn/wilayah working as SQL and PHP app. I got an idea to build my own wilayah, base on his repo with his permission.

Thanks a lot, mas.


# Usage (NodeJS)

### Install
```
$ npm i wilayah
```

### Usage
```
const { WilayahClient } = require('wilayah');

(async function(){
  const host='https://9r3i.github.io/wilayah/api/2022/',
  wilayah=new WilayahClient(host),
  result=await wilayah.fetch('index');
  console.log(result);
})();
```

### Result
```
{
  '11': 'ACEH',
  '12': 'SUMATERA UTARA',
  '13': 'SUMATERA BARAT',
  '14': 'RIAU',
  '15': 'JAMBI',
  '16': 'SUMATERA SELATAN',
  '17': 'BENGKULU',
  '18': 'LAMPUNG',
  '19': 'KEPULAUAN BANGKA BELITUNG',
  '21': 'KEPULAUAN RIAU',
  '31': 'DKI JAKARTA',
  '32': 'JAWA BARAT',
  '33': 'JAWA TENGAH',
  '34': 'DAERAH ISTIMEWA YOGYAKARTA',
  '35': 'JAWA TIMUR',
  '36': 'BANTEN',
  '51': 'BALI',
  '52': 'NUSA TENGGARA BARAT',
  '53': 'NUSA TENGGARA TIMUR',
  '61': 'KALIMANTAN BARAT',
  '62': 'KALIMANTAN TENGAH',
  '63': 'KALIMANTAN SELATAN',
  '64': 'KALIMANTAN TIMUR',
  '65': 'KALIMANTAN UTARA',
  '71': 'SULAWESI UTARA',
  '72': 'SULAWESI TENGAH',
  '73': 'SULAWESI SELATAN',
  '74': 'SULAWESI TENGGARA',
  '75': 'GORONTALO',
  '76': 'SULAWESI BARAT',
  '81': 'MALUKU',
  '82': 'MALUKU UTARA',
  '91': 'PAPUA',
  '92': 'PAPUA BARAT'
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
<script src="https://https://9r3i.github.io/wilayah/wilayah.js"></script>
```

### Usage
```
(async function(){
  const host='https://9r3i.github.io/wilayah/api/2022/',
  wilayah=new WilayahClient(host),
  result=await wilayah.fetch('index');
  console.log(result);
})();
```

### Result
```
{
  '11': 'ACEH',
  '12': 'SUMATERA UTARA',
  '13': 'SUMATERA BARAT',
  '14': 'RIAU',
  '15': 'JAMBI',
  '16': 'SUMATERA SELATAN',
  '17': 'BENGKULU',
  '18': 'LAMPUNG',
  '19': 'KEPULAUAN BANGKA BELITUNG',
  '21': 'KEPULAUAN RIAU',
  '31': 'DKI JAKARTA',
  '32': 'JAWA BARAT',
  '33': 'JAWA TENGAH',
  '34': 'DAERAH ISTIMEWA YOGYAKARTA',
  '35': 'JAWA TIMUR',
  '36': 'BANTEN',
  '51': 'BALI',
  '52': 'NUSA TENGGARA BARAT',
  '53': 'NUSA TENGGARA TIMUR',
  '61': 'KALIMANTAN BARAT',
  '62': 'KALIMANTAN TENGAH',
  '63': 'KALIMANTAN SELATAN',
  '64': 'KALIMANTAN TIMUR',
  '65': 'KALIMANTAN UTARA',
  '71': 'SULAWESI UTARA',
  '72': 'SULAWESI TENGAH',
  '73': 'SULAWESI SELATAN',
  '74': 'SULAWESI TENGGARA',
  '75': 'GORONTALO',
  '76': 'SULAWESI BARAT',
  '81': 'MALUKU',
  '82': 'MALUKU UTARA',
  '91': 'PAPUA',
  '92': 'PAPUA BARAT'
}
```


# Closing
That's all there is to it. Alhamdulillaah...


