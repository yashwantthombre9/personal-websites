





let firstIndex = 0, secondIndex = 0, thirdIndex = 0, startNumber = 1;

let columns = window.prompt("Enter column count");
let rows = columns/2;

for (firstIndex = 1; firstIndex <= rows; firstIndex++) {
    for (secondIndex = 10; secondIndex >= firstIndex; secondIndex--) {
        document.write("&nbsp;");
    }

    for (thirdIndex = 1; thirdIndex <= startNumber; thirdIndex++) {
        document.write(thirdIndex);
    }
    startNumber = startNumber + 2;
    document.write("<br>");
}