import { CanPrint } from "./CanPrint.interface";

export class OldFashionedPrinter implements CanPrint {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}
