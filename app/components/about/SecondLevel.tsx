import type { AboutInfoType } from "~/types/about_types/AboutInfo"
import AboutInfoData from "~/data/about/AboutInfo"

const SecondLevel = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-16' >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8' >
        {
          AboutInfoData.map((info: AboutInfoType) => {
            const Icon = info.icon;
            
            return (
              <div 
                key={info.id} 
                className="group flex flex-col items-center justify-center p-8 rounded-lg transition-all duration-300 bg-white border-2 border-gray-200 hover:bg-red-500 hover:border-red-500"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-gray-300 text-black group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                  <Icon className="text-3xl" />
                </div>
                <div className="text-3xl font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">
                  {info.number}k
                </div>
                <div className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                  {info.desc}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SecondLevel