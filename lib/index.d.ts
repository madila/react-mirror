import * as React from "react";
declare type MirrorPropsType = {
    className?: string;
    reflect?: React.ReactInstance | null;
};
export declare function Mirror({ className, reflect }: MirrorPropsType): JSX.Element;
export declare function useMirror(props?: MirrorPropsType): [React.Dispatch<unknown>, JSX.Element | undefined];
export {};
