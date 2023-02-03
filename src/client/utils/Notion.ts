/** NotionAPIを操作するためのオブジェクトです。 */
class Notion {
  database_id: string
  entry_point: string | null
  access_token: string | null
  notion_version: string | null
  headers: { 'content-type': string; Authorization: string; 'Notion-Version': any }
  constructor(database_id: string) {
    /**
     * データベースのID、クラスに渡したIDで初期化されます。
     * @type {number}
     */
    this.database_id = database_id
    /**
     * APIのエントリーポイント,スクリプトプロパティを参照します。
     * @type {string}
     */
    this.entry_point = PropertiesService.getScriptProperties().getProperty('ENTRY_POINT')
    /**
     * NotionAPIを使用するためのアクセストークン、スクリプトプロパティを参照します。
     * @type {string}
     */
    this.access_token = PropertiesService.getScriptProperties().getProperty('ACCESS_TOKEN')
    /**
     * NotionAPIのバージョン、スクリプトプロパティを参照します。
     * @type {string}
     */
    this.notion_version = PropertiesService.getScriptProperties().getProperty('NOTION_VERSION')
    /**
     * ヘッダー要素
     * @type {object}
     */
    this.headers = {
      'content-type': 'application/json; charset=UTF-8',
      Authorization: 'Bearer ' + this.access_token,
      'Notion-Version': this.notion_version,
    }
  }

  /**
   * オブジェクトに渡されたデータベースのIDからデータを取得して返します
   * @return {object} データベースのJSONデータを返します。
   */
  async getDataBase() {
    let options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: 'get',
      headers: this.headers,
    }
    const data = UrlFetchApp.fetch(`${this.entry_point}/databases/${this.database_id}`, options)
    return JSON.parse(data as unknown as string)
  }

  /**
   * オブジェクトに渡されたデータベースのIDからデータを引数のフィルターを通して取得して返します
   * @param {object} データベースのフィルターです
   * @return {object} データベースのJSONデータを返します。
   * @see https://developers.notion.com/reference/post-database-query-filter
   */
  async getFilteredDataBase(filter: object) {
    let options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: 'get',
      headers: this.headers,
      contentType: 'application/json',
      payload: filter,
    }
    const data = UrlFetchApp.fetch(
      `${this.entry_point}/databases/${this.database_id}/query`,
      options
    )
    return JSON.parse(data as unknown as string)
  }
}

function notion(database_id: string) {
  return new Notion(database_id)
}

export { notion }
