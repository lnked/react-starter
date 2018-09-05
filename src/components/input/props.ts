export interface P {
    name: string;
    label?: string;
    value?: string | number;
    integer?: boolean;
    floating?: boolean;
    referrer?: any;
    handleChange?: (e: any) => void;
}
