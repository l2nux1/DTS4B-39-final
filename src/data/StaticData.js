const upcomingData = require('./upcomingData.json')
const trendingData = require('./trendingData.json')
const popularData = require('./popularData.json')
const nowPlayingData = require('./nowPlayingData.json')

const staticList = [
    { type: 'upcoming', data: upcomingData },
    { type: 'trending', data: trendingData },
    { type: 'popular', data: popularData },
    { type: 'nowPlaying', data: nowPlayingData },
]

exports.GetStaticData = (typeList) => {
    const objResult = staticList.find(o => o.type === typeList);
    return objResult.data
}

