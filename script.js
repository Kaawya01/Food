
const profileMenu = document.getElementById('profile-menu');
if (profileMenu) {
    const dropdownMenu = profileMenu.querySelector('.menue');

    profileMenu.addEventListener('click', function(event) {
        event.stopPropagation(); 
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!profileMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
}


const themeOptions = document.querySelectorAll('.theme-options li');
const body = document.body;


function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme); 
}


themeOptions.forEach(option => {
    option.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        applyTheme(theme);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; 
    applyTheme(savedTheme);
});

document.addEventListener("DOMContentLoaded", function () {
    const notificationIcon = document.getElementById("notification-icon");
    const notificationDropdown = document.getElementById("notification-dropdown");

    
    notificationIcon.addEventListener("click", function (event) {
        notificationDropdown.classList.toggle("active");
        event.stopPropagation(); 
    });

    
    document.addEventListener("click", function (event) {
        if (!notificationIcon.contains(event.target) && !notificationDropdown.contains(event.target)) {
            notificationDropdown.classList.remove("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const notificationIcon = document.getElementById("notification-icon");
    const notificationDropdown = document.getElementById("notification-dropdown");

    
    notificationIcon.addEventListener("mouseenter", function () {
        notificationDropdown.classList.add("active");
    });

   
    notificationDropdown.addEventListener("mouseleave", function () {
        notificationDropdown.classList.remove("active");
    });

    notificationIcon.addEventListener("mouseleave", function () {
        
        setTimeout(() => {
            if (!notificationDropdown.matches(":hover")) {
                notificationDropdown.classList.remove("active");
            }
        }, 200);
    });
});

const ctx = document.getElementById('myPieChart').getContext('2d');

        
        const myPieChart = new Chart(ctx, {
            type: 'pie', 
            data: {
                labels: ['Pending','completed','cancelled','Shipped'], 
                datasets: [{
                    label: 'My Pie Chart', 
                    data: [200, 50, 100,100], 
                    backgroundColor: ['#9662bb', '#86809d', '#fc209f','#3eccdf'], 
                    borderColor: ['GRAY', 'GRAY', 'GRAY'], 
                    borderWidth: 1, 
                }]
            },
            options: {
                responsive: true, 
                plugins: {
                    tooltip: {
                        enabled: true, 
                    },
                    legend: {
                        position: 'top', 
                    },
                    datalabels: {
                        display: true, 
                        color: 'gray', 
                        
                        font: {
                            weight: 'bold', 
                            size: 16,
                            color: 'gray', 
                        },
                        formatter: (value, context) => {
                            const percentage = ((value / context.dataset._meta[Object.keys(context.dataset._meta)[0]].total) * 100).toFixed(1) + '%'; // Calculate percentage
                            return percentage; 
                        }
                    }
                }
            }
        });

       document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("incomeChart");
    if (!canvas) {
        console.error("Canvas element with id 'incomeChart' not found.");
        return;
    }
    
    const ctx = canvas.getContext("2d");

    
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function getTheme() {
        return darkModeQuery.matches;
    }

    
    function createIncomeChart() {
        const prefersDark = getTheme();

       
        const gradientLight = ctx.createLinearGradient(0, 0, 0, 400);
        gradientLight.addColorStop(0, "rgba(75, 192, 192, 1)");
        gradientLight.addColorStop(1, "rgba(80, 201, 201, 0.2)");

        
        const gradientDark = ctx.createLinearGradient(0, 0, 0, 400);
        gradientDark.addColorStop(0, "rgba(255, 99, 132, 1)");
        gradientDark.addColorStop(1, "rgba(255, 99, 132, 0.2)");

       
        const gradient = prefersDark ? gradientDark : gradientLight;
        const fontColor = prefersDark ? "#4b8d9e" : "#4b8d9e"; 
        const borderColor = prefersDark ? "rgba(255, 99, 132, 1)" : "rgba(75, 192, 192, 1)";

        
        return new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "Income ($)",
                    data: [1000, 1200, 1500, 1700, 1900, 2200],
                    borderColor: borderColor,
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { 
                            color: fontColor,  
                            font: {
                                size: 14 
                            }
                        }
                    }
                },
                scales: {
                    x: { 
                        ticks: { color: fontColor },
                        grid: { color: prefersDark ? "darkgray" : "darkgray" } 
                    },
                    y: { 
                        ticks: { color: fontColor },
                        grid: { color: prefersDark ? "darkgray" : "darkgray " } 
                    }
                }
            }
        });
    }

    
    let incomeChart = createIncomeChart();

    
    darkModeQuery.addEventListener("change", () => {
        incomeChart.destroy();
        incomeChart = createIncomeChart();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("incomeChart");
    if (!canvas) {
        console.error("Canvas element with id 'incomeChart' not found.");
        return;
    }

    const ctx = canvas.getContext("2d");

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function getTheme() {
        return darkModeQuery.matches ? "dark" : "light";
    }

    function createIncomeChart() {
        const theme = getTheme();

        const gradientLight = ctx.createLinearGradient(0, 0, 0, 400);
        gradientLight.addColorStop(0, "rgba(255, 99, 132, 0.6)");
        gradientLight.addColorStop(1, "rgba(75, 192, 192, 0.6)");

        const gradientDark = ctx.createLinearGradient(0, 0, 0, 400);
        gradientDark.addColorStop(0, "rgba(255, 159, 64, 0.6)");
        gradientDark.addColorStop(1, "rgba(54, 162, 235, 0.6)");

        new Chart(ctx, {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        label: "Income",
                        data: [65, 59, 80, 81, 56, 55],
                        backgroundColor: theme === "dark" ? gradientDark : gradientLight,
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "top"
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return "$" + tooltipItem.raw;
                            }
                        }
                    }
                }
            }
        });
    }

    createIncomeChart();
});


document.addEventListener('DOMContentLoaded', function () {
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const monthYearDisplay = document.getElementById('month-year');
    const calendarGrid = document.querySelector('.calendar-grid');

    let currentDate = new Date();

    function renderCalendar() {
        
        calendarGrid.querySelectorAll('.date').forEach(date => date.remove());

        
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        monthYearDisplay.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

        
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day');
            calendarGrid.appendChild(emptyDay);
        }

        
        for (let day = 1; day <= lastDate; day++) {
            const dateElement = document.createElement('div');
            dateElement.classList.add('date');
            dateElement.textContent = day;
            calendarGrid.appendChild(dateElement);
        }
    }

    
    prevMonthButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    
    renderCalendar();
});



