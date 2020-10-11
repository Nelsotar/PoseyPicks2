class W33 extends Phaser.Scene{

  constructor(){
    super({key:'W33'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("chirp");
    artBox(this, 'wbb1', 'wbb1Anim3');
    initialDialogue(this, 0, "Posey has special leg knowledge from her leg pamphlet. How will she use it?", "narrator");
  }

  update(){
    displayButtons(this, 2, 'largeButton', 'W33', ['W36', 'W34'], ['Relate to Hot Bear about legs', "Attack Hot Bear's leg weak-points"]);
  }
}
