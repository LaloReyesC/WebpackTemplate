import '../css/componentes.css';

const saludar = (nombre = 'lalo') => {

    const content = newElement('div', true);
    const h1 = newElement('h1');
    const poweredBy = newElement('p');

    h1.innerText = `Platilla para desarrollar con vainilla JS con webpack`;
    poweredBy.innerText = `Desarrollado por ${nombre}`;

    content.classList.add('container', 'mt-5');
    content.append(h1, poweredBy);
}

/**
 * Crear un nuevo elemento de HTML el cual puede o no ser adjuntado al DOM si se indica en la bandera
 * @param {string} nodeName Indica el tipo de elemento que se desea crear en el DOM.
 * @param {boolean} appendToDOM Bandera que indica si el nuevo elemento debe agregarse al DOM de HTML o no.
 * @returns Retorna un elemento de tipo HTMLElement.
 */
export const newElement = (nodeName = '', appendToDOM = false) => {

    const nodeElement = document.createElement(nodeName);

    if (appendToDOM) {
        document.body.append(nodeElement);
    }

    return nodeElement;
}

export default saludar;