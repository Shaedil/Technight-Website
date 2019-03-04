const button = document.querySelector('.foo-button');
mdc.ripple.MDCRipple.attachTo(button);


const secondButton = document.querySelector('.bar-button');
mdc.ripple.MDCRipple.attachTo(secondButton);

// This will add a ripple to all of the buttons. 

// const buttons = document.querySelectorAll('.mdc-button');
// for (const button of buttons) {
//   mdc.ripple.MDCRipple.attachTo(button);
// }
