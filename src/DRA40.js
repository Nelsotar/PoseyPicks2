class DRA40 extends Phaser.Scene{

  constructor(){
    super({key:'DRA40'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("boop");
    destroyAndPlayMusic(this, "bgm_cookleigh");
    artBox(this, 'dra6e1', 'dra6e1Anim4');
    initialDialogue(this, 19, "Hi!! Posey's my best friend in the world!", "cookleigh");
  }

  update(){
    if(broom && this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      nextDialogue(this, 20, "Even though sometimes she sits next to a broom instead of me.", "cookleigh");
  }else if(this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      this.clickCounter += 2;
    }
    checkNextDialogue(this, 3, 19, "She's sweet and funny and always ready to help me out. Please hire her, or I'll cry.", "cookleigh");
    checkNextScene(this, 4, 'DRA40','DRA36');
  }
}
