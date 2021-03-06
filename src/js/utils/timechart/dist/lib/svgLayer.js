export class SVGLayer {
    constructor(el, model) {
        this.svgNode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svgNode.style.position = 'absolute';
        this.svgNode.style.width = '100%';
        this.svgNode.style.height = '100%';
        el.shadowRoot.appendChild(this.svgNode);
        model.disposing.on(() => {
            el.shadowRoot.removeChild(this.svgNode);
        });
    }
}
export function makeContentBox(model, options) {
    const contentSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    contentSvg.classList.add('content-box');
    contentSvg.x.baseVal.value = options.paddingLeft;
    contentSvg.y.baseVal.value = options.paddingRight;
    model.resized.on((width, height) => {
        contentSvg.width.baseVal.value = width - options.paddingRight - options.paddingLeft;
        contentSvg.height.baseVal.value = height - options.paddingTop - options.paddingBottom;
    });
    return contentSvg;
}
//# sourceMappingURL=svgLayer.js.map