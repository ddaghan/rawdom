function isEventListener(attrName, attrValue) {
    attrValue;
    return attrName.substr(0, 2).toLowerCase() === 'on';
}
export default function (el, attr = {}) {
    for (let attrName in attr) {
        if (!attr.hasOwnProperty(attrName)) {
            continue;
        }
        const attrValue = attr[attrName];
        if (isEventListener(attrName, attrValue)) {
            const eventName = attrName.substr(2).toLowerCase();
            el.addEventListener(eventName, attrValue);
            continue;
        }
        el.setAttribute(attrName, attrValue);
    }
}
