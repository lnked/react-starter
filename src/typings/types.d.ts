interface Window {
  __INITIAL_STATE__: any;
  __DEVTOOLS_EXTENSION__: () => any;
}

declare module '*.json' {
  const value: any;
  export const version: string;
  export default value;
}

declare module 'json-loader!*';

declare module '*.css' {
  const content: any;
  export default content;
}

declare namespace Express {
  interface Request {
    todoId: number;
  }
}

declare module '*.scss' {
  const _: string;
  export default _;

  interface IClassNames {
    [className: string]: string
  }
}

declare module '*.woff';
declare module '*.woff2';
