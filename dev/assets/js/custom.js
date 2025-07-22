document.addEventListener("DOMContentLoaded", () => {
    const mainNav = document.querySelector('[data-main-nav]');
    const navLinks = document.querySelectorAll('[aria-controls]');
    const mainNavLinks = mainNav.querySelectorAll('[aria-controls]');
    const tabsPanes = document.querySelectorAll('.tabs__pane');

    function switchTab(targetId) {
        tabsPanes.forEach(pane => {
            const isTarget = pane.id === targetId;
            isTarget ? pane.classList.add('tabs__pane_show') : pane.classList.remove('tabs__pane_show');
        });

        mainNavLinks.forEach(link => {
            link.classList.toggle('nav-link_active', link.getAttribute('aria-controls') === targetId);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('aria-controls');

            targetId ? switchTab(targetId) : null;
        });
    });
});