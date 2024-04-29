import GameWinRtp from '@/components/GameWinRtp'

export const metadata = {
  title: 'Home',
}

const game = [
  {
    id: 1,
    image: '/1.png',
    bg: 'bg-[#8cb300]'
  },
]

export default function Home() {
  return (
    <main className='w-full h-screen'>
      {/* {game.map((v) => (
        <GameWinRtp bg='ิด' image={v.image} key={v.id} className={`${v.bg}`} />
      ))} */}
      <iframe src="https://scanslot.io/" className='w-full h-full'></iframe>
    </main>
  )
}
