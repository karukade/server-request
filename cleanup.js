const axios = require("axios")
const baseURL = "https://kaaade.backlog.com"


async function del() {
  const {data} = await axios({
    baseURL,
    method: "GET",
    url: "/api/v2/issues",
    params: {
      apiKey: "J6v6u0TBQCRxINVhbuZu7UdYOrDSWCbfxFefsDmDbB5Nl1vfbZytH63ceIDSU6Nu",
      "projectId[]": 57437
    }
  }).catch(e => console.log(e))
  let flg = false
  for (const item of data) {
    await axios({
      baseURL,
      method: "DELETE",
      url: `/api/v2/issues/${item.id}`,
      params: {
        apiKey: "J6v6u0TBQCRxINVhbuZu7UdYOrDSWCbfxFefsDmDbB5Nl1vfbZytH63ceIDSU6Nu"
      }
    }).catch(e => {
      console.log(e.response.data)
      flg = true
    })
    console.log(`${item.id} deleted`)
    if (flg) break 
  }
}

del()