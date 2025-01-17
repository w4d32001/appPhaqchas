export type InputProps = {
    type: 'text' | 'password' | 'email' | 'number';
    name: string;
    placeholder: string;
    value: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};