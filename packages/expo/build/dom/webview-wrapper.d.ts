import React from 'react';
import type { DOMProps } from './dom.types';
interface Props {
    dom: DOMProps;
    source: {
        uri: string;
    };
}
export declare const DOMWebViewWrapper: React.ForwardRefExoticComponent<Props & React.RefAttributes<object>>;
export declare const RNWebViewWrapper: React.ForwardRefExoticComponent<Props & React.RefAttributes<object>>;
export {};
//# sourceMappingURL=webview-wrapper.d.ts.map