const fs = require("fs")
const path = require('path')

var blockstatepath = "./blockstates"
var itemmodelpath = "./models/item"
var blockmodelpath = "./models/block"

var blocks = require("./special_slabs.json")
var colors = ["black","red","green","brown","blue","purple","cyan","light_gray","gray","pink","lime","yellow","light_blue","magenta","orange","white"]
var lang = require("./base_script")
lang.writeLang(lang.genLangWithSuffix(blocks, "_slab"));
for (var i = 0; blocks.length > i; i++) {
    for (var a = 0; colors.length > a; a++) {
        var blockstate = {
            variants: {}
        }
        blockstate.variants["type=double,waterlogged=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i]}
        blockstate.variants["type=top,waterlogged=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_slab_top"}
        blockstate.variants["type=bottom,waterlogged=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_slab"}
        blockstate.variants["type=double,waterlogged=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i]}
        blockstate.variants["type=top,waterlogged=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_slab_top"}
        blockstate.variants["type=bottom,waterlogged=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_slab"}
        fs.writeFile(path.join(blockstatepath, colors[a] + "_" + blocks[i] + "_slab.json"), JSON.stringify(blockstate), (err) => {
            if (err) {
                console.log(err)
            }
        })

        var itemmodel = {
            parent: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_slab"
        }
        fs.writeFile(path.join(itemmodelpath, colors[a] + "_" + blocks[i] + "_slab.json"), JSON.stringify(itemmodel), (err) => {
            if (err) {
                console.log(err)
            }
        })

        var blockmodel = {
            parent: "minecraft:block/slab",
            textures: {
                bottom: "paintingmod:blocks/" + colors[a] + "_" + blocks[i].replace("red_", "") + "_bottom",
                top: "paintingmod:blocks/" + colors[a] + "_" + blocks[i].replace("red_", "") + "_top",
                side: "paintingmod:blocks/" + colors[a] + "_" + blocks[i].replace("red_", "")
            }
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_slab.json"), JSON.stringify(blockmodel), (err) => {
            if (err) {
                console.log(err)
            }
        })
        var blockmodeltop = {
            parent: "minecraft:block/slab_top",
            textures: blockmodel.textures
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_slab_top.json"), JSON.stringify(blockmodeltop), (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}