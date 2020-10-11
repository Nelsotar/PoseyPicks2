class DRR13 extends Phaser.Scene{

  constructor(){
    super({key:'DRR13'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "victory");
    artBox(this, 'drr4', 'drr4Anim5');
    this.chung = this.add.sprite(1024, 184, "chung_small").setOrigin(0);
    this.chung.anims.play("chungAnim");

    createMultiButtonsEnd(this, 'smallButton', 'DRR13', ['x1', 'credits'] , ['Restart', 'Credits']);

  }

  update(){
  }
}
