# data-url-server
Provide Data URL resource

## Try
Here is an example. You can a small red dot, which was found [here](https://github.com/github/markup/issues/270#issuecomment-44492067).  
<https://data-url-4in25matdvg0.runkit.sh/?d=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==>

This server will help you in environments you can not use Data URL for some reason.

## Why ?d= query parameter
Because base64 encoding can contain "//". That may be converted to "/" in some browsers.
