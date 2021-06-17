import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

// Use PartialType to stop redundancy of code!
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}