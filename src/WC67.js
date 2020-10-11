class WC67 extends Phaser.Scene{

  constructor(){
    super({key:'WC67'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm2', 'wcm2Anim3');
    initialDialogue(this, 34, "BUT IT'S MY WHOLE LIFE", "bus");
  }

  update(){
    checkNextScene(this, 2, 'WC67', 'WC68');
  }
}
