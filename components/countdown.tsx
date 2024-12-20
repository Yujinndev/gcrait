import { useEffect, useState, useCallback } from 'react'

type CountDownTime = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

const Countdown = () => {
  const [countdownTime, setCountdownTime] = useState<CountDownTime>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '59',
  })

  const calculateTimeDifference = (endTime: number) => {
    const now = new Date().getTime()
    const timeDifference = endTime - now

    if (timeDifference <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' }
    }

    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000))
      .toString()
      .padStart(2, '0')
    const hours = Math.floor(
      (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    )
      .toString()
      .padStart(2, '0')
    const minutes = Math.floor(
      (timeDifference % (60 * 60 * 1000)) / (60 * 1000)
    )
      .toString()
      .padStart(2, '0')
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000)
      .toString()
      .padStart(2, '0')

    return { days, hours, minutes, seconds }
  }

  const startCountdown = useCallback(() => {
    const endTime = new Date(2024, 11, 10, 8, 0, 0).getTime()

    const updateCountdown = () => {
      const time = calculateTimeDifference(endTime)
      setCountdownTime(time)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cleanup = startCountdown()

    return cleanup
  }, [startCountdown])

  const TimerCard = ({ value, label }: { value: string; label: string }) => (
    <div className="relative flex flex-col gap-5">
      <div className="flex h-16 w-16 items-center justify-between rounded-lg bg-[#02183c] sm:h-32 sm:w-32 lg:h-40 lg:w-40">
        <div className="relative !-left-[6px] h-2.5 w-2.5 rounded-full bg-[#02183c] sm:h-3 sm:w-3"></div>
        <span className="text-3xl font-semibold text-white sm:text-6xl lg:text-7xl">
          {value}
        </span>
        <div className="relative -right-[6px] h-2.5 w-2.5 rounded-full bg-[#191A24] sm:h-3 sm:w-3"></div>
      </div>
      <span className="text-center text-xs capitalize text-black sm:text-2xl">
        {Number(value) <= 1 ? label.slice(0, -1) : label}
      </span>
    </div>
  )

  const checkTimeIfEnded = ({
    countdownTime,
  }: {
    countdownTime: CountDownTime
  }) => {
    return (
      countdownTime.days === '00' &&
      countdownTime.hours === '00' &&
      countdownTime.minutes === '00' &&
      countdownTime.seconds === '00'
    )
  }

  return (
    <div className="mt-6 py-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 sm:gap-16">
        <h1 className="px-2 text-center font-play text-xl font-semibold text-[#02183c] md:text-3xl lg:text-5xl">
          {checkTimeIfEnded({ countdownTime })
            ? 'The Future Is Here!'
            : 'The Future is almost here!'}
        </h1>

        <div className="flex justify-center gap-3 sm:gap-8">
          <TimerCard value={countdownTime.days} label="Days" />
          <TimerCard value={countdownTime.hours} label="Hours" />
          <TimerCard value={countdownTime.minutes} label="Minutes" />
          <TimerCard value={countdownTime.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  )
}

export default Countdown
