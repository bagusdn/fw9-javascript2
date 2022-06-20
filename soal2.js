const name = [
    'Abigail','Alexandra','Alison','Amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirdre','Diana','Elizabeth','Ella','Faith','Olivia','Penelope'
]

const searchName = (filter,maxOutput,callback1) =>{
    let lowerCase = name.map(e => e.toLowerCase())
    filter = lowerCase.filter((e)=>{
        if (e.includes(filter)){
            return e
        }
    })
    slice = filter.slice(0,maxOutput)
    return callback1(slice)
}

console.log(
    searchName("an", 3, (callback) => {
      result = callback.map((a) => a.charAt(0).toUpperCase() + a.substr(1));
      // charAt(0) : huruf pertama
      //substr(1) : ekstrak string mulai dari indeks ke-1
      return result;
    })
  );