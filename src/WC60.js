class WC60 extends Phaser.Scene{

  constructor(){
    super({key:'WC60'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "victory");
    artBox(this, 'wcm6', 'wcm6Anim4');
    createMultiButtonsEnd(this, 'smallButton', 'W27', ['x1', 'credits'], ['Restart','Credits']);
  }

  update(){
  }
}
