/*
Play.ts
David He 300844568
Feb 22, 2020
Creates an image.
*/

module objects {
  export class Image extends GameObject {
    // constructor
    constructor(
      imagePath: Object = config.Game.ASSETS.getResult("blank"),
      x: number = 0,
      y: number = 0,
      isCentered: boolean = false
    ) {
      super(imagePath, x, y, isCentered);
      this.Start();
    }

    // PRIVATE METHODS
    protected _checkBounds(): void {}

    // PUBLIC METHODS
    MouseOver(): void {
      this.alpha = 0.7;
    }

    MouseOut(): void {
      this.alpha = 1.0;
    }

    /**
     * This function is used for initialization
     *
     * @memberof Image
     */
    public Start(): void {
      this.name = "Image";
    }

    public Update(): void {}

    public Reset(): void {}
  }
}
