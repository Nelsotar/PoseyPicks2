class DRR2 extends Phaser.Scene{

  constructor(){
    super({key:'DRR2'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "timewarp");

    artBox(this, 'drr_transition', 'drr_transitionAnim');
    this.artBox2 = this.add.sprite(0, 723, 'drr_transition_bottom').setOrigin(0);

  }

  update(){
    if(this.clickCounter >= 1 && !this.activated[0]){
      nextScene(this, "DRR2", "DRR3");
    }
  }
}
