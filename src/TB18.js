class TB18 extends Phaser.Scene{

  constructor(){
    super({key:'TB18'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    gameState.legThanks = true;
    artBox(this, 'tb2', 'tb2Anim2');
    initialDialogue(this, 1, "Thank you legs!! I'm grateful for everything you do.", "posey");
  }

  update(){
    if(this.clickCounter == 2 && !this.activated[0]){
      this.sound.play("textProceed");
      this.activated[0] = true;
      this.artBox.anims.play('tb2Anim3', true);
      this.sound.play("woop");
    }
    if(this.clickCounter == 3 && !this.activated[1]){
      this.activated[1] = true;
      nextScene(this, "TB18", "x1");
    }
  }
}
