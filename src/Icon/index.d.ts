// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Icon'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'
import IconBase from './IconBase'

export { Icon, Icon as default }

declare namespace Icon {
    interface Props extends IconBase.Props {
        readonly children: React.ReactNode;
        readonly viewBox: string;
    }
}

declare class Icon extends React.Component<Icon.Props> {}