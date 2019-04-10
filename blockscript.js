var fs = require("fs")
var path = require("path")

var blockstatepath = "./blockstates"
var itemmodelpath = "./models/item"
var blockmodelpath = "./models/block"

var blocks = require("./blocks.json")
var colors = ["black","red","green","brown","blue","purple","cyan","light_gray","gray","pink","lime","yellow","light_blue","magenta","orange","white"]
var lang = require("./base_script")
lang.writeLang(lang.genLang(blocks));
for (var i = 0; blocks.length > i ; i++) {
    for (var a = 0; colors.length > a ; a++) {
        var blockstate = {}
        blockstate.variants = {}
        blockstate.variants[""] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] }
        fs.writeFile(path.join(blockstatepath, colors[a] + "_" + blocks[i] + ".json"), JSON.stringify(blockstate), (err) => {
            if (err) {
                console.log(err)
            }
        })

        var blockmodel = {
            parent: "block/cube_all",
            textures: {
                all: "paintingmod:blocks/" + colors[a] + "_" + blocks[i]
                .replace("oak_","")
                .replace("spruce_","")
                .replace("birch_","")
                .replace("jungle_","")
                .replace("acacia_","")
                .replace("dark_", "")
                .replace("red_nether_brick","nether_brick")
                .replace("red_sand", "sand")
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