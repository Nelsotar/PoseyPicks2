class DRA31 extends Phaser.Scene{

  constructor(){
    super({key:'DRA31'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra6b', 'dra6bAnim2');
    initialDialogue(this, 3, "Ahh, err, emmm.... well I, you, ah... ahaeeeee....?", "posey");
  }

  update(){
    if(!this.artBox.anims.isPlaying){
      this.artBox.anims.play('dra6bAnim3');
      this.activated[0] = true;
    }
    if(this.clickCounter >= 2 && this.activated[0]){
      nextScene(this, "DRA31", "DRA32");
    }
  }
}
