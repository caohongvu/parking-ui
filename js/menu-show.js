$('.sidebar-menu li .treeview-menu').click(function (e) {
    const className = $(this);
    if (className.hasClass('active')) {
        className.removeClass('active');
    } else {
        className.addClass('active');
    }

})