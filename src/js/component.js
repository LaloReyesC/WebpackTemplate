import '../css/component.css'

export const newTag = (tagName, tagInnerHtml) => {

    const createdTag = document.createElement(tagName);

    createdTag.innerText = tagInnerHtml;

    document.body.append(createdTag);

}