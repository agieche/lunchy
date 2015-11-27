# My first react native app: Lunchy

Lunchy is an app, that is a playground for my personal react native development. Feel free to contribute.

<br><br>
___

<br><br>


## About react native

![Android setup](http://image.slidesharecdn.com/tel-aviv-meetup-150809210316-lva1-app6892/95/pieter-de-baets-an-introduction-to-react-native-1-638.jpg)

##### learn once, write anywhere

- React Native makes building apps for iOS and Android possible with the same js codebase.

- Uses javascript and react to use __native apis and UI elements__

- is used by facebook and many others ( https://facebook.github.io/react-native/showcase.html ) __battle-tested__

<br><br>
___

<br><br>


## Target different platforms thanks to VirtualDOM

![VirtualDOM](https://www.safaribooksonline.com/library/view/learning-react-native/9781491929049/assets/render-targets.png)

<br><br>
___

<br><br>


## Step 1: Setup react native (tested on Mac OSX Yosemite)

![Setup](http://38.media.tumblr.com/3fcbf9e25ce3cdf8f70a782448c6be6c/tumblr_inline_mqini1Asvk1qz4rgp.gif)




### install nvm (node version manager)

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```

### install node

```
nvm install node
nvm alias default node
nvm use node
```

### install faster npm for node > 4(optional)
````
npm install -g npm@2
```

### install watchman

```
brew update
brew install watchman
```

### install react native cli

```
npm install -g react-native-cli
```


<br><br>
___

<br><br>


## Step 2: Setup Emulators

### iOS setup

- install XCode 7+ via Appstore


### Android Setup (https://facebook.github.io/react-native/docs/android-setup.html)


##### 1. Install latest JDK
Get it [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

After installation, adjust your JAVA_HOME in bash_profile to match the installed jdk. My entry looks like this:

```
export JAVA_HOME="$(/usr/libexec/java_home -v 1.8)"
```

##### 2. Install android sdk
```
$ brew install android-sdk
```
After installation, add this to your .bash_profile
```
export ANDROID_HOME=/usr/local/opt/android-sdk
```

##### 3. Install android packages
```
$ android
```

In the upcoming screen, you'll have to choose the right packages (i.e. packages and chosen virtual device in genymotion (is covered in next step) have to match):

I chose __Android 5.1.1 and related packages__ and within Genymotion, I chose __Google Nexus 6 - 5.1.0 - API 22__

##### 4. Install genymotion (free for personal usage)
1. Download and install Genymotion.
2. Open Genymotion. It might ask you to install VirtualBox unless you already have it.
3. Create a new emulator (e.g. Google Nexus 6 - 5.1.0 - API 22).

<br><br>
___

<br><br>


## Step 3: create app project

![Setup](http://tclhost.com/6kPW8hh.gif)



```
$ react-native init YourProjectName
```
<br><br>
___

<br><br>


## Step 4: start developing

![Start developing](https://media3.giphy.com/media/D0EjguuQzYr9m/200.gif)

#### iOS
```
1. Open your xcode project (file located in your project directory)
2. Hit CMD + R to build your project and start the simulator.
3. Enable live reload.
4. Edit index.ios.js and watch changes

```

#### Android
```
1. Start Android Emulator, e.g. Genymotion
2. $ react-native run-android
3. Enable live reload.
4. Edit index.android.js and watch changes
```

<br><br>
___

<br><br>


## Step 5: publishing

WIP

<br><br>
___

<br><br>


## Appendix: if you want to dig deeper


[Official Docs](https://facebook.github.io/react-native/docs/getting-started.html)

[UI Explorer](https://github.com/facebook/react-native/tree/master/Examples/UIExplorer)

[Awesome React - curated list of react native resources](https://github.com/jondot/awesome-react-native)

[React parts](https://react.parts/native)

[Building a flash card app](http://herman.asia/building-a-flashcard-app-with-react-native)

[Learning React Native](https://www.safaribooksonline.com/library/view/learning-react-native/9781491929049/cover.html)
