import { pool } from "../config/database.js";
import "../config/dotenv.js";
import carData from "../data/cars.js";

const createCarsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS cars;

    CREATE TABLE IF NOT EXISTS cars (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      carBrand VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 cars table created successfully");
  } catch (err) {
    console.error("⚠️ error creating cars table", err);
  }
};

const seedCarsTable = async () => {
  await createCarsTable();

  carData.forEach((car) => {
    const insertQuery = {
      text: "INSERT INTO cars (name, description, image, carBrand) VALUES ($1, $2, $3, $4)",
    };

    const values = [car.name, car.description, car.image, car.carBrand];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting car", err);
        return;
      }
      console.log(`✅ ${car.name} added successfully`);
    });
  });
};

seedCarsTable();
