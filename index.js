// Write your code in this file!

const currentUser = "Bernard"
const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!"
const excitedWelcomeMessage = welcomeMessage.toUpperCase()
const shortGreeting = welcomeMessage.split(' ')[0] + ", " + currentUser.substring(0, 1).toUpperCase() + "!"