Title ER;CarianCombo-Mod
taskkill /IM eldenring.exe /F
timeout 3

tasklist /fi "ImageName eq Steam.exe" /fo csv 2>NUL | find /I "Steam.exe">NUL
if "%ERRORLEVEL%"=="0" .\modengine2_launcher.exe -t er -c .\config_eldenring;mod2.toml
pause
exit