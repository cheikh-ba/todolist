$(document).ready(function() {
    $('#taskList').on('swiperight', 'li', function() {
        glisserTache($(this), '#completedTaskList');
    });

    $('#completedTaskList').on('swiperight', 'li', function() {
        glisserTache($(this), '#taskList');
    });

    $('#taskList, #completedTaskList').on('swipeleft', 'li', function() {
        $(this).animate({opacity: 0}, 500, function() {
            $(this).remove();
        });
    });
});

function glisserTache(taskItem, targetListSelector) {
    const targetList = $(targetListSelector);
    const newItem = taskItem.clone();

    taskItem.animate({opacity: 0}, 500, function() {
        $(this).remove();
        targetList.append(newItem).listview('refresh');
        newItem.css({opacity: 0}).animate({opacity: 1}, 500);
    });
}

function ajouterTache() {
    const task = document.getElementById("task");

    if (task.value) {
        const taskList = document.getElementById("taskList");
        const newTask = `<li>${task.value}</li>`;
        $(taskList).append(newTask).listview('refresh');
        task.value = '';
        task.focus();
    }
}

function reinitialiserTache() {
    const task = document.getElementById("task");
    const taskList = document.getElementById("taskList");
    const completedTaskList = document.getElementById("completedTaskList");
    taskList.innerHTML = '';
    completedTaskList.innerHTML = '';
    task.value = '';
    task.focus();
}
