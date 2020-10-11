class WC102 extends Phaser.Scene{

  constructor(){
    super({key:'WC102'});
  }

  preload(){

  }

  create(){
    destroyMusic();
    playEndSound(this, "lullaby");
    playEndSound(this, "zzz");
    this.sfx[1].setLoop(true);
    artBox(this, 'wc3', 'wc3Anim3');
    let buttonsArray = createMultiButtonsEnd(this, 'smallButton', 'WC102', ['x1', 'credits'], ['Restart','Credits']);
  }

  update(){
  }
}
