class W7 extends Phaser.Scene{

  constructor(){
    super({key:'W7'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb1', 'wb1Anim3');
    this.sound.play("woop");
  }

  update(){
    if(!this.artBox.anims.isPlaying){
      this.artBox.anims.play('wb1Anim4', true);
      this.activated[2] = true;
    }
    if(!this.activated[0] && this.activated[2]){
      this.activated[0] = true;
      initialDialogue(this, 15, "HAHA, what the heck? Posey's so lonely that she talks to brooms!!", "hb");
      this.clickCounter = 0;
    }
    else if(this.clickCounter == 2 && !this.activated[1] && this.activated[2]){
      this.activated[1] = true;
      destroyText(this);
      createMultiButtons(this, 'smallButton', 'W7', ['W28', 'W8'], ['Shut up, Hot Bear!!', '(Ignore him)']);
    }
  }
}
