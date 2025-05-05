/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Triangle } from "./Triangle";

/*=========== START PRACTICE 1 ===============*/

let shapes: Shape[] = [new Circle(5), new Rectangle(4, 5), new Triangle(3)];
const shapesInstance = new Shape(shapes);
console.log(shapesInstance.calculateArea());
/*=========== END PRACTICE 1 ===============*/
