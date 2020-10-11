class W43 extends Phaser.Scene{

  constructor(){
    super({key:'W43'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wbb3', 'wbb3Anim2');
  }

  update(){
    if(this.artBox.anims.currentFrame.index === 1 && !this.activated[1]){
      this.activated[1] = true;
      this.sound.play('boop');
      this.timer = this.time.addEvent({ delay: 1000, loop: false, callback: () =>{
        this.artBox.anims.stop();
        this.artBox.setFrame(3);
        this.sound.play('woop');
        this.legs = this.add.sprite(0,0, 'legs').setOrigin(0);
      }});
    }
    if(this.legs != null && this.legs.x < 1120){
      this.legs.setX(this.legs.x + 7);
    }
    else if(this.legs != null && this.legs.x >= 1120 && !this.activated[0]){
      this.clickCounter = 0;
      this.activated[0] = true;
      initialDialogue(this, 0, "CRITICAL BOOP!! Hot Bear's legs went home to reflect on their behaviour.", 'narrator');
    }
    if(this.clickCounter === 2 && this.activated[0]){
      nextScene(this, 'W43', 'W35');
    }
  }
}
