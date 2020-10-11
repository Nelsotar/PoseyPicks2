class W17 extends Phaser.Scene{

  constructor(){
    super({key:'W17'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "victory");
    artBox(this, 'wb3', 'wb3Anim5');
    createMultiButtonsEnd(this, 'smallButton', 'W17', ['x1', 'credits'], ['Restart', 'Credits']);
  }

  update(){
  }
}
