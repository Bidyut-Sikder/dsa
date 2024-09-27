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
    console.log(index);
    
    if (!this.mapKey[index]) {
      this.mapKey[index] = [];
    }
    this.mapKey[index].push([key, value]);
  }
}


let ht=new HashTable()

ht.set('bidyut','b')

ht.set('sikder','s')

// ht.set('arr','roy') 


console.log(ht);


