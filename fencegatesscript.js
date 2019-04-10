const fs = require("fs")
const path = require('path')

var blockstatepath = "./src/main/resources/assets/paintingmod/blockstates"
var itemmodelpath = "./src/main/resources/assets/paintingmod/models/item"
var blockmodelpath = "./src/main/resources/assets/paintingmod/models/block"

var blocks = require("./fencegates.json")
var colors = ["black","red","green","brown","blue","purple","cyan","light_gray","gray","pink","lime","yellow","light_blue","magenta","orange","white"]
var lang = require("./base_script")
lang.writeLang(lang.genLang(blocks));
for (var i = 0; blocks.length > i; i++) {
    for (var a = 0; colors.length > a; a++) {
        var blockstate = {
            variants: {}
        }
        blockstate.variants["facing=south,in_wall=false,open=false,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate", uvlock: true}
        blockstate.variants["facing=west,in_wall=false,open=false,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate", y: 90, uvlock: true}
        blockstate.variants["facing=north,in_wall=false,open=false,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate", y: 180, uvlock: true}
        blockstate.variants["facing=east,in_wall=false,open=false,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate", y: 270, uvlock: true}
        blockstate.variants["facing=south,in_wall=false,open=true,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_open", uvlock: true}
        blockstate.variants["facing=west,in_wall=false,open=true,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_open", y: 90, uvlock: true}
        blockstate.variants["facing=north,in_wall=false,open=true,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_open", y: 180, uvlock: true}
        blockstate.variants["facing=east,in_wall=false,open=true,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_open", y: 270, uvlock: true}
        blockstate.variants["facing=south,in_wall=true,open=false,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall", uvlock: true}
        blockstate.variants["facing=west,in_wall=true,open=false,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall", y: 90, uvlock: true}
        blockstate.variants["facing=north,in_wall=true,open=false,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall", uvlock: true, y: 180}
        blockstate.variants["facing=east,in_wall=true,open=false,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall", y: 270, uvlock: true}
        blockstate.variants["facing=south,in_wall=true,open=true,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall_open", uvlock: true}
        blockstate.variants["facing=west,in_wall=true,open=true,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall_open", y: 90, uvlock: true}
        blockstate.variants["facing=north,in_wall=true,open=true,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall_open", y: 180, uvlock: true}
        blockstate.variants["facing=east,in_wall=true,open=true,powered=true"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall_open", y: 270, uvlock: true}

        blockstate.variants["facing=south,in_wall=false,open=false,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate", uvlock: true}
        blockstate.variants["facing=west,in_wall=false,open=false,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate", y: 90, uvlock: true}
        blockstate.variants["facing=north,in_wall=false,open=false,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate", y: 180, uvlock: true}
        blockstate.variants["facing=east,in_wall=false,open=false,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate", y: 270, uvlock: true}
        blockstate.variants["facing=south,in_wall=false,open=true,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_open", uvlock: true}
        blockstate.variants["facing=west,in_wall=false,open=true,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_open", y: 90, uvlock: true}
        blockstate.variants["facing=north,in_wall=false,open=true,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_open", y: 180, uvlock: true}
        blockstate.variants["facing=east,in_wall=false,open=true,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_open", y: 270, uvlock: true}
        blockstate.variants["facing=south,in_wall=true,open=false,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall", uvlock: true}
        blockstate.variants["facing=west,in_wall=true,open=false,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall", y: 90, uvlock: true}
        blockstate.variants["facing=north,in_wall=true,open=false,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall", uvlock: true, y: 180}
        blockstate.variants["facing=east,in_wall=true,open=false,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall", y: 270, uvlock: true}
        blockstate.variants["facing=south,in_wall=true,open=true,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall_open", uvlock: true}
        blockstate.variants["facing=west,in_wall=true,open=true,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall_open", y: 90, uvlock: true}
        blockstate.variants["facing=north,in_wall=true,open=true,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall_open", y: 180, uvlock: true}
        blockstate.variants["facing=east,in_wall=true,open=true,powered=false"] = {model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate_wall_open", y: 270, uvlock: true}


        fs.writeFile(path.join(blockstatepath, colors[a] + "_" + blocks[i] + "_fence_gate.json"), JSON.stringify(blockstate), (err) => {
            if (err) {
                console.log(err)
            }
        })

        var itemmodel = {
            parent: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_gate"
        }
        fs.writeFile(path.join(itemmodelpath, colors[a] + "_" + blocks[i] + "_fence_gate.json"), JSON.stringify(itemmodel), (err) => {
            if (err) {
                console.log(err)
            }
        })

        var blockmodel = {
            parent: "minecraft:block/template_fence_gate",
            textures: {
                texture: "paintingmod:blocks/" + colors[a] + "_" + blocks[i]
            }
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_fence_gate.json"), JSON.stringify(blockmodel), (err) => {
            if (err) {
                console.log(err)
            }
        })
        var blockmodelopen = {
            parent: "minecraft:block/template_fence_gate_open",
            textures: blockmodel.textures
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_fence_gate_open.json"), JSON.stringify(blockmodelopen), (err) => {
            if (err) {
                console.log(err)
            }
        })

        var blockmodelwall = {
            parent: "minecraft:block/template_fence_gate_wall",
            textures: blockmodel.textures
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_fence_gate_wall.json"), JSON.stringify(blockmodelwall), (err) => {
            if (err) {
                console.log(err)
            }
        })

        var blockmodelwallopen = {
            parent: "minecraft:block/template_fence_gate_wall_open",
            textures: blockmodel.textures
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_fence_gate_wall_open.json"), JSON.stringify(blockmodelwallopen), (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}