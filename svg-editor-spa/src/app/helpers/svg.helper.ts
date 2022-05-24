import { Edges } from "angular-resizable-element";
import { Constants } from "../common/constants";
import { SvgDimention } from "../models/svg-dimention.model";

export class SvgHelper {
  static updatedDimantion(svgDimention: SvgDimention, newEdges: Edges): SvgDimention {
    if (newEdges.top) { // top drag
      svgDimention.height -= newEdges.top as number;
      svgDimention.y += newEdges.top as number;
    }
    if (newEdges.bottom) { // bottom drag
      svgDimention.height += newEdges.bottom as number;
    }
    if (newEdges.left) { // left drag
      svgDimention.width -= newEdges.left as number;
      svgDimention.x += newEdges.left as number;
    }
    if (newEdges.right) { // right drag
      svgDimention.width += newEdges.right as number;
    }

    return svgDimention;
  }

  static correctAxisCrossDrag(svgDimention: SvgDimention): SvgDimention {
    if (svgDimention.width < 0) { // x-axis cross drag
      svgDimention.x += svgDimention.width;
      svgDimention.width *= -1;
    }
    if (svgDimention.height < 0) { // y-axis cross drag
      svgDimention.y += svgDimention.height;
      svgDimention.height *= -1;
    }

    return svgDimention;
  }

  static correctOutOfBounceDrag(svgDimention: SvgDimention): SvgDimention {
    const svgCanvasDimention = Constants.SVG_CANVAS_DIMENTION;
    if (svgDimention.y < 0) { // top out of bounce drag
      svgDimention.height += svgDimention.y;
      svgDimention.y = 0;
    }
    if (svgDimention.y + svgDimention.height > svgCanvasDimention.height) { // bottom out of bounce drag
      svgDimention.height = svgCanvasDimention.height - svgDimention.y;
    }
    if (svgDimention.x < 0) { // left out of bounce drag
      svgDimention.width += svgDimention.x;
      svgDimention.x = 0;
    }
    if (svgDimention.x + svgDimention.width > svgCanvasDimention.width) { // right out of bounce drag
      svgDimention.width = svgCanvasDimention.width - svgDimention.x;
    }

    return svgDimention;
  }
}