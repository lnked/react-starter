# Action Strategies

[The article](https://css-tricks.com/learning-react-redux/) covers actions to an extent, but there's a lot more to consider. As stated before, actions are plain objects. Redux is mostly unopinionated about what types of things should or can go into the action, as long as it has a `type` attribute and as long as it remains [serializable](http://redux.js.org/docs/Glossary.html#action).

Here are some examples of actions from Redux's documentation:

```
{ type: 'ADD_TODO', text: 'Use Redux' }
{ type: 'REMOVE_TODO', id: 42 }
{ type: 'LOAD_ARTICLE', response: { ... } }
```

String literals are just one common way to distinguish one type from another. They are not required but this is the more conventional way distinguish action types. It's important that they are globally unique though. Remember, all reducers will receive the action when it's dispatched so there's no way to conduct a dispatch that goes to one particular reducer. Therefore, having an action type called `"ADD"` is too ambiguous.

To help ensure uniqueness, many developers make "action types" as constants:

```js
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const LOAD_ARTICLE = 'LOAD_ARTICLE';

store.dispatch({ type: ADD_TODO, text: 'Use Redux' });
store.dispatch({ type: REMOVE_TODO, id: 42 });
store.dispatch({ type: LOAD_ARTICLE, response: { ... } });
```

> ES2015 Alert! Simply having `const` doesn't mean it's value is ensured to be unique. Using `const` just means its value can't change. But as a strategy, some devs create one file with all their action type constants inside which helps to see them all in one place, and to visually ensure they are unique.

Some strategies regarding actions seem tedious with lots of boilerplate code. Redux Docs offer a suggestion for [reducing boilerplate code](http://redux.js.org/docs/recipes/ReducingBoilerplate.html). One strategy it offers in addition to using constants is to use "action creators".

### Action Creators

Instead of dispatching an object literal directly and repeating the same action object throughout the application, you could call a function that creates and returns the action object:

```js
const ADD_TODO = 'ADD_TODO';

// Action Creator
var addTodo = function(text) {
  return { type: ADD_TODO, text }
}

// Dispatch still sends a plain object
store.dispatch(addTodo('Use Redux'));
```

This function is called an "action creator". Now you don't have to remember the name of the action type constant. Plus if you needed to change the type constant, this strategy allows us to be more [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

Arguably though, this is even more boilerplate since your application is going to potentially have many action type constants and many action creators.

> ES2015 Alert! You may have noticed what seems to be a typo in the example. The action object has a `text` property but no value is being applied. This is not an error. In ES2015, this is called a [shorthand property name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015). Having `text` all by itself is simultaneously creating a property called `text` and adding the value of the `text` variable to it.

## Reduce Boilerplate Code with `redux-act`

If you're not liking all the boilerplate hassle that can go into creating action type constants and action creators, consider using [redux-act](https://github.com/pauldijou/redux-act), a third party tool that abstracts the making of action creators and action types so you don't even have to think about them. Its documentation can speak for itself, but I personally use this tool and I love it.

## Flux Standard Action (FSA)

Since the rules around creating actions are so loose, the [Flux Standard Action](https://github.com/acdlite/flux-standard-action) was created to be a set of rules around how to create actions. They are totally optional, but `redux-act` does require them.

## Serializable Actions and State

Actions and state should only contain data which is "serializable", in other words, it converts to JSON well. This isn't a strict rule but it's highly recommended by the Redux docs.
