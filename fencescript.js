var fs = require("fs")
var path = require("path")

var blockstatepath = "./blockstates"
var itemmodelpath = "./models/item"
var blockmodelpath = "./models/block"

var blocks = require("./fences.json")
var colors = ["black","red","green","brown","blue","purple","cyan","light_gray","gray","pink","lime","yellow","light_blue","magenta","orange","white"]
var lang = require("./base_script")
lang.writeLang(lang.genLangWithSuffix(blocks, "_fence"));
for (var i = 0; blocks.length > i ; i++) {
    for (var a = 0; colors.length > a ; a++) {
        var blockstate = {
            multipart: [
                { apply: { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_post"}},
                { when: { north: true},
                    apply: { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_side", uvlock: false}
                },
                { when: { east: true},
                    apply: { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_side", y: 90, uvlock: false}
                },
                { when: { south: true},
                    apply: { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_side", y: 180, uvlock: false}
                },
                { when: { west: true},
                    apply: { model: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_side", y: 270, uvlock: false}
                }
            ]
        }
        fs.writeFile(path.join(blockstatepath, colors[a] + "_" + blocks[i] + "_fence.json"), JSON.stringify(blockstate), (err) => {
            if (err) {
                console.log(err)
            }
        })

        var blockmodelpost = {
            parent: "block/fence_post",
            textures: {
                texture: "paintingmod:blocks/" + colors[a] + "_" + blocks[i]
            }
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_fence_post.json"), JSON.stringify(blockmodelpost), (err) => {
            if (err) {
                console.log(err)
            }
        })
        var blockmodelside = {
            parent: "block/fence_side",
            textures: blockmodelpost.textures
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_fence_side.json"), JSON.stringify(blockmodelside), (err) => {
            if (err) {
                console.log(err)
            }
        })
        var blockmodelinventory = {
            parent: "block/fence_inventory",
            textures: blockmodelpost.textures
        }
        fs.writeFile(path.join(blockmodelpath, colors[a] + "_" + blocks[i] + "_fence_inventory.json"), JSON.stringify(blockmodelinventory), (err) => {
            if (err) {
                console.log(err)
            }
        })
        var itemmodel = {
            parent: "paintingmod:block/" + colors[a] + "_" + blocks[i] + "_fence_inventory"
        }
        fs.writeFile(path.join(itemmodelpath, colors[a] + "_" + blocks[i] + "_fence.json"), JSON.stringify(itemmodel), (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}