import * as React from 'react'

import { Loading } from 'components'

import { DynamicImport } from 'hocs'

/* eslint-disable */
export const Auth = (props) => (
    <DynamicImport load={() => import('./auth')}>
        {(Component) => Component === null
            ? <Loading />
            : <Component {...props} />}
    </DynamicImport>
)

export const Code = (props) => (
    <DynamicImport load={() => import('./code')}>
        {(Component) => Component === null
            ? <Loading />
            : <Component {...props} />}
    </DynamicImport>
)

export const Phone = (props) => (
    <DynamicImport load={() => import('./phone')}>
        {(Component) => Component === null
            ? <Loading />
            : <Component {...props} />}
    </DynamicImport>
)

export const Location = (props) => (
    <DynamicImport load={() => import('./location')}>
        {(Component) => Component === null
            ? <Loading />
            : <Component {...props} />}
    </DynamicImport>
)

export const Retrieving = (props) => (
    <DynamicImport load={() => import('./retrieving')}>
        {(Component) => Component === null
            ? <Loading />
            : <Component {...props} />}
    </DynamicImport>
)

export const Organization = (props) => (
    <DynamicImport load={() => import('./organization')}>
        {(Component) => Component === null
            ? <Loading />
            : <Component {...props} />}
    </DynamicImport>
)
/* eslint-enable */
