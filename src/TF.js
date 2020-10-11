class TF extends Phaser.Scene{

  constructor(){
    super({key:'TF'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    gameState.tf = true;

    artBox(this, 'tf', 'tfAnim');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 1, 'Hi, how are you, fish?', "posey");
  }

  update(){
    checkNextDialogue(this, 2, 5, "Pretty good. By the way, do you like my outfit? It's like a sock, but for my whole body!", "fish");
    displayButtons(this, 3, 'smallButton', 'TF', ['TF2', 'TF4'], ["It's great","It's not great"]);
  }
}
