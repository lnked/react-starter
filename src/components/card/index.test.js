import * as React from 'react'
import { Card } from './'
import renderer from 'react-test-renderer'

it('отображается корректно', () => {
    const component = renderer.create(<Card>test</Card>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
