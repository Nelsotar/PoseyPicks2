class DRR12 extends Phaser.Scene{

  constructor(){
    super({key:'DRR12'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "dream");
    artBox(this, 'drr3', 'drr3Anim');
    this.chung = this.add.sprite(1024, 184, "chung_small").setOrigin(0);
    createMultiButtonsEnd(this, 'smallButton', 'DRR12', ['x1', 'credits'] , ['Restart', 'Credits']);
  }

  update(){
    if(this.chung.y > -500){
      this.chung.setY(this.chung.y - 5);
    }
  }
}
