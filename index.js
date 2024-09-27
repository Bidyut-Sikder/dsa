class HashTable {
  constructor(size = 4) {
    this.mapKey = new Array(size);
  }

  _hashKey(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let charValue = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + charValue) % this.mapKey.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hashKey(key);

    if (!this.mapKey[index]) {
      this.mapKey[index] = [];
    }
    this.mapKey[index].push([key, value]);
  }
  get(key) {
    let index = this._hashKey(key);

    if (this.mapKey[index]) {
      for (let i = 0; i < this.mapKey[index].length; i++) {
        if (this.mapKey[index][i][0] === key) {
          return this.mapKey[index][i][1];
        }
      }
    }
  }
}

let ht = new HashTable();

ht.set("name", "bidyut");

ht.set("roll", "20");
ht.set("house", "tungipara");
ht.set("address", "salukha");
ht.set("phone", "011223234");

// ht.set('arr','roy')

console.log(ht.get("roll"));

//console.log(ht);
