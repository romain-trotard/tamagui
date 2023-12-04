import type { FillInFont, GenericFont } from '@tamagui/core';
export declare const createDmSerifDisplayFont: <A extends GenericFont>(font?: Partial<A>, { sizeLineHeight, sizeSize, }?: {
    sizeLineHeight?: ((fontSize: number) => number) | undefined;
    sizeSize?: ((size: number) => number) | undefined;
}) => FillInFont<A, 11 | 12 | 13 | 14 | 1 | 2 | 3 | 4 | "true" | 5 | 6 | 7 | 8 | 9 | 10 | 15 | 16>;
declare const defaultSizes: {
    readonly 1: 11;
    readonly 2: 12;
    readonly 3: 13;
    readonly 4: 14;
    readonly true: 14;
    readonly 5: 18;
    readonly 6: 22;
    readonly 7: 26;
    readonly 8: 30;
    readonly 9: 38;
    readonly 10: 46;
    readonly 11: 55;
    readonly 12: 62;
    readonly 13: 72;
    readonly 14: 92;
    readonly 15: 114;
    readonly 16: 134;
};
export {};
//# sourceMappingURL=index.d.ts.map