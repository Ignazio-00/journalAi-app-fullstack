import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import { analyze } from '@/utils/ai'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import Link from 'next/link'

const getEntries = async () => {
  const user = await getUserByClerkId()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  await analyze(`Im going to give you an journal entry. I want you to analyze for a few things.
  I need the mood, a summary, what the subject is, and a color representing the mood. 
  You need to respond back with a formatted JSON like so: {"mood": "", "subject": "", "color": "", "negative": ""}.
  
  Journal entry:
  Today was a great day! I finally was able to write my own API and saw a great sundown.
  `)

  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()
  return (
    <div className="p-10 bg-sky-600/50 h-full">
      <h2 className="text-3xl mb-8 ">Journal</h2>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default JournalPage
