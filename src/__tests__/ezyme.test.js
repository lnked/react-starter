test('test', () => {})

// import * as React from 'react';
// import './Hello.css';

// export interface Props {
//   name: string;
//   enthusiasmLevel?: number;
//   onIncrement?: () => void;
//   onDecrement?: () => void;
// }

// function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
//   if (enthusiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiastic. :D');
//   }

//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//       <div>
//         <button onClick={onDecrement}>-</button>
//         <button onClick={onIncrement}>+</button>
//       </div>
//     </div>
//   );
// }

// export default Hello;

// // helpers

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }

// import * as React from 'react';
// import * as enzyme from 'enzyme';
// import Hello from './Hello';

// it('renders the correct text when no enthusiasm level is given', () => {
//   const hello = enzyme.shallow(<Hello name="Daniel" />);
//   expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
// });

// it('renders the correct text with an explicit enthusiasm of 1', () => {
//   const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1}/>);
//   expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
// });

// it('renders the correct text with an explicit enthusiasm level of 5', () => {
//   const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
//   expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
// });

// it('throws when the enthusiasm level is 0', () => {
//   expect(() => {
//     enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
//   }).toThrow();
// });

// it('throws when the enthusiasm level is negative', () => {
//   expect(() => {
//     enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
//   }).toThrow();
// });
