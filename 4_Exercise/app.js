// Dynamic Imports: Utilize dynamic imports for conditionally loading modules for theme management based on time.
// Create theme.mjs, which exports functions that manage the application's theme. The function setLightTheme and 
// setDarkTheme set and log the theme being set to the console.
// Create app.js. Implement an async function, loadConfig, that dynamically imports the theme.mjs and decides which 
// theme function to call based on the current hour (e.g., light theme before 6 PM, dark theme afterward).

async function loadConfig() {
    const hour = new Date().getHours(); //this gets the time right now then extracts the exact number of hours

    const moduleTheme = await import('./theme.mjs'); //imports the theme.mjs, await because async

    if (hour < 18) {
        moduleTheme.setLightTheme(); //if the time is before 6pm, set light theme
    } else {
        moduleTheme.setDarkTheme(); //if the time is after 6pm, set dark theme
    }
}

loadConfig(); //call function to apply theme