class W29 extends Phaser.Scene{

  constructor(){
    super({key:'W29'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb2', 'wb2Anim5');
    initialDialogue(this, 16, "Ohh, you think you're tough, huh?? With your fuzzy baby bunny muscles?? Let's go then!!", "hb");
  }

  update(){
    checkNextScene(this, 2, 'W29', 'W30');
  }
}
