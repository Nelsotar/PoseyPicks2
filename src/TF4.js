class TF4 extends Phaser.Scene{

  constructor(){
    super({key:'TF4'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'tf', 'tfAnim4');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 3, "I'm sorry, but it's not working for me. It just looks like you got stuck in some kinda tube.", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 5, "Hmm, thanks for being honest. I actually am stuck in here, but I like it. It feels like I'm wearing a hug.", "fish");
    checkNextScene(this, 3, "TF4", "TF5");
  }
}
