// Load components
document.addEventListener('DOMContentLoaded', function () {
    // Load sidebar
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = createSidebar();
    }

    // Load footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
    }

    console.log('Website loaded successfully with components');
});