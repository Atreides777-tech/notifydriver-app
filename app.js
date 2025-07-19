// NotifyDriver App - JavaScript Main File
// Aplicație web pentru gestionarea notificărilor și alertelor în timp real

class NotifyDriverApp {
    constructor() {
        this.notifications = JSON.parse(localStorage.getItem('notifydriver_notifications')) || [];
        this.settings = JSON.parse(localStorage.getItem('notifydriver_settings')) || {
            browserNotifications: false,
            soundNotifications: true,
            darkTheme: false,
            autoSave: true
        };
        this.stats = {
            totalNotifications: 0,
            activeAlerts: 0,
            completedTasks: 0,
            systemStatus: 'Activ'
        };
        
        this.init();
    }

    init() {
        // Ascunde loading screen după încărcare
