// script.js
const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskDescriptionInput = document.getElementById('taskDescription');
const taskDeadlineInput = document.getElementById('taskDeadline');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const clearCompletedButton = document.getElementById('clearCompleted');

let tasks = [];

