class DS17 extends Phaser.Scene{

  constructor(){
    super({key:'DS17'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'x1', 'x1Anim2');
    initialDialogue(this, 27, "I don't wannaaaaaaa!", "posey");
  }

  update(){
    checkNextScene(this, 2, "DS17", "DS18");
  }
}
