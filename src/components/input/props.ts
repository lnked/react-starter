export interface P {
    name: string;
    type: 'button' | 'checkbox' | 'file' | 'hidden' | 'image' | 'password' | 'radio' | 'reset' | 'submit' | 'text';
    label?: string;
    value?: string | number;
    integer?: boolean;
    floating?: boolean;
    referrer?: any;
    handleChange?: (e: SyntheticEvent) => void;
}
