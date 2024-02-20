const target = "makethismoney"
const delimiter = "_"
const spacing = "4"
let newStr = ""

for (let i = 0; i < target.length; i++) {
    // this checks if the current index is divisible by the spacing
    // we make sure that we only add a delimeter if thats the case and it's not the first character
    if (i % spacing === 0 && i !== 0) {
        newStr += delimiter
    }

    const char = target.charAt(i)
    newStr += char;
}

console.log(newStr)