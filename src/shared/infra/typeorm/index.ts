import { Connection, createConnection, getConnectionOptions } from "typeorm";

// "peoplelink_database"
export default async (): Promise<Connection> => {
  const defaultOption = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOption, {
      // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
      database:
        process.env.NODE_ENV === "test"
          ? "peoplelink_test"
          : defaultOption.database,
    })
  );
};
