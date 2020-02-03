// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Dictionary'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { Dictionary, Dictionary as default }

declare namespace Dictionary {
    interface Props {
        readonly values: Common.Translations;
        readonly children: React.ReactNode;
    }
}

declare class Dictionary extends React.Component<Dictionary.Props> {}