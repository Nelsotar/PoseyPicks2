class DS11 extends Phaser.Scene{

  constructor(){
    super({key:'DS11'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'ds1', 'ds1Anim');
    createMultiButtons(this, 'largeButton', 'DS11', ['DS12'], ['Make Excuse Blast'])
  }

  update(){
    if(drChung[0] && !drChung[1]){
      checkUp(this);
    }
  }
}
