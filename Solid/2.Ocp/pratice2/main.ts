/*=========== START PRACTICE 2 ===============*/

import { FreelancerEmployee } from "./FreelancerEmployee";
import { FullTimeEmployee } from "./FullTimeEmployee";
import { InternEmployee } from "./InternEmployee";
import { PartTimeEmployee } from "./PartTimeEmployee";

const fullTimeEmployee = new FullTimeEmployee("Alice");
console.log(
  `${fullTimeEmployee.getName()}'s salary is ${fullTimeEmployee.calculateSalary()}`
);

const partTimeEmployee = new PartTimeEmployee("Joy");
console.log(
  `${partTimeEmployee.getName()}'s salary is ${partTimeEmployee.calculateSalary()}`
);

const internEmployee = new InternEmployee("Bob");
console.log(
  `${internEmployee.getName()}'s salary is ${internEmployee.calculateSalary()}`
);

const freelancer = new FreelancerEmployee("Trump", 8);
console.log(
  `${freelancer.getName()}'s salary is ${freelancer.calculateSalary()}`
);

/*=========== END PRACTICE 2 ===============*/
