$(document).ready(function () {
    // The-screen-size
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    $(".output-tab .sw").html(`${screenWidth} px`);
    $(".output-tab .sh").html(`${screenHeight} px`);

    // The-available-screen-size 
    const availScreenWidth = window.screen.availWidth;
    const availScreenHeight = window.screen.availHeight;
    $(".output-tab .asw").html(`${availScreenWidth} px`);
    $(".output-tab .ash").html(`${availScreenHeight} px`);

    // The-window-outer-size
    const windowOuterWidth = window.outerWidth;
    const windowOuterHeight = window.outerHeight;
    $(".output-tab .wow").html(`${windowOuterWidth} px`);
    $(".output-tab .woh").html(`${windowOuterHeight} px`);

    // The-window-inner-size
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;
    $(".output-tab .wiw").html(`${windowInnerWidth} px`);
    $(".output-tab .wih").html(`${windowInnerHeight} px`);

    // The-window-inner-size-without-the-scrollbars
    const windowInnerClientWidth = document.documentElement.clientWidth;
    const windowInnerClientHeight = document.documentElement.clientHeight;
    $(".output-tab .wicw").html(`${windowInnerClientWidth} px`);
    $(".output-tab .wich").html(`${windowInnerClientHeight} px`);

    // The-webpage-size
    const pageWidth = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;
    $(".output-tab .pw").html(`${pageWidth} px`);
    $(".output-tab .ph").html(`${pageHeight} px`);
});