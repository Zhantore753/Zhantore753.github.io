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
        const git = document.querySelector('.images-parallax__git');
        const mongo = document.querySelector('.images-parallax__mongo');
        const npm = document.querySelector('.images-parallax__npm');
        const gulp = document.querySelector('.images-parallax__gulp');
        const redux = document.querySelector('.images-parallax__redux');
        const sass = document.querySelector('.images-parallax__sass');
        const typescript = document.querySelector('.images-parallax__typescript');
        const webpack = document.querySelector('.images-parallax__webpack');

        const speed = 0.1;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);


            node.style.cssText = `transform: translate(${positionX / 12}%,${positionY / 12}%)`;
            react.style.cssText = `transform: translate(${positionX / 20}%,${positionY / 20}%)`;
            js.style.cssText = `transform: translate(${positionX / 40}%,${positionY / 40}%)`;
            css.style.cssText = `transform: translate(${positionX / 9}%,${positionY / 9}%)`;
            html.style.cssText = `transform: translate(${positionX / 15}%,${positionY / 15}%)`;
            git.style.cssText = `transform: translate(${positionX / 9}%,${positionY / 9}%)`;
            mongo.style.cssText = `transform: translate(${positionX / 7}%,${positionY / 7}%)`;
            typescript.style.cssText = `transform: translate(${positionX / 4}%,${positionY / 4}%)`;
            sass.style.cssText = `transform: translate(${positionX / 6}%,${positionY / 6}%)`;
            redux.style.cssText = `transform: translate(${positionX / 3}%,${positionY / 3}%)`;
            webpack.style.cssText = `transform: translate(${positionX / 5}%,${positionY / 5}%)`;
            gulp.style.cssText = `transform: translate(${positionX / 7}%,${positionY / 7}%)`;
            npm.style.cssText = `transform: translate(${positionX / 4}%,${positionY / 4}%)`;

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
            js.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 5}%)`;
            react.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 4}%)`;
            css.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 1}%)`;
            html.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%)`;

            git.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 2}%)`;
            mongo.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 5}%)`;
            typescript.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 4}%)`;
            sass.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%)`;
            redux.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 5}%)`;
            webpack.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 2}%)`;
            gulp.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%)`;
            npm.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 2}%)`;
        }
    }
}
