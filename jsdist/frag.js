export default function (...children) {
    const documentFragment = document.createDocumentFragment();
    for (let child of children) {
        if (typeof child === 'string') {
            documentFragment.appendChild(document.createTextNode(child));
        }
        else {
            documentFragment.appendChild(child);
        }
    }
    return documentFragment;
}
