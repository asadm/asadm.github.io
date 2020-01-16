---
layout: default
title: Screenshot Hero
description: Screenshot Hero scans through your screenshots (and other saved photos) and makes then instantly searchable by text in them.
image: https://asadmemon.com/projects/screenshothero/icon.png
---

---
<img src="icon.png" width="100" style="border-radius: 20px;" />
## Screenshot Hero
Screenshot Hero scans through your screenshots (and other saved photos) and makes then instantly searchable by text in them.

<video style="max-height:100vh; border: 1px solid #000;" controls autoplay>
  <source src="preview.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Highlights
- Images are all processed **on-device** and nothing is sent to any server.
- Tested to work with **thousands of images**.
- Best and most **performant OCR technology**.

<a href="https://apps.apple.com/us/app/screenshot-hero/id1493170794?ls=1"><img style="margin: 10px 0px;" width="120" src="badge.png"></a>


---

## Technical Details

I wanted to build a simple utility app that would run OCR through my photos (all 5000+ of them) and make them searchable. I had following constraints for it:

- It has to be **fast**. The UI needs to be fluid even for thousands of images.
- All processing should happen **on-device**, should not be uploading photos to a cloud service.
- I need to **make it quick** (I only had a week allocated for this project).

I am primarily a web developer and am not a skilled mobile developer. So I attempted this project with three different frameworks and here are my notes:

### SwiftUI
SwiftUI is appealing as it's a React-like framework. I wanted to learn SwiftUI but I struggled with the documentation and even writing a simple grid of photos was challenging. The community is tiny so there aren't that many samples online either. I really wanted to use this but it was taking a bit too much of my time. Sadly, I had to ditch SwiftUI.

### Expo.io
Expo is a React Native framework which bypasses the whole Android SDK + XCode step of making the app. It's very easy to get started and the dev experience is great. Having written a React Native app before, I really wanted this to work. The only problem occured when I wanted to write the OCR part: `expo eject` workflow is kinda broken. In my case, the `CameraRoll` API broke due to some unlinked native module when I tried to run it via XCode after ejecting the app. I spent a few hours fixing the native modules but that didn't work. 

Without ejecting, I could have gone with [Tessaract.js](https://github.com/naptha/tesseract.js#tesseractjs) but it's not fast enough to process thousands of images quickly.

There also isn't a way to do background processing with Expo. I feel expo is great for simple CRUD apps for now and will fail you if your app needs a custom functionality.

### React Native

In the end, I had to fallback to what I already knew. I copied views which I had created earlier for expo.io into a new ReactNative project. I then created a custom Swift native module which had all my business logic:
- Methods to fetch all photos and process newer ones.
- Queue to process only N photos concurrently.
- Storage Model, went with [MKKV](https://github.com/Tencent/MMKV) as it was quick to set up.
- OCR, used Apple's [Vision API](https://developer.apple.com/documentation/vision) which is surprisingly accurate and fastest on-device.
- Set up [BackgroundTasks](https://developer.apple.com/documentation/backgroundtasks) to schedule photo processing for later, when the app is sent to background mid-processing (remember we may have 10,000+ photos in our queue, each photo takes ~1s to process).


## Conclusion

I learned that React Native is fast enough if used only for views (and maybe lightweight logic) only. I used `FlatList` for the grid photo view (with some optimizations to lazy load photos) and it is very smooth even for thousands of photos. Real-time searching/filtering is also really smooth. React Native also has great community support.

This means writing more backend code per platform, which sucks but is straight-forward. It's still better than writing front-end for each platform and dealing with all the quirks of each of them.

Try Screenshot Hero [here](https://apps.apple.com/us/app/screenshot-hero/id1493170794?ls=1).

---

### If you do coding interviews, check out my main work [CodeInterview.io](https://codeinterview.io) – Conduct technical interviews in a real-time shared coding environment.
