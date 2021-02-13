# Pierre Rhinocéros' Dev Tools
This package includes various utilities for developing Max for Live devices:

1. mc.live.param~

    A multichannel version of live.param~:
    ```max
    [mc.live.param~ @chans 4 @values attack1 attack2 attack3 attack4]
    ```
1. pr.align-present

    Utility abstraction to align object in Presentation mode in round coordinates.
1. pr.live.colors

    Utility abstraction to color UI objects according to Ableton Live's theme.
    Currently only supports `[live.comment]` objects.

## Installation
The easiest to install this package is simply cloning it into your Max packages directory:
```sh
cd /path/to/Max/packages
git clone https://github.com/neta-elad/pr.dev-tools.git
```

This might require restarting your Max application.