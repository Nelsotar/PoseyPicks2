class DR5 extends Phaser.Scene{

  constructor(){
    super({key:'DR5'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'drr1', 'drr1Anim3');
    initialDialogue(this, 0, "Posey hid behind a rock.", "narrator");
  }

  update(){
    checkNextDialogue(this, 2, 1, "HAHA the demon will never find me here!", "posey");
    checkNextScene(this, 3, "DR5", "DRR");
  }
}
