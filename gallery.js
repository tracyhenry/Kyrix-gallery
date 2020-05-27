// libraries
const Project = require("../../src/index").Project;
const Canvas = require("../../src/Canvas").Canvas;
const Jump = require("../../src/Jump").Jump;
const Layer = require("../../src/Layer").Layer;
const View = require("../../src/View").View;
const Transform = require("../../src/Transform").Transform;
const SSV = require("../../src/template-api/SSV").SSV;

// project components
const renderers = require("./renderers");

// construct a project
var p = new Project("gallery", "../../../config.txt");
p.addRenderingParams(renderers.renderingParams);
var vw = 1000, vh = 563;

// ================== Canvas treemap ===================
var quoteCanvas = new Canvas("quote", vw, vh);
p.addCanvas(quoteCanvas);

// static layer
var quoteLayer = new Layer(Transform.defaultEmptyTransform, true);
quoteCanvas.addLayer(quoteLayer);
quoteLayer.addRenderingFunc(renderers.quoteRendering);

// ================== Canvas 1 ===================
var c1 = new Canvas("canvas1", vw, vh);
p.addCanvas(c1);

// static layer
var c1Layer = new Layer(Transform.defaultEmptyTransform, true);
c1.addLayer(c1Layer);
c1Layer.addRenderingFunc(renderers.c1Rendering);

// ================== Canvas 2 ===================
var c2 = new Canvas("canvas2", vw, vh);
p.addCanvas(c2);

// static layer
var c2Layer = new Layer(Transform.defaultEmptyTransform, true);
c2.addLayer(c2Layer);
c2Layer.addRenderingFunc(renderers.c2Rendering);

// ================== Canvas 3 ===================
var c3 = new Canvas("canvas3", vw, vh);
p.addCanvas(c3);

// static layer
var c3Layer = new Layer(Transform.defaultEmptyTransform, true);
c3.addLayer(c3Layer);
c3Layer.addRenderingFunc(renderers.c3Rendering);

// ================== Canvas 4 ===================
var c4 = new Canvas("canvas4", vw, vh);
p.addCanvas(c4);

// static layer
var c4Layer = new Layer(Transform.defaultEmptyTransform, true);
c4.addLayer(c4Layer);
c4Layer.addRenderingFunc(renderers.c4Rendering);


var selector = function() {
    return true;
};

var newViewport = function() {
    return {constant: [0, 0]};
};

var newPredicate = function() {
    return {};
};

p.addJump(
    new Jump(quoteCanvas, c1, "slide", {
        selector: selector,
        viewport: newViewport,
        predicates: newPredicate,
        noPrefix: true, slideSuperman: false, slideDirection: 300
    })
);

p.addJump(
    new Jump(c1, c2, "slide", {
        selector: selector,
        viewport: newViewport,
        predicates: newPredicate,
        noPrefix: true, slideSuperman: false, slideDirection: 252
    })
);

p.addJump(
    new Jump(c2, c3, "slide", {
        selector: selector,
        viewport: newViewport,
        predicates: newPredicate,
        noPrefix: true, slideSuperman: false, slideDirection: 180
    })
);

p.addJump(
    new Jump(c3, c4, "slide", {
        selector: selector,
        viewport: newViewport,
        predicates: newPredicate,
        noPrefix: true, slideSuperman: false, slideDirection: 108
    })
);

p.addJump(
    new Jump(c4, quoteCanvas, "slide", {
        selector: selector,
        viewport: newViewport,
        predicates: newPredicate,
        noPrefix: true, slideSuperman: false, slideDirection: 60
    })
);


// graph view
var galleryView = new View("galleryview", 0, 0, vw, vh);
p.addView(galleryView);
p.setInitialStates(galleryView, quoteCanvas, 0, 0, {});

// save to db
p.saveProject();
