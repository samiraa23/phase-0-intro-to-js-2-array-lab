const cats=["Milo", "Otis", "Garfield"]
console.log(cats.length)

function destructivelyAppendCat(name){
   cats.push('Ralph')
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveFirstCat (name){
   cats.shift(...'Bob')
}
function destructivelyRemoveLastCat(name){
    cats.pop('ralph')
}
function appendCat(){
      return[...cats , "Broom"]
}
function prependCat(name){
    return["Arnold",...cats]
}
function removeLastCat(){
    return cats.slice(0, -1);
}
function removeFirstCat(name){
    return cats.slice(1)
}