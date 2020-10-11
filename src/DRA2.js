
class DRA2 extends Phaser.Scene{

  constructor(){
    super({key:'DRA2'});
  }

  preload(){

  }

  create(){

    destroyAndPlayMusic(this, 'bgm_cityloop');
    setUpScene(this);
    artBox(this, 'dra2', 'dra2Anim');
    this.artBox.setAlpha(0);

  }

  update(){
    if(drChung[0] && !drChung[1]){
      checkUp(this);
    }
    if(this.artBox.alpha === 1.0 && ((drChung[0] && drChung[1]) || (!drChung[0] && !drChung[1])) && !this.activated[1]){
      this.activated[1] = true;
      this.clickCounter = 0;
      initialDialogue(this, 0, "...she arrived in the Young Professional dimension!", "narrator");
    }
    if(this.artBox.alpha < 1.0 && ((drChung[0] && drChung[1]) || (!drChung[0] && !drChung[1]))){
      this.artBox.setAlpha(this.artBox.alpha + 0.005);
    }
    else if(this.artBox.alpha === 1.0 && !this.activated[0] && this.clickCounter === 2){
      nextDialogue(this, 1, "Ahhh, no school here, just my satisfactory young professional life!!", "posey");
      this.activated[0] = true;
    }
    else if(this.clickCounter === 4 && this.activated[0]){
      nextScene(this, "DRA2", "DRA3");
    }
  }
}
