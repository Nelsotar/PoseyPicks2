class DS22 extends Phaser.Scene{

  constructor(){
    super({key:'DS22'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "victory");
    artBox(this, 'ds5', 'ds5Anim5');
    createMultiButtonsEnd(this, 'smallButton', 'DS22', ['x1', 'credits'], ['Restart', 'Credits']);
  }

  update(){
  }
}
