class W28 extends Phaser.Scene{

  constructor(){
    super({key:'W28'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wbb3', 'wbb3Anim');
    initialDialogue(this, 27, "Shut up, Hot Bear!!", "posey");
  }

  update(){
    checkNextScene(this, 2, 'W28', 'W29');
  }
}
