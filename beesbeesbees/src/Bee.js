var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.job = 'keep on growing';
  this.color = 'yellow';
};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;


