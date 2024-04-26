const topMenu = document.getElementById('cf-top-menu');
const toggleTopMenuIcon = document.getElementById('cf-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        // Click to toggle top menu

        //Chưa có hidden thì thêm vào topMenu
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('cf-top-menu-expanded')

    } else {
        //Click out side
        if (topMenu.classList.contains('cf-top-menu-expanded')) {
            topMenu.classList.remove('cf-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})