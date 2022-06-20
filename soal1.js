const item = ["Void Stone","Shadow Amulet","Null Talisman", "Aether Lens"]

//1. slice() => memotong element array sesuai dengan index element yang ditentukan
console.log ("=========SLICE==========")
const slice = item.slice(2,3)
console.log(slice)

//2. entries() => menampilkan key/value setipa index dalam sebuah array
console.log ("\n","=========entries==========")
const dataEntries = ['q','w','e','r']
const iterator = dataEntries.entries() // dimasukkan kedalam sebuah variabel agar ketika di konsol hasillnya akan membaca pada indesx kedua
console.log(iterator.next().value) //[ 0, 'q' ]
console.log(iterator.next().value)//[ 1, 'w' ]

//3. Math.sqrt & Math.cbrt => Menampilkan hasil akar pangkat 2 & akar pangkat 3
console.log ("\n","======Mathsqrt & mathcbrt=======")
console.log(Math.sqrt(64))
console.log(Math.cbrt(125))

// 4.Concat => menggabungkan 2 array dan menjadi array baru
newItem = ["Sage Mask","Rod of Atos"]
console.log ("\n","========concat=========")
const result = item.concat(newItem)
console.log(result)

// 5. Math.PI => Menampilkan Nilai Pi
console.log ("\n","======MathPI=======")
console.log(Math.PI)

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



