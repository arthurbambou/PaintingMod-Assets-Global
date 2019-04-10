var fs = require("fs")
var colors = ["black","red","green","brown","blue","purple","cyan","light_gray","gray","pink","lime","yellow","light_blue","magenta","orange","white"]
module.exports.genLang = function genLang(blocks) {
    var test = "\n"
    for (var i = 0; blocks.length > i ; i++) {
        console.log("\n#" + btouppercase(blocks[i]) + " Blocks");
        if(test != "\n") {
            test = test + "\n \n#" + btouppercase(blocks[i]) + " Blocks";
        } else {
            test = "#" + btouppercase(blocks[i]) + " Blocks";
        }
        for (var a = 0; colors.length > a ; a++) {
            var upcolor = ctouppcase(colors[a])
            var upblock = btouppercase(blocks[i])
            test = test + "\ntile.paintingmod." + colors[a] + "_" + blocks[i] + ".name=" + upcolor + " " + upblock;
            console.log("The line : " + "\ntile.paintingmod." + colors[a] + "_" + blocks[i] + ".name=" + upcolor + " " + upblock + "\nhas been added to the localization file");
        }
    }
    return test;
}

module.exports.writeLang = function writeLang(text) {
    var langfile = text;
    fs.writeFile("./dev.lang", langfile, (err) => {
        if (err) throw err;
    })
}

function ctouppcase(string) {
    var wordlist = string.split("_")
    var dddd = ""
    for (var z = 0; wordlist.length > z; z++) {
        if (z===0) {
            dddd = wordtouppercase(wordlist[0])
        } else {
            dddd = dddd + " " + wordtouppercase(wordlist[z])
        }
    }
    return dddd
}

function btouppercase(string) {
    var wordlist = string.split("_")
    var dddd = ""
    for (var z = 0; wordlist.length > z; z++) {
        if (z===0) {
            dddd = wordtouppercase(wordlist[0])
        } else {
            dddd = dddd + " " + wordtouppercase(wordlist[z])
        }
    }
    return dddd
}

function wordtouppercase(string) {
    var fletter = string.substring(0,1)
    var rest = string.substr(1)
    return fletter.toUpperCase() + rest
}