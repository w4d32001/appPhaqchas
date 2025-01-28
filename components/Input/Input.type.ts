export type InputProps = {
    type: 'text' | 'password' | 'email' | 'number' | 'date';
    name: string;
    placeholder: string;
    value: string;
    label: string;
    required: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};