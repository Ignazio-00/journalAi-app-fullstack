import HistoryChart from '@/components/HistoryChart'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getData = async () => {
  const user = await getUserByClerkId()
  const analysen = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  const sum = analysen.reduce((all, current) => all + current.sentimentScore, 0)
  const avg = Math.round(sum / analysen.length)
  return { analysen, avg }
}

const History = async () => {
  const { avg, analysen } = await getData()

  return (
    <div className="w-full h-full">
      <h1>{`Avg. Sentiment ${avg}`}</h1>
      <div className="w-full h-full">
        <HistoryChart data={analysen} />
      </div>
    </div>
  )
}

export default History
