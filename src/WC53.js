class WC53 extends Phaser.Scene{

  constructor(){
    super({key:'WC53'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm4', 'wcm4Anim2');
    initialDialogue(this, 19, "Oh that'd be awesome!!", "cookleigh");
  }

  update(){
    checkNextDialogue(this, 2, 32, "Okay, what fun place do ya wanna go to?", "bus");
    if(this.clickCounter === 4 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);

      this.button1 = this.add.sprite(496, 725, 'smallButton').setOrigin(0);
      variableButtonFunction(this, this.button1, "A friend's house", ()=>{
        this.sound.play("horn");
        let cover = this.add.image(0,0,'cover2').setOrigin(0);
        cover.setAlpha(0.1);
        cover.setInteractive();
        this.activated[5] = true;
      });

      this.button2 = this.add.sprite(496, 900, 'smallButton').setOrigin(0);
      variableButtonFunction(this, this.button2, 'Behind a rock', ()=>{
        this.sound.play("horn");
        let cover = this.add.image(0,0,'cover2').setOrigin(0);
        cover.setAlpha(0.1);
        cover.setInteractive();
        this.activated[4] = true;
      });

    }

    if(this.activated[5] && !this.activated[2]){
      this.button1.destroy();
      this.button2.destroy();
      this.activated[2] = true;
      this.clickCounter = 0;
      initialDialogue(this, 32, "You got it! Next stop, a friendly friend's housely house!", "bus");
    }

    if(this.activated[4] && !this.activated[3]){
      this.button1.destroy();
      this.button2.destroy();
      this.activated[3] = true;
      this.clickCounter = 0;
      initialDialogue(this, 32, "Uhh, okay! Next stop, that rock over there!", "bus");
    }

    if(this.clickCounter === 2 && this.activated[2] && !this.activated[6]){
      this.activated[6] = true;
      this.sound.play("textProceed");
      this.cameras.main.fadeOut(1500);
      this.cameras.main.on('camerafadeoutcomplete', () => {
        nextScene(this, 'WC53', 'WC61', false);
      });
    }

    if(this.clickCounter === 2 && this.activated[3] && !this.activated[7]){
      this.activated[7] = true;
      this.sound.play("textProceed");
      this.cameras.main.fadeOut(1500);
      this.cameras.main.on('camerafadeoutcomplete', () => {
        nextScene(this, 'WC53', 'WC54', false);
      });
    }
  }
}
