interface ClassificationMetric {
  count: number
  trend: number
  percentage: number
}

interface ClassificationStats {
  automation: ClassificationMetric
  mixed: ClassificationMetric
  organic: ClassificationMetric
  total: ClassificationMetric
  createdAt: string | null
}

interface AgentScanHealth {
  countsByDate: Record<string, ClassificationStats>
  dates: string[]
}

const HEALTH_URL = 'https://agentscan.tools/api/health'
const TREND_DAYS = 14
const WEEK_DAYS = 7
const CATEGORIES = ['organic', 'mixed', 'automation'] as const

const round = (value: number, precision = 2) => {
  const factor = 10 ** precision
  return Math.round(value * factor) / factor
}

function sumWindow(
  countsByDate: Record<string, ClassificationStats>,
  dates: string[],
) {
  const counts = { organic: 0, mixed: 0, automation: 0, total: 0 }
  for (const date of dates) {
    const day = countsByDate[date]
    if (!day)
      continue
    for (const category of CATEGORIES) {
      counts[category] += day[category].count
    }
  }
  counts.total = counts.organic + counts.mixed + counts.automation
  return counts
}

/**
 * Merge variables for the AgentScan ecosystem-health TRMNL plugin, derived
 * from agentscan.tools' public health API so the plugin can run without a
 * dedicated endpoint on AgentScan itself.
 */
export default defineCachedEventHandler(
  async () => {
    const health = await $fetch<AgentScanHealth>(HEALTH_URL, {
      timeout: 15_000,
    }).catch((error) => {
      throw createError({
        statusCode: 502,
        message: `AgentScan health API unavailable: ${error instanceof Error ? error.message : error}`,
      })
    })

    const { countsByDate } = health
    const dates = [...health.dates].sort()
    const lastDate = dates.at(-1)
    const previousDate = dates.at(-2)
    const trendDates = dates.slice(-TREND_DAYS)

    const week = sumWindow(countsByDate, dates.slice(-WEEK_DAYS))
    const weekPercentage = (category: (typeof CATEGORIES)[number]) =>
      week.total === 0 ? 0 : round((week[category] / week.total) * 100)

    const delta = (category: (typeof CATEGORIES)[number]) => {
      const last = lastDate ? countsByDate[lastDate] : undefined
      const previous = previousDate ? countsByDate[previousDate] : undefined
      if (!last || !previous)
        return null
      return round(last[category].percentage - previous[category].percentage, 1)
    }

    return {
      updated_at: lastDate
        ? (countsByDate[lastDate]?.createdAt ?? lastDate)
        : null,
      total_scanned: sumWindow(countsByDate, dates).total,
      week: {
        total: week.total,
        organic: { percentage: weekPercentage('organic') },
        mixed: { percentage: weekPercentage('mixed') },
        automation: { percentage: weekPercentage('automation') },
      },
      deltas: {
        organic: delta('organic'),
        mixed: delta('mixed'),
        automation: delta('automation'),
      },
      trend: {
        dates: trendDates,
        organic: trendDates.map(date => countsByDate[date]?.organic.percentage ?? 0),
        mixed: trendDates.map(date => countsByDate[date]?.mixed.percentage ?? 0),
        automation: trendDates.map(date => countsByDate[date]?.automation.percentage ?? 0),
      },
    }
  },
  {
    maxAge: 60 * 15,
    getKey: () => 'trmnl-agentscan',
  },
)
