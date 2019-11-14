const $ = window.$;

export const initializeHover = () => {
    $('.dh-container').directionalHover();
    $('.dh-container').directionalHover({
        overlay: "dh-overlay",
        easing: "swing",
        speed: 400
    });
}