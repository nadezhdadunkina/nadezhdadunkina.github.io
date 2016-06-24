// 1. Reverse string

console.log("------------Problem 1------------");

function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("sample"));
console.log(reverseStr("liverpool"));
console.log("---------------------------------");





// 2. Correct brackets

console.log("------------Problem 2------------");

function checkExpression(expression) {
    var counter = 0;

    for (var i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            counter++;
        } else if (expression[i] === ')') {
            counter--;
        }
        if (counter < 0) {
            return false;
        }
    }
    return true;
}

console.log(checkExpression('((a+b)/5)'));
console.log(checkExpression('(a+b)/5)'));
console.log(checkExpression(')(a+b))'));
console.log("---------------------------------");





// 3. Sub-string in text


console.log("-------Problem 3 Variant 1-------");

var text = "William Shakespeare was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet. His extant works, including collaborations, consist of approximately 38 plays, 154 sonnets, two long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright.";

function countWord(text, word) {
    var regex = new RegExp(word, 'g'); // g - global
    return (text.match(regex)).length;
}

console.log(countWord(text, 'is'));

console.log("---------------------------------");




console.log("-------Problem 3 Variant 2-------");

var str = "William Shakespeare was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet.";
var res = str.match(/and/g);
console.log(res);

console.log("---------------------------------");




// 4. Parse tags

console.log("------------Problem 4------------");

var text = "William <upcase>Shakespeare</upcase> was an <lowcase>English</lowcase> poet, playwright, and actor, widely regarded as the <mixcase>greatest</mixcase> writer in the English language.";

	    var objText = new String(text);
	    objText = doMixCase(objText);
	    objText = doUpcase(objText);
	    objText = doLowCase(objText);
	    console.log(objText);
        
	    function doUpcase(text)
	    {
	        var indexStart = text.indexOf("<upcase>");
	        while (indexStart>-1) {
	            var insedeText = text.substring(indexStart + 8, text.indexOf("</upcase>", indexStart))
	            var upperText = insedeText.toUpperCase();
	            text = text.replace(insedeText, upperText);
	            indexStart = text.indexOf("<upcase>", indexStart+1);
	        }
	        return text;
	    }
	    function doMixCase(text) {
	        var indexStart = text.indexOf("<mixcase>");
	        while (indexStart > -1) {
	            var insedeText = text.substring(indexStart + 9, text.indexOf("</mixcase>", indexStart));
	            var mixedText = new String(insedeText);
	            for (var i = 0; i < mixedText.length ; i++) {
	                if(i%2==0)
	                {
	                    mixedText = mixedText.replace(mixedText[i],mixedText[i].toUpperCase())
	                }
	                else {
	                    mixedText = mixedText.replace(mixedText[i], mixedText[i].toLowerCase())
	                }
	            }
	            text = text.replace(insedeText, mixedText);
	            indexStart = text.indexOf("<mixcase>", indexStart + 1);
	        }
	        return text;
	    }
	    function doLowCase(text) {
	        var indexStart = text.indexOf("<lowcase>");
	        while (indexStart > -1) {
	            var insedeText = text.substring(indexStart + 9, text.indexOf("</lowcase>", indexStart));
	            var lowerText = insedeText.toLowerCase();
	            text = text.replace(insedeText, lowerText);
	            indexStart = text.indexOf("<lowcase>", indexStart + 1);
	        }
	        return text;
	    }
console.log("---------------------------------");





// 5. nbsp

console.log("-------Problem 5 Variant 1-------");

var text = "William Shakespeare was an English poet.";

text = replaceAll(text, ' ', '&nbsp;');

function replaceAll(text, replace, replacement) {
    var regex = new RegExp(replace, 'g');
    return text.replace(regex, replacement);
}

console.log(text);
console.log("---------------------------------");





console.log("-------Problem 5 Variant 2-------");

var text = "William Shakespeare was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language.";

function replaceSpaces(str) {
    var result = [];
    result = str.split('');
    for (var i = 0; i <= result.length; i++) {
        if (result[i] == " ") {
            result[i] = "&nbsp;";
        }
    }
    return console.log(result.join(''));
}

console.log(replaceSpaces(text));

console.log("---------------------------------");











// 6. Extract text from HTML

console.log("------------Problem 6------------");

function extractTextFromHTML(textHTML) {
    return textHTML.textContent;
}

console.log(extractTextFromHTML(document.getElementById("bodyid")));
console.log("---------------------------------");







// 7. Parse URL

console.log("------------Problem 7------------");

function parse(uri) {
    var match = /(.*):\/\/(.*?)(\/.*)/.exec(uri)
    return { protocol: match[1], server: match[2], resource: match[3] }
}

console.log(parse('http://www.devbg.org/forum/index.php'));
console.log("---------------------------------");








// 8. Replace tags

console.log("------------Problem 8------------");

var text = "<p><a href = 'https://en.wikipedia.org/wiki/William_Shakespeare'>William Shakespeare</a> was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's <a href = 'https://en.wikipedia.org/wiki/National_poet'>national poet</a>. His extant works, including collaborations, consist of approximately 38 plays, 154 sonnets, two long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright.</p>";

text = text.replace(/<a/g, "[URL");
text = text.replace(/>/g, "]");
text = text.replace(/<\/a/g, "[/URL");

console.log(text);
console.log("---------------------------------");










// 9. Extract e-mails

console.log("------------Problem 9------------");

var text = 'nadejda@abv.bg, "assdsdasdasdf" <krisi@gmail.com>, "rodnsdasdasdasfald ferdfnson" <didi@gmal.com>, ' +
    '"Affdmdol Gondfgale" <vesi@gmail.com>, "truform techno" <doroteya@truformdftechnoproducts.com>, "NiTsdfeSh ThIdfsKaRe" ' +
    '<liverpool@ysahoo.in>, "akasdfsh kasdfstla" <ivan@yahsdfsfoo.in>, "Bisdsdfamal Prakaasdsh" <dasdasdas@live.com>,; ' +
    '"milisdfsfnd ansdfasdfnsftwar" <dasfasfadfs.endasasds@gmail.com>';


function getEmails(text) {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g);
}

console.log(getEmails(text).join('\n\r'));
console.log("---------------------------------");









// 10. Find palindromes

console.log("------------Problem 10------------");

var text = "William Shakespeare was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language.";
var palindromes = text.match(/ABBA|lamal|exe/g);

console.log(palindromes);
console.log("---------------------------------");


var text1 = "exe ABBA lol adsadasfdgg aghfahd fdgfd lamal gaegdgtrt";

var palindromes1 = text1.match(/ABBA|lamal|exe|lol/g);

console.log(palindromes1);

console.log("---------------------------------");








// 11. String format

console.log("------------Problem 11------------");

var text = "Hello {0}!";

function formatStr(str) {
    var args = arguments;
    return str.replace(/{(\d+)}/g, function(match, p) {
        return args[+p + 1];

    });
}


console.log(text + ',"Peter"');
console.log(formatStr(text, "Peter"));
console.log("---------------------------------");








// 12. Generate list

console.log("------------Problem 12------------");

var temp1 = document.getElementById('list-item').innerHTML;
var peopleList = "";


function makeList() {
    var people = [{ name: "Peter", age: 34 }, { name: "Ivan", age: 26 }, { name: "Hristo", age: 16 }];


    for (var i = 0; i < people.length; i++) {
        var temp = temp1;
        peopleList += "<li>";
        temp = temp.replace(/-{name}-/, people[i].name);
        temp = temp.replace(/-{age}-/, people[i].age);
        peopleList += temp;
        peopleList += "</li>";
    }
    var result = "<ul>" + peopleList + "</ul>";
    return result;
}
document.getElementById("list-item").innerHTML = makeList(); 

console.log("---------------------------------");






console.log("---------------proba-------------");


var pattern = /is/;

var text = "This is Sparta";


console.log(pattern.test(text));

console.log("---------------------------------");




