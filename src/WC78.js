class WC78 extends Phaser.Scene{

  constructor(){
    super({key:'WC78'});
  }

  preload(){

  }

  create(){
    destroyMusic();
    playEndSound(this, "lullaby");
    artBox(this, 'wcl2', 'wcl2Anim3');
    createMultiButtonsEnd(this, 'smallButton', 'WC78', ['x1', 'credits'], ['Restart','Credits']);
  }

  update(){
  }
}
