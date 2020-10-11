class DRA20 extends Phaser.Scene{

  constructor(){
    super({key:'DRA20'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyMusic();
    this.bgSound = this.sound.add("skill");
    this.bgSound.play({loop:true});
    artBox(this, 'dra9', 'dra9Anim');
    initialDialogue(this, 1, "Unstoppable Eye Contact!!!", "posey");
  }

  update(){

    if(this.clickCounter == 2 && !this.activated[0]){
      this.activated[0] = true;
      this.bgSound.stop();
      this.sound.play("woop");
      this.artBox.anims.play("dra9Anim2");
      nextDialogue(this, 0, "Cool!", "narrator", false);
    }
    checkNextScene(this, 3, "DRA20", "DRA21");
  }
}
