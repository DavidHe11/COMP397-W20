"use strict";
/*
Play.ts
David He 300844568
Feb 22, 2020
Creates two rolls with dice.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Play.prototype.rollDice = function () {
            this.dieResult1 = util.Mathf.RandomRange(1, 6);
            this.dieResult2 = util.Mathf.RandomRange(1, 6);
        };
        //displays the results
        Play.prototype.displayResult = function () {
            //remove child if they already exist
            this.removeChild(this._dieLabel1);
            this.removeChild(this._dieLabel2);
            this._dieLabel1 = new objects.Label(this.dieResult1.toString(), "24px", "Consolas", "#000000", 155, 280, false);
            this._dieLabel2 = new objects.Label(this.dieResult2.toString(), "24px", "Consolas", "#000000", 460, 280, false);
            this._die1 = new objects.Image(config.Game.ASSETS.getResult(this.dieResult1.toString()), 60, 70, false);
            this._die2 = new objects.Image(config.Game.ASSETS.getResult(this.dieResult2.toString()), 370, 70, false);
            this.addChild(this._die1);
            this.addChild(this._die2);
            this.addChild(this._dieLabel1);
            this.addChild(this._dieLabel2);
        };
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.Main();
        };
        Play.prototype.Update = function () { };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._rollButton);
            this.addChild(this._die1);
            this.addChild(this._die2);
            this.addChild(this._dieLabel1);
            this.addChild(this._dieLabel2);
            this._rollButton.on("click", function () {
                _this.rollDice();
                _this.displayResult();
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map