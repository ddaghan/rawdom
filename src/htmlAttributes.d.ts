export type HTMLAttribute = string | EventListenerOrEventListenerObject;
export interface HTMLAttributes {
    [key: string]: HTMLAttribute;
}