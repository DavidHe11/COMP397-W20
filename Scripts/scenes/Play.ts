/*
Play.ts
David He 300844568
Feb 22, 2020
Creates two rolls with dice.
*/

module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _rollButton: objects.Button;

    private _die1: objects.Image;
    private _die2: objects.Image;

    private _dieLabel1: objects.Label;
    private _dieLabel2: objects.Label;

    private dieResult1: number;
    private dieResult2: number;
    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();

      this.Start();
    }

    // PRIVATE METHODS

    private rollDice(): void {
      this.dieResult1 = util.Mathf.RandomRange(1, 6);
      this.dieResult2 = util.Mathf.RandomRange(1, 6);
    }

    //displays the results
    private displayResult(): void {
      //remove child if they already exist
      this.removeChild(this._dieLabel1);
      this.removeChild(this._dieLabel2);

      this._dieLabel1 = new objects.Label(
        this.dieResult1.toString(),
        "24px",
        "Consolas",
        "#000000",
        155,
        280,
        false
      );

      this._dieLabel2 = new objects.Label(
        this.dieResult2.toString(),
        "24px",
        "Consolas",
        "#000000",
        460,
        280,
        false
      );

      this._die1 = new objects.Image(
        config.Game.ASSETS.getResult(this.dieResult1.toString()),
        60,
        70,
        false
      );
      this._die2 = new objects.Image(
        config.Game.ASSETS.getResult(this.dieResult2.toString()),
        370,
        70,
        false
      );

      this.addChild(this._die1);
      this.addChild(this._die2);
      this.addChild(this._dieLabel1);
      this.addChild(this._dieLabel2);
    }

    // PUBLIC METHODS

    //initialize and instatiate
    public Start(): void {
      this._rollButton = new objects.Button(
        config.Game.ASSETS.getResult("rollButton"),
        320,
        430,
        true
      );

      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      this.addChild(this._rollButton);
      this.addChild(this._die1);
      this.addChild(this._die2);
      this.addChild(this._dieLabel1);
      this.addChild(this._dieLabel2);

      this._rollButton.on("click", () => {
        this.rollDice();
        this.displayResult();
      });
    }
  }
}
