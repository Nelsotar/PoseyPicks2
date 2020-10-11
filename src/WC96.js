class WC96 extends Phaser.Scene{

  constructor(){
    super({key:'WC96'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wc2', 'wc2Anim4');
    initialDialogue(this, 3, "If Mr. Salton is being like that, I think you need to talk to him about it!", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC96', 'WC97');
  }
}
