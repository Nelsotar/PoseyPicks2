class TB17 extends Phaser.Scene{

  constructor(){
    super({key:'TB17'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'tb2', 'tb2Anim');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 1, 'Nope', "posey");
  }

  update(){
    checkNextDialogue(this, 2, 7, "Okay. But at least think about legs today, and what they do for you. Maybe even thank a leg or two.", "legdaylisa");
    displayButtons(this, 3, 'smallButton', 'TB17', ['TB18', 'TB19'], ['Thanks, legs!', "I'll think about it"]);
  }
}
