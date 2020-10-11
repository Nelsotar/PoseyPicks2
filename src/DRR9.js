class DRR9 extends Phaser.Scene{

  constructor(){
    super({key:'DRR9'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'drr4', 'drr4Anim2');
    initialDialogue(this, 13, "Maybe you would know if you went to school.", "rd");
    this.cameras.main.on('camerafadeoutcomplete', () => {
      nextScene(this, "DRR9", "DRR10", false);
    });
  }

  update(){
    checkNextDialogue(this, 2, 2, "Okaaay I geeeeet iiiiittttttt", "posey");
    checkNextDialogue(this, 3, 0, "Posey finally went to school...", "narrator");
    if(this.clickCounter === 6 && !this.activated[0]){
      this.activated[0] = true;
      this.cameras.main.fadeOut(2000);
    }
  }
}
