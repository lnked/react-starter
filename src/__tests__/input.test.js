// import React from 'react'
// import Link from '../Link.react'
// import renderer from 'react-test-renderer'

const sum = (a, b) => {
  return a + b
}

const hello = name => {
  return `Hello ${name}`
}

test('should add 2 numbers', () => {
  const result = sum(2, 3)
  expect(result).toBe(5)
})

test('should say hello to you', () => {
  const result = hello('name')
  expect(result).toBe('Hello name')
})
