class WC15 extends Phaser.Scene{

  constructor(){
    super({key:'WC15'});
  }

  preload(){

  }

  create(){
    destroyMusic();
    playEndSound(this, "camera");
    this.camera = this.sound.add("camera");
    this.sfx[0].on("complete", ()=>{
      playEndSound(this, "lullaby");
    });

    artBox(this, 'wcmb3', 'wcmb3Anim3');
    createMultiButtonsEnd(this, 'smallButton', 'WC15', ['x1', 'credits'], ['Restart','Credits']);
  }

  update(){
  }
}
