class W44 extends Phaser.Scene{

  constructor(){
    super({key:'W44'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'w1', 'w1Anim3');
    this.overlay = this.add.sprite(0,0,'bus').setOrigin(0);
    this.overlay.anims.play('busAnim', true);

    initialDialogue(this, 1, "I understand. Please try to be more on time though. I really depend on you!", "posey");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.overlay.anims.play('busAnim2');
      this.activated[0] = true;
      nextDialogue(this, 34, " I'll do better. I swear it on my big beautiful wheels. But let's go before I make you even more late!", "bus");
    }
    if(this.clickCounter === 4 && !this.activated[1]){
      this.sound.play("textProceed");
      this.sound.play("horn");
      this.activated[1] = true;
      this.cameras.main.fadeOut(1500);
      this.cameras.main.on('camerafadeoutcomplete', () => {    
        nextScene(this, 'W44', 'W5', false);
      });
    }
  }
}
