class WC39 extends Phaser.Scene{

  constructor(){
    super({key:'WC39'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyMusic();

    this.artBox = this.add.sprite(0,0, 'wcmv1').setOrigin(0);
    this.artBox.setFrame(2);
    this.artBox2 = this.add.sprite(0,0, 'wcmv1').setOrigin(0);
    this.artBox2.setFrame(3);
    this.artBox2.setAlpha(0);
    this.artBox3 = this.add.sprite(0,0, 'wcmv1').setOrigin(0);
    this.artBox3.setFrame(4);
    this.artBox3.setAlpha(0);

    this.loadingIcon = this.add.sprite(860,200,"drr_soupbowl").setOrigin(0);
    this.loadingIcon.anims.play("soupAnim3");

    this.timer5 = this.time.addEvent({delay:2000, loop:false, callbackScope: this, callback: ()=>{
      this.activated[3] = true;
      this.loadingIcon.destroy();
      destroyAndPlayMusic(this, 'bgm_video');
    }});

    this.progressBarOutside = this.add.graphics();
    this.progressBarOutside.fillStyle(0xb8b8b8, 0.4);
    this.progressBarOutside.fillRect(621, 509, 765, 26);
    this.zone = this.add.zone(621, 509, 765, 26).setOrigin(0).setInteractive();
    this.progressBarInside = this.add.graphics();
    this.progressBarInside.fillStyle(0xd1151b, 1);
    this.progressBarInside.fillRect(621, 509, 3, 26);
    this.progressBarInside.setDepth(1);

    this.pause = this.add.image(563,500,'wcmv_giantpauseicon').setOrigin(0);
    this.pause.setScale(0.1);
    this.pause.setInteractive();
    this.pause.on('pointerup', function(){
      this.destroyTimers();
      this.pause2 = this.add.image(874,218,'wcmv_giantpauseicon').setOrigin(0);
      this.pause2.setScale(0.4);
      destroyMusic();
      this.sound.play('boop');
      this.timer4 = this.time.addEvent({delay:500, loop:false, callback: () =>{
        nextScene(this, 'WC39', 'WC43', false);
      }, callbackScope:this});
    }, this);

    this.zone.on('pointerup', function(){
      this.destroyTimers();
      destroyMusic();
      this.sound.play('boop');
      nextScene(this, 'WC39', 'WC40', false);
    }, this);

    gameState.counter = 1;

    this.timer3 = this.time.addEvent({ delay: 2000, loop: true, callback: () =>{
      gameState.counter++;
      this.progressBarInside.clear();
      this.progressBarInside.fillStyle(0xd1151b, 1);
      this.progressBarInside.fillRect(621, 509, 3 * gameState.counter, 26);
      this.zone.setSize(765 - (3 * gameState.counter), 26);
      this.zone.setX(621 + (3 * gameState.counter));
    }, callbackScope: this});

  }

  update(){
    if(this.activated[3] && this.artBox2.alpha < 1 && !this.activated[0]){
      this.artBox2.setAlpha(this.artBox2.alpha + 0.005);
    }
    else if(this.activated[3] && this.artBox2.alpha >= 1 && !this.activated[4]){
      this.activated[4] = true;
      this.timer2 = this.time.addEvent({ delay: 2000, loop: false, callback: () =>{
        this.activated[0] = true;
      }, callbackScope: this});
    }

    if(this.activated[0] && this.artBox2.alpha > 0 && !this.activated[1]){
      this.artBox2.setAlpha(this.artBox2.alpha - 0.005);
    }
    else if(this.activated[0] && this.artBox2.alpha >= 0 && !this.activated[1]){
      this.activated[1] = true;
    }

    if(this.activated[1] && this.artBox3.alpha < 1){
       this.artBox3.setAlpha(this.artBox3.alpha + 0.005);
    }
    else if(this.activated[1] && this.artBox3.alpha >= 1 && !this.activated[2]){
      this.activated[2] = true;
      this.timer = this.time.addEvent({ delay: 2000, loop: false, callback: () =>{
        this.destroyTimers();
        nextScene(this, 'WC39', 'WC46');
      }, callbackScope: this});
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
    if(this.timer5 != null){
      this.timer5.destroy();
    }
  }
}
