class WC56 extends Phaser.Scene{

  constructor(){
    super({key:'WC56'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "victory");
    artBox(this, 'wcmr1', 'wcmr1Anim3');
    createMultiButtonsEnd(this, 'smallButton', 'WC56', ['x1', 'credits'], ['Restart','Credits']);
  }

  update(){
  }
}
