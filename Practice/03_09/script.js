/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

 const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },

    NewVolume: function(VolumeN){
        this.volume=VolumeN;
    },
    ChangeColor: function(Color2){
        this.color=Color2;
    },
    AnotherName: function(Name2){
        this.name=Name2;

    },
    PocketNum2:function(Pocket){
        this.pocketNum=Pocket;
    },



  };

  console.log("I have now a volume of: ", backpack.volume);
  console.log("The new volume is: ", backpack.NewVolume(80));
  console.log("The old color is: ", backpack.color);
  console.log("The new color is: ",backpack.ChangeColor("yellow"));
  console.log("The old name is: ", backpack.name);
  console.log("The new name is: ", backpack.AnotherName("Geanta"));
  console.log("The old amount of money is: ",backpack.pocketNum);
  console.log("The new amount of money is : ", backpack.PocketNum2(55));
