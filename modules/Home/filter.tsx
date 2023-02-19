/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import Select from 'react-select'

import { AnimeFilter } from '@/types'

const FILTERS: AnimeFilter[] = ['recent-release', 'top-airing', 'popular']

const selectOptions = FILTERS.map((filter) => ({
  value: filter,
  label: filter.replace(/-/g, ' '),
}))

function HomeAnimeFilter() {
  const router = useRouter()
  const filterParam = useSearchParams().get('filter') || 'recent-release'

  return (
    <div>
      <label htmlFor="anime-filter" className="w-full block text-right">
        Filtered by
      </label>
      <Select
        aria-label="Filter by"
        instanceId="anime-filter"
        defaultValue={selectOptions.find((o) => o.value === filterParam)}
        name="anime-filter"
        id="anime-filter"
        options={selectOptions}
        onChange={(v) => {
          if (v) router.push(`/?filter=${v.value}`)
        }}
        className="capitalize"
      />
    </div>
  )
}

export default HomeAnimeFilter
