import request from 'superagent'

const url = 'https://api.kanye.rest'

export function getKanyequote() {
    return request.get(url)
        .then(response => response.body)
}

