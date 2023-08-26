function checkUnusedSelectors(e) {
    const selectorsToCheck = ['h1.title', 'nav.main-nav'];
    selectorsToCheck
    .filter((v) => {
        var selected = document.querySelector(v);
        if(selected == null){
            return true;
        }
        return false;
    }).forEach(v => {
        console.log("Unused property:" + v);
    });
};

// import { h, Component, render } from 'https://esm.sh/preact';
// import htm from 'https://esm.sh/htm';
// const html = htm.bind(h);
