// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42); 
}
function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264; 
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // 1 block is 264 feet
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;

    if (distance <= 400) {
        fare = 0; // First 400 feet are free
    } else if (distance <= 2000) {
        fare = (distance - 400) * 0.02; // 2 cents per foot for distance over 400 feet
    } else if (distance <= 2500) {
        fare = 25; // Flat fare for distance between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }

    return fare;
}




