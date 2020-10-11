class DRA30 extends Phaser.Scene{

  constructor(){
    super({key:'DRA30'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("woop");
    artBox(this, 'dra6', 'dra6Anim5');
    this.bunnies = this.add.sprite(962,48, 'dra6_bunnyphoto').setOrigin(0);
    this.bunnies.anims.play('dra6bunnyAnim', true);

    initialDialogue(this, 1, "Just look at this diagram!", "posey");
  }

  update(){
    if(this.clickCounter == 2 && !this.activated[0]){
      this.sound.play("textProceed");
      this.activated[0] = true;
      this.demon = this.add.sprite(1362, 148, "dra6_demonhead.png");
      this.demon.anims.play("dra6demonAnim").setOrigin(0);
      nextDialogue(this, 30, "Oh I see! My apologies. Let's continue, shall we?", "rd");
    }
    checkNextScene(this, 3, "DRA30", "DRA17");
  }
}
