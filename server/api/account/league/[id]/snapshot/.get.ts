export default defineEventHandler(async (event) => {
  const { leagueId } = getQuery(event)

  return $prisma.snapshot.findMany({
    select: {
      data: true,
      createdAt: true,
    },
    where: {
      leagueId: parseInt(leagueId as string),
    },
  })
})
