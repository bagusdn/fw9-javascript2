const item = ["Void Stone","Shadow Amulet","Null Talisman", "Aether Lens"]

//1. slice() => memotong element array sesuai dengan index element yang ditentukan
console.log ("=========SLICE==========")
const slice = item.slice(2,3)
console.log(slice)

//2. sort() => mengurutkan element dalam array
console.log ("\n","=========SORT==========")
const sort = item.sort()
console.log (sort)

//3. map() => membuat array baru hasil dari looping tsb
console.log ("\n","======Map==========")
const map = item.map((e) => {
    return `${e}`
});
console.log (map)

// 4.Concat => menggabungkan 2 array dan menjadi array baru
newItem = ["Sage Mask","Rod of Atos"]
console.log ("\n","========concat=========")
const result = item.concat(newItem)
console.log(result)

//5.push => menambahkan element baru ke bagian akhir array
console.log ("\n","========Push=========")
item.push("Blink Dagger")
console.log(item)

// 6.unshift => menambahkan element baru ke bagian awal array
console.log ("\n","=======Unshift=======")
item.unshift("Octarine Core")
console.log (item)

// 7. pop() = menghapus elemen terakhir pada  array
console.log ("\n","=======Pop=======")
newItemList = item.pop()
console.log(item)

// 8. copyWithin() = menyalin nilai sebuah array
console.log ("\n","=======CopyWithin=======")
copyItem = item.copyWithin(2, 0);
console.log(copyItem);

// 9.Reverse => membalikan urutan element dalam array
console.log ("\n","======Reverse=======")
itemReverse = item.reverse()
console.log (itemReverse)

//10 foreach => melooping array dan hasilnya menjadi string
console.log ("\n","======Foreach=======")
item.forEach((e,i) => {
    console.log(`\n Menampilkan item ${e} dari index ke  ${i}` )
});

// 11. Math.PI => Menampilkan Nilai Pi
console.log ("\n","======MathPI=======")
console.log(Math.PI)

//12. Math.sqrt & Math.cbrt => Menampilkan hasil akar pangkat 2 & akar pangkat 3
console.log ("\n","======Mathsqrt & mathcbrt=======")
console.log(Math.sqrt(64))
console.log(Math.cbrt(125))