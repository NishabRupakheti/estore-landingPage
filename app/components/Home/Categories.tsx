import { useState, useEffect } from "react"

const Categories = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35
  })

  useEffect(() => { // for running the timer ... 
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, days, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { hours, days, minutes, seconds }
      })
    }, 1000) // runs every second

    return () => clearInterval(timer) // cleanup on unmount
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-black rounded-lg overflow-hidden relative">
        <div className="flex items-center justify-between px-14 py-12 min-h-100">
          {/* Left Content */}
          <div className="text-white z-10 max-w-md">
            <h3 className="text-green-500 font-semibold mb-8 text-base">Categories</h3>
            
            <h1 className="text-5xl font-semibold leading-tight mb-8">
              Enhance Your<br />
              Music Experience
            </h1>

            {/* Countdown Timer Circles */}
            <div className="flex gap-6 mb-10">
              {[
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center">
                  <span className="text-black font-bold text-base">{String(item.value).padStart(2, '0')}</span>
                  <span className="text-black text-xs">{item.label}</span>
                </div>
              ))}
            </div>


            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-12 py-4 rounded transition-colors cursor-pointer">
              Buy Now!
            </button>
          </div>

          {/* Right Image */}
          <div className="z-10">
            <img src="/app/images/speaker.png" alt="JBL Speaker" className="h-80 object-contain drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories