class WC9 extends Phaser.Scene{

  constructor(){
    super({key:'WC9'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmb1', 'wcmb1Anim');
    initialDialogue(this, 19, "How about this chunk of me? Will that work?", "cookleigh");
  }

  update(){
    if(this.artBox.anims.currentFrame.index === 1 && !this.activated[2]){
      this.activated[2] = true;
      this.sound.play("chomp");
    }
    if(this.clickCounter == 2 && !this.activated[0]){
      this.activated[0] = true;
      nextDialogue(this, 42, "Hello", "cloneleigh");
    }
    if(this.clickCounter == 4 && !this.activated[1]){
      this.activated[1] = true;
      destroyText(this);
      createMultiButtons(this, 'smallButton', 'WC9', ['WC16', 'WC10'], ['This is great!', 'What have we done']);
    }
  }
}
