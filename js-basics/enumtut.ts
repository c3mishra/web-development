enum Sizes {
    Small,
    Medium,
  }
  
function getSize(size: Sizes) {
    switch (size) {
      case Sizes.Small:
        console.log('small');
        return 'S';
      case Sizes.Medium:
        console.log('medium');
        return 'M';
  
      default:
        throw new Error(`Non-existent size in switch: ${size}`);
    }
}
  
console.log(getSize(Sizes.Small)); // 👉️ "S"
console.log(getSize(Sizes.Medium)); // 👉️ "M"
  


// enum Direction {
//     North,
//     South,
//     East,
//     West
// };

// function getDirection(dir: Direction) {
//     switch(dir){
//         case Direction.East:
//             console.log("East");
//             break;
//         case Direction.West:
//             console.log("West");
//             break;
//         case Direction.North:
//             console.log("North");
//             break;
//         default:
//             console.log("South");
//     }
// }

// console.log(getDirection(Direction.South));