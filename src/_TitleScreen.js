class TitleScreen extends Phaser.Scene{

  constructor(){
    super({ key: 'TitleScreen' });
  }

  preload(){
  }

  create(){
   setUpScene(this);
   artBox(this, "titleScreen", "titleAnim");


  }

  update(){
    if(!this.artBox.anims.isPlaying && !this.activated[0]){
      this.activated[0] = true;
       destroyAndPlayMusic(this, "bgm_title");
       this.time.addEvent({delay: 669, loop:false, callbackScope: this, callback:()=>{
         this.artBox.anims.play("titleAnim2");
       }});
       this.time.addEvent({delay: 1332, loop:false, callbackScope: this, callback:()=>{
         this.artBox.anims.play("titleAnim3");
         this.clickCounter = 0;
         this.activated[1] = true;
       }});
    }
    if(this.clickCounter === 1 && this.activated[1]){
      this.sound.play("startGame");
      nextScene(this, 'TitleScreen', "x1", false);
    }
  }
}
