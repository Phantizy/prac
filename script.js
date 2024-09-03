// script.js

// Define some settings
const settings = {
    speed: 0.8,
    color: "#00ff00",
    displayOutline: true,
    shape: 'circle',
};

// Function to draw a shape (dummy function for example)
function drawShape() {
    console.log(`Drawing a ${settings.shape} with speed ${settings.speed}, color ${settings.color}, and outline ${settings.displayOutline ? 'enabled' : 'disabled'}.`);
}

// Export settings and drawShape function if using ES6 Modules (for example purpose, not needed in plain script)
export { settings, drawShape };