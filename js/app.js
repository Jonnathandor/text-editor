window.addEventListener('load', () => {
    let userInput = document.getElementById('user-input');
    let formattedArea = document.getElementById('formatted-text');
    let boldButton = document.getElementById('bold');
    let italicButton = document.getElementById('italic');
    let underlineButton = document.getElementById('underline');
    let leftAlignButton = document.getElementById('left-align');
    let centerAlignButton = document.getElementById('center-align');
    let rightAlignButton = document.getElementById('right-align');

    userInput.addEventListener('input', () => {
        formattedArea.value = userInput.value;
    });

    boldButton.addEventListener('click', () => {
        applyStyle(boldButton, formattedArea, 'fontWeight', 'bold', 'normal');
    });

    italicButton.addEventListener('click', () => {
        applyStyle(italicButton, formattedArea, 'fontFamily', 'italic', 'Arial');
    });

    underlineButton.addEventListener('click', () => {
        applyStyle(underlineButton, formattedArea, 'textDecoration', 'underline', 'none');
    });

    leftAlignButton.addEventListener('click', () => {
        formattedArea.style.textAlign = 'left';
    });

    centerAlignButton.addEventListener('click', () => {
        formattedArea.style.textAlign = 'center';
    });

    rightAlignButton.addEventListener('click', () => {
        formattedArea.style.textAlign = 'right';
    });

    // styleButton: The button that was clicked
    // targetArea: The element that will receive the css rule
    // cssProperty: The css property that should be applied
    // cssValueToApply: The value for the css property
    // defaultCssValue: The default value for the css property
    const applyStyle = (styleButton, targetArea, cssProperty, cssValueToApply, defaultCssValue) => {
        if(!styleButton.classList.contains('active')){
            targetArea.style[cssProperty] = cssValueToApply;
            styleButton.classList.add('active');
        } else {
            styleButton.classList.remove('active');
            targetArea.style[cssProperty] = defaultCssValue;
        }
    }
});