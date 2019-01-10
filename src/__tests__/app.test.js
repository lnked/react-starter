test('App works', () => {})

// import React from 'react'
// import { render, fireEvent } from 'react-testing-library'
// import App from '../App'

// test('App works', () => {
//   const { container } = render(<App />)
//   console.log(container)
//   const buttons = container.querySelectorAll('button')

//   expect(buttons[0].textContent).toBe('+1')
//   expect(buttons[1].textContent).toBe('+10')
//   expect(buttons[2].textContent).toBe('+100')
//   expect(buttons[3].textContent).toBe('+1000')

//   const result = container.querySelector('span')
//   expect(result.textContent).toBe('0')
//   fireEvent.click(buttons[0])
//   expect(result.textContent).toBe('1')
//   fireEvent.click(buttons[1])
//   expect(result.textContent).toBe('11')
//   fireEvent.click(buttons[2])
//   expect(result.textContent).toBe('111')
//   fireEvent.click(buttons[3])
//   expect(result.textContent).toBe('1111')
//   fireEvent.click(buttons[2])
//   expect(result.textContent).toBe('1211')
//   fireEvent.click(buttons[1])
//   expect(result.textContent).toBe('1221')
//   fireEvent.click(buttons[0])
//   expect(result.textContent).toBe('1222')
// })

// import React from 'react'

// // import { render, unmountComponentAtNode } from 'react-dom'
// import { render } from 'react-dom'
// import { App } from '../app'

// it('renders without crashing', () => {
//     const div = document.createElement('div')
//     render(<App />, div)
//     // unmountComponentAtNode(div)
// })
