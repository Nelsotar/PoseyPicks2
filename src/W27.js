class W27 extends Phaser.Scene{

  constructor(){
    super({key:'W27'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "victory");
    artBox(this, 'wb5', 'wb5Anim5');
    createMultiButtonsEnd(this, 'smallButton', 'W27', ['x1', 'credits'], ['Restart','Credits']);
  }

  update(){
  }
}
