import { DOMNodeType } from "./node-types";
import { SyntheticDocument } from "../document";
import { IMarkupNodeVisitor } from "./visitor";
import { serializable, ITreeWalker } from "@tandem/common";
import { SyntheticDOMNodeSerializer } from "./node";
import { SyntheticDOMValueNode, SyntheticDOMValueNodeSerializer, SyntheticDOMValueNodeEdit } from "./value-node";

@serializable(new SyntheticDOMNodeSerializer(new SyntheticDOMValueNodeSerializer()))
export class SyntheticDOMComment extends SyntheticDOMValueNode {
  readonly nodeType: number = DOMNodeType.COMMENT;

  constructor(nodeValue: string) {
    super("#comment", nodeValue);
  }

  toString() {
    return "";
  }

  get textContent() {
    return "";
  }

  accept(visitor: IMarkupNodeVisitor) {
    return visitor.visitComment(this);
  }

  clone() {
    return this.linkClone(new SyntheticDOMComment(this.nodeValue));
  }

  visitWalker(walker: ITreeWalker) { }
}