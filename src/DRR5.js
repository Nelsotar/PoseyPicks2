class DRR5 extends Phaser.Scene{

  constructor(){
    super({key:'DRR5'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "victory");

    artBox(this, 'drrh1', 'drrh1Anim2');
    createMultiButtonsEnd(this, 'smallButton', 'DRR5', ['x1', 'credits'], ['Restart', 'Credits']);
  }

  update(){
  }
}
