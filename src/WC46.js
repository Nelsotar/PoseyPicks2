class WC46 extends Phaser.Scene{

  constructor(){
    super({key:'WC46'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmv1', 'wcmv1Anim2');
    initialDialogue(this, 5, "Hey everybody! Fish here, and in this video I'm gonna show you how to stay awake.", "videofish");

    this.timer3 = this.time.addEvent({ delay: 10000, loop: false, callback: () =>{
      this.clickCounter = 2;
    }, callbackScope: this});

    this.progressBarOutside = this.add.graphics();
    this.progressBarOutside.fillStyle(0xb8b8b8, 0.4);
    this.progressBarOutside.fillRect(621, 509, 765, 26);
    this.progressBarOutside.setDepth(1);
    this.zone = this.add.zone(621, 509, 765, 26).setOrigin(0).setInteractive();
    this.zone.setDepth(1)
    this.progressBarInside = this.add.graphics();
    this.progressBarInside.fillStyle(0xd1151b, 1);
    this.progressBarInside.fillRect(621, 509, 3 * gameState.counter, 26);
    this.progressBarInside.setDepth(1);

    this.zone.on('pointerup', function(){
      this.destroyTimers();
      destroyMusic();
      this.sound.play('boop');
      nextScene(this, 'WC46', 'WC40', false);
    }, this);

    this.pause = this.add.image(563,500,'wcmv_giantpauseicon').setOrigin(0);
    this.pause.setScale(0.1);
    this.pause.setDepth(1);
    this.pause.setInteractive();
    this.pause.on('pointerup', function(){
      this.destroyTimers();
      this.artBox.anims.stop();
      this.pause2 = this.add.image(874,218,'wcmv_giantpauseicon').setOrigin(0);
      this.pause2.setScale(0.4);
      destroyMusic();
      this.sound.play('boop');
      this.timer4 = this.time.addEvent({delay:500, loop:false, callback: () =>{
        nextScene(this, 'WC46', 'WC43', false);
      }, callbackScope:this});
    }, this);

    this.timer = this.time.addEvent({ delay: 2000, loop: true, callback: () =>{
      gameState.counter++;
      this.progressBarInside.clear();
      this.progressBarInside.fillStyle(0xd1151b, 1);
      this.progressBarInside.fillRect(621, 509, 3 * gameState.counter, 26);
      this.zone.setSize(765 - (3 * gameState.counter), 26);
      this.zone.setX(621 + (3 * gameState.counter));
    }, callbackScope: this});
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      this.timer3.destroy();
      this.artBox.destroy();
      artBox(this, 'wcmv1', 'wcmv1Anim3');
      nextDialogue(this, 5, "But first we should start with *why* we need to sleep as living organisms,", "videofish");
      this.timer2 = this.time.addEvent({ delay: 10000, loop: false, callback: () =>{
        this.clickCounter = 4;
      }, callbackScope: this});
    }
    if(this.clickCounter === 4 & !this.activated[1]){
      this.timer2.destroy();
      this.activated[1] = true;
      nextDialogue(this, 5, "and then we can understand the process by which-", "videofish");
      this.timer3 = this.time.addEvent({ delay: 10000, loop: false, callback: () =>{
        this.clickCounter = 6;
      }, callbackScope: this});
    }

    if(this.clickCounter >= 6){
      this.destroyTimers();
      nextScene(this, 'WC46', 'WC48');
    }
  }

  destroyTimers(){
    if(this.timer != null){
      this.timer.destroy();
    }
    if(this.timer2 != null){
      this.timer2.destroy();
    }
    if(this.timer3 != null){
      this.timer3.destroy();
    }
    if(this.timer4 != null){
      this.timer4.destroy();
    }
  }
}
