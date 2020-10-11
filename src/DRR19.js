class DRR19 extends Phaser.Scene{

  constructor(){
    super({key:'DRR19'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "victory");
    artBox(this, 'drr3', 'drr3Anim5');
    createMultiButtonsEnd(this, 'smallButton', 'DRR19', ['x1', 'credits'], ['Restart', 'Credits']);
  }

  update(){
  }
}
