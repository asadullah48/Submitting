"use strict";
function manufacturingCar(manufacturer, model, ...options) {
    let motorCar = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return motorCar;
}
console.log(manufacturingCar("Toyota", "Cross", ["Year", "2024"], ["color", "black"]));
