## Deploy on any shell including termux

- Fork repo
- edit the config.js file as per your details
- install the following dependencies
  - ffmpeg
  - nodejs
- clone the repo
- change the directory to cloned repo
- run `npm install`
- run `npm install qrcode-terminal`
- run `node .`
- scan the qr
- Done your bot is alive
- run ``node .` again to run it again after you stop the bot

---

# Using Rudhra 

## Creating a plugin

```javascript
const { command, isPrivate } = require("../lib/"); //importing functions

command(
  {
    pattern: "ping", //command
    fromMe: isPrivate /*need to respond for everyone's message
true : only from sudo numbers
false : from everyone
isPrivate same as false but will be considered as true if worktype is private*/,
    desc: "To check ping", //description of the command
    type: "user", //command type
  },
  async (message, match) => {
    /*


PLUGIN CONTENT HERE


*/
  }
);
```

## Sending Messages

### Replying

```javascript
message.reply("Hi");
```

### Media

```javascript
let content = "https://wallpaperaccess.com/full/5531321.jpg"; //can also use buffer
message.sendMessage(
  content,
  {} /*options*/,
  "image" /*change to audio , video while sending audio or video */
);
```

### Sticker

```javascript
message.sendMessage(
  "url or buffer of image or video(max 10 seconds)",
  { packname: config.PACKNAME, author: config.AUTHOR },
  "sticker"
);
```

### [External Plugins](https://github.com/princerudh/rudhra/wiki/Plugins)

## Any Doubts ?

[![JOIN WHATSAPP GROUP](https://raw.githubusercontent.com/Neeraj-x0/Neeraj-x0/main/photos/suddidina-join-whatsapp.png)](https://chat.whatsapp.com/ESiNt1pudB1Js6QRZtM0jg)

#### Official Image

[![Docker Repository on Quay](https://quay.io/repository/xelectra/xasena/status "Docker Repository on Quay")](https://quay.io/repository/xelectra/xasena)

### THANKS TO

- [Adhiraj Singh](https://github.com/adiwajshing)
- [Yusuf Usta](https://github.com/yusufusta)
- [Neeraj-x0](https://github.com/Neeraj-x0)

```
MIT License

Copyright (c) 2023 rudhra-prh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
