var obj = JSON.parse(body);
console.log('fengguang');
console.log(body);
console.log(obj);
console.log(obj.data)
obj.data.display_ad = 0
JSON.stringify(obj);