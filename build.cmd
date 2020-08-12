set ZIP_PATH=C:\Program Files\7-Zip
"%ZIP_PATH%\7z" a dist\unicorn-website-design.zip -xr!dist -x!design-preview.png

set DESIGN_PATH=.\dist\unicorn-website-design.zip

set SERVLET_URL="[copy/paste from running Studio application]"

set SESSION_ID=[use JSESSIONID from Chrome's dev tools]

curl --data-binary @%DESIGN_PATH% -H "Content-Type:application/octet-stream" --cookie "JSESSIONID=%SESSION_ID%" --trace-ascii dist/curl-debug.log %SERVLET_URL%

