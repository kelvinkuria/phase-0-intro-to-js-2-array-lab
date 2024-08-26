// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(kit){
cats.push(kit);
}

function appendCat(kit){
    return [...cats,kit]
}