export interface IInputProps {
    placeholder?: string;
    w?: number;
    h?:number;
    onChange?: (value:string) => void;
    value?:string;
}