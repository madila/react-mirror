/// <reference types="react" />
export declare type CloneOptions = {
    styles?: React.CSSProperties;
    class?: string;
};
export declare function copyStyles(sourceElt: HTMLElement, targetElt: HTMLElement, options?: CloneOptions): void;
export declare function cloneNodeWithStyles(node: Node, options: CloneOptions): Node;
export declare function deepCloneWithStyles(node: Node, options: CloneOptions): Node;
