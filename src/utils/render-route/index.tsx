import * as React from 'react'

import { Route } from 'react-router-dom'

import { Helmet } from 'react-helmet'

export function renderRoute ({ title, keywords, description, component: Component, ...rest }: Route) {
  return (
    <Route key={rest.path} {...rest} render={(props: any) => (
      <React.Fragment>
        <Helmet
          title={title}
          meta={[
            {
              name: 'description',
              content: description,
            },
            {
              name: 'keywords',
              content: keywords,
            },
          ]}
        />

        <Component {...props} />
      </React.Fragment>
    )} />
  )
}
