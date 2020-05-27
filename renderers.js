var renderingParams = {
    textwrap: require("../../src/template-api/Utilities").textwrap
};

var quoteRendering = function (svg, data, args) {

    g = svg.append("g");

    g.append("text")
        .attr("text-anchor", "middle")
        .attr("font-size", 60)
        .attr("dy", ".35em")
        .attr("x", args.canvasW / 2)
        .attr("y", args.canvasH / 2 - 30)
        .attr("font-style", "italic")
        .attr("font-weight", "bold")
        .attr("font-family", "serif")
        .style("fill-opacity", 1)
        .text("\"I'm a big fan of details-on-demand.\"");

    g.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .attr("font-family", "serif")
        .attr("x", args.canvasW - 250)
        .attr("y", args.canvasH / 2 + 40)
        .attr("font-size", 45)
        .style("fill-opacity", 1)
        .text("-- Michael Stonebraker");

};

var c1Rendering = function (svg) {

    g = svg.append("g");

    g.append("image")
        .attr("x", 76)
        .attr("y", 12)
        .attr("width", 342)
        .attr("height", 227)
        .attr("xlink:href", "https://media.giphy.com/media/UvW382DFGbPRLQMsrf/giphy.gif");

    g.append("image")
        .attr("x", 500)
        .attr("y", 81)
        .attr("width", 464)
        .attr("height", 381)
        .attr("xlink:href", "https://media.giphy.com/media/Uqk3O8tezy9p9XT0Pp/giphy.gif");

    g.append("image")
        .attr("x", 64)
        .attr("y", 265)
        .attr("width", 383)
        .attr("height", 274)
        .attr("xlink:href", "https://media.giphy.com/media/UTT4Lf3MoM40MUR4bt/giphy.gif");

};

var c2Rendering = function (svg) {

    g = svg.append("g");

    g.append("image")
        .attr("x", 91)
        .attr("y", 13)
        .attr("width", 358)
        .attr("height", 268)
        .attr("xlink:href", "https://media.giphy.com/media/llDNdfNqne4EVBLxi8/giphy.gif");

    g.append("image")
        .attr("x", 499)
        .attr("y", 13)
        .attr("width", 425)
        .attr("height", 222)
        .attr("xlink:href", "https://media.giphy.com/media/efIVT8V355s9Ot0xqH/giphy.gif");

    g.append("image")
        .attr("x", 135)
        .attr("y", 305)
        .attr("width", 270)
        .attr("height", 249)
        .attr("xlink:href", "https://media.giphy.com/media/ckGpCeMksmCOJNV73W/giphy.gif");

    g.append("image")
        .attr("x", 499)
        .attr("y", 256)
        .attr("width", 390)
        .attr("height", 287)
        .attr("xlink:href", "https://media.giphy.com/media/IzWxU2Zwub16HMOauh/giphy.gif");

};

var c3Rendering = function (svg) {

    g = svg.append("g");

    g.append("image")
        .attr("x", 32)
        .attr("y", 30)
        .attr("width", 431)
        .attr("height", 225)
        .attr("xlink:href", "https://media.giphy.com/media/fYTT5CJ4o4OfxRsCAh/giphy.gif");

    g.append("image")
        .attr("x", 533)
        .attr("y", 17)
        .attr("width", 450)
        .attr("height", 252)
        .attr("xlink:href", "https://media.giphy.com/media/emNNNi8D6Kk2uuTa7o/giphy.gif");

    g.append("image")
        .attr("x", 78)
        .attr("y", 281)
        .attr("width", 384)
        .attr("height", 243)
        .attr("xlink:href", "https://media.giphy.com/media/W6QtSChnjO6f3yX546/giphy.gif");

    g.append("image")
        .attr("x", 601)
        .attr("y", 297)
        .attr("width", 315)
        .attr("height", 243)
        .attr("xlink:href", "https://media.giphy.com/media/TkDRjJknUHDspwTcJV/giphy.gif");

};

var c4Rendering = function (svg) {

    g = svg.append("g");

    g.append("image")
        .attr("x", 84)
        .attr("y", 17)
        .attr("width", 323)
        .attr("height", 222)
        .attr("xlink:href", "https://media.giphy.com/media/Spo1D9Io2wFC29ECxK/giphy.gif");

    g.append("image")
        .attr("x", 486)
        .attr("y", 17)
        .attr("width", 384)
        .attr("height", 222)
        .attr("xlink:href", "https://media.giphy.com/media/YpegfKy9VjDW343YLq/giphy.gif");

    g.append("image")
        .attr("x", 40)
        .attr("y", 267)
        .attr("width", 460)
        .attr("height", 259)
        .attr("xlink:href", "https://media.giphy.com/media/ehPez3wJzoh0lrRROj/giphy.gif");

    g.append("image")
        .attr("x", 564)
        .attr("y", 261)
        .attr("width", 323)
        .attr("height", 271)
        .attr("xlink:href", "https://media.giphy.com/media/YoK0VYuB2Qiurgcfp6/giphy.gif");

};

module.exports = {
    renderingParams,
    quoteRendering,
    c1Rendering,
    c2Rendering,
    c3Rendering,
    c4Rendering
};
