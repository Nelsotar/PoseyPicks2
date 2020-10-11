class DS24 extends Phaser.Scene{

  constructor(){
    super({key:'DS24'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("meow");
    artBox(this, 'ds1', 'ds1Anim3');
    initialDialogue(this, 0, "Posey showed her cat Milky to the demon.", "narrator");
  }

  update(){
    checkNextDialogue(this, 2, 9, "Awwww! This is the best day!!", "rd");
    checkNextScene(this, 3, "DS24", "DS10");
  }
}
