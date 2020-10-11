class DRR11 extends Phaser.Scene{

  constructor(){
    super({key:'DRR11'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'drr4', 'drr4Anim4');
    this.chung = this.add.image(1921,7,"chung_big").setOrigin(0);
    initialDialogue(this, 1, "...Oh I see a dog though!", "posey");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.sound.play("textProceed");
      this.activated[0] = true;
      this.textContents.destroy();
      destroyAndPlayMusic(this, "bgm_chung");
    }

    if(this.chung.x > 1108 && this.clickCounter >= 2){
      this.chung.setX(this.chung.x - 5);
    }
    else if(this.chung.x <= 1108 &&this.clickCounter >= 2){
      this.activated[1] = true;
    }

    if(this.activated[1] && !this.activated[2]){
      this.portrait.setFrame(29);
      this.textContents.destroy();
      this.activated[2] = true;
      this.clickCounter = 0;
      if(drChung[0]){
        this.textContents = typeWriter(this, "Ah, hi again Posey. I'm sorry, but our time is up. I'll see you next week.", "chung");
      }else{
        this.textContents = typeWriter(this, "Hi Posey, I'm Dr. Chung. I know change is scary, but if you take the time to adapt, it's going be alright.", "chung");
      }
    }

    if(this.clickCounter >= 2 && this.activated[2]){
      if(drChung[0]){
        nextScene(this, "DRR11", "DRR12");
      }
      else{
        drChung[0] = true;
        nextScene(this, "DRR11", "DRR13");
      }
    }
  }
}
