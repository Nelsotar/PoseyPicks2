class DS21 extends Phaser.Scene{

  constructor(){
    super({key:'DS21'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'ds5', 'ds5Anim4');
    this.activated[0] = false;
    this.cameras.main.fadeIn(1500);
    this.cameras.main.once('camerafadeincomplete', ()=>{
      this.clickCounter = 0;
      initialDialogue(this, 22, "Good morning class! Welcome to the thrilling dreamland of preparing to be a useful person.", "salton");
      this.activated[0] = true;
    });
  }

  update(){
    checkNextDialogue(this, 2, 2, "Mrrm.", "posey", this.activated[0]);
    checkNextScene(this, 3, "DS21", "DS22", this.activated[0]);
  }
}
