class WC29 extends Phaser.Scene{

  constructor(){
    super({key:'WC29'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "defeat");
    artBox(this, 'wcmf4', 'wcmf4Anim2');
    createMultiButtonsEnd(this, 'smallButton', 'WC29', ['x1', 'credits'], ['Restart','Credits']);
  }

  update(){
  }
}
