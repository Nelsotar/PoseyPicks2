class WC70 extends Phaser.Scene{

  constructor(){
    super({key:'WC70'});
  }

  preload(){

  }

  create(){
    playEndSound(this, "victory");

    this.neigh = this.sound.add('neigh');
    this.neigh2 = this.sound.add('neigh');
    this.neigh3 = this.sound.add('neigh');

    this.controlNeigh = [];


    artBox(this, 'wcm3', 'wcm3Anim');
    let buttonsArray = createMultiButtonsEnd(this, 'smallButton', 'WC70', ['x1', 'credits'], ['Restart','Credits']);
    for(let i = 0; i < buttonsArray.length; i++){
      buttonsArray[i].once('pointerdown', this.stopNeighing, this);
    }
  }

  update(){
    if(this.artBox.anims.currentFrame.index === 3 && !this.controlNeigh[0]){
      this.controlNeigh[0] = true;
      this.controlNeigh[1] = false;
      this.neigh.play();
    }
    else if(this.artBox.anims.currentFrame.index === 5 && !this.controlNeigh[1]){
      this.controlNeigh[1] = true;
      this.controlNeigh[2] = false;
      this.neigh2.play();
    }
    else if(this.artBox.anims.currentFrame.index === 7 && !this.controlNeigh[2]){
      this.controlNeigh[2] = true;
      this.controlNeigh[0] = false;
      this.neigh3.play();
    }
  }

  stopNeighing(){
    this.neigh.stop();
    this.neigh2.stop();
    this.neigh3.stop();
  }
}
