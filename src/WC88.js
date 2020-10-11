class WC88 extends Phaser.Scene{

  constructor(){
    super({key:'WC88'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wc2', 'wc2Anim');
    initialDialogue(this, 1, "Good.", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 20, "Posey! That was...", "cookleigh");
    displayButtons(this, 3, 'brownButton', 'WC88', ['WC90','WC89'], ["...really helpful!", "...really helpful?"]);
  }
}
