class WC94 extends Phaser.Scene{

  constructor(){
    super({key:'WC94'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "timewarp");
    this.openEye = this.sound.add("chirp");
    this.rEyeVolume = 0.2;
    this.lEyeVolume = 0.2;
    this.artBox = this.add.image(0,0, "cwake_base").setOrigin(0);
    this.lEye = this.add.sprite(0,0, "cwake_Leye").setOrigin(0);
    this.lEye.setFrame(0);
    this.lEyeCounter = 0;
    this.rEye = this.add.sprite(0,0, "cwake_Reye").setOrigin(0);
    this.rEye.setFrame(0);
    this.rEyeCounter = 0;

    this.mouth = this.add.sprite(0,0, "cwake_mouth").setOrigin(0);

    this.lEyeZone = this.add.zone(517, 404, 134, 117).setOrigin(0);
    this.lEyeZone.setInteractive();
    this.lEyeZone.on("pointerdown", ()=>{
      if(this.lEyeCounter < 3){
        this.openEye.setVolume(this.lEyeVolume);
        this.lEyeVolume += 0.2;
        this.openEye.play();
        this.lEyeCounter++;
        this.lEye.setFrame(this.lEyeCounter);
        this.updateMouth();
      }
    });

    this.rEyeZone = this.add.zone(1257, 393, 134, 117).setOrigin(0);
    this.rEyeZone.setInteractive();
    this.rEyeZone.on("pointerdown", ()=>{
      if(this.rEyeCounter < 3){
        this.openEye.setVolume(this.rEyeVolume);
        this.rEyeVolume += 0.2;
        this.openEye.play();
        this.rEyeCounter++;
        this.rEye.setFrame(this.rEyeCounter);
        this.updateMouth();
      }
    });
    initialDialogue(this, 0, "Click on Cookleigh's eyes to prove her incredible wakefulness!!", "narrator");
  }

  update(){
    if(this.rEyeCounter === 3 && this.lEyeCounter === 3 && !this.activated[0]){
      this.activated[0] = true;
      this.time.addEvent({delay: 1000, repeat:false, callbackScope: this, callback:()=>{
        nextScene(this, 'WC94', 'WC95');
      }});
    }
  }

  updateMouth(){
    let totalFrames = this.rEyeCounter + this.lEyeCounter;
    if(totalFrames === 2){
      this.mouth.setFrame(1);
    }
    else if(totalFrames === 4){
      this.mouth.setFrame(2);

    }
    else if(totalFrames === 6){
      this.mouth.setFrame(3);
    }
  }
}
