const page_names = ['index', 'about', 'work', 'contact'];
let current_page = 'index';
const pages = {};
const links = {}

// TODO: remove scrollbars please
// TODO: ADD ICON: should be either 'M' or 'ML' with a double shadow
// TODO: ADD WORK PAGE in index.html
// TODO: change how the website looks on mobile, it looks awful! especially the paragraphs
// TODO: Add pagination animation
// TODO: Add navigation url (see mail project from CS50)

function showPage(page_name) {
    if (page_name == current_page) {
        return;
    }

    current_page = page_name;

    for (const page of Object.values(pages)) {
        page.style.display = page.id == page_name ? 'flex' : 'none';
    }

    for (const link of Object.values(links)) {
        link.className = link.id == page_name +'-link' ? 'nav-link-active' : 'nav-link';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    for (const page_name of page_names) {
        const page = document.getElementById(page_name);
        const link = document.getElementById(page_name + '-link');
        pages[page_name] = page;
        links[page_name] = link;
    }

    for (const page_name of page_names) {
        links[page_name].onclick = (e) => {
            e.preventDefault();
            showPage(page_name);
        }
    }
})