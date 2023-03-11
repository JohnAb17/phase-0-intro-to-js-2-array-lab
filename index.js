// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat;

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat;

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
destructivelyRemoveLastCat;

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
destructivelyRemoveFirstCat;

function appendCat(name) {
    const newAppendCat = cats.slice(0);
    newAppendCat.push(name);
    return newAppendCat
}
function prependCat(name) {
    const newAppendCat = cats.slice(0);
    newAppendCat.unshift(name);
    return newAppendCat;
}
function removeLastCat(name) {
    const newAppendCat = cats.slice(0);
    newAppendCat.pop(name);
    return newAppendCat;
}
function removeFirstCat(name) {
    const newAppendCat = cats.slice(0);
    newAppendCat.shift(name);
    return newAppendCat;
}