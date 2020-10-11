class WC59 extends Phaser.Scene{

  constructor(){
    super({key:'WC59'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "bgm_school");
    artBox(this, 'wcm6', 'wcm6Anim3');
    this.activated[0] = false;
    this.cameras.main.fadeIn(1500);
    this.cameras.main.once('camerafadeincomplete', ()=>{
      this.clickCounter = 0;
      initialDialogue(this, 22, "Hello Posey. And Cookleigh - I'm pleased to say you look very alert today!", "salton");
      this.activated[0] = true;
    });
  }

  update(){
    checkNextDialogue(this, 2, 19, "Thanks!! I feel great even though my bottom half is disintegrating.", "cookleigh", this.activated[0]);
    checkNextScene(this, 3, 'WC59', 'WC60', true, this.activated[0]);
  }
}
