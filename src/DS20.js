class DS20 extends Phaser.Scene{

  constructor(){
    super({key:'DS20'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'ds5', 'ds5Anim3');
    initialDialogue(this, 3, "Okaaaaay.", "posey");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      this.cameras.main.fadeOut(1500);
      this.cameras.main.once('camerafadeoutcomplete', ()=>{
        nextScene(this, "DS20", "DS21");
      });    
    }

  }
}
