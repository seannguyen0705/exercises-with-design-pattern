import { OldFashionedPrinter } from "../../Solid/4.Isp/OldFashionedPrinter";

describe("OldFashionedPrinter", () => {
  let oldFashionedPrinter: OldFashionedPrinter;

  beforeEach(() => {
    oldFashionedPrinter = new OldFashionedPrinter();

    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.spyOn(console, "log").mockRestore();
  });

  test("Should print document correctly", () => {
    const document = "Test Document";
    oldFashionedPrinter.print(document);

    expect(console.log).toHaveBeenCalledWith(`Printing document: ${document}`);
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  test("Should handle empty document", () => {
    const document = "";
    oldFashionedPrinter.print(document);

    expect(console.log).toHaveBeenCalledWith(`Printing document: ${document}`);
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
