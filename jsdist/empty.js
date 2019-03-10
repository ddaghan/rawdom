export default function (el) {
    while (el.lastChild) {
        el.removeChild(el.lastChild);
    }
}
