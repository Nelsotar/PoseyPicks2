class W37 extends Phaser.Scene{

  constructor(){
    super({key:'W37'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wbb2', 'wbb2Anim3');
    initialDialogue(this, 15, "What!! I had no idea. I'm sorry I was such a leghole. Let's be friends.", "hb");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      this.sound.play("victory");
      nextDialogue(this, 1, "Yes, leg's.", "posey");
    }
    checkNextScene(this, 3, 'W37', 'W38');
  }
}
