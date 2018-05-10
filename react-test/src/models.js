import axios from 'axios'

export default class SearchResultModel {

  static artist(artistSearch){
    let request = axios.get("https://api.spotify.com/v1/search?q=" + artistSearch + "&type=track");
    return request
  }
}
