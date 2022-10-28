window.addEventListener('load', function () {
    const elements = document.getElementsByClassName('auto__doc_page_webpack_doc_page_blur_promo');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
});