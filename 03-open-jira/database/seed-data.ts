interface SeedData {
  entries: SeedEntry[];
}
interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "pending - Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vero accusantium, accusamus repudiandae reiciendis dolore consectetur debitis molestiae est voluptatibus nisi delectus quo ex fuga enim a possimus cumque corporis!",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "progress - descripcion 2",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "done - descripcion 3",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
