document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const overlay = document.getElementById('overlay');

    openSidebarBtn.addEventListener('click', function() {
        sidebar.style.width = '300px';
        overlay.style.display = 'block';
    });

    closeSidebarBtn.addEventListener('click', function() {
        sidebar.style.width = '0';
        overlay.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === overlay) {
            sidebar.style.width = '0';
            overlay.style.display = 'none';
        }
    });
});

