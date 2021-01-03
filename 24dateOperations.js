let date = new Date(2021, 0, 3);

console.log(date);

date.setDate(4);

console.log(date);

Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + days);
    return this;
};

console.log(date.addDays(5))
