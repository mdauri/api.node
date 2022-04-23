import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepository: CarsRepositoryInMemory;
describe("List cars", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepository);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepository.create({
      name: "Audi A2",
      description: "Carro com espaço",
      daily_rate: 110.0,
      license_plate: "DEF-1213",
      fine_amount: 40,
      brand: "Audi",
      category_id: "0d96d902-ddb3-465a-81e5-f379de55b6d4",
    });

    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepository.create({
      name: "Audi A2 test 7",
      description: "Carro com espaço",
      daily_rate: 110.0,
      license_plate: "DEF-1217",
      fine_amount: 40,
      brand: "Audi_test",
      category_id: "0d96d902-ddb3-465a-81e5-f379de55b6d4",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Audi A2 test",
    });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepository.create({
      name: "Audi A2 test 5",
      description: "Carro com espaço",
      daily_rate: 110.0,
      license_plate: "DEF-1215",
      fine_amount: 40,
      brand: "Audi_test",
      category_id: "0d96d902-ddb3-465a-81e5-f379de55b6d4",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Audi A2 test",
    });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category id", async () => {
    const car = await carsRepository.create({
      name: "Audi A23 test 4",
      description: "Carro com espaço",
      daily_rate: 110.0,
      license_plate: "DEF-1214",
      fine_amount: 40,
      brand: "Audi_test",
      category_id: "0d96d902-ddb3-465a-81e5-f379de55b6d4",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "0d96d902-ddb3-465a-81e5-f379de55b6d4",
    });
    expect(cars).toEqual([car]);
  });
});
