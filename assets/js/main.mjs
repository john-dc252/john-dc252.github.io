
export async function init() {
    const response = await fetch('app-dir-list.json');
    /**
     * @type {string[]}
     */
    const appDirList = await response.json();

    const docFragment = new DocumentFragment();
    for (const appDir of appDirList) {
        docFragment.append(createLink(appDir));
    }

    document.querySelector('.container').appendChild(docFragment);
}

/**
 * @param {string} appDir
 */
export function createLink(appDir) {
    return createElement('a', {class: 'app-link', href: appDir, target: '_blank'}, [
        createElement('strong', {}, [
            appDir.replaceAll(/(.+\/)(.+$)/g, '$2').replaceAll('-', ' ')
        ]),
    ]);
}

/**
 * @param {string} el
 * @param {{[k: string]: any}} attrs
 * @param {(Node|string)[]} children
 * @return {Node}
 */
export function createElement(el, attrs, children) {
    const domEl = document.createElement(el);
    for (const attr in attrs) {
        domEl.setAttribute(attr, attrs[attr]);
    }

    for (const child of children) {
        domEl.append(child);
    }

    return domEl;
}
