import * as React from 'react'

interface T {
    min?: number;
    max?: number;
    step?: number;
    name: string;
    type?: 'button' | 'checkbox' | 'file' | 'hidden' | 'image' |
           'password' | 'radio' | 'reset' | 'submit' | 'text';
    list?: string;
    pattern?: string;
    value?: string | number;
    checked?: boolean;
    tabindex?: number;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    autoFocus?: boolean;
    maxlength?: number;
    accesskey?: number;
    placeholder?: string;
    spellCheck?: boolean;
    autoCorrect?: 'on' | 'off';
    autoComplete?: 'on' | 'off';
    autoCapitalize?: 'on' | 'off';
    align?: 'bottom' | 'left' | 'middle' | 'right' | 'top';
}

export default class PrimitiveInput extends React.Component<T, {}> {
    static defaultProps = {
        type: 'text'
    }

    render () {
        return (
            <input {...this.props} />
        )
    }
}
