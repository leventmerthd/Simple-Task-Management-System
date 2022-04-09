/* Author: Levent Mert Erçelik (@leventmerthd) */

$('.participants_popup').hide();
$('.tasks_popup').hide();
$('.second_screen').hide();

document.querySelector('.participants_command').addEventListener('click', () => {
    $('.participants_popup').fadeIn('fast');
});
document.querySelector('.participants_box_command').addEventListener('click', () => {
    $('.participants_popup').fadeOut('fast');
});
document.querySelector('.tasks_command').addEventListener('click', () => {
    $('.tasks_popup').fadeIn('fast');
});
document.querySelector('.tasks_box_command').addEventListener('click', () => {
    $('.tasks_popup').fadeOut('fast');
});
document.querySelector('.open_chart').addEventListener('click', () => {
    $('.first_screen').fadeOut('fast');
    setTimeout(() => {
        $('.second_screen').fadeIn('fast');
    }, 200);
});
document.querySelector('.open_second').addEventListener('click', () => {
    window.location.replace('index.php');
});
setInterval(() => {
    if (window.location.href.indexOf('id') > -1) {
        $('.first_screen').hide();
        $('.second_screen').show();
    }
})

var taskFullNames = document.querySelector('.tasks_box_body select option');
var formAddTaskButton = document.querySelector('.tasks_box_body button');

if (!taskFullNames) {
    formAddTaskButton.style.pointerEvents = 'none';
    formAddTaskButton.style.opacity = 0.5;
}
