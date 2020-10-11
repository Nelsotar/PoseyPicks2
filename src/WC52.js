class WC52 extends Phaser.Scene{

  constructor(){
    super({key:'WC52'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm4', 'wcm4Anim');
    initialDialogue(this, 32, "Look, I get what you're feeling. So tell you what, how about we make one fun stop before school?", "bus");
  }

  update(){
    checkNextScene(this, 2, 'WC52', 'WC53');
  }
}
