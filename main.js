$(document).ready(function() {
    $('.about-content').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100,
        repeat: true
    });
});

$(document).ready(function() {
    $('.work-left').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated slideInLeft',
        offset: 100,
        repeat: true
    });
});

$(document).ready(function() {
    $('.work-right').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 100,
        repeat: true
    });
});