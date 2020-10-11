class WC36 extends Phaser.Scene{

  constructor(){
    super({key:'WC36'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm5', 'wcm5Anim3');
    initialDialogue(this, 3, "Cookleigh, you have to go! You're always my partner for everything, I need you there!", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC36', 'WC37');
  }
}
