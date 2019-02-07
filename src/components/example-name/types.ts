export interface P {
  img: any;
  value: string;
  enum?: 'button' | 'text';
  width?: number;
  simple?: boolean;
  handleChange?: (e: Event) => void | boolean;
  children?: JSX.Element[] | JSX.Element | any;
}

export interface S {
  value?: string | number;
}
