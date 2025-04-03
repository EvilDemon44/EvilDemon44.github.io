document.addEventListener('DOMContentLoaded', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let sessionCount = parseInt(sessionStorage.getItem('sessionCount')) || 0;
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const sessionCountDisplay = document.getElementById('sessionCount');
    const themeToggle = document.getElementById('themeToggle');
    const dogImage = document.getElementById('dogImage');
    const errorMessage = document.getElementById('errorMessage');
    const currentTheme = getCookie('theme') || 'lightMode';
    document.body.classList.add(currentTheme);

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => removeTask(index));

            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }

    function updateSessionCount() {
        sessionCountDisplay.textContent = sessionCount;
        sessionStorage.setItem('sessionCount', sessionCount);
    }

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = taskInput.value.trim();
        if (task) {
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            sessionCount++;
            updateSessionCount();

            renderTasks();
            taskInput.value = '';
        }
    });

    window.removeTask = (index) => {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };

    updateSessionCount();
    renderTasks();

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('lightMode') ? 'lightMode' : 'darkMode';
        const newTheme = currentTheme === 'lightMode' ? 'darkMode' : 'lightMode';

        document.body.classList.remove(currentTheme);
        document.body.classList.add(newTheme);

        setCookie('theme', newTheme, 2);
    });

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value};${expires};path=/`;
    }

    function getCookie(name) {
        const cookies = document.cookie.split('; ').map(cookie => cookie.split('='));
        const foundCookie = cookies.find(([key]) => key === name);
        return foundCookie ? foundCookie[1] : null;
    }

    async function fetchDogImage() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');

            const data = await response.json();

            if (!data.message) {
                throw new Error("Invalid response");
            }

            dogImage.src = data.message;
            dogImage.style.display = 'block';
            errorMessage.style.display = 'none';
        } catch (error) {
            console.error("Error fetching dog image:", error);
            dogImage.style.display = 'none';
            errorMessage.style.display = 'block';
        }
    }
    fetchDogImage();
    document.getElementById('imageButton').addEventListener('click', fetchDogImage);
});
