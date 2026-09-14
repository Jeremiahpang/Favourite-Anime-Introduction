document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('.Text-2, .Text');
    textElements.forEach((element) => {
        element.addEventListener('animationend',(event) => {
            if (event.animationName === 'typing-Text' || event.animationName === 'typing-Text-2') {
                element.classList.add('no-cursor');
            }
        });
    });
});