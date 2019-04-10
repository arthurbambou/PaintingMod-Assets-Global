var fs = require("fs")
var path = require("path")

var blockstatepath = "./src/main/resources/assets/paintingmod/blockstates"
var itemmodelpath = "./src/main/resources/assets/paintingmod/models/item"
var blockmodelpath = "./src/main/resources/assets/paintingmod/models/block"

var blocks = require("./pressureplates.json")
var colors = ["black","red","green","brown","blue","purple","cyan","light_gray","gray","pink","lime","yellow","light_blue","magenta","orange","white"]
var lang = require("./base_script")
lang.writeLang(lang.genLang(blocks));
for (var i = 0; blocks.length > i ; i++) {
    for (var a = 0; colors.length > a ; a++) {
        var blockstate = {}
        blockstate.variants = {}
        if (blocks[i] === "light_weighted") {
            blockstate.variants["power=0"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate" }
            blockstate.variants["power=1"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=2"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=3"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=4"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=5"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=6"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=7"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=8"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=9"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=10"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=11"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=12"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=13"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=14"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=15"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
        } else if (blocks[i] === "heavy_weighted") {
            blockstate.variants["power=0"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate" }
            blockstate.variants["power=1"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=2"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=3"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=4"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=5"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=6"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=7"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=8"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=9"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=10"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=11"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=12"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=13"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=14"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
            blockstate.variants["power=15"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
        } else {
        blockstate.variants["powered=false"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate" }
        blockstate.variants["powered=true"] = { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate_down" }
        }
        fs.writeFile(path.join(blockstatepath, colors[a] + "_" + blocks[i] + "_pressure_plate.json"), JSON.stringify(blockstate), (err) => {
            if (err) {
                console.log(err)
            }
        })

        var blockmodel = {
            parent: "block/pressure_plate_up",
            textures: {
                texture: "paintingmod:blocks/" + colors[a] + "_" + blocks[i]
            }
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_pressure_plate.json"), JSON.stringify(blockmodel), (err) => {
            if (err) {
                console.log(err)
            }
        })
        var blockmodeldown = {
            parent: "block/pressure_plate_down",
            textures: blockmodel.textures
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_pressure_plate_down.json"), JSON.stringify(blockmodeldown), (err) => {
            if (err) {
                console.log(err)
            }
        })
        var itemmodel = {
            parent: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_pressure_plate"
        }
        fs.writeFile(path.join(itemmodelpath, colors[a] + "_" + blocks[i] + "_pressure_plate.json"), JSON.stringify(itemmodel), (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}