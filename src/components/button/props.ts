export interface P {
    type?: string;
    size?: 'small' | 'default' | 'large';
    label?: string;
    icon?: boolean;
    info?: boolean;
    danger?: boolean;
    normal?: boolean;
    success?: boolean;
    primary?: boolean;
    warning?: boolean;
    circle?: boolean;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    children?: JSX.Element[] | JSX.Element | string;
    handleClick?: () => void | boolean;
}
