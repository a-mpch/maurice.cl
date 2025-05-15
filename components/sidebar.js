function createSidebar() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'about.html';
    
    return `
    <div class="sidebar">
        <h1>Maurice Poirrier</h1>
        <nav>
            <ul>
                <li><a href="about.html" class="${currentPage === 'about.html' ? 'active-page' : ''}">About</a></li>
                <li><a href="https://world.hey.com/mpch" target="_blank" class="${currentPage === 'blog.html' ? 'active-page' : ''}">Blog</a></li>
                <li><a href="talks.html" class="${currentPage === 'talks.html' ? 'active-page' : ''}">Talks</a></li>
                <li><a href="misc.html" class="${currentPage === 'misc.html' ? 'active-page' : ''}">Misc</a></li>
                <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active-page' : ''}">Contact</a></li>
            </ul>
        </nav>
    </div>
    `;
}