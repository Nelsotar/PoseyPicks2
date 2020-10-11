class W16 extends Phaser.Scene{

  constructor(){
    super({key:'W16'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb3', 'wb3Anim4');
    initialDialogue(this, 19, "Well, no, but that's okay.", "cookleigh");
  }

  update(){
    checkNextDialogue(this, 2, 1, "Cool!!", "posey");
    checkNextScene(this, 3, 'W16', 'W17');
  }
}
