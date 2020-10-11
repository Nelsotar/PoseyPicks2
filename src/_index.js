
let gameState = {};
gameState.played = false;
gameState.hbBattleStart = false;
let drChung = [false, false];
//let legThings = false;
let bgm = null;

//er reference vars
gameState.legThanks = false;
gameState.legThings = false;
gameState.tf = false;
gameState.tb = false;
gameState.fishLikeSock = false;
let cookleigh = false;
let broom = false;
let oldDemon = false;
let interviewDemon = false;



const config = {
    type: Phaser.CANVAS,
    width: 1920,
    height: 1080,
    backgroundColor: '0xffffff',
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [BootScene, Preload, X1, TB, TB11, TB12, TB13, TB14, TB15, TB16, TB17,
      TB18, TB19, TB20, TB21, TB22,TB23, TF, TF2, TF3, TF4, TF5, DS, DS3, DS4,
      DS8, DS9, DS10, DS11, DS12, DS13, DS14, DS15, DS16, DS17, DS18, DS19,
      DS20, DS21, DS22, DS23, DS24, DS25, DS26, DS27, DS28, DR, DR2, DR5, DRR, DRR2,
      DRR3, DRR4, DRR5, DRR6, DRR7, DRR8, DRR9, DRR10, DRR11, DRR12, DRR13, DRR14, DRR15, DRR16,
      DRR17, DRR18, DRR19, DRR20, DRR21, DRR22, DRA, DRA2, DRA3, DRA4, DRA5, DRA6, DRA7, DRA8, DRA9, DRA10,
      DRA11, DRA12, DRA13, DRA14, DRA15, DRA16, DRA17, DRA18, DRA19, DRA20, DRA21, DRA22, DRA23, DRA24,
      DRA25, DRA26, DRA27, DRA28, DRA29, DRA30, DRA31, DRA32, DRA33, DRA34, DRA35, DRA36, DRA37, DRA38, DRA39,
      DRA40, DRA41, W, W2, W3, W5, W6, W7, W8, W9, W10, W11, W12, W13,
      W14, W15, W16, W17, W18, W19, W20, W21, W22, W23, W24, W25, W26, W27, W28, W29, W30, W31, W32, W33,
      W34, W35, W36, W37, W38, W39, W40, W41, W42, W43, W44, WC, WC2, WC4, WC5, WC6, WC7, WC8, WC9, WC10, WC11,
      WC12, WC13, WC14, WC15, WC16, WC17, WC18, WC19, WC20, WC21, WC22, WC23, WC24, WC25, WC26, WC27, WC28, WC29, WC30, WC31,
      WC32, WC33, WC34, WC35, WC36, WC37, WC38, WC39, WC40, WC41, WC42, WC43, WC44, WC45, WC46, WC48,
      WC49, WC51, WC52, WC53, WC54, WC55, WC56, WC57, WC58, WC59, WC60, WC61, WC62, WC63, WC64, WC65,
      WC66, WC67, WC68, WC69, WC70, WC71, WC73, WC74, WC75, WC76, WC77, WC78, WC79, WC80, WC81, WC82,
      WC83, WC84, WC85, WC86, WC87, WC88, WC89, WC90, WC91, WC93, WC94, WC95, WC96, WC97, WC98, WC99,
      WC102, WC103, WC104, WC105, WC106, WC107, WC108, WC109, WC110, WC111, credits, TitleScreen]
    };

const game = new Phaser.Game(config);

const soundCtrl = game.sound;
soundCtrl.volume = 0.7;
