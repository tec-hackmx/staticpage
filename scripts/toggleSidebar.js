var sidebar = document.querySelectorAll('.sidebar')[0];
var button = document.querySelectorAll('.sidebar-toggle');
var mainContent = document.querySelectorAll('.main-content')[0];

button.forEach((object) => {
    object.addEventListener('click', () => {
        console.log(sidebar);
        if(sidebar.classList.contains('show-sidebar')){
            sidebar.classList.remove('show-sidebar');
            mainContent.classList.remove('main-content-blur');

        }else{
            sidebar.classList.add('show-sidebar');
            mainContent.classList.add('main-content-blur');
        }
    })
});