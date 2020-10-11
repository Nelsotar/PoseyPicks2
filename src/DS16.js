class DS16 extends Phaser.Scene{

  constructor(){
    super({key:'DS16'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "defeat");
    artBox(this, 'ds5', 'ds5Anim');
    createMultiButtonsEnd(this, 'smallButton', 'DS16', ['x1', 'credits'], ['Restart', 'Credits']);
  }

  update(){
  }
}
