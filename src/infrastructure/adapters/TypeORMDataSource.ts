// src/infrastructure/adapters/TypeORMDataSource.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import typeORMConfig from "../configuration/ormconfig";

export class TypeORMDataSource {
  private dataSource: DataSource;

  constructor() {
    this.dataSource = new DataSource(typeORMConfig);
  }

  async initialize(): Promise<DataSource> {
    try {
      await this.dataSource.initialize();
      console.log("Data Source has been initialized!");
      return this.dataSource;
    } catch (error) {
      console.error("Error during Data Source initialization", error);
      throw error;
    }
  }

  getDataSource(): DataSource {
    return this.dataSource;
  }
}
