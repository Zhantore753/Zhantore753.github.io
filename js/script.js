"use strict"

window.onload = function () {
    const parallax = document.querySelector('.parallax');
    new Vivus('Logo', {duration: 150 });

    if(parallax) {
        const content = document.querySelector('.parallax__container');
        const node = document.querySelector('.images-parallax__node');
        const react = document.querySelector('.images-parallax__react');
        const js = document.querySelector('.images-parallax__js');
        const css = document.querySelector('.images-parallax__css');
        const html = document.querySelector(".images-parallax__html");

        const forNode = 10;
        const forReact = 20;
        const forJs = 40;
        const forCss = 20;
        const forHtml = 10;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            node.style.cssText = `transform: translate(${positionX / forNode}%,${positionY / forNode}%)`;
            react.style.cssText = `transform: translate(${positionX / forReact}%,${positionY / forReact}%)`;
            js.style.cssText = `transform: translate(${positionX / forJs}%,${positionY / forJs}%)`;
            css.style.cssText = `transform: translate(${positionX / forCss}%,${positionY / forCss}%)`;
            html.style.cssText = `transform: translate(${positionX / forHtml}%,${positionY / forHtml}%)`;
        
            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e){
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });

        let threshouldSets = [];
        for(let i = 0; i <= 1.0 ; i += 0.005){
            threshouldSets.push(i);
        }
        const callback = function(entries, observer){
            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
            setParallaxItemStyle(scrollTopProcent);
        };
        const observer = new IntersectionObserver(callback, {
            threshold: threshouldSets
        });

        observer.observe(document.querySelector('.content'));

        function setParallaxItemStyle(scrollTopProcent){
            content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%)`;
            node.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%)`;
            js.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%)`;
            react.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%)`;
            css.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%)`;
            html.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%)`;
        }
    }
}
