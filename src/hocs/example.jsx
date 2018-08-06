// // https://github.com/codedojo/react-hoc
// // app

// import React from 'react';

// import Form from './components/Form';
// import List from './components/List';
// import withCrud from './hoc/withCrud';

// function App({ data, create, update, remove }) {
//     return (
//       <div className="container">
//         <Form onSubmit={create} />
//         <List todos={data}
//               onToggle={update}
//               onRemove={remove} />
//       </div>
//     );
// }

// export withCrud(App, 'api/todos');

// // FORM

// import React from 'react';

// function Form({ onSubmit }) {
//   let input;

//   const handleSubmit = event => {
//     event.preventDefault();
//     onSubmit({ title: input.value });
//     input.value = '';
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="input-group">
//         <input className="form-control form-control-sm" ref={element => input = element} />
//         <span className="input-group-btn">
//           <button className="btn btn-secondary" type="submit">Добавить</button>
//         </span>
//       </div>
//     </form>
//   );
// }

// export Form;

// // LIST

// import React from 'react';

// function List({ todos, onToggle, onRemove }) {
//   return (
//     <div className="todo-list list-group">
//       {todos.map(todo =>
//         <div className="todo list-group-item justify-content-between" key={todo.id}>
//           <label>
//             <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
//             {todo.title}
//           </label>
//           <button className="btn btn-primary btn-sm" onClick={() => onRemove(todo.id)}>Удалить</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export List;
