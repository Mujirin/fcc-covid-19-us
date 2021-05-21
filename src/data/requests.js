import axios from 'axios';
import parsers from './parsers'


async function usStats() {
    const response = await axios.get(
        'https://api.covidtracking.com/v1/us/current.json'
    );

    return parsers.usStats(response.data)
}


export default {
    usStats,
}