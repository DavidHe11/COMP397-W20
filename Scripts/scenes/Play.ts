module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _rollButton: objects.Button;

    private _die1: objects.Image;
    private _die2: objects.Image;
    /*
    private _dieLabel1: objects.Label;
    private _dieLabel2: objects.Label;
    private dieResult1: number;
    private dieResult2: number;
    */
    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();

      this.Start();
    }

    // PRIVATE METHODS
    /*
    private rollDice(): void {
      this.dieResult1 = util.Mathf.Clamp(util.Mathf.RandomRange(1, 6), 1, 6);
      this.dieResult2 = util.Mathf.Clamp(util.Mathf.RandomRange(1, 6), 1, 6);
    }

    //displays the results
    private displayResult(): void {
      this._dieLabel1 = new objects.Label(
        this.dieResult1.toString(),
        "18px",
        "Consolas",
        "#000000",
        240,
        120,
        false
      );

      this._dieLabel2 = new objects.Label(
        this.dieResult2.toString(),
        "18px",
        "Consolas",
        "#000000",
        400,
        120,
        false
      );

      this._die1 = new objects.Image(
        config.Game.ASSETS.getResult(this.dieResult1.toString()),
        240,
        160,
        false
      );
      this._die2 = new objects.Image(
        config.Game.ASSETS.getResult(this.dieResult2.toString()),
        400,
        160,
        false
      );
    }
    */
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
      /*
      this.addChild(this._die1);
      this.addChild(this._die2);
      this.addChild(this._dieLabel1);
      this.addChild(this._dieLabel2);
        
      this._rollButton.on("click", () => {
        this.rollDice();
        this.displayResult();
      });
      */
    }
  }
}
