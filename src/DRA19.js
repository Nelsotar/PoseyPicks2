class DRA19 extends Phaser.Scene{

  constructor(){
    super({key:'DRA19'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra6b', 'dra6bAnim');
    initialDialogue(this, 10, "Hmm... I'm not sure...", "rd");
  }

  update(){
    checkNextDialogue(this, 2, 0, "Posey needs to use one of her interview skills to seal the deal!", "narrator");
    displayButtons(this, 3, 'largeButton', 'DRA19', ['DRA20', 'DRA22'], ["Unstoppable Eye Contact", "Alpha & Omega Handshake"]);
  }
}
