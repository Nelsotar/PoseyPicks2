class WC44 extends Phaser.Scene{

  constructor(){
    super({key:'WC44'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_school');
    artBox(this, 'wc2', 'wc2Anim');
    this.cameras.main.fadeIn(1500);
    this.cameras.main.once('camerafadeincomplete', ()=>{
      this.clickCounter = 0;
      initialDialogue(this, 23, "Ah, hello Posey and Cook-", "salton");
      this.activated[1] = true;
    });

  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0] && this.activated[1]){
      this.activated[0] = true;
      this.sound.play("boop");
      destroyText(this);
      this.artBox.anims.stop();
      destroyAndPlayMusic(this, 'bgm_video');
      this.add.image(960,350, 'wcmv_giantpauseicon');
      this.time.addEvent({delay: 1000, loop:false, callbackScope:this, callback: () =>{
        nextScene(this, 'WC44', 'WC45', false);
      }});
    }

  }
}
