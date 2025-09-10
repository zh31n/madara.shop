export interface SizeButtonI {
    text: string;
    w?: number;
    h?: number;
    active?: boolean;
    onClick?: (size: string) => {
        payload: string;
        type: "catalogPage/setCurrentSizeFilter";
    };
}