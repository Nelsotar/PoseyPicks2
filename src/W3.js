class W3 extends Phaser.Scene{

  constructor(){
    super({key:'W3'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'w1', 'w1Anim3');
    this.overlay = this.add.sprite(0,0,'bus').setOrigin(0);
    this.overlay.anims.play('busAnim', true);

    initialDialogue(this, 1, "It's okay! I know bus life is stressful. I don't mind waiting.", "posey");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[1]){
      this.activated[1] = true;
      this.overlay.anims.stop();
      this.overlay.anims.play('busAnim2');
      nextDialogue(this, 34, "*Sigh* Thanks, kid. Sometimes I wish I'd been born a go-kart or a lawnmower or something.", "bus");
    }
    checkNextDialogue(this, 3, 32, "But! I have a job to do - so let's get going!", "bus");
    if(this.clickCounter === 6 && !this.activated[0]){
      this.sound.play("textProceed");
      this.sound.play("horn");
      this.activated[0] = true;
      this.cameras.main.fadeOut(1500);
      this.cameras.main.once('camerafadeoutcomplete', () => {
        nextScene(this, 'W3', 'W5', false);
      });
    }
  }
}
