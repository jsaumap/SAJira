
interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  createAt: number;
  status: string;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: asdasda',
      status: 'pending',
      createAt: Date.now()
    },
    {
      description: 'En progreso: asdaasdasdasdsda',
      status: 'in-progress',
      createAt: Date.now() - 10000
    },
    {
      description: 'Terminadas: qweqweqweqweqweqwe',
      status: 'finished',
      createAt: Date.now() - 10000000
    }
  ]
};
