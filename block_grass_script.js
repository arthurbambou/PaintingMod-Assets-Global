var fs = require("fs")
var path = require("path")

var blockstatepath = "./blockstates"
var itemmodelpath = "./models/item"
var blockmodelpath = "./models/block"

var blocks = require("./blocks_grass.json")
var colors = ["black","red","green","brown","blue","purple","cyan","light_gray","gray","pink","lime","yellow","light_blue","magenta","orange","white"]
var test = "\n"
for (var i = 0; blocks.length > i ; i++) {
    console.log("\n#" + btouppercase(blocks[i]) + " Blocks");
    if(!test == "\n") {
        test = test + "\n \n#" + btouppercase(blocks[i]) + " Blocks";
    } else {
        test = test + " \n#" + btouppercase(blocks[i]) + " Blocks";
    }
    for (var a = 0; colors.length > a ; a++) {
        var upcolor = ctouppcase(colors[a])
        var upblock = btouppercase(blocks[i])
        test = test + "\ntile.paintingmod." + colors[a] + "_" + blocks[i] + ".name=" + upcolor + " " + upblock;
        console.log("The line : " + "\ntile.paintingmod." + colors[a] + "_" + blocks[i] + ".name=" + upcolor + " " + upblock + "\nhas been added to the localization file");

        var blockstate = {}
        blockstate.variants = {}
        blockstate.variants[""] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i]
        }
        fs.writeFile(path.join(blockstatepath, colors[a] + "_" + blocks[i] + ".json"), JSON.stringify(blockstate), (err) => {
            if (err) {
                console.log(err)
            }
        })

        var blockmodel = {
            parent: "block/cube_bottom_top",
            textures: {
                bottom: "paintingmod:blocks/" + colors[a] + "_" + blocks[i].replace("podzol","dirt").replace("grass_block","dirt"),
                top: "paintingmod:blocks/" + colors[a] + "_" + blocks[i].replace("red_","") + "_top",
                side: "paintingmod:blocks/" + colors[a] + "_" + blocks[i].replace("red_","") + "_side"
            }
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + ".json"), JSON.stringify(blockmodel), (err) => {
            if (err) {
                console.log(err)
            }
        })
        var itemmodel = {
            parent: "paintingmod:block/" + colors[a] + "_" + blocks[i]
        }
        fs.writeFile(path.join(itemmodelpath, colors[a] + "_" + blocks[i] + ".json"), JSON.stringify(itemmodel), (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}
var langfile = langfile + test;
fs.writeFile("./dev.lang", langfile, (err) => {
   if (err) throw err;
})

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