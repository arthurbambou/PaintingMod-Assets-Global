var fs = require("fs")
var path = require("path")

var blockstatepath = "./blockstates"
var itemmodelpath = "./models/item"
var blockmodelpath = "./models/block"

var blocks = require("./buttons.json")
var colors = ["black","red","green","brown","blue","purple","cyan","light_gray","gray","pink","lime","yellow","light_blue","magenta","orange","white"]
var lang = require("./base_script")
lang.writeLang(lang.genLangWithSuffix(blocks, "_button"));
for (var i = 0; blocks.length > i ; i++) {
    for (var a = 0; colors.length > a ; a++) {
        var blockstate = {}
        blockstate.variants = {}
        blockstate.variants["face=floor,facing=east,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button", y: 90 }
        blockstate.variants["face=floor,facing=west,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button", y: 270 }
        blockstate.variants["face=floor,facing=south,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button", y: 180 }
        blockstate.variants["face=floor,facing=north,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button"}
        blockstate.variants["face=wall,facing=east,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button", uvlock: true, x: 90, y: 90 }
        blockstate.variants["face=wall,facing=west,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button", uvlock: true, x: 90, y: 270 }
        blockstate.variants["face=wall,facing=south,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button", uvlock: true, x: 90,y: 180 }
        blockstate.variants["face=wall,facing=north,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button", uvlock: true, x: 90}
        blockstate.variants["face=ceiling,facing=east,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button", y: 270, x: 180 }
        blockstate.variants["face=ceiling,facing=west,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button", y: 90, x: 180 }
        blockstate.variants["face=ceiling,facing=south,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button", x: 180 }
        blockstate.variants["face=ceiling,facing=north,powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button", y: 180, x: 180 }

        blockstate.variants["face=floor,facing=east,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed", y: 90 }
        blockstate.variants["face=floor,facing=west,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed", y: 270 }
        blockstate.variants["face=floor,facing=south,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed", y: 180 }
        blockstate.variants["face=floor,facing=north,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed"}
        blockstate.variants["face=wall,facing=east,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed", uvlock: true, x: 90, y: 90 }
        blockstate.variants["face=wall,facing=west,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed", uvlock: true, x: 90, y: 270 }
        blockstate.variants["face=wall,facing=south,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed", uvlock: true, x: 90,y: 180 }
        blockstate.variants["face=wall,facing=north,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed", uvlock: true, x: 90}
        blockstate.variants["face=ceiling,facing=east,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed", y: 270, x: 180 }
        blockstate.variants["face=ceiling,facing=west,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed", y: 90, x: 180 }
        blockstate.variants["face=ceiling,facing=south,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed", x: 180 }
        blockstate.variants["face=ceiling,facing=north,powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_pressed", y: 180, x: 180 }
        fs.writeFile(path.join(blockstatepath, colors[a] + "_" + blocks[i] + "_button.json"), JSON.stringify(blockstate), (err) => {
            if (err) {
                console.log(err)
            }
        })

        var blockmodel = {
            parent: "block/button",
            textures: {
                texture: "paintingmod:blocks/" + colors[a] + "_" + blocks[i]
            }
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_button.json"), JSON.stringify(blockmodel), (err) => {
            if (err) {
                console.log(err)
            }
        })
        var blockmodelpressed = {
            parent: "block/button_pressed",
            textures: blockmodel.textures
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_button_pressed.json"), JSON.stringify(blockmodelpressed), (err) => {
            if (err) {
                console.log(err)
            }
        })
        var blockmodelinventory = {
            parent: "block/button_inventory",
            textures: blockmodel.textures
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_button_inventory.json"), JSON.stringify(blockmodelinventory), (err) => {
            if (err) {
                console.log(err)
            }
        })
        var itemmodel = {
            parent: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_button_inventory"
        }
        fs.writeFile(path.join(itemmodelpath, colors[a] + "_" + blocks[i] + "_button.json"), JSON.stringify(itemmodel), (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}