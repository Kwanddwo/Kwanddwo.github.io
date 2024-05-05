const page_names = ['index', 'about', 'work', 'contact'];
let current_page = location.search ? location.search : 'index';
const pages = {};
const links = {};
let sticky = 0;
let lastScrollY = 0;

window.onscroll = () => {
    // if (window.scrollY - lastScrollY >= 0) {
    //     navbar.classList.add('hide');
    // } else {
    //     navbar.classList.remove('hide');
    // }
    // lastScrollY = window.scrollY;
};

function showPage(page_name) {
    if (page_name[0] == '?') {page_name = page_name.substring(1);}

    if (page_name == current_page) {return;}

    current_page = page_name;

    // for (const page of Object.values(pages)) {
    //     page.style.display = page.id == page_name ? 'flex' : 'none';
    // }

    for (const link of Object.values(links)) {
        link.className = link.id == page_name +'-link' ? 'nav-link-active' : 'nav-link';
    }

    // history.pushState({ page: page_name }, page_name, `?${page_name}`);
}

// window.onpopstate = (ev) => {
//     showPage(ev.state.page);
//     current_page = ev.state.page;
// }

document.addEventListener('DOMContentLoaded', () => {
    // Get the navbar
    const navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    sticky = navbar.offsetTop;

    for (const page_name of page_names) {
        const page = document.getElementById(page_name);
        const link = document.getElementById(page_name + '-link');
        pages[page_name] = page;
        links[page_name] = link;
    }

    for (const page_name of page_names) {
        links[page_name].onclick = (e) => {
    //         e.preventDefault();
            showPage(page_name);
        }
    }

    showPage(current_page);
})