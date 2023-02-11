### 2/6

Got an error below on GAS while trying to exec "notion" function.
What is even "S"? lol

````Uncaught (in promise) TypeError: S.getDataBase is not a function
at onClick (userCodeAppPanel:162:29967)```
````

Seems like all properties except methods are successfully fetched.
Gonna inspect what happened to these methods tomorrow.

````{access_token: 'secret_JuamdALley9fZH38qQvp1SVsHE4d9fv0dnqYg8IvaVw', headers: {…}, notion_version: '2022-06-28', database_id: 'https://www.notion.so/mw-dm/276b2fdc1e734bdaaae2e7b4bb38886f?v=2537a3d7239c4f8ba98d7e385c4cd702', entry_point: 'https://api.notion.com/v1'}
access_token
:
"secret_JuamdALley9fZH38qQvp1SVsHE4d9fv0dnqYg8IvaVw"
database_id
:
"https://www.notion.so/mw-dm/276b2fdc1e734bdaaae2e7b4bb38886f?v=2537a3d7239c4f8ba98d7e385c4cd702"
entry_point
:
"https://api.notion.com/v1"
headers
:
{Authorization: 'Bearer secret_JuamdALley9fZH38qQvp1SVsHE4d9fv0dnqYg8IvaVw', Notion-Version: '2022-06-28', content-type: 'application/json; charset=UTF-8'}
notion_version
:
"2022-06-28"
[[Prototype]]
:
Object```
````
