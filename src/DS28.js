class DS28 extends Phaser.Scene{

  constructor(){
    super({key:'DS28'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "victory");
    artBox(this, 'ds2', 'ds2Anim4');
    createMultiButtonsEnd(this, 'smallButton', 'DS28', ['x1', 'credits'], ['Restart', 'Credits']);
  }

  update(){
  }
}
