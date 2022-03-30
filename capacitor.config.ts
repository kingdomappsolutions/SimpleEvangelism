import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'tech.kingdomappsolutions.simpleevangelism',
  appName: 'Simple Evangelism',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
        "SplashScreen": {
        "launchShowDuration": 3000,
        "launchAutoHide": true,
        "backgroundColor": "#ffffffff",
        "androidSplashResourceName": "splash",
        "androidScaleType": "CENTER_CROP",
        "androidSpinnerStyle": "large",
        "iosSpinnerStyle": "small",
        "spinnerColor": "#999999",
        "showSpinner": false,
        "splashFullScreen": true,
        "splashImmersive": true
        }
    },
}

export default config
