// 1. English digit

function getSingles(number) {
    var number,
        singles = Math.floor(number % 10);

    if (isNaN(number)) {
        return "Error! Enter the number.";
    } else {
        switch (singles) {
            case 0:
                singles = "zero";
                break;
            case 1:
                singles = "one";
                break;
            case 2:
                singles = "two";
                break;
            case 3:
                singles = "three";
                break;
            case 4:
                singles = "four";
                break;
            case 5:
                singles = "five";
                break;
            case 6:
                singles = "six";
                break;
            case 7:
                singles = "seven";
                break;
            case 8:
                singles = "eight";
                break;
            case 9:
                singles = "nine";
                break;
            default:
                singles = " ";
        }
        if (number >= 0) {
            return singles;
        }
    }
    console.log(singles);
}
console.log(getSingles(166));
console.log(getSingles("nanananananna"));
console.log(getSingles(168));













// 2. Reverse number

function reverseNumber(number) {
    var number = number.toString();
    var result = number.split('').reverse().join("");
    return result;
}

console.log(reverseNumber(657));
console.log(reverseNumber(869));
console.log(reverseNumber(456));
console.log(reverseNumber(876));













// 3. Occurrences of word

var text = "Liverpool Football Club is a Premier League football club based in Liverpool, Merseyside, England. The club has won five European Cups, three UEFA Cups, three UEFA Super Cups, 18 League titles, seven FA Cups, a record eight League Cups, and 15 FA Community Shields.The club was founded in 1892 and joined the Football League the following year. The club has played at Anfield since its formation. Liverpool established itself as a major force in both English and European football during the 1970s and 1980s when Bill Shankly and Bob Paisley led the club to 11 League titles and seven European trophies. Under the management of Rafa Benítez and captained by Steven Gerrard Liverpool re-emerged as European champions once again, winning the 2005 UEFA Champions League Final against Milan in spite of being 3–0 down at half time. Liverpool was the ninth highest-earning football club in the world for 2013–14, with an annual revenue of €306 million, and the world's eighth most valuable football club in 2015, valued at $982 million. The club holds many long-standing rivalries, most notably the North West Derby against Manchester United and the Merseyside derby with Everton.";

countWord(true, "Liverpool");
countWord(false, "football");
countWord(true, "Club");

function countWord(isCaseSensitive, wordToSearch) {
    isCaseSensitive = true || false;
    var countSearchedWord = 0;

    if (isCaseSensitive == false) {
        var str = text.split(wordToSearch);
        for (var str1 in str) {
            countSearchedWord++;
        }
        console.log("case-insensitive: " + wordToSearch + " " + countSearchedWord);
    } else if (isCaseSensitive == true) {
        var newWord = wordToSearch.toLowerCase();
        var index = text.indexOf(wordToSearch);

        while (index >= 0) {
            countSearchedWord++;
            index = text.indexOf(wordToSearch, index + 1);
        }
        console.log("case-sensitive: " + newWord + " " + countSearchedWord);
    }
}












// 4. Number of elements

function countElement() {
    var countDivs = document.getElementsByTagName("div").length;
    console.log("The number of divs is: " + countDivs);
}
countElement();
