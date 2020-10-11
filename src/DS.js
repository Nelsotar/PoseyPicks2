class DS extends Phaser.Scene{

  constructor(){
    super({key:'DS'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'd', 'dAnim');
    initialDialogue(this, 26, "See ya, bus stop! You don't own me!!", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 0, "Posey started to leave...", "narrator");
    if(this.clickCounter === 4 && !this.activated[0]){
      this.activated[0] = true;
      destroyMusic();
      nextPicDialogue(this,'d', 'dAnim2', 0, "...but then...", "narrator");
    }
    checkNextScene(this, 4, "DS", "DS3");
  }
}
