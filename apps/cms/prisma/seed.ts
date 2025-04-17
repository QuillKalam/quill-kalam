import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const roles = [
    {
      name: 'author',
      slug: 'author',
      description: 'Can write and publish books.',
    },
    {
      name: 'reviewer',
      slug: 'reviewer',
      description: 'Can post reviews and rate books published by authors.',
    },
    {
      name: 'admin',
      slug: 'admin',
      description: 'Full access to all resources and settings.',
    },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    });
  }

  console.log('🌱 Seeded roles!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
