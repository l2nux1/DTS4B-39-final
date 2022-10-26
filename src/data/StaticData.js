const upcomingData = require('./upcomingData.json')
const trendingData = require('./trendingData.json')
const popularData = require('./popularData.json')
const nowPlayingData = require('./nowPlayingData.json')

const staticList = [
    { type: 'Upcoming', data: upcomingData },
    { type: 'Trending', data: trendingData },
    { type: 'Popular', data: popularData },
    { type: 'Now Playing', data: nowPlayingData },
]

exports.GetStaticData = (typeList) => {
    const objResult = staticList.find(o => o.type === typeList);
    return objResult.data
}

