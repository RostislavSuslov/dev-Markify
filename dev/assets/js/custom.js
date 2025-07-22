function installTabs() {
    document.addEventListener("DOMContentLoaded", () => {
        const mainNav = document.querySelector('[data-main-nav]');
        const navLinks = document.querySelectorAll('.nav-link[aria-controls]');
        const mainNavLinks = mainNav.querySelectorAll('.nav-link[aria-controls]');
        const tabsPanes = document.querySelectorAll('.tabs__pane');
        
        console.log(tabsPanes);
        

        const switchTab = (targetId) => {
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
                const targetId = link.getAttribute('aria-controls');

                targetId ? switchTab(targetId) : null;
            });
        });

        if (navLinks.length > 0) {
            const firstTargetId = navLinks[0].getAttribute('aria-controls');
            if (firstTargetId) switchTab(firstTargetId);
        }
    });
}

function runningLine() {
    document.querySelectorAll('.ticker__text').forEach(textBlock => {
        const item = textBlock.querySelector('.ticker__item');
        if (!item) return;

        for (let i = 0; i < 20; i++) {
            textBlock.prepend(item.cloneNode(true));
        }
    });
}


document.querySelectorAll('.tabs').length ? installTabs() : null;
document.querySelectorAll('.ticker').length ? runningLine() : null;