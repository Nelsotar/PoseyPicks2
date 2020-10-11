class WC65 extends Phaser.Scene{

  constructor(){
    super({key:'WC65'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "victory");
    artBox(this, 'wbcms1', 'wcms1Anim5');
    createMultiButtonsEnd(this, 'smallButton', 'WC65', ['x1', 'credits'], ['Restart','Credits']);
  }

  update(){
  }
}
