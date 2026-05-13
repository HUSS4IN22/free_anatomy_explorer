import MainSearch from "@/blocks/MainSearch"
import RecentSearches from "@/blocks/RecentSearches"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] gap-8 px-6">
      <MainSearch />
      <RecentSearches />
    </main>
  )
}
