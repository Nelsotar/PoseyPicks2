class WC79 extends Phaser.Scene{

  constructor(){
    super({key:'WC79'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wc1', 'wc1Anim4');
    initialDialogue(this, 21, "I don't think Mr. Salton likes me. I fell asleep in class the other day, but it's not that I was bored!", "cookleigh");
  }

  update(){
    checkNextDialogue(this, 2, 21, "I was just really comfortable.", "cookleigh");
    displayButtons(this, 3, 'smallButton', 'WC79', ['WC80', 'WC80'], ['Uh oh', 'Eep']);
  }
}
