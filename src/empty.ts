export default function(el: HTMLElement): void {
    while(el.lastChild) {
        el.removeChild(el.lastChild);
    }
}