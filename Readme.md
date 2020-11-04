## 🔧 Installation

npm -i soul-hiu-js

## 🌐 Usage

```js
import soulHIU from soul-hiu-js

const soulClient = new SoulHIU({apiKey: "", basePath: "https://dev.soul.technology/api/v1"})

// Request Consent from patients

soulClient.consentInit().then((data) => {
console.log(data)
})

soulClient.consentStatus().then((data) => {
console.log(data)
})

soulClient.consentList().then((data) => {
console.log(data)
})

// Request Personal Health Records

soulClient.dataInit().then((data) => {
console.log(data)
})

soulClient.dataStatus().then((data) => {
console.log(data)
})

soulClient.dataFetch().then((data) => {
console.log(data)
})

```
