class TB21 extends Phaser.Scene{

  constructor(){
    super({key:'TB21'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'tb2', 'tb2Anim4');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 1, 'I dunno, I think arms are cooler than legs.', "posey");
  }

  update(){
    checkNextDialogue(this, 2, 8, "H-How can you say that...? If we didn't evolve legs, we'd still just be floatin' around in the sea!", "legdaylisa");
    checkNextScene(this, 3, 'TB21', 'TB22');
  }
}
